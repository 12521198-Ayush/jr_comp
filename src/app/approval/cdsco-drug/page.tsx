'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function DrugCDSCOPage() {
  return (
    <ServicePageTemplate
      title="Drug CDSCO Registration"
      subtitle="Drug Licensing under CDSCO Regulations"
      logo="/services_logo/cdsco.png"
      color="red"
      description="Assistance with licensing and approvals for pharmaceutical products and formulations."
      serviceInfo="At JR Compliance, we provide expert regulatory support for pharmaceutical drug registration and licensing under CDSCO and the Drugs & Cosmetics Act. Our regulatory affairs specialists guide you through the appropriate approval pathway based on your drug category, whether new drug, generic, or biological product. We prepare comprehensive dossiers including Chemistry, Manufacturing & Controls (CMC) data, stability studies, and clinical trial documentation. Our team manages the entire approval process on the SUGAM portal, coordinates with Subject Expert Committees, and handles queries from CDSCO officials. We assist with import registrations, manufacturing license applications, and clinical trial approvals as per regulatory requirements. Post-approval, we offer pharmacovigilance support, license renewals, and ongoing compliance management for your pharmaceutical portfolio."
      stats={[
        { value: '1200+', label: 'Drug Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '96%', label: 'Success Rate' },
      ]}
      benefits={[
        'Manufacturing license for pharmaceutical products',
        'Import registration for foreign drugs',
        'New drug approval (NDA) assistance',
        'Clinical trial approval support',
        'Expert regulatory pathway guidance',
        'Compliance with Drugs & Cosmetics Act',
        'Bioequivalence study coordination',
        'Post-marketing surveillance support',
        'Complete documentation assistance'
      ]}
      process={[
        { step: 'Drug Classification', description: 'Determine drug category - new drug, generic, biological, etc.' },
        { step: 'Regulatory Pathway', description: 'Identify appropriate regulatory pathway based on drug type.' },
        { step: 'Documentation', description: 'Prepare CMC data, preclinical data, and clinical evidence.' },
        { step: 'Application Filing', description: 'Submit application on SUGAM portal with complete dossier.' },
        { step: 'CDSCO Review', description: 'Technical review by CDSCO, may include SEC meeting.' },
        { step: 'Approval/License', description: 'Receive drug registration or manufacturing license.' }
      ]}
      documents={[
        'Application Form',
        'Drug Master File (DMF)',
        'Chemistry, Manufacturing & Controls (CMC) Data',
        'Stability Studies Data',
        'Bioequivalence/Bioavailability Studies',
        'Clinical Trial Data (for new drugs)',
        'GMP Certificate',
        'Certificate of Pharmaceutical Product (COPP)',
        'Free Sale Certificate'
      ]}
      faqs={[
        { question: 'What is CDSCO drug registration?', answer: 'CDSCO drug registration is the regulatory approval required to manufacture, import, or sell pharmaceutical products in India.' },
        { question: 'How long does drug registration take?', answer: 'Generic drugs take 6-12 months, new drugs may take 2-3 years including clinical trials.' },
        { question: 'Is clinical trial required for all drugs?', answer: 'Clinical trials are required for new drugs. Generic drugs need bioequivalence studies.' },
        { question: 'What is the validity of drug registration?', answer: 'Import registration is valid for 3 years. Manufacturing license validity varies by state.' },
        { question: 'Can foreign companies directly register drugs?', answer: 'Foreign manufacturers need an authorized Indian agent for drug registration in India.' },
        { question: 'What is a SEC meeting?', answer: 'Subject Expert Committee (SEC) reviews new drug applications and provides recommendations to CDSCO.' }
      ]}
    />
  );
}
