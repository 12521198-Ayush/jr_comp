'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kate Tran',
    role: 'Business Partner',
    content: 'We have worked with JR Compliance for 2 years and with their help, we get the BIS license successfully. Everyone in their team is always ready to assist and provide expert advice to solve any problem we face in the certification process. Highly recommended!',
    rating: 5,
  },
  {
    name: 'PN Dhawanjewar',
    role: 'Client',
    content: 'We have outsourced the entire BIS certification responsibility of our panels to JR compliance since 2017. They are very consistent in managing the entire process. Thanks to JR Compliance.',
    rating: 5,
  },
  {
    name: 'Kate Tran',
    role: 'Long-term Partner',
    content: 'We have been using JR Compliance services since last 3 years on various BIS related registration & testing. Their staff is well trained, professional and capable of carrying out the job.',
    rating: 5,
  },
  {
    name: 'Atish Bihani',
    role: 'Client',
    content: 'Extremely professional company and very prompt service. I am associated with them from last 4 to 5 years. I am extremely happy and satisfied with the service given by them. Best of luck JR Compliance!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Star size={18} className="text-blue-600" fill="currentColor" />
            <span className="text-sm font-semibold text-blue-700">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Quote size={32} className="text-blue-200 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
