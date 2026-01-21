// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

const cards = [
  {
    id: 1,
    title: "Your Space",
    subtitle: "Unique Life",
    description: "A cozy and personalized living space that adapts to your lifestyle.",
    buttonText: "Explore Items",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Ice cream",
    tags: ["Interior", "Cozy", "Modern"],
    price: "$1200",
    rating: 4.8,
    date: "2026-02-10",
    link: "/space/your-space"
  },
  {
    id: 2,
    title: "Bitiyor",
    subtitle: "Elements Style",
    description: "Get the latest style elements before the offer expires today!",
    buttonText: "Explore Items",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Green apples",
    tags: ["Fashion", "Limited", "Trendy"],
    price: "$350",
    rating: 4.3,
    date: "2026-01-20",
    link: "/style/elements"
  },
  {
    id: 3,
    title: "Culinary Delights",
    subtitle: "Gourmet Meals",
    description: "Discover gourmet meals made by top chefs, delivered to your doorstep.",
    buttonText: "Order Now",
    image: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Ham dish",
    tags: ["Food", "Gourmet", "Delivery"],
    price: "$45",
    rating: 4.9,
    date: "2026-01-22",
    link: "/food/gourmet-meals"
  },
  {
    id: 4,
    title: "Tech Innovations",
    subtitle: "Latest Gadgets",
    description: "Explore the newest gadgets and innovations in technology today.",
    buttonText: "Check Deals",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Gadget setup",
    tags: ["Tech", "Gadgets", "Innovation"],
    price: "$899",
    rating: 4.6,
    date: "2026-02-05",
    link: "/tech/latest-gadgets"
  },
  {
    id: 5,
    title: "Fitness Essentials",
    subtitle: "Stay Healthy",
    description: "Everything you need to maintain a healthy and active lifestyle.",
    buttonText: "Shop Now",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Fitness gear",
    tags: ["Fitness", "Health", "Active"],
    price: "$250",
    rating: 4.7,
    date: "2026-02-01",
    link: "/fitness/essentials"
  }
];




app.get("/api/cards", (req, res) => {
  const success = true;
  if (success) {
    res.status(200).json({ cards });
  } else {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Mock API server running on http://localhost:${port}`);
});