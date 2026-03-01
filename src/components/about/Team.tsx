"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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

  const teamMembers = [
    {
      id: 1,
      name: "[Founder/CEO Name]",
      role: "[Position]",
      image: "[Placeholder image]",
      bio: "[Team member bio placeholder]",
    },
    {
      id: 2,
      name: "[Team Member Name]",
      role: "[Position]",
      image: "[Placeholder image]",
      bio: "[Team member bio placeholder]",
    },
    {
      id: 3,
      name: "[Team Member Name]",
      role: "[Position]",
      image: "[Placeholder image]",
      bio: "[Team member bio placeholder]",
    },
    {
      id: 4,
      name: "[Team Member Name]",
      role: "[Position]",
      image: "[Placeholder image]",
      bio: "[Team member bio placeholder]",
    },
  ];

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
          [Placeholder: Describe your company culture, values, and what makes your team special.]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={animationTriggered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                delay: 0.3 + member.id * 0.1,
                duration: 0.6,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg mb-4 flex items-center justify-center text-gray-600">
                {member.image}
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-teal-400 mb-2">{member.role}</p>
              <p className="text-sm text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
