'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Users, Award, Building2, BadgeCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Ready To Get<br className="sm:hidden" /> <span className="italic">Your Certification?</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join 5,000+ Indian businesses & protect your business today.
          </p>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Certification In Days
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          {/* Trust Stats Row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              { value: '5000+', label: 'Certifications Done', icon: BadgeCheck },
              { value: '25+', label: 'Services', icon: Award },
              { value: '500+', label: 'Businesses Served', icon: Building2 },
              { value: '₹50 Cr.', label: 'Saved for Clients', icon: Users },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <span className="text-lg lg:text-xl font-bold">{stat.value}</span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
