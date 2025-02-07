export function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">From Udemy Sufferer to 7-Figure CEO: Here's How</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Keep 80% Revenue",
              description: "vs. Udemy's 17.5% post-2025 fee cuts",
            },
            {
              title: "Your Brand, Your Rules",
              description: "Custom logos, menus, and student dashboards",
            },
            {
              title: "AI Does the Grunt Work",
              description: "Auto-grade assessments, predict dropouts",
            },
            {
              title: "Proven System",
              description: "Scaled to 1 Million/year using this exact system",
            },
          ].map((feature, i) => (
            <div key={i} className="rounded-lg bg-muted p-6 text-center">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

