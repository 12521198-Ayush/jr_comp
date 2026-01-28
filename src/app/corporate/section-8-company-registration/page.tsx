'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Heart } from 'lucide-react';

export default function Section8CompanyPage() {
  return (
    <ServicePageTemplate
      title="Section 8 Company Registration"
      subtitle="Non-Profit Organization with Corporate Structure"
      description="Professional Section 8 Company Certification Consultants in Delhi offer expert guidance in forming and maintaining compliance for non-profit organizations under the Indian Companies Act, 2013."
      icon={Heart}
      color="purple"
      serviceInfo="JR Compliance provides complete Section 8 Company registration services for non-profit organizations seeking corporate structure with charitable objectives. Our corporate experts help draft MOA and AOA reflecting your organization's charitable, educational, or social objectives as required for Section 8 licensing. We prepare license applications, projected income-expenditure statements, and source of funds documentation for Central Government approval. Our team handles the complete MCA filing process, coordinates with ROC authorities, and ensures timely license and incorporation certificate issuance. We assist with PAN/TAN registration, 12A and 80G tax exemption applications, and FCRA registration for receiving foreign contributions. Post-registration, we provide annual compliance services including ROC filings and tax returns to maintain your Section 8 company's good standing."
      benefits={[
        'No minimum capital required',
        'Tax exemptions available',
        'Enhanced credibility',
        'Limited liability for members',
        'Separate legal entity status',
        'Perpetual succession',
        'CSR funding eligibility',
        'Government recognition'
      ]}
      process={[
        { step: 'DSC & DIN', description: 'Obtain Digital Signature and Director Identification Number' },
        { step: 'Name Approval', description: 'Apply for name reservation with MCA' },
        { step: 'License Application', description: 'Apply for Section 8 license using INC-12' },
        { step: 'Document Preparation', description: 'Draft MOA, AOA with non-profit objectives' },
        { step: 'License Issuance', description: 'Receive license from Regional Director' },
        { step: 'Incorporation', description: 'File SPICe+ for company incorporation' }
      ]}
      documents={[
        'Directors\' PAN & Aadhaar',
        'Passport-size Photographs',
        'Address Proof of Directors',
        'Registered Office Proof',
        'Declaration by Promoters',
        'Estimated Income & Expenditure',
        'Objects Clause Statement'
      ]}
      faqs={[
        { question: 'What is Section 8 Company?', answer: 'Section 8 Company is a non-profit organization registered under Companies Act, 2013 for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or protection of environment.' },
        { question: 'Can Section 8 Company distribute profits?', answer: 'No, Section 8 Company cannot distribute dividends to members. All profits must be used for promoting the objects of the company.' },
        { question: 'What are the tax benefits?', answer: 'Section 8 Companies can apply for 12A registration for income tax exemption and 80G registration allowing donors to claim tax deductions.' },
        { question: 'How is Section 8 different from Trust/Society?', answer: 'Section 8 Company has more structured governance, stricter compliance requirements, and offers better credibility compared to Trust or Society.' },
        { question: 'What is the minimum number of directors?', answer: 'Minimum 2 directors for Private Company structure and 3 directors for Public Company structure under Section 8.' }
      ]}
    />
  );
}
