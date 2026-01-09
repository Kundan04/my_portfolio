"use client"

import { useEffect, useState } from "react"
import { FaTerminal } from "react-icons/fa"
import ThemeSwitcher from "./theme-switcher"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--theme-bg)]/95 backdrop-blur-xl border-b border-[var(--theme-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo - Terminal Style */}
        <div className="flex items-center gap-2">
          <FaTerminal className="text-[var(--theme-primary)] text-lg" />
          <span className="text-xl font-bold font-mono text-[var(--theme-text)]">
            kundan<span className="text-[var(--theme-primary)]">_</span>badhe
          </span>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] border border-[var(--theme-primary)]/30"
                  : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-bg-secondary)]"
              }`}
            >
              <span className="text-[var(--theme-text-dim)] mr-1">$</span>
              {item.label.toLowerCase()}
            </button>
          ))}
        </div>

        {/* Right Section: Theme Switcher + CTA */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("contact")
            }}
            className="hidden sm:block px-5 py-2 rounded-md font-mono text-sm font-medium
              bg-[var(--theme-gradient)] text-[var(--theme-bg)]
              hover:shadow-[0_0_20px_var(--theme-glow)]
              transition-all duration-300"
            style={{ background: "var(--theme-gradient)" }}
          >
            ./hire_me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                activeSection === item.id
                  ? "bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] border border-[var(--theme-primary)]/30"
                  : "text-[var(--theme-text-muted)] border border-[var(--theme-border)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
