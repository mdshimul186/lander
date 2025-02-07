import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  description: string
  price: string
  features: string[]
  popular?: boolean
}

export function PricingCard({ title, description, price, features, popular }: PricingCardProps) {
  return (
    <Card className={`relative ${popular ? "border-primary shadow-lg" : ""}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
          Most Popular
        </span>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-center">
          <span className="text-4xl font-bold">{price}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}

