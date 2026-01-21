'use client';

import Link from 'next/link';
import { FileText, MapPin, Mail, ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileText size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-300">Legal</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Terms &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Conditions
            </span>
          </h1>

          {/* Company Address */}
          <div className="flex items-start gap-3 text-gray-400">
            <MapPin size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              JR Compliance has the authority to control this site, from K8, Sector-3, Bawana Industrial Area, Delhi-110034 (India), and other Branch Offices.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-300 leading-relaxed m-0">
                While using our website and receiving our data, organizations, products, devices, and services you are acknowledging our Terms and Conditions. These Terms and Conditions governing the use of this Service and the agreement that operates between you and the company establishes the rights and obligations of all users regarding the use of the Service.
              </p>
            </div>

            {/* Agreement Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <div className="space-y-4 text-gray-400">
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms and Conditions which apply to all visitors, users, and others who access or use the Service.</p>
                <p>By accessing or using the Service you agree to be bound by these Terms and Conditions. If you disagree with any part of the Terms and Conditions then you may not access the Service.</p>
                <p>Moreover, by agreeing to our Terms and Conditions, you are representing that you are over the age of 18. However, if you are not, you are not permitted to avail of our Service.</p>
                <p>Additionally, your access to and use of the Service is also conditioned on the acceptance of and compliance with the Privacy Policy of the Company because our policies and procedures on the collection, use, and disclosure of your personal information while using our website informs you about your privacy rights and how the law protects you.</p>
                <p className="font-medium text-white">Please read Our Privacy Policy carefully before using Our Service.</p>
                <p>Consultant services are available to guide you through compliance processes as per your requirements.</p>
              </div>
            </div>

            {/* Accountable Use */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Accountable Use and Conduct</h2>
              <div className="space-y-4 text-gray-400">
                <p>By using our website, data, organizational items, resources, and devices you are directly or by indication agreeing to use these solely as authorized in the terms of the Users Agreement, appropriate laws, and regulations for most of the parts which recognize online use or rules.</p>
                <p>Our consultants ensure proper guidance for lawful and compliant use of services.</p>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Prohibited Activities</h2>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Use of any of our services other than the authorized purpose is prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Contributing to a program that disappoints or interferes with our Resources (including server and system) to which our resources are consolidated is restricted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>To use our registration services or to use part of your capacity resources, you are required to provide your personal information (email, contact address, identity proof, mobile number, etc). That&apos;s why it is requested to provide accurate information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Reproduction, copying, imitating, proposal, conversation, or exchange of our assets is prohibited. The user is responsible for each activity that has happened under his/her record. Moreover, you are also responsible for the classification of log-in credentials associated with any of your records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>You are solely responsible for any misfortune, results, and troubles which we might precisely or in an indirect way bring or suffer due to unauthorized workout led by you, as explained earlier, and might obtain illegal or mutual risk.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>We do not use, screen, pre-screen, or record any activity which is published by users on different open, focused websites such as online journal comments, blog entries, public entries, etc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>It is illegal to use any offensive, debilitating, harmful, tapping, degrading, false, obtrusive, racist, or covers any type of indicative, inappropriate, and explicit language.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Impersonating any individual or material, including employees or negotiators of JR Compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>We do not accept any obligation of any material published by you or third parties customers from our website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>We do not accept unauthorized use of our website, including a collection of usernames, email addresses of users for the purpose of sending unsolicited emails, creating users&apos; accounts, and obtaining users&apos; passwords by using automated means, and for pretentious activities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Use of the site for advertising or to offer sales/services is restricted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Unauthorized framing of or linking of the website is prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Using our support service or submission of inaccurate reports of false or abuse is prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>We do not accept the engagement of any individual in any automated use of the system, such as data mining, or using scripts to comment or message, robots, similar data gathering, and extraction tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Interfering, disrupting, or creating an undue burden on the website, networks, and other services associated with the website is restricted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Selling or transfer of your profile is prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Use of any information provided on the site to abuse, harass or harm other individuals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Use of the site/content in an effort to compete with us or to generate revenue or commercial interest is prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Attempt to bypass any measure of the site design to prohibit or restrict access to the site or its portion is restricted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>We do not accept deletion of any copyright or proprietary rights notice from content.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Copying or adapting site&apos;s software, including but not limited to Flash, JavaScript, HTML, PHP, and other codes.</span>
                </li>
              </ul>
            </div>

            {/* Task Completion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Completion of the Task</h2>
              <div className="space-y-4 text-gray-400">
                <p>Task completion timelines are completely estimated due to dependent externalities on the part of the government departments and third-party merchants such as payment gateways, CA, CS, etc.</p>
                <p>JR Compliance would not be responsible for any immediate, backhanded, coincidental, substantial, or model issues, which might be brought by you through the use of our Resources or as a side effect of any development, misfortune, violation, withdrawal, loss of access or downtown, to the appropriate limits of obligation laws that apply.</p>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="mb-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Refund and Cancellation Policy</h2>
              <div className="space-y-4 text-gray-400">
                <p>JR Compliance does not refund the payment which has been made to avail of our service neither we provide any discount exclusion in case of termination or non-execution of administration by us. However, there may be some cases where we may do refunds based on case to case basis for any refund-related queries please email us at <a href="mailto:admin@jrcompliance.com" className="text-cyan-400 hover:underline">admin@jrcompliance.com</a>.</p>
                <p>Moreover, in case of no satisfactory response by the clients, including non-submission of documents after on-boarding the project JR Compliance holds the complete authority to nullify the on-boarded project. However, if clients want to go forward with the project in future, they are liable to pay 50% of the amount of obtaining certification.</p>
                <p>Our consultants provide complete guidance during refund and cancellation queries.</p>
              </div>
            </div>

            {/* Third Party Links */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Links to Other Websites</h2>
              <div className="space-y-4 text-gray-400">
                <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
                <p>The Company has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.</p>
                <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
                <p>Our compliance consultants help evaluate third-party regulations and policies.</p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <div className="space-y-4 text-gray-400">
                <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                <p>Upon termination, Your right to use the Service will cease immediately. Moreover, you are prohibited to create or register yourself under your name, fake name, or borrowed name, including the name of a third party (even if you might act on the behalf of the third party).</p>
                <p>Consultants guide you to avoid violations that may lead to termination.</p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-400">
                <p>To the maximum extent permitted by applicable law, in no event shall the Company or its Directors, employees, or agents be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.</p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="text-gray-400 mb-4">You are agreeing to defend and indemnify, and hold us harmless from and against any loss, damage, liability, claim, or demand made by third parties, including reasonable attorneys fees and expenses arising directly or indirectly of:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Use of website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Infringement of Terms and Conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Any violation of your representations and warranties mentioned in these Terms and Conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Your breach of any rights of a third party including but not limited to intellectual property rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                  <span>Any harmful act towards other site users with whom you have connected through the site</span>
                </li>
              </ul>
            </div>

            {/* User Data */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">User Data</h2>
              <div className="space-y-4 text-gray-400">
                <p>We will maintain certain data which you transmit to the site and data relating to the site for the purpose of site management. However, we perform regular routine backups of your data and you are exclusively responsible for all the data transmission and activities which are undertaken by you.</p>
                <p>You are agreeing that we would not be responsible or held liable for any loss or corruption of any such data and hereby relinquish any right of legal action against us arising out of any loss or corruption of such data.</p>
                <p>The information submitted in Giveaway, Lucky draw, and Contest organized by JR Compliance would be treated as sole property of us and the provided data can be used in whatsoever manner. To be noted, the winner of Giveaway, Lucky draw, and Contest will be decided by JR Compliance and our decision will be considered as final, without any discrepancy and no legal action can be taken against us.</p>
              </div>
            </div>

            {/* License */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">The License of Your Uploaded Content</h2>
              <div className="space-y-4 text-gray-400">
                <p>By uploading any content or submitting any material to us, you are permitting us a perpetual, royalty-free, unaltered, completely paid, and non-exclusive right to copy, reproduce, modify, publish, sell, resell, retitle, archive, publicly display/perform, translate, transmit, extract (completely or partially), adapt, translate, and create derivative work.</p>
                <p>It applies to the use of content or material in any form, media, technology, contemporary known and subsequently developed, including our use of your name, company name, franchise name, as applicable along with any trademarks, service marks, trade names, logos, personal or commercial images you will provide.</p>
                <p>Additionally, we do not own any of Your Contributions. Thus, you have complete ownership of your Contributions, intellectual proprietary rights, and other proprietary rights. You are responsible for your Contributions to the site and you have exclusively exonerated us from all responsibilities and any legal action against us from the use of your Contribution.</p>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Modifications and Interruptions</h2>
              <div className="space-y-4 text-gray-400">
                <p>JR Compliance has the exclusive right to modify, amend, expire or remove any of the contents mentioned on the site including but not limited to any offers or discounts provided. The Company has the sole discretion to modify or discontinue complete or a part of its website without any prior reason and notice to its users and beneficiaries.</p>
                <p>Moreover, at times when our website is under maintenance due to some technical modifications which may include software or hardware updates, there might be a situation where our website may not be functioning properly causing delay, interruptions, errors, etc. and may not be available round the clock.</p>
                <p>However, any offer given to you on behalf of any third party, JR Compliance has the authority to expire or remove such offers or benefits at any given time and without any prior notice. In case there is non-completion of the offer by the third party, JR Compliance will not be responsible to any user to provide such benefits or offers, it is solely the responsibility of the third party to complete such offers or benefits provided.</p>
              </div>
            </div>

            {/* Corrections */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Corrections</h2>
              <p className="text-gray-400">This site might include typographic errors, inaccuracies, or omissions, including pricing, descriptions, and other information. Thus, we reserve the right to correct errors, omissions, or inaccuracies, including modifying or updating the information regardless of time, without prior notice.</p>
            </div>

            {/* Electronic Communications */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Electronic Communications, Transactions, and Signature</h2>
              <div className="space-y-4 text-gray-400">
                <p>By visiting the site, sending us emails, or completing online forms, you are agreeing to constitute an online communication with us, including permitting to receive communications electronically. Moreover, you are agreeing that all the agreements, notices, disclosures, and other communications that we provide you through email are and on the website, satisfy that requirement that such communication is in writing.</p>
                <p className="font-semibold text-white uppercase">HEREBY YOU ARE AGREEING TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR THROUGH THE SITE.</p>
                <p>Moreover, you suspend any right or requirement under any laws, regulations, ordinance, statutes, and any law under any jurisdiction for the submission, retention, delivery, or signature of non-electronic records, or payments, or to grant credits by any means, except electronic.</p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-400">The laws of the Country, excluding its conflicts of law rules, shall govern this Term and your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
            </div>

            {/* Disputes */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Disputes Resolution</h2>
              <p className="text-gray-400 mb-4">If you have any concern or dispute about the Service, you are agreeing to first try to resolve the dispute informally by contacting the Company.</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gray-400 flex items-center gap-2">
                  <Mail size={18} className="text-cyan-400" />
                  Contact us at: <a href="mailto:support@jrcompliance.com" className="text-cyan-400 hover:underline">support@jrcompliance.com</a>
                </p>
              </div>
            </div>

            {/* Overseeing Laws */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Overseeing Laws</h2>
              <p className="text-gray-400">All the information or content on our website is based on Indian laws and regulations. Moreover, we understand that the laws and regulations of each state and country are different. Therefore, you are agreeing to the rules and regulations of India.</p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
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
