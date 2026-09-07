import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RestaurantSchema from "./components/RestaurantSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ED1B24",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tapntandoor.ca"),
  title: {
    default: "Tap & Tandoor | British-Indian Sports Tavern & Bistro in Toronto",
    template: "%s | Tap & Tandoor Toronto",
  },
  description:
    "Tap & Tandoor is Toronto's premier British-Indian sports tavern located in The Junction (2865 Dundas St W). Enjoy charcoal tandoori grills, craft beer, smash burgers, authentic curries, and live sports.",
  keywords: [
    "Tap & Tandoor",
    "Tap N Tandoor",
    "Tap and Tandoor Toronto",
    "British Indian sports bar Toronto",
    "The Junction restaurants",
    "2865 Dundas St W",
    "Toronto Indian bistro",
    "tandoori sizzlers Toronto",
    "sports tavern Toronto",
    "craft beer and curry",
    "Toronto dining reservations",
  ],
  authors: [{ name: "Tap & Tandoor" }],
  creator: "Tap & Tandoor",
  publisher: "Tap & Tandoor",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tap & Tandoor | British-Indian Sports Tavern & Bistro in Toronto",
    description:
      "Charcoal-fired tandoori grills, crafted cocktails, smash burgers, and live sports in the heart of The Junction, Toronto.",
    url: "https://www.tapntandoor.ca",
    siteName: "Tap & Tandoor",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/LOGO.jpeg",
        width: 1200,
        height: 630,
        alt: "Tap & Tandoor British-Indian Sports Tavern Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap & Tandoor | British-Indian Sports Tavern in Toronto",
    description:
      "Charcoal-fired tandoori grills, crafted cocktails, smash burgers, and live sports in The Junction, Toronto.",
    images: ["/LOGO.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": "43.6653167;-79.46511",
    ICBM: "43.6653167, -79.46511",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <RestaurantSchema />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf9f6] text-[#1a1a1a] selection:bg-[#ED1B24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
