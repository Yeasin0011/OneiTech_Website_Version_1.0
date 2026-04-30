"use client";

import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import aftab from "@/clients/aftab.jpeg";
import bup from "@/clients/bup.png";
import eagles from "@/clients/eagles.jpeg";
import goldenHarvest from "@/clients/Goldenharvest.jpg";
import gs from "@/clients/gs.jpeg";
import hellenic from "@/clients/Hellenic.jpeg";
import rokomari from "@/clients/rokomari.jpeg";
import ugi from "@/clients/ugi.jpeg";
import NSU from "@/clients/NSU.jpeg";
import Expo from "@/clients/Expo.jpeg";
import RCL from "@/clients/RCL.jpeg";

export function Testimonial() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] relative z-1 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-semibold py-4">See what our clients have to say</h2>
      <div className="pb-6">
        <p className="text-sm sm:text-base text-gray-300 mb-3"></p>
        <InfiniteMovingCards
          items={clientCarouselItems}
          direction="right"
          speed="slow"
        />
      </div>
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

const clients = [
  { name: "Aftab Group", logo: aftab },
  { name: "Bangladesh University of Professionals", logo: bup },
  { name: "The Eagles Company", logo: eagles },
  { name: "Golden Harvest", logo: goldenHarvest },
  { name: "Grey Stone PVT", logo: gs },
  { name: "Hellenic Group", logo: hellenic },
  { name: "Rokomari Knit Design", logo: rokomari },
  { name: "Uttara Group of Industries", logo: ugi },
  { name: "North South University", logo: NSU },
  { name: "Expo Bangla", logo: Expo },
  { name: "Rider Cargo Limited", logo: RCL },
];

const clientCarouselItems = clients.map((client) => ({
  quote: (
    <div className="flex min-h-[130px] items-center justify-center">
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        className="h-20 w-auto object-contain sm:h-24 md:h-28"
        priority={false}
      />
    </div>
  ),
  name: client.name,
  title: "",
}));

