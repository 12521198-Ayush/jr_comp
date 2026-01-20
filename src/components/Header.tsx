'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';

const corporateServices = [
  { name: 'Company Registration', href: '/services/company-registration', desc: 'Register your business entity' },
  { name: 'GST Registration', href: '/services/gst-registration', desc: 'GST compliance made easy' },
  { name: 'Annual Compliance', href: '/services/annual-compliance', desc: 'Stay compliant yearly' },
  { name: 'FSSAI License', href: '/services/fssai-license', desc: 'Food business license' },
  { name: 'PSARA License', href: '/services/psara-license', desc: 'Security agency license' },
  { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant', desc: 'Pvt Ltd registration' },
  { name: 'Trademark Registration', href: '/corporate/trademark-registration', desc: 'Protect your brand' },
  { name: 'ISO Certification', href: '/corporate/iso-certification', desc: 'Quality management' },
  { name: 'MSME Registration', href: '/corporate/msme-registration', desc: 'MSME benefits' },
  { name: 'Startup India', href: '/corporate/startup-india-registration', desc: 'Startup registration' },
];

const technicalServices = [
  { name: 'BIS Certification', href: '/approval/bis-certification', desc: 'Bureau of Indian Standards' },
  { name: 'ISI Certification', href: '/approval/isi-certificate', desc: 'ISI mark certification' },
  { name: 'TEC Certification', href: '/approval/tec-certificate', desc: 'Telecom equipment' },
  { name: 'WPC Certification', href: '/approval/wpc-certification', desc: 'Wireless planning' },
  { name: 'CDSCO Registration', href: '/approval/cdsco-registration', desc: 'Medical device approval' },
  { name: 'EPR Certification', href: '/approval/epr-certification', desc: 'Extended Producer Resp.' },
  { name: 'BEE Certification', href: '/approval/bee-certification', desc: 'Energy efficiency' },
  { name: 'AERB License', href: '/approval/aerb-license', desc: 'Atomic energy board' },
  { name: 'CPCB Registration', href: '/approval/cpcb-registration', desc: 'Central Pollution Board' },
  { name: 'SPCB Registration', href: '/approval/state-pollution-board', desc: 'State Pollution Board' },
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/JRlogo.png"
              alt="JR Compliance"
              width={140}
              height={36}
              className="w-auto h-9 lg:h-10 object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>

            {/* Corporate Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('corporate')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <span>Corporate Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                activeDropdown === 'corporate' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-80 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                    <h3 className="text-white font-semibold text-sm">Corporate Services</h3>
                    <p className="text-blue-100 text-xs mt-0.5">Business registration & compliance</p>
                  </div>
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {corporateServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{service.name}</p>
                          <p className="text-xs text-white/50">{service.desc}</p>
                        </div>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('technical')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <span>Technical Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'technical' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                activeDropdown === 'technical' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-80 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-3">
                    <h3 className="text-white font-semibold text-sm">Technical Services</h3>
                    <p className="text-cyan-100 text-xs mt-0.5">Certifications & regulatory approvals</p>
                  </div>
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {technicalServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{service.name}</p>
                          <p className="text-xs text-white/50">{service.desc}</p>
                        </div>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone */}
            <a 
              href="tel:1800121410410" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span>1800-121-410-410</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-16 bg-slate-900/98 backdrop-blur-xl transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="h-full overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-2">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Home
            </Link>

            {/* Corporate Services */}
            <div>
              <button
                onClick={() => setMobileActiveSection(mobileActiveSection === 'corporate' ? null : 'corporate')}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
              >
                <span>Corporate Services</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileActiveSection === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                mobileActiveSection === 'corporate' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 py-2 space-y-1">
                  {corporateServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-white/70 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Services */}
            <div>
              <button
                onClick={() => setMobileActiveSection(mobileActiveSection === 'technical' ? null : 'technical')}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
              >
                <span>Technical Services</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileActiveSection === 'technical' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                mobileActiveSection === 'technical' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 py-2 space-y-1">
                  {technicalServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-white/70 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              <a
                href="tel:1800121410410"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg"
              >
                <Phone size={18} />
                <span>1800-121-410-410</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-center font-semibold rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
