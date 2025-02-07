import { Hero } from "@/components/sections/hero"
import { Timeline } from "@/components/timeline"
import { Problem } from "@/components/sections/problem"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { ROICalculator } from "@/components/sections/roi-calculator"

export default function LandingPage() {
  return (
    <div className="relative">

      <Hero />
        <ROICalculator />
      <Timeline />
      <Problem />
    
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

