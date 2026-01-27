'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FSSAIModificationPage() {
  return (
    <ServicePageTemplate
      title="FSSAI Modification"
      subtitle="Food Safety Compliance"
      description="FSSAI modification is essential when your business details change. Whether it's address, ownership, products, or business name - we help you update your license quickly and compliantly."
      logo="/services_logo/fssai.png"
      color="green"
      benefits={[
        'Legal validity - Updating changes promptly keeps your FSSAI license valid and prevents penalties or cancellation',
        'Smooth operations - An updated license helps avoid operational interruptions during inspections or renewals',
        'Business credibility - Accurate license details boost consumer trust and demonstrate transparency',
        'Easy renewals - A modified and up-to-date license simplifies future regulatory procedures',
        'Quick processing and hassle-free documentation',
        'Expert guidance on major vs minor modifications',
        'Complete portal navigation assistance',
        'Authority coordination and query handling'
      ]}
      process={[
        { step: 'Assess Modification Type', description: 'We evaluate whether the change qualifies as major or minor modification under FSSAI guidelines.' },
        { step: 'Document Preparation', description: 'All supporting documents for the proposed change are collected, verified, and organized.' },
        { step: 'Application Filing', description: 'We file the online application with the FSSAI portal along with required documents.' },
        { step: 'Authority Liaison', description: 'We coordinate with FSSAI department if any queries or clarifications are raised.' },
        { step: 'Status Tracking', description: 'Our team continuously monitors the application status and updates you on progress.' },
        { step: 'License Issuance', description: 'Once approved, the modified FSSAI license reflecting updated details is issued.' }
      ]}
      documents={[
        'Existing FSSAI License Copy',
        'Supporting Documents for Changes',
        'Board Resolution/Authorization',
        'Identity & Address Proof',
        'New Premises Documents (if address change)',
        'Updated Product List (if product addition)',
        'Ownership Transfer Documents (if applicable)',
        'NOC from Previous Owner (if ownership change)'
      ]}
      faqs={[
        { question: 'What is FSSAI modification?', answer: 'FSSAI modification is the process of updating any changes in business details like name, address, products, or ownership in your FSSAI license to maintain compliance.' },
        { question: 'When should I apply for FSSAI modification?', answer: 'You must apply for modification immediately after any change occurs. Delaying it can result in penalties, inspections, or even cancellation of your license.' },
        { question: 'What is the difference between major and minor modification?', answer: 'Major modifications involve changes like business name, address, or ownership, while minor modifications include adding new products or small detail changes.' },
        { question: 'How long does FSSAI modification take?', answer: 'FSSAI modification typically takes 15-30 days depending on the type of modification and completeness of documentation.' },
        { question: 'Can I continue business without modifying the license?', answer: 'No, continuing business with incorrect or outdated license information is a violation and can lead to strict actions from food safety authorities.' },
        { question: 'What types of modifications can be done?', answer: 'You can modify business address, business name, ownership/directors, add new products, change business activity, and update other details in your FSSAI license.' },
        { question: 'Is there a fee for FSSAI modification?', answer: 'Yes, there are nominal government fees for FSSAI modification which vary based on the type of modification being done.' },
        { question: 'Can I add new food categories to my license?', answer: 'Yes, adding new food product categories is considered a modification and requires proper documentation and approval from FSSAI.' }
      ]}
      stats={[
        { value: '8000+', label: 'FSSAI Services' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '99%', label: 'Success Rate' }
      ]}
    />
  );
}
