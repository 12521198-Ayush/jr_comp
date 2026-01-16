'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Rocket, Lightbulb, TrendingUp, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export default function StartupIndiaPage() {
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
    { title: 'Streamlined Registration Process', description: 'Our team efficiently manages all paperwork involved in the registration process, allowing you to focus on your business without procedural interruptions or stress.' },
    { title: 'Access to Government Funding', description: 'Registered startups can access various government grants and loans, enhancing their financial resources and accelerating growth through tailored financial support.' },
    { title: 'Enhanced Networking Opportunities', description: 'Joining Startup India opens doors to exclusive networking events where startups can collaborate with experienced professionals and learn from industry leaders.' },
    { title: 'Adherence to Legal Standards', description: 'We make certain your startup fulfills all applicable legal compliance standards, establishing trust with clientele and investors while improving market positioning.' },
  ];

  const challenges = [
    { title: 'Navigating Complex Registration Requirements', description: 'Many startups find the registration process daunting due to intricate guidelines. Our experts simplify these complexities by providing clear, step-by-step assistance.' },
    { title: 'Securing Timely Financial Benefits', description: 'Delays in receiving financial support can significantly hinder growth. We expedite applications for grants and loans, ensuring eligible startups obtain necessary funding.' },
    { title: 'Understanding Compliance Regulations', description: 'Compliance with Startup India guidelines is critical for maintaining eligibility. Our team educates clients on regulatory expectations and benefits.' },
    { title: 'Accessing Professional Mentorship', description: 'Startup India offers valuable mentorship and networking resources. We facilitate connections between startups and industry experts for effective guidance.' },
  ];

  const process = [
    { step: 'Register Your Company', description: 'First, register your business (private limited company, LLP, or partnership firm). Procure the business PAN. Acquire MSME registration for your company.' },
    { step: 'Eligibility Check', description: 'We assess your startup\'s qualifications for registration under Startup India, confirming that all criteria are met before moving forward.' },
    { step: 'Documentation Collection', description: 'Our team assists clients in gathering all necessary documents, creating a comprehensive package that aligns with the requirements set by Startup India.' },
    { step: 'Application Submission', description: 'We handle the submission of your application on your behalf, ensuring accuracy to prevent rejections or delays in the registration process.' },
    { step: 'Government Approval', description: 'Our experts track application progress and address any queries or additional requirements promptly.' },
    { step: 'Certificate Delivery', description: 'Once approved, we ensure timely delivery of your registration certificate, confirming your official recognition under the Startup India initiative.' },
  ];

  const whoNeedsIt = [
    { title: 'Early-stage Startups', description: 'Helps companies in their initial phases by promoting growth and development.' },
    { title: 'Tech-based Ventures', description: 'Perfect for startups focused on innovation and digital solutions.' },
    { title: 'Social Impact Initiatives', description: 'This registration is designed for initiatives focused on making a positive impact in society.' },
    { title: 'Product-based Businesses', description: 'Best suited for companies that primarily deal with physical or digital products.' },
  ];

  const eligibility = [
    { title: 'Startup Age', description: 'The startup must have been established within the last ten years.' },
    { title: 'Revenue Limit', description: 'The business revenue should not exceed ₹100 crore in a year.' },
    { title: 'Unique Products or Services', description: 'The startup must offer a unique product or service, not just replicate existing ones.' },
    { title: 'Indian Startups', description: 'The startup must be officially registered and based in India to qualify for the registration process.' },
  ];

  const documents = [
    { title: 'Incorporation or Registration Certificate', description: 'Proof of the entity being a registered business as a Private Limited, Partnership, or LLP.' },
    { title: 'PAN Card of the Entity', description: 'Essential for all tax-related formalities under Startup India.' },
    { title: 'Details of Directors/Partners', description: 'KYC documents like Aadhaar, PAN, and address proof of directors or partners.' },
    { title: 'Business Plan', description: 'A comprehensive document outlining the startup\'s objectives, market scope, and growth plans.' },
    { title: 'Self-Certification of Business Activity', description: 'Declaration regarding innovation, scalability, and benefits to the economy under Startup India eligibility.' },
  ];

  const faqs = [
    { question: 'What do you mean by Startup India and who can apply?', answer: 'The Start-up India Campaign is an initiative by the Government of India to encourage entrepreneurship by providing funding, tax relief, and networking opportunities. You should fit in if your enterprise is under 10 years with a turnover of less than ₹100 crore in a financial year.' },
    { question: 'What benefits does registering with Startup India offer?', answer: 'By registering, you get access to tax breaks, funding, and support networks designed to help startups grow. You\'ll also find help with intellectual property rights (IPR) and easier compliance processes.' },
    { question: 'How can I register my startup under Startup India?', answer: 'To register, you need to go to the Startup India portal, where you will be required to provide information about your company, its innovative ideas, and other relevant papers. After this, your startup is able to gain exciting benefits and assistance.' },
    { question: 'Are there any tax benefits if my startup is recognized?', answer: 'Absolutely! Eligible startups enjoy a three-year tax exemption to ease the early financial load. This allows you to reinvest in growth without the usual tax pressures.' },
    { question: 'What are the financial sources one can avail of under Startup India?', answer: 'Under the Fund of Funds scheme, Startup India also offers monetary assistance by linking you to venture capital investors and angel investors who are keen on accelerating the growth of Start-Ups.' },
  ];

  const whyChooseUs = [
    'Experienced professionals dedicated to supporting startup success through compliance expertise',
    'Tailored assistance ensures timely processing of applications and thorough document preparation',
    'Continuous tracking of applications to ensure a smooth process',
    'Affordable services designed specifically to meet the unique needs of startups',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-violet-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-400/30 rounded-full mb-6"
              >
                <Rocket size={18} className="text-violet-400" />
                <span className="text-sm font-semibold text-violet-300">Government Initiative</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Startup India <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Registration</span>
              </h1>

              <p className="text-lg text-violet-100/80 mb-8 leading-relaxed">
                At the core of &ldquo;Startup India&rdquo; is an initiative of the Government of India with the intent to motivate and promote entrepreneurship and innovation throughout the country. It offers critical resources, feasible funding options, and networking opportunities for starters.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-violet-400/50 text-white rounded-full font-semibold hover:bg-violet-500/10 transition-all"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-violet-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-violet-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-violet-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Startup Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-violet-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your startup..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-violet-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
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
              JR Compliance is committed to helping startups get registered under the Startup India scheme with all its efficiency. Our team has efficient systems in place to simplify the application processes of Startups, ensuring that they get all the government incentives, funding, and business contacts that are critical to their growth.
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
              Benefits of Startup India Registration
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
                className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100 hover:border-violet-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
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
              Challenges We Help You Overcome
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
              >
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-violet-600" size={20} />
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
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="text-white" size={32} />
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
              className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-10 text-white"
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
                    <CheckCircle className="text-violet-200 flex-shrink-0 mt-0.5" size={22} />
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
                    <FileText className="text-violet-400 flex-shrink-0 mt-0.5" size={22} />
                    <div>
                      <span className="font-semibold">{doc.title}:</span> <span className="text-slate-300">{doc.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
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
            <p className="text-lg text-violet-200 max-w-2xl mx-auto">
              Step-by-step journey to your Startup India registration
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-violet-100">{step.description}</p>
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
                Why Choose <span className="text-violet-600">JR Compliance</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Partner with experts who understand the Startup India ecosystem
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
                    <CheckCircle className="text-violet-500 flex-shrink-0 mt-0.5" size={22} />
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
                { icon: Users, title: '1000+', subtitle: 'Startups Helped' },
                { icon: Shield, title: '99%', subtitle: 'Success Rate' },
                { icon: Zap, title: 'Fast', subtitle: 'Processing Time' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 text-center border border-violet-100"
                >
                  <stat.icon className="w-10 h-10 text-violet-600 mx-auto mb-3" />
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
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Register Your Startup?
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the Startup India registration process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
