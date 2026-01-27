'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield } from 'lucide-react';

export default function TrademarkOppositionPage() {
  return (
    <ServicePageTemplate
      title="Trademark Opposition"
      subtitle="Defend Your Brand Rights"
      description="Expert trademark opposition services - whether you need to oppose a conflicting mark or defend your application against opposition. We handle complete opposition proceedings."
      icon={Shield}
      color="red"
      benefits={[
        'Filing Opposition - Oppose marks that conflict with your trademark',
        'Defense Services - Defend your trademark against opposition',
        'Complete Representation - Handle entire opposition proceeding',
        'Evidence Building - Compile compelling evidence for your case',
        'Strategic Approach - Develop winning opposition strategy',
        'Hearing Representation - Represent at opposition hearings',
        'Settlement Negotiation - Explore amicable settlement options',
        'Appeal Support - Assist with appeals if required'
      ]}
      process={[
        { step: 'Case Evaluation', description: 'Assess opposition grounds or defense strategy.' },
        { step: 'Notice Filing', description: 'File notice of opposition or counter-statement as applicable.' },
        { step: 'Evidence Stage', description: 'File evidence in support of opposition or defense.' },
        { step: 'Counter Evidence', description: 'Respond to opponent\'s evidence with rebuttal.' },
        { step: 'Hearing', description: 'Present arguments at opposition hearing before Registrar.' },
        { step: 'Decision', description: 'Receive decision and advise on further actions if needed.' }
      ]}
      documents={[
        'Published Trademark Details',
        'Your Trademark Registration/Application',
        'Proof of Prior Use',
        'Business Incorporation Documents',
        'Sales and Revenue Data',
        'Advertising Materials',
        'Evidence of Reputation',
        'Market Survey Reports (if available)'
      ]}
      faqs={[
        { question: 'What is trademark opposition?', answer: 'Opposition is a legal proceeding where someone challenges a trademark application after it\'s published in the Trademark Journal.' },
        { question: 'What is the opposition period?', answer: 'Any person can file opposition within 4 months from the date of publication in the Trademark Journal.' },
        { question: 'On what grounds can I oppose?', answer: 'Opposition can be filed on grounds of similarity, prior use, bad faith filing, descriptiveness, or violation of law.' },
        { question: 'What is counter-statement?', answer: 'If your mark is opposed, you must file counter-statement within 2 months denying the opposition claims.' },
        { question: 'How long does opposition take?', answer: 'Opposition proceedings typically take 2-3 years including evidence stage and hearing.' },
        { question: 'Can opposition be withdrawn?', answer: 'Yes, parties can settle and opposition can be withdrawn. This is common when parties reach coexistence agreements.' },
        { question: 'What if I don\'t respond to opposition?', answer: 'Failure to file counter-statement within time leads to your application being abandoned.' },
        { question: 'Can I appeal opposition decision?', answer: 'Yes, appeal can be filed before the Intellectual Property Appellate Board (IPAB) within 3 months of decision.' }
      ]}
      stats={[
        { value: '800+', label: 'Oppositions Handled' },
        { value: '75%', label: 'Success Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '4.8', label: 'Google Rating' }
      ]}
    />
  );
}
