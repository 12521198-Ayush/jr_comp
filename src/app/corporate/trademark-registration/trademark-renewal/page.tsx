'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { RefreshCw } from 'lucide-react';

export default function TrademarkRenewalPage() {
  return (
    <ServicePageTemplate
      title="Trademark Renewal"
      subtitle="Maintain Your Brand Protection"
      description="Professional trademark renewal services to maintain your brand protection. We handle timely renewal filings to ensure uninterrupted trademark rights."
      icon={RefreshCw}
      color="green"
      benefits={[
        'Timely Renewal - File before expiry to avoid lapse',
        'Restoration Filing - Restore expired trademarks within grace period',
        'Multiple Mark Handling - Renew portfolio of trademarks efficiently',
        'Reminder Service - Proactive renewal reminders',
        'Complete Documentation - Handle all renewal paperwork',
        'Fee Optimization - Avoid late fees through timely filing',
        'Record Update - Ensure updated address/details during renewal',
        '10-Year Protection - Secure another decade of brand protection'
      ]}
      process={[
        { step: 'Expiry Check', description: 'Verify trademark expiry date and renewal window.' },
        { step: 'Record Review', description: 'Review current records for any updates needed.' },
        { step: 'Form Preparation', description: 'Prepare Form TM-R for renewal application.' },
        { step: 'Fee Payment', description: 'Pay renewal fees (basic or with surcharge if late).' },
        { step: 'Filing Submission', description: 'File renewal application with Trademark Registry.' },
        { step: 'Confirmation', description: 'Receive renewal confirmation and updated certificate.' }
      ]}
      documents={[
        'Original Trademark Certificate',
        'Trademark Registration Number',
        'Proof of Identity (current)',
        'Updated Address Proof (if changed)',
        'Power of Attorney',
        'Board Resolution (for companies)',
        'Name Change Proof (if applicable)',
        'Fee Payment Receipt'
      ]}
      faqs={[
        { question: 'What is trademark renewal validity?', answer: 'Trademark renewal extends protection for another 10 years from the date of expiry of the previous registration.' },
        { question: 'When should I renew trademark?', answer: 'Renewal can be filed up to 6 months before expiry date. It\'s recommended to file 2-3 months before expiry.' },
        { question: 'What if I miss renewal date?', answer: 'You can file restoration application within 6 months of expiry by paying additional surcharge/restoration fee.' },
        { question: 'What is the renewal fee?', answer: 'Government fees are Rs 9,000 per class for normal renewal, with additional Rs 3,000 surcharge for late/restoration filing.' },
        { question: 'Can expired trademark be renewed?', answer: 'Yes, within 6 months of expiry through restoration process. After 6 months, the trademark lapses permanently.' },
        { question: 'Is trademark examination done during renewal?', answer: 'No fresh examination is done. Renewal is mostly an administrative process if all documents are in order.' },
        { question: 'Can I update details during renewal?', answer: 'Yes, you can update address and other details during renewal by filing appropriate forms along with renewal.' },
        { question: 'How long does renewal take?', answer: 'Renewal confirmation is usually received within 1-2 months of filing if all documents are correct.' }
      ]}
      stats={[
        { value: '3000+', label: 'Renewals Filed' },
        { value: '100%', label: 'Success Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '4.9', label: 'Google Rating' }
      ]}
    />
  );
}
