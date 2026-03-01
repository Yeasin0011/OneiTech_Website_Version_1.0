"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/home/Hero";
import { Services } from "../../components/home/Services";
import Expertise from "../../components/home/Expertise";
import { Choice } from "@/components/home/Choice";
import { Testimonial } from "@/components/home/Testimonial";
import Featured from "@/components/home/Featured";
import { Softwares } from "@/components/home/Softwares";
import ContactHome from "@/components/home/ContactHome";
import { NavbarMenu } from "@/components/Navbar";

/* ── Mobile layout: plain scrollable page ───────────────────── */
function MobileHome() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <NavbarMenu />
      <div className="pt-14">
        <Hero />
        <Services />
        <Softwares />
        <Choice />
        <Testimonial />
        <Featured />
        <Expertise />
        <ContactHome />
      </div>
    </div>
  );
}

/* ── Desktop layout: fullpage swipe sections ────────────────── */
const sectionNames = ["hero", "features", "softwares", "choose", "testimonial", "featured", "expertise", "contact"] as const;

function DesktopHome() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const activeSectionRef = useRef(0);

  const navigate = (direction: number) => {
    if (isAnimatingRef.current) return;
    const next = Math.min(Math.max(activeSectionRef.current + direction, 0), sectionNames.length - 1);
    if (next !== activeSectionRef.current) {
      setScrollDirection(direction);
      setActiveSection(next);
      activeSectionRef.current = next;
      isAnimatingRef.current = true;
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => navigate(e.deltaY > 0 ? 1 : -1);
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Side dots */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50">
        {sectionNames.map((section, index) => (
          <div
            key={section}
            className="relative mb-2 flex items-center"
            onClick={() => {
              if (isAnimatingRef.current) return;
              const dir = index > activeSectionRef.current ? 1 : -1;
              setScrollDirection(dir);
              setActiveSection(index);
              activeSectionRef.current = index;
              isAnimatingRef.current = true;
              setIsAnimating(true);
            }}
          >
            <div className="flex items-center justify-center w-11 h-11 cursor-pointer">
              <motion.div
                className={`w-3 h-3 rounded-full ${activeSection === index ? "bg-teal-400" : "bg-gray-800"}`}
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <motion.div
              className="absolute left-11 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 pointer-events-none"
              whileHover={{ opacity: 1 }}
            >
              {section}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="h-screen">
        {sectionNames.map((section, index) => (
          <DesktopSection
            key={section}
            id={section}
            name={section}
            isActive={activeSection === index}
            scrollDirection={scrollDirection}
            onAnimationStart={() => { isAnimatingRef.current = true; setIsAnimating(true); }}
            onAnimationComplete={() => { isAnimatingRef.current = false; setIsAnimating(false); }}
          />
        ))}
      </div>
    </div>
  );
}

interface DesktopSectionProps {
  id: string;
  name: string;
  isActive: boolean;
  scrollDirection: number;
  onAnimationStart: () => void;
  onAnimationComplete: () => void;
}

const DesktopSection: React.FC<DesktopSectionProps> = ({ id, name, isActive, scrollDirection, onAnimationStart, onAnimationComplete }) => {
  const variants = {
    hidden:  { opacity: 0, y: scrollDirection > 0 ? 50 : -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit:    { opacity: 0, y: scrollDirection > 0 ? -50 : 50, scale: 0.95 },
  };
  return (
    <motion.div
      id={id}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto overflow-x-hidden"
      initial="hidden"
      animate={isActive ? "visible" : "exit"}
      variants={variants}
      transition={{ duration: 1 }}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >
      {isActive && <DesktopSectionContent name={name} />}
    </motion.div>
  );
};

const DesktopSectionContent: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "hero":        return <Hero />;
    case "features":   return <Services />;
    case "softwares":  return <Softwares />;
    case "choose":     return <Choice />;
    case "testimonial":return <Testimonial />;
    case "featured":   return <Featured />;
    case "expertise":  return <Expertise />;
    case "contact":    return <ContactHome />;
    default:           return null;
  };
};

/* ── Root: pick layout based on screen width ────────────────── */
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted) return null;
  return isMobile ? <MobileHome /> : <DesktopHome />;
}