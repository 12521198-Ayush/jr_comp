'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { TrendingUp } from 'lucide-react';

export default function MutualFundCompanyPage() {
  return (
    <ServicePageTemplate
      title="Mutual Fund Company Registration"
      subtitle="SEBI Registered Asset Management"
      description="Searching for the finest consultants who can assist you in how to start a mutual fund company registration? Get complete guidance on mutual fund company registration."
      icon={TrendingUp}
      color="blue"
      benefits={[
        'SEBI regulated operations',
        'Pool investor funds professionally',
        'Diversified investment options',
        'Professional fund management',
        'Growing AUM potential',
        'Regular income through fees',
        'Market credibility',
        'Investor trust'
      ]}
      process={[
        { step: 'Sponsor Setup', description: 'Establish sponsor entity with required track record' },
        { step: 'Trust Creation', description: 'Set up mutual fund trust with SEBI' },
        { step: 'AMC Registration', description: 'Register Asset Management Company' },
        { step: 'SEBI Application', description: 'Submit application to SEBI for mutual fund registration' },
        { step: 'Compliance Setup', description: 'Establish compliance and risk management framework' },
        { step: 'License Grant', description: 'Receive registration from SEBI' }
      ]}
      documents={[
        'Sponsor Company Documents',
        'Trust Deed',
        'AMC Incorporation Documents',
        'Key Personnel Details',
        'Business Plan',
        'Networth Certificate',
        'Investment Management Agreement',
        'Custodian Agreement'
      ]}
      faqs={[
        { question: 'What is a Mutual Fund Company?', answer: 'A mutual fund is a trust that pools money from investors and invests in securities like stocks, bonds, money market instruments. It is managed by Asset Management Company (AMC).' },
        { question: 'What are the capital requirements?', answer: 'Sponsor must have positive networth with minimum 5 years track record. AMC requires minimum networth of ₹50 crore.' },
        { question: 'What is the structure of mutual fund?', answer: 'Mutual fund has three-tier structure: Sponsor (promoter), Trust (holds assets), and AMC (manages investments).' },
        { question: 'Who regulates mutual funds in India?', answer: 'Securities and Exchange Board of India (SEBI) regulates mutual funds under SEBI (Mutual Funds) Regulations, 1996.' },
        { question: 'How long does registration take?', answer: 'Mutual fund registration is a complex process taking 6-12 months depending on documentation and SEBI approval.' }
      ]}
    />
  );
}
