'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, User, Briefcase, TrendingUp, Wallet, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function SoleProprietorshipPage() {
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
    { title: 'Full Control', description: 'Sole proprietors make all the economic and management decisions and can adapt easily to market changes.' },
    { title: 'Simplified Tax Process', description: 'All revenues earned by the business are considered as personal income, making the taxation process easier with potential overall taxation burden being less than other forms.' },
    { title: 'Low Startup Costs', description: 'A sole proprietorship does not involve much capital investment hence it is affordable to establish especially for those with limited capital base.' },
    { title: 'Direct Profit Retention', description: 'The business profits belong to the owner, which means sole proprietors can either re-invest the earnings or take the profits for consumption without sharing with partners.' },
  ];

  const challenges = [
    { title: 'Limited Liability Protection', description: 'Sole traders are required by law to account for all business liabilities. Any time a business decides to borrow or engage in legal procedures, the owner\'s assets are endangered.' },
    { title: 'Difficulty Raising Capital', description: 'Securing credit as a sole trader can prove hard since most lenders do not like such structures. This presents a problem in accessing financing for expansion.' },
    { title: 'Increased Workload and Stress', description: 'Managing every aspect of a business alone can lead to burnout. Sole proprietors often face significant pressure, juggling multiple roles.' },
    { title: 'Limited Longevity and Continuity', description: 'The business directly associates its existence with the life and participation of the owner. The existence could be short if the proprietor wishes to sell or passes away.' },
  ];

  const process = [
    { step: 'Submit KYC Documents', description: 'Provide Aadhaar, PAN, and address proof. Declare a Principal Place of Business with utility proof and an NOC from the owner.' },
    { step: 'Choose a Unique Business Name', description: 'Select a legally valid, unique name that doesn\'t violate trademarks. Registering a trademark for your business name is advisable for protection.' },
    { step: 'Register for MSME/Udyam', description: 'MSME registration provides benefits like collateral-free loans, interest subsidies, and rebates on IPR registration. Also needed for a business bank account.' },
    { step: 'Get GST Registration', description: 'If your business meets the GST threshold, register on the GST portal. Upon approval, you\'ll receive a GSTIN for all future GST-related activities.' },
    { step: 'Apply for Shops & Establishments Registration', description: 'This registration is mandatory for all businesses. It is issued by the State Labour Department after submitting the required documents.' },
    { step: 'Obtain Industry-Specific Licenses', description: 'Some businesses require additional licenses based on their activities. For example, import/export businesses need an IEC Code, while food businesses require FSSAI registration.' },
  ];

  const whoNeedsIt = [
    { title: 'First-Time Entrepreneurs', description: 'Individuals starting their first business can benefit from the simplicity of sole proprietorship.' },
    { title: 'Small Business Owners', description: 'Perfect for those operating small-scale businesses with limited resources.' },
    { title: 'Freelancers', description: 'Ideal for professionals offering services like writing, design, or consulting.' },
    { title: 'Local Vendors', description: 'Suitable for shop owners, traders, and small vendors seeking legal recognition.' },
  ];

  const eligibility = [
    { title: 'Indian Resident', description: 'The proprietor must be an Indian resident as per government norms.' },
    { title: 'Business Name', description: 'Choose a unique business name that complies with local regulations.' },
    { title: 'Business Address', description: 'A valid address for correspondence and business operation is required.' },
    { title: 'Age Requirement', description: 'The applicant must be at least 18 years old to qualify for registration.' },
  ];

  const documents = [
    { title: 'Identity Proof', description: 'Submit documents like Aadhaar Card, PAN Card, or Voter ID for verification.' },
    { title: 'Address Proof', description: 'Provide utility bills or rental agreements as proof of business location.' },
    { title: 'Bank Account Details', description: 'A bank statement or cancelled cheque is necessary for financial compliance.' },
    { title: 'Business Name Proof', description: 'Provide a certificate or declaration confirming your chosen business name.' },
  ];

  const faqs = [
    { question: 'What does the term Sole Proprietorship mean?', answer: 'Sole ownership or sole proprietorship is one of the most practiced forms of business that is economical and efficient to carry out. The owner has full control and is accountable for running the entire business and also entitled to all the profits or losses.' },
    { question: 'What procedures do I adhere to when enrolling for a Sole Proprietorship?', answer: 'First, agree on an appropriate name for the business that has not been picked by anyone else. Second, promote the newly chosen name. Third, seek certain permissions specific to your area, and lastly, maintain records in an orderly manner to comply with regulations.' },
    { question: 'What benefits do you get as a Sole Proprietor?', answer: 'The owner simply runs the business which means low business establishment costs, minimum regulations required, might need some licenses or certifications based on business nature, and the will to work is all that is needed.' },
    { question: 'What are the dangers of being a sole proprietor?', answer: 'The main risk is unlimited personal liability. If your business incurs debts or legal strains, your personal possessions may be at stake. This realization is very important before deciding to proceed.' },
    { question: 'As a sole proprietor can I employ any person to work in my business?', answer: 'Yes, sole proprietors can have hired employees; however, they must comply with relevant employment laws, obtain an Employer Identification Number (EIN), and pay payroll taxes.' },
  ];

  const whyChooseUs = [
    { title: 'Expertise in Sole Proprietorship Setup', description: 'We provide specialised knowledge to help you in setting up the firm hassle-free.' },
    { title: 'Comprehensive Compliance Support', description: 'Our team guarantees that you meet all regulatory requirements for operating legally.' },
    { title: 'Customized Business Solutions', description: 'Personalized business solutions empower you to choose the skills needed for your unique growth.' },
    { title: 'Ongoing Consultation and Advice', description: 'We provide continuous support on financing, managing risks, and more.' },
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full mb-6"
              >
                <User size={18} className="text-orange-400" />
                <span className="text-sm font-semibold text-orange-300">Business Registration</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Sole <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Proprietorship</span>
              </h1>

              <p className="text-lg text-orange-100/80 mb-8 leading-relaxed">
                Looking to establish your business with ease? Sole proprietorship registration is the simplest and most cost-effective way to start your entrepreneurial journey. At JR Compliance, we simplify the entire process, ensuring compliance and accuracy while providing expert guidance.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-orange-400/50 text-white rounded-full font-semibold hover:bg-orange-500/10 transition-all"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
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
              Sole proprietorship is a straightforward business structure which does not need complex compliance requirements where the proprietorship firm and the proprietor are considered as one and the same. It enables owners to run their businesses without the interference of third parties and can enjoy full revenue for personal or business use.
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
              Benefits of Sole Proprietorship
            </h2>
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
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
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
              Challenges to Consider
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
                  <AlertTriangle className="text-amber-600" size={20} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{challenge.title}</h4>
                <p className="text-sm text-slate-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs It */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoNeedsIt.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-orange-200 flex-shrink-0 mt-0.5" size={22} />
                    <div>
                      <span className="font-semibold">{item.title}:</span> {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Documents Required</h3>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FileText className="text-orange-400 flex-shrink-0 mt-0.5" size={22} />
                    <div>
                      <span className="font-semibold">{doc.title}:</span> {doc.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
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
            <p className="text-lg text-orange-200 max-w-2xl mx-auto">
              Step-by-step journey to your sole proprietorship registration
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-orange-100">{step.description}</p>
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
              Why Choose <span className="text-orange-600">JR Compliance</span>?
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
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-100"
              >
                {index === 0 && <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />}
                {index === 1 && <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />}
                {index === 2 && <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />}
                {index === 3 && <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />}
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Sole Proprietorship?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the registration process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
