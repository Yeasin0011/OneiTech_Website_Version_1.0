'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const OneiCRM: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const imageItems: ImageItem[] = [
    {
      id: 1,
      title: 'Login Page',
      description: 'Secure entry point for sales teams to access the CRM workspace.',
      image: '/OneiCRM/loginpage.jpeg',
    },
    {
      id: 2,
      title: 'Account Information',
      description: 'Structured account view for managing company records and client details.',
      image: '/OneiCRM/account_infortmationpage.jpeg',
    },
    {
      id: 3,
      title: 'Meeting Entry',
      description: 'Mobile-friendly meeting entry flow for quick scheduling and follow-up capture.',
      image: '/OneiCRM/meetingentry_mobileview.jpeg',
    },
    {
      id: 4,
      title: 'Task Calendar',
      description: 'Calendar planning view for monitoring deadlines, reminders, and sales tasks.',
      image: '/OneiCRM/task_calender.jpeg',
    },
    {
      id: 5,
      title: 'Task Entry',
      description: 'Mobile task entry view for assigning responsibilities and tracking execution.',
      image: '/OneiCRM/taskentry_mobileview.jpeg',
    },
  ];

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    setCarouselIndex((prev) => (prev + 1) % imageItems.length);
  };

  const prevImage = () => {
    setCarouselIndex((prev) => (prev - 1 + imageItems.length) % imageItems.length);
  };

  const activeItem = imageItems[carouselIndex];
  const isMobileViewSlide = activeItem.title === 'Meeting Entry' || activeItem.title === 'Task Entry';

  return (
    <div className="min-h-screen bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Transform Your Sales Operations with <span className="text-cyan-400">OneiCRM</span>
          </h1>

          <div className="mb-16">
            <div className="relative h-[32rem] sm:h-[36rem] md:h-[40rem] rounded-lg overflow-hidden border border-cyan-500/50 bg-slate-950">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority={carouselIndex === 0}
                className={isMobileViewSlide ? 'object-contain p-3 sm:p-6' : 'object-cover'}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/35 via-cyan-950/15 to-blue-950/35" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 sm:p-8">
                <h4 className="text-white font-semibold text-xl sm:text-2xl mb-2">
                  {activeItem.title}
                </h4>
                <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
                  {activeItem.description}
                </p>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-600/80 hover:bg-cyan-600 text-white p-2 rounded-full transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-600/80 hover:bg-cyan-600 text-white p-2 rounded-full transition-colors z-10"
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
              Redefine the way your business manages customer relationships with OneiCRM, a smart and unified CRM platform developed by OneiTech to centralize leads, contacts, deals, accounts, and sales tasks into one powerful system.
            </p>

            <p className="text-lg">
              Accelerate your sales team&apos;s productivity with OneiCRM&apos;s organized and user-friendly framework. Purpose-built to support modern sales teams, our platform helps businesses track potential customers, manage follow-ups, assign responsibilities, monitor deal progress, and ensure that no sales opportunity is missed.
            </p>

            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                The OneiCRM Advantage: Organized, Connected, Productive
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-300">Centralized Lead Management</h3>
                  <p className="text-gray-300">
                    Easily add, manage, and track leads from one place. OneiCRM helps sales teams follow every potential customer from the first interaction to the final conversion.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-300">Complete Contact and Account Management</h3>
                  <p className="text-gray-300">
                    Store and organize customer contacts and company accounts in a structured way, making it easier for the sales team to access important client information whenever needed.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-300">Smart Deal Tracking</h3>
                  <p className="text-gray-300">
                    Manage deals through different sales stages and monitor progress clearly. This helps businesses understand which opportunities are active, pending, or ready to close.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-300">Task Assignment and Deadline Control</h3>
                  <p className="text-gray-300">
                    Assign tasks to individual sales team members or the full team, set deadlines, and track completion status to improve accountability and daily workflow.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-300">Integrated Notification and Alert System</h3>
                  <p className="text-gray-300">
                    Stay updated with automatic alerts for upcoming deadlines, pending tasks, follow-ups, and important sales activities.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-cyan-300">Google Calendar Integration</h3>
                  <p className="text-gray-300">
                    Connect sales activities with Google Calendar to manage meetings, follow-ups, reminders, and schedules more effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-x-auto">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Engineering Growth for Modern Sales Teams</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-cyan-900/30 border border-cyan-500/50">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-cyan-300 border border-cyan-500/30">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-cyan-300 border border-cyan-500/30">
                      Strategic Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-cyan-500/30 hover:bg-cyan-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-cyan-500/30">
                      Lead Management
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-cyan-500/30">
                      Track potential customers from first contact to conversion.
                    </td>
                  </tr>
                  <tr className="border border-cyan-500/30 hover:bg-cyan-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-cyan-500/30">
                      Deal Pipeline
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-cyan-500/30">
                      Monitor sales progress and improve closing opportunities.
                    </td>
                  </tr>
                  <tr className="border border-cyan-500/30 hover:bg-cyan-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-cyan-500/30">
                      Task Management
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-cyan-500/30">
                      Assign responsibilities and ensure timely follow-ups.
                    </td>
                  </tr>
                  <tr className="border border-cyan-500/30 hover:bg-cyan-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-cyan-500/30">
                      Deadline Alerts
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-cyan-500/30">
                      Reduce missed tasks through automatic reminders and notifications.
                    </td>
                  </tr>
                  <tr className="border border-cyan-500/30 hover:bg-cyan-900/20 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold border border-cyan-500/30">
                      Google Calendar Integration
                    </td>
                    <td className="px-6 py-4 text-gray-300 border border-cyan-500/30">
                      Keep meetings, schedules, and follow-ups connected in one place.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-8 text-gray-200 leading-relaxed mt-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Where Sales Meets Smart Automation</h2>
                <p className="text-lg">
                  OneiCRM is not just a customer database; it is a complete sales management tool that helps businesses bring structure, visibility, and efficiency into their sales process. By reducing manual tracking and improving team coordination, OneiCRM allows sales teams to focus more on building customer relationships and closing deals.
                </p>
              </div>

              <div>
                <p className="text-lg">
                  With OneiCRM, businesses can move away from scattered spreadsheets, missed follow-ups, and unorganized sales communication. The platform creates a smooth digital workflow where every lead, contact, deal, account, and task can be managed with clarity and control.
                </p>
              </div>

              <div className="p-8 bg-cyan-900/20 border border-cyan-500/50 rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">One Platform. Stronger Sales.</h2>
                <p className="text-lg text-center text-gray-200">
                  OneiCRM gives businesses the digital backbone needed to manage customer relationships, improve sales team performance, and support long-term business growth. It empowers organizations to turn sales activities into a structured, trackable, and result-driven process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 max-w-md w-full border border-cyan-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {imageItems[selectedImage - 1]?.title}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              {imageItems[selectedImage - 1]?.description}
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneiCRM;