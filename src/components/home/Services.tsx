import { HoverEffect } from "../ui/card-hover-effect";
import BlurFade from '../magicui/blur-fade';
import projects from "@/data/projects";
import { BackgroundBeams } from '../ui/background-beams';

export function Services() {
  return (
    <div className="relative">
      <BlurFade delay={0.25} inView className="max-w-[100rem] mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-16 relative z-50">
        <h2 className='text-2xl sm:text-3xl font-semibold px-4 sm:px-8'>What we do</h2>
        <HoverEffect items={projects} />
      </BlurFade>
      <BackgroundBeams />
    </div>
  );
}
