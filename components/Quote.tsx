// components/Quote.tsx
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface QuoteProps {
  text: string
  x: number // percentage (0-100)
  y: number // percentage (0-100)
  isVisible: boolean
}

const Quote: React.FC<QuoteProps> = ({ text, x, y, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: isHovered ? "brightness(100%)" : "brightness(70%)",
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-auto absolute cursor-default"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -50%)",
            color: "#000000", // Pitch black text
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="max-w-xs break-words text-lg font-medium md:max-w-md">
            {text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Quote
