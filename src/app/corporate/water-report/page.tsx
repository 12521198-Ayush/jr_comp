'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Droplets } from 'lucide-react';

export default function WaterReportPage() {
  return (
    <ServicePageTemplate
      title="Water Report for FSSAI"
      subtitle="Essential for FSSAI Compliance"
      description="Ensure your food business meets FSSAI standards with accurate water quality reports. JR Compliance offers certified water testing services essential for FSSAI license and ongoing compliance."
      icon={Droplets}
      color="cyan"
      benefits={[
        'FSSAI compliance requirement',
        'Food safety assurance',
        'NABL accredited testing',
        'Detailed quality parameters',
        'License renewal support',
        'Quality certification',
        'Consumer safety',
        'Regulatory compliance'
      ]}
      process={[
        { step: 'Sample Collection', description: 'Collect water sample from your premises' },
        { step: 'Lab Submission', description: 'Submit sample to NABL accredited laboratory' },
        { step: 'Testing', description: 'Comprehensive water quality testing' },
        { step: 'Analysis', description: 'Analysis of various parameters' },
        { step: 'Report Generation', description: 'Generate detailed test report' },
        { step: 'Compliance Review', description: 'Review report for FSSAI compliance' }
      ]}
      documents={[
        'Water Sample',
        'Business Address Details',
        'FSSAI License Copy (if available)',
        'Previous Test Reports (if any)',
        'Source of Water Details'
      ]}
      faqs={[
        { question: 'Why is water testing required for FSSAI?', answer: 'FSSAI mandates water testing to ensure water used in food preparation and processing meets safety standards and is free from contamination.' },
        { question: 'What parameters are tested?', answer: 'pH, turbidity, TDS, hardness, chloride, fluoride, arsenic, lead, coliform bacteria, E. coli, and other parameters as per IS 10500 standards.' },
        { question: 'How often is water testing required?', answer: 'Water testing is typically required annually for FSSAI compliance and during license application or renewal.' },
        { question: 'Which labs can provide valid reports?', answer: 'Water testing must be done from NABL accredited laboratories for FSSAI acceptance.' },
        { question: 'What if water quality fails?', answer: 'If water fails quality parameters, you need to implement water treatment solutions and get re-tested before using for food business.' }
      ]}
    />
  );
}
