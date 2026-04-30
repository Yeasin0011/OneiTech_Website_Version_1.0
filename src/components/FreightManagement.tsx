'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import bookingImage from '@/OneiFreight/booking.jpeg';
import dashboardImage from '@/OneiFreight/dashboard.jpeg';
import analyticalDashboardImage from '@/OneiFreight/analyticaldashboard.jpeg';
import realTimeTrackingImage from '@/OneiFreight/realtimetracking.jpeg';
import courierTrackingImage from '@/OneiFreight/couriertracking.jpeg';

interface ImageItem {
  id: number;
  title: string;
  description: string;
  image: typeof bookingImage;
}

const FreightManagement: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const imageItems: ImageItem[] = [
    {
      id: 1,
      title: 'Booking',
      description: 'Booking workflow for freight shipments and operational intake',
      image: bookingImage,
    },
    {
      id: 2,
      title: 'Dashboard',
      description: 'Main dashboard for monitoring freight operations at a glance',
      image: dashboardImage,
    },
    {
      id: 3,
      title: 'Analytical Dashboard',
      description: 'Analytics view for tracking performance and shipment insights',
      image: analyticalDashboardImage,
    },
    {
      id: 4,
      title: 'Real-Time Tracking',
      description: 'Live shipment tracking with active status updates',
      image: realTimeTrackingImage,
    },
    {
      id: 5,
      title: 'Courier Tracking',
      description: 'Courier tracking view for delivery visibility and milestone updates',
      image: courierTrackingImage,
    },
  ];

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

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
        {/* OneiFreight Section */}
        <div className="mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Revolutionize Your Logistics Operations with{' '}
            <span className="text-cyan-400">OneiFreight</span>
          </h1>

          {/* Carousel - Image Carousel */}
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

              {/* Navigation Buttons */}
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

              {/* Indicators */}
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
              Redefine the boundaries of freight forwarding with Bangladesh&apos;s most sophisticated logistics automation platform, a high-performance, unified suite engineered to harmonize complex supply chains, optimize asset utilization, and deliver impeccable service at scale.
            </p>

              <p className="text-lg">
              Accelerate your operational evolution with OneiFreight&apos;s elite logistics delivery framework. Purpose-built to empower modern forwarders, our platform is the strategic choice for industry leaders looking to bypass traditional technical debt and deploy a future-ready digital infrastructure in record time.
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                The OneiFreight Advantage: Precision, Performance, Power
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-300">Integrated Multi-Modal Architecture</h3>
                  <p className="text-gray-300">
                    Seamlessly manage Ocean and Air freight through a single &quot;source of truth.&quot; Our platform synchronizes booking, drayage, and warehousing into a fluid, automated pipeline.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-300">Automated Financial Governance</h3>
                  <p className="text-gray-300">
                    Bridge the gap between operations and finance with built-in multi-currency accounting, automated billing, and real-time profit-and-loss visibility at the individual shipment level.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-300">Streamlined Documentation Engine</h3>
                  <p className="text-gray-300">
                    Eliminate manual entry errors with automated document generation. Instantly produce HAWBs, House Bill of Ladings, and Manifests that comply with evolving international trade standards.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-300">Hyper-Localized, Globally Scalable</h3>
                  <p className="text-gray-300">
                    Leveraging the technical ingenuity of Bangladesh&apos;s premier developers, OneiFreight offers the robust security of an enterprise ERP with the agility of a cloud-native SaaS.
                  </p>
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <h3 className="text-lg font-semibold text-blue-300">Real-Time Stakeholder Transparency</h3>
                  <p className="text-gray-300">
                    Elevate your customer experience with branded tracking portals and automated milestone alerts, ensuring your clients are never left in the dark.
                  </p>
                </div>
              </div>
            </div>

            {/* Table - OneiFreight Benefits */}
            <div className="mt-12 overflow-x-auto">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Engineering Growth for the Modern Forwarder</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900/30 border border-blue-500/50">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-blue-300 border border-blue-500/30">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-blue-300 border border-blue-500/30">
                      Strategic Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-blue-500/30 hover:bg-blue-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-blue-500/30">
                      Rapid Go-Live
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-blue-500/30">
                      Transition from legacy silos to a unified digital cloud in as little as 6 weeks.
                    </td>
                  </tr>
                  <tr className="border border-blue-500/30 hover:bg-blue-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-blue-500/30">
                      Cost Optimization
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-blue-500/30">
                      Reduce administrative overhead by up to 40% through intelligent process automation.
                    </td>
                  </tr>
                  <tr className="border border-blue-500/30 hover:bg-blue-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-blue-500/30">
                      Global Compliance
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-blue-500/30">
                      Stay &quot;audit-ready&quot; with comprehensive digital trails and automated regulatory reporting.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

              <p className="text-lg text-center text-gray-200 mt-12 p-8 bg-blue-900/20 border border-blue-500/50 rounded-lg">
              <strong>Where Logistics Meets Innovation.</strong> OneiFreight isn&apos;t just a tool; it&apos;s a competitive engine. We provide the sophisticated digital backbone that allows ambitious freight forwarders to outpace the market, turning operational complexity into a distinct strategic advantage.
            </p>
          </div>
        </div>

      </div>

      {/* Modal for Image Click */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 max-w-md w-full border border-blue-500/50"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreightManagement;
