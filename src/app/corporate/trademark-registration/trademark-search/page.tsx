'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search } from 'lucide-react';

export default function TrademarkSearchPage() {
  return (
    <ServicePageTemplate
      title="Trademark Search"
      subtitle="Protect Your Brand Identity"
      description="Conduct comprehensive trademark search before registration. JR Compliance provides thorough trademark availability search to protect your brand."
      icon={Search}
      color="indigo"
      serviceInfo="At JR Compliance, we conduct exhaustive trademark searches to assess the registrability and availability of your proposed brand name, logo, or slogan. Our IP research team searches the official trademark database, common law sources, and business registries to identify conflicting marks. We analyze phonetic similarities, visual resemblances, and conceptual overlaps that could lead to rejection or opposition. Our comprehensive search reports include risk assessment, recommendations on distinctiveness, and suggestions for stronger alternatives if needed. We examine prior marks across relevant classes and provide strategic advice on filing approach. This proactive research helps avoid costly objections and infringement disputes, saving you time and legal expenses in the long run."
      benefits={[
        'Avoid registration rejection',
        'Identify similar marks',
        'Legal risk assessment',
        'Brand protection strategy',
        'Cost-effective approach',
        'Time-saving research',
        'Informed decision making',
        'Conflict prevention'
      ]}
      process={[
        { step: 'Mark Details', description: 'Provide trademark name/logo and class details' },
        { step: 'Database Search', description: 'Search Indian trademark database' },
        { step: 'Phonetic Search', description: 'Check for phonetically similar marks' },
        { step: 'Analysis', description: 'Analyze search results for conflicts' },
        { step: 'Report Preparation', description: 'Prepare comprehensive search report' },
        { step: 'Recommendation', description: 'Provide registration feasibility advice' }
      ]}
      documents={[
        'Proposed Trademark Name',
        'Logo (if applicable)',
        'Product/Service Description',
        'Preferred Classes',
        'Business Details'
      ]}
      faqs={[
        { question: 'Why is trademark search important?', answer: 'Trademark search helps identify existing similar or identical marks before filing application, reducing rejection risk and potential legal conflicts.' },
        { question: 'What databases are searched?', answer: 'We search the Indian Trademark Registry database, including pending applications, registered marks, and opposed marks.' },
        { question: 'What is phonetic search?', answer: 'Phonetic search identifies marks that sound similar even if spelled differently, as these can be grounds for objection.' },
        { question: 'Can trademark search guarantee registration?', answer: 'No search can guarantee registration, but comprehensive search significantly reduces rejection and opposition risks.' },
        { question: 'How long does search take?', answer: 'Basic trademark search takes 1-2 working days. Comprehensive search with analysis may take 3-5 days.' }
      ]}
    />
  );
}
