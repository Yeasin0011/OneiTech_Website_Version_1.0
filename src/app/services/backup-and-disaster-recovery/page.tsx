import React from 'react';

const BackupDisasterRecovery: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Backup and Disaster Recovery</h1>

        <p className="text-lg mb-6">
          At OneiTech, we provide robust backup and disaster recovery solutions designed to protect your business-critical data and ensure swift recovery in case of unexpected disruptions. Our solutions guarantee data integrity, minimize downtime, and help you maintain business continuity.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <strong>Data Backup & Storage:</strong> Secure, automated backups with flexible storage options.
            </li>
            <li className="text-lg">
              <strong>Disaster Recovery Planning:</strong> Comprehensive strategies to restore operations quickly after disasters.
            </li>
            <li className="text-lg">
              <strong>Cloud-Based Recovery:</strong> Scalable, cloud-powered disaster recovery solutions with rapid failover capabilities.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 1: Automated Cloud Backup for SMEs</h3>
            <p className="text-lg">
              An automated cloud backup system that securely stores critical business data with encryption and redundancy. Ideal for small and medium-sized businesses, it ensures seamless recovery from accidental data loss, hardware failures, or cyber threats.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Demo 2: Enterprise Disaster Recovery as a Service (DRaaS)</h3>
            <p className="text-lg">
              A high-availability disaster recovery solution designed for enterprises. This service offers real-time data replication, automatic failover, and rapid recovery to minimize downtime and maintain continuity during major system outages or natural disasters.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Ensure your business is prepared for the unexpected with OneiTech’s reliable backup and disaster recovery solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackupDisasterRecovery;
