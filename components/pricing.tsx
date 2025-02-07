import { PricingCard } from "@/components/pricing-card"

export function Pricing() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">Pay 0 for 6 Months. Only Pay When You Earn 10k/Student.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <PricingCard
            title="Starter"
            description="Perfect for getting started"
            price="Free for 6 months"
            features={["6 months free", "AI grading", "Basic support", "Pay when you earn"]}
          />
          <PricingCard
            title="Pro"
            description="For serious course creators"
            price="30% revenue share"
            features={["Everything in Starter", "Priority support", "Advanced analytics", "Custom domain"]}
            popular
          />
        </div>
      </div>
    </section>
  )
}

