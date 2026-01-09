"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const roles = [
    "Full Stack Developer",
    "Backend Architect",
    "AI/LLM Engineer",
    "DevOps Enthusiast",
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing Effect
  useEffect(() => {
    const current = roles[index];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentRole(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  // Scroll logic
  const handleScroll = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-12 md:gap-16">

      {/* LEFT: Photo with Code-style Frame */}
      <div className="relative group">
        {/* Gradient glow behind */}
        <div
          className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500"
          style={{ background: "var(--theme-gradient)" }}
        />

        {/* Terminal-style frame */}
        <div className="relative terminal-window p-1">
          <div className="terminal-header py-2 px-3">
            <div className="terminal-dot terminal-dot-red" style={{ width: 10, height: 10 }}></div>
            <div className="terminal-dot terminal-dot-yellow" style={{ width: 10, height: 10 }}></div>
            <div className="terminal-dot terminal-dot-green" style={{ width: 10, height: 10 }}></div>
            <span className="ml-3 text-[var(--theme-text-dim)] font-mono text-xs">profile.png</span>
          </div>
          <Image
            src="/myself.jpeg"
            alt="Kundan Badhe"
            width={280}
            height={280}
            className="object-cover"
          />
        </div>

        {/* Status indicator */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)]">
          <span className="w-2 h-2 rounded-full bg-[var(--theme-primary)] animate-pulse"></span>
          <span className="text-[var(--theme-text-muted)] font-mono text-xs">available for hire</span>
        </div>
      </div>

      {/* RIGHT: Text Content */}
      <div className="text-center md:text-left space-y-6 max-w-xl">

        {/* Greeting */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)]">
          <span className="text-[var(--theme-text-dim)] font-mono text-sm">{">"}</span>
          <span className="text-[var(--theme-text)] font-mono text-sm">Hello, I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--theme-text)] leading-tight">
          Kundan Badhe
        </h1>

        {/* Typing animated role */}
        <div className="flex items-center gap-2 text-xl md:text-2xl font-mono justify-center md:justify-start">
          <span className="text-[var(--theme-primary)]">{">"}</span>
          <span className="text-[var(--theme-secondary)]">{currentRole}</span>
          <span className="w-3 h-6 bg-[var(--theme-primary)] cursor-blink"></span>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {["Python", "FastAPI", "React", "TypeScript", "Azure", "LLMs"].map((tech) => (
            <span key={tech} className="code-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[var(--theme-text-muted)] leading-relaxed max-w-lg">
          I build high-performance backend systems, automate complex workflows,
          and ship AI-powered solutions that scale. Passionate about clean architecture,
          developer experience, and turning ideas into production-ready products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
          <button
            onClick={() => handleScroll("projects")}
            className="px-6 py-3 rounded-md font-mono text-sm font-medium
              text-[var(--theme-bg)]
              hover:shadow-[0_0_25px_var(--theme-glow)]
              transition-all duration-300"
            style={{ background: "var(--theme-gradient)" }}
          >
            {">"} view_projects()
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="px-6 py-3 rounded-md font-mono text-sm font-medium
              bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)]
              text-[var(--theme-text)]
              hover:border-[var(--theme-secondary)] hover:bg-[var(--theme-bg-secondary)]/80
              transition-all duration-300"
          >
            {">"} contact_me()
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
          <span className="text-[var(--theme-text-dim)] font-mono text-xs">find_me_on:</span>
          <a
            href="https://github.com/Kundan04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-muted)]
              hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)]/30 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kundan-badhe-1a3b45187"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-muted)]
              hover:text-[var(--theme-secondary)] hover:border-[var(--theme-secondary)]/30 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:badheknu@gmail.com"
            className="p-2 rounded-md bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-muted)]
              hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)]/30 transition-all"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
