'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck } from 'lucide-react';

export default function CompanyRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Company Registration"
      subtitle="From Idea to Entity: Transform Your Business"
      description="As India's leading private compliance consultancy firm, we reward candor by providing transparent, expert-driven solutions that protect your business. Partner with us today and secure your compliance with confidence!"
      icon={FileCheck}
      color="blue"
      stats={[
        { value: '5,000+', label: 'Companies Incorporated' },
        { value: '100%', label: 'Legal Compliance Ensured' },
        { value: '7+', label: 'Years Registration Expertise' },
        { value: '4.9', label: 'Google Rating' },
      ]}
      serviceInfo="Every business starts with a plan and one of the most crucial planning steps is registering your business. This process provides legal personality through your business name as well as serves as a shield to your assets, helps in accessing loans with ease and helps your business gain access to government subsidies and programs intended for new businesses. A registered company gains a separate legal identity, protecting personal assets from business liabilities. It enhances trust among customers, investors, and suppliers by showcasing professionalism and business authenticity. Registration also makes it easier to attract investors, apply for loans, and raise capital for business growth."
      benefits={[
        'Access to government schemes and subsidies: After registering your company, you can access numerous benefits including government programs designed to support the growth of new businesses and entrepreneurs',
        'Increased trust and credibility: Registering your business demonstrates your commitment to long-term operation, legal compliance, and transparency, building trust among customers, investors, and business partners',
        'Receive legal protection: Registering your business ensures legal protection, keeping your personal property safe from business-related lawsuits and protecting your assets from liability',
        'Apply for loans with ease: A registered company with a stronger financial profile makes securing loans and gaining access to credit facilities from banks and financial institutions easier',
        'Sole Proprietorship: A business structure where the owner has full control and unlimited liability for profits and debts',
        'Partnership Firm: A business owned by two or more people who share equal responsibilities, profits, and liabilities',
        'Private Limited Company: A business entity that limits owner liability, has shareholders and restricts public share trading',
        'One Person Company (OPC): A single-owner company with limited liability that provides the advantages of a corporate structure',
        'Limited Liability Partnership (LLP): A combination of partnership and corporation characteristics, granting partners limited liability',
        'Section 8 Company: A non-profit organization that promotes commerce, education, charity, and social welfare',
        'Public Limited Company: Issues shares to the public with limited liability and adheres to stricter regulatory requirements',
        'Nidhi Company: A non-banking financial institution dedicated to encouraging savings and mutual benefit among members',
        'Producer Company: Specializes in producing, harvesting, and selling agricultural products from farmers and producers',
        'Insurance Company: Manages risk through policies that provide financial protection against various losses',
      ]}
      process={[
        { step: 'Choose a Company Name', description: 'Select a unique and legally compliant name that reflects your company\'s activities' },
        { step: 'Identify Company Structure', description: 'Determine an appropriate structure (LLP, Pvt. Ltd., or Partnership) based on business requirements' },
        { step: 'Get DSC & Apply for DIN', description: 'Obtain a digital signature from authorized signatories and register for a DIN for all directors' },
        { step: 'Draft MOA & AOA', description: 'Prepare the Memorandum and Articles of Association — important governance documents detailing objectives and rules' },
        { step: 'File Registration Application', description: 'Submit the registration application and all required documents to the Ministry of Corporate Affairs' },
        { step: 'Receive Certificate of Incorporation', description: 'Once approved, the company will be recognized as a legal entity with its own identity' },
      ]}
      documents={[
        'Director\'s Identity Proof (Aadhar, PAN, or Passport)',
        'Registered Office Address Proof (Utility bill, rental agreement, or NOC)',
        'Director\'s Address Proof (Passport, Voter ID, or Bank Statement)',
        'Memorandum & Articles of Association (MOA & AOA)',
        'Digital Signature Certificate (DSC)',
        'Director Identification Number (DIN)',
        'Passport Size Photographs',
        'PAN Card of Directors',
      ]}
      faqs={[
        {
          question: 'What are the different types of registrations under company registration?',
          answer: 'India has multiple registrations categorized under company registration including Private Limited Company (Pvt. Ltd.), Limited Liability Partnership (LLP), One Person Company (OPC), Public Limited Company, and Sole Proprietorship. Each comprises different tax implications and sets of compliances required to be followed.',
        },
        {
          question: 'What are the key required documents for company registration?',
          answer: 'The key documents required include identity proof like Aadhar and PAN card, address proof like utility bill or rent agreement, passport size photograph, Director Identification Number (DIN), Digital Signature Certificate (DSC), Memorandum of Association (MOA), and Articles of Association (AOA).',
        },
        {
          question: 'What is the duration of the registration process for a company in India?',
          answer: 'The registration process usually takes 5 to 20 working days, but the timing varies depending on document verification, government approvals, and application completeness, including the type of company registration as the compliance requirements differ for each type.',
        },
        {
          question: 'Can a foreign entrepreneur register a company in India?',
          answer: 'Yes, foreign entrepreneurs and NRIs can register a company in India, usually through a Private Limited Company or Limited Liability Partnership (LLP), provided they meet FDI guidelines, appoint an Indian resident director, and follow all compliance regulations.',
        },
        {
          question: 'What are the post-registration compliance requirements in India?',
          answer: 'After registration, all businesses must obtain a PAN & TAN number, register for GST (if applicable and exceed the prescribed limit), maintain financial records, file annual returns with the Ministry of Corporate Affairs (MCA), and comply with tax and regulatory filings.',
        },
        {
          question: 'What deliverables will I receive after company registration?',
          answer: 'You will receive an Incorporation Certificate, Director Identification Number (DIN) & Digital Signature Certificate (DSC), PAN & TAN of the company, and the Memorandum & Articles of Association (MOA & AOA) or Partnership Deed.',
        },
        {
          question: 'What is the eligibility criteria for company registration?',
          answer: 'You need at least one director (one must be an Indian resident for a private company), minimum two shareholders for a private limited company (one for OPC), a registered office address in India, and valid ID proof such as Aadhar card, PAN card, or passport.',
        },
        {
          question: 'Why should I choose JR Compliance for company registration?',
          answer: 'We provide a streamlined registration process with expert advice, comprehensive document preparation and review services, and constant post-registration support including compliance management and legal advice tailored to your business needs.',
        },
      ]}
    />
  );
}
