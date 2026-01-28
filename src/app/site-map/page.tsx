import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap | JR Compliance - Complete List of All Services & Pages',
  description: 'Browse the complete sitemap of JR Compliance. Find all our services including BIS certification, FSSAI license, EPR registration, company registration, trademark services, and more.',
  keywords: 'JR Compliance sitemap, compliance services, BIS certification, FSSAI license, EPR registration, company registration, trademark registration',
}

interface SitemapSection {
  title: string
  description: string
  links: { name: string; href: string }[]
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    description: 'Primary pages of JR Compliance website',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },
  {
    title: 'Services',
    description: 'Our main compliance and registration services',
    links: [
      { name: 'AERB Registration', href: '/services/aerb-registration' },
      { name: 'Annual Compliance', href: '/services/annual-compliance' },
      { name: 'BIS Registration', href: '/services/bis-registration' },
      { name: 'Company Registration', href: '/services/company-registration' },
      { name: 'EPR Services', href: '/services/epr-services' },
      { name: 'FSSAI License', href: '/services/fssai-license' },
      { name: 'GST Registration', href: '/services/gst-registration' },
      { name: 'PSARA License', href: '/services/psara-license' },
      { name: 'WPC Approval', href: '/services/wpc-approval' },
    ],
  },
  {
    title: 'BIS & Product Certification',
    description: 'Bureau of Indian Standards and product certification services',
    links: [
      { name: 'BIS Certification', href: '/approval/bis-certification' },
      { name: 'CRS Certification', href: '/approval/bis-certification/crs-certification' },
      { name: 'FMCS BIS Certification', href: '/approval/bis-certification/fmcs-bis-certification' },
      { name: 'Scheme-X Certification', href: '/approval/bis-certification/scheme-x' },
      { name: 'ISI Certificate', href: '/approval/isi-certificate' },
      { name: 'BEE Certification', href: '/approval/bee-certification' },
      { name: 'TEC Certificate', href: '/approval/tec-certificate' },
      { name: 'WPC Certification', href: '/approval/wpc-certification' },
      { name: 'MTCTE Certification', href: '/approval/mtcte-certification' },
    ],
  },
  {
    title: 'CDSCO & Medical Device Registration',
    description: 'Central Drugs Standard Control Organization registration services',
    links: [
      { name: 'CDSCO Registration', href: '/approval/cdsco-registration' },
      { name: 'MDR CDSCO Registration', href: '/approval/cdsco-registration/mdr-cdsco-registration' },
      { name: 'Drug CDSCO Registration', href: '/approval/cdsco-registration/drug-cdsco-registration' },
      { name: 'Cosmetic CDSCO Registration', href: '/approval/cdsco-registration/cosmetic-cdsco-registration' },
      { name: 'In-Vitro Diagnostics (IVD)', href: '/approval/cdsco-registration/in-vitro-diagnostics' },
      { name: 'CDSCO Cosmetic', href: '/approval/cdsco-cosmetic' },
      { name: 'CDSCO Drug', href: '/approval/cdsco-drug' },
      { name: 'CDSCO IVD', href: '/approval/cdsco-ivd' },
    ],
  },
  {
    title: 'EPR & Environmental Compliance',
    description: 'Extended Producer Responsibility and environmental certification services',
    links: [
      { name: 'EPR Certification', href: '/approval/epr-certification' },
      { name: 'E-Waste Compliance', href: '/approval/epr-certification/e-waste-compliance' },
      { name: 'Plastic Waste Compliance', href: '/approval/epr-certification/plastic-waste-compliance' },
      { name: 'Battery Waste Compliance', href: '/approval/epr-certification/battery-waste-compliance' },
      { name: 'Tyre Waste Compliance', href: '/approval/epr-certification/tyre-waste' },
      { name: 'Used Oil Compliance', href: '/approval/epr-certification/used-oil' },
      { name: 'EPR E-Waste', href: '/approval/epr-e-waste' },
      { name: 'EPR Plastic Waste', href: '/approval/epr-plastic-waste' },
      { name: 'EPR Battery Waste', href: '/approval/epr-battery-waste' },
      { name: 'EPR Tyre Waste', href: '/approval/epr-tyre-waste' },
      { name: 'EPR Used Oil Waste', href: '/approval/epr-used-oil-waste' },
      { name: 'CPCB Registration', href: '/approval/cpcb-registration' },
      { name: 'CPCB Guidelines', href: '/approval/cpcb-guidelines' },
      { name: 'State Pollution Board', href: '/approval/state-pollution-board' },
      { name: 'DPCC Registration', href: '/approval/state-pollution-board/dpcc' },
      { name: 'Delhi Pollution Control', href: '/approval/delhi-pollution-control' },
    ],
  },
  {
    title: 'Radiation & Nuclear Licenses',
    description: 'AERB and radiation-related licensing services',
    links: [
      { name: 'AERB License', href: '/approval/aerb-license' },
      { name: 'Dealer Possession License', href: '/approval/dealer-possession-license' },
      { name: 'Non-Dealer Possession License', href: '/approval/non-dealer-possession-license' },
    ],
  },
  {
    title: 'Trademark Services',
    description: 'Complete trademark registration and related services',
    links: [
      { name: 'Trademark Registration', href: '/corporate/trademark-registration' },
      { name: 'Trademark Search', href: '/corporate/trademark-registration/trademark-search' },
      { name: 'Trademark Application Filing', href: '/corporate/trademark-registration/trademark-application-filing' },
      { name: 'Trademark Formality Check', href: '/corporate/trademark-registration/trademark-formality-check-fail' },
      { name: 'Trademark Modification', href: '/corporate/trademark-registration/trademark-modification' },
      { name: 'Trademark Objection', href: '/corporate/trademark-registration/trademark-objection' },
      { name: 'Trademark Hearing', href: '/corporate/trademark-registration/trademark-hearing' },
      { name: 'Trademark Opposition', href: '/corporate/trademark-registration/trademark-opposition' },
      { name: 'Trademark Evidence Filing', href: '/corporate/trademark-registration/trademark-evidence-filing' },
      { name: 'Trademark Withdrawal', href: '/corporate/trademark-registration/trademark-withdrawal' },
      { name: 'Trademark Renewal', href: '/corporate/trademark-registration/trademark-renewal' },
    ],
  },
  {
    title: 'Intellectual Property',
    description: 'Patent, copyright, and design registration services',
    links: [
      { name: 'Patent Registration', href: '/corporate/patent-registration-consultant' },
      { name: 'Copyright Registration', href: '/corporate/copyright-registration' },
      { name: 'Copyright Objection', href: '/corporate/copyright-objection' },
      { name: 'Design Registration', href: '/corporate/design-registration' },
    ],
  },
  {
    title: 'Company Registration',
    description: 'Various types of company and business registration services',
    links: [
      { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant' },
      { name: 'Public Limited Company', href: '/corporate/public-limited-company-registration' },
      { name: 'LLP Registration', href: '/corporate/llp-registration' },
      { name: 'OPC Registration', href: '/corporate/opc-registration' },
      { name: 'Partnership Firm Registration', href: '/corporate/partnership-firm-registration' },
      { name: 'Section 8 Company', href: '/corporate/section-8-company-registration' },
      { name: 'Nidhi Company', href: '/corporate/nidhi-company-registration' },
      { name: 'Producer Company', href: '/corporate/producer-company-registration' },
      { name: 'Sole Proprietorship', href: '/corporate/sole-proprietorship-registration' },
      { name: 'Foreign Company Registration', href: '/corporate/foreign-company-registration' },
    ],
  },
  {
    title: 'NGO & Non-Profit Registration',
    description: 'Registration services for non-profit organizations',
    links: [
      { name: 'NGO Registration', href: '/corporate/ngo-registration' },
      { name: 'Society Registration', href: '/corporate/society-registration' },
      { name: 'Trust Registration', href: '/corporate/trust-registration' },
      { name: 'CSR Registration', href: '/corporate/csr-regisration' },
      { name: 'FCRA Registration', href: '/corporate/fcra-registration' },
    ],
  },
  {
    title: 'Financial Services Registration',
    description: 'Registration services for financial institutions',
    links: [
      { name: 'NBFC Registration', href: '/corporate/nbfc-registration' },
      { name: 'Microfinance Company', href: '/corporate/microfinance-company-registration' },
      { name: 'Insurance Company', href: '/corporate/insurance-company-registration' },
      { name: 'Mutual Fund Company', href: '/corporate/mutual-fund-company-registration' },
      { name: 'Asset Reconstruction Company', href: '/corporate/asset-reconstruction-company-registration' },
      { name: 'Portfolio Manager Registration', href: '/corporate/portfolio-manager-registration' },
    ],
  },
  {
    title: 'FSSAI & Food Safety',
    description: 'Food Safety and Standards Authority of India licensing',
    links: [
      { name: 'FSSAI Certificate', href: '/corporate/fssai-certificate' },
      { name: 'FSSAI Modification', href: '/corporate/fssai-modification' },
      { name: 'FSSAI State License', href: '/corporate/fssai/fssai-state-license' },
      { name: 'FSSAI Central License', href: '/corporate/fssai/fssai-central-license' },
    ],
  },
  {
    title: 'Tax & GST Services',
    description: 'GST, income tax, and other tax-related services',
    links: [
      { name: 'GST Registration', href: '/corporate/gst-registration' },
      { name: 'GST Return', href: '/corporate/gst-return' },
      { name: 'Income Tax Return Filing', href: '/corporate/income-tax-return-filing' },
      { name: 'TDS Return', href: '/corporate/tds-return' },
      { name: 'Professional Tax Registration', href: '/corporate/professional-tax-registration' },
    ],
  },
  {
    title: 'Employee Compliance',
    description: 'PF, ESI, and employee-related compliance services',
    links: [
      { name: 'EPF Registration', href: '/corporate/epf-registration' },
      { name: 'ESIC Registration', href: '/corporate/esic-registration' },
      { name: 'PF-ESI Return', href: '/corporate/pf-esi-return' },
      { name: 'Shop & Establishment Act', href: '/corporate/shop-and-establishment-act-registration' },
    ],
  },
  {
    title: 'Business Returns & Compliance',
    description: 'Annual returns and compliance filing services',
    links: [
      { name: 'ROC Return', href: '/corporate/roc-return' },
      { name: 'MSME Return', href: '/corporate/msme-return' },
    ],
  },
  {
    title: 'Import-Export & Trade',
    description: 'Trade-related registration and licensing services',
    links: [
      { name: 'IEC Registration', href: '/corporate/iec-registration' },
      { name: 'APEDA Registration', href: '/corporate/apeda-registration' },
      { name: 'Spice Board Registration', href: '/corporate/spice-board-registration-consultant' },
      { name: 'Tea Board Registration', href: '/corporate/tea-board-registration' },
      { name: 'Coffee Board Registration', href: '/corporate/coffee-board-registration' },
      { name: 'Tobacco Board Registration', href: '/corporate/tobacco-board-registration-consultant' },
    ],
  },
  {
    title: 'Other Licenses & Registrations',
    description: 'Additional licensing and registration services',
    links: [
      { name: 'MSME Registration', href: '/corporate/msme-registration' },
      { name: 'ISO Certification', href: '/corporate/iso-certification' },
      { name: 'AYUSH License', href: '/corporate/ayush-license' },
      { name: 'NITI Aayog', href: '/corporate/niti-aayog' },
      { name: 'DSC Certificate', href: '/corporate/dsc-certificate' },
      { name: 'PAN Registration (Company)', href: '/corporate/pan-registration-company' },
      { name: 'PAN Registration (Individual)', href: '/corporate/pan-registration-individual' },
      { name: 'RERA Registration', href: '/corporate/rera-registration' },
      { name: 'PSARA License', href: '/corporate/psara-license-registration-consultant' },
      { name: 'Startup India Registration', href: '/corporate/startup-india-registration' },
      { name: 'Seed Funding', href: '/corporate/seed-funding' },
      { name: 'Water Report', href: '/corporate/water-report' },
    ],
  },
]

export default function SitemapPage() {
  // Calculate total links
  const totalLinks = sitemapData.reduce((acc, section) => acc + section.links.length, 0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              Complete Directory of All Pages & Services
            </p>
            <p className="text-blue-200">
              Browse our comprehensive list of {totalLinks}+ pages and services
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600">{sitemapData.length}</div>
                <div className="text-gray-600 text-sm">Categories</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-green-600">{totalLinks}</div>
                <div className="text-gray-600 text-sm">Total Pages</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600 text-sm">Corporate Services</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl font-bold text-orange-600">20+</div>
                <div className="text-gray-600 text-sm">Approval Services</div>
              </div>
            </div>

            {/* Sitemap Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sitemapData.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <h2 className="text-lg font-semibold text-white">
                      {section.title}
                    </h2>
                    <p className="text-blue-100 text-sm mt-1">
                      {section.description}
                    </p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-blue-500 group-hover:text-blue-600 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            <span className="text-sm">{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* XML Sitemap Link */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For Search Engines
              </h3>
              <p className="text-gray-600 mb-4">
                Access our XML sitemap for search engine crawlers and SEO tools
              </p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View XML Sitemap
              </a>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Can&apos;t Find What You&apos;re Looking For?
              </h3>
              <p className="text-blue-100 mb-6">
                Our team is here to help you with any compliance or registration service you need.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Contact Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
