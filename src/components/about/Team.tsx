"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import MinhazPhoto from "@/teamphotos/Minhazreal.jpeg";
import OheePhoto from "@/teamphotos/Ohee.jpeg";
import ZamanPhoto from "@/teamphotos/Zaman.jpeg";
import SadiaPhoto from "@/teamphotos/Sadia.jpeg";
import YeasinPhoto from "@/teamphotos/Yeasin.jpeg";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData | string;
  bio: string;
};

const Team = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setAnimationTriggered(true);
    } else {
      setAnimationTriggered(false);
    }
  }, [isIntersecting]);

  const teamMembers: TeamMember[] = [
    {
      id: 4,
      name: "Minhazur Rahman",
      role: "Operations Manager",
      image: MinhazPhoto,
      bio: "Minhaz leads operations with strong ownership, helping the team deliver consistent quality for every client engagement.",
    },
    {
      id: 2,
      name: "Nazim Uddin Ahmed",
      role: "Business Development Manager",
      image: OheePhoto,
      bio: "Ohee drives business growth through clear communication, trusted relationships, and long-term client value.",
    },
    {
      id: 3,
      name: "Tahmid Zaman",
      role: "Product Development Manager",
      image: ZamanPhoto,
      bio: "Zaman guides product delivery with a learning mindset, ensuring solutions stay practical, reliable, and user-focused.",
    },
    {
      id: 5,
      name: "Sadia",
      role: "Account and Finance",
      image: SadiaPhoto,
      bio: "Sadia maintains financial clarity and accountability, supporting smooth collaboration across teams and clients.",
    },
    {
      id: 6,
      name: "Ahmad Adnan",
      role: "Senior Developer",
      image: "A",
      bio: "Adnan builds dependable solutions with clean engineering practices and a strong focus on delivery quality.",
    },
    {
      id: 1,
      name: "Nizam Uddin Ahmed",
      role: "Chief Advisor",
      image: "N",
      bio: "Nizam provides strategic guidance that strengthens ownership, execution, and sustainable project outcomes.",
    },
    {
      id: 7,
      name: "Yeasin Ibne Kadir",
      role: "Junior Developer",
      image: YeasinPhoto,
      bio: "Yeasin supports the development team with curiosity and continuous learning, contributing to clean and reliable delivery.",
    },
  ];

  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start min-h-screen w-full px-4 sm:px-6 py-12 sm:py-20 pt-24 sm:pt-32"
    >
      <motion.div
        key={animationTriggered ? "team-animate" : "team-initial"}
        initial={{ opacity: 0.5, y: 100 }}
        animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Team Members & Culture</h2>
        <p className="text-lg text-center mb-12">
          We are a collaborative team that values ownership, continuous learning, and quality in every client engagement.
        </p>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              animationTriggered
                ? {
                    opacity: 1,
                    y: 0,
                    x: ["0%", "-50%"],
                  }
                : { opacity: 0, y: 30 }
            }
            transition={
              animationTriggered
                ? {
                    opacity: { duration: 0.6, ease: "easeOut" },
                    y: { duration: 0.6, ease: "easeOut" },
                    x: {
                      duration: 24,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }
                : { duration: 0.4 }
            }
            className="flex w-max gap-6 sm:gap-8"
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="w-[260px] sm:w-[280px] flex-shrink-0 flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg mb-4 flex items-center justify-center text-gray-600 overflow-hidden">
                  {typeof member.image === "string" ? (
                    <span>{member.image}</span>
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-teal-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">{member.bio}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
