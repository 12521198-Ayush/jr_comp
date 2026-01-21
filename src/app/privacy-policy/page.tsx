'use client';

import Link from 'next/link';
import { Shield, ArrowLeft, Mail, Lock, Cookie, Eye, Users, FileText, Baby } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-300">Your Privacy Matters</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Policy
            </span>
          </h1>

          {/* Intro */}
          <p className="text-lg text-gray-400 leading-relaxed">
            At JR Compliance, accessible from <a href="https://www.jrcompliance.com/" className="text-emerald-400 hover:underline">https://www.jrcompliance.com/</a>, one of our main priorities is the privacy of our visitors.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction Box */}
            <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-300 leading-relaxed m-0">
                This Privacy Policy document contains types of information that is collected and recorded by JR Compliance and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
            </div>

            {/* Scope */}
            <div className="mb-10">
              <p className="text-gray-400">
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in JR Compliance. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </div>

            {/* Consent */}
            <div className="mb-10 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Lock size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">Consent</h2>
              </div>
              <p className="text-gray-300 m-0">
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Eye size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">How We Use Your Information</h2>
              </div>
              <p className="text-gray-400 mb-4">We use the information we collect in various ways, including to:</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Provide, operate, and maintain our website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Improve, personalize, and expand our website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Understand and analyze how you use our website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Develop new products, services, features, and functionality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Send you emails.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Find and prevent fraud.</span>
                </li>
              </ul>
            </div>

            {/* Log Files */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Log Files</h2>
              <p className="text-gray-400">
                JR Compliance follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Cookie size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">Cookies and Web Beacons</h2>
              </div>
              <p className="text-gray-400">
                Like any other website, JR Compliance uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
              </p>
            </div>

            {/* Advertising Partners */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Advertising Partners</h2>
              <p className="text-gray-400 mb-4">
                Some of advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gray-400 m-0">
                  <strong className="text-white">Google:</strong>{' '}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                    https://policies.google.com/technologies/ads
                  </a>
                </p>
              </div>
            </div>

            {/* Advertising Partners Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Advertising Partners Privacy Policies</h2>
              <div className="space-y-4 text-gray-400">
                <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on JR Compliance, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                <p className="font-medium text-amber-400">Note that JR Compliance has no access to or control over these cookies that are used by third-party advertisers.</p>
              </div>
            </div>

            {/* Third Party Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Third Party Privacy Policies</h2>
              <div className="space-y-4 text-gray-400">
                <p>JR Compliance&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-400 mb-4">You have the right to:</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Request that a business delete any personal data about the consumer that a business has collected.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</span>
                </li>
              </ul>
              <p className="text-gray-400 mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
            </div>

            {/* GDPR */}
            <div className="mb-10 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">GDPR Data Protection Rights</h2>
              </div>
              <p className="text-gray-300 mb-4">We would like to make sure you are fully aware of all of your data protection rights. As per the Data Protection Laws and Regulation in India, below-mentioned are the individual rights in regard to processing of their personal information:</p>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-white">The right to access data or copies</strong> – You have the right to request copies of your personal data through a written consent. However, we may charge you a small fee for this service.
                </li>
                <li>
                  <strong className="text-white">The right to error rectification</strong> – You have the right to seek corrections or amendments if you believe any information is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                </li>
                <li>
                  <strong className="text-white">The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.
                </li>
                <li>
                  <strong className="text-white">The right to withdraw consent</strong> – You have the right to withdraw consent from corporate body at any point of time through a written notice.
                </li>
                <li>
                  <strong className="text-white">The right to complain to appropriate data protection authorities</strong> – You have the right to register your complaints with &quot;Grievance Officer.&quot;
                </li>
              </ul>
              <p className="text-gray-300 mt-4 mb-0">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
            </div>

            {/* Children's Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <Baby size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">Children&apos;s Information</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                <p>JR Compliance does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-400" />
                <a href="mailto:support@jrcompliance.com" className="text-emerald-400 hover:underline">support@jrcompliance.com</a>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
