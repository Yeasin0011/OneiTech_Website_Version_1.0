import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CyberSecurityPage() {
  return (
    <ServicePageTemplate
      title="Cyber Security"
      intro="At OneiTech, we provide comprehensive cybersecurity solutions to protect your business from evolving digital threats. Our expert team delivers end-to-end security services, ensuring your data and systems are always safe, compliant, and resilient against cyberattacks."
      bullets={[
        { strong: 'Threat Detection & Prevention', text: 'Proactive monitoring to identify and neutralize threats before they impact your business.' },
        { strong: 'Data Encryption & Protection', text: 'Advanced encryption techniques to secure sensitive information.' },
        { strong: 'Incident Response & Recovery', text: 'Swift, effective action plans to minimize damage and ensure fast recovery from cyber incidents.' },
      ]}
      demos={[
        { title: 'Demo 1: Real-Time Threat Monitoring for Financial Institutions', text: 'A robust security monitoring solution for financial organizations, offering 24/7 threat detection and automated response mechanisms. Protects against phishing, malware, and ransomware attacks, ensuring secure transactions and data privacy.' },
        { title: 'Demo 2: Comprehensive Endpoint Security for Enterprises', text: 'An enterprise-wide solution that secures all endpoints, including computers, mobile devices, and servers. Features include device encryption, multi-factor authentication, and real-time vulnerability assessments to protect your business from external and internal threats.' },
      ]}
      closing="Safeguard your business with OneiTech’s advanced cybersecurity solutions."
    />
  );
}
