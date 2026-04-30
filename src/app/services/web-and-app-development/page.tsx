// components/WebAndAppDevelopment.tsx

import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const WebAndAppDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Web and App Development</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we craft cutting-edge web and mobile applications designed to elevate user experiences and drive business growth. From intuitive design to seamless functionality, our solutions are tailored to meet the unique demands of your business and industry.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Custom Web Development:</strong> Modern, responsive websites built to engage users and grow your brand.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Mobile App Development:</strong> Native and cross-platform mobile apps with a focus on usability and performance.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>UI/UX Design:</strong> Visually appealing and user-centric designs that ensure smooth interaction and accessibility.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: E-commerce Web Platform</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A dynamic, fully customizable e-commerce website featuring product catalogs, secure payment integrations, and personalized customer experiences. Perfect for businesses looking to expand their digital footprint and drive sales.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: On-Demand Service App</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A mobile app designed for on-demand services, offering seamless booking, real-time tracking, and in-app payments. Ideal for industries such as ride-hailing, food delivery, or home services, providing a user-friendly interface and high performance.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Partner with OneiTech to build innovative web and app solutions that enhance user engagement and business success.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default WebAndAppDevelopment;
