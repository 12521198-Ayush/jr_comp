'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, CheckCircle, Headphones, Globe, Zap } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Expert Professionals', description: 'Experienced CAs, CS, and lawyers with deep domain expertise.' },
  { icon: Clock, title: 'Quick Turnaround', description: 'Get your registrations and licenses in record time.' },
  { icon: Award, title: '99.9% Success Rate', description: 'Meticulous approach ensures highest approval rates.' },
  { icon: Users, title: '10,000+ Clients', description: 'Trusted by businesses across India.' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance for all queries.' },
  { icon: Globe, title: 'Pan India Service', description: 'Serving all states and union territories.' },
  { icon: Zap, title: 'Digital First', description: 'Complete online process with real-time tracking.' },
  { icon: CheckCircle, title: 'Transparent Pricing', description: 'No hidden charges, clear pricing.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Award size={18} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              India&apos;s Most Trusted <span className="gradient-text">Compliance Partner</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              At JR Compliance, we combine expertise, technology, and dedication to deliver 
              exceptional compliance services. Our client-first approach has helped us build 
              lasting relationships with businesses of all sizes.
            </p>

            <div className="space-y-3 mb-8">
              {['Dedicated Relationship Manager', 'Real-time Application Tracking', 'Secure Document Management', 'Post-Registration Support'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {[
                { value: '5+', label: 'Years' },
                { value: '10K+', label: 'Clients' },
                { value: '99.9%', label: 'Success' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                  <feature.icon size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
