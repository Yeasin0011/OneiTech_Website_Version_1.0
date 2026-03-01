"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavbarMenu } from "@/components/Navbar";

const services = [
  {
    title: "Software Development and ERP Solution",
    slug: "software-dev-and-erp-solution",
    description: "Custom software development and enterprise resource planning solutions.",
  },
  {
    title: "Network Solutions",
    slug: "network-solutions",
    description: "Comprehensive network infrastructure and management services.",
  },
  {
    title: "Backup and Disaster Recovery",
    slug: "backup-and-disaster-recovery",
    description: "Reliable backup and disaster recovery solutions for business continuity.",
  },
  {
    title: "Marketing Consultancy",
    slug: "marketing-consultancy",
    description: "Strategic marketing consulting and digital marketing services.",
  },
  {
    title: "Cloud Onboarding Services",
    slug: "cloud-onboarding-services",
    description: "Seamless cloud migration and onboarding support.",
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Advanced cybersecurity solutions and threat protection.",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User interface and user experience design services.",
  },
  {
    title: "End User Workplace Support",
    slug: "end-user-workplace-support",
    description: "Comprehensive IT support and workplace solutions.",
  },
  {
    title: "Web and App Development",
    slug: "web-and-app-development",
    description: "Modern web and mobile application development.",
  },
  {
    title: "Automation and IoT",
    slug: "automation-and-iot",
    description: "Industrial automation and IoT solutions.",
  },
  {
    title: "Domain, Hosting and Email Services",
    slug: "domain-hosting-and-email-services",
    description: "Domain registration, hosting, and email services.",
  },
  {
    title: "AI and Machine Learning",
    slug: "ai-and-machine-learning",
    description: "Artificial intelligence and machine learning solutions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20 pb-10 px-4">
      <NavbarMenu />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center pt-8">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-8 sm:mb-16 max-w-2xl mx-auto">
          Comprehensive solutions tailored to your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-full p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-teal-500 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
