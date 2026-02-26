"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div className="mx-16 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] relative z-1 overflow-hidden">
      <h2 className="text-3xl font-semibold py-4">See what our users have to say</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "OneiTech has revolutionized the way we handle e-commerce. The platform is incredibly user-friendly, and the customer support is top-notch.",
    name: "Anika Rahman",
    title: "",
  },
  {
    quote:
      "Thanks to OneiTech, our sales have doubled in the last quarter. The seamless integration with our existing systems made the transition smooth and efficient.",
    name: "Abderrehmane Bouali",
    title: "",
  },
  {
    quote:
      "The custom solutions provided by OneiTech perfectly matched our business needs. The team was extremely responsive and professional.",
    name: "Farhana Haque",
    title: "",
  },
  {
    quote:
      "We've seen remarkable growth since partnering with OneiTech. Their innovative approach and dedication to client success are truly commendable.",
    name: "Carlos Hernandez",
    title: "",
  },
  {
    quote:
      "OneiTech has been instrumental in streamlining our operations. Their robust platform and exceptional support have made a significant difference in our business.",
    name: "Tanvir Ahmed",
    title: "",
  },
  {
    quote:
      "As a small business owner, I was looking for a reliable tech partner, and OneiTech exceeded my expectations. Their platform is intuitive and powerful.",
    name: "Emma Johnson",
    title: "",
  },
];

