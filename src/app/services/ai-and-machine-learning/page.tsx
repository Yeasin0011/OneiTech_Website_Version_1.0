import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function AIAndMachineLearningPage() {
  return (
    <ServicePageTemplate
      title="AI and Machine Learning"
      intro="At OneiTech, we leverage the power of AI and machine learning to transform your business operations, drive innovation, and unlock valuable insights. Our solutions are designed to enhance decision-making, automate processes, and provide predictive capabilities."
      bullets={[
        { strong: 'AI Strategy & Consulting', text: 'Tailored strategies to integrate AI effectively into your business model.' },
        { strong: 'Machine Learning Models', text: 'Development and deployment of custom models for predictive analytics, recommendation systems, and more.' },
        { strong: 'Data Analysis & Insights', text: 'Advanced analytics to uncover trends and insights from your data, driving informed business decisions.' },
      ]}
      demos={[
        { title: 'Demo 1: Predictive Analytics for Retail', text: 'A machine learning model designed to forecast customer behavior and inventory needs. This solution provides actionable insights into sales trends, helping retailers optimize stock levels and tailor marketing strategies to enhance customer engagement.' },
        { title: 'Demo 2: AI-Powered Customer Support Chatbot', text: 'An intelligent chatbot that uses natural language processing (NLP) to handle customer inquiries, provide instant support, and improve user satisfaction. Capable of learning from interactions to offer increasingly accurate and relevant responses.' },
      ]}
      closing="Empower your business with OneiTech’s cutting-edge AI and machine learning solutions."
    />
  );
}
