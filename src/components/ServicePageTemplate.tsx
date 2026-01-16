'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  FileText, 
  ArrowLeft, 
  Shield, 
  Award, 
  Users, 
  Star,
  Clock,
  BadgeCheck,
  Building2,
  ChevronDown,
  MessageSquare,
  Headphones,
  Zap
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  benefits: string[];
  process: { step: string; description: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
  stats?: { value: string; label: string }[];
  trustedBy?: string[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  benefits,
  process,
  documents,
  faqs,
  stats = [
    { value: '5000+', label: 'Certifications Done' },
    { value: '4.9', label: 'Google Rating' },
    { value: '10+', label: 'Years Experience' },
    { value: '98%', label: 'Success Rate' },
  ],
  trustedBy = ['Tata', 'Mahindra', 'Godrej', 'Wipro', 'Infosys'],
}: ServicePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formStep, setFormStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const colorClasses: Record<string, { bg: string; text: string; gradient: string; light: string; border: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-800', light: 'bg-blue-50', border: 'border-blue-200' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', gradient: 'from-cyan-600 to-cyan-800', light: 'bg-cyan-50', border: 'border-cyan-200' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', gradient: 'from-indigo-600 to-violet-600', light: 'bg-indigo-50', border: 'border-indigo-200' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-800', light: 'bg-emerald-50', border: 'border-emerald-200' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-600', gradient: 'from-amber-500 to-orange-600', light: 'bg-amber-50', border: 'border-amber-200' },
    orange: { bg: 'bg-orange-600', text: 'text-orange-600', gradient: 'from-orange-500 to-red-600', light: 'bg-orange-50', border: 'border-orange-200' },
    green: { bg: 'bg-green-600', text: 'text-green-600', gradient: 'from-green-600 to-green-800', light: 'bg-green-50', border: 'border-green-200' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-800', light: 'bg-purple-50', border: 'border-purple-200' },
    violet: { bg: 'bg-violet-600', text: 'text-violet-600', gradient: 'from-violet-600 to-violet-800', light: 'bg-violet-50', border: 'border-violet-200' },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-advance form step based on filled fields
    if (name === 'name' && value.length > 2 && formStep === 0) {
      setFormStep(1);
    } else if (name === 'email' && value.includes('@') && formStep === 1) {
      setFormStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Hero Section - Modern Two Column Layout */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.05),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-10 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-10 blur-sm"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} />
              <span>HOME</span>
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900 font-medium text-sm uppercase">{title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-8"
            >
              {/* Service Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{subtitle}</p>
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === 0 ? (
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>{word} </span>
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                ))}
              </h1>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-2xl md:text-3xl font-light text-gray-700">
                  Get Expert Assistance,{' '}
                  <span className="font-semibold text-gray-900">Starting at Competitive Rates</span>
                </p>
              </motion.div>

              {/* Feature Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-3 px-5 py-3 ${colors.light} rounded-xl border ${colors.border} mb-8`}
              >
                <Zap size={20} className={colors.text} />
                <span className="text-gray-700 font-medium">Quick Processing. Hassle-free Documentation.</span>
              </motion.div>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Trust Indicators */}
              <div className="mb-10">
                <p className="text-sm text-gray-500 font-medium mb-4">Trusted by Leading Brands</p>
                <div className="flex flex-wrap items-center gap-6">
                  {trustedBy.map((brand, index) => (
                    <motion.div
                      key={brand}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-gray-400 font-bold text-lg tracking-wide hover:text-gray-600 transition-colors"
                    >
                      {brand}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${colors.text}`}>
                      {stat.value}
                      {stat.label.includes('Rating') && <Star size={16} className="inline ml-1 text-amber-400 fill-amber-400" />}
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Modern Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-4 px-4"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                  <Shield size={14} className="text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-700">100% Secure</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
                  <Award size={14} className="text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                  <Star size={14} className="text-amber-600 fill-amber-400" />
                  <span className="text-xs font-semibold text-amber-700">4.9 Rated</span>
                </div>
              </motion.div>

              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Step</span>
                      <span className={`px-2 py-0.5 ${colors.light} ${colors.text} rounded-full text-sm font-semibold`}>
                        {Math.min(formStep + 1, 3)}/3
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                      <BadgeCheck size={16} />
                      <span>Free Consultation</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Get Expert Guidance</h3>
                  <p className="text-gray-500 text-sm mt-1">Fill the form and our experts will contact you within 24 hours</p>
                </div>

                {/* Progress Bar */}
                <div className="px-8 pt-4">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${colors.gradient}`}
                      initial={{ width: '0%' }}
                      animate={{ width: `${((formStep + 1) / 3) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle size={40} className="text-emerald-600" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-6">
                          Our expert will contact you within 24 hours to discuss your requirements.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-emerald-600">
                          <Phone size={18} />
                          <span className="font-semibold">1800 121 410 410</span>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Full Name<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400"
                          />
                          {formData.name.length > 2 && (
                            <CheckCircle size={20} className="absolute right-4 top-11 text-emerald-500" />
                          )}
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Email Address<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400"
                          />
                          {formData.email.includes('@') && formData.email.includes('.') && (
                            <CheckCircle size={20} className="absolute right-4 top-11 text-emerald-500" />
                          )}
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Mobile Number<span className="text-red-500">*</span>
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                              +91
                            </span>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Enter your mobile number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              pattern="[0-9]{10}"
                              className="w-full px-4 py-4 rounded-r-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400"
                            />
                          </div>
                          {formData.phone.length === 10 && (
                            <CheckCircle size={20} className="absolute right-4 top-11 text-emerald-500" />
                          )}
                        </div>

                        {/* Company Field (Optional) */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400"
                          />
                        </div>

                        {/* Trust Badge */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-3 rounded-xl">
                          <Shield size={16} className="text-emerald-500" />
                          <span>We only send important messages — no spam</span>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Get Free Consultation
                              <ArrowRight size={20} />
                            </>
                          )}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>

                {/* Form Footer - Trust Elements */}
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Shield size={14} className="text-emerald-500" />
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-blue-500" />
                      <span>24hr Response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Headphones size={14} className="text-purple-500" />
                      <span>Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex items-center justify-center gap-4"
              >
                <span className="text-gray-500 text-sm">Need help now?</span>
                <a
                  href="tel:+911800121410410"
                  className={`inline-flex items-center gap-2 ${colors.text} font-semibold hover:underline`}
                >
                  <Phone size={16} />
                  1800 121 410 410
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`inline-block px-4 py-1.5 ${colors.light} ${colors.text} rounded-full text-sm font-semibold mb-4`}>
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>{title}</span> Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.light} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <CheckCircle size={20} className={colors.text} />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-white/10">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Steps to Get Your {title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We&apos;ve streamlined the entire process to make it quick and hassle-free for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} text-white font-bold text-lg mb-4 shadow-lg`}>
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.step}</h4>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-slate-600" size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`inline-block px-4 py-1.5 ${colors.light} ${colors.text} rounded-full text-sm font-semibold mb-4`}>
              Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep these documents ready for a smooth and quick application process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className={`w-8 h-8 rounded-lg ${colors.light} flex items-center justify-center flex-shrink-0`}>
                    <FileText size={16} className={colors.text} />
                  </div>
                  <span className="text-gray-700 font-medium">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className={`inline-block px-4 py-1.5 ${colors.light} ${colors.text} rounded-full text-sm font-semibold mb-4`}>
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about {title.toLowerCase()}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    openFaq === index 
                      ? `bg-gradient-to-r ${colors.gradient} text-white border-transparent shadow-lg` 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`font-semibold ${openFaq === index ? 'text-white' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180 text-white' : 'text-gray-400'
                      }`} 
                    />
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-white/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your {title}?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Connect with our experts today for a free consultation and get your certification process started immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <MessageSquare size={20} />
                  Get Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+911800121410410"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <Phone size={20} />
                1800 121 410 410
              </motion.a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-white/80">
                <Award size={20} />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users size={20} />
                <span>5000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Building2 size={20} />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
