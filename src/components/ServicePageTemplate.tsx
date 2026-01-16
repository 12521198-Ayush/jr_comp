'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, Clock, Shield, ArrowLeft } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  benefits: string[];
  process: { step: string; description: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  benefits,
  process,
  documents,
  faqs,
}: ServicePageProps) {
  const colorClasses: Record<string, { bg: string; text: string; gradient: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-800' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', gradient: 'from-cyan-600 to-cyan-800' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', gradient: 'from-indigo-600 to-indigo-800' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-800' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', gradient: 'from-amber-600 to-amber-800' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-800' },
    green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-600 to-green-800' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-800' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', gradient: 'from-violet-600 to-violet-800' },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
                <Icon size={18} className={colors.text} />
                <span className={`text-sm font-semibold ${colors.text}`}>{subtitle}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className={`btn-shine inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-full font-semibold shadow-lg`}
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <Phone size={20} />
                  Call Now
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Enquiry</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-semibold shadow-lg`}
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="gradient-text">{title}</span> Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} className="text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Simple steps to get your {title.toLowerCase()} done with JR Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 mt-2">{step.step}</h4>
                <p className="text-blue-200 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep these documents ready for a smooth application process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <FileText size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and get your {title.toLowerCase()} process started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold"
              >
                <Phone size={20} />
                Call: 1800 121 410 410
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
