import React from 'react';

const DomainHostingEmail: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Domain, Hosting, and Email Services</h1>

        <p className="text-lg mb-6">
          At OneiTech, we offer reliable and scalable domain, hosting, and email solutions that help businesses establish and maintain a professional online presence. Our services are designed to ensure fast, secure, and uninterrupted access to your digital assets.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Domain Registration & Management:</strong> Secure your business domain with easy registration and renewal options.
            </li>
            <li className="text-lg">
              <strong>Web Hosting:</strong> Fast and reliable hosting solutions with 99.9% uptime, scalable to fit your needs.
            </li>
            <li className="text-lg">
              <strong>Business Email Services:</strong> Professional, custom email addresses with robust security and spam protection.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Managed Web Hosting for E-commerce Sites</h3>
            <p className="text-lg">
              A high-performance hosting solution designed for e-commerce businesses, featuring fast load times, automatic backups, and built-in security features to handle traffic spikes during promotions or peak seasons.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Custom Email Solution for Enterprises</h3>
            <p className="text-lg">
              A secure, scalable email platform with custom domain addresses, advanced spam filters, and integrated collaboration tools. Perfect for large teams looking to improve communication and protect sensitive information with end-to-end encryption.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Establish a strong digital foundation with OneiTech’s domain, hosting, and email services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainHostingEmail;
