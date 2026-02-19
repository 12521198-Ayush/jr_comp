import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import AsSeenOn from '@/components/AsSeenOn';
import CTA from '@/components/CTA';
import Script from 'next/script';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JR Compliance",
  "url": "https://www.jrcompliance.com/",
  "logo": "https://jrcompliance.com/JRlogo2.png",
  "description": "JR Compliance® is a leading BIS Registration Consultant in India, serving as a single-window solution for all types of Technical Certifications and Regulatory Compliances.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "support@jrcompliance.com"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/jrcompliance",
    "https://x.com/JrCompliance",
    "https://www.linkedin.com/company/jr-compliance-&-testing-labs/",
    "https://www.youtube.com/@jrcompliance"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JR Compliance",
  "url": "https://www.jrcompliance.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.jrcompliance.com/contact?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Best BIS Certification Consultant in India",
  "image": "https://jrcompliance.com/JRlogo2.png",
  "description": "JR Compliance® is a leading BIS Registration Consultant in India, serving as a single-window solution for all types of Technical Certifications and Regulatory Compliances.",
  "brand": {
    "@type": "Brand",
    "name": "JR Compliance"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.2",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "JR Compliance"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "reviewCount": "37"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is BIS Certification and why is it important for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BIS Certification ensures your products comply with Indian safety and quality standards. It enhances credibility, allows legal sale in India, and builds trust with customers. JR Compliance helps businesses obtain BIS Certification efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "How do I apply for WPC Certification for wireless devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WPC Certification is mandatory for wireless products in India. JR Compliance provides complete assistance with technical documentation, lab testing, and submission to the Wireless Planning & Coordination Wing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the timeline for obtaining a PSARA License in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PSARA License, required for private security agencies, typically takes 30–60 days for approval. JR Compliance ensures all documentation and state-specific requirements are correctly submitted to avoid delays."
      }
    },
    {
      "@type": "Question",
      "name": "Is TEC Certification mandatory for importing telecom equipment in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Telecom Equipment Certification (TEC) is required for all telecom products entering India. JR Compliance helps with testing, documentation, and submission to TEC authorities."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I choose JR Compliance as my regulatory compliance consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JR Compliance provides expert guidance for BIS, WPC, EPR, PSARA, LMPC, BEE, and TEC certifications. Our team ensures compliance, reduces delays, and simplifies the approval process for businesses across India."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <Process />
      <WhyChooseUs />
      <AsSeenOn />
      <Testimonials />
      <CTA />
    </>
  );
}
