import React from 'react';

const EndUserWorkplaceSupport: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">End User Workplace Support</h1>

        <p className="text-lg mb-6">
          At OneiTech, we offer dedicated end user workplace support to ensure your team operates smoothly and efficiently. Our services are designed to resolve technical issues promptly, provide expert assistance, and enhance overall workplace productivity.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Help Desk Support:</strong> Quick, responsive support for everyday technical issues and inquiries.
            </li>
            <li className="text-lg">
              <strong>On-Site Assistance:</strong> Hands-on troubleshooting and support for hardware and software problems.
            </li>
            <li className="text-lg">
              <strong>User Training & Documentation:</strong> Comprehensive training and resources to empower users and reduce common errors.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Help Desk Support for Corporate Offices</h3>
            <p className="text-lg">
              A tiered help desk service offering multi-channel support, including phone, email, and chat, to address IT issues quickly. Includes ticket management, escalation procedures, and regular performance reporting to ensure high-quality service.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: On-Site IT Support for Remote Workforces</h3>
            <p className="text-lg">
              Personalized on-site support for remote or distributed teams, handling hardware setups, software installations, and technical troubleshooting. Ensures that remote employees receive timely assistance to maintain productivity and minimize disruptions.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Enhance your team’s efficiency with OneiTech’s comprehensive end user workplace support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EndUserWorkplaceSupport;
