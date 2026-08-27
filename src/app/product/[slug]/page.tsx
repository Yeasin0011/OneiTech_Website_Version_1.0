import FreightManagement from '@/components/FreightManagement';
import OneiCore from '@/components/OneiCore';
import OneiCRM from '@/components/OneiCRM';
import { notFound } from 'next/navigation';
import { PRODUCT_SLUGS } from '@/data/product-slugs';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const metadata: Record<string, { title: string; description: string }> = {
    [PRODUCT_SLUGS.freight]: {
      title: 'Freight Management - OneiTech',
      description: 'OneiFreight: Revolutionize your logistics operations with Bangladesh&apos;s most sophisticated logistics automation platform.',
    },
    [PRODUCT_SLUGS.core]: {
      title: 'OneiCore ERP Solution - OneiTech',
      description: 'Deploy enterprise-grade resource planning with OneiCore, a modular and scalable ERP ecosystem.',
    },
    [PRODUCT_SLUGS.crm]: {
      title: 'OneiCRM - OneiTech',
      description: 'Transform your sales operations with OneiCRM, a unified CRM platform for leads, contacts, deals, accounts, and tasks.',
    },
  };

  const entry = metadata[params.slug];
  if (!entry) {
    notFound();
  }
  return entry;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case PRODUCT_SLUGS.freight:
      return <FreightManagement />;
    case PRODUCT_SLUGS.core:
      return <OneiCore />;
    case PRODUCT_SLUGS.crm:
      return <OneiCRM />;
    default:
      notFound();
  }
}
