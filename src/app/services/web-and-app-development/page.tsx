import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function WebAndAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Web and App Development"
      intro="At OneiTech, we craft cutting-edge web and mobile applications designed to elevate user experiences and drive business growth. From intuitive design to seamless functionality, our solutions are tailored to meet the unique demands of your business and industry."
      bullets={[
        { strong: 'Custom Web Development', text: 'Modern, responsive websites built to engage users and grow your brand.' },
        { strong: 'Mobile App Development', text: 'Native and cross-platform mobile apps with a focus on usability and performance.' },
        { strong: 'UI/UX Design', text: 'Visually appealing and user-centric designs that ensure smooth interaction and accessibility.' },
      ]}
      demos={[
        { title: 'Demo 1: E-commerce Web Platform', text: 'A dynamic, fully customizable e-commerce website featuring product catalogs, secure payment integrations, and personalized customer experiences. Perfect for businesses looking to expand their digital footprint and drive sales.' },
        { title: 'Demo 2: On-Demand Service App', text: 'A mobile app designed for on-demand services, offering seamless booking, real-time tracking, and in-app payments. Ideal for industries such as ride-hailing, food delivery, or home services, providing a user-friendly interface and high performance.' },
      ]}
      closing="Partner with OneiTech to build innovative web and app solutions that enhance user engagement and business success."
    />
  );
}
