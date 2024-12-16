import CTA from "@/components/CTA"
import Concept from "@/components/Concept"
import FeaturedArt from "@/components/FeaturedArt"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <section className="bg-black text-white relative w-screen">
      <Hero />
      <Concept />
      <FeaturedArt />
      <Testimonials />
      <CTA />
    </section>
  )
}
