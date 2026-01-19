'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, FileText, Receipt, Utensils, Shield, Cpu, Radio, Recycle, Zap } from 'lucide-react';

const corporateServices = [
  {
    icon: Building2,
    title: 'Company Registration',
    description: 'Register your Pvt Ltd, LLP, OPC, or Partnership firm with expert guidance.',
    href: '/services/company-registration',
    color: 'blue',
    features: ['Pvt Ltd', 'LLP', 'OPC'],
  },
  {
    icon: Receipt,
    title: 'GST Registration',
    description: 'Get your GST registration done quickly with complete compliance support.',
    href: '/services/gst-registration',
    color: 'indigo',
    features: ['Registration', 'Returns', 'Compliance'],
  },
  {
    icon: FileText,
    title: 'Annual Compliance',
    description: 'Stay compliant with all annual filing requirements including ROC filings.',
    href: '/services/annual-compliance',
    color: 'violet',
    features: ['ROC Filing', 'Returns', 'Meetings'],
  },
  {
    icon: Utensils,
    title: 'FSSAI License',
    description: 'Obtain FSSAI license for your food business with complete guidance.',
    href: '/services/fssai-license',
    color: 'emerald',
    features: ['Basic', 'State', 'Central'],
  },
  {
    icon: Shield,
    title: 'PSARA License',
    description: 'Get PSARA license for your private security agency hassle-free.',
    href: '/services/psara-license',
    color: 'amber',
    features: ['New', 'Renewal', 'Amendments'],
  },
];

const technicalServices = [
  {
    icon: Cpu,
    title: 'BIS Registration',
    description: 'Bureau of Indian Standards certification for electronics and IT products.',
    href: '/services/bis-registration',
    color: 'cyan',
    features: ['ISI Mark', 'CRS', 'Certification'],
  },
  {
    icon: Zap,
    title: 'AERB Registration',
    description: 'Atomic Energy Regulatory Board registration for radiation equipment.',
    href: '/services/aerb-registration',
    color: 'orange',
    features: ['Equipment', 'Facility', 'Import'],
  },
  {
    icon: Recycle,
    title: 'EPR Services',
    description: 'Extended Producer Responsibility compliance for waste management.',
    href: '/services/epr-services',
    color: 'green',
    features: ['E-Waste', 'Plastic', 'Battery'],
  },
  {
    icon: Radio,
    title: 'WPC Approval',
    description: 'Wireless Planning & Coordination approval for telecom equipment.',
    href: '/services/wpc-approval',
    color: 'purple',
    features: ['ETA', 'License', 'Import'],
  },
];

const colorClasses: Record<string, { bg: string; text: string; hoverBg: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hoverBg: 'group-hover:bg-indigo-600' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-600', hoverBg: 'group-hover:bg-violet-600' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600', hoverBg: 'group-hover:bg-amber-600' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', hoverBg: 'group-hover:bg-cyan-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600', hoverBg: 'group-hover:bg-green-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-600' },
};

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
    color: string;
    features: string[];
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const colors = colorClasses[service.color] || colorClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={service.href} className="block h-full">
        <div className="group h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
          {/* Icon */}
          <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 ${colors.hoverBg} transition-colors duration-300`}>
            <service.icon size={26} className={`${colors.text} group-hover:text-white transition-colors duration-300`} />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.map((feature) => (
              <span
                key={feature}
                className={`text-xs px-2.5 py-1 ${colors.bg} ${colors.text} rounded-full font-medium`}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
            Learn More
            <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Corporate Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Corporate <span className="italic text-blue-600">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From company formation to ongoing compliance, we provide comprehensive corporate services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {corporateServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Technical Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Technical <span className="italic text-cyan-600">Certifications</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Get your products certified and approved by regulatory bodies with our expert services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technicalServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold shadow-lg transition-all"
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
