import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function AutomationIoTPage() {
  return (
    <ServicePageTemplate
      title="Automation and IoT"
      intro="At OneiTech, we harness the power of automation and IoT to transform businesses by optimizing processes and enabling smart, connected environments. From industrial automation to smart home solutions, our services are designed to drive efficiency and innovation."
      bullets={[
        { strong: 'Process Automation', text: 'Streamline repetitive tasks and enhance productivity with intelligent automation.' },
        { strong: 'IoT Integration', text: 'Connect devices and systems for real-time data collection and monitoring.' },
        { strong: 'Smart Solutions', text: 'Tailored IoT solutions for industries, smart homes, and cities to improve efficiency and connectivity.' },
      ]}
      demos={[
        { title: 'Demo 1: Smart Factory Automation', text: 'A fully automated production line with IoT-enabled machinery, providing real-time performance tracking, predictive maintenance, and seamless integration with ERP systems. Ideal for manufacturing businesses looking to enhance efficiency and reduce downtime.' },
        { title: 'Demo 2: IoT-Based Smart Home Solution', text: 'An IoT-enabled smart home system offering remote control of lighting, security, and appliances through a mobile app. Provides real-time monitoring, energy usage optimization, and automated routines to enhance convenience and security for homeowners.' },
      ]}
      closing="Embrace the future of technology with OneiTech’s Automation and IoT solutions."
    />
  );
}
