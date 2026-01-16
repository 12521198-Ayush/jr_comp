'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play, Shield, Award, Users, Clock, Search, X } from 'lucide-react';

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

  const stats = [
    { number: '10,000+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Success Rate', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Expert Team', icon: Shield },
  ];

  const features = [
    { title: 'Expert Guidance', desc: 'Professionals with 5+ years experience' },
    { title: 'Quick Processing', desc: 'Fast-track your applications' },
    { title: 'Complete Support', desc: 'End-to-end assistance' },
    { title: 'Affordable Pricing', desc: 'Competitive rates guaranteed' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern" />
      
      {/* Gradient Orbs - Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600">✨</span>
              <span className="text-sm font-semibold text-blue-700">India&apos;s Trusted Compliance Partner</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-slate-900">Simplify Your</span>
              <br />
              <span className="gradient-text">Business Compliance</span>
              <br />
              <span className="text-slate-900">Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              From company registration to technical certifications, we handle all your 
              regulatory requirements with expertise and dedication. Let us navigate the 
              complexities while you focus on growing your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              
              <button className="inline-flex items-center gap-3 px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Play size={16} className="text-white ml-0.5" fill="white" />
                </span>
                Watch How It Works
              </button>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              ref={searchRef}
              className="relative mb-8"
            >
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
                  placeholder="Search services... (e.g., BIS, FSSAI, Trademark)"
                  className="w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-sm"
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
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-h-80 overflow-y-auto"
                  >
                    {filteredServices.map((service, index) => (
                      <motion.button
                        key={service.url}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => handleSelectService(service.url)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full px-4 py-3 flex items-center justify-between text-left transition-all duration-150 ${
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
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.category} Service</div>
                          </div>
                        </div>
                        <ArrowRight size={16} className={`transition-transform ${
                          selectedIndex === index ? 'translate-x-1' : ''
                        }`} />
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {showSuggestions && searchQuery.trim() && filteredServices.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center"
                  >
                    <div className="text-gray-400 mb-2">No services found for &quot;{searchQuery}&quot;</div>
                    <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                      Contact us for custom requirements →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {['Company Registration', 'GST & Compliance', 'BIS Certification'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
              {/* Award Badge */}
              <div className="absolute -top-5 right-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                <Award size={28} className="text-white transform -rotate-6" />
              </div>
              
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9</span>
                <span className="text-sm text-gray-500">Google Reviews</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose JR Compliance?</h3>
              
              <div className="space-y-4">
                {features.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats inside card */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 text-white">
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-blue-100 text-sm">Satisfied Clients Across India</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md shadow-gray-100 border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <stat.icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
