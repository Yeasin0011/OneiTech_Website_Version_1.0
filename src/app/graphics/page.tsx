"use client";

import Image from "next/image";
import { useState } from "react";
import { NavbarMenu } from "@/components/Navbar";

import graphics1 from "@/Graphics/Graphics1.jpeg";
import graphics2 from "@/Graphics/graphics2.jpeg";
import graphics3 from "@/Graphics/graphics3.jpeg";
import graphics4 from "@/Graphics/graphics4.jpeg";
import graphics5 from "@/Graphics/graphics5.jpeg";
import graphics7 from "@/Graphics/graphics7.jpeg";

const graphicsImages = [graphics1, graphics2, graphics3, graphics4, graphics5, graphics7];

export default function GraphicsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const paginate = (nextDirection: number) => {
    setActiveIndex((prevIndex) => (prevIndex + nextDirection + graphicsImages.length) % graphicsImages.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 sm:py-12">
      <NavbarMenu />
      <div className="mx-auto flex max-w-[96rem] items-center justify-center px-4 pt-14">
        <div className="relative h-[65vh] w-[94vw] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl sm:h-[72vh] sm:w-[86vw] lg:h-[75vh] lg:w-[75vw]">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {graphicsImages.map((image, index) => (
              <div key={`${image.src}-${index}`} className="relative h-full min-w-full">
                <Image
                  src={image}
                  alt={`Graphic ${index + 1}`}
                  fill
                  priority={index < 2}
                  className="object-contain"
                  sizes="(max-width: 640px) 94vw, (max-width: 1024px) 86vw, 75vw"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xl font-bold text-white backdrop-blur transition hover:bg-black/70"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xl font-bold text-white backdrop-blur transition hover:bg-black/70"
          >
            &gt;
          </button>
        </div>
      </div>
    </main>
  );
}
