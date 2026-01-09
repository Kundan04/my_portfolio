"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] overflow-x-hidden">
      {/* Background with theme-aware colors */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, var(--theme-bg), var(--theme-bg-secondary), var(--theme-bg))`
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(var(--theme-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--theme-primary) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Glow orbs - theme aware */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: `color-mix(in srgb, var(--theme-primary) 10%, transparent)` }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: `color-mix(in srgb, var(--theme-secondary) 10%, transparent)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: `color-mix(in srgb, var(--theme-accent) 5%, transparent)` }}
        />
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <section id="home" className="min-h-screen pt-20">
        <Hero setActiveSection={setActiveSection} />
      </section>

      <section id="about" className="min-h-screen py-20 px-4 md:px-6">
        <About />
      </section>

      <section id="projects" className="min-h-screen py-20 px-4 md:px-6">
        <Projects />
      </section>

      <section id="experience" className="min-h-screen py-20 px-4 md:px-6">
        <Experience />
      </section>

      <section id="contact" className="min-h-screen py-20 px-4 md:px-6">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--theme-border)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-[var(--theme-text-dim)]">
            <span className="text-[var(--theme-primary)]">{">"}</span> Built with Next.js, Tailwind & {"<passion/>"}
          </div>
          <div className="font-mono text-sm text-[var(--theme-text-dim)]">
            <span className="text-[var(--theme-text-muted)]">// </span>
            <span>{new Date().getFullYear()}</span>
            <span className="text-[var(--theme-text-muted)]"> Kundan Badhe</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
