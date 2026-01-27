'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText } from 'lucide-react';

export default function CPCBGuidelinesPage() {
  return (
    <ServicePageTemplate
      title="CPCB Guidelines"
      subtitle="Central Pollution Control Board Compliance"
      icon={FileText}
      color="emerald"
      description="Get expert assistance for CPCB guidelines compliance including environmental standards, waste management rules, and pollution control norms. Ensure your business meets all Central Pollution Control Board requirements."
      stats={[
        { value: '3000+', label: 'Compliance Projects' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      benefits={[
        'Complete CPCB compliance guidance',
        'Emission standards compliance',
        'Effluent discharge norms',
        'Waste management rule adherence',
        'Real-time monitoring system setup',
        'Environmental audit support',
        'Annual compliance reporting',
        'Inspection preparation',
        'Penalty mitigation assistance',
      ]}
      process={[
        { step: 'Compliance Assessment', description: 'Evaluate current status against applicable CPCB guidelines.' },
        { step: 'Gap Analysis', description: 'Identify non-compliance areas and improvement requirements.' },
        { step: 'Action Plan', description: 'Develop corrective action plan with timelines.' },
        { step: 'Implementation', description: 'Implement pollution control measures and monitoring systems.' },
        { step: 'Documentation', description: 'Prepare compliance reports and maintain records.' },
        { step: 'Ongoing Monitoring', description: 'Regular monitoring and annual compliance filing.' },
      ]}
      documents={[
        'Industry Registration Documents',
        'Environmental Clearance',
        'Consent to Operate (CTO)',
        'Pollution Control Equipment Details',
        'Emission/Effluent Monitoring Reports',
        'Waste Management Records',
        'Online Monitoring Data (OCEMS)',
        'Annual Environmental Audit',
      ]}
      faqs={[
        {
          question: 'What are CPCB guidelines?',
          answer: 'CPCB guidelines are environmental standards and rules issued by Central Pollution Control Board for air quality, water quality, waste management, and pollution control.',
        },
        {
          question: 'Which industries need CPCB compliance?',
          answer: 'All polluting industries, manufacturing units, waste processors, and businesses dealing with hazardous substances need to comply with relevant CPCB guidelines.',
        },
        {
          question: 'What is OCEMS requirement?',
          answer: 'Online Continuous Emission Monitoring System (OCEMS) is mandatory for 17 categories of highly polluting industries to transmit real-time emission data to CPCB.',
        },
        {
          question: 'What are the key CPCB environmental standards?',
          answer: 'Key standards include National Ambient Air Quality Standards, effluent discharge limits, noise standards, and industry-specific emission norms.',
        },
        {
          question: 'What are penalties for CPCB guideline violations?',
          answer: 'Violations can result in closure notices, environmental compensation, fines up to ₹1 crore, and prosecution under Environment Protection Act.',
        },
      ]}
    />
  );
}
