import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 border border-primary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
          Ready to Transform Your Training?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of athletes using MUVE to reach their strength goals faster and smarter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 shadow-md">
            Start Your Free Trial <ArrowRight size={20} />
          </button>
          <button className="bg-white/80 border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white transition backdrop-blur-sm">
            Schedule Demo
          </button>
        </div>

        <p className="text-muted-foreground text-sm mt-8">No credit card needed. Get instant access to all features.</p>
      </div>
    </section>
  )
}
