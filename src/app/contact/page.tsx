'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Building2, Cpu } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['1800 121 410 410', '+91 98765 43211'],
    action: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@jrcompliance.com', 'support@jrcompliance.com'],
    action: 'mailto:info@jrcompliance.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['123 Business Hub, Sector 5', 'New Delhi, India - 110001'],
    action: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday', '9:00 AM - 7:00 PM'],
    action: null,
  },
];

const services = [
  { category: 'Corporate Services', items: ['Company Registration', 'GST Registration', 'Annual Compliance', 'FSSAI License', 'PSARA License'] },
  { category: 'Technical Services', items: ['BIS Registration', 'AERB Registration', 'EPR Services', 'WPC Approval'] },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <MessageCircle size={18} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Contact Us</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Start Your <span className="gradient-text">Compliance Journey</span>
            </h1>

            <p className="text-lg text-gray-600">
              Get in touch with our experts for a free consultation. We&apos;re here to help you 
              navigate the complexities of business compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                  <info.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
                {info.action && (
                  <a href={info.action} className="text-blue-600 text-sm font-medium mt-3 inline-block hover:underline">
                    Connect →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="1800 121 410 410"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Required *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
                    <option value="">Select a service</option>
                    <optgroup label="Corporate Services">
                      <option value="company-registration">Company Registration</option>
                      <option value="gst-registration">GST Registration</option>
                      <option value="annual-compliance">Annual Compliance</option>
                      <option value="fssai-license">FSSAI License</option>
                      <option value="psara-license">PSARA License</option>
                    </optgroup>
                    <optgroup label="Technical Services">
                      <option value="bis-registration">BIS Registration</option>
                      <option value="aerb-registration">AERB Registration</option>
                      <option value="epr-services">EPR Services</option>
                      <option value="wpc-approval">WPC Approval</option>
                    </optgroup>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Services & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Services */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-5">Our Services</h3>
                <div className="space-y-5">
                  {services.map((service) => (
                    <div key={service.category}>
                      <div className="flex items-center gap-2 mb-2">
                        {service.category === 'Corporate Services' ? (
                          <Building2 size={18} className="text-cyan-300" />
                        ) : (
                          <Cpu size={18} className="text-cyan-300" />
                        )}
                        <span className="font-semibold text-cyan-200">{service.category}</span>
                      </div>
                      <ul className="grid grid-cols-2 gap-1.5">
                        {service.items.map((item) => (
                          <li key={item} className="text-sm text-blue-100">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Quick Connect via WhatsApp</h3>
                <p className="text-green-100 mb-5 text-sm">
                  Get instant response on WhatsApp. Our team is available to assist you.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi, I need assistance with compliance services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin size={36} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm font-medium">123 Business Hub, Sector 5</p>
                  <p className="text-gray-400 text-sm">New Delhi, India - 110001</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Check out our service pages for detailed information and FAQs, or give us a call!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all"
              >
                <Phone size={20} />
                Call: 1800 121 410 410
              </a>
              <a
                href="mailto:info@jrcompliance.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all bg-white"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
