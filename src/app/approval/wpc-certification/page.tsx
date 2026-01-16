'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Wifi, Radio, Settings, Globe } from 'lucide-react';
import { useState } from 'react';

export default function WPCCertificationPage() {
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
    { title: 'Access the Indian Market Easily', description: 'With WPC Certification, your wireless products can enter the Indian market without restrictions, making it essential for business expansion.' },
    { title: 'Boost Consumer Confidence', description: 'Certification adds credibility, showing customers that your products meet Indian safety and quality standards, and building trust in your brand.' },
    { title: 'Avoid Legal Issues and Fines', description: 'Stay compliant with local regulations to avoid costly penalties and legal complications, ensuring uninterrupted business in India.' },
    { title: 'Streamlined Product Launch', description: 'Get your product certified and ready for launch in India\'s competitive market, with fewer obstacles in your path.' },
  ];

  const process = [
    { step: 'Application Submission', description: 'Start by submitting your completed application via Saral Sanchar Portal, including all the necessary documents to start the certification process.', highlight: 'We make sure your application is submitted accurately and without hassle.' },
    { step: 'Product Evaluation', description: 'To verify compliance with WPC\'s guidelines and standards, the product will be subjected to performance tests.', highlight: 'We manage all the logistics and coordination of testing with certified labs.' },
    { step: 'Certification Approval', description: 'After your product achieves all the tests, you\'ll receive the WPC certification, which affirms that it is lawfully ready for use in India.', highlight: 'We ensure that the certification approval process is done quickly and efficiently.' },
    { step: 'Registration with DoT', description: 'After you have certified your product, the next step is to register it with the Department of Telecommunications (DoT) for its legal acknowledgment.', highlight: 'We process all documents and perform all actions on time.' },
    { step: 'Post-certification Verification', description: 'Before your product hits the market, we conduct a final review to ensure it meets all necessary standards as part of the certification process.', highlight: 'We ensure thorough post-certification checks for full compliance.' },
  ];

  const eligibility = [
    'Indian or foreign manufacturer',
    'Device designed for wireless use',
    'Meets DoT standards',
    'Operational within India',
  ];

  const requirements = [
    'Application Submission',
    'Product technical details',
    'Testing and inspection results',
    'Manufacturer\'s details',
  ];

  const faqs = [
    { question: 'What is WPC certification?', answer: 'WPC certification ensures your wireless and telecom devices meet the required Indian regulatory standards for legal operation.' },
    { question: 'Who needs WPC certification?', answer: 'It is obligatory for the producers of wireless and telecom products to get WPC certification for them to be able to market their products in India.' },
    { question: 'How long does WPC certification take?', answer: 'The certification process time usually depends on the Radio Frequency (RF) test results, testing, and documentation process, which, in summary, can take up to 4 to 8 weeks.' },
    { question: 'How to apply for WPC certification?', answer: 'The process involves submitting your product\'s technical details, application, and test reports to WPC for evaluation.' },
    { question: 'Is WPC certification mandatory for all wireless devices?', answer: 'Yes, WPC certification is required for all wireless devices operating in India, including telecom, radio, and broadcasting equipment.' },
  ];

  const whyChooseUs = [
    'Expert guidance through the entire WPC certification process',
    'Accurate application submission without hassle',
    'Coordination with certified testing laboratories',
    'Quick and efficient certification approval handling',
    'Complete DoT registration support',
    'Thorough post-certification compliance checks',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(129,140,248,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full mb-6"
              >
                <Wifi size={18} className="text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-300">Wireless Planning &amp; Coordination</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                WPC <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Certification</span>
              </h1>

              <p className="text-lg text-indigo-100/80 mb-8 leading-relaxed">
                WPC certification ensures your wireless devices meet India&apos;s telecom rules. As part of the Department of Telecommunications (DoT), JR Compliance makes the certification process smooth, helping you get your products market-ready.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-indigo-400/50 text-white rounded-full font-semibold hover:bg-indigo-500/10 transition-all"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
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
              Getting WPC certification means your wireless devices are thoroughly checked to meet India&apos;s standards. It&apos;s all about ensuring your products are safe, efficient, and ready for legal use in the country&apos;s telecom space.
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
              Benefits of WPC Certification
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key advantages of obtaining WPC certification for your products
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
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Service Breakdown
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
              <p className="text-indigo-100 mb-6">
                To get WPC certification, your product needs to meet India&apos;s wireless communication standards. Whether you are a local manufacturer or international manufacturer, your equipment must meet the required specifications.
              </p>
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
                    <CheckCircle className="text-indigo-200 flex-shrink-0 mt-0.5" size={22} />
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
              <h3 className="text-2xl font-bold mb-4">Requirements</h3>
              <p className="text-slate-300 mb-6">
                The certification process involves submitting a few essential documents and detailed product information. It&apos;s important to ensure everything aligns with the necessary regulations for a smooth approval.
              </p>
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
                    <FileText className="text-indigo-400 flex-shrink-0 mt-0.5" size={22} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
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
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Step-by-step journey to your WPC certification
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-indigo-100 mb-3">{step.description}</p>
                  <div className="flex items-start gap-2 text-indigo-300 text-sm">
                    <Shield size={16} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Why JR Compliance:</strong> {step.highlight}</span>
                  </div>
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
                Why Choose <span className="text-indigo-600">JR Compliance</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Partner with experts who understand the WPC certification landscape
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
                    <CheckCircle className="text-indigo-500 flex-shrink-0 mt-0.5" size={22} />
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
                { icon: Wifi, title: '24/7', subtitle: 'Expert Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center border border-indigo-100"
                >
                  <stat.icon className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Your WPC Certification?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the certification process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
