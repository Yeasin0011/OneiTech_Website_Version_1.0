import React from 'react';

const NetworkSolutions: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Network Solutions</h1>

        <p className="text-lg mb-6">
          At OneiTech, we deliver comprehensive network solutions that ensure your business stays connected, secure, and efficient. Our tailored services range from network design and implementation to ongoing management and optimization, giving your business the robust infrastructure it needs to thrive.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Network Design & Setup:</strong> Customized network architecture for businesses of all sizes.
            </li>
            <li className="text-lg">
              <strong>Network Security:</strong> Advanced firewall, VPN, and threat management to safeguard your data.
            </li>
            <li className="text-lg">
              <strong>Network Monitoring & Maintenance:</strong> 24/7 monitoring to ensure maximum uptime and optimal performance.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Secure Office Network for Small Businesses</h3>
            <p className="text-lg">
              A complete, secure office network setup featuring high-speed connectivity, VPN access, and robust firewall protection. Designed to support file sharing, collaboration tools, and remote work with enhanced security measures.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Enterprise Network for Multi-Site Operations</h3>
            <p className="text-lg">
              An enterprise-grade network solution connecting multiple business locations through a secure, scalable WAN infrastructure. Ideal for large organizations with multiple branches, ensuring seamless communication, data sharing, and centralized network management.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Boost your business connectivity and security with OneiTech’s cutting-edge network solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkSolutions;
