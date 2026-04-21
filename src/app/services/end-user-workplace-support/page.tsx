import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const EndUserWorkplaceSupport: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">End User Workplace Support</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we offer dedicated end user workplace support to ensure your team operates smoothly and efficiently. Our services are designed to resolve technical issues promptly, provide expert assistance, and enhance overall workplace productivity.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Help Desk Support:</strong> Quick, responsive support for everyday technical issues and inquiries.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>On-Site Assistance:</strong> Hands-on troubleshooting and support for hardware and software problems.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>User Training & Documentation:</strong> Comprehensive training and resources to empower users and reduce common errors.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Help Desk Support for Corporate Offices</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A tiered help desk service offering multi-channel support, including phone, email, and chat, to address IT issues quickly. Includes ticket management, escalation procedures, and regular performance reporting to ensure high-quality service.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: On-Site IT Support for Remote Workforces</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Personalized on-site support for remote or distributed teams, handling hardware setups, software installations, and technical troubleshooting. Ensures that remote employees receive timely assistance to maintain productivity and minimize disruptions.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Enhance your team’s efficiency with OneiTech’s comprehensive end user workplace support.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default EndUserWorkplaceSupport;
