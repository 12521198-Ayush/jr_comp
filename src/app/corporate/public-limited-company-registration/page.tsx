'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building2 } from 'lucide-react';

export default function PublicLimitedCompanyPage() {
  return (
    <ServicePageTemplate
      title="Public Limited Company Registration"
      subtitle="Scale Your Business Publicly"
      description="Need a Public Limited Company Registration Consultant? Apply for Public Limited Company Registration with our expert consultants for seamless and professional assistance."
      icon={Building2}
      color="indigo"
      serviceInfo="At JR Compliance, we provide comprehensive Public Limited Company registration services for businesses planning to raise capital from the public and achieve stock exchange listing. Our corporate experts guide you through the complex incorporation requirements including minimum director and shareholder norms. We handle DSC and DIN procurement, name approval with RUN form, and complete SPICe+ filing for public company incorporation. Our team prepares detailed MOA and AOA reflecting your business scope, share capital structure, and corporate governance framework. We coordinate with ROC authorities and ensure compliance with enhanced disclosure requirements for public companies. Post-incorporation, we assist with statutory register maintenance, board meeting compliance, and annual filing services to keep your public company in good standing."
      benefits={[
        'Raise capital from public',
        'Stock exchange listing eligible',
        'Limited liability for shareholders',
        'Enhanced credibility',
        'Perpetual succession',
        'Easy transfer of shares',
        'Separate legal entity',
        'Professional management'
      ]}
      process={[
        { step: 'DSC & DIN', description: 'Obtain Digital Signature and Director IDs for all directors' },
        { step: 'Name Approval', description: 'Apply for name reservation through RUN service' },
        { step: 'Documentation', description: 'Prepare MOA, AOA, and incorporation documents' },
        { step: 'SPICe+ Filing', description: 'File incorporation application with MCA' },
        { step: 'Incorporation', description: 'Receive Certificate of Incorporation' },
        { step: 'Post-Incorporation', description: 'Complete statutory requirements and begin operations' }
      ]}
      documents={[
        'Directors\' PAN & Aadhaar',
        'Directors\' Address Proof',
        'Passport-size Photographs',
        'Registered Office Proof',
        'NOC from Owner',
        'Shareholders\' Details',
        'Digital Signature Certificates'
      ]}
      faqs={[
        { question: 'What is a Public Limited Company?', answer: 'A public limited company is a company that can offer its shares to the general public, have unlimited number of shareholders, and can be listed on stock exchanges.' },
        { question: 'What is the minimum capital required?', answer: 'There is no minimum paid-up capital requirement for public companies after the Companies (Amendment) Act, 2015.' },
        { question: 'How many directors and shareholders are required?', answer: 'Minimum 3 directors and 7 shareholders are required for a public limited company.' },
        { question: 'Can a public company be converted to private?', answer: 'Yes, a public company can be converted to a private company by following the prescribed legal procedure and getting approval from ROC.' },
        { question: 'What are the compliance requirements?', answer: 'Public companies have stricter compliance including mandatory statutory audit, board meetings, AGM, and various filings with ROC and SEBI (if listed).' }
      ]}
    />
  );
}
