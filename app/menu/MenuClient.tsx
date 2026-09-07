"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";

export default function MenuClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.tags &&
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    return matchesCategory && matchesSearch;
  });

  const categoriesToRender =
    selectedCategory === "All"
      ? MENU_CATEGORIES.filter((c) => c !== "All")
      : [selectedCategory];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-mono selection:bg-[#ED1B24] selection:text-white p-3 sm:p-6 lg:p-8">
      {/* Menu Container */}
      <div className="max-w-5xl mx-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-neutral-200 mb-8">
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold tracking-widest text-[#1a1a1a] hover:text-[#ED1B24] transition-colors flex items-center gap-2 uppercase"
          >
            <span>←</span> Back to Home
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/Tap_N_Tandoor_main%20menu1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-wider uppercase bg-black text-white hover:bg-[#ED1B24] transition-all px-4 py-2 rounded-sm"
            >
              Download PDF Menu ↓
            </a>
            <a
              href="https://www.opentable.com/r/tap-n-tandoor-british-indian-sports-tavern-toronto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-wider uppercase bg-[#ED1B24] text-white hover:bg-black transition-all px-4 py-2 rounded-sm"
            >
              Reserve Table
            </a>
          </div>
        </div>

        {/* Brand Header */}
        <div className="text-center mb-10">
          <div className="relative w-48 sm:w-64 h-16 sm:h-20 mx-auto mb-3 cursor-pointer">
            <Link href="/">
              <Image
                src="/LOGO.jpeg"
                alt="Tap & Tandoor"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase text-neutral-900 mb-2">
            Food &amp; Drinks Menu
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
            Freshly prepared British-Indian specialties, charcoal tandoori grills, curries, and burgers at 2865 Dundas St W, Toronto.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-neutral-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-[#ED1B24] text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search dish, vegan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#ED1B24]"
              />
            </div>
          </div>

          {/* Dietary Legend */}
          <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-wrap gap-4 text-[11px] text-neutral-500 justify-center md:justify-start">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> (v) Vegetarian
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> (gf) Gluten-Free
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#ED1B24]"></span> ★ Chef&apos;s Special
            </span>
          </div>
        </div>

        {/* Menu Listings */}
        <div className="space-y-10 mb-16">
          {categoriesToRender.map((category) => {
            const items = filteredItems.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-lg sm:text-xl font-bold tracking-wider text-neutral-900 uppercase">
                    {category}
                  </h2>
                  <div className="flex-grow h-[1px] bg-neutral-300" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-md border border-neutral-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-baseline gap-4 mb-1">
                          <h3 className="font-bold text-sm sm:text-base text-neutral-900">
                            {item.name}
                          </h3>
                          <span className="font-bold text-sm sm:text-base text-[#ED1B24] shrink-0">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-neutral-100">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700 uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-white rounded border border-neutral-200 p-6">
              <p className="text-sm text-neutral-600 mb-3">
                No menu items found matching &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-3 py-1.5 text-xs font-bold uppercase bg-black text-white hover:bg-[#ED1B24] rounded-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA Footer */}
        <div className="text-center py-8 border-t border-neutral-200 text-xs text-neutral-500 space-y-2">
          <p>
            Tap &amp; Tandoor • 2865 Dundas St W, Unit 1, Toronto • (647) 438-8445
          </p>
          <div className="flex justify-center gap-4 text-neutral-700 font-semibold pt-1">
            <Link href="/" className="hover:text-[#ED1B24]">
              Home
            </Link>
            <span>•</span>
            <a
              href="/Tap_N_Tandoor_main%20menu1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ED1B24]"
            >
              PDF Menu
            </a>
            <span>•</span>
            <a
              href="https://www.opentable.com/r/tap-n-tandoor-british-indian-sports-tavern-toronto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ED1B24]"
            >
              OpenTable
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
