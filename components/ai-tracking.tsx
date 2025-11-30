export default function AITracking() {
  return (
    <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/10 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-accent/30 to-secondary/20 rounded-3xl p-8 shadow-lg border border-accent/30 order-2 lg:order-1">
            <img
              src="/images/gemini-generated-image-72dbpn72dbpn72db.png"
              alt="Smart Sensors"
              className="w-full h-auto rounded-2xl scale-110 object-cover bg-card"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Smart Sensors for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smarter Workouts
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Muve's AI-powered sensors analyse every movement, providing real-time insights to track performance and
              optimize workouts
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Force - Measure strength output",
                "Balance Level - Track stability",
                "Velocity & Power - Measure speed and power",
                "Performance Analytics - Comprehensive insights",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r from-primary to-secondary text-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition shadow-md">
              Learn More About AI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
