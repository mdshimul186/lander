import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <img src={image || "/placeholder.svg"} alt={author} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-muted-foreground">{quote}</blockquote>
      </CardContent>
    </Card>
  )
}

