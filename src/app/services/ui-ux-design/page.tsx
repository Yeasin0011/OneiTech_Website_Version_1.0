import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function UIDesignPage() {
  return (
    <ServicePageTemplate
      title="UI/UX Design"
      intro="At OneiTech, we craft intuitive and visually compelling UI/UX designs that enhance user engagement and create seamless digital experiences. Our design approach prioritizes user needs, ensuring that your product is both functional and aesthetically pleasing."
      bullets={[
        { strong: 'User Research & Persona Development', text: 'Understanding your users to design experiences that meet their needs.' },
        { strong: 'Wireframing & Prototyping', text: 'Visualizing the user journey and refining interactions before development.' },
        { strong: 'UI Design', text: 'Creating modern, responsive interfaces that align with your brand identity.' },
      ]}
      demos={[
        { title: 'Demo 1: E-commerce Platform Redesign', text: 'A sleek, user-centric redesign of an e-commerce website with an optimized navigation system, personalized product recommendations, and a streamlined checkout process. Enhances user satisfaction and boosts conversion rates.' },
        { title: 'Demo 2: Mobile App UI for Fitness Tracking', text: 'A mobile fitness app with a minimalist, clean interface that simplifies workout tracking and goal setting. The design features easy-to-read dashboards, personalized progress insights, and intuitive navigation for a smooth user experience.' },
      ]}
      closing="Transform your digital products with OneiTech’s innovative UI/UX design solutions."
    />
  );
}
