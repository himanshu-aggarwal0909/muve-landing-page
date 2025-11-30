import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import AITracking from "@/components/ai-tracking"
import Benefits from "@/components/benefits"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <AITracking />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
