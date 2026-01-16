'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, BadgeCheck } from 'lucide-react';
import { useState } from 'react';

export default function ISICertificationPage() {
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
    { title: 'Enhances Product Credibility and Trust', description: 'An ISI-certified product assures customers of safety and quality, building brand credibility and fostering trust among consumers.' },
    { title: 'Increases Market Competitiveness', description: 'Having the ISI mark distinguishes your product in the market, giving it a competitive edge. This recognition attracts more customers.' },
    { title: 'Mandatory for Certain Products', description: 'For several categories, ISI certification is mandatory for market entry. It ensures compliance with legal standards, preventing fines or restrictions.' },
    { title: 'Promoting Consumer Protection', description: 'ISI mark reduces the risk in products. By meeting standards, business aids customers in ensuring safety while fostering long-lasting relationships.' },
  ];

  const challenges = [
    { title: 'Complex Documentation and Compliance Procedures', description: 'Navigating the extensive documentation and stringent compliance requirements of ISI certification can be challenging. Businesses must meet detailed technical specifications.' },
    { title: 'Frequent Rejections Due to Non-Compliance', description: 'Non-adherence to technical standards often leads to application rejections. This increases processing time and expenses.' },
    { title: 'Testing Facility and Coordination Hurdles', description: 'Coordinating with authorized laboratories for product testing can be daunting. Delays in testing or mismatched specifications often prolong the process.' },
    { title: 'Updates and Changes in Regulations', description: 'Frequent variations within the sets of regulation or standards pose difficulties. It is important to keep oneself updated on the latest scenario in compliance.' },
  ];

  const process = [
    { step: 'Receive Application', description: 'The initiation of the application process constitutes submission of complete application with all supporting documents to Bureau of Indian Standards (BIS).' },
    { step: 'Product Code Identification', description: 'We identify the applicable ISI standard and product code to ensure accurate documentation and test parameters are followed.' },
    { step: 'Testing of Product Sample', description: 'Product sample examination in a BIS-approved lab for mandatory compliance with Indian Standards.' },
    { step: 'Inspection by Authority', description: 'Inspection and evaluation of the manufacturing process, infrastructure, and quality-management systems by a BIS official.' },
    { step: 'Report Analysis and Compliance Check', description: 'Review test results and inspection reports. Address any discrepancies to meet the compliance requirements fully.' },
    { step: 'Certification Grant and Mark Use', description: 'Once approved, receive your ISI certification. Begin marking your products with the ISI label to signify compliance.' },
  ];

  const documents = [
    'Company Registration Documents - Ensures the applicant is a registered entity complying with Indian regulations',
    'Factory License or Trade License - Required to confirm the manufacturing unit\'s legitimacy',
    'Product Test Reports from BIS-Approved Labs - Proof of compliance with Indian Standards',
    'Process Flowchart and Quality Control Documents - Showcases the manufacturing process and quality assurance measures',
    'Authorized Signatory Details - Aadhaar, PAN, and other identity documents for verification',
  ];

  const whoNeedsIt = [
    { title: 'Electrical Manufacturers', description: 'For ensuring product safety and market entry compliance.' },
    { title: 'Construction Material Producers', description: 'To meet durability and safety standards.' },
    { title: 'Consumer Goods Companies', description: 'To gain customer trust through certified quality.' },
    { title: 'Automotive Component Makers', description: 'For safety and regulatory compliance.' },
  ];

  const eligibility = [
    'Legally Registered Businesses - Ensures authenticity in the certification process',
    'Manufacturers with Standardized Operations - Requires adherence to BIS guidelines',
    'Applicable Product Categories - Covers items specified by BIS regulations',
    'Compliance with BIS Testing Requirements - Mandates product testing in authorized labs',
  ];

  const faqs = [
    { question: 'What is ISI certification, and why is it important?', answer: 'ISI certification ensures that products meet Indian safety and quality standards. It enhances customer trust and is mandatory for various categories, protecting businesses from penalties and improving marketability.' },
    { question: 'What is the duration of the ISI certification to be approved?', answer: 'Depending on the accuracy of the documentation, testing, inspection of the factory and other compliances, the process might take 30 to 60 days but it depends on the regulatory requirements.' },
    { question: 'What are the costs involved in ISI certification?', answer: 'Costs include application fees, product testing charges, and inspection fees. The exact cost varies depending on the product and other factors.' },
    { question: 'Can small businesses apply for ISI certification?', answer: 'Yes, ISI certification is accessible to all businesses that meet eligibility and compliance criteria, regardless of size or scale.' },
    { question: 'Is the ISI mark mandatory for all products?', answer: 'No, it is mandatory only for specific product categories as defined by BIS. However, obtaining the certification is beneficial for market credibility.' },
  ];

  const whyChooseUs = [
    'Streamlined Certification Process, Ensuring Timely Completion Without Hassles',
    'Expert Guidance on Standards, Ensuring Accurate Documentation and Compliance',
    'End-to-End Support for Testing, Inspections, and BIS Coordination',
    'Proven Track Record with Successful Certifications Across Diverse Industries',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6"
              >
                <BadgeCheck size={18} className="text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">Indian Standards Institute</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                ISI <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Certification</span>
              </h1>

              <p className="text-lg text-amber-100/80 mb-8 leading-relaxed">
                Ensure that your products are made in conformity with the tough safety and quality specifications in India with ISI certification. With ISI certification comes not only compliance with the Bureau of Indian Standards (BIS) but also consumer confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-amber-400/50 text-white rounded-full font-semibold hover:bg-amber-500/10 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 hover:shadow-amber-500/25 transition-all"
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
              Managed by the Bureau of Indian Standards (BIS), Indian Standards Institute (ISI) certification is a hallmark of safety and quality in products within an Indian Standard. It assures that your product complies to robust Indian standards and establishes the psyche of consumers regarding these goods. In a world where to have an edge is much important, the idea of ISI certification enhances its brand value, credibility, and compliance in marketing.
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
              Benefits of <span className="gradient-text">ISI Certification</span>
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
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
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
            <p className="text-amber-200 max-w-2xl mx-auto">
              Simple steps to get your ISI certification done with JR Compliance
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
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">{step.step}</h4>
                <p className="text-amber-200 text-sm leading-relaxed">{step.description}</p>
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
              Who Needs <span className="gradient-text">ISI Certification?</span>
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
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-amber-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mx-auto mb-4">
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
                    <CheckCircle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
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
                    <FileText size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
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
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-amber-600" />
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
      <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your ISI Certification?
            </h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and get your certification process started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
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
