'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Utensils, Building, RefreshCw, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

export default function FSSAIModificationPage() {
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
    { title: 'Maintains Legal Validity of License', description: 'Updating changes promptly keeps your FSSAI license valid and prevents legal action, penalties, or cancellation under FSSAI laws.' },
    { title: 'Ensures Smooth Business Operations', description: 'An updated license helps avoid operational interruptions during inspections or renewals, keeping your food business running smoothly.' },
    { title: 'Improves Business Credibility', description: 'Accurate license details boost consumer trust and demonstrate your commitment to maintaining transparency and food safety standards.' },
    { title: 'Simplifies Future Compliance Processes', description: 'A modified and up-to-date license simplifies other regulatory procedures like renewals, expansions, and business certifications.' },
  ];

  const process = [
    { step: 'Assessing Required Modification', description: 'We evaluate whether the change qualifies as a major or minor modification under FSSAI guidelines.' },
    { step: 'Document Preparation', description: 'All supporting documents for the proposed change are collected, verified, and organized systematically for application filing.' },
    { step: 'Filing FSSAI Modification Application', description: 'We file the online application with the FSSAI portal, along with the required documents and prescribed government fees.' },
    { step: 'Liaising with FSSAI Authorities', description: 'We coordinate with the concerned FSSAI department if any queries, inspections, or clarifications are raised during scrutiny.' },
    { step: 'Tracking Application Status', description: 'Our team continuously monitors the status of the application and updates you on every progress till final approval.' },
    { step: 'Issuance of Modified License', description: 'Once approved, the modified FSSAI license reflecting updated details is issued, ensuring full legal compliance.' },
  ];

  const whoNeedsIt = [
    { title: 'Food Manufacturers and Processors', description: 'Any individual or business involved in manufacturing or processing food items must obtain an FSSAI license to operate legally in India.' },
    { title: 'Restaurants and Food Chains', description: 'All eateries, cloud kitchens, and food chains serving food to customers are required to hold a valid FSSAI license or registration.' },
    { title: 'Importers and Exporters', description: 'Businesses engaged in importing or exporting food products need an FSSAI license to ensure compliance with Indian food safety regulations.' },
    { title: 'Dairy and Meat Processing Units', description: 'Units handling milk, dairy products, meat, or poultry must register with FSSAI to meet hygiene and safety standards mandated by law.' },
  ];

  const documents = [
    { title: 'Existing FSSAI License Copy', description: 'A clear copy of the current license to identify details needing modification.' },
    { title: 'Supporting Documents for Changes', description: 'Depending on the modification, documents like new address proof, updated product list, or ownership proof are needed.' },
    { title: 'Board Resolution/Authorization Letter', description: 'Required if there is a change in company name, ownership, or business structure.' },
    { title: 'Identity and Address Proof', description: 'For modification involving change of management personnel, updated KYC documents must be provided.' },
  ];

  const faqs = [
    { question: 'What is FSSAI modification?', answer: 'FSSAI modification is the process of updating any changes in business details like name, address, products, or ownership in your FSSAI license to maintain compliance.' },
    { question: 'When should I apply for FSSAI modification?', answer: 'You must apply for modification immediately after any change occurs. Delaying it can result in penalties, inspections, or even cancellation of your license.' },
    { question: 'Is there a difference between major and minor modification?', answer: 'Yes. Major modifications involve changes like business name, address, or ownership, while minor modifications include adding a new product or small detail changes.' },
    { question: 'Can I continue business without modifying the license?', answer: 'No, continuing business with incorrect or outdated license information is a violation and can lead to strict actions from the food safety authorities.' },
    { question: 'What happens after I apply for modification?', answer: 'The FSSAI authority reviews your application, and if satisfied, issues a new license reflecting updated details. If queries are raised, you need to respond promptly.' },
  ];

  const whyChooseUs = [
    'We simplify FSSAI modification processes, ensuring faster approvals and minimal documentation for seamless compliance.',
    'Our experts stay updated with regulatory changes, offering you complete guidance through every modification stage.',
    'Trusted by 10,000+ businesses, we deliver reliable, professional compliance services tailored to your specific needs.',
    'We offer personalized end-to-end support, from document preparation to post-modification assistance.',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-6"
              >
                <Utensils size={18} className="text-green-400" />
                <span className="text-sm font-semibold text-green-300">Food Safety Compliance</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                FSSAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Modification</span>
              </h1>

              <p className="text-lg text-green-100/80 mb-8 leading-relaxed">
                An FSSAI license or registration must always reflect the correct business details. If there is any change in business name, address, product category, management, or any other important information, the license holder must apply for an FSSAI modification.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-green-400/50 text-white rounded-full font-semibold hover:bg-green-500/10 transition-all"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
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
              FSSAI modification is the process of updating any change in the details of your food business on the license or registration certificate. Whether it&apos;s a major change like business address or a minor one like a product list update, filing modification on time ensures seamless operations and legal compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Benefits of FSSAI Modification
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Keep your food business compliant and credible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Who Needs FSSAI Modification?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whoNeedsIt.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="text-green-600" size={24} />
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
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
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Step-by-step journey to your FSSAI modification
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-green-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Why Choose <span className="text-green-600">JR Compliance</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Partner with experts who understand FSSAI regulations
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={22} />
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, title: '10+ Years', subtitle: 'Industry Experience' },
                { icon: Users, title: '10,000+', subtitle: 'Happy Clients' },
                { icon: Shield, title: '99%', subtitle: 'Success Rate' },
                { icon: RefreshCw, title: 'Fast', subtitle: 'Processing Time' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100"
                >
                  <stat.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-800">{stat.title}</div>
                  <div className="text-slate-600">{stat.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Update Your FSSAI License?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the modification process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
