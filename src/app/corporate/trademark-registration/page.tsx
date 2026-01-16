'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, BadgeCheck, Globe, Scale, Bookmark, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function TrademarkRegistrationPage() {
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
    { title: 'Legal Protection', description: 'Trademark registration provides rights to the registered brand owner and prevents any other company/brand from registering the trademark.' },
    { title: 'Wider Business Opportunities', description: 'A registered trademark builds trust among customers in the market, assisting in enduring customer loyalty and ensuring quality and reliability.' },
    { title: 'Create Intangible Assets', description: 'A registered trademark helps to create intangible assets that are the business\'s intellectual property, which can be sold, assigned, franchised, or commercially contracted.' },
    { title: 'Provides Global Reach', description: 'A trademark registered in India can be trademarked in other countries providing your brand with a global reach, trust, and reliability in a worldwide market.' },
  ];

  const challenges = [
    { title: 'Existence of Similar Trademark', description: 'There might be a high chance that the trademark the brand is going for might be similar to one that already exists, unless it is a totally original idea.' },
    { title: 'Failing to Renew Trademark', description: 'Trademark is valid for 10 years from the date of being registered. After this period if the owner fails to renew, they might lose the rights.' },
    { title: 'Generic Terms', description: 'Generic or common names/terms, symbols may lead to confusion between brands where the business can incur financial losses.' },
    { title: 'Lack of Distinctiveness', description: 'Trademark acts as a base in building a brand\'s identity, lack of distinctiveness between trademarks will build an uncertain customer base.' },
  ];

  const process = [
    { step: 'Trademark Search', description: 'The first step is to do a trademark search. This helps to choose a trademark which is new and that has been not registered previously.' },
    { step: 'Application Preparation', description: 'An application for trademark registration will be prepared by the Trademark registration attorney.' },
    { step: 'Class Selection', description: 'Determine the correct class(es) under which the trademark should be registered based on the nature of goods or services offered.' },
    { step: 'Document Approval', description: 'The applicant is required to sign Form 48 for approval of the attorney and Form TM-A which is the primary application form.' },
    { step: 'Application Review', description: 'The application will be submitted along with required documents; the registrar will examine whether the brand has complied with specific terms.' },
    { step: 'Final Approval Stage', description: 'After clearing examination, the brand name will be published in Indian Trade Marks Journals. If there is no opposition within 120 days, the trademark will be registered.' },
  ];

  const whoCanApply = [
    { title: 'Any Type of Company', description: 'Private Limited Company, Public Limited Company, Limited Liability Partnerships and Partnership firms can apply for a trademark to protect their brand identity.' },
    { title: 'Any Individual', description: 'An individual who does not have a registered company can also apply and file for a trademark to secure their unique business identity from competitors.' },
    { title: 'Any Business Across Industries', description: 'Stretching from fashion to technology, businesses in any sector can trademark their logos, names or slogans for legal protection.' },
    { title: 'Any E-commerce or Online Business', description: 'Digital businesses and influencers can also register trademarks to protect brand assets like domain names and usernames.' },
  ];

  const trademarkClasses = [
    { title: 'Classes 1-34: Product Classes', description: 'Cover a wide range of goods such as chemicals, cosmetics, clothing, food items, and machinery that businesses manufacture or sell.' },
    { title: 'Classes 35-45: Service Classes', description: 'Cover services like advertising, education, legal services, hospitality, healthcare, and tech services offered by businesses and professionals.' },
  ];

  const timeline = [
    { title: 'Validity', description: 'A trademark is valid for 10 years.' },
    { title: 'Opposition Period', description: 'Trademark has a 120 days opposition period.' },
    { title: 'Counter Statement', description: 'If a trademark is opposed, the counter statement must be sent within 30 days.' },
    { title: 'Overall Process', description: 'The trademark registration process can overall take 2-3 years.' },
  ];

  const documents = [
    { title: 'Brand Name or Logo', description: 'The unique wordmark, symbol, or design you want to protect.' },
    { title: 'Applicant\'s Identity Proof', description: 'PAN, Aadhaar, or passport of the individual or business entity.' },
    { title: 'Business Registration Proof', description: 'Company incorporation documents if applying as a business.' },
    { title: 'Class of Trademark', description: 'Specifies the industry or category under which the trademark falls.' },
    { title: 'Power of Attorney', description: 'Required if an attorney is filing the trademark on behalf of the owner.' },
  ];

  const postApplication = [
    { step: 'Objection Process', description: 'If the trademark examiner raises objections, the applicant must respond with justifications within the stipulated time.' },
    { step: 'Application Hearing', description: 'If objections persist, a hearing is scheduled where the applicant presents arguments before the registrar.' },
    { step: 'Accept and Advertise', description: 'Once accepted, the trademark is advertised in the journal, allowing the public to oppose it within a specified period.' },
    { step: 'Opposition', description: 'Any third party can file an opposition against the published trademark, citing legal grounds to prevent its registration.' },
    { step: 'Counter Statement', description: 'The applicant must file a counter-statement within two months, addressing the opposition claims.' },
    { step: 'Evidence Filing', description: 'Both parties submit documentary evidence supporting their claims before a decision is made.' },
  ];

  const faqs = [
    { question: 'Who registers the trademark in India?', answer: 'The Controller General of Patents, Design, and Trademarks, Ministry of Industry and Commerce registers the trademarks under The Trademark Act, 1999.' },
    { question: 'Who can apply for the Trademark registration?', answer: 'There is no restriction on who can register a trademark. A trademark can be registered under the name of a business, individual, company, firm, organisation, or NGO.' },
    { question: 'How to select a good trademark?', answer: 'The best trademarks are unique word combinations or unique designs. Avoid common names, generic shapes as those cannot be owned.' },
    { question: 'What is the function of a trademark?', answer: 'A trademark symbolizes quality of products/services, enables consumer-to-consumer advertisement, and serves as an identification mark for the brand.' },
    { question: 'When should I renew my trademark?', answer: 'A trademark is valid for 10 years, after that period you have to apply for trademark renewal.' },
  ];

  const whyChooseUs = [
    'Our expert trademark registration consultants will assist you in searching for a suitable trademark',
    'We assist in making the Trademark registration process documentation hassle free',
    'We monitor the trademark process status for constant updates',
    'We guarantee complete support and assistance during and after the Trademark registration process',
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,63,94,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,113,133,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-rose-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 border border-rose-400/30 rounded-full mb-6"
              >
                <BadgeCheck size={18} className="text-rose-400" />
                <span className="text-sm font-semibold text-rose-300">Intellectual Property Protection</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Trademark <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Registration</span>
              </h1>

              <p className="text-lg text-rose-100/80 mb-8 leading-relaxed">
                Your trademark can be the most valuable asset of your brand. Trademark (register) it before someone else does. With over 13 years of experience, we can help you secure your trademark and safeguard your intellectual property.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-rose-400/50 text-white rounded-full font-semibold hover:bg-rose-500/10 transition-all"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Brand Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your trademark requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all"
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
              The online trademark registration process simplifies securing your brand&apos;s identity with ease. Protecting your intellectual property is crucial, as it ensures your brand identity is recognized by your customers, who have come to associate your business with trust and quality.
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
              Why Trademark Registration is Essential
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
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100 hover:border-rose-300 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
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
                  <AlertCircle className="text-amber-600" size={20} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{challenge.title}</h4>
                <p className="text-sm text-slate-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Who Can Apply for a Trademark?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoCanApply.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bookmark className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trademark Classes */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Trademark Classification
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trademarkClasses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 text-white ${index === 0 ? 'bg-gradient-to-br from-rose-500 to-pink-600' : 'bg-gradient-to-br from-slate-800 to-slate-900'}`}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={index === 0 ? 'text-rose-100' : 'text-slate-300'}>{item.description}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-md border border-slate-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <FileText className="text-rose-600" size={24} />
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
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
            <p className="text-lg text-rose-200 max-w-2xl mx-auto">
              Step-by-step journey to your trademark registration
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-rose-500/30">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-rose-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Post-Application &amp; Legal Considerations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {postApplication.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100"
              >
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{item.step}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Timeline
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center"
              >
                <h4 className="font-bold text-rose-600 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
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
                Why Choose <span className="text-rose-600">JR Compliance</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Partner with experts who understand trademark law
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
                    <CheckCircle className="text-rose-500 flex-shrink-0 mt-0.5" size={22} />
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
                { icon: Award, title: '13+ Years', subtitle: 'Experience' },
                { icon: Users, title: '10,000+', subtitle: 'Trademarks Filed' },
                { icon: Shield, title: '99%', subtitle: 'Success Rate' },
                { icon: Globe, title: 'Pan India', subtitle: 'Service' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 text-center border border-rose-100"
                >
                  <stat.icon className="w-10 h-10 text-rose-600 mx-auto mb-3" />
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
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Brand?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the trademark registration process seamlessly
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
