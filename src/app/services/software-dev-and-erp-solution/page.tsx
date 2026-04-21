import React from 'react';

const SoftwareDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Software Development and ERP Solutions</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we specialize in delivering custom software development and comprehensive ERP solutions that streamline business operations, enhance efficiency, and foster growth. Our solutions are designed to meet the specific needs of various industries, ensuring a perfect fit for your business.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Custom Software Development:</strong> Tailored solutions for unique business challenges.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>ERP Solutions:</strong> Full-suite enterprise resource planning systems for seamless integration and management.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Custom ERP Solution for Freight & Forwarding</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A robust Freight ERP that integrates freight management, accounting system, inventory management, sales tracking, and customer relationship management (CRM) into a unified platform. Users can access real-time data, automate repetitive tasks, and generate insightful reports with just a few clicks.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: Enterprise HR & Payroll Management</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A feature-rich HR and payroll management system designed to streamline recruitment, employee data, performance reviews, and payroll processing. Complete with mobile access and integration with third-party accounting systems, this tool simplifies workforce management for large enterprises.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Contact us today to explore how OneiTech can transform your business operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
