import { Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/muve_logo_blacck.png"
                alt="MUVE by One Health Balance"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Smart strength training powered by AI for every athlete.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#howItWorks" className="text-muted-foreground hover:text-foreground transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#ai" className="text-muted-foreground hover:text-foreground transition">
                  AI Tracking
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">© 2025 MUVE by One Health Balance. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@muve.com" className="text-muted-foreground hover:text-foreground transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
