'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Edit3 } from 'lucide-react';

export default function TrademarkModificationPage() {
  return (
    <ServicePageTemplate
      title="Trademark Modification"
      subtitle="Update Your Trademark Details"
      description="Professional trademark modification services to update your registered trademark details. We handle name changes, address updates, and other modifications with the Trademark Registry."
      icon={Edit3}
      color="blue"
      serviceInfo="At JR Compliance, we provide comprehensive trademark modification services to keep your registration records accurate and current. Our IP team handles proprietor name changes due to company restructuring, mergers, or individual name corrections with proper supporting documentation. We process address updates, whether simple relocations or registered office changes requiring ROC certificates. Our services include trademark assignment recording when ownership transfers through sale, inheritance, or business succession. We handle license recordation for franchising arrangements and user permission agreements. Our team also assists with specification amendments to expand or narrow goods/services coverage. We ensure all modifications comply with Trademark Registry procedures and maintain the validity and enforceability of your trademark rights."
      benefits={[
        'Name Change Update - Modify proprietor/company name on trademark',
        'Address Update - Change registered address on trademark records',
        'Logo Modification - Update trademark logo with proper procedure',
        'Assignment Recording - Record trademark ownership transfers',
        'Class Addition - Add new classes to existing registration',
        'Description Changes - Modify goods/services description',
        'Legal Compliance - Ensure trademark records match current business details',
        'Validity Preservation - Maintain trademark rights during modification'
      ]}
      process={[
        { step: 'Change Assessment', description: 'Evaluate required changes and applicable modification procedure.' },
        { step: 'Document Preparation', description: 'Prepare supporting documents for the modification request.' },
        { step: 'Form Selection', description: 'Identify correct form (TM-P, TM-26, etc.) for the type of change.' },
        { step: 'Application Filing', description: 'File modification application with the Trademark Registry.' },
        { step: 'Fee Payment', description: 'Pay applicable government fees for modification.' },
        { step: 'Record Update', description: 'Registry updates records and issues confirmation.' }
      ]}
      documents={[
        'Original Trademark Certificate',
        'Proof of Name Change (if applicable)',
        'Board Resolution (for companies)',
        'Updated Address Proof',
        'New Logo Copy (if changing logo)',
        'Assignment Deed (for ownership change)',
        'Power of Attorney',
        'Identity Proof of Applicant'
      ]}
      faqs={[
        { question: 'What changes can be made to a trademark?', answer: 'You can modify proprietor name, address, add/remove proprietors, record assignments, and make limited changes to trademark representation.' },
        { question: 'Can I change my trademark logo?', answer: 'Minor alterations that don\'t substantially affect the trademark\'s identity are allowed. Major changes require fresh application.' },
        { question: 'How long does modification take?', answer: 'Simple modifications like address change take 2-4 months. Complex changes like assignment recording may take longer.' },
        { question: 'What is the fee for trademark modification?', answer: 'Government fees vary from Rs 900 to Rs 9,000 depending on the type of modification and applicant category.' },
        { question: 'Can I add new products to my trademark?', answer: 'You cannot add new products/services to existing registration. You need to file fresh application for additional classes.' },
        { question: 'Is modification mandatory for address change?', answer: 'Yes, trademark records should reflect current address for receiving official communications and maintaining validity.' },
        { question: 'What if company name changed?', answer: 'File Form TM-P with company name change documents like ROC certificate showing name change.' },
        { question: 'Can I transfer trademark ownership?', answer: 'Yes, through trademark assignment. The transfer must be recorded with the registry using Form TM-P.' }
      ]}
      stats={[
        { value: '2000+', label: 'Modifications Done' },
        { value: '4.8', label: 'Google Rating' },
        { value: '100%', label: 'Compliance' },
        { value: '12+', label: 'Years Experience' }
      ]}
    />
  );
}
