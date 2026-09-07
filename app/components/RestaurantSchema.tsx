export default function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    "@id": "https://www.tapntandoor.ca/#restaurant",
    name: "Tap & Tandoor",
    alternateName: [
      "Tap N Tandoor",
      "Tap & Tandoor Toronto",
      "Tap N Tandoor British Indian Sports Tavern",
    ],
    description:
      "Tap & Tandoor is Toronto's premier British-Indian sports tavern and bistro located in The Junction, serving tandoori sizzlers, seasonal comfort food, smash burgers, craft beers, and cocktails.",
    url: "https://www.tapntandoor.ca",
    logo: "https://www.tapntandoor.ca/LOGO.jpeg",
    image: [
      "https://www.tapntandoor.ca/093A1820.jpg",
      "https://www.tapntandoor.ca/093A1899.jpg",
      "https://www.tapntandoor.ca/093A2126.jpg",
      "https://www.tapntandoor.ca/093A2195.jpg",
      "https://www.tapntandoor.ca/093A7314.jpg",
      "https://www.tapntandoor.ca/LOGO.jpeg",
    ],
    telephone: "+16474388445",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    servesCuisine: [
      "British-Indian",
      "Indian",
      "Gastropub",
      "Sports Bar",
      "Tandoori",
      "Comfort Food",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2865 Dundas St W, Unit 1",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M6P 1Y9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6653167,
      longitude: -79.46511,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "22:00",
      },
    ],
    hasMenu: "https://www.tapntandoor.ca/menu",
    acceptsReservations: "True",
    sameAs: [
      "https://www.instagram.com/tapntandoor",
      "https://www.opentable.com/r/tap-n-tandoor-british-indian-sports-tavern-toronto",
      "https://www.tripadvisor.ca/Restaurant_Review-g155019-d34566110-Reviews-Tap_Tandoor_Toronto-Toronto_Ontario.html",
      "https://www.blogto.com/eat_drink/2026/08/tap-tandoor-toronto/",
      "https://taptandoortoronto.com",
    ],
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.opentable.com/r/tap-n-tandoor-british-indian-sports-tavern-toronto",
          inLanguage: "en-CA",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "FoodEstablishmentReservation",
          name: "Reserve a Table",
        },
      },
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://taptandoortoronto.com/",
          inLanguage: "en-CA",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "Order",
          name: "Order Online",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
