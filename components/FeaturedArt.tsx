"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const artPieces = [
  {
    id: 1,
    name: "City Skyline",
    description: "A breathtaking cityscape that comes to life in shadows.",
    image:
      "https://d16kd6gzalkogb.cloudfront.net/magazine_images/Kumi-Yamashita-Profile-19941.jpg",
  },
  {
    id: 2,
    name: "Forest Whispers",
    description: "Experience the serenity of a forest scene in shadow form.",
    image:
      "https://images.saatchiart.com/saatchi/1027195/art/5831549/4901349-HFFLRRKA-7.jpg",
  },
  {
    id: 3,
    name: "Ocean Waves",
    description: "Bring the calming presence of ocean waves into your space.",
    image:
      "https://d16kd6gzalkogb.cloudfront.net/magazine_images/Kumi-Yamashita-Profile-19941.jpg",
  },
]

export default function FeaturedArt() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="bg-gradient-radial absolute inset-0 z-0 from-gray-900 to-black" />
      <h2 className="relative z-10 mb-12 text-center text-4xl font-bold">
        Featured Art Pieces
      </h2>
      <div className="relative z-10 mx-auto max-w-6xl">
        {artPieces.map((piece, index) => (
          <motion.div
            key={piece.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`mb-20 flex flex-col items-center md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={piece.image}
                  alt={piece.name}
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={`mt-8 w-full md:mt-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pl-8" : "md:pr-8"
              }`}
            >
              <h3 className="mb-4 text-3xl font-semibold">{piece.name}</h3>
              <p className="text-xl text-gray-300">{piece.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
