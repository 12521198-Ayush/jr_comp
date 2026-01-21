'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Shield, 
  Award, 
  Users, 
  Star,
  Clock,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Zap,
  Lock,
  FileCheck,
  Sparkles
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
}: ServicePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqPage, setFaqPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentStep = formData.phone.length === 10 ? 3 : formData.email.includes('@') ? 2 : formData.name.length > 2 ? 1 : 0;
  const faqsPerPage = 5;
  const totalFaqPages = Math.ceil(faqs.length / faqsPerPage);
  const currentFaqs = faqs.slice(faqPage * faqsPerPage, (faqPage + 1) * faqsPerPage);

  const colorClasses: Record<string, { bg: string; text: string; gradient: string; light: string; border: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-400', gradient: 'from-blue-500 to-cyan-500', light: 'bg-blue-500/10', border: 'border-blue-500/20' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-400', gradient: 'from-cyan-500 to-teal-500', light: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-400', gradient: 'from-indigo-500 to-purple-500', light: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', gradient: 'from-emerald-500 to-teal-500', light: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-400', gradient: 'from-amber-500 to-orange-500', light: 'bg-amber-500/10', border: 'border-amber-500/20' },
    orange: { bg: 'bg-orange-600', text: 'text-orange-400', gradient: 'from-orange-500 to-red-500', light: 'bg-orange-500/10', border: 'border-orange-500/20' },
    green: { bg: 'bg-green-600', text: 'text-green-400', gradient: 'from-green-500 to-emerald-500', light: 'bg-green-500/10', border: 'border-green-500/20' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-400', gradient: 'from-purple-500 to-pink-500', light: 'bg-purple-500/10', border: 'border-purple-500/20' },
    violet: { bg: 'bg-violet-600', text: 'text-violet-400', gradient: 'from-violet-500 to-purple-500', light: 'bg-violet-500/10', border: 'border-violet-500/20' },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919266450125"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* Hero Section - Dark Theme matching homepage */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-white font-medium text-sm">{title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div>
              {/* Service Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                  <Icon size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{subtitle}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Get{' '}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                  {title}
                </span>
                {' '}Today
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Stats Row */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all">
                    <div className={`text-3xl sm:text-4xl font-bold ${colors.text} flex items-center justify-center gap-2`}>
                      {stat.value}
                      {stat.label.toLowerCase().includes('rating') && (
                        <Star size={22} className="text-amber-400 fill-amber-400" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div> */}

              {/* Why Choose Section */}
              <div className="hidden lg:block">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Why Choose <span className={colors.text}>JR Compliance?</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Zap, title: 'Speed', desc: 'Quotes in seconds, certification in days!' },
                    { icon: Users, title: 'Service', desc: 'Dedicated support, quick replies!' },
                    { icon: Award, title: 'Quality', desc: 'Expert guidance, 100% compliance!' },
                  ].map((item, index) => (
                    <div key={item.title} className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <item.icon size={20} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="relative">
              {/* Secure Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg shadow-emerald-500/30">
                  <Lock size={14} />
                  <span>Secure Process</span>
                </div>
              </div>

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
                      className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-300`}
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Form Title */}
                <div className="px-6 pt-5">
                  <h3 className="text-xl font-bold text-white">Get Quotes in a Few Steps</h3>
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
                        className={`w-full py-4 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white rounded-xl font-semibold transition-all flex items-center justify-between px-6 disabled:opacity-70 shadow-lg`}
                      >
                        <span className="text-lg">{isSubmitting ? 'Processing...' : 'Get Quotes'}</span>
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

          {/* Mobile Why Choose Section */}
          <div className="lg:hidden mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Why Choose <span className={colors.text}>JR Compliance?</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Zap, title: 'Speed', desc: 'Quick quotes!' },
                { icon: Users, title: 'Service', desc: 'Best support!' },
                { icon: Award, title: 'Quality', desc: 'Expert team!' },
              ].map((item) => (
                <div key={item.title} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mx-auto mb-2`}>
                    <item.icon size={16} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-xs mb-0.5">{item.title}</h4>
                  <p className="text-[10px] text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark Theme */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Sparkles size={16} className={colors.text} />
              <span className="text-sm font-medium text-gray-300">Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose <span className={colors.text}>{title}?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <CheckCircle size={24} className="text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Theme */}
      <section className="py-16 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <FileCheck size={16} className={colors.text} />
              <span className="text-sm font-medium text-gray-300">Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple <span className={colors.text}>Step-by-Step</span> Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section - Dark Theme */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Required <span className={colors.text}>Documents</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
              >
                <CheckCircle size={20} className={colors.text} />
                <span className="text-white">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Dark Theme */}
      <section className="py-16 lg:py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className={colors.text}>Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Pagination */}
          {totalFaqPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setFaqPage(Math.max(0, faqPage - 1))}
                disabled={faqPage === 0}
                className="p-2 rounded-lg bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-gray-400 text-sm">
                Page {faqPage + 1} of {totalFaqPages}
              </span>
              <button
                onClick={() => setFaqPage(Math.min(totalFaqPages - 1, faqPage + 1))}
                disabled={faqPage === totalFaqPages - 1}
                className="p-2 rounded-lg bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get <span className={colors.text}>{title}?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get expert assistance from our team. We&apos;ll guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:1800121410410"
              className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${colors.gradient} text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg`}
            >
              <Phone size={20} />
              <span>Call: 1800-121-410-410</span>
            </a>
            <a
              href="https://wa.me/919266450125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/10 transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-3 px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
          {/* Left - Pricing Info */}
          <div className="hidden sm:block">
            <p className="text-sm sm:text-base text-white font-semibold">
              Get <span className={colors.text}>Expert Assistance</span>,
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">Starting At <span className="text-white font-bold">₹18,000*</span>/year</p>
          </div>

          {/* Center - Service Info (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
              <Icon size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-gray-400 text-xs">{subtitle}</p>
            </div>
          </div>

          {/* Mobile - Simple text */}
          <div className="sm:hidden">
            <p className="text-white font-semibold text-sm">{title}</p>
            <p className="text-gray-400 text-xs">Starting At ₹18,000*/year</p>
          </div>

          {/* Right - CTA Button */}
          <a
            href="tel:1800121410410"
            className="flex items-center gap-2 px-5 sm:px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all"
          >
            <span className="text-sm sm:text-base">Get Quotes</span>
            <Sparkles size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
