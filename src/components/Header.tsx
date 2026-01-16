'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Building2, Cpu, MessageCircle, Shield, ArrowRight } from 'lucide-react';

const corporateServices = [
  { name: 'Company Registration', href: '/services/company-registration', desc: 'Register your business' },
  { name: 'GST Registration', href: '/services/gst-registration', desc: 'GST compliance made easy' },
  { name: 'Annual Compliance', href: '/services/annual-compliance', desc: 'Stay compliant yearly' },
  { name: 'FSSAI License', href: '/services/fssai-license', desc: 'Food business license' },
  { name: 'FSSAI Modification', href: '/corporate/fssai-certificate', desc: 'Update your license' },
  { name: 'PSARA License', href: '/services/psara-license', desc: 'Security agency license' },
  { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant', desc: 'Pvt Ltd registration' },
  { name: 'Sole Proprietorship', href: '/corporate/sole-proprietorship-registration', desc: 'Start as proprietor' },
  { name: 'Startup India Registration', href: '/corporate/startup-india-registration', desc: 'Register your startup' },
  { name: 'Trademark Registration', href: '/corporate/trademark-registration', desc: 'Protect your brand' },
];

const technicalServices = [
  { name: 'BIS Registration', href: '/services/bis-registration', desc: 'Bureau of Indian Standards' },
  { name: 'CRS Certification', href: '/approval/bis-certification/crs-certification', desc: 'Compulsory Registration' },
  { name: 'FMCS BIS Certification', href: '/approval/bis-certification/fmcs-bis-certification', desc: 'Foreign Manufacturer' },
  { name: 'ISI Certification', href: '/approval/isi-certificate', desc: 'ISI mark certification' },
  { name: 'CDSCO Registration', href: '/approval/cdsco-registration', desc: 'Medical device approval' },
  { name: 'EPR Certification', href: '/approval/epr-certification', desc: 'Extended Producer Resp.' },
  { name: 'EPR E-Waste Compliance', href: '/approval/epr-certification/e-waste-compliance', desc: 'E-waste management' },
  { name: 'EPR Battery Waste', href: '/approval/epr-certification/battery-waste-compliance', desc: 'Battery waste handling' },
  { name: 'TEC Certification', href: '/approval/tec-certificate', desc: 'Telecom equipment' },
  { name: 'WPC Certification', href: '/approval/wpc-certification', desc: 'Wireless planning' },
  { name: 'WPC Approval', href: '/services/wpc-approval', desc: 'WPC ETA approval' },
  { name: 'AERB Registration', href: '/services/aerb-registration', desc: 'Atomic energy board' },
  { name: 'EPR Services', href: '/services/epr-services', desc: 'Complete EPR solutions' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileActiveSection(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Trust Indicators */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-1.5 text-xs hidden lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Shield size={12} className="text-emerald-400" />
              <span className="text-gray-300">Trusted by <span className="text-white font-semibold">5000+</span> Businesses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-gray-300">ISO 9001:2015 Certified</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1800121410410" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
              <Phone size={12} />
              <span>Toll Free: <span className="font-semibold text-white">1800-121-410410</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-gray-200/50 py-2'
            : 'bg-white py-3'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <Image
                src="/logo.png"
                alt="JR Compliance"
                width={160}
                height={40}
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-9' : 'h-11'}`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-all group">
                Home
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>

              <Link href="/about" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-all group">
                About Us
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>

              {/* Corporate Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('corporate')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-all flex items-center gap-1.5 group">
                  <Building2 size={15} className="text-blue-500" />
                  <span>Corporate Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'corporate' ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
                </button>
                <AnimatePresence>
                  {activeDropdown === 'corporate' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100 overflow-hidden mt-2"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                        <h3 className="text-white font-semibold text-sm">Corporate Services</h3>
                        <p className="text-blue-100 text-xs mt-0.5">Business registration & compliance</p>
                      </div>
                      <div className="p-2 max-h-80 overflow-y-auto">
                        {corporateServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent text-gray-700 hover:text-blue-700 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Building2 size={14} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{service.name}</p>
                              <p className="text-xs text-gray-500">{service.desc}</p>
                            </div>
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Technical Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('technical')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium text-sm transition-all flex items-center gap-1.5 group">
                  <Cpu size={15} className="text-cyan-500" />
                  <span>Technical Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'technical' ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-600 group-hover:w-3/4 transition-all duration-300"></span>
                </button>
                <AnimatePresence>
                  {activeDropdown === 'technical' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100 overflow-hidden mt-2"
                    >
                      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-3">
                        <h3 className="text-white font-semibold text-sm">Technical Services</h3>
                        <p className="text-cyan-100 text-xs mt-0.5">Certifications & registrations</p>
                      </div>
                      <div className="p-2 max-h-80 overflow-y-auto">
                        {technicalServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent text-gray-700 hover:text-cyan-700 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                              <Cpu size={14} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{service.name}</p>
                              <p className="text-xs text-gray-500">{service.desc}</p>
                            </div>
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-600" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-all group">
                Contact
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/917042164654?text=Hi%2C%20I%20need%20help%20with%20compliance%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle size={18} className="group-hover:animate-pulse" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:1800121410410"
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <Phone size={18} className="group-hover:animate-bounce" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="mx-auto max-w-7xl px-4 py-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {/* Trust Badge for Mobile */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <Shield size={16} className="text-emerald-500" />
                  <span className="text-sm text-gray-600">Trusted by <span className="font-semibold text-gray-900">5000+</span> Businesses</span>
                </div>

                <div className="space-y-1">
                  <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent font-medium transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-lg">🏠</span>
                    </div>
                    <span>Home</span>
                  </Link>
                  <Link href="/about" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent font-medium transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-lg">ℹ️</span>
                    </div>
                    <span>About Us</span>
                  </Link>
                  <Link href="/contact" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent font-medium transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-lg">📞</span>
                    </div>
                    <span>Contact</span>
                  </Link>
                  
                  {/* Mobile Corporate Services Accordion */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setMobileActiveSection(mobileActiveSection === 'corporate' ? null : 'corporate')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-transparent font-semibold text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                          <Building2 size={18} className="text-white" />
                        </div>
                        <div>
                          <span className="text-gray-900">Corporate Services</span>
                          <p className="text-xs text-gray-500 font-normal mt-0.5">Business registration & compliance</p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-blue-600 transition-transform duration-300 ${mobileActiveSection === 'corporate' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileActiveSection === 'corporate' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-3 space-y-1 max-h-64 overflow-y-auto border-l-3 border-blue-400 ml-6 mt-2">
                            {corporateServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 text-sm group transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>{service.name}</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Mobile Technical Services Accordion */}
                  <div className="pt-2">
                    <button
                      onClick={() => setMobileActiveSection(mobileActiveSection === 'technical' ? null : 'technical')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-50 to-transparent font-semibold text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center">
                          <Cpu size={18} className="text-white" />
                        </div>
                        <div>
                          <span className="text-gray-900">Technical Services</span>
                          <p className="text-xs text-gray-500 font-normal mt-0.5">Certifications & registrations</p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-cyan-600 transition-transform duration-300 ${mobileActiveSection === 'technical' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileActiveSection === 'technical' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-3 space-y-1 max-h-64 overflow-y-auto border-l-3 border-cyan-400 ml-6 mt-2">
                            {technicalServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-cyan-50 text-gray-700 text-sm group transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>{service.name}</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-cyan-600 transition-opacity" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-5 mt-5 border-t border-gray-100 space-y-3">
                  <a
                    href="https://wa.me/917042164654?text=Hi%2C%20I%20need%20help%20with%20compliance%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:1800121410410"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20"
                  >
                    <Phone size={20} />
                    Call: 1800-121-410410
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
