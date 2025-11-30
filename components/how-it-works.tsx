export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "LIFT",
      description: "Use Muve-enabled smart equipment. No wearables -- just start lifting",
    },
    {
      number: "2",
      title: "TRAIN",
      description: "Built-in sensors track your reps, velocity, range of motion along with real-time insights",
    },
    {
      number: "3",
      title: "TRACK",
      description: "Get instant performance insights in the Muve app.",
    },
    {
      number: "4",
      title: "IMPROVE",
      description: "Use data to adjust, optimize, and get stronger every session.",
    },
  ]

  const bgColors = [
    "from-primary/20 to-primary/5",
    "from-secondary/20 to-secondary/5",
    "from-accent/20 to-accent/5",
    "from-muted/20 to-muted/5",
  ]

  return (
    <section id="howItWorks" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">How it Works?</h2>
          <p className="text-lg text-muted-foreground">Four simple steps to smarter strength training</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${bgColors[idx % bgColors.length]} p-8 rounded-2xl border border-primary/20 shadow-sm hover:shadow-md transition`}
            >
              <div className="mb-6 rounded-xl overflow-hidden h-24 bg-gradient-to-br from-white/50 to-transparent flex items-center justify-center">
                <span className="text-5xl font-bold text-foreground/30">{step.number}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">{step.title}</h3>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
