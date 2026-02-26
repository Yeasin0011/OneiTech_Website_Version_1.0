import React from 'react';

const SoftwareDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Software Development and ERP Solutions</h1>

        <p className="text-lg mb-6">
          At OneiTech, we specialize in delivering custom software development and comprehensive ERP solutions that streamline business operations, enhance efficiency, and foster growth. Our solutions are designed to meet the specific needs of various industries, ensuring a perfect fit for your business.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Custom Software Development:</strong> Tailored solutions for unique business challenges.
            </li>
            <li className="text-lg">
              <strong>ERP Solutions:</strong> Full-suite enterprise resource planning systems for seamless integration and management.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Custom ERP Solution for Freight & Forwarding</h3>
            <p className="text-lg">
              A robust Freight ERP that integrates freight management, accounting system, inventory management, sales tracking, and customer relationship management (CRM) into a unified platform. Users can access real-time data, automate repetitive tasks, and generate insightful reports with just a few clicks.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Enterprise HR & Payroll Management</h3>
            <p className="text-lg">
              A feature-rich HR and payroll management system designed to streamline recruitment, employee data, performance reviews, and payroll processing. Complete with mobile access and integration with third-party accounting systems, this tool simplifies workforce management for large enterprises.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Contact us today to explore how OneiTech can transform your business operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
