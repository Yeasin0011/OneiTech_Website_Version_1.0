import React from 'react';

const AutomationIoT: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Automation and IoT</h1>

        <p className="text-lg mb-6">
          At OneiTech, we harness the power of automation and IoT to transform businesses by optimizing processes and enabling smart, connected environments. From industrial automation to smart home solutions, our services are designed to drive efficiency and innovation.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Process Automation:</strong> Streamline repetitive tasks and enhance productivity with intelligent automation.
            </li>
            <li className="text-lg">
              <strong>IoT Integration:</strong> Connect devices and systems for real-time data collection and monitoring.
            </li>
            <li className="text-lg">
              <strong>Smart Solutions:</strong> Tailored IoT solutions for industries, smart homes, and cities to improve efficiency and connectivity.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Smart Factory Automation</h3>
            <p className="text-lg">
              A fully automated production line with IoT-enabled machinery, providing real-time performance tracking, predictive maintenance, and seamless integration with ERP systems. Ideal for manufacturing businesses looking to enhance efficiency and reduce downtime.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: IoT-Based Smart Home Solution</h3>
            <p className="text-lg">
              An IoT-enabled smart home system offering remote control of lighting, security, and appliances through a mobile app. Provides real-time monitoring, energy usage optimization, and automated routines to enhance convenience and security for homeowners.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Embrace the future of technology with OneiTech’s Automation and IoT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutomationIoT;
