export function Problem() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">Why Udemy, Skillshare, Coursera are Costing You 250k/Year</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-lg bg-background p-6 shadow-lg">
            <h3 className="text-xl font-semibold">On Traditional Platforms</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                Selling 1,000 courses at $100 earns you $100k… but these platforms take $83k
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                No brand control: You're the 'product' not a leader
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                Managing 1,000 students = 3 AM support tickets
              </li>
            </ul>
          </div>
          <div className="space-y-6 rounded-lg bg-background p-6 shadow-lg">
            <h3 className="text-xl font-semibold">With Bootcamps Hub</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500">●</span>
                Keep 80% of every $10k fee
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">●</span>
                Your brand, your rules: Custom everything
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">●</span>
                AI handles 80% of support and admin work
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

