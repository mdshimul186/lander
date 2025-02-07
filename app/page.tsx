import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ROICalculator } from "@/components/roi-calculator"

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

