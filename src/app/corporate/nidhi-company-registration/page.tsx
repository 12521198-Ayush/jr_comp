'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Users } from 'lucide-react';

export default function NidhiCompanyPage() {
  return (
    <ServicePageTemplate
      title="Nidhi Company Registration"
      subtitle="Mutual Benefit Finance Company"
      description="Looking for the finest Nidhi company consultant? Get your Nidhi Company Registration today from best company registration consultants with complete compliance support."
      icon={Users}
      color="emerald"
      serviceInfo="JR Compliance provides specialized Nidhi Company registration services for groups looking to establish mutual benefit finance companies. Our corporate experts guide you through Nidhi Rules 2014 requirements including minimum member and capital thresholds. We handle company incorporation as a public limited company with appropriate objects clause for accepting deposits and lending to members. Our team prepares detailed MOA, AOA, and compliance documentation required for Nidhi company operations. We assist with meeting Net Owned Funds requirements, member enrollment targets, and first-year compliance filings with ROC. Post-registration, we provide ongoing support for Nidhi returns, annual compliance, and guidance on maintaining the prescribed ratios and thresholds as mandated under Nidhi Company Rules."
      benefits={[
        'Accept deposits from members',
        'Provide loans to members',
        'No RBI registration required',
        'Simple compliance framework',
        'Community-based savings',
        'Promote thrift and savings',
        'Limited liability protection',
        'Democratic management'
      ]}
      process={[
        { step: 'Company Incorporation', description: 'Register as public limited company with minimum 7 members' },
        { step: 'Capital Requirement', description: 'Ensure minimum equity share capital of ₹5 lakhs' },
        { step: 'Nidhi Compliance', description: 'Meet Nidhi Rules 2014 requirements within one year' },
        { step: 'Member Acquisition', description: 'Acquire minimum 200 members' },
        { step: 'NDH-1 Filing', description: 'File half-yearly return with ROC' },
        { step: 'MCA Declaration', description: 'Obtain Nidhi status declaration from MCA' }
      ]}
      documents={[
        'Directors\' PAN & Aadhaar',
        'Passport-size Photos',
        'Address Proof',
        'Registered Office Proof',
        'Subscriber Details (7 minimum)',
        'Digital Signature Certificate',
        'MOA & AOA (specific objectives)'
      ]}
      faqs={[
        { question: 'What is a Nidhi Company?', answer: 'Nidhi Company is a type of NBFC that deals with borrowing and lending money to its members only. It promotes thrift and savings among its members.' },
        { question: 'What are the capital requirements?', answer: 'Minimum equity share capital of ₹5 lakhs at incorporation. Net owned funds of ₹10 lakhs and 200 members required within one year.' },
        { question: 'Can Nidhi Company accept deposits from public?', answer: 'No, Nidhi Company can only accept deposits from its members. It cannot deal with non-members.' },
        { question: 'What is the interest rate limit?', answer: 'Maximum interest on deposits is 2% above the highest rate offered by nationalized banks. Maximum lending rate is 7.5% above the highest deposit rate.' },
        { question: 'Is Nidhi Company regulated by RBI?', answer: 'No, Nidhi Companies are exempt from RBI regulations. They are governed by MCA under Nidhi Rules, 2014.' }
      ]}
    />
  );
}
