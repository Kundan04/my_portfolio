"use client"

import { useState, useEffect } from "react"
import { FaPalette } from "react-icons/fa"

const themes = {
  matrix: {
    name: "Matrix",
    description: "Green terminal vibes",
    preview: "linear-gradient(135deg, #00ff9f, #00d4ff)",
    colors: {
      "--theme-primary": "#00ff9f",
      "--theme-secondary": "#00d4ff",
      "--theme-accent": "#bf5fff",
      "--theme-warning": "#ffea00",
      "--theme-bg": "#0d1117",
      "--theme-bg-secondary": "#161b22",
      "--theme-border": "#30363d",
      "--theme-text": "#e6edf3",
      "--theme-text-muted": "#8b949e",
      "--theme-text-dim": "#6e7681",
      "--theme-gradient": "linear-gradient(135deg, #00ff9f, #00d4ff)",
      "--theme-glow": "rgba(0, 255, 159, 0.3)",
    },
  },
  cyberpunk: {
    name: "Cyberpunk",
    description: "Neon pink & purple",
    preview: "linear-gradient(135deg, #ff2a6d, #d300c5)",
    colors: {
      "--theme-primary": "#ff2a6d",
      "--theme-secondary": "#05d9e8",
      "--theme-accent": "#d300c5",
      "--theme-warning": "#ffe66d",
      "--theme-bg": "#0a0a0f",
      "--theme-bg-secondary": "#12121a",
      "--theme-border": "#2a2a3a",
      "--theme-text": "#f0f0f5",
      "--theme-text-muted": "#9090a0",
      "--theme-text-dim": "#606070",
      "--theme-gradient": "linear-gradient(135deg, #ff2a6d, #d300c5)",
      "--theme-glow": "rgba(255, 42, 109, 0.3)",
    },
  },
  ocean: {
    name: "Ocean",
    description: "Calm blue & teal",
    preview: "linear-gradient(135deg, #64ffda, #7b89f4)",
    colors: {
      "--theme-primary": "#64ffda",
      "--theme-secondary": "#7b89f4",
      "--theme-accent": "#f78c6c",
      "--theme-warning": "#ffcb6b",
      "--theme-bg": "#0a192f",
      "--theme-bg-secondary": "#112240",
      "--theme-border": "#233554",
      "--theme-text": "#ccd6f6",
      "--theme-text-muted": "#8892b0",
      "--theme-text-dim": "#495670",
      "--theme-gradient": "linear-gradient(135deg, #64ffda, #7b89f4)",
      "--theme-glow": "rgba(100, 255, 218, 0.3)",
    },
  },
}

type ThemeId = keyof typeof themes

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("matrix")
  const [isOpen, setIsOpen] = useState(false)

  const applyTheme = (themeId: ThemeId) => {
    const theme = themes[themeId]
    const root = document.documentElement

    Object.entries(theme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }

  useEffect(() => {
    const savedTheme = (localStorage.getItem("portfolio-theme") as ThemeId) || "matrix"
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const handleThemeChange = (themeId: ThemeId) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    localStorage.setItem("portfolio-theme", themeId)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border transition-all duration-200"
        style={{
          background: "var(--theme-bg-secondary)",
          borderColor: "var(--theme-border)",
          color: "var(--theme-text-muted)",
        }}
        title="Change Theme"
      >
        <FaPalette size={16} />
      </button>

      {/* Theme Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div
            className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg z-50 overflow-hidden"
            style={{
              background: "var(--theme-bg)",
              border: "1px solid var(--theme-border)",
            }}
          >
            <div
              className="p-3"
              style={{ borderBottom: "1px solid var(--theme-border)" }}
            >
              <p className="font-mono text-xs" style={{ color: "var(--theme-text-muted)" }}>
                // select_theme
              </p>
            </div>

            <div className="p-2">
              {(Object.keys(themes) as ThemeId[]).map((themeId) => {
                const theme = themes[themeId]
                const isActive = currentTheme === themeId

                return (
                  <button
                    key={themeId}
                    onClick={() => handleThemeChange(themeId)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg transition-all"
                    style={{
                      background: isActive ? "rgba(0, 255, 159, 0.1)" : "transparent",
                      border: isActive ? "1px solid rgba(0, 255, 159, 0.3)" : "1px solid transparent",
                    }}
                  >
                    {/* Color Preview */}
                    <div
                      className="w-8 h-8 rounded-lg"
                      style={{ background: theme.preview }}
                    />

                    {/* Theme Info */}
                    <div className="text-left">
                      <p
                        className="font-semibold text-sm"
                        style={{
                          color: isActive ? "var(--theme-primary)" : "var(--theme-text)",
                        }}
                      >
                        {theme.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--theme-text-dim)" }}>
                        {theme.description}
                      </p>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div
                        className="ml-auto w-2 h-2 rounded-full"
                        style={{ background: "var(--theme-primary)" }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
