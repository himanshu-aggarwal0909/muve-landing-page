import { getImagePath } from "@/lib/utils"

export default function AITracking() {
  return (
    <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/10 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/20">
              <div className="overflow-hidden" style={{ maxHeight: '98%' }}>
                <img
                  src={getImagePath("/images/Gemini_Generated_Image_8r53s08r53s08r53.png")}
                  alt="Smart Sensors"
                  className="w-full h-auto object-cover"
                  style={{ objectPosition: 'center top', transform: 'scale(1.05)', transformOrigin: 'center top' }}
                />
              </div>
            </div>
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

            <ul className="space-y-5 mb-8">
              {[
                {
                  title: "Provides Optimal Workout Score",
                  subtitle: null,
                },
                {
                  title: "Time under tension",
                  subtitle: "Total muscle work time",
                },
                {
                  title: "Velocity",
                  subtitle: "Measure each rep and set for optimal velocity",
                },
                {
                  title: "Performance analytics",
                  subtitle: "Comprehensive insights",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">→</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-foreground font-semibold text-lg">{item.title}</div>
                    {item.subtitle && (
                      <div className="text-muted-foreground text-sm mt-1">{item.subtitle}</div>
                    )}
                  </div>
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
