export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  tags?: ("Vegetarian" | "Gluten-Free" | "Chef's Special" | "Spicy")[];
  category: "Appetizers" | "Handhelds & Mains" | "Tandoor" | "Curries & Sides" | "Chicken Wings" | "Desserts";
}

export const MENU_CATEGORIES = [
  "All",
  "Appetizers",
  "Handhelds & Mains",
  "Tandoor",
  "Curries & Sides",
  "Chicken Wings",
  "Desserts",
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: "crispy-cauliflower",
    name: "Crispy Cauliflower",
    price: "$16.50",
    description: "Cauliflower florets tossed in sweet chilli & sambal sauce, topped with sesame sauce.",
    tags: ["Vegetarian", "Gluten-Free"],
    category: "Appetizers",
  },
  {
    id: "kfc",
    name: "KFC (Keralan Fried Chicken)",
    price: "$17.00",
    description: "Keralan style fried chicken, tossed in sweet & spicy chilli sauce, topped with sesame seeds.",
    tags: ["Chef's Special", "Spicy"],
    category: "Appetizers",
  },
  {
    id: "tandoori-nachos",
    name: "Tandoori Nachos",
    price: "$19.00",
    description: "Mixed cheese, corn & bean salsa, guacamole, green onions, pico de gallo, jalapeños. With the choice of chicken tikka or paneer tikka.",
    tags: ["Chef's Special"],
    category: "Appetizers",
  },
  {
    id: "coconut-calamari",
    name: "Coconut Calamari",
    price: "$18.00",
    description: "Lightly seasoned calamari rings, dusted and fried to a gentle crisp, drizzled with toasted coconut. Served with zesty Cajun aioli.",
    category: "Appetizers",
  },
  {
    id: "samosa",
    name: "Samosa",
    price: "$10.00",
    description: "Vegetable samosa with spiced red potatoes, greens and herbs, sweet yogurt and chutneys.",
    tags: ["Vegetarian"],
    category: "Appetizers",
  },
  {
    id: "baked-brie",
    name: "Baked Brie",
    price: "$18.00",
    description: "Served with crispy naan, mango chutney & sliced apples.",
    tags: ["Vegetarian"],
    category: "Appetizers",
  },
  {
    id: "avocado-papdi-chaat",
    name: "Avocado Papdi Chaat",
    price: "$14.00",
    description: "Wheat crisps, avocado, chickpeas, sev, potatoes, yogurt, chutneys, roasted cumin powder.",
    tags: ["Vegetarian"],
    category: "Appetizers",
  },
  {
    id: "mango-shrimps",
    name: "Mango Shrimps",
    price: "$18.00",
    description: "Pickled green mango, coconut, curry leaves.",
    tags: ["Gluten-Free"],
    category: "Appetizers",
  },
  {
    id: "tandoori-chicken-app",
    name: "Tandoori Chicken",
    price: "$18.00",
    description: "Indian spices & yogurt marination, chargrilled to perfection.",
    tags: ["Gluten-Free"],
    category: "Appetizers",
  },

  // Handhelds & Mains
  {
    id: "lamb-bao-buns",
    name: "Roast Lamb Bao Buns",
    price: "$18.00",
    description: "Steamed buns filled with roast honey lamb-leg marinated for hours and grilled twice, coriander with green salad and topped with sriracha.",
    tags: ["Chef's Special"],
    category: "Handhelds & Mains",
  },
  {
    id: "smash-burger",
    name: "Smash Burger",
    price: "$18.00",
    description: "Double Oklahoma patty, aged cheddar, smash sauce. Served with fries or house salad.",
    category: "Handhelds & Mains",
  },
  {
    id: "goan-fried-chicken-burger",
    name: "Goan Fried Chicken Burger",
    price: "$18.25",
    description: "Crispy chicken patty, melted cheese, lime-onion coriander salad, and roasted garlic-lime aioli on a toasted bun.",
    tags: ["Chef's Special"],
    category: "Handhelds & Mains",
  },
  {
    id: "mrs-singh-veggie-burger",
    name: "Mrs. Singh Veggie Burger",
    price: "$16.25",
    description: "Potato masala patty, cottage cheese, onion, signature sauce, onion ring. Served with fries or house salad.",
    tags: ["Vegetarian"],
    category: "Handhelds & Mains",
  },
  {
    id: "tandoori-taco",
    name: "Tandoori Taco",
    price: "$18.00",
    description: "Taco slaw, pico, pickled onion and mole, topped with lime crema and cilantro. Choice of chicken tikka or paneer tikka.",
    category: "Handhelds & Mains",
  },
  {
    id: "fish-and-chips",
    name: "Fish & Chips",
    price: "$18.00",
    description: "Beer-battered haddock, hand cut fries, house tartare sauce.",
    category: "Handhelds & Mains",
  },

  // Tandoor
  {
    id: "steak-kebab",
    name: "Steak Kebab",
    price: "$29.00",
    description: "Flank steak sautéed with onions and peppers, with naan bread and fries.",
    tags: ["Chef's Special"],
    category: "Tandoor",
  },
  {
    id: "piri-piri-goan-chicken",
    name: "Piri Piri Goan Chicken",
    price: "$27.00",
    description: "Half chicken, charcoal grilled, piri piri sauce, hand cut fries.",
    tags: ["Gluten-Free", "Spicy"],
    category: "Tandoor",
  },
  {
    id: "butter-chicken-chops",
    name: "Butter Chicken Chops",
    price: "$24.00",
    description: "Tandoori chicken chops in makhani sauce, served with garlic naan.",
    tags: ["Chef's Special"],
    category: "Tandoor",
  },
  {
    id: "mutton-seekh-kebab",
    name: "Mutton Seekh Kebab",
    price: "$19.00",
    description: "With pau bhaji dressing — our chef's signature tandoori dish, served with a side of naan bread.",
    tags: ["Chef's Special"],
    category: "Tandoor",
  },
  {
    id: "tandoori-paneer",
    name: "Tandoori Paneer",
    price: "$19.00",
    description: "A fillet of paneer, buttery tomato and real dairy cream reduction, with naan bread.",
    tags: ["Vegetarian"],
    category: "Tandoor",
  },

  // Curries & Sides
  {
    id: "butter-chicken-curry",
    name: "Butter Chicken & Naan",
    price: "$19.00",
    description: "Tender chicken simmered in rich creamy tomato and fenugreek gravy, served with fresh naan.",
    category: "Curries & Sides",
  },
  {
    id: "lamb-rogan-josh",
    name: "Lamb Rogan Josh & Naan",
    price: "$19.00",
    description: "Slow-cooked aromatic lamb curry infused with Kashmiri spices, served with fresh naan.",
    category: "Curries & Sides",
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani & Naan",
    price: "$18.00",
    description: "Slow-cooked black lentils, cream, and butter, served with fresh naan.",
    tags: ["Vegetarian"],
    category: "Curries & Sides",
  },
  {
    id: "chana-masala",
    name: "Chana Masala & Naan",
    price: "$18.00",
    description: "Chickpeas simmered in tangy tomato and onion masala, served with fresh naan.",
    tags: ["Vegetarian"],
    category: "Curries & Sides",
  },
  {
    id: "naan-selection",
    name: "Plain Naan / Garlic Naan / Butter Naan",
    price: "$4.95",
    description: "Freshly baked in traditional tandoor clay oven.",
    tags: ["Vegetarian"],
    category: "Curries & Sides",
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    price: "$8.00",
    description: "Crispy battered golden onion rings.",
    tags: ["Vegetarian"],
    category: "Curries & Sides",
  },
  {
    id: "hand-cut-fries",
    name: "Hand Cut House Fries",
    price: "$8.00",
    description: "Crispy seasoned hand-cut potatoes.",
    tags: ["Vegetarian"],
    category: "Curries & Sides",
  },
  {
    id: "house-salad",
    name: "House Salad",
    price: "$8.00",
    description: "Fresh crisp greens with house dressing.",
    tags: ["Vegetarian", "Gluten-Free"],
    category: "Curries & Sides",
  },
  {
    id: "papadams",
    name: "Selection of Papadams",
    price: "$10.00",
    description: "Assorted crispy lentil crisps with house chutneys.",
    tags: ["Vegetarian", "Gluten-Free"],
    category: "Curries & Sides",
  },

  // Chicken Wings
  {
    id: "chicken-wings-10",
    name: "Chicken Wings (10 pc)",
    price: "$18.00",
    description: "Served with carrots, celery, and blue cheese. Flavors: Buffalo, Honey Garlic, Piri Piri, or Signature Tandoori Spice.",
    category: "Chicken Wings",
  },
  {
    id: "chicken-wings-20",
    name: "Chicken Wings (20 pc)",
    price: "$34.50",
    description: "Served with carrots, celery, and blue cheese. Flavors: Buffalo, Honey Garlic, Piri Piri, or Signature Tandoori Spice.",
    category: "Chicken Wings",
  },

  // Desserts
  {
    id: "rasmalai",
    name: "Rasmalai",
    price: "$8.00",
    description: "Delicate soft cottage cheese dumplings soaked in sweetened cardamom milk, garnished with pistachios.",
    tags: ["Vegetarian"],
    category: "Desserts",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun with Ice Cream",
    price: "$8.00",
    description: "Warm golden milk-solid dumplings in aromatic saffron-rose syrup, served with vanilla ice cream.",
    tags: ["Vegetarian"],
    category: "Desserts",
  },
];
