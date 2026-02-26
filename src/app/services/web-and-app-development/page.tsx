// components/WebAndAppDevelopment.tsx

import React from 'react';

const WebAndAppDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Web and App Development</h1>

        <p className="text-lg mb-6">
          At OneiTech, we craft cutting-edge web and mobile applications designed to elevate user experiences and drive business growth. From intuitive design to seamless functionality, our solutions are tailored to meet the unique demands of your business and industry.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Custom Web Development:</strong> Modern, responsive websites built to engage users and grow your brand.
            </li>
            <li className="text-lg">
              <strong>Mobile App Development:</strong> Native and cross-platform mobile apps with a focus on usability and performance.
            </li>
            <li className="text-lg">
              <strong>UI/UX Design:</strong> Visually appealing and user-centric designs that ensure smooth interaction and accessibility.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: E-commerce Web Platform</h3>
            <p className="text-lg">
              A dynamic, fully customizable e-commerce website featuring product catalogs, secure payment integrations, and personalized customer experiences. Perfect for businesses looking to expand their digital footprint and drive sales.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: On-Demand Service App</h3>
            <p className="text-lg">
              A mobile app designed for on-demand services, offering seamless booking, real-time tracking, and in-app payments. Ideal for industries such as ride-hailing, food delivery, or home services, providing a user-friendly interface and high performance.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Partner with OneiTech to build innovative web and app solutions that enhance user engagement and business success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebAndAppDevelopment;
