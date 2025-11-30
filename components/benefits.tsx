import { TrendingUp, Clock, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    stat: "+47%",
    label: "Avg Strength Gain",
    desc: "In 12 weeks with AI coaching",
  },
  {
    icon: Clock,
    stat: "40%",
    label: "Time Savings",
    desc: "Optimized workouts, zero wasted sets",
  },
  {
    icon: Users,
    stat: "50K+",
    label: "Active Athletes",
    desc: "Trust MUVE for their training",
  },
  {
    icon: Zap,
    stat: "95%",
    label: "Form Accuracy",
    desc: "Detected and corrected by AI",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Results That Speak for Themselves</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            const bgColors = [
              "from-primary/20 to-primary/5",
              "from-secondary/20 to-secondary/5",
              "from-accent/20 to-accent/5",
              "from-muted/20 to-muted/5",
            ]
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${bgColors[idx % bgColors.length]} p-8 rounded-2xl border border-primary/20 shadow-sm text-center hover:shadow-md transition`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-foreground" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{benefit.stat}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{benefit.label}</div>
                <p className="text-xs text-muted-foreground">{benefit.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
