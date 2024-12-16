// components/Hero.tsx
"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import Quote from "./Quote"

// Ensure Quote is correctly imported

interface QuoteData {
  id: number
  text: string
  x: number // percentage (0-100)
  y: number // percentage (0-100)
}

const quotesList: string[] = [
  "Where light meets shadow, art begins",
  "Discover the magic in darkness",
  "Shadows dance, stories unfold",
  "Light reveals hidden beauty",
  "Crafting shadows into dreams",
  "Embrace the interplay of light and darkness",
  "Unveil the secrets within shadows",
  "Illuminate your creativity with shadows",
  "Shadow art: where mystery meets mastery",
  "Transform light into captivating shadows",
  "Art in every shade",
  "Black and white symphony",
  "Darkness paints the unseen",
  "Silent shadows speak",
  "Mystery in monochrome",
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [lightRadius, setLightRadius] = useState<number>(400)
  const [quotes, setQuotes] = useState<QuoteData[]>([])
  const heroRef = useRef<HTMLDivElement>(null)
  const isMobile = useRef(false) // To track if the device is mobile

  // Function to generate random positions ensuring no overlap
  const generatePositions = (): QuoteData[] => {
    const positions: QuoteData[] = []
    const minDistance = 15 // minimum distance in percentage to prevent overlap

    quotesList.forEach((text, index) => {
      let attempts = 0
      let x: number, y: number
      let overlapping = false

      do {
        x = Math.random() * 80 + 10 // 10% to 90%
        y = Math.random() * 60 + 20 // 20% to 80%

        overlapping = positions.some((q) => {
          const dx = q.x - x
          const dy = q.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          return distance < minDistance
        })

        attempts++
        if (attempts > 100) break // prevent infinite loop
      } while (overlapping)

      positions.push({
        id: index,
        text,
        x,
        y,
      })
    })

    return positions
  }

  // Assign positions on component mount
  useEffect(() => {
    const initialQuotes = generatePositions()
    setQuotes(initialQuotes)
  }, [])

  // Detect if the device is mobile and adjust light radius
  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth < 768) {
        // mobile breakpoint
        isMobile.current = true
        setLightRadius(200)
      } else {
        isMobile.current = false
        setLightRadius(400)
      }
    }

    checkIsMobile()

    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  // Handle Mouse Movement (skip on mobile)
  useEffect(() => {
    if (isMobile.current) return // Disable mouse events on mobile

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      heroElement.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
        heroElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={heroRef}
        className="relative flex h-screen w-full flex-col overflow-hidden bg-gray-900"
      >
        {/* Light Effect Layer */}
        {!isMobile.current && (
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-300"
            style={{
              background: `radial-gradient(circle ${lightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)`,
              opacity: mousePosition.x > 0 ? 1 : 0,
            }}
          />
        )}

        {/* Floating Quote Layer */}
        {quotes.map((quote) => {
          // Calculate distance between cursor and quote
          const heroWidth = heroRef.current?.clientWidth || 1
          const heroHeight = heroRef.current?.clientHeight || 1
          const quoteX = (quote.x / 100) * heroWidth
          const quoteY = (quote.y / 100) * heroHeight
          const distance = Math.hypot(
            mousePosition.x - quoteX,
            mousePosition.y - quoteY
          )

          // Define a radius within which the quote should appear
          const quoteRadius = 150 // pixels

          const isVisible = distance < quoteRadius

          return (
            <Quote
              key={quote.id}
              text={quote.text}
              x={quote.x}
              y={quote.y}
              isVisible={isVisible}
            />
          )
        })}

        {/* Main Content Layer */}
        <div className="z-10 flex grow flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="animate-gradientMove bg-gradient-to-r from-white to-gray-500 bg-clip-text bg-[200%_200%] text-5xl font-bold text-transparent md:text-8xl"
          >
            <div>
              <div>DYI</div>
              <div>Shadows</div>
            </div>
          </motion.h1>
        </div>

        {/* "Create Your Own Shadow Masterpiece" and "Shop Now" at the Bottom */}
        <div className="mb-20 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 max-w-sm text-center text-xl text-white md:max-w-2xl md:text-2xl"
          >
            Create Your Own Shadow Masterpiece
          </motion.p>

          {/* Subtle "Shop Now" Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: (() => {
                if (isMobile.current) return 0
                const heroWidth = heroRef.current?.clientWidth || 0
                const heroHeight = heroRef.current?.clientHeight || 0
                const buttonX = heroWidth / 2
                const buttonY = heroHeight * 0.9 // 90% height
                const distance = Math.hypot(
                  mousePosition.x - buttonX,
                  mousePosition.y - buttonY
                )
                return distance < 200 ? 1 : 0
              })(),
            }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer rounded-lg bg-gray-800 px-6 py-3 font-semibold text-white shadow-lg"
            onClick={() => {
              window.location.href = "/shop"
            }}
            aria-label="Shop Now"
          >
            Shop Now
          </motion.button>
        </div>
      </div>

      {/* Featured Art Section */}
      <div className="w-full bg-gray-900/80 py-12">
        <h2 className="mb-8 text-center text-3xl text-white">Featured Art</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-64 w-full">
              <Image
                src={
                  "https://d16kd6gzalkogb.cloudfront.net/magazine_images/Kumi-Yamashita-Profile-19941.jpg"
                }
                alt={`Featured Art ${i}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
