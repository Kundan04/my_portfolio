"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheck, FaTimes } from "react-icons/fa"

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_u5oewjw"
const EMAILJS_TEMPLATE_ID = "template_po3xex6"
const EMAILJS_PUBLIC_KEY = "2An19jPqFm0BuUm1a"

type FormStatus = "idle" | "sending" | "success" | "error"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          date: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const getButtonContent = () => {
    switch (status) {
      case "sending":
        return (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending...</span>
          </span>
        )
      case "success":
        return (
          <span className="flex items-center justify-center gap-2">
            <FaCheck />
            <span>Message Sent!</span>
          </span>
        )
      case "error":
        return (
          <span className="flex items-center justify-center gap-2">
            <FaTimes />
            <span>Failed</span>
          </span>
        )
      default:
        return (
          <span className="flex items-center justify-center gap-2">
            <FaPaperPlane />
            <span>send_message()</span>
          </span>
        )
    }
  }

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      handle: "@kundan-badhe",
      url: "https://www.linkedin.com/in/kundan-badhe-39174a19b",
    },
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      handle: "@Kundan04",
      url: "https://github.com/Kundan04",
    },
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      handle: "kundanbadhe3@gmail.com",
      url: "mailto:kundanbadhe3@gmail.com",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)]">
          <span className="text-[var(--theme-primary)] font-mono text-sm">~/contact</span>
          <span className="text-[var(--theme-text-dim)] font-mono text-sm">$</span>
          <span className="text-[var(--theme-text)] font-mono text-sm">./reach_out.sh</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)]">Get in Touch</h2>
        <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto">
          Have a project idea, job opportunity, or just want to connect? Let's talk.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form - 3 cols */}
        <div className="lg:col-span-3">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red" style={{ width: 10, height: 10 }}></div>
              <div className="terminal-dot terminal-dot-yellow" style={{ width: 10, height: 10 }}></div>
              <div className="terminal-dot terminal-dot-green" style={{ width: 10, height: 10 }}></div>
              <span className="ml-3 text-[var(--theme-text-dim)] font-mono text-xs">compose_message.js</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-[var(--theme-text-muted)] font-mono text-sm flex items-center gap-2">
                  <span className="text-[#ff7b72]">const</span>
                  <span className="text-[#ffa657]">name</span>
                  <span className="text-[#ff7b72]">=</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder='"Your Name"'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)]
                    text-[var(--theme-text)] font-mono text-sm placeholder-[var(--theme-text-dim)]
                    focus:outline-none focus:border-[var(--theme-secondary)]/50 focus:ring-1 focus:ring-[var(--theme-secondary)]/30
                    transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[var(--theme-text-muted)] font-mono text-sm flex items-center gap-2">
                  <span className="text-[#ff7b72]">const</span>
                  <span className="text-[#ffa657]">email</span>
                  <span className="text-[#ff7b72]">=</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder='"your@email.com"'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)]
                    text-[var(--theme-text)] font-mono text-sm placeholder-[var(--theme-text-dim)]
                    focus:outline-none focus:border-[var(--theme-secondary)]/50 focus:ring-1 focus:ring-[var(--theme-secondary)]/30
                    transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-[var(--theme-text-muted)] font-mono text-sm flex items-center gap-2">
                  <span className="text-[#ff7b72]">const</span>
                  <span className="text-[#ffa657]">message</span>
                  <span className="text-[#ff7b72]">=</span>
                  <span className="text-[#a5d6ff]">`</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)]
                    text-[var(--theme-text)] font-mono text-sm placeholder-[var(--theme-text-dim)]
                    focus:outline-none focus:border-[var(--theme-secondary)]/50 focus:ring-1 focus:ring-[var(--theme-secondary)]/30
                    transition-all resize-none"
                />
                <span className="text-[#a5d6ff] font-mono text-sm">`;</span>
              </div>

              {/* Error Message */}
              {status === "error" && errorMessage && (
                <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-sm">
                  // Error: {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed ${
                    status === "success"
                      ? "bg-[var(--theme-primary)]/20 border border-[var(--theme-primary)]/50 text-[var(--theme-primary)]"
                      : status === "error"
                      ? "bg-red-500/20 border border-red-500/50 text-red-400"
                      : "text-[var(--theme-bg)] hover:shadow-[0_0_25px_var(--theme-glow)]"
                  }`}
                style={status !== "success" && status !== "error" ? { background: "var(--theme-gradient)" } : {}}
              >
                {getButtonContent()}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links - 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[var(--theme-text-dim)] font-mono text-sm">// connect_via</span>
          </div>

          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)]
                hover:border-[var(--theme-secondary)]/40 transition-all duration-300 hover-lift group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-lg bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] transition-all"
                  style={{ color: index === 0 ? "var(--theme-secondary)" : index === 1 ? "var(--theme-primary)" : "var(--theme-accent)" }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-[var(--theme-text)] font-semibold">{link.label}</p>
                  <p className="text-[var(--theme-text-muted)] font-mono text-sm">{link.handle}</p>
                </div>
              </div>
            </a>
          ))}

          {/* Response Time Card */}
          <div className="p-4 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] mt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[var(--theme-primary)] animate-pulse"></span>
              <span className="text-[var(--theme-primary)] font-mono text-sm">status: available</span>
            </div>
            <p className="text-[var(--theme-text-muted)] text-sm">
              Typical response time: <span className="text-[var(--theme-text)]">within 24 hours</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
