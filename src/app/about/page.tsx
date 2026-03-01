"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "@/components/about/About";
import Team from "@/components/about/Team";
import Clients from "@/components/about/Clients";
import { NavbarMenu } from "@/components/Navbar";

export default function AboutPage() {
  const sections = ["about", "team", "clients"];
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const startYRef = useRef(0);

  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash.slice(1);
    if (hash) {
      const sectionIndex = sections.indexOf(hash);
      if (sectionIndex !== -1) {
        setActiveSection(sectionIndex);
      }
    }
  }, []);

  const handleScroll = (event: WheelEvent | TouchEvent) => {
    if (isAnimating) return;

    let direction: number;
    if (event instanceof WheelEvent) {
      direction = event.deltaY > 0 ? 1 : -1;
    } else {
      const touch = event.touches[0] || event.changedTouches[0];
      const diff = startYRef.current - touch.clientY;
      if (Math.abs(diff) < 30) return; // Minimum swipe threshold
      direction = diff > 0 ? 1 : -1;
    }

    const nextSection = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
    if (nextSection !== activeSection) {
      setScrollDirection(direction);
      setActiveSection(nextSection);
      setIsAnimating(true);
      // Update URL hash
      window.history.pushState(null, "", `#${sections[nextSection]}`);
    }
  };

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      startYRef.current = touch.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      handleScroll(event);
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeSection, isAnimating]);

  const handleClick = (index: number) => {
    if (isAnimating) return;

    setActiveSection(index);
    setIsAnimating(true);
    // Update URL hash
    window.history.pushState(null, "", `#${sections[index]}`);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <NavbarMenu />
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 hidden md:block">
        {sections.map((section, index) => (
          <div
            key={section}
            className="relative mb-2 flex items-center"
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-center w-11 h-11 cursor-pointer">
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  activeSection === index ? "bg-teal-400" : "bg-gray-800"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <motion.div
              className="absolute left-11 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 pointer-events-none"
              whileHover={{ opacity: 1 }}
            >
              {section}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="h-screen">
        {sections.map((section, index) => (
          <Section
            key={section}
            id={section}
            name={section}
            isActive={activeSection === index}
            scrollDirection={scrollDirection}
            setIsAnimating={setIsAnimating}
          />
        ))}
      </div>
    </div>
  );
}

interface SectionProps {
  id: string;
  name: string;
  isActive: boolean;
  scrollDirection: number;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

const Section: React.FC<SectionProps> = ({
  id,
  name,
  isActive,
  scrollDirection,
  setIsAnimating,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection > 0 ? 50 : -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: scrollDirection > 0 ? -50 : 50,
      scale: 0.95
    },
  };

  return (
    <motion.div
      id={id}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto overflow-x-hidden"
      initial="hidden"
      animate={isActive ? "visible" : "exit"}
      variants={variants}
      transition={{ duration: 1 }}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >
      {isActive && <SectionContent name={name} />}
    </motion.div>
  );
};

interface SectionContentProps {
  name: string;
}

const SectionContent: React.FC<SectionContentProps> = ({ name }) => {
  switch (name) {
    case "about":
      return <About />;
    case "team":
      return <Team />;
    case "clients":
      return <Clients />;
    case "contact":
      return (
        <div>
          <h1 className="text-4xl mb-4">Section</h1>
          <p className="text-lg">
            This is a default section with some placeholder content.
          </p>
        </div>
      );
  }
};
