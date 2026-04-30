'use client';

import Link from 'next/link';
import BlurFade from '../magicui/blur-fade';
import { BackgroundBeams } from '../ui/background-beams';
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function Softwares() {
  return (
    <div>
      <BlurFade delay={0.25} inView className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-16 relative z-50">
      <h2 className='text-xl sm:text-2xl lg:text-4xl font-semibold py-4 text-left'>Softwares we provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {software.map((item, index) => {
          const CardContent = (
            <div className="border border-white/[0.2] flex flex-col items-start p-5 sm:p-6 lg:p-8 relative h-[12rem] sm:h-[14rem] md:h-[18rem] lg:h-[20rem] cursor-pointer">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
              <EvervaultCard text={item.title} />
            </div>
          );

          return item.slug ? (
            <Link
              key={index}
              href={`/product/${item.slug}`}
              className="hover:opacity-80 transition-opacity"
            >
              {CardContent}
            </Link>
          ) : (
            <div key={index}>
              {CardContent}
            </div>
          );
        })}
      </div>
      </BlurFade>
      <BackgroundBeams />
    </div>
  );
}

export const software = [
  {
    title: "OneiFreight",
    slug: "oneifreight",
  },
  {
    title: "OneiCore",
    slug: "oneicore",
  },
  {
    title: "OneiCRM",
    slug: "onicerm",
  },
];
