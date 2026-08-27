import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BackupDisasterRecoveryPage() {
  return (
    <ServicePageTemplate
      title="Backup and Disaster Recovery"
      intro="At OneiTech, we provide robust backup and disaster recovery solutions designed to protect your business-critical data and ensure swift recovery in case of unexpected disruptions. Our solutions guarantee data integrity, minimize downtime, and help you maintain business continuity."
      bullets={[
        { strong: 'Data Backup & Storage', text: 'Secure, automated backups with flexible storage options.' },
        { strong: 'Disaster Recovery Planning', text: 'Comprehensive strategies to restore operations quickly after disasters.' },
        { strong: 'Cloud-Based Recovery', text: 'Scalable, cloud-powered disaster recovery solutions with rapid failover capabilities.' },
      ]}
      demos={[
        { title: 'Demo 1: Automated Cloud Backup for SMEs', text: 'An automated cloud backup system that securely stores critical business data with encryption and redundancy. Ideal for small and medium-sized businesses, it ensures seamless recovery from accidental data loss, hardware failures, or cyber threats.' },
        { title: 'Demo 2: Enterprise Disaster Recovery as a Service (DRaaS)', text: 'A high-availability disaster recovery solution designed for enterprises. This service offers real-time data replication, automatic failover, and rapid recovery to minimize downtime and maintain continuity during major system outages or natural disasters.' },
      ]}
      closing="Ensure your business is prepared for the unexpected with OneiTech’s reliable backup and disaster recovery solutions."
    />
  );
}
