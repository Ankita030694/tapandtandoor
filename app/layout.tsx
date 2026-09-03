import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tapandtandoor.vercel.app/"),
  title: "Tap & Tandoor | Toronto Bistro",
  description:
    "Tap & Tandoor is a modern neighborhood bistro in Toronto serving seasonal comfort food, crafted cocktails, and thoughtfully selected wines in a warm and relaxed setting.",
  keywords: [
    "Tap & Tandoor",
    "Toronto restaurant",
    "Toronto bistro",
    "neighborhood bistro",
    "seasonal comfort food",
    "crafted cocktails",
    "Toronto dining",
    "Toronto restaurant reservations",
  ],
  openGraph: {
    title: "Tap & Tandoor | Modern Neighborhood Bistro in Toronto",
    description:
      "Seasonal comfort food, crafted cocktails, and thoughtfully selected wines in a warm neighborhood bistro in Toronto.",
    url: "https://tapandtandoor.vercel.app/",
    siteName: "Tap & Tandoor",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap & Tandoor | Modern Neighborhood Bistro in Toronto",
    description:
      "Seasonal comfort food, crafted cocktails, and thoughtfully selected wines in a warm neighborhood bistro in Toronto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
