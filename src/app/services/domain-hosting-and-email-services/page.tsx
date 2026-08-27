import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function DomainHostingEmailPage() {
  return (
    <ServicePageTemplate
      title="Domain, Hosting, and Email Services"
      intro="At OneiTech, we offer reliable and scalable domain, hosting, and email solutions that help businesses establish and maintain a professional online presence. Our services are designed to ensure fast, secure, and uninterrupted access to your digital assets."
      bullets={[
        { strong: 'Domain Registration & Management', text: 'Secure your business domain with easy registration and renewal options.' },
        { strong: 'Web Hosting', text: 'Fast and reliable hosting solutions with 99.9% uptime, scalable to fit your needs.' },
        { strong: 'Business Email Services', text: 'Professional, custom email addresses with robust security and spam protection.' },
      ]}
      demos={[
        { title: 'Demo 1: Managed Web Hosting for E-commerce Sites', text: 'A high-performance hosting solution designed for e-commerce businesses, featuring fast load times, automatic backups, and built-in security features to handle traffic spikes during promotions or peak seasons.' },
        { title: 'Demo 2: Custom Email Solution for Enterprises', text: 'A secure, scalable email platform with custom domain addresses, advanced spam filters, and integrated collaboration tools. Perfect for large teams looking to improve communication and protect sensitive information with end-to-end encryption.' },
      ]}
      closing="Establish a strong digital foundation with OneiTech’s domain, hosting, and email services."
    />
  );
}
