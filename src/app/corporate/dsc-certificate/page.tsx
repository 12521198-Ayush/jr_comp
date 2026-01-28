'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Key } from 'lucide-react';

export default function DSCCertificatePage() {
  return (
    <ServicePageTemplate
      title="Digital Signature Certificate"
      subtitle="Secure Your Digital Identity"
      description="Looking for an easy way to obtain a DSC certificate? Get your Digital Signature Certificate now from best DSC service provider with quick processing."
      icon={Key}
      color="blue"
      serviceInfo="At JR Compliance, we provide quick and hassle-free Digital Signature Certificate services for individuals and organizations needing secure electronic authentication. Our DSC experts guide you in choosing the appropriate class and type of DSC - Class 3 for MCA/GST filings, DGFT submissions, e-tendering, and other regulatory requirements. We handle the complete application process with Certifying Authorities, collect and verify your identity documents, and coordinate video verification when required. Our team ensures quick processing for standard and express DSC requirements, with USB token procurement and installation assistance. We provide guidance on DSC usage for various portals and applications. Post-issuance, we offer renewal reminder services, revocation assistance, and support for any technical issues with your digital signature tokens."
      benefits={[
        'Legal validity for e-documents',
        'MCA portal access',
        'Income tax e-filing',
        'E-tendering participation',
        'GST filing requirement',
        'Data integrity assurance',
        'Non-repudiation of transactions',
        'Secure online authentication'
      ]}
      process={[
        { step: 'Class Selection', description: 'Choose appropriate DSC class based on requirements' },
        { step: 'Application', description: 'Fill DSC application form with required details' },
        { step: 'Document Submission', description: 'Submit identity and address proof documents' },
        { step: 'Video Verification', description: 'Complete video verification process' },
        { step: 'Payment', description: 'Pay DSC fees online' },
        { step: 'Token Issuance', description: 'Receive USB token with digital signature' }
      ]}
      documents={[
        'PAN Card',
        'Aadhaar Card',
        'Passport-size Photograph',
        'Email ID',
        'Mobile Number',
        'Address Proof',
        'Video for Verification'
      ]}
      faqs={[
        { question: 'What is a Digital Signature Certificate?', answer: 'DSC is an electronic form of signature that serves as proof of identity for online transactions. It contains user information encrypted using cryptographic methods.' },
        { question: 'What are the classes of DSC?', answer: 'Class 2 DSC is used for company incorporation, ITR filing, and MCA submissions. Class 3 DSC is for e-tendering, e-procurement, and high-security applications.' },
        { question: 'What is the validity of DSC?', answer: 'DSC can be issued for 1, 2, or 3 years validity. It needs to be renewed before expiry for continued use.' },
        { question: 'Who issues DSC in India?', answer: 'DSC is issued by Certifying Authorities (CAs) licensed by Controller of Certifying Authorities (CCA) under Ministry of Electronics & IT.' },
        { question: 'Is DSC mandatory for company directors?', answer: 'Yes, DSC is mandatory for company directors for digital signing of incorporation documents and annual filings on MCA portal.' }
      ]}
    />
  );
}
