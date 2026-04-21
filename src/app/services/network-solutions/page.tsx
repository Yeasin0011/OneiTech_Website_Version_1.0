import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const NetworkSolutions: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Network Solutions</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we deliver comprehensive network solutions that ensure your business stays connected, secure, and efficient. Our tailored services range from network design and implementation to ongoing management and optimization, giving your business the robust infrastructure it needs to thrive.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Network Design & Setup:</strong> Customized network architecture for businesses of all sizes.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Network Security:</strong> Advanced firewall, VPN, and threat management to safeguard your data.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Network Monitoring & Maintenance:</strong> 24/7 monitoring to ensure maximum uptime and optimal performance.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Secure Office Network for Small Businesses</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A complete, secure office network setup featuring high-speed connectivity, VPN access, and robust firewall protection. Designed to support file sharing, collaboration tools, and remote work with enhanced security measures.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: Enterprise Network for Multi-Site Operations</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              An enterprise-grade network solution connecting multiple business locations through a secure, scalable WAN infrastructure. Ideal for large organizations with multiple branches, ensuring seamless communication, data sharing, and centralized network management.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Boost your business connectivity and security with OneiTech’s cutting-edge network solutions.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default NetworkSolutions;
