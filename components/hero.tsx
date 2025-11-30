import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-full border border-primary/40">
          <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
            MUVE by One Health Balance
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Intelligent Fitness,{" "}
          <span className="bg-gradient-to-r from-primary via-secondary via-accent via-secondary to-primary bg-clip-text text-transparent" style={{ filter: 'brightness(0.88)' }}>
            Smarter Workouts
          </span>
          <br />
          <span className="text-primary">Stronger You</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          AI-powered personalized workouts with real-time performance analysis.
          <br />
          Smart sensors track every rep, adapting to your unique strength goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-primary to-secondary text-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg transition shadow-md flex items-center justify-center gap-2">
            Move with Muve <ArrowRight size={20} />
          </button>
          
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
            alt="MUVE Intelligent Fitness Platform"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
