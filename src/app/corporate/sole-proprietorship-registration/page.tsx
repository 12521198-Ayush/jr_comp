'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText } from 'lucide-react';

export default function SoleProprietorshipPage() {
  return (
    <ServicePageTemplate
      title="Sole Proprietorship Registration"
      subtitle="Start Your Business Journey"
      description="Register your sole proprietorship firm with expert guidance. The simplest and most straightforward business structure for individual entrepreneurs."
      icon={FileText}
      color="emerald"
      benefits={[
        'Easiest business structure to set up',
        'Complete control over business decisions',
        'Minimal compliance requirements',
        'Direct access to all profits',
        'Simple tax filing process',
        'Low setup and maintenance costs',
        'Flexibility to expand or convert later',
        'Quick registration process'
      ]}
      process={[
        { step: 'Business Name Selection', description: 'Choose a unique name for your sole proprietorship business' },
        { step: 'Document Collection', description: 'Gather identity proof, address proof, and business details' },
        { step: 'PAN Application', description: 'Apply for PAN card if not already available' },
        { step: 'Bank Account Opening', description: 'Open a current account in the business name' },
        { step: 'GST Registration', description: 'Register for GST if turnover exceeds threshold' },
        { step: 'Shop Act License', description: 'Obtain local shop and establishment license' }
      ]}
      documents={[
        'PAN Card of Proprietor',
        'Aadhaar Card',
        'Passport-size Photographs',
        'Address Proof of Business',
        'Electricity Bill / Rent Agreement',
        'Bank Account Details'
      ]}
      faqs={[
        { question: 'What is a Sole Proprietorship?', answer: 'A sole proprietorship is a business owned and operated by a single individual. It is the simplest form of business structure with no legal distinction between the owner and the business.' },
        { question: 'Is registration mandatory for Sole Proprietorship?', answer: 'While there is no specific registration for sole proprietorship, you may need GST registration, Shop Act license, and other permits depending on your business type.' },
        { question: 'What are the tax implications?', answer: 'The profits from a sole proprietorship are taxed as personal income of the proprietor. You can claim business expenses as deductions.' },
        { question: 'Can I convert my sole proprietorship to a company later?', answer: 'Yes, you can convert your sole proprietorship to a partnership, LLP, or private limited company as your business grows.' },
        { question: 'What is the liability in a Sole Proprietorship?', answer: 'In a sole proprietorship, the owner has unlimited liability, meaning personal assets can be used to settle business debts.' }
      ]}
    />
  );
}
