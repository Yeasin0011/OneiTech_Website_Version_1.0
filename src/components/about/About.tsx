"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setAnimationTriggered(true);
    } else {
      setAnimationTriggered(false);
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start min-h-screen w-full px-6 py-20 pt-32"
    >
      <motion.div
        key={animationTriggered ? "about-animate" : "about-initial"}
        initial={{ opacity: 0, y: 20 }}
        animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="w-full max-w-4xl"
      >
        <div className="text-center space-y-12">
          {/* Main Title */}
          <div>
            <h1 className="text-5xl font-bold mb-4">About OneiTech</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto"></div>
          </div>

          {/* Introduction */}
          <div className="text-lg leading-relaxed space-y-4">
            <p className="text-gray-300">
              We are innovators, problem-solvers, and future-shapers. Our mission is simple yet powerful: <span className="text-teal-400 font-semibold">Innovate. Evolve. Transform.</span>
            </p>
            <p className="text-gray-400">
              We specialize in delivering technology that doesn't just meet today's challenges, but anticipates tomorrow's opportunities. From startups to enterprises, we unlock your full potential through customized, scalable, and forward-thinking digital solutions.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={animationTriggered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-left space-y-3 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-teal-400/20"
            >
              <h3 className="text-2xl font-bold text-teal-400">Mission</h3>
              <p className="text-gray-300">
                At OneiTech, we envision a future where technology powers every transformation. We create future-ready, scalable, and intelligent solutions that enable organizations to stay ahead in a rapidly changing world.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={animationTriggered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-left space-y-3 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-400/20"
            >
              <h3 className="text-2xl font-bold text-cyan-400">Vision</h3>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-cyan-400">•</span> Tech for Tomorrow - Anticipate future needs</li>
                <li><span className="text-cyan-400">•</span> Foster Transformation - Enable digital-first organizations</li>
                <li><span className="text-cyan-400">•</span> Empower Innovation - Unlock creativity and growth</li>
              </ul>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-8 border-t border-gray-700"
          >
            <p className="text-xl text-gray-300 italic">
              "Don't just adapt to the future. <span className="text-teal-400 font-semibold">Build it.</span>"
            </p>
            <p className="text-gray-400 mt-4">
              We engineer tomorrow's edge. We deliver scalable, intelligent tech that turns your biggest challenges into your greatest competitive advantages.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
