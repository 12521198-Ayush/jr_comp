'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Building2, Cpu } from 'lucide-react';

const corporateServices = [
  { name: 'Company Registration', href: '/services/company-registration' },
  { name: 'GST Registration', href: '/services/gst-registration' },
  { name: 'Annual Compliance', href: '/services/annual-compliance' },
  { name: 'FSSAI License', href: '/services/fssai-license' },
  { name: 'PSARA License', href: '/services/psara-license' },
];

const technicalServices = [
  { name: 'BIS Registration', href: '/services/bis-registration' },
  { name: 'AERB Registration', href: '/services/aerb-registration' },
  { name: 'EPR Services', href: '/services/epr-services' },
  { name: 'WPC Approval', href: '/services/wpc-approval' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative -mb-16 z-10 -mt-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
                <p className="text-blue-100">Get expert guidance from JR Compliance.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  Subscribe <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="pt-28 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="JR Compliance"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for all corporate and technical compliance needs. 
                We provide end-to-end solutions for business registration and licensing.
              </p>
              <div className="space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Phone size={16} className="text-blue-400" />
                  </div>
                  <span>1800 121 410 410</span>
                </a>
                <a href="mailto:info@jrcompliance.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Mail size={16} className="text-blue-400" />
                  </div>
                  <span>info@jrcompliance.com</span>
                </a>
              </div>
            </div>

            {/* Corporate Services */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Building2 className="text-blue-400" size={18} />
                <h4 className="font-semibold">Corporate Services</h4>
              </div>
              <ul className="space-y-3">
                {corporateServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Services */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Cpu className="text-cyan-400" size={18} />
                <h4 className="font-semibold">Technical Services</h4>
              </div>
              <ul className="space-y-3">
                {technicalServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} JR Compliance. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
