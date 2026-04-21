import React from 'react';

const CloudOnboardingServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Cloud Onboarding/Services</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we offer seamless cloud onboarding and services tailored to help businesses transition to the cloud efficiently and securely. Whether you’re moving existing systems or building new cloud-native solutions, our team ensures a smooth and cost-effective migration.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Cloud Migration/Packages:</strong> Hassle-free transfer of data and systems to the cloud, we also provide cloud storage.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Cloud Infrastructure Management:</strong> Comprehensive cloud environment monitoring and optimization.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Cloud Security:</strong> Advanced protection for your cloud assets, ensuring data safety and compliance.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Cloud Migration for E-commerce</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Effortlessly migrate your e-commerce platform to the cloud with minimal downtime. Our cloud onboarding solution integrates real-time inventory management, payment gateways, and customer analytics into one robust cloud environment, ensuring scalability and performance.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: Cloud-Based Backup & Disaster Recovery</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              An enterprise-grade backup and disaster recovery solution offering automated backups, easy retrieval, and rapid recovery. Perfect for organizations looking to protect critical data while minimizing downtime in the event of an emergency.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Discover how OneiTech’s cloud services can accelerate your digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudOnboardingServices;
