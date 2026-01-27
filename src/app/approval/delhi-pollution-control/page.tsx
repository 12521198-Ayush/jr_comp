'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building } from 'lucide-react';

export default function DelhiPollutionControlPage() {
  return (
    <ServicePageTemplate
      title="Delhi Pollution Control"
      subtitle="DPCC Consent & Authorization"
      icon={Building}
      color="green"
      description="Get DPCC (Delhi Pollution Control Committee) consent to establish and operate your business in Delhi NCR. Complete assistance for environmental clearances, consent management, and pollution control compliance."
      stats={[
        { value: '2000+', label: 'DPCC Consents' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      benefits={[
        'Consent to Establish (CTE) assistance',
        'Consent to Operate (CTO) support',
        'Authorization for Hazardous Waste',
        'Environmental clearance guidance',
        'Air & Water Act compliance',
        'Real-time monitoring system setup',
        'Renewal and modification support',
        'Inspection preparation assistance',
        'Complete documentation handling',
      ]}
      process={[
        { step: 'Site Assessment', description: 'Evaluate your facility location, activities, and pollution potential.' },
        { step: 'Category Determination', description: 'Identify industry category (Red, Orange, Green, White) under DPCC.' },
        { step: 'Documentation', description: 'Prepare environmental assessment, pollution control measures, and application.' },
        { step: 'Application Submission', description: 'Submit consent application on DPCC online portal.' },
        { step: 'Inspection', description: 'Coordinate DPCC inspection and address any observations.' },
        { step: 'Consent Grant', description: 'Receive consent to establish/operate from DPCC.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'Land Documents/Lease Agreement',
        'Layout Plan of Premises',
        'Manufacturing Process Details',
        'Pollution Control Equipment Details',
        'Water & Power Consumption Data',
        'Effluent/Emission Treatment Plan',
        'Environmental Clearance (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is DPCC consent?',
          answer: 'DPCC (Delhi Pollution Control Committee) consent is a mandatory authorization for industries to establish and operate in Delhi, ensuring compliance with pollution control norms.',
        },
        {
          question: 'Who needs DPCC consent?',
          answer: 'All industries, manufacturing units, healthcare facilities, and businesses generating pollution in Delhi NCR require DPCC consent.',
        },
        {
          question: 'What are industry categories under DPCC?',
          answer: 'Industries are classified as Red (highly polluting), Orange (moderately polluting), Green (less polluting), and White (non-polluting) based on pollution potential.',
        },
        {
          question: 'What is the validity of DPCC consent?',
          answer: 'Consent validity varies: 5 years for Green industries, 3 years for Orange, and 1-2 years for Red category industries.',
        },
        {
          question: 'What are penalties for operating without DPCC consent?',
          answer: 'Operating without consent can result in closure orders, fines up to ₹1 lakh per day, and prosecution under environmental laws.',
        },
      ]}
    />
  );
}
