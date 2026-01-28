'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FSSAIModificationPage() {
  return (
    <ServicePageTemplate
      title="FSSAI Modification"
      subtitle="Update Your Food License"
      description="Need to update your FSSAI license details? JR Compliance helps food businesses modify their FSSAI registration or license efficiently, ensuring continued compliance with food safety standards."
      serviceInfo="JR Compliance provides expert assistance for updating your FSSAI license details through the FoSCoS portal quickly and accurately. Our food safety consultants assess your modification requirements and guide you through the appropriate process for minor or major changes. We prepare all necessary documentation including address proof, ownership transfer documents, or updated product lists as required for your specific modification. Our team handles the complete online submission process, ensuring all fields are correctly filled and supporting documents are properly uploaded. We track your application status, respond to queries from FSSAI authorities, and ensure timely approval of modifications. Post-modification, we provide license renewal reminders and ongoing compliance support for your food business."
      logo="/services_logo/fssai.png"
      color="orange"
      benefits={[
        'Quick modification process',
        'Update business address seamlessly',
        'Add or remove food categories',
        'Change business ownership details',
        'Update contact information',
        'Modify manufacturing capacity',
        'Expert guidance throughout',
        'Maintain compliance continuity'
      ]}
      process={[
        { step: 'Application Review', description: 'Review current FSSAI license details and identify required modifications' },
        { step: 'Document Preparation', description: 'Prepare supporting documents for the modification request' },
        { step: 'Online Application', description: 'Submit modification application on FSSAI portal' },
        { step: 'Fee Payment', description: 'Pay applicable modification fees online' },
        { step: 'Verification', description: 'FSSAI authority reviews and verifies the modification request' },
        { step: 'Updated License', description: 'Receive modified FSSAI license with updated details' }
      ]}
      documents={[
        'Existing FSSAI License Copy',
        'Proof of Change (Address/Name)',
        'Updated Food Categories List',
        'Identity Proof of Applicant',
        'Business Registration Documents',
        'NOC from Landlord (if address change)'
      ]}
      faqs={[
        { question: 'When do I need FSSAI Modification?', answer: 'You need modification when there are changes in business name, address, food categories, ownership, or any other details mentioned in your FSSAI license.' },
        { question: 'Can I add new food categories to my existing license?', answer: 'Yes, you can add new food categories to your existing FSSAI license through the modification process without applying for a new license.' },
        { question: 'How long does the modification process take?', answer: 'The FSSAI modification process typically takes 7-15 working days depending on the type of modification and verification requirements.' },
        { question: 'Is there a fee for FSSAI Modification?', answer: 'Yes, there is a nominal fee for FSSAI modification which varies based on the type of modification and license category.' },
        { question: 'Can I operate during the modification process?', answer: 'Yes, your existing license remains valid during the modification process. You can continue operations as usual.' }
      ]}
    />
  );
}
