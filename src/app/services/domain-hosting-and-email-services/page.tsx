import React from 'react';

const DomainHostingEmail: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Domain, Hosting, and Email Services</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we offer reliable and scalable domain, hosting, and email solutions that help businesses establish and maintain a professional online presence. Our services are designed to ensure fast, secure, and uninterrupted access to your digital assets.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Domain Registration & Management:</strong> Secure your business domain with easy registration and renewal options.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Web Hosting:</strong> Fast and reliable hosting solutions with 99.9% uptime, scalable to fit your needs.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Business Email Services:</strong> Professional, custom email addresses with robust security and spam protection.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Managed Web Hosting for E-commerce Sites</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A high-performance hosting solution designed for e-commerce businesses, featuring fast load times, automatic backups, and built-in security features to handle traffic spikes during promotions or peak seasons.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: Custom Email Solution for Enterprises</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A secure, scalable email platform with custom domain addresses, advanced spam filters, and integrated collaboration tools. Perfect for large teams looking to improve communication and protect sensitive information with end-to-end encryption.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Establish a strong digital foundation with OneiTech’s domain, hosting, and email services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainHostingEmail;
