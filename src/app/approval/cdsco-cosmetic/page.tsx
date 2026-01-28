'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CosmeticCDSCOPage() {
  return (
    <ServicePageTemplate
      title="Cosmetic CDSCO"
      subtitle="Regulatory Approval for Cosmetic Products"
      logo="/services_logo/cdsco.png"
      color="pink"
      description="Regulatory assistance for cosmetic product approvals under Indian drug and cosmetic laws."
      serviceInfo="At JR Compliance, we provide specialized regulatory support for cosmetic product registration under CDSCO guidelines and the Cosmetics Rules 2020. Our experts help you determine whether your product falls under cosmetics or drug categories and guide you through the appropriate approval pathway. We prepare comprehensive documentation including product formulation, safety data, and label compliance for submission on the SUGAM portal. Our team coordinates product testing requirements and ensures your cosmetics meet all safety and quality parameters mandated by Indian regulations. We handle import license applications for foreign cosmetic brands and manufacturing license support for domestic producers. Post-approval, we provide ongoing compliance support, license renewal services, and assistance with product range expansions."
      stats={[
        { value: '1500+', label: 'Cosmetic Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      benefits={[
        'Legal authorization to manufacture/import cosmetics',
        'Market access for cosmetic products in India',
        'Compliance with Cosmetics Rules 2020',
        'Import license for foreign cosmetics',
        'Brand credibility with CDSCO approval',
        'Expert regulatory guidance',
        'Quick processing and approval',
        'Complete documentation support',
        'Post-approval compliance assistance'
      ]}
      process={[
        { step: 'Product Classification', description: 'Determine if product is cosmetic or drug under Drugs & Cosmetics Act.' },
        { step: 'Document Preparation', description: 'Compile product formulation, safety data, and manufacturing details.' },
        { step: 'Application Filing', description: 'Submit application on SUGAM portal with required documents.' },
        { step: 'Testing', description: 'Product testing for safety and quality parameters if required.' },
        { step: 'CDSCO Review', description: 'CDSCO reviews application and may request additional information.' },
        { step: 'License Issuance', description: 'Receive manufacturing/import license for cosmetic products.' }
      ]}
      documents={[
        'Application Form',
        'Product Formulation',
        'Product Label and Artwork',
        'Safety Data Sheet',
        'Manufacturing License (for manufacturers)',
        'Free Sale Certificate (for imports)',
        'Certificate of Analysis',
        'GMP Certificate',
        'Authorization Letter'
      ]}
      faqs={[
        { question: 'What products fall under cosmetic category?', answer: 'Products like skin creams, lipsticks, shampoos, hair dyes, perfumes, and similar items intended for beautification fall under cosmetics.' },
        { question: 'Is CDSCO registration mandatory for cosmetics?', answer: 'Yes, manufacturing or importing cosmetics in India requires license/registration from CDSCO under the Drugs & Cosmetics Act.' },
        { question: 'How long does cosmetic registration take?', answer: 'The process typically takes 2-4 months depending on product category and completeness of documentation.' },
        { question: 'What is the difference between cosmetic and drug?', answer: 'Cosmetics are for beautification while drugs claim therapeutic benefits. Products claiming to treat conditions are classified as drugs.' },
        { question: 'Can I import cosmetics without license?', answer: 'No, importing cosmetics for sale requires an import license from CDSCO. Personal use imports have separate provisions.' },
        { question: 'What testing is required for cosmetics?', answer: 'Testing includes safety tests, microbial limits, heavy metals, and specific tests based on product category.' }
      ]}
    />
  );
}
