import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const MarketingConsultancy: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Marketing Consultancy</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we provide expert marketing consultancy services designed to help businesses build strong brands, engage their target audience, and drive measurable growth. From strategy development to execution, our data-driven approach ensures your marketing efforts deliver results.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Digital Marketing Strategy:</strong> Tailored marketing plans designed to maximize online reach and conversions.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Brand Development:</strong> Crafting compelling brand stories and identities that resonate with your audience.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Performance Marketing:</strong> Optimizing campaigns across channels such as social media, SEO, PPC, and email marketing for maximum ROI.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Social Media Growth Strategy for Startups</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A comprehensive social media strategy focusing on building brand awareness, increasing follower engagement, and driving leads. Our service includes content planning, audience analysis, and campaign optimization across major platforms like Facebook, Instagram, and LinkedIn.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: SEO & Content Marketing for E-commerce</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A data-driven SEO and content marketing strategy to boost organic search rankings and increase website traffic. Includes keyword research, content creation, and technical SEO improvements tailored to e-commerce platforms for higher visibility and conversion rates.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Unlock your business potential with OneiTech’s expert marketing consultancy services.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default MarketingConsultancy;
