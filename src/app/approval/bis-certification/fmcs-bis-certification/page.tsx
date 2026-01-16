'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Globe, Shield, Award, Users, Send } from 'lucide-react';
import { useState } from 'react';

export default function FMCSBISCertificationPage() {
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
    { title: 'Access to the Indian Market', description: 'FMCS Certification enables foreign manufacturers to legally sell their products in India, unlocking opportunities in one of the largest and most lucrative markets globally.' },
    { title: 'Enhanced Consumer Trust and Credibility', description: 'Certified products reassure consumers about their quality, safety, and reliability, boosting brand reputation and customer loyalty in the competitive Indian market.' },
    { title: 'Compliance with Indian Standards', description: 'Meeting BIS standards ensures that your product aligns with regulatory expectations, reducing risks of rejection or penalties during market entry or inspections.' },
    { title: 'Competitive Market Advantage', description: 'Obtaining FMCS Certification offers a competitive edge by demonstrating product quality and compliance, giving manufacturers an upper hand over uncertified competitors.' },
  ];

  const challenges = [
    { title: 'Compliance with Complex Regulatory Requirements', description: 'The requirements BIS imposes can often daunt manufacturers who are not familiar with Indian regulations. Thus, comprehensive understanding of standards combined with extensive documentation is mandatory for approval.' },
    { title: 'Lengthy and Time-Intensive Process', description: 'The FMCS Certification involves multiple stages, from application to factory inspection. Delays in addressing compliance issues or incomplete submissions can significantly prolong the process.' },
    { title: 'High-Level Technical and Documentation Needs', description: 'Products must meet rigorous technical specifications and provide exhaustive documentation, including test reports, manufacturing details, and other specifics.' },
    { title: 'Language and Communication Barriers', description: 'International manufacturers may face language barriers and misinterpretation of BIS requirements, leading to errors in submissions and prolonging the certification timeline.' },
  ];

  const process = [
    { step: 'Application Submission', description: 'Prepare and submit the FMCS Certification application, including the important information on product specifications and test reports, to the BIS.' },
    { step: 'Indian Representative Nomination', description: 'Nominate and authorize an Indian Representative as required by BIS for foreign applicants.' },
    { step: 'Document Verification', description: 'The submitted documents are verified for their correctness in accordance with the regulatory standards set by BIS.' },
    { step: 'Product Testing', description: 'The samples are tested using the quality testing and safety norms as laid down by the BIS-accredited laboratories.' },
    { step: 'Factory Inspection', description: 'BIS officials make a thorough inspection of the manufacturing facility to ascertain compliance with the Indian standards.' },
    { step: 'Certification Issuance', description: 'FMCS Certification is given for market entry after the product and process of manufacturing comply with all requirements.' },
  ];

  const documents = [
    'Legal Business Entity Proof - Certificate of incorporation or business license issued in the foreign country',
    'Product Test Reports from BIS-Recognized Labs - Ensures compliance with Indian quality and safety standards',
    'Details of Manufacturing Unit - Location, production capacity, and quality control process',
    'Nomination of Authorized Indian Representative - Mandatory if the manufacturer is located outside India',
    'Agreement Between BIS and Manufacturer - A contractual agreement confirming compliance and certification terms',
  ];

  const whoNeedsIt = [
    { title: 'Electronics Manufacturers', description: 'For importing appliances like TVs, ACs, and washing machines to India.' },
    { title: 'Automotive Component Producers', description: 'To sell foreign-made automotive parts in India.' },
    { title: 'Household Product Suppliers', description: 'For items like kitchen appliances or decorative lights.' },
    { title: 'Other Industrial Goods Manufacturers', description: 'To certify compliance for tools, machinery, or specialized equipment.' },
  ];

  const eligibility = [
    'Foreign Manufacturers - Companies producing goods outside India',
    'Regulated Products - Items under mandatory BIS certification categories',
    'Products Meeting Standards - Goods aligning with specific Indian safety and performance norms',
    'Established Manufacturing Facilities - Facilities capable of producing consistent quality',
  ];

  const faqs = [
    { question: 'What is FMCS Certification, and why is it required?', answer: 'FMCS Certification ensures that foreign-made products comply with Indian BIS standards. It is mandatory for certain goods to guarantee quality and safety for Indian consumers.' },
    { question: 'How long does the FMCS Certification process take?', answer: 'The process typically takes 4–6 months but may vary based on product type, documentation accuracy, and compliance with BIS requirements.' },
    { question: 'Can JR Compliance assist with the entire FMCS process?', answer: 'Yes, JR Compliance offers end-to-end assistance, including application, documentation, testing, and liaison with BIS for hassle-free certification.' },
    { question: 'What products require FMCS Certification?', answer: 'Products like electronics, automotive components, and household goods under BIS mandatory certification categories require FMCS Certification for Indian market entry.' },
    { question: 'What will happen if a product fails the BIS test?', answer: 'If the product fails the test then it will be required to correct any noncompliance, make necessary changes and repeat testing and certification processes from the start to FMCS certification.' },
  ];

  const whyChooseUs = [
    'Expert guidance for end-to-end FMCS Certification compliance and documentation process',
    'Proven track record of successful certifications with hassle-free service delivery',
    '24/7 customer support to address all queries and challenges throughout the process',
    'Comprehensive understanding of BIS requirements for error-free application processing',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
                <Globe size={18} className="text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">Foreign Manufacturer Certification</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                FMCS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">BIS Certification</span>
              </h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                The FMCS Certificate is a compulsory certification program established by Bureau of Indian Standards (BIS) for imported products. This certification process allows foreign manufacturers to show compliance with quality as well as safety standards in India.
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 hover:shadow-blue-500/25 transition-all"
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
              To adhere with Indian standards and regulatory requirements in order to practice transparency FMCS certification is mandatory for the products to comply with BIS standards. This ensures product safety and performance while fostering consumer confidence. JR Compliance provides seamless assistance in acquiring FMCS Certification, covering all regulatory requirements and documentation, saving time and effort for international manufacturers.
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the hurdles in FMCS certification process
            </p>
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
              Benefits of <span className="gradient-text">FMCS Certification</span>
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
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              Our Certification Process
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Simple steps to get your FMCS certification done with JR Compliance
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
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">{step.step}</h4>
                <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
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
              Who Needs <span className="gradient-text">FMCS Certification?</span>
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
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
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
                    <FileText size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{doc}</span>
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
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-green-600" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your FMCS Certification?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and get your certification process started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
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
