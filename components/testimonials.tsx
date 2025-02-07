import { TestimonialCard } from "@/components/testimonial-card"

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">From 63% Revenue Cut to 300k in 6 Months</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <TestimonialCard
            quote="I made 120k/year on Udemy. With Bootcamps Hub, I launched a 10k DevOps bootcamp—now I earn 300k with 30 students. Best part? I work 20 hours/week."
            author="Sarah L."
            role="Ex-Udemy Instructor"
            image="/placeholder.svg"
          />
          <TestimonialCard
            quote="No more herding 1,000 students. My 10k AI bootcamp sells out in days. Bootcamps Hub's AI tools cut my admin time by 70%."
            author="Mark R."
            role="AI Career Coach"
            image="/placeholder.svg"
          />
        </div>
      </div>
    </section>
  )
}

