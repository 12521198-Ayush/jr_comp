'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building2 } from 'lucide-react';

export default function PrivateLimitedCompanyPage() {
  return (
    <ServicePageTemplate
      title="Private Limited Company Registration"
      subtitle="Business Formation"
      description="Incorporate your Private Limited Company with expert guidance. We handle end-to-end registration including name approval, documentation, DSC/DIN, and incorporation certificate."
      icon={Building2}
      color="blue"
      serviceInfo="At JR Compliance, we provide end-to-end Private Limited Company registration services to help entrepreneurs establish their business with a robust corporate structure. Our corporate experts guide you through name availability search and reservation, ensuring your company name meets MCA guidelines. We handle DSC procurement for all directors, DIN application, and complete MCA filing with SPICe+ form and associated forms. Our team prepares MOA, AOA, and other incorporation documents tailored to your business objectives and shareholding structure. We coordinate with the Registrar of Companies, track application status, and ensure timely certificate of incorporation. Post-incorporation, we provide PAN/TAN registration, bank account opening assistance, and ongoing annual compliance services including ROC filings."
      benefits={[
        'Limited Liability - Personal assets cannot be seized to clear company debts, protecting owners from business losses',
        'Increased Credibility - A private limited company is perceived as more reliable and businesslike than sole traders or partnerships',
        'Tax Benefits - Tax incentives available for private limited companies help reduce overall tax burden',
        'Easy Funding Access - Private limited companies can be easily financed from shareholders, banks, or investors',
        'Perpetual Succession - Company continues to exist regardless of changes in ownership',
        'Easy Transfer of Ownership - Shares can be transferred without affecting business operations',
        'Separate Legal Entity - Company is separate from its owners with its own rights and liabilities',
        'Brand Protection - Company name is protected and cannot be used by others'
      ]}
      process={[
        { step: 'Name Approval', description: 'We check the availability of your company name and get it approved by the Registrar of Companies.' },
        { step: 'Documentation', description: 'We help prepare all paperwork including Memorandum of Association and Articles of Association.' },
        { step: 'DSC & DIN', description: 'We assist in obtaining Digital Signature Certificates and Director Identification Numbers.' },
        { step: 'Registration Filing', description: 'We forward all necessary documents to the Registrar of Companies for registration.' },
        { step: 'Incorporation', description: 'Certificate of incorporation is issued along with PAN and TAN for the company.' },
        { step: 'Ongoing Compliance', description: 'We assist you in maintaining compliance with all legal and regulatory standards.' }
      ]}
      documents={[
        'Memorandum of Association (MoA)',
        'Articles of Association (AoA)',
        'Directors PAN Cards',
        'Directors Aadhaar Cards',
        'Passport-size Photographs',
        'Proof of Registered Office Address',
        'Digital Signature Certificate (DSC)',
        'Shareholders Agreement (if applicable)'
      ]}
      faqs={[
        { question: 'How many directors are necessary for a private limited company?', answer: 'A Private Limited Company must have at least two directors. However, one director may serve in two companies at a time. The maximum number of directors is 15.' },
        { question: 'Can a minor act as a director in a private limited company?', answer: 'No, a minor (person under 18 years) legally cannot act as a director of a private limited company. All directors must be adults.' },
        { question: 'How much paid up capital is required for a private limited company?', answer: 'There is no minimum requirement of paid up capital for a private limited company in India. You can start with any amount.' },
        { question: 'Can a Private Limited Company be listed on the stock exchange?', answer: 'A private limited company cannot directly list on stock exchange. It needs to convert to a public limited company first and meet SEBI requirements.' },
        { question: 'What are the annual compliance requirements?', answer: 'Annual compliances include filing annual returns (AOC-4, MGT-7), holding AGM, maintaining statutory registers, income tax filings, and audit of accounts.' },
        { question: 'How long does registration take?', answer: 'Private Limited Company registration typically takes 10-15 working days after submission of all required documents.' },
        { question: 'What is the maximum number of shareholders allowed?', answer: 'A Private Limited Company can have a maximum of 200 shareholders. The minimum requirement is 2 shareholders.' },
        { question: 'Is a resident director mandatory?', answer: 'Yes, at least one director must be a resident of India, meaning they should have stayed in India for at least 182 days in the previous calendar year.' }
      ]}
      stats={[
        { value: '5000+', label: 'Companies Registered' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '99%', label: 'Success Rate' }
      ]}
    />
  );
}
