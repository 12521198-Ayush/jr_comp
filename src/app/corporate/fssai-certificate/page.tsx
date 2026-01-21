'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Star, Clock,
  BadgeCheck, Building2, ChevronDown, MessageSquare, Headphones, Zap, Utensils, AlertTriangle, Target, TrendingUp, RefreshCw
} from 'lucide-react';

export default function FSSAIModificationPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', modificationType: '' });
  const [formStep, setFormStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'name' && value.length > 2 && formStep === 0) setFormStep(1);
    else if (name === 'email' && value.includes('@') && formStep === 1) setFormStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const stats = [
    { value: '8000+', label: 'FSSAI Services' },
    { value: '4.9', label: 'Google Rating' },
    { value: '12+', label: 'Years Experience' },
    { value: '99%', label: 'Success Rate' },
  ];

  const trustedBy = ['Haldirams', 'MTR', 'ITC', 'Britannia', 'Parle'];

  const benefits = [
    { title: 'Legal Validity', description: 'Updating changes promptly keeps your FSSAI license valid and prevents penalties or cancellation.', icon: Shield },
    { title: 'Smooth Operations', description: 'An updated license helps avoid operational interruptions during inspections or renewals.', icon: TrendingUp },
    { title: 'Business Credibility', description: 'Accurate license details boost consumer trust and demonstrate transparency.', icon: Award },
    { title: 'Easy Renewals', description: 'A modified and up-to-date license simplifies future regulatory procedures.', icon: Target },
  ];

  const challenges = [
    { title: 'Complex Documentation', description: 'Understanding which documents are required for different modification types.', icon: AlertTriangle },
    { title: 'Major vs Minor Changes', description: 'Determining if your change qualifies as major or minor modification.', icon: FileText },
    { title: 'Portal Navigation', description: 'Navigating the FSSAI online portal can be confusing without guidance.', icon: Clock },
    { title: 'Authority Coordination', description: 'Responding to queries from FSSAI authorities during scrutiny process.', icon: RefreshCw },
  ];

  const process = [
    { step: 'Assess Modification Type', description: 'We evaluate whether the change qualifies as major or minor modification under FSSAI guidelines.' },
    { step: 'Document Preparation', description: 'All supporting documents for the proposed change are collected, verified, and organized.' },
    { step: 'Application Filing', description: 'We file the online application with the FSSAI portal along with required documents.' },
    { step: 'Authority Liaison', description: 'We coordinate with FSSAI department if any queries or clarifications are raised.' },
    { step: 'Status Tracking', description: 'Our team continuously monitors the application status and updates you on progress.' },
    { step: 'License Issuance', description: 'Once approved, the modified FSSAI license reflecting updated details is issued.' },
  ];

  const documents = [
    'Existing FSSAI License Copy',
    'Supporting Documents for Changes',
    'Board Resolution/Authorization',
    'Identity & Address Proof',
    'New Premises Documents',
    'Updated Product List',
  ];

  const whoNeedsIt = [
    { title: 'Food Manufacturers', description: 'Businesses involved in manufacturing or processing food items.' },
    { title: 'Restaurants & Caterers', description: 'Eateries, cloud kitchens, and food service providers.' },
    { title: 'Importers & Exporters', description: 'Businesses importing or exporting food products.' },
    { title: 'Dairy & Meat Units', description: 'Units handling milk, dairy, meat, or poultry products.' },
  ];

  const eligibility = [
    'Existing FSSAI license or registration holders',
    'Businesses with changes in name, address, or ownership',
    'Companies adding new product categories',
    'Businesses with changes in management or directors',
  ];

  const faqs = [
    { question: 'What is FSSAI modification?', answer: 'FSSAI modification is the process of updating any changes in business details like name, address, products, or ownership in your FSSAI license to maintain compliance.' },
    { question: 'When should I apply for FSSAI modification?', answer: 'You must apply for modification immediately after any change occurs. Delaying it can result in penalties, inspections, or even cancellation of your license.' },
    { question: 'What is the difference between major and minor modification?', answer: 'Major modifications involve changes like business name, address, or ownership, while minor modifications include adding new products or small detail changes.' },
    { question: 'How long does FSSAI modification take?', answer: 'FSSAI modification typically takes 15-30 days depending on the type of modification and completeness of documentation.' },
    { question: 'Can I continue business without modifying the license?', answer: 'No, continuing business with incorrect or outdated license information is a violation and can lead to strict actions from food safety authorities.' },
  ];

  const modificationTypes = [
    'Change of Business Address',
    'Change of Business Name',
    'Change of Ownership/Directors',
    'Addition of New Products',
    'Change in Business Activity',
    'Other Modification',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
        </div>

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-[15%] w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl opacity-10 blur-sm" />
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-[10%] w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-10 blur-sm" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /><span>HOME</span>
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900 font-medium text-sm uppercase">FSSAI Modification</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="pt-4">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-200">
                  <Utensils size={28} className="text-white" />
                </div>
                <div><p className="text-xs font-semibold text-green-600 uppercase tracking-wider">Food Safety Compliance</p></div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">FSSAI</span>{' '}Modification
              </h1>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
                <p className="text-2xl md:text-3xl font-light text-gray-700">Update Your License{' '}<span className="font-semibold text-gray-900">Hassle-Free</span></p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 px-5 py-3 bg-green-50 rounded-xl border border-green-200 mb-8">
                <Zap size={20} className="text-green-600" /><span className="text-gray-700 font-medium">Quick Processing. Hassle-free Documentation.</span>
              </motion.div>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                FSSAI modification is essential when your business details change. Whether it&apos;s address, ownership, products, or business name - we help you update your license quickly and compliantly.
              </p>

              <div className="mb-10">
                <p className="text-sm text-gray-500 font-medium mb-4">Trusted by Leading Brands</p>
                <div className="flex flex-wrap items-center gap-6">
                  {trustedBy.map((brand, index) => (
                    <motion.div key={brand} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} className="text-gray-400 font-bold text-lg tracking-wide hover:text-gray-600 transition-colors">{brand}</motion.div>
                  ))}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-600">{stat.value}{stat.label.includes('Rating') && <Star size={16} className="inline ml-1 text-amber-400 fill-amber-400" />}</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:sticky lg:top-24">
              {/* Trust Badges */}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-3 mb-4 px-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                  <Shield size={14} className="text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-700">100% Secure</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
                  <Award size={14} className="text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700">FSSAI Expert</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                  <Star size={14} className="text-amber-600 fill-amber-400" />
                  <span className="text-xs font-semibold text-amber-700">4.9 Rated</span>
                </div>
              </motion.div>

              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2"><span className="text-sm text-green-200">Step</span><span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-sm font-semibold">{Math.min(formStep + 1, 3)}/3</span></div>
                    <div className="flex items-center gap-2 text-white text-sm font-medium"><BadgeCheck size={16} /><span>Free Consultation</span></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get FSSAI Modification Quote</h3>
                  <p className="text-green-200 text-sm mt-1">Expert will call you within 30 minutes</p>
                </div>

                <div className="px-8 pt-4">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-green-600 to-emerald-600" initial={{ width: '0%' }} animate={{ width: `${((formStep + 1) / 3) * 100}%` }} transition={{ duration: 0.3 }} />
                  </div>
                </div>

                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} className="text-emerald-600" /></div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-6">Our FSSAI expert will contact you within 30 minutes.</p>
                        <div className="flex items-center justify-center gap-2 text-green-600"><Phone size={18} /><span className="font-semibold">1800 121 410 410</span></div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Full Name<span className="text-red-500">*</span></label>
                          <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all text-gray-900 placeholder-gray-400" />
                          {formData.name.length > 2 && <CheckCircle size={20} className="absolute right-4 top-11 text-emerald-500" />}
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Email Address<span className="text-red-500">*</span></label>
                          <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all text-gray-900 placeholder-gray-400" />
                          {formData.email.includes('@') && formData.email.includes('.') && <CheckCircle size={20} className="absolute right-4 top-11 text-emerald-500" />}
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Mobile Number<span className="text-red-500">*</span></label>
                          <div className="flex">
                            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+91</span>
                            <input type="tel" name="phone" placeholder="Enter your mobile number" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" className="w-full px-4 py-4 rounded-r-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all text-gray-900 placeholder-gray-400" />
                          </div>
                          {formData.phone.length === 10 && <CheckCircle size={20} className="absolute right-4 top-11 text-emerald-500" />}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Modification Type<span className="text-red-500">*</span></label>
                          <select name="modificationType" value={formData.modificationType} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all text-gray-900 bg-white">
                            <option value="">Select modification type</option>
                            {modificationTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <input type="text" name="company" placeholder="Enter your company name" value={formData.company} onChange={handleChange} className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all text-gray-900 placeholder-gray-400" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100">
                          <Shield size={16} className="text-emerald-500" /><span>100% Confidential. No spam.</span>
                        </div>

                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                          {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Processing...</>) : (<>Get Free Quote<ArrowRight size={20} /></>)}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>

                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Shield size={14} className="text-emerald-500" /><span>100% Secure</span></div>
                    <div className="flex items-center gap-1"><Clock size={14} className="text-green-500" /><span>30min Response</span></div>
                    <div className="flex items-center gap-1"><Headphones size={14} className="text-teal-500" /><span>Expert Support</span></div>
                  </div>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6 flex items-center justify-center gap-4">
                <span className="text-gray-500 text-sm">Need help now?</span>
                <a href="tel:+911800121410410" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"><Phone size={16} />1800 121 410 410</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Modify Your FSSAI License</span>?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-green-300 rounded-full text-sm font-semibold mb-4 border border-white/10">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6 Simple Steps to FSSAI Modification</h2>
            <p className="text-green-200 max-w-2xl mx-auto">Our streamlined process ensures quick and hassle-free modification</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white font-bold text-lg mb-4 shadow-lg">{index + 1}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.step}</h4>
                  <p className="text-green-200 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs It & Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">Who Needs It</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Businesses That Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">FSSAI Modification</span></h2>
              <div className="grid grid-cols-2 gap-4">
                {whoNeedsIt.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3"><Users size={20} className="text-green-600" /></div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-4">Checklist</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Documents <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Required</span></h2>
              <div className="grid grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <FileText size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className={`w-full text-left p-6 rounded-2xl border transition-all ${openFaq === index ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white border-transparent shadow-lg' : 'bg-white border-gray-200 hover:border-green-200 hover:shadow-md'}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`font-semibold ${openFaq === index ? 'text-white' : 'text-gray-900'}`}>{faq.question}</span>
                    <ChevronDown size={20} className={`flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-white' : 'text-gray-400'}`} />
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <p className="mt-4 text-white/90 leading-relaxed">{faq.answer}</p>
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
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" /></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Modify Your FSSAI License?</h2>
            <p className="text-green-200 mb-8 max-w-2xl mx-auto text-lg">Connect with our FSSAI experts today for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all">
                  <MessageSquare size={20} />Get Free Consultation<ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a href="tel:+911800121410410" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all">
                <Phone size={20} />1800 121 410 410
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-white/80"><Award size={20} /><span>FSSAI Experts</span></div>
              <div className="flex items-center gap-2 text-white/80"><Users size={20} /><span>8000+ Happy Clients</span></div>
              <div className="flex items-center gap-2 text-white/80"><Building2 size={20} /><span>12+ Years Experience</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
