"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/093A1820.jpg",
    "/093A1899.jpg",
    "/093A2126.jpg",
    "/093A2195.jpg",
    "/093A7314.jpg",
    "/093A7413.jpg",
    "/093A7530.jpg",
    "/093A7581.jpg",
    "/093A7640.jpg",
    "/093A7708.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen lg:h-screen w-full lg:w-screen bg-[#faf9f6] text-[#1a1a1a] font-mono selection:bg-[#ED1B24] selection:text-white flex flex-col p-3 md:p-4 lg:p-6 overflow-y-auto lg:overflow-hidden">
      {/* Outer border/frame wrapper to mimic the design container */}
      <div className="flex-grow w-full mx-auto max-w-9xl rounded-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 lg:h-full lg:min-h-0">
        
        {/* Mobile Logo (Visible only on mobile/tablet) */}
        <div className="lg:hidden p-4 pb-2 flex justify-center">
          <div className="relative w-full h-[70px] sm:h-[90px] cursor-pointer">
            <Image
              src="/LOGO.jpeg"
              alt="Tap & Tandoor Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Side: Showcase Image Slideshow (Full-height on desktop, top-aligned on mobile) */}
        <div className="relative h-[460px] sm:h-[580px] lg:h-full overflow-hidden group min-h-0 w-full bg-neutral-900">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Tap & Tandoor Showcase ${index + 1}`}
                fill
                priority={index === 0 || index === 1}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
        </div>

        {/* Right Side: Content Panel */}
        <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 xl:p-10 h-auto lg:h-full min-h-0 overflow-visible lg:overflow-y-auto">
          
          {/* Desktop Logo (Visible only on desktop) */}
          <div className="hidden lg:block my-2 lg:my-1">
            <div className="relative w-full h-[90px] lg:h-[120px] cursor-pointer">
              <Image
                src="/LOGO.jpeg"
                alt="Tap & Tandoor Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Description / Introduction Text */}
          <div className="my-3 lg:my-1.5 text-xs sm:text-sm xl:text-base leading-relaxed text-neutral-600 tracking-wide">
            <p>
              Tap &amp; Tandoor is a modern neighborhood bistro serving seasonal comfort food, crafted cocktails, and thoughtfully selected wines. A warm and relaxed dining experience in the heart of the city, inspired by local ingredients and classic European flavors.
            </p>
          </div>

          {/* Navigation & Action Buttons */}
          <div className="flex flex-col w-full text-sm sm:text-base my-2 lg:my-0">
            <div className="h-[1px] bg-neutral-200 w-full" />
            
            <Link 
              href="/menu" 
              className="py-3 lg:py-4 text-center text-base lg:text-lg font-bold tracking-[0.25em] hover:tracking-[0.35em] text-[#1a1a1a] hover:text-[#ED1B24] transition-all duration-300 ease-in-out block"
            >
              MENU
            </Link>

            {/* Small button below MENU for PDF download */}
            <a
              href="/Tap_N_Tandoor_main%20menu1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-[11px] text-neutral-500 hover:text-[#ED1B24] tracking-widest uppercase text-center block pb-2 transition-colors font-medium hover:underline"
            >
              ↓ Download Menu in PDF
            </a>
            
            <div className="h-[1px] bg-neutral-200 w-full" />
            
            <a 
              href="https://www.opentable.com/r/tap-n-tandoor-british-indian-sports-tavern-toronto" 
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 py-3 lg:py-4 text-center text-sm lg:text-base font-bold tracking-[0.3em] bg-black text-white hover:bg-[#ED1B24] transition-all duration-300 ease-in-out shadow hover:shadow-md block hover:-translate-y-0.5 transform"
            >
              RESERVATION
            </a>
            
            <div className="h-[1px] bg-neutral-200 w-full" />
          </div>

          {/* Info Sections: Location, Hours, & Footer links */}
          <div className="flex flex-col gap-4 text-xs xl:text-sm text-neutral-600 my-2 lg:my-0">
            {/* Address */}
            <div className="tracking-wide">
              <span className="font-semibold text-black block mb-0.5">LOCATION</span>
              <a 
                href="https://www.google.com/maps/place/Tap+N+Tandoor+%7C+British+Indian+Sports+Tavern/@43.6653167,-79.46511,17z/data=!3m1!4b1!4m6!3m5!1s0x882b359a1d174da1:0x337e214cdf0e9a7f!8m2!3d43.6653167!4d-79.46511!16s%2Fg%2F11nqtp9wwb!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black hover:underline transition-colors block"
              >
                2865 Dundas St W, Unit 1, Toronto, ON M6P 1Y9
              </a>
            </div>

            {/* Split Grid for Hours & Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Column 1: Opening Hours */}
              <div className="space-y-2">
                <div>
                  <span className="text-[9px] text-neutral-400 block uppercase tracking-wider">Tuesday to Sunday</span>
                  <span className="font-bold text-black text-xs xl:text-sm">12:00 PM – 10:00 PM</span>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block uppercase tracking-wider">Monday</span>
                  <span className="font-bold text-neutral-500 text-xs xl:text-sm">Closed</span>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="flex flex-col space-y-1 text-xs xl:text-sm">
                <a href="tel:+16474388445" className="hover:text-black hover:underline transition-colors w-fit">Contact</a>
                <a 
                  href="https://www.instagram.com/tapntandoor?igsi=MXZucDQ1cHVoY2JzNA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-black hover:underline transition-colors w-fit"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
