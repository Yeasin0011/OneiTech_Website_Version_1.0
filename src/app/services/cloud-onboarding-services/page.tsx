import React from 'react';

const CloudOnboardingServices: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Cloud Onboarding/Services</h1>

        <p className="text-lg mb-6">
          At OneiTech, we offer seamless cloud onboarding and services tailored to help businesses transition to the cloud efficiently and securely. Whether you’re moving existing systems or building new cloud-native solutions, our team ensures a smooth and cost-effective migration.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Cloud Migration/Packages:</strong> Hassle-free transfer of data and systems to the cloud, we also provide cloud storage.
            </li>
            <li className="text-lg">
              <strong>Cloud Infrastructure Management:</strong> Comprehensive cloud environment monitoring and optimization.
            </li>
            <li className="text-lg">
              <strong>Cloud Security:</strong> Advanced protection for your cloud assets, ensuring data safety and compliance.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Cloud Migration for E-commerce</h3>
            <p className="text-lg">
              Effortlessly migrate your e-commerce platform to the cloud with minimal downtime. Our cloud onboarding solution integrates real-time inventory management, payment gateways, and customer analytics into one robust cloud environment, ensuring scalability and performance.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Cloud-Based Backup & Disaster Recovery</h3>
            <p className="text-lg">
              An enterprise-grade backup and disaster recovery solution offering automated backups, easy retrieval, and rapid recovery. Perfect for organizations looking to protect critical data while minimizing downtime in the event of an emergency.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Discover how OneiTech’s cloud services can accelerate your digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudOnboardingServices;
