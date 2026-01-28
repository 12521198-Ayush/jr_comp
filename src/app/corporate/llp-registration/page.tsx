'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Scale } from 'lucide-react';

export default function LLPRegistrationPage() {
  return (
    <ServicePageTemplate
      title="LLP Registration"
      subtitle="Limited Liability Partnership"
      description="Are you searching for LLP Registration Consultants in India? Get your LLP Certificate now with expert guidance on online LLP Registration in Delhi."
      icon={Scale}
      color="cyan"
      serviceInfo="JR Compliance provides comprehensive LLP registration services for professionals and entrepreneurs seeking the benefits of limited liability with partnership flexibility. Our corporate experts help with LLP name approval, ensuring compliance with MCA naming guidelines and availability checks. We handle DSC and DPIN procurement for all designated partners and prepare customized LLP Agreement covering capital contribution, profit sharing, and management responsibilities. Our team manages the complete FiLLiP form filing process, tracks application status, and coordinates with MCA authorities for timely incorporation. We assist with obtaining Certificate of Incorporation, PAN/TAN registration, and opening LLP bank accounts. Post-registration, we provide annual compliance services including Form 8 and Form 11 filing to keep your LLP in good standing."
      benefits={[
        'Limited liability for partners',
        'Separate legal entity',
        'Less compliance than company',
        'No minimum capital required',
        'Flexibility in management',
        'Tax benefits',
        'Perpetual succession',
        'Easy ownership transfer'
      ]}
      process={[
        { step: 'DSC & DPIN', description: 'Obtain Digital Signature and Designated Partner ID' },
        { step: 'Name Reservation', description: 'Reserve LLP name using RUN-LLP service' },
        { step: 'LLP Agreement', description: 'Draft comprehensive LLP Agreement' },
        { step: 'FiLLiP Filing', description: 'File incorporation form with MCA' },
        { step: 'Incorporation', description: 'Receive Certificate of Incorporation' },
        { step: 'Agreement Filing', description: 'File LLP Agreement within 30 days' }
      ]}
      documents={[
        'Partners\' PAN Cards',
        'Partners\' Aadhaar Cards',
        'Passport-size Photographs',
        'Address Proof of Partners',
        'Registered Office Proof',
        'NOC from Owner',
        'Digital Signature Certificate'
      ]}
      faqs={[
        { question: 'What is an LLP?', answer: 'LLP (Limited Liability Partnership) is a hybrid business structure combining benefits of partnership and company, where partners have limited liability and the LLP is a separate legal entity.' },
        { question: 'How many partners are required?', answer: 'Minimum 2 designated partners are required, out of which at least one must be an Indian resident. There is no maximum limit on partners.' },
        { question: 'What is DPIN?', answer: 'DPIN (Designated Partner Identification Number) is a unique number allotted to designated partners of LLP by MCA.' },
        { question: 'Is audit mandatory for LLP?', answer: 'Audit is mandatory only if the contribution exceeds ₹25 lakhs or annual turnover exceeds ₹40 lakhs.' },
        { question: 'Can LLP be converted to a company?', answer: 'Yes, an LLP can be converted to a private or public limited company as per the provisions of Companies Act and LLP Act.' }
      ]}
    />
  );
}
