'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, ArrowRight, Search, Building2, FileText, Globe, Shield, Lightbulb, UtensilsCrossed, TrendingUp, Calculator, Users, Coins, Cpu, Factory, Radio, Wifi, Home } from 'lucide-react';

// Corporate Services Categories
const corporateCategories = [
  {
    id: 'company-registration',
    name: 'Company Registration',
    icon: Building2,
    items: [
      { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant' },
      { name: 'Public Limited Company', href: '/corporate/public-limited-company-registration' },
      { name: 'One Person Company', href: '/corporate/opc-registration' },
      { name: 'LLP Registration', href: '/corporate/llp-registration' },
      { name: 'Partnership Firm', href: '/corporate/partnership-firm-registration' },
      { name: 'Section 8 Company', href: '/corporate/section-8-company-registration' },
      { name: 'Nidhi Company', href: '/corporate/nidhi-company-registration' },
      { name: 'Producer Company', href: '/corporate/producer-company-registration' },
      { name: 'Society Registration', href: '/corporate/society-registration' },
      { name: 'Trust Registration', href: '/corporate/trust-registration' },
      { name: 'NGO Registration', href: '/corporate/ngo-registration' },
      { name: 'Foreign Company', href: '/corporate/foreign-company-registration' },
    ]
  },
  {
    id: 'mca-services',
    name: 'MCA Services',
    icon: FileText,
    items: [
      { name: 'ROC Return', href: '/corporate/roc-return' },
      { name: 'MSME Return', href: '/corporate/msme-return' },
      { name: 'Company Name Change', href: '/corporate/company-name-change' },
      { name: 'Director Appointment', href: '/corporate/director-appointment' },
      { name: 'Registered Office Change', href: '/corporate/registered-office-change' },
      { name: 'Share Transfer', href: '/corporate/share-transfer' },
      { name: 'Increase Authorized Capital', href: '/corporate/increase-authorized-capital' },
      { name: 'LLP Agreement Amendment', href: '/corporate/llp-agreement-amendment' },
      { name: 'Company Closure', href: '/corporate/company-closure' },
    ]
  },
  {
    id: 'import-export',
    name: 'Import Export Service',
    icon: Globe,
    items: [
      { name: 'IEC Registration', href: '/corporate/iec-registration' },
      { name: 'AD Code Registration', href: '/corporate/ad-code-registration' },
      { name: 'RCMC Certificate', href: '/corporate/rcmc-certificate' },
      { name: 'APEDA Registration', href: '/corporate/apeda-registration' },
      { name: 'Spice Board Registration', href: '/corporate/spice-board-registration' },
      { name: 'Tea Board Registration', href: '/corporate/tea-board-registration' },
      { name: 'Coffee Board Registration', href: '/corporate/coffee-board-registration' },
      { name: 'FIEO Registration', href: '/corporate/fieo-registration' },
      { name: 'DGFT License', href: '/corporate/dgft-license' },
    ]
  },
  {
    id: 'govt-license',
    name: 'Government License',
    icon: Shield,
    items: [
      { name: 'PSARA License', href: '/corporate/psara-license-registration-consultant' },
      { name: 'Shop & Establishment', href: '/corporate/shop-and-establishment-act-registration' },
      { name: 'Trade License', href: '/corporate/trade-license' },
      { name: 'RERA Registration', href: '/corporate/rera-registration' },
      { name: 'MSME Registration', href: '/corporate/msme-registration' },
      { name: 'Startup India', href: '/corporate/startup-india-registration' },
      { name: 'NITI Aayog', href: '/corporate/niti-aayog' },
      { name: 'ISO Certification', href: '/corporate/iso-certification' },
      { name: 'AYUSH License', href: '/corporate/ayush-license' },
      { name: 'Drug License', href: '/corporate/drug-license' },
    ]
  },
  {
    id: 'ipr-services',
    name: 'IPR Services',
    icon: Lightbulb,
    items: [
      { name: 'Trademark Registration', href: '/corporate/trademark-registration' },
      { name: 'Trademark Objection', href: '/corporate/trademark-objection' },
      { name: 'Trademark Opposition', href: '/corporate/trademark-opposition' },
      { name: 'Trademark Renewal', href: '/corporate/trademark-renewal' },
      { name: 'Copyright Registration', href: '/corporate/copyright-registration' },
      { name: 'Patent Registration', href: '/corporate/patent-registration-consultant' },
      { name: 'Design Registration', href: '/corporate/design-registration' },
    ]
  },
  {
    id: 'fssai',
    name: 'FSSAI',
    icon: UtensilsCrossed,
    items: [
      { name: 'FSSAI Registration', href: '/corporate/fssai-certificate' },
      { name: 'FSSAI State License', href: '/corporate/fssai-state-license' },
      { name: 'FSSAI Central License', href: '/corporate/fssai-central-license' },
      { name: 'FSSAI Modification', href: '/corporate/fssai-modification' },
      { name: 'FSSAI Renewal', href: '/corporate/fssai-renewal' },
      { name: 'FSSAI Annual Return', href: '/corporate/fssai-annual-return' },
    ]
  },
  {
    id: 'sebi-business',
    name: 'SEBI Business',
    icon: TrendingUp,
    items: [
      { name: 'NBFC Registration', href: '/corporate/nbfc-registration' },
      { name: 'Microfinance Company', href: '/corporate/microfinance-company-registration' },
      { name: 'Asset Reconstruction Company', href: '/corporate/asset-reconstruction-company-registration' },
      { name: 'Insurance Company', href: '/corporate/insurance-company-registration' },
      { name: 'Mutual Fund Company', href: '/corporate/mutual-fund-company-registration' },
      { name: 'Portfolio Manager', href: '/corporate/portfolio-manager-registration' },
    ]
  },
  {
    id: 'tax-accounting',
    name: 'Tax & Accounting',
    icon: Calculator,
    items: [
      { name: 'GST Registration', href: '/corporate/gst-registration' },
      { name: 'GST Return Filing', href: '/corporate/gst-return' },
      { name: 'Income Tax Return', href: '/corporate/income-tax-return-filing' },
      { name: 'PAN for Company', href: '/corporate/pan-registration-company' },
      { name: 'PAN for Individual', href: '/corporate/pan-registration-individual' },
      { name: 'TAN Registration', href: '/corporate/tan-registration' },
      { name: 'Professional Tax', href: '/corporate/professional-tax-registration' },
      { name: 'DSC Certificate', href: '/corporate/dsc-certificate' },
    ]
  },
  {
    id: 'labour-compliance',
    name: 'Labour Compliance',
    icon: Users,
    items: [
      { name: 'EPF Registration', href: '/corporate/epf-registration' },
      { name: 'ESIC Registration', href: '/corporate/esic-registration' },
      { name: 'PF & ESI Return', href: '/corporate/pf-esi-return' },
      { name: 'Labour License', href: '/corporate/labour-license' },
      { name: 'Factory License', href: '/corporate/factory-license' },
      { name: 'Minimum Wages Act', href: '/corporate/minimum-wages-act' },
    ]
  },
  {
    id: 'fund-raising',
    name: 'Fund Raising',
    icon: Coins,
    items: [
      { name: 'CSR Registration', href: '/corporate/csr-regisration' },
      { name: 'FCRA Registration', href: '/corporate/fcra-registration' },
      { name: 'Seed Funding', href: '/corporate/seed-funding' },
      { name: '80G & 12A Registration', href: '/corporate/80g-12a-registration' },
      { name: 'Grant Application', href: '/corporate/grant-application' },
    ]
  },
];

// Technical Services Categories
const technicalCategories = [
  {
    id: 'bis',
    name: 'BIS Certification',
    icon: Cpu,
    items: [
      { name: 'BIS FMCS', href: '/approval/bis-certification' },
      { name: 'BIS CRS', href: '/approval/bis-crs' },
      { name: 'ISI Mark', href: '/approval/isi-certificate' },
      { name: 'BIS Hallmark', href: '/approval/bis-hallmark' },
      { name: 'BIS Laboratory', href: '/approval/bis-laboratory' },
    ]
  },
  {
    id: 'pollution',
    name: 'Pollution Advisory',
    icon: Factory,
    items: [
      { name: 'CPCB Registration', href: '/approval/cpcb-registration' },
      { name: 'State Pollution Board', href: '/approval/state-pollution-board' },
      { name: 'EPR Certification', href: '/approval/epr-certification' },
      { name: 'E-Waste Authorization', href: '/approval/e-waste-authorization' },
      { name: 'Plastic Waste Authorization', href: '/approval/plastic-waste' },
      { name: 'Battery Waste Authorization', href: '/approval/battery-waste' },
      { name: 'Hazardous Waste', href: '/approval/hazardous-waste' },
      { name: 'BEE Certification', href: '/approval/bee-certification' },
    ]
  },
  {
    id: 'tec',
    name: 'TEC Certification',
    icon: Radio,
    items: [
      { name: 'TEC Certificate', href: '/approval/tec-certificate' },
      { name: 'MTCTE Certification', href: '/approval/mtcte-certification' },
      { name: 'TEC Laboratory', href: '/approval/tec-laboratory' },
      { name: 'Telecom License', href: '/approval/telecom-license' },
    ]
  },
  {
    id: 'wpc',
    name: 'WPC Certification',
    icon: Wifi,
    items: [
      { name: 'WPC ETA Approval', href: '/approval/wpc-certification' },
      { name: 'WPC License', href: '/approval/wpc-license' },
      { name: 'SACFA Clearance', href: '/approval/sacfa-clearance' },
      { name: 'Dealer Possession License', href: '/approval/dealer-possession-license' },
      { name: 'Non-Dealer Possession License', href: '/approval/non-dealer-possession-license' },
    ]
  },
  {
    id: 'others',
    name: 'Other Approvals',
    icon: Shield,
    items: [
      { name: 'CDSCO Registration', href: '/approval/cdsco-registration' },
      { name: 'AERB License', href: '/approval/aerb-license' },
      { name: 'PESO Approval', href: '/approval/peso-approval' },
      { name: 'LMPC Certificate', href: '/approval/lmpc-certificate' },
    ]
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null);
  const [activeCorporateCategory, setActiveCorporateCategory] = useState(corporateCategories[0].id);
  const [activeTechnicalCategory, setActiveTechnicalCategory] = useState(technicalCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter items based on search
  const getFilteredItems = (categories: typeof corporateCategories) => {
    if (!searchQuery.trim()) return null;
    const filtered: { name: string; href: string; category: string }[] = [];
    categories.forEach(cat => {
      cat.items.forEach(item => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          filtered.push({ ...item, category: cat.name });
        }
      });
    });
    return filtered;
  };

  const filteredCorporateItems = getFilteredItems(corporateCategories);
  const filteredTechnicalItems = getFilteredItems(technicalCategories);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
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

            {/* Corporate Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('corporate');
                setSearchQuery('');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <span>Corporate Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className={`fixed left-1/2 -translate-x-1/2 top-20 pt-2 transition-all duration-200 ${
                activeDropdown === 'corporate' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-[90vw] max-w-4xl bg-slate-900/98 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Search Bar */}
                  <div className="p-3 border-b border-white/10 bg-gradient-to-r from-blue-600/10 to-transparent">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-base font-bold text-white">Corporate Services</h2>
                      <span className="text-xs text-white/50">100+ Services</span>
                    </div>
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        placeholder="Search corporate services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                  </div>

                  {/* Search Results */}
                  {filteredCorporateItems && filteredCorporateItems.length > 0 ? (
                    <div className="p-3 max-h-[50vh] overflow-y-auto">
                      <p className="text-xs text-white/50 mb-2">Search Results ({filteredCorporateItems.length})</p>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredCorporateItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
                          >
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-[10px] text-white/40">{item.category}</p>
                            </div>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : filteredCorporateItems && filteredCorporateItems.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-white/50 text-sm">No services found for &quot;{searchQuery}&quot;</p>
                    </div>
                  ) : (
                    /* Categories and Items View */
                    <div className="flex min-h-[280px] max-h-[350px]">
                      {/* Categories Sidebar */}
                      <div className="w-52 border-r border-white/10 bg-white/[0.02]">
                        <div className="p-2 h-full max-h-[350px] overflow-y-auto">
                          {corporateCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveCorporateCategory(category.id)}
                                className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left transition-all mb-0.5 ${
                                  activeCorporateCategory === category.id
                                    ? 'bg-blue-600/20 text-white border-l-2 border-blue-500'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                <div className={`w-7 h-7 rounded flex items-center justify-center ${
                                  activeCorporateCategory === category.id ? 'bg-blue-500/20' : 'bg-white/5'
                                }`}>
                                  <IconComponent size={14} className={activeCorporateCategory === category.id ? 'text-blue-400' : 'text-white/50'} />
                                </div>
                                <span className="text-xs font-medium">{category.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Items Grid */}
                      <div className="flex-1 p-3">
                        {corporateCategories.map((category) => (
                          <div
                            key={category.id}
                            className={`${activeCorporateCategory === category.id ? 'block' : 'hidden'}`}
                          >
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                <category.icon size={16} className="text-blue-400" />
                              </div>
                              <div>
                                <h3 className="text-sm text-white font-bold">{category.name}</h3>
                                <p className="text-[10px] text-white/50">{category.items.length} services</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 max-h-[240px] overflow-y-auto">
                              {category.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group"
                                >
                                  <span className="text-xs">{item.name}</span>
                                  <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  {/* <div className="px-3 py-2 bg-gradient-to-r from-blue-600/10 to-transparent border-t border-white/10">
                    <Link
                      href="/services"
                      className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      <span>View All Corporate Services</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Technical Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('technical');
                setSearchQuery('');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <span>Technical Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'technical' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className={`fixed left-1/2 -translate-x-1/2 top-20 pt-2 transition-all duration-200 ${
                activeDropdown === 'technical' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-[85vw] max-w-3xl bg-slate-900/98 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Search Bar */}
                  <div className="p-3 border-b border-white/10 bg-gradient-to-r from-cyan-600/10 to-transparent">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-base font-bold text-white">Technical Services</h2>
                      <span className="text-xs text-white/50">Certifications & Approvals</span>
                    </div>
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        placeholder="Search technical services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  {/* Search Results */}
                  {filteredTechnicalItems && filteredTechnicalItems.length > 0 ? (
                    <div className="p-3 max-h-[50vh] overflow-y-auto">
                      <p className="text-xs text-white/50 mb-2">Search Results ({filteredTechnicalItems.length})</p>
                      <div className="grid grid-cols-2 gap-2">
                        {filteredTechnicalItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
                          >
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-[10px] text-white/40">{item.category}</p>
                            </div>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : filteredTechnicalItems && filteredTechnicalItems.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-white/50 text-sm">No services found for &quot;{searchQuery}&quot;</p>
                    </div>
                  ) : (
                    /* Categories and Items View */
                    <div className="flex min-h-[240px] max-h-[300px]">
                      {/* Categories Sidebar */}
                      <div className="w-48 border-r border-white/10 bg-white/[0.02]">
                        <div className="p-2 h-full max-h-[300px] overflow-y-auto">
                          {technicalCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveTechnicalCategory(category.id)}
                                className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left transition-all mb-0.5 ${
                                  activeTechnicalCategory === category.id
                                    ? 'bg-cyan-600/20 text-white border-l-2 border-cyan-500'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                <div className={`w-7 h-7 rounded flex items-center justify-center ${
                                  activeTechnicalCategory === category.id ? 'bg-cyan-500/20' : 'bg-white/5'
                                }`}>
                                  <IconComponent size={14} className={activeTechnicalCategory === category.id ? 'text-cyan-400' : 'text-white/50'} />
                                </div>
                                <span className="text-xs font-medium">{category.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Items Grid */}
                      <div className="flex-1 p-3">
                        {technicalCategories.map((category) => (
                          <div
                            key={category.id}
                            className={`${activeTechnicalCategory === category.id ? 'block' : 'hidden'}`}
                          >
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                <category.icon size={16} className="text-cyan-400" />
                              </div>
                              <div>
                                <h3 className="text-sm text-white font-bold">{category.name}</h3>
                                <p className="text-[10px] text-white/50">{category.items.length} services</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 max-h-[200px] overflow-y-auto">
                              {category.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group"
                                >
                                  <span className="text-xs">{item.name}</span>
                                  <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  {/* <div className="px-3 py-2 bg-gradient-to-r from-cyan-600/10 to-transparent border-t border-white/10">
                    <Link
                      href="/services"
                      className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      <span>View All Technical Services</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div> */}
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
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Modal - Rendered via Portal */}
      <MobileMenuModal 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        mobileActiveSection={mobileActiveSection}
        setMobileActiveSection={setMobileActiveSection}
      />
    </header>
  );
}

// Mobile Menu Modal Component
function MobileMenuModal({ 
  isOpen, 
  onClose,
  mobileActiveSection,
  setMobileActiveSection
}: { 
  isOpen: boolean; 
  onClose: () => void;
  mobileActiveSection: string | null;
  setMobileActiveSection: (section: string | null) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalContent = (
    <div 
      className={`fixed inset-0 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`absolute inset-x-0 top-0 bg-slate-900 max-h-[100vh] overflow-hidden transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 bg-slate-900">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/JRlogo.png"
              alt="JR Compliance"
              width={140}
              height={36}
              className="w-auto h-9 object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-80px)] bg-slate-900">
          <div className="px-4 py-4 space-y-3">
            {/* Home */}
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-white font-medium text-base rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Home size={20} className="text-blue-400" />
              </div>
              <span>Home</span>
            </Link>

            {/* Corporate Services */}
            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setMobileActiveSection(mobileActiveSection === 'corporate' ? null : 'corporate')}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold text-base hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <FileText size={20} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <span className="block">Corporate Services</span>
                    <span className="text-xs text-white/50 font-normal">100+ Services</span>
                  </div>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-300 text-blue-400 ${mobileActiveSection === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileActiveSection === 'corporate' && (
                <div className="border-t border-white/10 max-h-[50vh] overflow-y-auto">
                  <div className="p-3 space-y-2">
                    {corporateCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.id} className="rounded-lg border border-white/5 overflow-hidden">
                          <div className="flex items-center gap-2 px-3 py-2.5 bg-blue-500/10">
                            <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <IconComponent size={14} className="text-blue-400" />
                            </div>
                            <span className="text-blue-400 font-medium text-sm">{category.name}</span>
                            <span className="ml-auto text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">{category.items.length}</span>
                          </div>
                          <div className="p-2 space-y-1 bg-slate-900/50">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between px-3 py-2.5 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span>{item.name}</span>
                                <ArrowRight size={14} className="text-white/30" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Technical Services */}
            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setMobileActiveSection(mobileActiveSection === 'technical' ? null : 'technical')}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold text-base hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Cpu size={20} className="text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <span className="block">Technical Services</span>
                    <span className="text-xs text-white/50 font-normal">Certifications & Approvals</span>
                  </div>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-300 text-cyan-400 ${mobileActiveSection === 'technical' ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileActiveSection === 'technical' && (
                <div className="border-t border-white/10 max-h-[50vh] overflow-y-auto">
                  <div className="p-3 space-y-2">
                    {technicalCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.id} className="rounded-lg border border-white/5 overflow-hidden">
                          <div className="flex items-center gap-2 px-3 py-2.5 bg-cyan-500/10">
                            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                              <IconComponent size={14} className="text-cyan-400" />
                            </div>
                            <span className="text-cyan-400 font-medium text-sm">{category.name}</span>
                            <span className="ml-auto text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">{category.items.length}</span>
                          </div>
                          <div className="p-2 space-y-1 bg-slate-900/50">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between px-3 py-2.5 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span>{item.name}</span>
                                <ArrowRight size={14} className="text-white/30" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-white font-medium text-base rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Users size={20} className="text-purple-400" />
              </div>
              <span>About Us</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-white font-medium text-base rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Phone size={20} className="text-emerald-400" />
              </div>
              <span>Contact Us</span>
            </Link>

            {/* CTA Section */}
            <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
              <a
                href="tel:1800121410410"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-white/5 border border-white/10 text-white font-medium text-base rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone size={20} />
                <span>1800-121-410-410</span>
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-center font-bold text-base rounded-xl transition-colors shadow-lg shadow-blue-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
