'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building2 } from 'lucide-react';

export default function CompanyRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Company Registration"
      subtitle="Corporate Services"
      icon={Building2}
      color="blue"
      description="Start your entrepreneurial journey with JR Compliance. We provide end-to-end company registration services including Private Limited Company, LLP, One Person Company, and Partnership Firm registration with minimal documentation and quick processing."
      serviceInfo="JR Compliance provides comprehensive company registration services to help entrepreneurs establish their business entities quickly and efficiently. Our corporate law experts guide you through entity selection - Private Limited Company, LLP, OPC, or Partnership - based on your business needs and growth plans. We handle the complete registration process including DSC procurement, DIN application, name approval, and MCA filing with accurate documentation. Our team prepares MOA, AOA, LLP Agreement, and other incorporation documents tailored to your business requirements. We coordinate with ROC authorities, track application status, and ensure timely certificate of incorporation. Post-registration, we provide PAN/TAN registration, bank account opening support, and ongoing annual compliance services to keep your company in good standing."
      benefits={[
        'Quick registration within 7-10 working days',
        'Complete documentation support',
        'PAN & TAN registration included',
        'Digital Signature Certificate (DSC) assistance',
        'Director Identification Number (DIN) procurement',
        'Registered office address support',
        'Post-incorporation compliance guidance',
        'Dedicated relationship manager',
        'Bank account opening assistance',
      ]}
      process={[
        { step: 'Consultation', description: 'Free consultation to understand your business needs and recommend the right structure.' },
        { step: 'Documentation', description: 'We help you prepare and verify all required documents.' },
        { step: 'Filing', description: 'Application filing with MCA and follow-up with authorities.' },
        { step: 'Incorporation', description: 'Receive your Certificate of Incorporation and commence business.' },
      ]}
      documents={[
        'PAN Card of Directors/Partners',
        'Aadhaar Card of Directors/Partners',
        'Passport size photographs',
        'Address proof (Electricity bill/Water bill)',
        'Rental agreement or NOC from property owner',
        'Bank statement (last 3 months)',
        'Proof of registered office address',
        'Digital Signature Certificate (we can help obtain)',
      ]}
      faqs={[
        {
          question: 'How long does company registration take?',
          answer: 'Typically, company registration takes 7-10 working days after submission of all documents. However, it may vary based on government processing times.',
        },
        {
          question: 'What is the minimum capital required?',
          answer: 'There is no minimum capital requirement for Private Limited Company registration in India. You can start with any amount.',
        },
        {
          question: 'Can I register a company with a single director?',
          answer: 'Yes, you can register a One Person Company (OPC) with a single director and shareholder. For Private Limited Company, minimum 2 directors are required.',
        },
        {
          question: 'Is GST registration included in the package?',
          answer: 'GST registration is a separate service. However, we offer bundled packages that include GST registration along with company registration.',
        },
      ]}
    />
  );
}
