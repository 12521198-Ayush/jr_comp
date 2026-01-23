'use client';

import { ExternalLink } from 'lucide-react';

const mediaFeatures = [
  {
    name: 'Economic Times',
    logo: 'https://m.economictimes.com/photo/msid-74726259,quality-100/et-logo.jpg',
    url: 'https://m.economictimes.com/industry/cons-products/fmcg/regulatory-delays-cripple-indian-cos-certifications-disrupt-fmcg-electronics-sectors-performance/amp_articleshow/126258894.cms',
  },
  {
    name: 'Business World',
    logo: 'https://static.businessworld.in/bw-main-logo.png',
    url: 'https://www.businessworld.in/article/survey-flags-red-tape-as-key-risk-to-indias-manufacturing-momentum-585429',
  },
  {
    name: 'Communications Today',
    logo: 'https://www.communicationstoday.co.in/wp-content/uploads/2020/10/glkgfdljkgkdf.png',
    url: 'https://www.communicationstoday.co.in/dot-revamps-security-certification-for-fibre-broadband-devices/',
  },
  {
    name: 'Entrepreneur India',
    logo: 'https://www.entrepreneurindia.com/insight-new/images/logo.svg',
    url: 'https://www.entrepreneurindia.com/blog/en/article/how-dots-streamlining-of-indias-efforts-to-simplify-security-testing-extend-the-pro-tem-certification-scheme-and-others-could-boost-indigenous-telecom-equipment-manufacturing-could-spur-local-telecom-growth.58714',
  },
];

export default function AsSeenOn() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-amber-400">📰</span>
            <span className="text-sm font-medium text-gray-300">Media Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            As Seen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">On</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Featured in leading publications for our expertise in regulatory compliance
          </p>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {mediaFeatures.map((media) => (
            <a
              key={media.name}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
            >
              {/* Logo */}
              <div className="h-10 sm:h-12 flex items-center justify-center mb-3">
                <img 
                  src={media.logo} 
                  alt={media.name}
                  className="h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[160px] object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              {/* Link indicator */}
              <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                <span>Read article</span>
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Recognized by industry experts for simplifying India&apos;s regulatory landscape
          </p>
        </div>
      </div>
    </section>
  );
}
