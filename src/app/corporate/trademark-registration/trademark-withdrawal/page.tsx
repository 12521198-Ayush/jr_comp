'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { XCircle } from 'lucide-react';

export default function TrademarkWithdrawalPage() {
  return (
    <ServicePageTemplate
      title="Trademark Withdrawal"
      subtitle="Application Management"
      description="Professional trademark withdrawal services. We help you formally withdraw trademark applications or registrations when needed, ensuring proper legal procedure is followed."
      icon={XCircle}
      color="gray"
      serviceInfo="At JR Compliance, we provide professional trademark withdrawal services when strategic or practical considerations require discontinuing an application or registration. Our IP team advises on withdrawal implications including fee recovery possibilities, impact on priority claims, and effect on related applications. We handle complete withdrawal from all classes or partial withdrawal to focus on core business areas while reducing fees. Our services include opposition withdrawal when settlements are reached, application abandonment documentation, and voluntary surrender of registered trademarks. We prepare proper TM-O forms with required statements and ensure withdrawals are recorded correctly in Registry records. We also advise on timing considerations - whether to withdraw before examination to avoid objections on record, or strategic withdrawals during opposition negotiations. Our approach ensures proper legal closure while protecting your options for future filings."
      benefits={[
        'Formal Withdrawal - Proper legal withdrawal of trademark application',
        'Registration Surrender - Voluntary surrender of trademark rights',
        'Partial Withdrawal - Withdraw from specific classes only',
        'Opposition Withdrawal - Withdraw pending opposition proceedings',
        'Settlement Support - Facilitate withdrawals as part of settlements',
        'Documentation - Proper withdrawal letter and forms',
        'Record Update - Ensure registry records are updated',
        'Refund Assistance - Guidance on any applicable fee refunds'
      ]}
      process={[
        { step: 'Withdrawal Assessment', description: 'Understand reason and implications of withdrawal.' },
        { step: 'Option Evaluation', description: 'Evaluate partial vs full withdrawal options.' },
        { step: 'Form Preparation', description: 'Prepare withdrawal request form and letter.' },
        { step: 'Filing Submission', description: 'File withdrawal with Trademark Registry.' },
        { step: 'Confirmation', description: 'Receive confirmation of withdrawal acceptance.' },
        { step: 'Record Closure', description: 'Ensure application/registration is marked withdrawn.' }
      ]}
      documents={[
        'Trademark Application Number',
        'Trademark Certificate (if registered)',
        'Withdrawal Letter',
        'Board Resolution (for companies)',
        'Authorization Letter',
        'Settlement Agreement (if applicable)',
        'Identity Proof',
        'Power of Attorney'
      ]}
      faqs={[
        { question: 'Can I withdraw trademark application?', answer: 'Yes, you can withdraw your trademark application at any stage before registration by filing a withdrawal request.' },
        { question: 'Can I surrender registered trademark?', answer: 'Yes, a registered trademark can be voluntarily surrendered. This extinguishes your trademark rights from that date.' },
        { question: 'Is there any fee for withdrawal?', answer: 'There is no government fee for withdrawal of trademark application or surrender of registration.' },
        { question: 'Can I withdraw from one class only?', answer: 'Yes, in multi-class applications, you can request partial withdrawal from specific classes while continuing in others.' },
        { question: 'Will I get refund after withdrawal?', answer: 'Generally, filing fees are not refunded after withdrawal. However, some fees may be refundable if withdrawn early.' },
        { question: 'Can I re-apply after withdrawal?', answer: 'Yes, you can file a fresh application for the same trademark after withdrawal, but you lose the original priority date.' },
        { question: 'Is withdrawal final?', answer: 'Yes, once withdrawal is accepted, it cannot be reversed. You would need to file a fresh application.' },
        { question: 'Why would someone withdraw trademark?', answer: 'Common reasons include business closure, rebranding, settlement in opposition, or decision to not pursue that mark.' }
      ]}
      stats={[
        { value: '500+', label: 'Withdrawals Filed' },
        { value: '100%', label: 'Success Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '48hrs', label: 'Processing Time' }
      ]}
    />
  );
}
