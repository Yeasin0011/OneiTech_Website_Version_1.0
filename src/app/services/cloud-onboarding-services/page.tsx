import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CloudOnboardingServicesPage() {
  return (
    <ServicePageTemplate
      title="Cloud Onboarding/Services"
      intro="At OneiTech, we offer seamless cloud onboarding and services tailored to help businesses transition to the cloud efficiently and securely. Whether you’re moving existing systems or building new cloud-native solutions, our team ensures a smooth and cost-effective migration."
      bullets={[
        { strong: 'Cloud Migration/Packages', text: 'Hassle-free transfer of data and systems to the cloud, we also provide cloud storage.' },
        { strong: 'Cloud Infrastructure Management', text: 'Comprehensive cloud environment monitoring and optimization.' },
        { strong: 'Cloud Security', text: 'Advanced protection for your cloud assets, ensuring data safety and compliance.' },
      ]}
      demos={[
        { title: 'Demo 1: Cloud Migration for E-commerce', text: 'Effortlessly migrate your e-commerce platform to the cloud with minimal downtime. Our cloud onboarding solution integrates real-time inventory management, payment gateways, and customer analytics into one robust cloud environment, ensuring scalability and performance.' },
        { title: 'Demo 2: Cloud-Based Backup & Disaster Recovery', text: 'An enterprise-grade backup and disaster recovery solution offering automated backups, easy retrieval, and rapid recovery. Perfect for organizations looking to protect critical data while minimizing downtime in the event of an emergency.' },
      ]}
      closing="Discover how OneiTech’s cloud services can accelerate your digital transformation."
    />
  );
}
