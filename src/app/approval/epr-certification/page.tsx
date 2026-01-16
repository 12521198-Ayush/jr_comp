'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Send, Recycle, Leaf, Droplet, Disc, Car } from 'lucide-react';
import { useState } from 'react';

export default function EPRCertificationPage() {
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
    { title: 'Legal Compliance', description: 'EPR ensures that your company is complying with environmental laws, hence avoiding fines and legal ramifications.' },
    { title: 'Eco-Friendly Image', description: 'EPR registration builds a healthy image of your organization as responsible towards the environment.' },
    { title: 'Cost Efficiency', description: 'The long-term cost implications can be perceived with proper waste management since such action may result in long-term savings.' },
    { title: 'Sustainability Goals', description: 'Contribute to a circular economy by recycling materials that, in turn, decrease the overall amount of waste.' },
  ];

  const eprElements = [
    { icon: Recycle, title: 'Plastic', description: 'Plastic qualifies if its lifecycle (production, use, disposal) poses environmental challenges. Determine applicability by checking local recycling mandates.' },
    { icon: Award, title: 'Battery', description: 'If batteries contain hazardous components requiring specialized recycling. Check if your battery design mandates compliance with safe disposal regulations.' },
    { icon: Disc, title: 'E-waste', description: 'Verify e-waste compliance by assessing material composition, repairability, and regulatory e-waste guidelines.' },
    { icon: Car, title: 'Tyre', description: 'Determining the applicability of EPR on tyres depends on their durability and disposal challenges by reviewing material composition.' },
    { icon: Droplet, title: 'Used Oil', description: 'Used oil qualifies under EPR if it poses environmental risks via improper disposal. Confirm applicability by evaluating contamination levels.' },
  ];

  const process = [
    { step: 'Registration', description: 'Register under applicable EPR regulations with the appropriate regulatory authorities.' },
    { step: 'Implementation', description: 'Develop a collection and recycling strategy for waste made according to the product.' },
    { step: 'Monitoring', description: 'Keep track of ongoing compliance with the EPR regulations.' },
    { step: 'Reporting', description: 'Furnish routine reports on the management of wastes and status regarding compliance with the appropriate authorities.' },
  ];

  const documents = [
    'Business Registration Documents - GST certificate, Import Export Code (IEC), Certificate of incorporation, MSME (Optional)',
    'Director KYC Documents - Aadhar card/Pan Card/Email/Contact Details of Authorized Signatory',
    'Technical Details - Sales and purchase data of the last 2 financial years (state-wise) with Product details',
    'Product Photographs - Clear photographs of all products covered under EPR',
  ];

  const howWeHelp = [
    { title: 'EPR Registration', description: 'We help you register your business under specific Extended Producer Responsibility (EPR) law for various sectors.' },
    { title: 'Waste Management Plans', description: 'To collect, recycle, and manage post-consumer products, plans are customized based on Plastic Waste Management standards.' },
    { title: 'Compliance Monitoring', description: 'Periodic tracking should be done to assure compliance with EPR law and avoid liability through monitoring as per CPCB directives.' },
  ];

  const faqs = [
    { question: 'What is EPR compliance?', answer: 'EPR compliance is a directive by which producers are obliged to take responsibility for disposal at the end of the life cycle of their product to achieve proper recycling and environmental protection.' },
    { question: 'Which sectors have to follow EPR regulation?', answer: 'Product sectors: electronic, plastic, or packaging material manufacturers, importers, and brand owners have to adhere to the EPR regulation.' },
    { question: 'How do I register for EPR compliance?', answer: 'You may get the process done through the respective environmental authority or let us handle everything on your behalf.' },
    { question: 'What would be the implications if I\'m not compliant with EPR?', answer: 'Non-compliance would lead to some form of penalty, fine, or restriction for selling the products in specific markets.' },
    { question: 'What are the benefits of EPR to my business?', answer: 'EPR registration improves the environmentally friendly profile of your business, fulfills the legal requirements, and eventually saves cost on waste management.' },
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white mb-8 transition-colors">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-6"
              >
                <Leaf size={18} className="text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300">Extended Producer Responsibility</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                EPR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Certification</span>
              </h1>

              <p className="text-lg text-emerald-100/80 mb-8 leading-relaxed">
                Do you need comprehensive EPR solutions? We at JR Compliance ensure proper management of the product lifecycle and updated legal compliance by providing you with the means of achieving environmental sustainability.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                  >
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-emerald-400/50 text-white rounded-full font-semibold hover:bg-emerald-500/10 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 hover:shadow-emerald-500/25 transition-all"
                >
                  <Send size={20} />
                  Submit Enquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EPR Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              EPR <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Extended Producer Responsibility (EPR) is considered a policy approach that involves the care of a manufacturer for a product from its beginning until its ultimate disposal. It involves the safe collection and recycling of used and discarded products with the intent of containing their adverse effects on the environment. EPR compliance holds high importance for sectors related to electronics, plastics, and packaging materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EPR Elements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elements of <span className="gradient-text">EPR</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Determine if your product qualifies under our EPR guidelines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eprElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-4">
                  <element.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-gray-600 text-sm">{element.description}</p>
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
              Benefits of <span className="gradient-text">EPR Certification</span>
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
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Our streamlined process for EPR certification
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">{step.step}</h4>
                <p className="text-emerald-200 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How <span className="gradient-text">JR Helps</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Being top consultants in India, we tailor industry-specific solutions to EPR compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {howWeHelp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents <span className="gradient-text">Required</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <FileText size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EPR Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our EPR <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/approval/epr-certification/battery-waste-compliance">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">EPR Battery Waste Compliance</h3>
                    <p className="text-gray-600 text-sm">Battery waste management solutions</p>
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/approval/epr-certification/e-waste-compliance">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Recycle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">EPR E-Waste Compliance</h3>
                    <p className="text-gray-600 text-sm">Electronic waste management solutions</p>
                  </div>
                </div>
              </motion.div>
            </Link>
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for EPR Certification?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and get your certification process started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
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
