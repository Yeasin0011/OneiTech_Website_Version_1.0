import React from 'react';

const AIAndMachineLearning: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">AI and Machine Learning</h1>

        <p className="text-lg mb-6">
          At OneiTech, we leverage the power of AI and machine learning to transform your business operations, drive innovation, and unlock valuable insights. Our solutions are designed to enhance decision-making, automate processes, and provide predictive capabilities.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>AI Strategy & Consulting:</strong> Tailored strategies to integrate AI effectively into your business model.
            </li>
            <li className="text-lg">
              <strong>Machine Learning Models:</strong> Development and deployment of custom models for predictive analytics, recommendation systems, and more.
            </li>
            <li className="text-lg">
              <strong>Data Analysis & Insights:</strong> Advanced analytics to uncover trends and insights from your data, driving informed business decisions.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Predictive Analytics for Retail</h3>
            <p className="text-lg">
              A machine learning model designed to forecast customer behavior and inventory needs. This solution provides actionable insights into sales trends, helping retailers optimize stock levels and tailor marketing strategies to enhance customer engagement.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: AI-Powered Customer Support Chatbot</h3>
            <p className="text-lg">
              An intelligent chatbot that uses natural language processing (NLP) to handle customer inquiries, provide instant support, and improve user satisfaction. Capable of learning from interactions to offer increasingly accurate and relevant responses.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Empower your business with OneiTech’s cutting-edge AI and machine learning solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAndMachineLearning;
