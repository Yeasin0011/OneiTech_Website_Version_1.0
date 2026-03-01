"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LampContainer } from "../ui/lamp";

const ContactHome = () => {
  const [animationTriggered] = useState(true);

  return (
    <div className="w-full">
      {/* Contact Details Section - Simplified for Home Page */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full pointer-events-none" style={{ top: "-10%", height: "100%" }}>
          <LampContainer>
            <div></div>
          </LampContainer>
        </div>
        <motion.div
          key={animationTriggered ? "details-animate" : "details-initial"}
          initial={{ opacity: 0, y: 30 }}
          animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full max-w-3xl text-center space-y-12 relative z-10 pointer-events-auto pt-32"
        >
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              <strong>Address:</strong><br /> House- 105, Road- 4, Block- B, Banani, Dhaka- 1213, Bangladesh
            </p>
            <p className="text-lg text-gray-300">
              <strong>Phone:</strong><br /> +8801775733499
            </p>
            <p className="text-lg text-gray-300">
              <strong>Email:</strong><br /> info@oneitech.co
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-6">Follow us on social media</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61563104541347"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600 hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/evotech-bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-700 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/oneitech.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-pink-600 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHome;
