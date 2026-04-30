'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import dashboardImage from '@/OneiCore/Dashboard.jpeg';
import purchaseEntryImage from '@/OneiCore/purchaseentry.jpeg';
import reportImage from '@/OneiCore/report .jpeg';
import salesInvoiceImage from '@/OneiCore/salesinvoice.jpeg';
import warehouseInfoImage from '@/OneiCore/warehouseinfo.jpeg';

interface ImageItem {
  id: number;
  title: string;
  description: string;
  image: typeof dashboardImage;
}

const OneiCore: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const imageItems: ImageItem[] = [
    {
      id: 1,
      title: 'Dashboard',
      description: 'Unified overview of finance, operations, and business performance KPIs.',
      image: dashboardImage,
    },
    {
      id: 2,
      title: 'Purchase Entry',
      description: 'Streamlined procurement entry with vendor, item, and approval workflow control.',
      image: purchaseEntryImage,
    },
    {
      id: 3,
      title: 'Report',
      description: 'Real-time reporting for decision-ready insights across departments and processes.',
      image: reportImage,
    },
    {
      id: 4,
      title: 'Sales Invoice',
      description: 'Automated invoicing with accurate tax, customer, and payment tracking details.',
      image: salesInvoiceImage,
    },
    {
      id: 5,
      title: 'Warehouse Info',
      description: 'Granular inventory and warehouse visibility to optimize stock and fulfillment.',
      image: warehouseInfoImage,
    },
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCarouselIndex((prev) => (prev + 1) % imageItems.length);
  };

  const prevImage = () => {
    setCarouselIndex((prev) => (prev - 1 + imageItems.length) % imageItems.length);
  };

  return (
    <div className="min-h-screen bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-cyan-400">OneiCore</span>
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Deploy Enterprise-Grade Resource Planning with OneiCore
          </p>

          <div className="mb-16">
            <div className="relative h-80 sm:h-96 md:h-[28rem] rounded-lg overflow-hidden border border-blue-500/50">
              <Image
                src={imageItems[carouselIndex].image}
                alt={imageItems[carouselIndex].title}
                fill
                priority={carouselIndex === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/35 via-blue-950/15 to-cyan-950/35" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 sm:p-8">
                <h4 className="text-white font-semibold text-xl sm:text-2xl mb-2">
                  {imageItems[carouselIndex].title}
                </h4>
                <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
                  {imageItems[carouselIndex].description}
                </p>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-600 text-white p-2 rounded-full transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-600 text-white p-2 rounded-full transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {imageItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === carouselIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 text-gray-200 leading-relaxed">
            <p className="text-lg">
              Unify your entire business architecture with OneiCore Bangladesh&apos;s premier, high-agility ERP ecosystem designed to streamline complex workflows, centralize disparate data, and empower organizations with the same modular flexibility found in global leaders like Odoo.
            </p>

            <p className="text-lg">
              Accelerate your organizational maturity with OneiCore&apos;s proven enterprise delivery framework. Engineered to bridge the gap between operational silos, our platform enables SMEs and large enterprises alike to launch comprehensive digital departments in record time, lowering total cost of ownership while maximizing cross-functional efficiency.
            </p>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                The OneiCore Advantage: Modular, Scalable, Sovereign
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300">Universal Modular Architecture</h3>
                  <p className="text-gray-300">
                    Scale your digital footprint at your own pace. From CRM and HRMS to Inventory and Manufacturing, OneiCore offers a fully integrated suite of apps that grow alongside your business requirements.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300">Centralized Financial Intelligence</h3>
                  <p className="text-gray-300">
                    Achieve a 360-degree view of your fiscal health. OneiCore automates complex accounting tasks, provides real-time multi-dimensional reporting, and ensures your ledgers are always audit-ready.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300">Precision Supply Chain Management</h3>
                  <p className="text-gray-300">
                    Master your logistics from procurement to fulfillment. Our intelligent inventory engine optimizes stock levels, automates reordering, and provides granular visibility across multiple warehouses.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300">Engineered for Local Excellence</h3>
                  <p className="text-gray-300">
                    Developed by Bangladesh&apos;s top-tier architects, OneiCore combines global ERP best practices with deep localized functionality ensuring compliance with local tax laws, labor regulations, and business cultures.
                  </p>
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <h3 className="text-lg font-semibold text-purple-300">Seamless Third-Party Connectivity</h3>
                  <p className="text-gray-300">
                    Break down digital barriers with a robust API framework that connects your ERP to existing legacy systems, e-commerce platforms, and external financial gateways.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-x-auto">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Driving Efficiency Across the Enterprise</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-900/30 border border-purple-500/50">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-purple-300 border border-purple-500/30">
                      Capability
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-purple-300 border border-purple-500/30">
                      Strategic Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-purple-500/30 hover:bg-purple-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-purple-500/30">
                      Integrated CRM
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-purple-500/30">
                      Centralize lead management and sales pipelines to boost conversion rates.
                    </td>
                  </tr>
                  <tr className="border border-purple-500/30 hover:bg-purple-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-purple-500/30">
                      Automated HRM
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-purple-500/30">
                      Streamline payroll, attendance, and employee lifecycles within a single portal.
                    </td>
                  </tr>
                  <tr className="border border-purple-500/30 hover:bg-purple-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-purple-500/30">
                      Project Governance
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-purple-500/30">
                      Track time, resources, and profitability for every initiative in real-time.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg text-center text-gray-200 mt-12 p-8 bg-purple-900/20 border border-purple-500/50 rounded-lg">
              <strong>One System. Zero Limits.</strong> OneiCore is the definitive digital backbone for the modern enterprise. We empower you to eliminate fragmented software and consolidate your operations into a single, high-performance environment that turns raw data into actionable growth.
            </p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 max-w-md w-full border border-purple-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {imageItems[selectedImage - 1]?.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              {imageItems[selectedImage - 1]?.description}
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneiCore;