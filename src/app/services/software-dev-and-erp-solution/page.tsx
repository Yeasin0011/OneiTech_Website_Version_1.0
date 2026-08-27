import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Software Development and ERP Solutions"
      intro="At OneiTech, we specialize in delivering custom software development and comprehensive ERP solutions that streamline business operations, enhance efficiency, and foster growth. Our solutions are designed to meet the specific needs of various industries, ensuring a perfect fit for your business."
      bullets={[
        { strong: 'Custom Software Development', text: 'Tailored solutions for unique business challenges.' },
        { strong: 'ERP Solutions', text: 'Full-suite enterprise resource planning systems for seamless integration and management.' },
      ]}
      demos={[
        { title: 'Demo 1: Custom ERP Solution for Freight & Forwarding', text: 'A robust Freight ERP that integrates freight management, accounting system, inventory management, sales tracking, and customer relationship management (CRM) into a unified platform. Users can access real-time data, automate repetitive tasks, and generate insightful reports with just a few clicks.' },
        { title: 'Demo 2: Enterprise HR & Payroll Management', text: 'A feature-rich HR and payroll management system designed to streamline recruitment, employee data, performance reviews, and payroll processing. Complete with mobile access and integration with third-party accounting systems, this tool simplifies workforce management for large enterprises.' },
      ]}
      closing="Contact us today to explore how OneiTech can transform your business operations."
    />
  );
}
