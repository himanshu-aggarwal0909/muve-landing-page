"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-foreground">MUVE</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground transition text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="#howItWorks"
              className="text-muted-foreground hover:text-foreground transition text-sm font-medium"
            >
              How It Works
            </Link>
            <Link href="#ai" className="text-muted-foreground hover:text-foreground transition text-sm font-medium">
              AI Tracking
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition text-sm font-medium"
            >
              Pricing
            </Link>
            <button className="bg-gradient-to-r from-primary to-secondary text-foreground px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition shadow-md">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/20">
            <Link href="#features" className="block py-2 text-muted-foreground text-sm font-medium">
              Features
            </Link>
            <Link href="#howItWorks" className="block py-2 text-muted-foreground text-sm font-medium">
              How It Works
            </Link>
            <Link href="#ai" className="block py-2 text-muted-foreground text-sm font-medium">
              AI Tracking
            </Link>
            <Link href="#pricing" className="block py-2 text-muted-foreground text-sm font-medium">
              Pricing
            </Link>
            <button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-foreground px-6 py-2 rounded-full text-sm font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
