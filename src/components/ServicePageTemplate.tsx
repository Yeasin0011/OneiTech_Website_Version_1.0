import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

export interface ServiceBullet {
  strong: string;
  text: string;
}

export interface ServiceDemo {
  title: string;
  text: string;
}

export interface ServicePageTemplateProps {
  title: string;
  intro: string;
  bullets: ServiceBullet[];
  demos: ServiceDemo[];
  closing: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  intro,
  bullets,
  demos,
  closing,
}) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">{intro}</p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            {bullets.map((bullet) => (
              <li key={bullet.strong} className="text-base sm:text-lg text-slate-200 leading-relaxed">
                <strong>{bullet.strong}:</strong> {bullet.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">{demo.title}</h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">{demo.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">{closing}</p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default ServicePageTemplate;
