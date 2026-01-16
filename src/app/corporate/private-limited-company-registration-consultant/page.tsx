'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle, Phone, FileText, ArrowLeft, Shield, Award, Users, Star, Clock,
  BadgeCheck, Building2, ChevronDown, MessageSquare, Headphones, Zap, Briefcase, AlertTriangle, Target, TrendingUp, Scale
} from 'lucide-react';

export default function PrivateLimitedCompanyPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', registrationType: '' });
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
    { value: '5000+', label: 'Companies Registered' },
    { value: '4.9', label: 'Google Rating' },
    { value: '15+', label: 'Years Experience' },
    { value: '99%', label: 'Success Rate' },
  ];

  const trustedBy = ['Startups', 'SMEs', 'Entrepreneurs', 'Investors', 'Corporates'];

  const advantages = [
    { title: 'Limited Liability', description: 'Personal assets cannot be seized to clear the debts of the company, protecting owners from business losses.', icon: Shield },
    { title: 'Increased Credibility', description: 'A private limited company is perceived to be more reliable and businesslike than a sole trader or partnership.', icon: Award },
    { title: 'Tax Benefits', description: 'Some tax incentives may be available for private limited companies, helping reduce overall tax burden.', icon: TrendingUp },
    { title: 'Easy Funding Access', description: 'A private limited company may be easily financed from various shareholders, banks, or investors.', icon: Target },
  ];

  const challenges = [
    { title: 'Complex Procedures', description: 'The formation requires many legal formalities and proper documentation.', icon: AlertTriangle },
    { title: 'Time-Consuming', description: 'Gathering all necessary papers and filling out documents can be exhausting.', icon: Clock },
    { title: 'Share Limit', description: 'There is a limit of 200 shareholders with restricted share transfers.', icon: FileText },
    { title: 'Business Commencement', description: 'Certificate of commencement must be obtained within 180 days of registration.', icon: Scale },
  ];

  const process = [
    { step: 'Name Approval', description: 'First, we check the availability of your company name and get it approved by the Registrar of Companies.' },
    { step: 'Documentation', description: 'We help prepare all paperwork including Memorandum of Association and Articles of Association.' },
    { step: 'DSC & DIN', description: 'We assist in obtaining Digital Signature Certificates and Director Identification Numbers.' },
    { step: 'Registration Filing', description: 'We forward all necessary documents to the Registrar of Companies for registration.' },
    { step: 'Incorporation', description: 'Certificate of incorporation is issued along with PAN and TAN for the company.' },
    { step: 'Ongoing Compliance', description: 'We assist you in maintaining compliance with all legal and regulatory standards.' },
  ];

  const documents = [
    'MoA and AoA',
    'Directors\' PAN & Aadhaar',
    'Passport-size Photos',
    'Proof of Registered Office',
    'Digital Signature Certificate',
    'Shareholders\' Agreement',
  ];

  const whoNeedsIt = [
    { title: 'Startups', description: 'Younger companies seeking a reliable platform to work from.' },
    { title: 'SMEs', description: 'Businesses interested in diversification and asset protection.' },
    { title: 'Foreign Investors', description: 'People investing in India requiring legal format.' },
    { title: 'Existing Businesses', description: 'Companies seeking to transform their business organization.' },
  ];

  const eligibility = [
    'Minimum 2 directors required (max 15)',
    'At least 2 shareholders (max 200)',
    'At least one director must be Indian resident',
    'No minimum paid-up capital requirement',
  ];

  const faqs = [
    { question: 'How many directors are necessary for a private limited company?', answer: 'A Private Limited Company must have at least two directors. However, one director may serve in two companies at a time. The maximum number of directors is 15.' },
    { question: 'Can a minor act as a director in a private limited company?', answer: 'No, a minor (person under 18 years) legally cannot act as a director of a private limited company. All directors must be adults.' },
    { question: 'How much paid up capital is required for a private limited company?', answer: 'There is no minimum requirement of paid up capital for a private limited company in India. You can start with any amount.' },
    { question: 'Can a Private Limited Company be listed on the stock exchange?', answer: 'A private limited company cannot directly list on stock exchange. It needs to convert to a public limited company first and meet SEBI requirements.' },
    { question: 'What are the annual compliance requirements?', answer: 'Annual compliances include filing annual returns (AOC-4, MGT-7), holding AGM, maintaining statutory registers, income tax filings, and audit of accounts.' },
  ];

  const registrationTypes = [
    'New Company Registration',
    'LLP to Private Limited Conversion',
    'Sole Proprietorship to Pvt Ltd',
    'Partnership to Pvt Ltd',
    'OPC to Private Limited',
    'Other',
  ];

  const whyChooseUs = [
    { title: 'Expert Team', description: 'Experienced professionals specializing in company formation.', icon: Users },
    { title: 'Quick Processing', description: 'Efficient registration avoiding unnecessary delays.', icon: Zap },
    { title: 'Personalized Service', description: 'Individual attention with services tailored to your needs.', icon: Headphones },
    { title: 'Full Compliance', description: 'Strict adherence to all legal requirements.', icon: Shield },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.08),transparent_50%)]" />
        </div>

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-[15%] w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-10 blur-sm" />
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-[10%] w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-10 blur-sm" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /><span>HOME</span>
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900 font-medium text-sm uppercase">Company Registration</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="pt-4">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
                  <Building2 size={28} className="text-white" />
                </div>
                <div><p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Business Formation</p></div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Private Limited</span>{' '}Company Registration
              </h1>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
                <p className="text-2xl md:text-3xl font-light text-gray-700">Incorporate Your Business,{' '}<span className="font-semibold text-gray-900">Starting at ₹7,999*</span></p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 px-5 py-3 bg-blue-50 rounded-xl border border-blue-200 mb-8">
                <Zap size={20} className="text-blue-600" /><span className="text-gray-700 font-medium">100% Online Process. Expert Assistance.</span>
              </motion.div>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                A private limited company is a legal entity with limited liability protection, separating personal assets from business debts. Our expert team guides you through every step of the incorporation process.
              </p>

              <div className="mb-10">
                <p className="text-sm text-gray-500 font-medium mb-4">Trusted by Businesses Across</p>
                <div className="flex flex-wrap items-center gap-6">
                  {trustedBy.map((brand, index) => (
                    <motion.div key={brand} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} className="text-gray-400 font-bold text-lg tracking-wide hover:text-gray-600 transition-colors">{brand}</motion.div>
                  ))}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}{stat.label.includes('Rating') && <Star size={16} className="inline ml-1 text-amber-400 fill-amber-400" />}</div>
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
                  <span className="text-xs font-semibold text-blue-700">MCA Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                  <Star size={14} className="text-amber-600 fill-amber-400" />
                  <span className="text-xs font-semibold text-amber-700">4.9 Rated</span>
                </div>
              </motion.div>

              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2"><span className="text-sm text-blue-200">Step</span><span className="px-2 py-0.5 bg-white/20 text-white rounded-full text-sm font-semibold">{Math.min(formStep + 1, 3)}/3</span></div>
                    <div className="flex items-center gap-2 text-white text-sm font-medium"><BadgeCheck size={16} /><span>Free Consultation</span></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get Company Registration Quote</h3>
                  <p className="text-blue-200 text-sm mt-1">Expert will call you within 30 minutes</p>
                </div>

                <div className="px-8 pt-4">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600" initial={{ width: '0%' }} animate={{ width: `${((formStep + 1) / 3) * 100}%` }} transition={{ duration: 0.3 }} />
                  </div>
                </div>

                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} className="text-blue-600" /></div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-6">Our expert will contact you within 30 minutes.</p>
                        <div className="flex items-center justify-center gap-2 text-blue-600"><Phone size={18} /><span className="font-semibold">1800 121 410 410</span></div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Full Name<span className="text-red-500">*</span></label>
                          <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400" />
                          {formData.name.length > 2 && <CheckCircle size={20} className="absolute right-4 top-11 text-blue-500" />}
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Email Address<span className="text-red-500">*</span></label>
                          <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400" />
                          {formData.email.includes('@') && formData.email.includes('.') && <CheckCircle size={20} className="absolute right-4 top-11 text-blue-500" />}
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Your Mobile Number<span className="text-red-500">*</span></label>
                          <div className="flex">
                            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+91</span>
                            <input type="tel" name="phone" placeholder="Enter your mobile number" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" className="w-full px-4 py-4 rounded-r-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400" />
                          </div>
                          {formData.phone.length === 10 && <CheckCircle size={20} className="absolute right-4 top-11 text-blue-500" />}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Registration Type<span className="text-red-500">*</span></label>
                          <select name="registrationType" value={formData.registrationType} onChange={handleChange} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 bg-white">
                            <option value="">Select registration type</option>
                            {registrationTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Proposed Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                          <input type="text" name="company" placeholder="Enter proposed company name" value={formData.company} onChange={handleChange} className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-400" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
                          <Shield size={16} className="text-blue-500" /><span>100% Confidential. No spam.</span>
                        </div>

                        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                          {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Processing...</>) : (<>Get Free Quote<ArrowRight size={20} /></>)}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>

                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Shield size={14} className="text-blue-500" /><span>100% Secure</span></div>
                    <div className="flex items-center gap-1"><Clock size={14} className="text-blue-500" /><span>30min Response</span></div>
                    <div className="flex items-center gap-1"><Headphones size={14} className="text-blue-500" /><span>Expert Support</span></div>
                  </div>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6 flex items-center justify-center gap-4">
                <span className="text-gray-500 text-sm">Need help now?</span>
                <a href="tel:+911800121410410" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"><Phone size={16} />1800 121 410 410</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Private Limited Company</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <advantage.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-sm font-semibold mb-4">Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Challenges We <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Help You Navigate</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We handle the complexities so you can focus on your business</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-amber-50 p-6 rounded-2xl border border-amber-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <challenge.icon size={22} className="text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(96,165,250,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-300 rounded-full text-sm font-semibold mb-4 border border-white/10">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6 Steps to Company Registration</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Our streamlined process ensures quick and hassle-free incorporation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-bold text-lg mb-4 shadow-lg">{index + 1}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.step}</h4>
                  <p className="text-blue-200 leading-relaxed">{step.description}</p>
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
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">Who Needs It</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ideal For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">These Businesses</span></h2>
              <div className="grid grid-cols-2 gap-4">
                {whoNeedsIt.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3"><Briefcase size={20} className="text-blue-600" /></div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Checklist</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Documents <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Required</span></h2>
              <div className="grid grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <FileText size={18} className="text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">Requirements</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Eligibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Criteria</span></h2>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-4">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">JR Compliance</span></h2>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3"><item.icon size={20} className="text-purple-600" /></div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className={`w-full text-left p-6 rounded-2xl border transition-all ${openFaq === index ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg' : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md'}`}>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" /></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Register Your Company?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">Connect with our company registration experts for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all">
                  <MessageSquare size={20} />Get Free Consultation<ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a href="tel:+911800121410410" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all">
                <Phone size={20} />1800 121 410 410
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-white/80"><Award size={20} /><span>CA & CS Experts</span></div>
              <div className="flex items-center gap-2 text-white/80"><Users size={20} /><span>5000+ Happy Clients</span></div>
              <div className="flex items-center gap-2 text-white/80"><Building2 size={20} /><span>15+ Years Experience</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
