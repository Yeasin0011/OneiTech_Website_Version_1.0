import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function MarketingConsultancyPage() {
  return (
    <ServicePageTemplate
      title="Marketing Consultancy"
      intro="At OneiTech, we provide expert marketing consultancy services designed to help businesses build strong brands, engage their target audience, and drive measurable growth. From strategy development to execution, our data-driven approach ensures your marketing efforts deliver results."
      bullets={[
        { strong: 'Digital Marketing Strategy', text: 'Tailored marketing plans designed to maximize online reach and conversions.' },
        { strong: 'Brand Development', text: 'Crafting compelling brand stories and identities that resonate with your audience.' },
        { strong: 'Performance Marketing', text: 'Optimizing campaigns across channels such as social media, SEO, PPC, and email marketing for maximum ROI.' },
      ]}
      demos={[
        { title: 'Demo 1: Social Media Growth Strategy for Startups', text: 'A comprehensive social media strategy focusing on building brand awareness, increasing follower engagement, and driving leads. Our service includes content planning, audience analysis, and campaign optimization across major platforms like Facebook, Instagram, and LinkedIn.' },
        { title: 'Demo 2: SEO & Content Marketing for E-commerce', text: 'A data-driven SEO and content marketing strategy to boost organic search rankings and increase website traffic. Includes keyword research, content creation, and technical SEO improvements tailored to e-commerce platforms for higher visibility and conversion rates.' },
      ]}
      closing="Unlock your business potential with OneiTech’s expert marketing consultancy services."
    />
  );
}
