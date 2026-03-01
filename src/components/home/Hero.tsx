import { ChevronRight } from 'lucide-react';
import React from 'react';
import AnimatedDrawing from '../AnimatedDrawing';
import BlurFade from '@/components/magicui/blur-fade';
import { AuroraBackground } from '../ui/aurora-background';
import { NavbarMenu } from '../Navbar';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <AuroraBackground>
    <div className='px-4 sm:px-8 md:px-16'>
      <NavbarMenu />
        <AnimatedDrawing />
        <BlurFade delay={0.25} inView>
          <h1 className='text-xl sm:text-2xl md:text-3xl py-8'>We drive business transformation by engineering custom applications and pioneering product innovations.</h1>
          <Link href="/contact#form">
            <span className='flex items-center gap-2 text-xl cursor-pointer hover:gap-4 hover:text-teal-400 transition-all duration-300'>Let&apos;s Talk 👋<ChevronRight /></span>
          </Link>
      </BlurFade> 
    </div>
    </AuroraBackground>
  );
}

export default Hero;
