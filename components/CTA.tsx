'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 to-black z-0" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Create Your Shadow Masterpiece?</h2>
        <p className="text-xl mb-8">
          Join thousands of satisfied customers and bring the magic of shadow art into your home.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black font-bold py-3 px-8 rounded-full text-xl shadow-pulse"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  )
}

