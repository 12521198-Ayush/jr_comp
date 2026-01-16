'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Radio } from 'lucide-react';

export default function WPCApprovalPage() {
  return (
    <ServicePageTemplate
      title="WPC Approval"
      subtitle="Technical Services"
      icon={Radio}
      color="purple"
      description="Wireless Planning & Coordination (WPC) approval is mandatory for wireless and radio frequency devices in India. We provide comprehensive WPC ETA (Equipment Type Approval) services for Bluetooth, WiFi, cellular, and other RF equipment."
      benefits={[
        'Complete ETA application support',
        'Technical documentation preparation',
        'Frequency allocation assistance',
        'Lab testing coordination',
        'Import license support',
        'Dealer possession license',
        'License renewal services',
        'Multi-model applications',
        'Quick turnaround time',
      ]}
      process={[
        { step: 'Technical Review', description: 'Analyze product RF specifications and applicable standards.' },
        { step: 'Testing', description: 'Coordinate testing at WPC-recognized laboratories.' },
        { step: 'Application', description: 'Submit ETA application with test reports.' },
        { step: 'Approval', description: 'Receive WPC ETA certificate after evaluation.' },
      ]}
      documents={[
        'Company incorporation documents',
        'Product technical specifications',
        'RF module datasheet',
        'Product photographs',
        'Test reports from recognized lab',
        'Authorization from manufacturer',
        'Previous WPC approvals (if any)',
        'Import documents (for imported products)',
      ]}
      faqs={[
        {
          question: 'What products need WPC approval?',
          answer: 'All wireless devices operating in radio frequency spectrum including WiFi routers, Bluetooth devices, cellular phones, walkie-talkies, drones, and IoT devices need WPC approval.',
        },
        {
          question: 'What is the difference between ETA and license?',
          answer: 'ETA (Equipment Type Approval) is for the product model, while licenses (import, possession, dealer) are for entities to import, possess, or sell approved equipment.',
        },
        {
          question: 'How long does WPC ETA take?',
          answer: 'WPC ETA typically takes 4-8 weeks after submission of complete documentation and test reports.',
        },
        {
          question: 'Is WPC approval valid for all India?',
          answer: 'Yes, WPC ETA is valid across India. However, certain frequency bands may have restrictions in specific areas.',
        },
      ]}
    />
  );
}
