'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Headphones,
  Zap,
  Lock,
  MessageCircle
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
  const [faqPage, setFaqPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate form step dynamically
  const currentStep = formData.phone.length === 10 ? 3 : formData.email.includes('@') ? 2 : formData.name.length > 2 ? 1 : 0;
  const faqsPerPage = 5;
  const totalFaqPages = Math.ceil(faqs.length / faqsPerPage);
  const currentFaqs = faqs.slice(faqPage * faqsPerPage, (faqPage + 1) * faqsPerPage);

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
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919266450125"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 lg:bottom-28 right-4 lg:right-6 z-50 w-12 h-12 lg:w-14 lg:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <MessageCircle size={24} className="text-white lg:hidden" />
        <MessageCircle size={28} className="text-white hidden lg:block" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
          Chat With Us
        </span>
      </a>

      {/* Hero Section - BimaKavach Style */}
      <section className="bg-white pt-4 pb-8 lg:pt-6 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700 font-medium text-sm">{title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div>
              {/* Trusted By Section - Top */}
              {/* <div className="mb-6">
                <p className="text-sm text-gray-400 font-medium mb-3 tracking-wide">Trusted by</p>
                <div className="flex flex-wrap items-center gap-5 overflow-x-auto scrollbar-hide pb-2">
                  {trustedBy.map((brand) => (
                    <span key={brand} className="text-gray-300 font-bold text-base lg:text-lg tracking-wider uppercase whitespace-nowrap hover:text-gray-400 transition-colors">
                      {brand}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Service Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
              </div>

              {/* Main Heading - BimaKavach Style with Italic */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 mb-6 leading-tight">
                <span className="italic">Get </span>
                <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                  {title}
                </span>
                <span className="italic"> Today</span>
              </h1>

              {/* Stats Row - BimaKavach Style */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 py-4 mb-6 border-y border-gray-100">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className={`text-xl lg:text-2xl font-bold ${colors.text}`}>
                      {stat.value}
                    </span>
                    {stat.label.toLowerCase().includes('rating') && (
                      <Star size={16} className="text-amber-400 fill-amber-400" />
                    )}
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    {index < stats.length - 1 && <span className="text-gray-200 ml-3 hidden sm:inline">|</span>}
                  </div>
                ))}
              </div>

              {/* Why Choose Section - Speed, Service, Savings */}
              <div className="hidden lg:block">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose <span className={colors.text}>JR Compliance?</span></h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: '1', title: 'Speed', desc: 'Quotes in seconds, certification in days!' },
                    { num: '2', title: 'Service', desc: 'Dedicated support, quick replies!' },
                    { num: '3', title: 'Quality', desc: 'Expert guidance, 100% compliance!' },
                  ].map((item) => (
                    <div key={item.num} className="relative">
                      <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br ${colors.gradient} text-white text-xs font-bold flex items-center justify-center shadow`}>
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
            </div>

            {/* Right Column - Form Card BimaKavach Style */}
            <div className="relative">
              {/* Paperless Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg">
                  <Lock size={14} />
                  <span>Secure Process</span>
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
                      <span className="text-sm font-medium">Free Consultation</span>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${colors.gradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentStep / 3) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Form Title */}
                <div className="px-6 pt-5">
                  <h3 className="text-xl font-bold text-gray-900">Get Quotes in a Few Steps</h3>
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
                        <p className="text-gray-600 mb-4">Our expert will contact you shortly.</p>
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

                        {/* Submit Button - Dark BimaKavach Style */}
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all flex items-center justify-between px-6 disabled:opacity-70 shadow-lg"
                        >
                          <span className="text-lg">{isSubmitting ? 'Processing...' : 'Get Quotes'}</span>
                          {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <ArrowRight size={22} />
                          )}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>

                  {/* Certification Partners */}
                  {/* <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-3">Government Approved Consultants for:</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {['BIS', 'WPC', 'TEC', 'FSSAI', 'MoEFCC'].map((cert) => (
                        <span key={cert} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-100">
                          {cert}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400">+10 More</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Why Choose Section */}
          <div className="lg:hidden mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose <span className={colors.text}>JR Compliance?</span></h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '1', title: 'Speed', desc: 'Quick quotes!' },
                { num: '2', title: 'Service', desc: 'Best support!' },
                { num: '3', title: 'Quality', desc: 'Expert team!' },
              ].map((item) => (
                <div key={item.num} className="relative">
                  <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${colors.gradient} text-white text-[10px] font-bold flex items-center justify-center shadow z-10`}>
                    {item.num}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 pt-4 text-center h-full">
                    <h4 className="font-semibold text-gray-900 text-xs mb-0.5">{item.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - BimaKavach "Why Choose" Style */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-xl`}>
                    <Icon size={48} className="text-white" />
                  </div>
                  <p className="text-gray-400 font-medium">JR Compliance</p>
                  <p className="text-gray-300 text-sm">Your Trusted Partner</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Why<span className={colors.text}>Choose</span> JR Compliance?
                </h2>
              </motion.div>

              <div className="mt-8 space-y-4">
                {[
                  { num: 1, title: 'Speed', desc: 'Quotes in seconds, certification in days! Our streamlined process ensures quick turnaround.' },
                  { num: 2, title: 'Service', desc: 'Dedicated support team, quick replies! We\'re available whenever you need assistance.' },
                  { num: 3, title: 'Quality', desc: 'Expert team with industry knowledge! 100% compliance guaranteed with thorough documentation.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} text-white font-bold flex items-center justify-center flex-shrink-0 shadow`}>
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>{title}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle size={14} className="text-white" />
                </div>
                <span className="text-gray-700 text-sm lg:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Clean Timeline */}
      <section className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Understand Your <span className="italic text-blue-400">{title}</span> Before Applying
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple steps to get your certification done quickly
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} text-white font-bold text-lg flex items-center justify-center shadow-lg`}>
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{step.step}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section - Clean Checklist */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Documents <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>Required</span>
            </h2>
            <p className="text-gray-500">
              Keep these documents ready for a smooth application process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-3">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}>
                    <FileText size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm lg:text-base">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - BimaKavach Accordion Style with Pagination */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Common Questions Answered
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {currentFaqs.map((faq, index) => {
                const actualIndex = faqPage * faqsPerPage + index;
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === actualIndex ? null : actualIndex)}
                      className={`w-full text-left px-6 py-5 rounded-xl border transition-all duration-200 ${
                        openFaq === actualIndex 
                          ? 'bg-white border-gray-200 shadow-md' 
                          : 'bg-gray-50 border-gray-100 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className={`font-semibold text-base lg:text-lg ${openFaq === actualIndex ? 'text-gray-900' : 'text-gray-800'}`}>
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                          openFaq === actualIndex 
                            ? `bg-gradient-to-br ${colors.gradient} text-white` 
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          <ChevronDown 
                            size={18} 
                            className={`transition-transform duration-200 ${
                              openFaq === actualIndex ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </div>
                      <AnimatePresence>
                        {openFaq === actualIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-gray-600 leading-relaxed text-sm lg:text-base pr-12">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination - BimaKavach Style */}
            {totalFaqPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setFaqPage(Math.max(0, faqPage - 1))}
                  disabled={faqPage === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    faqPage === 0 
                      ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-gray-600 font-medium">
                  Page {faqPage + 1} of {totalFaqPages}
                </span>
                <button
                  onClick={() => setFaqPage(Math.min(totalFaqPages - 1, faqPage + 1))}
                  disabled={faqPage === totalFaqPages - 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    faqPage === totalFaqPages - 1 
                      ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* WhatsApp CTA */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 mb-3">Have questions or need to speak to an expert?</p>
              <a
                href="https://wa.me/919266450125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - BimaKavach "Ready To Buy" Style */}
      <section className={`py-16 lg:py-20 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
              Ready To Get<br className="sm:hidden" /> <span className="italic">{title}?</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Join 5,000+ businesses & get your certification done today.
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
                { value: '5000+', label: 'Certifications Done' },
                { value: '25+', label: 'Services' },
                { value: '500+', label: 'Businesses Served' },
                { value: '₹50 Cr.', label: 'Saved for Clients' },
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

      {/* Fixed Bottom Get Quote Bar - BimaKavach Style */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center py-3 lg:py-4 gap-4 lg:gap-8 flex-wrap lg:flex-nowrap justify-between">
            {/* Left - Pricing Text */}
            <div className="hidden sm:block flex-shrink-0">
              <p className="text-gray-900 font-bold text-sm lg:text-base">
                <span className="italic">Get </span>
                <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>{title}</span>
                <span className="italic">,</span>
              </p>
              <p className="text-gray-900 font-bold text-sm lg:text-base">
                <span className="italic">Starting At </span>
                <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>₹18,000*</span>
                <span className="italic">/year</span>
              </p>
            </div>

            {/* Center - Service Info (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 px-6 border-l border-gray-200 flex-shrink-0">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{subtitle}</p>
              </div>
            </div>

            {/* Mobile - Service Title */}
            <div className="sm:hidden flex items-center gap-3 flex-shrink-0">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow`}>
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{title}</p>
                <p className="text-xs text-gray-500">Quick & Easy</p>
              </div>
            </div>

            {/* Right - CTA Button */}
            <div className="flex-1 flex justify-end min-w-[160px]">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-full font-semibold text-sm lg:text-base transition-all shadow-lg hover:shadow-xl"
              >
                <span>Get Quotes</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer for Fixed Bar */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
