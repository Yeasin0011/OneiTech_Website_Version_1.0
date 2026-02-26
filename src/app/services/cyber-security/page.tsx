// components/CyberSecurity.tsx

import React from 'react';

const CyberSecurity: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Cyber Security</h1>

        <p className="text-lg mb-6">
          At OneiTech, we provide comprehensive cybersecurity solutions to protect your business from evolving digital threats. Our expert team delivers end-to-end security services, ensuring your data and systems are always safe, compliant, and resilient against cyberattacks.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Threat Detection & Prevention:</strong> Proactive monitoring to identify and neutralize threats before they impact your business.
            </li>
            <li className="text-lg">
              <strong>Data Encryption & Protection:</strong> Advanced encryption techniques to secure sensitive information.
            </li>
            <li className="text-lg">
              <strong>Incident Response & Recovery:</strong> Swift, effective action plans to minimize damage and ensure fast recovery from cyber incidents.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Real-Time Threat Monitoring for Financial Institutions</h3>
            <p className="text-lg">
              A robust security monitoring solution for financial organizations, offering 24/7 threat detection and automated response mechanisms. Protects against phishing, malware, and ransomware attacks, ensuring secure transactions and data privacy.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Comprehensive Endpoint Security for Enterprises</h3>
            <p className="text-lg">
              An enterprise-wide solution that secures all endpoints, including computers, mobile devices, and servers. Features include device encryption, multi-factor authentication, and real-time vulnerability assessments to protect your business from external and internal threats.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Safeguard your business with OneiTech’s advanced cybersecurity solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
