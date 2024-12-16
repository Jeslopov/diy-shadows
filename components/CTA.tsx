"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="bg-gradient-radial absolute inset-0 z-0 from-gray-900 to-black" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h2 className="mb-6 text-4xl font-bold">
          Ready to Create Your Shadow Masterpiece?
        </h2>
        <p className="mb-8 text-xl">
          Join thousands of satisfied customers and bring the magic of shadow
          art into your home.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shadow-pulse rounded-full bg-white px-8 py-3 text-xl font-bold text-black"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  )
}
