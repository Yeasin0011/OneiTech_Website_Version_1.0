import React from 'react';

const UIDesign: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">UI/UX Design</h1>

        <p className="text-lg mb-6">
          At OneiTech, we craft intuitive and visually compelling UI/UX designs that enhance user engagement and create seamless digital experiences. Our design approach prioritizes user needs, ensuring that your product is both functional and aesthetically pleasing.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>User Research & Persona Development:</strong> Understanding your users to design experiences that meet their needs.
            </li>
            <li className="text-lg">
              <strong>Wireframing & Prototyping:</strong> Visualizing the user journey and refining interactions before development.
            </li>
            <li className="text-lg">
              <strong>UI Design:</strong> Creating modern, responsive interfaces that align with your brand identity.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: E-commerce Platform Redesign</h3>
            <p className="text-lg">
              A sleek, user-centric redesign of an e-commerce website with an optimized navigation system, personalized product recommendations, and a streamlined checkout process. Enhances user satisfaction and boosts conversion rates.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Mobile App UI for Fitness Tracking</h3>
            <p className="text-lg">
              A mobile fitness app with a minimalist, clean interface that simplifies workout tracking and goal setting. The design features easy-to-read dashboards, personalized progress insights, and intuitive navigation for a smooth user experience.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Transform your digital products with OneiTech’s innovative UI/UX design solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIDesign;
