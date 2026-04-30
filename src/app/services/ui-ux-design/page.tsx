import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const UIDesign: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">UI/UX Design</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we craft intuitive and visually compelling UI/UX designs that enhance user engagement and create seamless digital experiences. Our design approach prioritizes user needs, ensuring that your product is both functional and aesthetically pleasing.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>User Research & Persona Development:</strong> Understanding your users to design experiences that meet their needs.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Wireframing & Prototyping:</strong> Visualizing the user journey and refining interactions before development.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>UI Design:</strong> Creating modern, responsive interfaces that align with your brand identity.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: E-commerce Platform Redesign</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A sleek, user-centric redesign of an e-commerce website with an optimized navigation system, personalized product recommendations, and a streamlined checkout process. Enhances user satisfaction and boosts conversion rates.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: Mobile App UI for Fitness Tracking</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A mobile fitness app with a minimalist, clean interface that simplifies workout tracking and goal setting. The design features easy-to-read dashboards, personalized progress insights, and intuitive navigation for a smooth user experience.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Transform your digital products with OneiTech’s innovative UI/UX design solutions.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default UIDesign;
