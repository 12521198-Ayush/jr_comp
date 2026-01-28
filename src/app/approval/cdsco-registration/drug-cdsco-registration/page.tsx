'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Pill } from 'lucide-react';

export default function DrugCDSCOPage() {
  return (
    <ServicePageTemplate
      title="Drug CDSCO Registration"
      subtitle="Pharmaceutical Registration"
      icon={Pill}
      color="red"
      description="Drug CDSCO Registration services for pharmaceutical products. Get complete support for drug manufacturing and import licenses from expert consultants."
      serviceInfo="JR Compliance provides comprehensive pharmaceutical registration services under CDSCO and Drugs & Cosmetics Act for drug manufacturers and importers. Our regulatory affairs specialists guide you through the appropriate approval pathway based on your drug category - new drug, generic, biological, or phytopharmaceutical. We prepare complete dossiers including Chemistry, Manufacturing & Controls (CMC) data, stability studies, bioequivalence reports, and clinical trial documentation as required. Our team manages the entire approval process on SUGAM portal, coordinates with CDSCO reviewers, and addresses technical queries professionally. We assist with manufacturing license applications, import registration, and Form 40/41 certifications. Post-approval, we provide ongoing support for product variations, license renewals, pharmacovigilance compliance, and regulatory updates affecting your pharmaceutical products."
      benefits={[
        'Drug manufacturing license support',
        'Import registration assistance',
        'New drug approval guidance',
        'Clinical trial authorization',
        'Expert regulatory support',
        'GMP compliance assistance',
        'Quick processing',
        'Renewal support',
        'Pan-India market access',
      ]}
      process={[
        { step: 'Drug Classification', description: 'Classify drug under Drugs & Cosmetics Act.' },
        { step: 'Documentation', description: 'Prepare CTD dossier and regulatory documents.' },
        { step: 'Testing', description: 'Get drug tested for quality and safety.' },
        { step: 'CDSCO Application', description: 'Submit application on SUGAM portal.' },
        { step: 'Approval Grant', description: 'Receive CDSCO drug registration/approval.' },
      ]}
      documents={[
        'Company registration documents',
        'Manufacturing license',
        'CTD/Product dossier',
        'GMP certificate',
        'Stability study data',
        'Bioequivalence studies (if applicable)',
        'Certificate of analysis',
        'Site master file',
      ]}
      faqs={[
        {
          question: 'What is Drug CDSCO registration?',
          answer: 'CDSCO registration is required for manufacturing, importing, and marketing pharmaceutical drugs in India.',
        },
        {
          question: 'What types of drug approvals are there?',
          answer: 'New drugs, generic drugs, biologics, and imported drugs have different approval pathways.',
        },
        {
          question: 'Is GMP mandatory?',
          answer: 'Yes, GMP (Good Manufacturing Practice) compliance is mandatory for all drug manufacturers.',
        },
        {
          question: 'How long does drug approval take?',
          answer: 'Drug approvals can take 6 months to 2 years depending on drug type and data requirements.',
        },
        {
          question: 'What is Form 40/41?',
          answer: 'Form 40 is for import registration and Form 41 is for drug manufacturing license application.',
        },
      ]}
    />
  );
}
