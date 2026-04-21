import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const AIAndMachineLearning: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative z-10 rounded-3xl border border-cyan-400/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/20 backdrop-blur p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">AI and Machine Learning</h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
          At OneiTech, we leverage the power of AI and machine learning to transform your business operations, drive innovation, and unlock valuable insights. Our solutions are designed to enhance decision-making, automate processes, and provide predictive capabilities.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-200">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-200 marker:text-cyan-300">
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>AI Strategy & Consulting:</strong> Tailored strategies to integrate AI effectively into your business model.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Machine Learning Models:</strong> Development and deployment of custom models for predictive analytics, recommendation systems, and more.
            </li>
            <li className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>Data Analysis & Insights:</strong> Advanced analytics to uncover trends and insights from your data, driving informed business decisions.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 1: Predictive Analytics for Retail</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A machine learning model designed to forecast customer behavior and inventory needs. This solution provides actionable insights into sales trends, helping retailers optimize stock levels and tailor marketing strategies to enhance customer engagement.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl shadow-sky-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-200">Demo 2: AI-Powered Customer Support Chatbot</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              An intelligent chatbot that uses natural language processing (NLP) to handle customer inquiries, provide instant support, and improve user satisfaction. Capable of learning from interactions to offer increasingly accurate and relevant responses.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-950/20 px-6 py-8">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Empower your business with OneiTech’s cutting-edge AI and machine learning solutions.
          </p>
        </div>
      </div>
      <BackgroundBeams className="opacity-60" />
    </div>
  );
};

export default AIAndMachineLearning;
