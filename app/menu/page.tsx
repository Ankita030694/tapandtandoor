import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Food & Drinks Menu | Tap & Tandoor Toronto",
  description:
    "Explore the full food and drink menu for Tap & Tandoor in Toronto's Junction. Featuring charcoal tandoori grills, butter chicken, smash burgers, lamb bao buns, wings, and naan.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Food & Drinks Menu | Tap & Tandoor Toronto",
    description:
      "Tandoori sizzlers, seasonal comfort food, smash burgers, curries, and craft beers in The Junction, Toronto.",
    url: "https://www.tapntandoor.ca/menu",
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
