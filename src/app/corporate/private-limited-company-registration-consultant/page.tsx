'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Building2, Briefcase, TrendingUp, Scale } from 'lucide-react';
import { useState } from 'react';

export default function PrivateLimitedCompanyPage() {
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

  const advantages = [
    { title: 'Limited Liability', description: 'Personal assets cannot be seized to clear the debts of the company, protecting owners from business losses.' },
    { title: 'Increased Credibility', description: 'A private limited company is generally perceived to be more reliable and businesslike than a sole trader or partnership firm.' },
    { title: 'Tax Benefits', description: 'Some tax incentives may be available for private limited companies, helping reduce overall tax burden.' },
    { title: 'Easier Access to Funding', description: 'A private limited company may be easily financed from various shareholders, banks, or investors.' },
  ];

  const challenges = [
    { title: 'Complex Procedures', description: 'The formation of the private limited company is quite complex as it requires many legal formalities.' },
    { title: 'Time-Consuming', description: 'Sometimes, it\'s exhausting to gather all the necessary papers and fill out all necessary documents.' },
    { title: 'Share Limit', description: 'In a Private Limited Company there is a limit of 200 shareholders, with a restricted limit on share transfers.' },
    { title: 'Business Commencement', description: 'Within 180 days of registering a Private Limited Company, the certificate of commencement of business must be obtained.' },
  ];

  const process = [
    { step: 'Consultation', description: 'First, check the availability of the name of the company for online company registration.' },
    { step: 'Documentation', description: 'We will help you to do the paperwork involving preparation of the Memorandum of Association and Articles of Association.' },
    { step: 'Registration', description: 'We will then forward all the necessary documents to the Registrar of Companies as required for registration.' },
    { step: 'Incorporation', description: 'With PAN and TAN, the certificate of incorporation will be issued and open a current account in the name of the company.' },
    { step: 'Compliance', description: 'We will assist you in maintaining continuing compliance with all legal and regulatory standards.' },
    { step: 'Ongoing Support', description: 'We will always be here with you to offer assistance and advice so that you can efficiently run your private limited company.' },
  ];

  const whoNeedsIt = [
    { title: 'Startups', description: 'Younger companies seeking a reliable platform to work from.' },
    { title: 'Small and Medium-Sized Enterprises (SMEs)', description: 'Businessmen and corporations interested in diversification of their business and guarding their property.' },
    { title: 'Foreign Investors', description: 'People who are investing in India and who require legal format.' },
    { title: 'Existing Businesses', description: 'Companies that seek to transform or adapt their current business organization.' },
  ];

  const documents = [
    { title: 'MoA and AoA', description: 'Documents defining the company\'s objectives and governance structure.' },
    { title: 'Directors\' KYC Documents', description: 'PAN, Aadhaar, and passport-size photos for directors and shareholders.' },
    { title: 'Proof of Registered Office', description: 'Utility bill or rental agreement showing the business address.' },
    { title: 'Digital Signature Certificates (DSC)', description: 'Digital proof for directors to sign legal documents electronically.' },
    { title: 'Shareholders\' Agreement', description: 'A formal agreement specifying shareholder rights and obligations.' },
  ];

  const eligibility = [
    { title: 'Indian Citizens', description: 'Anyone who has a citizenship of India can start a Private Limited Company (PLC).' },
    { title: 'Foreign Nationals', description: 'Any foreign national can register a Private Limited Company (PLC) in India but with some legal requirements and restrictions.' },
  ];

  const faqs = [
    { question: 'How many directors are necessary at minimum for a private limited company?', answer: 'Private Limited Company must have at least two directors, however one director may attend to two companies at a time.' },
    { question: 'Can a minor act as a director in a private limited company?', answer: 'No, a minor legally cannot act as a director of a private limited company.' },
    { question: 'How much paid up capital is required for a private limited company?', answer: 'There is no minimum requirement of a paid up capital for a private limited company.' },
    { question: 'Can a Private limited company be listed on the stock exchange?', answer: 'Yes, a private limited company can be listed on the stock exchange but some conditions and approvals are needed.' },
    { question: 'What are the annual obligations that a private limited company has to fulfill?', answer: 'A private limited company contains many legal formalities including annual returns, audit of accounts, holding annual general meetings, etc.' },
  ];

  const whyChooseUs = [
    { title: 'Expertise', description: 'Our team consists of dedicated members and we have great expertise in the formation of private limited companies.' },
    { title: 'Efficiency', description: 'We make efficiency our goal in the registration by avoiding unnecessary delays.' },
    { title: 'Personalized Service', description: 'We pay individual attention to every client and work closely to deliver services that suit them.' },
    { title: 'Compliance Focus', description: 'We strictly adhere to all existing legal requirements throughout the country.' },
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
              >
                <Building2 size={18} className="text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">Company Registration</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Private Limited <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Company</span>
              </h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                A private limited company refers to a legal entity formed by incorporation of limited companies by shares or stocks that works separately from its owners. It is a limited liability company because the owners and managers&apos; personal assets are not at risk for the business&apos;s losses.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-blue-400/50 text-white rounded-full font-semibold hover:bg-blue-500/10 transition-all"
                >
                  <Phone size={20} />
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                >
                  <Send size={20} />
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Service Overview
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We focus on company formation and registration of private limited companies as well as giving full services to companies in this legal category. Our competent team of personnel will fully assist you in the process, thereby meeting all the legal needs and potential business openings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Advantages of Registering a Private Limited Company
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Challenges of Filing for a Private Limited Company
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We help you navigate these challenges seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Scale className="text-amber-600" size={20} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{challenge.title}</h4>
                <p className="text-sm text-slate-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs It & Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Who Needs It?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whoNeedsIt.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eligibility.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Documents Required
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-slate-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{doc.title}</h4>
                  <p className="text-sm text-slate-600">{doc.description}</p>
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Step-by-step journey to your company registration
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose <span className="text-blue-600">JR Compliance</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100"
              >
                {index === 0 && <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
                {index === 1 && <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
                {index === 2 && <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
                {index === 3 && <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
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
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Register Your Private Limited Company?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the registration process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
