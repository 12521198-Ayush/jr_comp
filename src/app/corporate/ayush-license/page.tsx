'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function AyushLicensePage() {
  return (
    <ServicePageTemplate
      title="AYUSH Manufacturing License"
      subtitle="Ayurveda, Yoga, Unani, Siddha & Homeopathy"
      description="Searching for quick AYUSH license registration? Get your Ayush manufacturing license registration online from best consultants for Ayurvedic, Unani, Siddha, and Homeopathic products."
      logo="/services_logo/Ayush licence.png"
      color="green"
      benefits={[
        'Legal manufacturing authorization',
        'Quality assurance certification',
        'Market credibility',
        'Export eligibility',
        'Government scheme access',
        'Brand building',
        'Consumer trust',
        'Regulatory compliance'
      ]}
      process={[
        { step: 'Premises Setup', description: 'Set up manufacturing unit as per GMP standards' },
        { step: 'Document Preparation', description: 'Prepare layout, equipment list, and SOPs' },
        { step: 'Application Filing', description: 'Apply to State Drug Licensing Authority' },
        { step: 'Inspection', description: 'Factory inspection by drug inspector' },
        { step: 'Compliance Verification', description: 'Verify GMP and Schedule T compliance' },
        { step: 'License Issuance', description: 'Receive manufacturing license' }
      ]}
      documents={[
        'Factory Layout Plan',
        'Equipment List',
        'Product Formulations',
        'SOPs and Quality Manuals',
        'Technical Staff Details',
        'Premises Proof',
        'Fire Safety NOC',
        'Pollution Control NOC'
      ]}
      faqs={[
        { question: 'What is AYUSH License?', answer: 'AYUSH License is manufacturing license required for producing Ayurvedic, Unani, Siddha, and Homeopathic medicines and products in India.' },
        { question: 'Who issues AYUSH License?', answer: 'State Drug Licensing Authority issues AYUSH manufacturing licenses. The process is governed by Drugs and Cosmetics Act and Rules.' },
        { question: 'What are the GMP requirements?', answer: 'Manufacturing units must comply with Schedule T of Drugs and Cosmetics Rules which specifies Good Manufacturing Practices for ASU drugs.' },
        { question: 'What products need license?', answer: 'All Ayurvedic, Siddha, Unani medicines, and Homeopathic preparations intended for sale need manufacturing license.' },
        { question: 'What is the validity?', answer: 'AYUSH manufacturing license is typically valid for 5 years and renewable before expiry.' }
      ]}
    />
  );
}
