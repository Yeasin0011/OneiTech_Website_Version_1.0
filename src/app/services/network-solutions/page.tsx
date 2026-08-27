import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function NetworkSolutionsPage() {
  return (
    <ServicePageTemplate
      title="Network Solutions"
      intro="At OneiTech, we deliver comprehensive network solutions that ensure your business stays connected, secure, and efficient. Our tailored services range from network design and implementation to ongoing management and optimization, giving your business the robust infrastructure it needs to thrive."
      bullets={[
        { strong: 'Network Design & Setup', text: 'Customized network architecture for businesses of all sizes.' },
        { strong: 'Network Security', text: 'Advanced firewall, VPN, and threat management to safeguard your data.' },
        { strong: 'Network Monitoring & Maintenance', text: '24/7 monitoring to ensure maximum uptime and optimal performance.' },
      ]}
      demos={[
        { title: 'Demo 1: Secure Office Network for Small Businesses', text: 'A complete, secure office network setup featuring high-speed connectivity, VPN access, and robust firewall protection. Designed to support file sharing, collaboration tools, and remote work with enhanced security measures.' },
        { title: 'Demo 2: Enterprise Network for Multi-Site Operations', text: 'An enterprise-grade network solution connecting multiple business locations through a secure, scalable WAN infrastructure. Ideal for large organizations with multiple branches, ensuring seamless communication, data sharing, and centralized network management.' },
      ]}
      closing="Boost your business connectivity and security with OneiTech’s cutting-edge network solutions."
    />
  );
}
