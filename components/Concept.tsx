'use client'

import { motion } from 'framer-motion'

export default function Concept() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Bring Shadows to Life</h2>
        <p className="text-xl">
          DIYshadows offers unique kits that allow you to create stunning shadow art pieces. 
          Each kit comes with a canvas, lights, and precisely cut blocks. 
          Follow our step-by-step instructions to assemble your very own shadow masterpiece.
        </p>
      </motion.div>
    </section>
  )
}

