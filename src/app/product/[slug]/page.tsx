import FreightManagement from '@/components/FreightManagement';
import OneiCore from '@/components/OneiCore';
import OneiCRM from '@/components/OneiCRM';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const metadata: Record<string, { title: string; description: string }> = {
    oneifreight: {
      title: 'Freight Management - OneiTech',
      description: 'OneiFreight: Revolutionize your logistics operations with Bangladesh&apos;s most sophisticated logistics automation platform.',
    },
    oneicore: {
      title: 'OneiCore ERP Solution - OneiTech',
      description: 'Deploy enterprise-grade resource planning with OneiCore, a modular and scalable ERP ecosystem.',
    },
    onicerm: {
      title: 'OneiCRM - OneiTech',
      description: 'Transform your sales operations with OneiCRM, a unified CRM platform for leads, contacts, deals, accounts, and tasks.',
    },
  };

  return metadata[params.slug] || { title: 'Product - OneiTech', description: 'OneiTech Product' };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case 'oneifreight':
      return <FreightManagement />;
    case 'oneicore':
      return <OneiCore />;
    case 'onicerm':
      return <OneiCRM />;
    default:
      return (
        <div className="min-h-screen bg-black/50 py-12 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-gray-300 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/home?section=softwares" className="text-cyan-400 hover:text-cyan-300">
              Back to Products
            </Link>
          </div>
        </div>
      );
  }
}
