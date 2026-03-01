"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

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
    {
      name: "[Client Name 1]",
      logo: "[Logo Placeholder 1]",
    },
    {
      name: "[Client Name 2]",
      logo: "[Logo Placeholder 2]",
    },
    {
      name: "[Client Name 3]",
      logo: "[Logo Placeholder 3]",
    },
    {
      name: "[Client Name 4]",
      logo: "[Logo Placeholder 4]",
    },
    {
      name: "[Client Name 5]",
      logo: "[Logo Placeholder 5]",
    },
    {
      name: "[Client Name 6]",
      logo: "[Logo Placeholder 6]",
    },
    {
      name: "[Client Name 7]",
      logo: "[Logo Placeholder 7]",
    },
    {
      name: "[Client Name 8]",
      logo: "[Logo Placeholder 8]",
    },
  ];

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
        <p className="text-lg text-center mb-12 px-6">
          [Placeholder: Brief description about the types of clients you work with and the industries you serve.]
        </p>

        <div className="w-full">
          <InfiniteMovingCards
            items={clients.map((client) => ({
              quote: client.logo,
              name: client.name,
              title: "Client Logo",
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Clients;
