"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import emailjs from "@emailjs/browser"

// EmailJS Configuration - Replace these with your actual EmailJS credentials
// 1. Sign up at https://www.emailjs.com/
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Get your Public Key from Account > API Keys
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
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        )
      case "success":
        return "Message Sent!"
      case "error":
        return "Failed to Send"
      default:
        return "Send Message"
    }
  }

  const socialLinks = [
    { icon: "𝕏", label: "Twitter", url: "#" },
    { icon: "🔗", label: "LinkedIn", url: "#" },
    { icon: "📧", label: "Email", url: "mailto:alex@example.com" },
    { icon: "💻", label: "GitHub", url: "#" },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </div>

      {/* Contact Container */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glassmorphism bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glassmorphism bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg glassmorphism bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
              />
            </div>
            {status === "error" && errorMessage && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                status === "success"
                  ? "bg-green-500"
                  : status === "error"
                  ? "bg-red-500"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50"
              }`}
            >
              {getButtonContent()}
            </button>
          </form>
        </div>

        {/* Social Links & Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="group glassmorphism p-6 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="text-3xl mb-2">{link.icon}</div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="glassmorphism p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-semibold text-accent">Let's collaborate!</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to get in touch.
            </p>
            <p className="text-sm font-medium text-foreground">Response time: Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
