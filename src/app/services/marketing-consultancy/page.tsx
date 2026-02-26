import React from 'react';

const MarketingConsultancy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Marketing Consultancy</h1>

        <p className="text-lg mb-6">
          At OneiTech, we provide expert marketing consultancy services designed to help businesses build strong brands, engage their target audience, and drive measurable growth. From strategy development to execution, our data-driven approach ensures your marketing efforts deliver results.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Digital Marketing Strategy:</strong> Tailored marketing plans designed to maximize online reach and conversions.
            </li>
            <li className="text-lg">
              <strong>Brand Development:</strong> Crafting compelling brand stories and identities that resonate with your audience.
            </li>
            <li className="text-lg">
              <strong>Performance Marketing:</strong> Optimizing campaigns across channels such as social media, SEO, PPC, and email marketing for maximum ROI.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Social Media Growth Strategy for Startups</h3>
            <p className="text-lg">
              A comprehensive social media strategy focusing on building brand awareness, increasing follower engagement, and driving leads. Our service includes content planning, audience analysis, and campaign optimization across major platforms like Facebook, Instagram, and LinkedIn.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: SEO & Content Marketing for E-commerce</h3>
            <p className="text-lg">
              A data-driven SEO and content marketing strategy to boost organic search rankings and increase website traffic. Includes keyword research, content creation, and technical SEO improvements tailored to e-commerce platforms for higher visibility and conversion rates.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Unlock your business potential with OneiTech’s expert marketing consultancy services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingConsultancy;
