"use client"

import { getImagePath } from "@/lib/utils"

export default function Features() {
  const appFeatures = [
    {
      image: getImagePath("/images/ai-generated-workout-plan.png"),
      title: "Hyper Personalized Workout Plan Creation",
      description: "AI powered Plan Generation",
    },
    {
      image: getImagePath("/images/rep-set-tracking.png"),
      title: "Real Time Workout Set and Rep Tracking",
      description: "Tracks rep counts, rep velocity and more",
    },
    {
      image: getImagePath("/images/workout-summary.png"),
      title: "Post Workout Detailed Analysis",
      description: "Complete session insights and performance breakdown",
    },
    {
      image: getImagePath("/images/exercise-details-n-stats.png"),
      title: "Track PR and Performance for each exercise",
      description: "Monitor personal records and progress over time",
    },
    {
      image: getImagePath("/images/health-metric-tracking.png"),
      title: "Track Health Metrics",
      description: "Monitor vital stats, recovery metrics, and wellness data",
    },
    {
      image: getImagePath("/images/diy-workout.png"),
      title: "DIY your workout plan",
      description: "Design your own workout as per your fitness goal",
    },
  ]

  return (
    <section id="features" className="py-24 px-0 bg-white w-screen relative left-1/2 -translate-x-1/2">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Everything You Need for Smarter Training
          </h2>
          <p className="text-xl text-muted-foreground">AI Powered Fitness Experience</p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="flex gap-5 px-6 min-w-min justify-center">
            {appFeatures.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center flex-shrink-0">
                <div className="text-center w-56 mb-6">
                  <h3 className="font-bold text-base text-foreground mb-2 break-words leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug break-words">{feature.description}</p>
                </div>
                <div className="w-48 h-96 rounded-3xl border-[0.5px] border-black bg-black p-0.5 shadow-lg flex-shrink-0">
                  <img
                    src={feature.image || getImagePath("/placeholder.svg")}
                    alt={feature.title}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
