'use client'

import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, name: "Sarah L.", quote: "DIYshadows transformed my living room. The kit was easy to use and the result is stunning!" },
  { id: 2, name: "Mike R.", quote: "I never thought I could create art like this. The instructions were clear and the outcome is amazing." },
  { id: 3, name: "Emily T.", quote: "These shadow art pieces make for perfect gifts. Everyone I've given one to absolutely loves it!" },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 bg-black p-6 rounded-lg"
          >
            <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
            <p className="text-right font-semibold">- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

