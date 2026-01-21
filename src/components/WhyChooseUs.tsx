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
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square lg:aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src="/banner.png" 
                alt="JR Compliance Banner" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Why<span className="text-blue-600">Choose</span> JR Compliance?
            </h2>

            <div className="mt-8 space-y-4">
              {[
                { num: 1, title: 'Speed', desc: 'Quotes in seconds, certification in days! Our streamlined process ensures quick turnaround.', icon: Zap },
                { num: 2, title: 'Service', desc: 'Dedicated support team, quick replies! We\'re available whenever you need assistance.', icon: Headphones },
                { num: 3, title: 'Savings', desc: 'Best prices in the market, maximum savings! No hidden charges, transparent pricing.', icon: Shield },
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold flex items-center justify-center flex-shrink-0 shadow">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <item.icon size={18} className="text-blue-600" />
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100"
                >
                  <feature.icon size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
