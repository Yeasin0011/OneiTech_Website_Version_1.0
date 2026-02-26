import { HoverEffect } from "../ui/card-hover-effect";
import BlurFade from '../magicui/blur-fade';
import projects from "@/data/projects";

export function Services() {
  return (
      <BlurFade delay={0.25} inView className="max-w-[100rem] mx-auto px-4 md:px-8 py-16">
        <h2 className='text-3xl font-semibold px-8'>What we do</h2>
        <HoverEffect items={projects} />
      </BlurFade>
  );
}
