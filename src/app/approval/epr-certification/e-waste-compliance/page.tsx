'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Trash2, Recycle } from 'lucide-react';
import { useState } from 'react';

export default function EPREWasteCompliancePage() {
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
    { title: 'Avoids Legal Risks and Penalties', description: 'Securing EPR certification ensures that businesses comply with CPCB guidelines, protecting them from regulatory fines and business disruptions.' },
    { title: 'Enhances Corporate Reputation and Trust', description: 'Consumers and stakeholders prefer businesses that prioritize environmental responsibility. Compliance strengthens a company\'s reputation.' },
    { title: 'Supports Environmental Sustainability', description: 'E-waste contains hazardous materials that can harm the environment if not disposed of properly. EPR compliance ensures safe waste management.' },
    { title: 'Facilitates Market Expansion', description: 'Having an EPR certification provides a competitive advantage, opening doors to new business opportunities and partnerships.' },
  ];

  const challenges = [
    { title: 'Difficult Registration and Documentation', description: 'EPR authorization involves multiple legal formalities, extensive documentation, and largely goes through CPCB approval. One small mistake can delay or reject the entire process.' },
    { title: 'Management and Disposal of E-Waste', description: 'Finding registered recyclers and ensuring that proper segregation is applied and disposal records are well maintained can be challenging.' },
    { title: 'Reporting and Compliance Requirements', description: 'EPR compliance is not a one-time event as businesses should submit their periodic waste management reports and regularly update their compliance status.' },
    { title: 'Legal Risk and Regulatory Penalties', description: 'Failure to comply with EPR requirements invites fines, suspension of business permits, and all possible legal actions.' },
  ];

  const process = [
    { step: 'Eligibility Assessment', description: 'A detailed review of business operations is conducted to determine eligibility for EPR registration.' },
    { step: 'Documentation Process', description: 'Proper documentation minimizes errors, reducing the chances of rejection or delays in approval.' },
    { step: 'Application Submission', description: 'All required documents are collected, verified, and submitted to CPCB.' },
    { step: 'E-Waste Management Plan Development', description: 'A structured plan for e-waste collection, recycling, and disposal is developed aligning with CPCB regulations.' },
    { step: 'Compliance Reporting and Updates', description: 'Regular compliance reports are prepared and submitted to regulatory authorities.' },
    { step: 'Annual Compliance Support', description: 'Continuous monitoring and renewal support are provided to keep businesses updated with regulatory changes.' },
  ];

  const documents = [
    'Company Incorporation Certificate - Proof of legal business registration',
    'EPR Compliance Plan - A detailed e-waste management strategy',
    'Authorization from CPCB - Official certification granted by regulatory authorities',
    'Annual Waste Management Reports - Records of e-waste collection, recycling, and disposal',
  ];

  const whoNeedsIt = [
    { title: 'Electronics Manufacturers', description: 'Companies producing electrical and electronic goods must comply with EPR regulations.' },
    { title: 'Importers and Distributors', description: 'Businesses importing or distributing electronics in India should register.' },
    { title: 'Brand Owners and Retailers', description: 'Companies selling electronic products under their brand name also need EPR certification.' },
    { title: 'E-Waste Recycling Units', description: 'Waste management and recycling companies must adhere to EPR regulations.' },
  ];

  const eligibility = [
    'Legally Registered Business - Only registered companies can apply for EPR certification',
    'Involvement in Electronic Trade - Manufacturers, importers, and retailers dealing with electronic equipment must comply',
    'CPCB Compliance Standards - Businesses must follow proper e-waste collection, recycling, and disposal regulations',
    'Waste Management Strategy - A well-defined plan for handling e-waste is mandatory for registration approval',
  ];

  const faqs = [
    { question: 'What is EPR compliance for e-waste?', answer: 'EPR compliance is a regulatory requirement that makes manufacturers, importers, and brand owners responsible for handling and recycling electronic waste. It ensures the proper disposal of e-waste to minimize environmental impact and avoid legal penalties.' },
    { question: 'Who needs to obtain an EPR certificate?', answer: 'Any business involved in the production, import, or sale of electrical and electronic equipment must obtain an EPR certificate. This includes manufacturers, distributors, brand owners, and e-waste recycling companies.' },
    { question: 'What happens if a company does not comply with EPR regulations?', answer: 'Non-compliance can lead to significant fines, operational restrictions, or even legal action. Companies must ensure proper waste management and reporting to avoid regulatory issues.' },
    { question: 'How long does the EPR registration process take?', answer: 'The registration timeline varies based on document verification and CPCB approval. With accurate documentation and expert guidance, the process can be completed within a few weeks.' },
    { question: 'How can JR Compliance assist with EPR certification?', answer: 'We provide complete assistance, from eligibility assessment and documentation to compliance reporting and renewal. Our experts ensure businesses meet regulatory requirements smoothly and efficiently.' },
  ];

  const whyChooseUs = [
    'Our team simplifies the EPR process, ensuring accurate documentation and faster approvals',
    'From registration to annual reporting, we handle all compliance requirements for businesses',
    'We connect businesses with authorized waste management partners for legal and responsible disposal',
    'Our cost-effective solutions help businesses achieve full compliance while reducing legal risks',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-teal-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full mb-6"
              >
                <Trash2 size={18} className="text-teal-400" />
                <span className="text-sm font-semibold text-teal-300">Extended Producer Responsibility</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                EPR E-Waste <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Compliance</span>
              </h1>

              <p className="text-lg text-teal-100/80 mb-8 leading-relaxed">
                Extended Producer Responsibility (EPR) for e-waste compliance is a legal requirement under the E-Waste (Management) Rules. Under it, the producers, importers, and brand owners (PIBOs) must be responsible for the management of electronic waste.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-teal-400/50 text-white rounded-full font-semibold hover:bg-teal-500/10 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 hover:shadow-teal-500/25 transition-all"
                >
                  <Send size={20} />
                  Submit Enquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              EPR compliance is imperative for industries that are manufacturing, importing, or selling electronic equipment. This mandates companies to undertake e-waste collection, recycling, and disposal responsibility. This process begins with registering with the Central Pollution Control Board (CPCB) and following strict guidelines for the environment. At JR Compliance, we are EPR e-waste consultants equipped with a complete solution that assists with regulatory adherence hassle-free for business establishments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
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
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of <span className="gradient-text">EPR E-Waste Compliance</span>
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
                className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Recycle size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Compliance Process
            </h2>
            <p className="text-teal-200 max-w-2xl mx-auto">
              Simple steps to get your EPR e-waste compliance done with JR Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">{step.step}</h4>
                <p className="text-teal-200 text-sm leading-relaxed">{step.description}</p>
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
              Who Needs <span className="gradient-text">EPR E-Waste Compliance?</span>
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
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-teal-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Eligibility <span className="gradient-text">Criteria</span>
              </h2>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <CheckCircle size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Documents <span className="gradient-text">Required</span>
              </h2>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <FileText size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">JR Compliance?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-teal-600" />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for EPR E-Waste Compliance?
            </h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and get your compliance process started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
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
