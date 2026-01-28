'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Rocket } from 'lucide-react';

export default function StartupIndiaPage() {
  return (
    <ServicePageTemplate
      title="Startup India Registration"
      subtitle="An Initiative By Indian Government"
      description="Get your Startup India Certificate and unlock exclusive benefits including tax exemptions, funding support, and easier compliance. Join the movement transforming India's entrepreneurial ecosystem."
      icon={Rocket}
      color="indigo"
      serviceInfo="At JR Compliance, we provide comprehensive Startup India registration services to help innovative businesses access government benefits and recognition. Our startup advisors verify your eligibility based on innovation, scalability, and incorporation date criteria as per DPIIT guidelines. We prepare detailed applications including business descriptions, innovation statements, and supporting documentation for the Startup India portal. Our team assists with DPIIT recognition application, tracks approval status, and helps address any clarifications required. We guide you through tax exemption applications under Section 80-IAC for eligible startups and assist with angel tax exemption certifications. Post-registration, we provide ongoing support for accessing Startup India Hub resources, seed funding schemes, and government tender benefits available to recognized startups."
      benefits={[
        'Tax exemption for 3 consecutive years',
        'Self-certification for 9 labor and environment laws',
        'Fast-track patent application at 80% rebate',
        'Easy winding up of company in 90 days',
        'Access to Fund of Funds worth ₹10,000 crore',
        'Networking opportunities with investors',
        'Government tender exemptions',
        'Free IPR fast-tracking support'
      ]}
      process={[
        { step: 'Company Registration', description: 'Register your entity as Private Limited, LLP, or Partnership Firm' },
        { step: 'DPIIT Recognition', description: 'Apply for recognition on the Startup India portal' },
        { step: 'Document Submission', description: 'Upload incorporation certificate and other required documents' },
        { step: 'Application Review', description: 'DPIIT reviews your application and startup credentials' },
        { step: 'Certificate Issuance', description: 'Receive your Startup India Recognition Certificate' },
        { step: 'Avail Benefits', description: 'Start accessing various schemes and benefits' }
      ]}
      documents={[
        'Certificate of Incorporation',
        'PAN Card of Entity',
        'Details of Directors/Partners',
        'Brief Description of Business',
        'Proof of Funding (if any)',
        'Patents/Trademarks (if any)'
      ]}
      faqs={[
        { question: 'Who can apply for Startup India Registration?', answer: 'Any entity registered as Private Limited Company, Partnership Firm, or LLP that is working towards innovation, development, or commercialization of new products or services, and is less than 10 years old with turnover not exceeding ₹100 crore.' },
        { question: 'What is DPIIT Recognition?', answer: 'DPIIT (Department for Promotion of Industry and Internal Trade) recognition is the official acknowledgment of your entity as a Startup, enabling access to various government benefits and schemes.' },
        { question: 'What tax benefits do recognized startups get?', answer: 'Recognized startups can avail income tax exemption for 3 consecutive years out of their first 10 years. They also get exemption from Angel Tax under Section 56(2)(viib).' },
        { question: 'How long does the registration process take?', answer: 'The Startup India registration process typically takes 2-5 working days after submitting all required documents on the portal.' },
        { question: 'Can existing businesses apply for Startup India?', answer: 'Yes, existing businesses can apply if they meet the eligibility criteria - incorporated for less than 10 years and turnover not exceeding ₹100 crore in any financial year.' }
      ]}
    />
  );
}
