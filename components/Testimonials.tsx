"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    quote:
      "DIYshadows transformed my living room. The kit was easy to use and the result is stunning!",
  },
  {
    id: 2,
    name: "Mike R.",
    quote:
      "I never thought I could create art like this. The instructions were clear and the outcome is amazing.",
  },
  {
    id: 3,
    name: "Emily T.",
    quote:
      "These shadow art pieces make for perfect gifts. Everyone I've given one to absolutely loves it!",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-900 px-4 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        What Our Customers Say
      </h2>
      <div className="mx-auto max-w-4xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 rounded-lg bg-black p-6"
          >
            <p className="mb-4 text-xl italic">
              &ldquo;{testimonial.quote}&ldquo;
            </p>
            <p className="text-right font-semibold">- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
