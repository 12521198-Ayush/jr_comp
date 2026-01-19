'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building } from 'lucide-react';

export default function NITIAayogPage() {
  return (
    <ServicePageTemplate
      title="NITI Aayog Registration"
      subtitle="NGO Darpan Portal Registration"
      description="Register your NGO with NITI Aayog through the NGO Darpan portal. JR Compliance offers expert support for NITI Aayog registration to help you access government grants and build trust."
      icon={Building}
      color="cyan"
      benefits={[
        'Access to government grants and schemes',
        'Enhanced credibility and transparency',
        'Unique ID for your NGO',
        'Eligibility for CSR funding',
        'Government database listing',
        'Easy grant application process',
        'Networking with government bodies',
        'Required for many funding sources'
      ]}
      process={[
        { step: 'Document Preparation', description: 'Gather all required NGO registration documents' },
        { step: 'Portal Registration', description: 'Create account on NGO Darpan portal' },
        { step: 'Application Filing', description: 'Fill and submit the registration form with details' },
        { step: 'Document Upload', description: 'Upload scanned copies of all required documents' },
        { step: 'Verification', description: 'NITI Aayog verifies the submitted information' },
        { step: 'Unique ID Issuance', description: 'Receive your NGO Darpan Unique ID upon approval' }
      ]}
      documents={[
        'NGO Registration Certificate',
        'PAN Card of NGO',
        'Trust Deed/MOA/Bylaws',
        'List of Governing Body Members',
        'ID Proofs of Members',
        'Bank Account Details',
        'Annual Reports (if available)',
        'Audited Financial Statements'
      ]}
      faqs={[
        { question: 'What is NGO Darpan?', answer: 'NGO Darpan is an online platform maintained by NITI Aayog that provides information about NGOs/VOs across India. It creates a repository of NGOs and helps in ensuring transparency and accountability.' },
        { question: 'Is NITI Aayog registration mandatory?', answer: 'While not mandatory for all NGOs, it is required for receiving government grants and CSR funding. Many government schemes require NGO Darpan registration.' },
        { question: 'How long does registration take?', answer: 'NITI Aayog registration typically takes 15-30 days after submission of complete documents.' },
        { question: 'What is the validity of NGO Darpan registration?', answer: 'The registration is valid as long as the NGO updates its details annually on the portal and remains compliant with regulations.' },
        { question: 'Can new NGOs apply for NITI Aayog registration?', answer: 'Yes, newly registered NGOs can apply. However, some funding schemes may require the NGO to have a certain track record.' }
      ]}
    />
  );
}
