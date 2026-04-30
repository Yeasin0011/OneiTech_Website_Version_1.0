import React, { Suspense } from "react";
import Hero from "../../components/home/Hero";
import { Services } from "../../components/home/Services";
import Expertise from "../../components/home/Expertise";
import { Choice } from "@/components/home/Choice";
import { Testimonial } from "@/components/home/Testimonial";
import Featured from "../../components/home/Featured";
import { Softwares } from "../../components/home/Softwares";
import ContactHome from "../../components/home/ContactHome";
import { NavbarMenu } from "@/components/Navbar";
import HomeContent from "./home-content";

export default function Home() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}