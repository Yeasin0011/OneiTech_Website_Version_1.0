"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LampContainer } from "../ui/lamp";


const Contact = () => {
  const [animationTriggered] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionState, setSubmissionState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmissionState("error");
      setErrorMessage("Please fill in all fields");
      setTimeout(() => setSubmissionState("idle"), 4000);
      return;
    }

    setSubmissionState("loading");
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmissionState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after 4 seconds
      setTimeout(() => setSubmissionState("idle"), 4000);
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage("Failed to send message. Please try again.");
      setTimeout(() => setSubmissionState("idle"), 4000);
    }
  };

  return (
    <div className="w-full">
      {/* Contact Details Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
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

      {/* Contact Form Section */}
      <div id="form" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
        <motion.div
          key={animationTriggered ? "form-animate" : "form-initial"}
          initial={{ opacity: 0, y: 30 }}
          animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full max-w-2xl"
        >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-teal-400/20"
            >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this about?"
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition resize-none"
              />
            </div>

            {/* Submit Button with States */}
            <motion.button
              type="submit"
              disabled={submissionState === "loading" || submissionState === "success"}
              className="w-full py-3 px-6 rounded-lg font-semibold transition"
              animate={{
                backgroundColor:
                  submissionState === "success"
                    ? "#10b981"
                    : submissionState === "error"
                    ? "#ef4444"
                    : "#06b6d4",
              }}
            >
              {submissionState === "loading" && "Sending..."}
              {submissionState === "success" && "✓ Message Sent!"}
              {submissionState === "error" && "✗ Failed to Send"}
              {submissionState === "idle" && "Send Message"}
            </motion.button>

            {/* Error Message */}
            {submissionState === "error" && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
              >
                {errorMessage}
              </motion.div>
            )}

            {/* Success Message */}
            {submissionState === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
