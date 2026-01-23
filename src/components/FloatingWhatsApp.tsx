'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919266450125?text=Hi%2C%20I%20need%20help%20with%20compliance%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring Animation */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
      
      {/* Main Button */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-110 transition-all duration-300">
        <MessageCircle size={22} className="text-white sm:w-6 sm:h-6" />
      </div>
      
      {/* Tooltip on hover - hidden on mobile */}
      <div className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
        <div className="bg-slate-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
          Chat with us
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900" />
        </div>
      </div>
    </a>
  );
}
