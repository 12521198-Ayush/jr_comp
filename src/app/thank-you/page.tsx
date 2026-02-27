'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  MessageCircle,
  Home,
  FileCheck,
} from 'lucide-react';

// Confetti particle component
function ConfettiParticles() {
  const colors = ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: '-5%',
          }}
          initial={{ y: -20, opacity: 1, rotate: 0, scale: Math.random() * 0.5 + 0.5 }}
          animate={{
            y: ['0vh', `${60 + Math.random() * 40}vh`],
            x: [0, (Math.random() - 0.5) * 200],
            opacity: [1, 1, 0],
            rotate: [0, Math.random() * 720 - 360],
          }}
          transition={{
            duration: Math.random() * 2 + 2.5,
            delay: Math.random() * 1.5,
            ease: 'easeOut',
          }}
        />
      ))}
      {/* Rectangle confetti */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`rect-${i}`}
          className="absolute rounded-sm"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: '-5%',
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: ['0vh', `${50 + Math.random() * 50}vh`],
            x: [0, (Math.random() - 0.5) * 150],
            opacity: [1, 1, 0],
            rotate: [0, Math.random() * 1080 - 540],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            delay: Math.random() * 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

// Animated background orbs
function BackgroundOrbs() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
      />
    </>
  );
}

// Success checkmark animation
function AnimatedCheckmark() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto">
      {/* Outer ring pulse */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-emerald-400/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.6, 1.6], opacity: [0.3, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />

      {/* Glow behind */}
      <motion.div
        className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Main circle */}
      <motion.div
        className="relative w-full h-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
      >
        {/* Checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 300, damping: 15 }}
        >
          <CheckCircle size={48} className="text-white sm:w-14 sm:h-14" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      {/* Sparkle accents */}
      {[
        { top: '0%', left: '80%', delay: 0.8 },
        { top: '75%', left: '95%', delay: 1.0 },
        { top: '10%', left: '5%', delay: 1.2 },
        { top: '85%', left: '10%', delay: 0.9 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: pos.top, left: pos.left }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ delay: pos.delay, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Sparkles size={16} className="text-amber-400" />
        </motion.div>
      ))}
    </div>
  );
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get('service') || 'Our Services';
  const userName = searchParams.get('name') || '';
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      icon: Phone,
      title: 'Expert Will Call You',
      description: 'Our specialist will reach out within 30 minutes during business hours.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCheck,
      title: 'Requirement Analysis',
      description: 'We\'ll understand your needs and prepare a custom compliance plan.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Get Certified',
      description: 'Hassle-free process with end-to-end support until certification.',
      gradient: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center py-20 px-4">
      {/* Background */}
      <BackgroundOrbs />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Confetti */}
      <AnimatePresence>{showConfetti && <ConfettiParticles />}</AnimatePresence>

      <div className="relative max-w-3xl mx-auto w-full">
        {/* Main Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500" />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]" />

          <div className="relative px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
            {/* Checkmark */}
            <AnimatedCheckmark />

            {/* Heading */}
            <motion.div
              className="text-center mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Thank You{userName ? `, ${userName}` : ''}! 🎉
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">
                Your request for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-semibold">
                  {serviceName}
                </span>{' '}
                has been received.
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                Our compliance expert will connect with you shortly.
              </p>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              className="mt-10 sm:mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h2 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                What Happens Next
              </h2>
              <div className="grid gap-4 sm:gap-5">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
                    className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                  >
                    {/* Step number + icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon size={22} className="text-white" />
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-cyan-400">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-blue-500/[0.06] to-cyan-500/[0.06] border border-blue-500/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <p className="text-center text-sm text-gray-400 mb-4">
                Need immediate assistance? Reach us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <a
                  href="tel:1800121410410"
                  className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone size={16} />
                  <span>1800-121-410-410</span>
                  <span className="text-xs text-gray-500">(Toll Free)</span>
                </a>
                <span className="hidden sm:block w-px h-4 bg-white/10" />
                <a
                  href="mailto:support@jrcompliance.com"
                  className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail size={16} />
                  <span>support@jrcompliance.com</span>
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Link
                href="/"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] hover:bg-right text-white rounded-xl font-semibold text-sm transition-all duration-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Home size={18} />
                <span>Back to Home</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919266450125"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <span className="flex items-center gap-1">
                <Star size={12} className="text-amber-400 fill-amber-400" />
                4.9 Google Rating
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1">
                <Shield size={12} className="text-cyan-400" />
                5000+ Certifications
              </span>
              <span className="w-px h-3 bg-white/10 hidden sm:block" />
              <span className="hidden sm:flex items-center gap-1">
                <Clock size={12} className="text-emerald-400" />
                10+ Years
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
          <div className="w-10 h-10 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
