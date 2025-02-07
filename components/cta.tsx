import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold">Your 10k Bootcamp Starts Now</h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          0 Risk; Pay when you earn at least 10k or 0 for 6 months
        </p>
        <Button size="lg" variant="secondary" className="mt-8 gap-2">
          Claim 6 Month No Payment <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="mt-4 text-sm text-primary-foreground/60">23 spots left this week!</p>
      </div>
    </section>
  )
}

