// components/CyberSecurity.tsx

import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const CyberSecurity: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Cyber Security</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we provide comprehensive cybersecurity solutions to protect your business from evolving digital threats. Our expert team delivers end-to-end security services, ensuring your data and systems are always safe, compliant, and resilient against cyberattacks.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Threat Detection & Prevention:</strong> Proactive monitoring to identify and neutralize threats before they impact your business.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Data Encryption & Protection:</strong> Advanced encryption techniques to secure sensitive information.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Incident Response & Recovery:</strong> Swift, effective action plans to minimize damage and ensure fast recovery from cyber incidents.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Real-Time Threat Monitoring for Financial Institutions</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A robust security monitoring solution for financial organizations, offering 24/7 threat detection and automated response mechanisms. Protects against phishing, malware, and ransomware attacks, ensuring secure transactions and data privacy.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: Comprehensive Endpoint Security for Enterprises</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              An enterprise-wide solution that secures all endpoints, including computers, mobile devices, and servers. Features include device encryption, multi-factor authentication, and real-time vulnerability assessments to protect your business from external and internal threats.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Safeguard your business with OneiTech’s advanced cybersecurity solutions.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default CyberSecurity;
