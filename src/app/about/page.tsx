"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "@/components/about/About";
import Team from "@/components/about/Team";
import Clients from "@/components/about/Clients";
import { NavbarMenu } from "@/components/Navbar";

/* ── Mobile layout: plain scrollable page ───────────────────── */
function MobileAbout() {
  useEffect(() => {
    // Reset to the first section when switching from desktop hash-based navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <NavbarMenu />
      <div className="pt-14">
        <section id="about">
          <About />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="clients">
          <Clients />
        </section>
      </div>
    </div>
  );
}

/* ── Desktop layout: fullpage swipe sections ────────────────── */
const sectionNames = ["about", "team", "clients"] as const;

function DesktopAbout() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const isAnimatingRef = useRef(false);
  const activeSectionRef = useRef(0);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const idx = (["about", "team", "clients"]).indexOf(hash);
    if (idx !== -1) {
      setActiveSection(idx);
      activeSectionRef.current = idx;
    }
  }, []);

  const navigate = (direction: number) => {
    if (isAnimatingRef.current) return;
    const next = Math.min(Math.max(activeSectionRef.current + direction, 0), sectionNames.length - 1);
    if (next !== activeSectionRef.current) {
      setScrollDirection(direction);
      setActiveSection(next);
      activeSectionRef.current = next;
      isAnimatingRef.current = true;
      window.history.pushState(null, "", `#${sectionNames[next]}`);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => navigate(e.deltaY > 0 ? 1 : -1);
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (index: number) => {
    if (isAnimatingRef.current) return;
    const dir = index > activeSectionRef.current ? 1 : -1;
    setScrollDirection(dir);
    setActiveSection(index);
    activeSectionRef.current = index;
    isAnimatingRef.current = true;
    window.history.pushState(null, "", `#${sectionNames[index]}`);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <NavbarMenu />
      <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50">
        {sectionNames.map((section, index) => (
          <div key={section} className="relative mb-2 flex items-center" onClick={() => goTo(index)}>
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
        {sectionNames.map((section, index) => {
          const variants = {
            hidden:  { opacity: 0, y: scrollDirection > 0 ? 50 : -50, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
            exit:    { opacity: 0, y: scrollDirection > 0 ? -50 : 50, scale: 0.95 },
          };
          return (
            <motion.div
              key={section}
              id={section}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto overflow-x-hidden"
              initial="hidden"
              animate={activeSection === index ? "visible" : "exit"}
              variants={variants}
              transition={{ duration: 1 }}
              onAnimationStart={() => { isAnimatingRef.current = true; }}
              onAnimationComplete={() => { isAnimatingRef.current = false; }}
              style={{ pointerEvents: activeSection === index ? "auto" : "none" }}
            >
              {activeSection === index && (
                section === "about"   ? <About /> :
                section === "team"    ? <Team /> :
                section === "clients" ? <Clients /> : null
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Root: pick layout based on screen width ────────────────── */
export default function AboutPage() {
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
  return isMobile ? <MobileAbout /> : <DesktopAbout />;
}
