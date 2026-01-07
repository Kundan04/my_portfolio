"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const roles = [
    "AI-Driven Full Stack Developer",
    "FastAPI & React Specialist",
    "Azure Bot & LLM Engineer",
    "Cloud-Native Automation Expert",
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
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  // Scroll logic
  const handleScroll = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-14">

      {/* LEFT: Photo with Aurora Glow */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14B8A6] via-[#A3E635] to-[#38BDF8] blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

        <Image
        src="/myself.jpeg"
        alt="Kundan Badhe"
        width={260}
        height={260}
        className="relative rounded-full object-cover border-4 border-[#14B8A6] shadow-lg hover:scale-105 transition-all duration-500"
      />
      </div>

      {/* RIGHT: Text Content */}
      <div className="text-center md:text-left space-y-6 max-w-xl">
        
        {/* Typing animated title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#14B8A6] via-[#A3E635] to-[#38BDF8] 
            bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]">
            {currentRole}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-[#7DD3FC] font-medium">
          FastAPI • React • Azure • LLM Integrations
        </p>

        {/* ATS-friendly description */}
        <p className="text-[#94A3B8] leading-relaxed">
          I develop high-performance, cloud-native applications and AI-powered automation systems using FastAPI, 
          Python, React (TypeScript), Javascript, Azure, and DevOps workflows. I specialize in LLM-driven solutions, scalable 
          architectures, intelligent chatbots, and automation pipelines that deliver measurable business impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-3 md:justify-start justify-center">
          <button
            onClick={() => handleScroll("projects")}
            className="px-8 py-3 rounded-full 
              bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] 
              text-gray-900 font-semibold 
              hover:shadow-[0_0_18px_rgba(56,189,248,0.55)]
              transition-all duration-300">
            View My Work
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-3 rounded-full 
              bg-[#0f172a]/60 backdrop-blur-xl 
              border border-[#14B8A6]/40 
              text-[#E2E8F0] font-semibold 
              hover:bg-[#14B8A6]/10 transition-all duration-300">
            Contact Me
          </button>
        </div>

      </div>
    </div>
  );
}
