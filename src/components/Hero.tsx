'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Phone, MessageCircle, CheckCircle, ChevronRight, Users, Clock, Award, Shield, BadgeCheck, Lock } from 'lucide-react';

const services = [
  { name: 'BIS Certification', href: '/approval/bis-certification', category: 'Technical' },
  { name: 'ISI Certification', href: '/approval/isi-certificate', category: 'Technical' },
  { name: 'TEC Certification', href: '/approval/tec-certificate', category: 'Technical' },
  { name: 'WPC Certification', href: '/approval/wpc-certification', category: 'Technical' },
  { name: 'CDSCO Registration', href: '/approval/cdsco-registration', category: 'Technical' },
  { name: 'EPR Certification', href: '/approval/epr-certification', category: 'Technical' },
  { name: 'BEE Certification', href: '/approval/bee-certification', category: 'Technical' },
  { name: 'Company Registration', href: '/services/company-registration', category: 'Corporate' },
  { name: 'GST Registration', href: '/services/gst-registration', category: 'Corporate' },
  { name: 'FSSAI License', href: '/services/fssai-license', category: 'Corporate' },
  { name: 'PSARA License', href: '/services/psara-license', category: 'Corporate' },
  { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant', category: 'Corporate' },
  { name: 'Trademark Registration', href: '/corporate/trademark-registration', category: 'Corporate' },
  { name: 'ISO Certification', href: '/corporate/iso-certification', category: 'Corporate' },
  { name: 'MSME Registration', href: '/corporate/msme-registration', category: 'Corporate' },
];

const stats = [
  { value: '10,000+', label: 'Businesses Served', icon: Users },
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '98%', label: 'Success Rate', icon: Award },
  { value: '50+', label: 'Expert Consultants', icon: Shield },
];

const features = [
  'No credit card required',
  'Free consultation',
  '24/7 support',
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate progress step based on form completion
  const currentStep = formData.phone.length === 10 ? 3 : formData.email.includes('@') ? 2 : formData.name.length > 2 ? 1 : 0;

  const filteredServices = useMemo(() =>
    services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6), [searchQuery]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Static with CSS animation */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons - Decorative */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-32 left-[10%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>💬</div>
        <div className="absolute top-40 right-[15%] text-3xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>📊</div>
        <div className="absolute bottom-40 right-[10%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>🔔</div>
        <div className="absolute bottom-60 left-[8%] text-3xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>⭐</div>
        <div className="absolute bottom-32 right-[25%] text-3xl opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🚀</div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
            
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <span className="text-cyan-400">✨</span>
                <span className="text-sm font-medium text-gray-300">Trusted by 10,000+ enterprises India based</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Power Your Business{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Compliance
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                India&apos;s most trusted compliance partner for BIS, ISI, FSSAI, GST & 100+ regulatory services. 
                Reach your business goals with our expert consultants.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
                >
                  <span>Start Free Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:1800121410410"
                  className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Search Section */}
              <div className="mt-10 max-w-xl mx-auto lg:mx-0" ref={searchRef}>
                <div className="relative">
                  <div className="relative flex items-center">
                    <Search size={20} className="absolute left-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for services... (BIS, GST, FSSAI, etc.)"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowResults(true);
                      }}
                      onFocus={() => setShowResults(true)}
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Search Results */}
                  {showResults && searchQuery && filteredServices.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden z-50">
                      <div className="p-2">
                        <p className="text-xs text-gray-500 px-3 py-2">{filteredServices.length} services found</p>
                        {filteredServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                            onClick={() => setShowResults(false)}
                          >
                            <div>
                              <p className="text-white font-medium">{service.name}</p>
                              <p className="text-xs text-gray-500">{service.category} Services</p>
                            </div>
                            <ChevronRight size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Links */}
                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="text-sm text-gray-500">Popular:</span>
                  {['BIS Certification', 'GST Registration', 'FSSAI License', 'Trademark'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSearchQuery(item);
                        setShowResults(true);
                      }}
                      className="px-3 py-1.5 text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Enquiry Form (Same as Service Page) */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto relative">
              {/* Secure Badge */}
              {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg shadow-emerald-500/30">
                  <Lock size={14} />
                  <span>Secure Process</span>
                </div>
              </div> */}

              <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Form Header */}
                <div className="px-6 py-5 bg-white/5 border-b border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm">Step</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        currentStep === 3 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-white/10 text-white'
                      }`}>
                        {currentStep}/3
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <BadgeCheck size={18} />
                      <span className="text-sm font-medium">Free Consultation</span>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Form Title */}
                <div className="px-6 pt-5">
                  <h3 className="text-xl font-bold text-white">Get Free Quotes in a Few Steps</h3>
                </div>

                {/* Form Body */}
                <div className="p-6 pt-4">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={40} className="text-emerald-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                      <p className="text-gray-400 mb-4">Our expert will contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Field */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Full Name*"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/20 focus:bg-white/10 text-white placeholder-gray-500 transition-all outline-none"
                        />
                        {formData.name.length > 2 && (
                          <CheckCircle size={20} className="absolute right-4 top-4 text-emerald-400" />
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Address*"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/20 focus:bg-white/10 text-white placeholder-gray-500 transition-all outline-none"
                        />
                        {formData.email.includes('@') && formData.email.includes('.') && (
                          <CheckCircle size={20} className="absolute right-4 top-4 text-emerald-400" />
                        )}
                      </div>

                      {/* Phone Field */}
                      <div className="relative flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl bg-white/10 border border-r-0 border-white/10 text-gray-400 font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Mobile Number*"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-4 rounded-r-xl bg-white/5 border border-l-0 border-white/10 focus:border-white/20 focus:bg-white/10 text-white placeholder-gray-500 transition-all outline-none"
                        />
                        {formData.phone.length === 10 && (
                          <CheckCircle size={20} className="absolute right-4 top-4 text-emerald-400" />
                        )}
                      </div>

                      {/* Trust Message */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield size={16} className="text-emerald-400" />
                        <span>We only send important messages — no spam</span>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white rounded-xl font-semibold transition-all flex items-center justify-between px-6 disabled:opacity-70 shadow-lg"
                      >
                        <span className="text-lg">{isSubmitting ? 'Processing...' : 'Get Free Quotes'}</span>
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <ArrowRight size={22} />
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative py-16 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={24} className="text-cyan-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919266450125?text=Hi%2C%20I%20need%20help%20with%20compliance%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-3 px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
          {/* Left - Pricing Info */}
          <div className="hidden sm:block">
            <p className="text-sm sm:text-base text-white font-semibold">
              Get <span className="text-cyan-400">Expert Assistance</span>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">Starting At <span className="text-white font-bold">₹999*</span> only</p>
          </div>

          {/* Center - Trust Badge (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">100+ Services</p>
              <p className="text-gray-400 text-xs">BIS, FSSAI, GST & More</p>
            </div>
          </div>

          {/* Mobile - Simple text */}
          <div className="sm:hidden">
            <p className="text-white font-semibold text-sm">JR Compliance</p>
            <p className="text-gray-400 text-xs">Starting At ₹999* only</p>
          </div>

          {/* Right - CTA Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 sm:px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all"
          >
            <span className="text-sm sm:text-base">Get Quotes</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
