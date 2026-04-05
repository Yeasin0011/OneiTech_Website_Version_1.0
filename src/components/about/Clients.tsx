"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import aftab from "@/clients/aftab.jpeg";
import bup from "@/clients/bup.png";
import eagles from "@/clients/eagles.jpeg";
import goldenHarvest from "@/clients/Goldenharvest.jpg";
import gs from "@/clients/gs.jpeg";
import hellenic from "@/clients/hellenic.webp";
import rokomari from "@/clients/rokomari.jpeg";
import ugi from "@/clients/ugi.jpeg";

const Clients = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setAnimationTriggered(true);
    } else {
      setAnimationTriggered(false);
    }
  }, [isIntersecting]);

  const clients = [
    { name: "Aftab", logo: aftab },
    { name: "BUP", logo: bup },
    { name: "The Eagles Company", logo: eagles },
    { name: "Golden Harvest", logo: goldenHarvest },
    { name: "Grey Stone PVT", logo: gs },
    { name: "Hellenic Group", logo: hellenic },
    { name: "Rokomari Knit Design", logo: rokomari },
    { name: "UGI", logo: ugi },
  ];

  const carouselItems = clients.map((client) => ({
    quote: (
      <div className="flex min-h-[100px] items-center justify-center">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          className="h-16 w-auto object-contain sm:h-20"
          priority={false}
        />
      </div>
    ),
    name: client.name,
    title: "",
  }));

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start min-h-screen w-full px-4 sm:px-6 py-12 sm:py-20 pt-24 sm:pt-32"
    >
      <motion.div
        key={animationTriggered ? "clients-animate" : "clients-initial"}
        initial={{ opacity: 0.5, y: 100 }}
        animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">Our Clients</h2>
        <p className="text-lg text-center mb-12 px-6 text-gray-300">
          Trusted by organizations across education, retail, logistics, and enterprise services.
        </p>

        <div className="w-full">
          <InfiniteMovingCards
            items={carouselItems}
            direction="right"
            speed="slow"
            className="mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
