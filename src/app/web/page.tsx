"use client";

import Image from "next/image";
import { useState } from "react";
import { NavbarMenu } from "@/components/Navbar";

import web1 from "@/Web/web1.jpeg";
import web2 from "@/Web/web2.jpeg";
import web3 from "@/Web/web3.jpeg";

const webImages = [web1, web2, web3];

export default function WebPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const paginate = (direction: number) => {
    setActiveIndex((prevIndex) => (prevIndex + direction + webImages.length) % webImages.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 sm:py-12">
      <NavbarMenu />
      <div className="mx-auto flex max-w-[96rem] items-center justify-center px-4 pt-14">
        <div className="relative h-[65vh] w-[94vw] overflow-hidden rounded-[2rem] border border-white/8 bg-white/5 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:h-[72vh] sm:w-[86vw] lg:h-[75vh] lg:w-[75vw]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_28%)]" />
          <div className="pointer-events-none absolute left-[10%] top-[14%] h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl" />
          <div className="pointer-events-none absolute right-[8%] bottom-[14%] h-48 w-48 rounded-full bg-sky-400/8 blur-3xl" />

          <div
            className="relative z-10 flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {webImages.map((image, index) => (
              <div key={`${image.src}-${index}`} className="relative h-full min-w-full">
                <Image
                  src={image}
                  alt={`Web Design ${index + 1}`}
                  fill
                  priority={index < 2}
                  className="object-contain p-3 sm:p-4 lg:p-6"
                  sizes="(max-width: 640px) 94vw, (max-width: 1024px) 86vw, 75vw"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xl font-bold text-white/90 backdrop-blur-md transition hover:bg-white/18 hover:text-white"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xl font-bold text-white/90 backdrop-blur-md transition hover:bg-white/18 hover:text-white"
          >
            &gt;
          </button>
        </div>
      </div>
    </main>
  );
}
