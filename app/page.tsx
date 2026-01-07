"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Certificates from "@/components/certificates"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-background to-blue-950 opacity-40"></div>
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
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

      {/* <section id="certificates" className="min-h-screen py-20 px-4 md:px-6">
        <Certificates />
      </section> */}

      <section id="contact" className="min-h-screen py-20 px-4 md:px-6">
        <Contact />
      </section>
    </main>
  )
}
