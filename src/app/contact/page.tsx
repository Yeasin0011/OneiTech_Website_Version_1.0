"use client";
import Contact from "@/components/home/Contact";
import { NavbarMenu } from "@/components/Navbar";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash.slice(1);
    if (hash === "form") {
      setTimeout(() => {
        const formElement = document.getElementById("form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <NavbarMenu />
      <Contact />
    </div>
  );
}
