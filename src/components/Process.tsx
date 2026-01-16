'use client';

import { motion } from 'framer-motion';
import { FileSearch, FileText, Send, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    step: '01',
    title: 'Consultation',
    description: 'Share your requirements with our experts for a free consultation.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Documentation',
    description: 'We help prepare and review all necessary documents.',
  },
  {
    icon: Send,
    step: '03',
    title: 'Application',
    description: 'We submit your application and follow up with authorities.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Approval',
    description: 'Receive your certificate/license with our ongoing support.',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-200">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            We&apos;ve simplified the compliance journey. Follow these easy steps to get started.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all h-full">
                <div className="text-5xl font-bold text-white/10 mb-4">{step.step}</div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm">{step.description}</p>
              </div>
              
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
