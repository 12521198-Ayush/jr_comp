'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Radio, Wifi, Settings, Zap } from 'lucide-react';
import { useState } from 'react';

export default function TECCertificationPage() {
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
    { title: 'Simplified Market Access', description: 'TEC certification allows your products to enter the Indian telecom market legally, boosting your credibility with consumers and key stakeholders.' },
    { title: 'Enhanced Customer Trust', description: 'By obtaining TEC certification, you signal to your customers that your products are reliable and of high quality, helping build trust and foster long-term loyalty.' },
    { title: 'Competitive Advantage', description: 'Showcasing TEC certification demonstrates your commitment to excellence and compliance, giving you an edge over competitors in a fast-moving industry.' },
    { title: 'Regulatory Assurance', description: 'TEC certification streamlines your compliance with telecom regulations, reducing legal risks and ensuring seamless operations.' },
  ];

  const approvalTypes = [
    { title: 'Type Approval Certification', description: 'Confirm that your telecom product meets all necessary Generic Requirement (GR) standards. This type of approval focuses on ensuring the product\'s safety, quality, and compatibility with existing network systems.', icon: Shield },
    { title: 'Interface Approval Certification', description: 'Validates that your equipment can seamlessly interact within network systems, based on Interface Requirement (IR) standards. This approval is essential for devices connecting to public networks.', icon: Wifi },
    { title: 'Certificate of Approval (CoA)', description: 'A simpler process for low-risk telecom products not covered under GR or IR standards. CoA helps these products get certified faster, making it easier for low-risk items to enter the market.', icon: FileText },
    { title: 'Technology Approval Certification', description: 'Supports the approval of innovative telecom technologies not yet covered by existing standards. This certification ensures new products meet technical requirements, paving the way for successful market entry.', icon: Zap },
  ];

  const process = [
    { step: 'Document Verification', description: 'We check all your essential documents, from product specifications to safety data and compliance history, making sure everything meets TEC\'s standards.' },
    { step: 'Application Submission', description: 'Submitting the completed application with all necessary documents initiates your journey toward obtaining a TEC certification for your product.' },
    { step: 'Product Testing', description: 'Your product undergoes testing at approved labs to confirm it meets TEC\'s technical and safety standards.' },
    { step: 'Facility Inspection', description: 'Officials may visit your facilities to check that your production practices align with TEC\'s high standards.' },
    { step: 'Certification Approval', description: 'Once testing and inspections are completed, TEC issues your certification, opening the door to market entry.' },
  ];

  const eligibility = [
    'Must align with TEC standards',
    'Registered business identity',
    'Equipped for product testing',
    'Follow safety regulations',
  ];

  const requirements = [
    'Product technical file',
    'Testing reports',
    'Sample product for review',
    'Compliance statement',
  ];

  const products = [
    { title: 'Network Routers and Switches', description: 'Enterprise networking equipment requiring TEC certification' },
    { title: 'Smart IoT Devices', description: 'Connected devices for smart home and industrial applications' },
    { title: 'Modems and Telecommunication Devices', description: 'Communication equipment for data transmission' },
    { title: 'Fiber Optic Equipment', description: 'High-speed optical networking components' },
  ];

  const faqs = [
    { question: 'Who is required to obtain TEC certification in India?', answer: 'All enterprises who either produce, import, or distribute telecom equipment in India need to get a TEC certificate in order to follow the laws set by the country.' },
    { question: 'What is the duration of TEC certification?', answer: 'Starting July 1, 2022, thanks to government reforms under the Ease of Doing Business initiative, TEC certificates in India now last for 10 years instead of 5. This change took effect immediately, offering businesses a longer period of validity and added convenience.' },
    { question: 'Is it permissible to transfer the TEC certification to some other person?', answer: 'When it comes to ownership, TEC certification is non-transferable. It belongs solely to the applicant who submitted the product for testing, so it can\'t be passed on to someone else or another company.' },
    { question: 'What is done in case the product does not pass the test?', answer: 'If the product fails to meet the required criteria, the applicant must rectify the issues. This may involve modifying the product to meet the standards and reapplying for the test. This ensures that any telecom equipment used in India is approved for production only after meeting all prescribed technical and safety requirements.' },
  ];

  const whyChooseUs = [
    'We handle thorough document reviews, taking the stress out of meeting TEC standards',
    'We simplify the process, ensuring your application is complete and submitted without a hitch',
    'We manage the testing process, connecting you with reliable labs for accurate results',
    'We prep you for inspections, helping your facility meet all TEC requirements smoothly',
    'We guide you from start to finish, ensuring you achieve TEC certification without unnecessary delays',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full mb-6"
              >
                <Radio size={18} className="text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">Telecommunication Engineering Centre</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                TEC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Certification</span>
              </h1>

              <p className="text-lg text-cyan-100/80 mb-8 leading-relaxed">
                Establish yourself in the ever-changing telecom sector in India through a TEC certification. Maintaining your customers&apos; confidence and quickly entering the market is simpler when you focus on this important certification whose purpose is to encompass all the quality and safety standards for the telecom equipment.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-cyan-400/50 text-white rounded-full font-semibold hover:bg-cyan-500/10 transition-all"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
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
              For businesses designing, manufacturing, importing, or selling telecom equipment in India, obtaining a TEC certificate is a necessary requirement. In other words, they ensure that your products do not breach any Indian regulatory norms and show your concern about quality and safety. With a TEC certification, it&apos;s no longer only about compliance; you are redefining the benchmarks of the market.
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
              Benefits of TEC Certification
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock these advantages with TEC certification
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
                className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100 hover:border-cyan-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approval Types Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Types of TEC Approval
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Different certification pathways for your telecom products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {approvalTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{type.title}</h3>
                <p className="text-slate-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
              <p className="text-cyan-100 mb-6">TEC certification is for telecom equipment makers wanting a solid market presence.</p>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-cyan-200 flex-shrink-0 mt-0.5" size={22} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Requirements</h3>
              <p className="text-slate-300 mb-6">Submitting key documents and tech details is essential.</p>
              <ul className="space-y-4">
                {requirements.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FileText className="text-cyan-400 flex-shrink-0 mt-0.5" size={22} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Covered */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Products Covered
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Range of telecom products under TEC guidelines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Radio className="text-cyan-600" size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{product.title}</h4>
                <p className="text-sm text-slate-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
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
            <p className="text-lg text-cyan-200 max-w-2xl mx-auto">
              Step-by-step journey to your TEC certification
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-cyan-100">{step.description}</p>
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
                Why Choose <span className="text-cyan-600">JR Compliance</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Partner with experts who understand the telecom certification landscape
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
                    <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" size={22} />
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
                { icon: Users, title: '1000+', subtitle: 'Happy Clients' },
                { icon: Shield, title: '99%', subtitle: 'Success Rate' },
                { icon: Radio, title: '24/7', subtitle: 'Expert Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 text-center border border-cyan-100"
                >
                  <stat.icon className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Your TEC Certification?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the certification process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
