'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Activity } from 'lucide-react';
import { useState } from 'react';

export default function CDSCORegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    { title: 'Public Health Protection', description: 'Guarantees that only safe and effective drugs and devices go into the public domain, ensuring health towards medicines.' },
    { title: 'Regulatory Clarity', description: 'Informs the manufacturers on what is required and aids their compliance and the whole process of operation.' },
    { title: 'Innovation Support', description: 'Facilitates research and development while guaranteeing a suitable level of drugs safety and efficacy of the products in the market.' },
    { title: 'Global Standards', description: 'This brings the Indian system of regulation worldwide and brings more trade opportunities.' },
  ];

  const challenges = [
    { title: 'Multiple Administrative Processes', description: 'The collections and compilations of the relevant papers are very often time-consuming and tedious. Applicants are required to source a lot of documents to avoid any mistake.' },
    { title: 'Regulatory Changes Compliance', description: 'India\'s regulatory framework for medical devices and pharmaceuticals keeps changing, which makes it difficult for companies to always be informed.' },
    { title: 'Lengthy Approval Timelines', description: 'The approval process takes up to 6 to 9 months but can be affected if CDSCO raises questions or demands for more paperwork.' },
    { title: 'Need for Local Representation', description: 'Foreign manufacturers marketing their products in India are bound to appoint an authorized Indian agent in order to deal with the CDSCO.' },
  ];

  const process = [
    { step: 'Application Submission', description: 'The manufacturers submit applications for licensing or approval through a formalized process on the SUGAM portal.' },
    { step: 'Evaluation Process', description: 'The submitted data is scrutinized by independent review panels of experts regarding safety, quality, and efficacy.' },
    { step: 'Approval and Monitoring', description: 'Once approved, the products come under compliance monitoring and inspection.' },
    { step: 'Public Engagement', description: 'CDSCO is highly transparent by maintaining relations with its stakeholders. Healthcare professionals and members of the community are constantly engaged.' },
    { step: 'Renewal & Updates', description: 'Regularly renew certifications and stay updated with CDSCO\'s guidelines to maintain compliance and avoid legal risks.' },
  ];

  const documents = [
    'Application Form - It is necessary to fill in concerning product information',
    'Technical Dossier - Repository of evidence on the safety and effectiveness of the product',
    'Fee Payment - All fees according to the given product line are to be paid',
    'Authorized Agent Appointment - The foreign manufacturers are required to appoint a local agent',
    'GMP Compliance Certificate - Applicants should meet the standards for fair manufacturing practices',
  ];

  const whoNeedsIt = [
    { title: 'Pharmaceutical Companies', description: 'A stakeholder group needs to approve a drug to market it as safe for use and effective in the management of diseases.' },
    { title: 'Medical Device Manufacturers', description: 'Required for companies engaged in the importation or local manufacture of medical devices in the country.' },
    { title: 'Cosmetic Importers', description: 'Required for cosmetic products to be imported so as to meet the necessary safety requirements.' },
    { title: 'Clinical Research Organizations', description: 'Required for performing clinical trials in India.' },
  ];

  const whyNeedCDSCO = [
    { title: 'Legal Compliance', description: 'Ensure that all your pharmaceutical, medical device, and cosmetic products comply with the safety and efficacy standards of India.' },
    { title: 'Commercial Authorization', description: 'Obtain approvals to manufacture, import or market your products in the Indian market for smooth business operations.' },
    { title: 'International Acceptance', description: 'CDSCO certification will enhance your product\'s reputation worldwide, which means acceptance in global markets.' },
    { title: 'Risk Mitigation', description: 'Avoid product recalls, legal penalties, and reputational damage by following CDSCO regulations.' },
  ];

  const faqs = [
    { question: 'What does CDSCO stand for?', answer: 'CDSCO stands for the Central Drugs Standard Control Organization. It is primarily India\'s authority in regulating drugs and medical devices.' },
    { question: 'How does CDSCO guarantee drug safety?', answer: 'CDSCO reviews and regulates drugs for safety and efficacy before allowing them to be approved.' },
    { question: 'What are the functions of CDSCO?', answer: 'CDSCO is responsible for the approval and monitoring of drugs, cosmetics and medical devices, clinical trials, security, effectiveness and quality control.' },
    { question: 'How do the manufacturers go about applying for drugs?', answer: 'They submit an application requesting comprehensive documentation that will be assessed and approved.' },
    { question: 'Does CDSCO guide clinical trials?', answer: 'Yes, CDSCO does offer well-defined regulations and ethical guidelines on the safe conduct of clinical trials in a compliant manner.' },
  ];

  const stats = [
    { value: '1,200+', label: 'Registered medical device manufacturers' },
    { value: '36%', label: 'Units marked non-compliant recently' },
    { value: '2X Growth', label: 'Expected in regulatory filings' },
    { value: '$27.85B', label: 'Pharmaceutical exports FY 2023-24' },
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-6"
              >
                <Activity size={18} className="text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300">Medical Device & Drug Regulation</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                CDSCO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Registration</span>
              </h1>

              <p className="text-lg text-emerald-100/80 mb-8 leading-relaxed">
                The Central Drugs Standard Control Organization is the national drug and medical device regulatory organization of India. JR Compliance ensures that critical licensing requirements can be met professionally and efficiently with online CDSCO services across India.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-emerald-400/50 text-white rounded-full font-semibold hover:bg-emerald-500/10 transition-all"
                >
                  <Phone size={20} />
                  Call Now
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 hover:shadow-emerald-500/25 transition-all"
                >
                  <Send size={20} />
                  Submit Enquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CDSCO <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              An institution under the Ministry of Health and Family Welfare of the Government of India, CDSCO ensures the safety, quality, and efficacy of drugs. It makes and enforces controls and guidelines and inspects and approves clinical studies. It seeks to serve the public health interest by controlling the drug approval process and its subsequent supervision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges We <span className="gradient-text">Solve</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Shield size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of <span className="gradient-text">CDSCO Registration</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Need CDSCO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why You Need <span className="gradient-text">CDSCO?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNeedCDSCO.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-2xl border border-emerald-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Our streamlined process for CDSCO registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">{step.step}</h4>
                <p className="text-emerald-200 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Needs <span className="gradient-text">CDSCO Registration?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoNeedsIt.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Documents <span className="gradient-text">Required</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <FileText size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </motion.div>
            ))}
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
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your CDSCO Registration?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and get your registration process started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
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
