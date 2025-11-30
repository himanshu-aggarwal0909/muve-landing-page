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
              className="p-6 rounded-2xl border border-primary/20 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 rounded-xl overflow-hidden h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/40">{step.number}</span>
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-3">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
