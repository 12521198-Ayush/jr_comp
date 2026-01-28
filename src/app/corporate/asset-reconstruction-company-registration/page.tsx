'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Landmark } from 'lucide-react';

export default function AssetReconstructionCompanyPage() {
  return (
    <ServicePageTemplate
      title="Asset Reconstruction Company Registration"
      subtitle="RBI Registered ARC"
      description="We make the Asset Reconstruction Company registration hassle-free to ensure customer satisfaction. Get complete guidance on ARC registration with RBI."
      icon={Landmark}
      color="purple"
      serviceInfo="At JR Compliance, we provide specialized Asset Reconstruction Company registration services for entities looking to acquire and resolve stressed assets from banks and financial institutions. Our regulatory experts guide you through RBI's ARC licensing requirements including minimum Net Owned Funds, sponsor qualifications, and capital adequacy norms. We assist with company incorporation and prepare comprehensive RBI applications covering business strategy, acquisition methodology, and resolution frameworks. Our team handles security receipt structuring documentation and trust deed preparation for ARC operations. We coordinate the complete RBI submission process and address regulatory queries throughout the approval journey. Post-registration, we provide ongoing compliance support for RBI returns, capital adequacy monitoring, and SARFAESI compliance to keep your ARC operationally sound."
      benefits={[
        'NPAs acquisition and resolution',
        'RBI regulated operations',
        'Issue security receipts',
        'Restructure stressed assets',
        'Professional debt recovery',
        'Growing market opportunity',
        'Partner with banks and NBFCs',
        'Attractive returns potential'
      ]}
      process={[
        { step: 'Company Incorporation', description: 'Register as a company under Companies Act' },
        { step: 'Capital Arrangement', description: 'Arrange minimum owned funds as per RBI norms' },
        { step: 'Application Preparation', description: 'Prepare detailed business plan and documentation' },
        { step: 'RBI Application', description: 'Submit application to RBI for ARC registration' },
        { step: 'Due Diligence', description: 'RBI conducts background verification' },
        { step: 'Certificate Issuance', description: 'Receive Certificate of Registration from RBI' }
      ]}
      documents={[
        'Company Incorporation Certificate',
        'MOA & AOA',
        'Directors\' Details',
        'Business Plan',
        'Capital Proof',
        'Audited Financial Statements',
        'Fit and Proper Declaration',
        'Net Owned Fund Certificate'
      ]}
      faqs={[
        { question: 'What is an Asset Reconstruction Company?', answer: 'ARC is a specialized financial institution that buys non-performing assets (NPAs) from banks and financial institutions and works to recover the dues.' },
        { question: 'What is the minimum capital required?', answer: 'Minimum net owned fund of ₹100 crore is required for ARC registration with RBI.' },
        { question: 'Who regulates ARCs in India?', answer: 'Asset Reconstruction Companies are regulated by Reserve Bank of India under SARFAESI Act, 2002.' },
        { question: 'What are security receipts?', answer: 'Security Receipts (SRs) are instruments issued by ARCs to qualified buyers against the acquired NPAs. They represent undivided interest in the financial asset.' },
        { question: 'Can ARCs take over management of companies?', answer: 'Yes, ARCs can take over management of defaulting companies under SARFAESI Act for resolution of stressed assets.' }
      ]}
    />
  );
}
