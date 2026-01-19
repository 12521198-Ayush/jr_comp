'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Building2, Cpu, MapPin } from 'lucide-react';

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

const usefulLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ Centre', href: '/faq' },
  { name: 'Resources', href: '/resources' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get helpful business tips & compliance updates in your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/JRlogo.png"
                  alt="JR Compliance"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              
              {/* Location Tabs */}
              <div className="flex gap-3 mb-4">
                {['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'].map((city, index) => (
                  <button
                    key={city}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      index === 0 ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <a href="tel:+911800121410410" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <span className="text-gray-500">Call Us</span>
                  <span className="font-medium">+91-1800-121-410-410</span>
                </a>
                <a href="mailto:info@jrcompliance.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <span className="text-gray-500">Write to Us</span>
                  <span className="font-medium">info@jrcompliance.com</span>
                </a>
              </div>
            </div>

            {/* Corporate Services */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Corporate Services</h4>
              <ul className="space-y-2">
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
              <h4 className="font-semibold text-sm mb-4">Technical Services</h4>
              <ul className="space-y-2">
                {technicalServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Useful Links</h4>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              <span className="font-medium text-gray-400">Disclaimer:</span> JR Compliance Pvt. Ltd. | 
              Registered Office: 123, Business Tower, Sector 18, New Delhi - 110001 | 
              Phone: +91-1800-121-410-410 | Email: info@jrcompliance.com | 
              *The prices shown are estimates. Actual prices may vary based on your business details and requirements.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} JR Compliance. All rights reserved.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
