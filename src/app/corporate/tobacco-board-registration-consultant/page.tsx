'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Leaf } from 'lucide-react';

export default function TobaccoBoardPage() {
  return (
    <ServicePageTemplate
      title="Tobacco Board Registration"
      subtitle="Register as Tobacco Trader/Exporter"
      description="Tobacco Board Registration Consultant online in India - JR Compliance provides complete assistance for tobacco growers, traders, and exporters."
      icon={Leaf}
      color="amber"
      serviceInfo="At JR Compliance, we provide comprehensive Tobacco Board registration services for growers, traders, dealers, and exporters of Virginia tobacco in India. Our export consultants guide you through the registration categories - grower registration, curer license, trader registration, and exporter authorization - helping you choose the appropriate category. We prepare complete documentation including land records for growers, trade licenses, and export credentials for the registration process. Our team handles the complete Tobacco Board application submission, tracks status, and coordinates with Board officials for timely registration. We assist with understanding auction norms, quality grading requirements, and export procedures for Virginia tobacco. Post-registration, we provide ongoing support for registration renewals, compliance with tobacco board guidelines, and assistance with accessing export incentives and support schemes."
      benefits={[
        'Legal tobacco trading authorization',
        'Export license eligibility',
        'Government scheme benefits',
        'Market access support',
        'Quality grading assistance',
        'Auction platform access',
        'Research & development support',
        'Price stabilization benefits'
      ]}
      process={[
        { step: 'Category Selection', description: 'Identify registration type (Grower/Trader/Exporter)' },
        { step: 'Application Submission', description: 'Apply to Tobacco Board' },
        { step: 'Document Submission', description: 'Submit required documents' },
        { step: 'Fee Payment', description: 'Pay applicable registration fees' },
        { step: 'Verification', description: 'Tobacco Board verifies details' },
        { step: 'Registration Issuance', description: 'Receive registration certificate' }
      ]}
      documents={[
        'Land Documents (for growers)',
        'IEC Certificate (for exporters)',
        'Company Registration',
        'PAN Card',
        'GST Registration',
        'Storage Facility Details',
        'Bank Account Details'
      ]}
      faqs={[
        { question: 'What is Tobacco Board?', answer: 'Tobacco Board is a statutory body under Ministry of Commerce regulating production, curing, grading, and marketing of Virginia tobacco in India.' },
        { question: 'Who needs to register?', answer: 'Tobacco growers, curers, traders, auctioneers, and exporters dealing with Virginia tobacco need to register with Tobacco Board.' },
        { question: 'Is registration mandatory?', answer: 'Yes, registration is mandatory for participating in tobacco auctions and legal trading of Virginia tobacco.' },
        { question: 'What support is provided?', answer: 'Tobacco Board provides grading services, auction platform, extension services, export promotion, and minimum support price mechanism.' },
        { question: 'What is the coverage area?', answer: 'Tobacco Board primarily covers Virginia tobacco growing areas in Andhra Pradesh, Karnataka, and some other states.' }
      ]}
    />
  );
}
