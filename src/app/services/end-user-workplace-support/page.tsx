import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function EndUserWorkplaceSupportPage() {
  return (
    <ServicePageTemplate
      title="End User Workplace Support"
      intro="At OneiTech, we offer dedicated end user workplace support to ensure your team operates smoothly and efficiently. Our services are designed to resolve technical issues promptly, provide expert assistance, and enhance overall workplace productivity."
      bullets={[
        { strong: 'Help Desk Support', text: 'Quick, responsive support for everyday technical issues and inquiries.' },
        { strong: 'On-Site Assistance', text: 'Hands-on troubleshooting and support for hardware and software problems.' },
        { strong: 'User Training & Documentation', text: 'Comprehensive training and resources to empower users and reduce common errors.' },
      ]}
      demos={[
        { title: 'Demo 1: Help Desk Support for Corporate Offices', text: 'A tiered help desk service offering multi-channel support, including phone, email, and chat, to address IT issues quickly. Includes ticket management, escalation procedures, and regular performance reporting to ensure high-quality service.' },
        { title: 'Demo 2: On-Site IT Support for Remote Workforces', text: 'Personalized on-site support for remote or distributed teams, handling hardware setups, software installations, and technical troubleshooting. Ensures that remote employees receive timely assistance to maintain productivity and minimize disruptions.' },
      ]}
      closing="Enhance your team’s efficiency with OneiTech’s comprehensive end user workplace support."
    />
  );
}
