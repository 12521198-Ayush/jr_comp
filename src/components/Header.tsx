'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Building2, Cpu } from 'lucide-react';

const corporateServices = [
  { name: 'Company Registration', href: '/services/company-registration' },
  { name: 'GST Registration', href: '/services/gst-registration' },
  { name: 'Annual Compliance', href: '/services/annual-compliance' },
  { name: 'FSSAI License', href: '/services/fssai-license' },
  { name: 'FSSAI Modification', href: '/corporate/fssai-certificate' },
  { name: 'PSARA License', href: '/services/psara-license' },
  { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant' },
  { name: 'Sole Proprietorship', href: '/corporate/sole-proprietorship-registration' },
  { name: 'Startup India Registration', href: '/corporate/startup-india-registration' },
  { name: 'Trademark Registration', href: '/corporate/trademark-registration' },
];

const technicalServices = [
  { name: 'BIS Registration', href: '/services/bis-registration' },
  { name: 'CRS Certification', href: '/approval/bis-certification/crs-certification' },
  { name: 'FMCS BIS Certification', href: '/approval/bis-certification/fmcs-bis-certification' },
  { name: 'ISI Certification', href: '/approval/isi-certificate' },
  { name: 'CDSCO Registration', href: '/approval/cdsco-registration' },
  { name: 'EPR Certification', href: '/approval/epr-certification' },
  { name: 'EPR E-Waste Compliance', href: '/approval/epr-certification/e-waste-compliance' },
  { name: 'EPR Battery Waste', href: '/approval/epr-certification/battery-waste-compliance' },
  { name: 'TEC Certification', href: '/approval/tec-certificate' },
  { name: 'WPC Certification', href: '/approval/wpc-certification' },
  { name: 'WPC Approval', href: '/services/wpc-approval' },
  { name: 'AERB Registration', href: '/services/aerb-registration' },
  { name: 'EPR Services', href: '/services/epr-services' },
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
    <div className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className={`bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2.5 text-sm hidden md:block transition-all duration-300 ${
        isScrolled ? 'py-1.5' : 'py-2.5'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:1800121410410" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone size={14} />
              <span>1800 121 410 410</span>
            </a>
            <a href="mailto:info@jrcompliance.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail size={14} />
              <span>info@jrcompliance.com</span>
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-blue-200">Your Trusted Compliance Partner</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="JR Compliance"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>

              <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About Us
              </Link>

              {/* Corporate Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('corporate')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                  <Building2 size={18} />
                  <span>Corporate Services</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'corporate' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'corporate' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden mt-1"
                    >
                      <div className="p-2 max-h-80 overflow-y-auto">
                        {corporateServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                          >
                            {service.name}
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
                <button className="px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors flex items-center gap-1">
                  <Cpu size={18} />
                  <span>Technical Services</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'technical' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'technical' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden mt-1"
                    >
                      <div className="p-2 max-h-80 overflow-y-auto">
                        {technicalServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 rounded-lg hover:bg-cyan-50 text-gray-700 hover:text-cyan-600 transition-colors text-sm"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:1800121410410"
                className="flex items-center gap-2 px-4 py-2.5 text-blue-600 border-2 border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <Link
                href="/contact"
                className="btn-shine flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="space-y-1">
                  <Link href="/" className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/about" className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                    About Us
                  </Link>
                  
                  {/* Mobile Corporate Services Accordion */}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={() => setMobileActiveSection(mobileActiveSection === 'corporate' ? null : 'corporate')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 font-medium text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 size={18} className="text-blue-600" />
                        <span>Corporate Services</span>
                      </div>
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-500 transition-transform ${mobileActiveSection === 'corporate' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileActiveSection === 'corporate' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1 max-h-60 overflow-y-auto border-l-2 border-blue-200 ml-4">
                            {corporateServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-2.5 rounded-lg hover:bg-blue-50 text-gray-600 text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Mobile Technical Services Accordion */}
                  <div className="border-t border-gray-100 pt-2">
                    <button
                      onClick={() => setMobileActiveSection(mobileActiveSection === 'technical' ? null : 'technical')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-cyan-50 font-medium text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Cpu size={18} className="text-cyan-600" />
                        <span>Technical Services</span>
                      </div>
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-500 transition-transform ${mobileActiveSection === 'technical' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileActiveSection === 'technical' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1 max-h-60 overflow-y-auto border-l-2 border-cyan-200 ml-4">
                            {technicalServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-2.5 rounded-lg hover:bg-cyan-50 text-gray-600 text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-2">
                    <Link href="/contact" className="block px-4 py-3 rounded-lg hover:bg-blue-50 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </div>
                </div>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 mt-4 border-t border-gray-100 flex gap-3">
                  <a
                    href="tel:1800121410410"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-blue-600 border-2 border-blue-600 rounded-full font-medium"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
