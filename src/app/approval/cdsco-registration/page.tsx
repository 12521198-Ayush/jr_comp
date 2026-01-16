'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Star, Clock,
  BadgeCheck, Building2, ChevronDown, MessageSquare, Headphones, Zap, Heart, AlertTriangle, Target, TrendingUp
} from 'lucide-react';

export default function CDSCORegistrationPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', productType: '' });
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
    { value: '1800+', label: 'CDSCO Registrations' },
    { value: '4.9', label: 'Google Rating' },
    { value: '12+', label: 'Years Experience' },
    { value: '97%', label: 'Success Rate' },
  ];

  const trustedBy = ['Abbott', 'Medtronic', 'J&J', 'Philips', 'Siemens'];

  const benefits = [
    { title: 'Legal Market Access', description: 'CDSCO registration is mandatory for manufacturing or importing medical devices in India.', icon: Shield },
    { title: 'Patient Safety', description: 'Demonstrate your commitment to quality and safety standards in healthcare.', icon: Heart },
    { title: 'Market Credibility', description: 'CDSCO approval builds trust with hospitals, clinics, and healthcare providers.', icon: Award },
    { title: 'Competitive Advantage', description: 'Be among the compliant players in India\'s growing medical device market.', icon: TrendingUp },
  ];

  const challenges = [
    { title: 'Complex Classification', description: 'Understanding MDR 2017 device classification (A, B, C, D) and requirements.', icon: AlertTriangle },
    { title: 'Documentation Requirements', description: 'Extensive technical documentation and clinical evidence requirements.', icon: FileText },
    { title: 'Testing Requirements', description: 'Mandatory testing at NABL accredited laboratories for certain devices.', icon: Clock },
    { title: 'Regulatory Updates', description: 'Keeping pace with evolving CDSCO guidelines and MDR amendments.', icon: Target },
  ];

  const process = [
    { step: 'Product Classification', description: 'Determine device classification (A, B, C, D) under MDR 2017.' },
    { step: 'Document Preparation', description: 'Compile technical file, clinical data, and regulatory documents.' },
    { step: 'SUGAM Portal Registration', description: 'Create account and submit application on CDSCO portal.' },
    { step: 'Application Review', description: 'CDSCO reviews application and may request additional information.' },
    { step: 'Plant Inspection', description: 'Facility inspection for Class C and D devices (if applicable).' },
    { step: 'Registration Grant', description: 'Receive CDSCO registration certificate for your device.' },
  ];

  const documents = [
    'Application Form', 'Device Master File', 'Quality Management Certificate (ISO 13485)',
    'Free Sale Certificate', 'Declaration of Conformity', 'Clinical Evidence/Data',
    'Device Labeling & IFU', 'Authorized Agent Agreement',
  ];

  const whoNeedsIt = [
    { title: 'Medical Device Manufacturers', description: 'Companies manufacturing medical devices in India.' },
    { title: 'Importers & Distributors', description: 'Businesses importing medical devices into India.' },
    { title: 'Diagnostic Equipment Makers', description: 'Companies producing IVD and diagnostic devices.' },
    { title: 'Healthcare Startups', description: 'Innovative medical technology companies.' },
  ];

  const eligibility = [
    'Valid manufacturing license or import permit',
    'ISO 13485 certification for Class B, C, D devices',
    'Authorized Indian Agent for foreign manufacturers',
    'Device falls under MDR 2017 categories',
  ];

  const faqs = [
    { question: 'What is CDSCO registration?', answer: 'CDSCO (Central Drugs Standard Control Organization) registration is mandatory approval for manufacturing, importing, or selling medical devices in India under Medical Devices Rules, 2017.' },
    { question: 'What are device classification classes?', answer: 'MDR 2017 classifies devices into Class A (low risk), Class B (moderate risk), Class C (high risk), and Class D (very high risk) based on intended use and risk level.' },
    { question: 'How long does CDSCO registration take?', answer: 'Timeline varies by class: Class A takes 2-3 months, Class B takes 3-4 months, Class C/D may take 6-12 months including inspections.' },
    { question: 'Is ISO 13485 mandatory?', answer: 'ISO 13485 certification is mandatory for Class B, C, and D medical devices. Class A devices are exempt from this requirement.' },
    { question: 'What is the validity of CDSCO registration?', answer: 'CDSCO registration is valid for 5 years and must be renewed before expiry to continue selling in India.' },
  ];

  const productTypes = [
    'Diagnostic Devices', 'Surgical Instruments', 'Implants',
    'Imaging Equipment', 'Patient Monitoring', 'IVD Devices',
    'Therapeutic Devices', 'Other Medical Devices',
  ];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.08),transparent_50%)]" />
        </div>

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-[15%] w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl opacity-10 blur-sm" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-rose-600 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /><span>HOME</span>
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900 font-medium text-sm uppercase">CDSCO Registration</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="pt-4">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200">
                  <Heart size={28} className="text-white" />
                </div>
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Medical Device Approval</p>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">CDSCO</span> Registration
              </h1>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
                <p className="text-2xl md:text-3xl font-light text-gray-700">Medical Device License, <span className="font-semibold text-gray-900">Starting at ₹45,000*</span></p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 px-5 py-3 bg-rose-50 rounded-xl border border-rose-200 mb-8">
                <Zap size={20} className="text-rose-600" /><span className="text-gray-700 font-medium">MDR 2017 Compliant. Expert Guidance.</span>
              </motion.div>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                CDSCO registration is mandatory for medical devices in India. Our regulatory experts guide you through the entire MDR 2017 compliance process, from classification to approval.
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
                    <div className="text-2xl md:text-3xl font-bold text-rose-600">{stat.value}{stat.label.includes('Rating') && <Star size={16} className="inline ml-1 text-amber-400 fill-amber-400" />}</div>
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
                <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-full border border-teal-200">
                  <Award size={14} className="text-teal-600" />
                  <span className="text-xs font-semibold text-teal-700">CDSCO Expert</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                  <Star size={14} className="text-amber-600 fill-amber-400" />
                  <span className="text-xs font-semibold text-amber-700">4.9 Rated</span>
                </div>
              </motion.div>

              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-600 to-pink-600 px-8 py-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2"><span className="text-sm text-rose-200">Step</span><span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-sm font-semibold">{Math.min(formStep + 1, 3)}/3</span></div>
                    <div className="flex items-center gap-2 text-white text-sm font-medium"><BadgeCheck size={16} /><span>Free Consultation</span></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get CDSCO Registration Quote</h3>
                  <p className="text-rose-200 text-sm mt-1">Expert will call you within 30 minutes</p>
                </div>

                <div className="px-8 pt-4"><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-rose-600 to-pink-600" initial={{ width: '0%' }} animate={{ width: `${((formStep + 1) / 3) * 100}%` }} /></div></div>

                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                        <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} className="text-rose-600" /></div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-6">Our CDSCO expert will contact you within 30 minutes.</p>
                        <div className="flex items-center justify-center gap-2 text-rose-600"><Phone size={18} /><span className="font-semibold">1800 121 410 410</span></div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Full Name<span className="text-red-500">*</span></label>
                          <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all text-gray-900 placeholder-gray-400" />
                          {formData.name.length > 2 && <CheckCircle size={20} className="absolute right-4 top-11 text-rose-500" />}
                        </div>
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Email Address<span className="text-red-500">*</span></label>
                          <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all text-gray-900 placeholder-gray-400" />
                          {formData.email.includes('@') && formData.email.includes('.') && <CheckCircle size={20} className="absolute right-4 top-11 text-rose-500" />}
                        </div>
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Mobile Number<span className="text-red-500">*</span></label>
                          <div className="flex"><span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+91</span><input type="tel" name="phone" placeholder="Enter your mobile number" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" className="w-full px-4 py-4 rounded-r-xl border border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all text-gray-900 placeholder-gray-400" /></div>
                          {formData.phone.length === 10 && <CheckCircle size={20} className="absolute right-4 top-11 text-rose-500" />}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Device Type<span className="text-red-500">*</span></label>
                          <select name="productType" value={formData.productType} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all text-gray-900 bg-white">
                            <option value="">Select device type</option>
                            {productTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                          </select>
                        </div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-2">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label><input type="text" name="company" placeholder="Enter your company name" value={formData.company} onChange={handleChange} className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all text-gray-900 placeholder-gray-400" /></div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-rose-50 px-4 py-3 rounded-xl border border-rose-100"><Shield size={16} className="text-rose-500" /><span>100% Confidential. No spam.</span></div>
                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                          {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Processing...</>) : (<>Get Free Quote<ArrowRight size={20} /></>)}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100"><div className="flex items-center justify-center gap-6 text-sm text-gray-500"><div className="flex items-center gap-1"><Shield size={14} className="text-rose-500" /><span>100% Secure</span></div><div className="flex items-center gap-1"><Clock size={14} className="text-rose-500" /><span>30min Response</span></div><div className="flex items-center gap-1"><Headphones size={14} className="text-pink-500" /><span>Expert Support</span></div></div></div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6 flex items-center justify-center gap-4"><span className="text-gray-500 text-sm">Need help now?</span><a href="tel:+911800121410410" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:underline"><Phone size={16} />1800 121 410 410</a></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center"><span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-4">About CDSCO</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">CDSCO Registration</span>?</h2><p className="text-lg text-gray-600 leading-relaxed">CDSCO (Central Drugs Standard Control Organization) is India&apos;s regulatory body for medical devices under the Medical Devices Rules, 2017. CDSCO registration is mandatory for manufacturing, importing, or selling medical devices in India. It ensures devices meet safety, quality, and efficacy standards for patient protection.</p></motion.div></div></section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-4">Benefits</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">CDSCO Registration</span>?</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-rose-100 transition-all group"><div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><benefit.icon size={24} className="text-white" /></div><h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3><p className="text-gray-600 text-sm">{benefit.description}</p></motion.div>))}</div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-4">Challenges</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Challenges <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">We Solve</span></h2></motion.div><div className="grid md:grid-cols-2 gap-6">{challenges.map((challenge, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all"><div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm"><challenge.icon size={24} className="text-orange-500" /></div><div><h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3><p className="text-gray-600 text-sm">{challenge.description}</p></div></motion.div>))}</div></div></section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 relative overflow-hidden"><div className="absolute inset-0"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(244,63,94,0.15),transparent_50%)]" /></div><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><span className="inline-block px-4 py-1.5 bg-white/10 text-rose-300 rounded-full text-sm font-semibold mb-4 border border-white/10">Our Process</span><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6 Simple Steps to CDSCO Registration</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{process.map((step, index) => (<motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full"><div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white font-bold text-lg mb-4 shadow-lg">{index + 1}</div><h4 className="text-xl font-semibold text-white mb-3">{step.step}</h4><p className="text-rose-200 leading-relaxed">{step.description}</p></motion.div>))}</div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-4">Who Needs It</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Is CDSCO Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Required for You</span>?</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{whoNeedsIt.map((item, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100 hover:shadow-lg transition-all"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mx-auto mb-4"><Users size={28} className="text-white" /></div><h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3><p className="text-gray-600 text-sm">{item.description}</p></motion.div>))}</div></div></section>

      <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-2 gap-12 items-start"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-4">Eligibility</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Eligibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Criteria</span></h2><div className="space-y-4">{eligibility.map((item, index) => (<motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"><div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0"><CheckCircle size={18} className="text-rose-600" /></div><span className="text-gray-700">{item}</span></motion.div>))}</div></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-4">Checklist</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Documents <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Required</span></h2><div className="grid grid-cols-1 gap-4">{documents.map((doc, index) => (<motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"><FileText size={18} className="text-rose-500 flex-shrink-0" /><span className="text-gray-700 text-sm">{doc}</span></motion.div>))}</div></motion.div></div></div></section>

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-4">FAQs</span><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2></motion.div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((faq, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className={`w-full text-left p-6 rounded-2xl border transition-all ${openFaq === index ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-transparent shadow-lg' : 'bg-white border-gray-200 hover:border-rose-200 hover:shadow-md'}`}><div className="flex items-center justify-between gap-4"><span className={`font-semibold ${openFaq === index ? 'text-white' : 'text-gray-900'}`}>{faq.question}</span><ChevronDown size={20} className={`flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-white' : 'text-gray-400'}`} /></div><AnimatePresence>{openFaq === index && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="mt-4 text-white/90 leading-relaxed">{faq.answer}</p></motion.div>)}</AnimatePresence></button></motion.div>))}</div></div></section>

      <section className="py-20 bg-gradient-to-r from-rose-600 via-rose-700 to-pink-600 relative overflow-hidden"><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your CDSCO Registration?</h2><p className="text-rose-200 mb-8 max-w-2xl mx-auto text-lg">Connect with our medical device regulatory experts today for a free consultation.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rose-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"><MessageSquare size={20} />Get Free Consultation<ArrowRight size={20} /></Link></motion.div><motion.a href="tel:+911800121410410" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all"><Phone size={20} />1800 121 410 410</motion.a></div><div className="mt-12 flex items-center justify-center gap-8 flex-wrap"><div className="flex items-center gap-2 text-white/80"><Award size={20} /><span>MDR 2017 Experts</span></div><div className="flex items-center gap-2 text-white/80"><Users size={20} /><span>1800+ Registrations Done</span></div><div className="flex items-center gap-2 text-white/80"><Building2 size={20} /><span>12+ Years Experience</span></div></div></motion.div></div></section>
    </>
  );
}
