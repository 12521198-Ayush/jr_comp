'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Users, Target, Heart, CheckCircle, ArrowRight, Building2, Cpu } from 'lucide-react';

const stats = [
  { number: '10,000+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '99.9%', label: 'Success Rate' },
  { number: '500+', label: 'Expert Team' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We maintain complete transparency and honesty in all our dealings with clients.',
  },
  {
    icon: Users,
    title: 'Client First',
    description: 'Our clients are at the heart of everything we do. Your success is our success.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team comprises industry experts with deep domain knowledge and experience.',
  },
];

const team = [
  { name: 'Rajiv Sharma', role: 'Founder & CEO', expertise: 'Corporate Law' },
  { name: 'Priya Mehta', role: 'Director - Operations', expertise: 'Compliance' },
  { name: 'Amit Verma', role: 'Head - Technical Services', expertise: 'BIS & WPC' },
  { name: 'Neha Gupta', role: 'Head - Corporate Services', expertise: 'Company Registration' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <Award size={18} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">About JR Compliance</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in <span className="gradient-text">Business Compliance</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              JR Compliance is a leading compliance and registration service provider in India. 
              With over 5 years of experience and a team of 500+ experts, we have helped more than 
              10,000 businesses navigate the complex world of regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JR Compliance was founded with a simple mission: to make business compliance 
                  easy and accessible for everyone. We recognized that many entrepreneurs struggle 
                  with the complexities of regulatory requirements, often spending valuable time 
                  and resources on compliance rather than growing their business.
                </p>
                <p>
                  Starting with a small team of dedicated professionals, we have grown into one of 
                  India&apos;s most trusted compliance service providers. Our journey has been marked by 
                  continuous learning, innovation, and an unwavering commitment to client success.
                </p>
                <p>
                  Today, we serve clients across all sectors - from startups to established enterprises - 
                  providing comprehensive corporate and technical compliance services that help businesses 
                  operate with confidence and peace of mind.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Building2 size={32} className="text-blue-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Corporate Services</h4>
                    <p className="text-sm text-gray-600">Company registration, GST, FSSAI, PSARA & more</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Cpu size={32} className="text-cyan-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Technical Services</h4>
                    <p className="text-sm text-gray-600">BIS, AERB, EPR, WPC & certifications</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg col-span-2">
                    <Award size={32} className="text-amber-500 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">99.9% Success Rate</h4>
                    <p className="text-sm text-gray-600">Our meticulous approach ensures highest approval rates</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <value.icon size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your business success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600">{member.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-500 mt-1">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Businesses Choose JR Compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Expert team of CAs, CS, and lawyers',
              'Quick turnaround time',
              'Transparent pricing with no hidden fees',
              '24/7 customer support',
              'Pan-India service coverage',
              'Digital-first approach',
              'Real-time application tracking',
              'Post-registration support',
              '99.9% success rate',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <CheckCircle size={20} className="text-cyan-400 flex-shrink-0" />
                <span className="text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business stay compliant and grow.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold shadow-lg"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
