'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play, Shield, Award, Users, Clock, Search, X, Star, Lock, BadgeCheck, MessageCircle } from 'lucide-react';

// All available services with their URLs
const services = [
  // Technical Services
  { name: 'BIS Certification', url: '/services/bis-registration', category: 'Technical' },
  { name: 'CRS Certification', url: '/approval/bis-certification/crs-certification', category: 'Technical' },
  { name: 'FMCS BIS Certification', url: '/approval/bis-certification/fmcs-bis-certification', category: 'Technical' },
  { name: 'ISI Certification', url: '/approval/isi-certificate', category: 'Technical' },
  { name: 'CDSCO Registration', url: '/approval/cdsco-registration', category: 'Technical' },
  { name: 'EPR Certification', url: '/approval/epr-certification', category: 'Technical' },
  { name: 'EPR E-Waste Compliance', url: '/approval/epr-certification/e-waste-compliance', category: 'Technical' },
  { name: 'EPR Battery Waste Compliance', url: '/approval/epr-certification/battery-waste-compliance', category: 'Technical' },
  { name: 'TEC Certification', url: '/approval/tec-certificate', category: 'Technical' },
  { name: 'WPC Certification', url: '/approval/wpc-certification', category: 'Technical' },
  { name: 'WPC Approval', url: '/services/wpc-approval', category: 'Technical' },
  { name: 'AERB Registration', url: '/services/aerb-registration', category: 'Technical' },
  
  // Corporate Services
  { name: 'FSSAI License', url: '/services/fssai-license', category: 'Corporate' },
  { name: 'FSSAI Modification', url: '/corporate/fssai-certificate', category: 'Corporate' },
  { name: 'Private Limited Company Registration', url: '/corporate/private-limited-company-registration-consultant', category: 'Corporate' },
  { name: 'Sole Proprietorship Registration', url: '/corporate/sole-proprietorship-registration', category: 'Corporate' },
  { name: 'Startup India Registration', url: '/corporate/startup-india-registration', category: 'Corporate' },
  { name: 'Trademark Registration', url: '/corporate/trademark-registration', category: 'Corporate' },
  { name: 'Company Registration', url: '/services/company-registration', category: 'Corporate' },
  { name: 'GST Registration', url: '/services/gst-registration', category: 'Corporate' },
  { name: 'Annual Compliance', url: '/services/annual-compliance', category: 'Corporate' },
  { name: 'PSARA License', url: '/services/psara-license', category: 'Corporate' },
  { name: 'EPR Services', url: '/services/epr-services', category: 'Corporate' },
];

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const currentStep = formData.phone.length === 10 ? 3 : formData.email.includes('@') ? 2 : formData.name.length > 2 ? 1 : 0;

  // Filter services based on search query
  const filteredServices = searchQuery.trim()
    ? services.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || filteredServices.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredServices.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && filteredServices[selectedIndex]) {
          router.push(filteredServices[selectedIndex].url);
          setShowSuggestions(false);
          setSearchQuery('');
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

  // Handle service selection
  const handleSelectService = (url: string) => {
    router.push(url);
    setShowSuggestions(false);
    setSearchQuery('');
  };

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

  const trustedBy = ['Tata', 'Mahindra', 'Godrej', 'Wipro', 'Infosys', 'Reliance'];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919266450125"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      <section className="bg-white pt-4 pb-10 lg:pt-6 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trusted By Section */}
              <div className="mb-6">
                <p className="text-sm text-gray-400 font-medium mb-3 tracking-wide">Trusted by</p>
                <div className="flex flex-wrap items-center gap-5 overflow-x-auto scrollbar-hide pb-2">
                  {trustedBy.map((brand) => (
                    <span key={brand} className="text-gray-300 font-bold text-base lg:text-lg tracking-wider uppercase whitespace-nowrap hover:text-gray-400 transition-colors">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Heading - BimaKavach Style */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-gray-900 mb-1 leading-tight">
                <span className="italic">Simplify Your </span>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Business Compliance
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-gray-900 mb-6">
                <span className="italic">Starting At </span>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  ₹4,999*
                </span>
              </h2>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 py-4 mb-6 border-y border-gray-100">
                {[
                  { value: '10,000+', label: 'Happy Clients' },
                  { value: '4.9', label: 'Google Rating', hasStar: true },
                  { value: '10+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xl lg:text-2xl font-bold text-blue-600">
                      {stat.value}
                    </span>
                    {stat.hasStar && <Star size={16} className="text-amber-400 fill-amber-400" />}
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    {index < 2 && <span className="text-gray-200 ml-3 hidden sm:inline">|</span>}
                  </div>
                ))}
              </div>

              {/* Search Bar */}
              <div ref={searchRef} className="relative mb-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                      setSelectedIndex(-1);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search services... (BIS, FSSAI, Trademark)"
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setShowSuggestions(false);
                        inputRef.current?.focus();
                      }}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                {/* Suggestions Dropdown */}
                <AnimatePresence>
                  {showSuggestions && filteredServices.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden max-h-72 overflow-y-auto"
                    >
                      {filteredServices.map((service, index) => (
                        <button
                          key={service.url}
                          onClick={() => handleSelectService(service.url)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full px-4 py-3 flex items-center justify-between text-left transition-all ${
                            selectedIndex === index
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              service.category === 'Technical' 
                                ? 'bg-emerald-100 text-emerald-600' 
                                : 'bg-purple-100 text-purple-600'
                            }`}>
                              <Search size={14} />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{service.name}</div>
                              <div className="text-xs text-gray-400">{service.category}</div>
                            </div>
                          </div>
                          <ArrowRight size={16} className={selectedIndex === index ? 'translate-x-1' : ''} />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Why Choose Cards */}
              <div className="hidden lg:block">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose <span className="text-blue-600">JR Compliance?</span></h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: '1', title: 'Speed', desc: 'Quotes in seconds, certification in days!' },
                    { num: '2', title: 'Service', desc: 'Dedicated support, quick replies!' },
                    { num: '3', title: 'Savings', desc: 'Best prices, maximum savings!' },
                  ].map((item) => (
                    <div key={item.num} className="relative">
                      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-xs font-bold flex items-center justify-center shadow">
                        {item.num}
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 pt-5">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Paperless Badge */}
              {/* <div className="absolute -top-3 left-6 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg">
                  <Lock size={14} />
                  <span>Free Consultation</span>
                </div>
              </div> */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg">
                  <Lock size={14} />
                  <span>Free Consultation</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="px-6 py-5 bg-gray-50/50 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">Step</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        currentStep === 3 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {currentStep}/3
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <BadgeCheck size={18} />
                      <span className="text-sm font-medium">100% Free</span>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentStep / 3) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Form Title */}
                <div className="px-6 pt-5">
                  <h3 className="text-xl font-bold text-gray-900">Get Free Expert Consultation</h3>
                  <p className="text-gray-500 text-sm mt-1">Our team will contact you within 30 minutes</p>
                </div>

                {/* Form Body */}
                <div className="p-6 pt-4">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle size={40} className="text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600">Our expert will contact you shortly.</p>
                      </motion.div>
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
                            className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-gray-300 focus:ring-0 transition-all text-gray-900 placeholder-gray-400 bg-gray-50/50"
                          />
                          {formData.name.length > 2 && (
                            <CheckCircle size={20} className="absolute right-4 top-4 text-emerald-500" />
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
                            className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-gray-300 focus:ring-0 transition-all text-gray-900 placeholder-gray-400 bg-gray-50/50"
                          />
                          {formData.email.includes('@') && formData.email.includes('.') && (
                            <CheckCircle size={20} className="absolute right-4 top-4 text-emerald-500" />
                          )}
                        </div>

                        {/* Phone Field with +91 */}
                        <div className="relative flex">
                          <span className="inline-flex items-center px-4 rounded-l-xl border-2 border-r-0 border-gray-100 bg-gray-100 text-gray-600 font-medium">
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
                            className="w-full px-4 py-4 rounded-r-xl border-2 border-l-0 border-gray-100 focus:border-gray-300 focus:ring-0 transition-all text-gray-900 placeholder-gray-400 bg-gray-50/50"
                          />
                          {formData.phone.length === 10 && (
                            <CheckCircle size={20} className="absolute right-4 top-4 text-emerald-500" />
                          )}
                        </div>

                        {/* Trust Message */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Shield size={16} className="text-emerald-500" />
                          <span>We only send important messages — no spam</span>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all flex items-center justify-between px-6 disabled:opacity-70 shadow-lg"
                        >
                          <span className="text-lg">{isSubmitting ? 'Processing...' : 'Get Free Consultation'}</span>
                          {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <ArrowRight size={22} />
                          )}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>

                  {/* Services */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-3">Government Approved Consultants for:</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {['BIS', 'WPC', 'TEC', 'FSSAI', 'MoEFCC', 'GST'].map((cert) => (
                        <span key={cert} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100">
                          {cert}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400">+15 More</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Why Choose Section */}
          <div className="lg:hidden mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose <span className="text-blue-600">JR Compliance?</span></h3>
            <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
              {[
                { num: '1', title: 'Speed', desc: 'Quotes in seconds!' },
                { num: '2', title: 'Service', desc: 'Dedicated support!' },
                { num: '3', title: 'Savings', desc: 'Best prices!' },
              ].map((item) => (
                <div key={item.num} className="relative flex-shrink-0 w-40">
                  <div className="absolute -top-2 -left-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-xs font-bold flex items-center justify-center shadow">
                    {item.num}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 pt-5">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10,000+', label: 'Happy Clients', icon: Users },
              { value: '99.9%', label: 'Success Rate', icon: Award },
              { value: '10+', label: 'Years Experience', icon: Clock },
              { value: '500+', label: 'Expert Team', icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <stat.icon size={24} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
