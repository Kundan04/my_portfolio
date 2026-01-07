"use client";

import { FaCode, FaCloud, FaCogs, FaDatabase, FaTools, FaBrain } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      category: "Languages",
      icon: <FaCode className="text-[#38BDF8] text-xl" />,
      items: ["Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks & Libraries",
      icon: <FaCogs className="text-[#38BDF8] text-xl" />,
      items: ["FastAPI", "Django", "React", "Chakra UI", "Node.js"],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-[#38BDF8] text-xl" />,
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="text-[#38BDF8] text-xl" />,
      items: [
        "Microsoft Azure",
        "Azure Bot Services",
        "Azure Functions",
        "Azure Pipelines",
        "Azure Containers",
        "Azure DevOps",
        "Nginx",
      ],
    },
    {
      category: "Tools & Monitoring",
      icon: <FaTools className="text-[#38BDF8] text-xl" />,
      items: ["Git", "Docker", "Bitbucket", "Celery", "WebSockets", "Grafana"],
    },
    {
      category: "Other Skills",
      icon: <FaBrain className="text-[#38BDF8] text-xl" />,
      items: [
        "RESTful APIs",
        "Microservices Architecture",
        "Agile/Scrum",
        "Prompt Engineering",
        "AI/LLM Integration",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 space-y-16">
      
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#14B8A6] via-[#A3E635] to-[#38BDF8] bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
          AI-driven engineering, scalable backend systems, cloud automation, and practical product-focused development.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* About Text */}
          <div className="space-y-6 text-lg text-[#CBD5E1] leading-relaxed">
            <p>
              I’m an{" "}
              <span className="text-[#38BDF8] font-semibold">
                AI-Driven Full Stack Developer
              </span>{" "}
              specializing in FastAPI, Python, React (TypeScript), JavaScript, Azure Cloud, and automation systems.
            </p>

            <p>
              My work includes AI-based proctoring, multi-platform bot automation, orchestration pipelines, 
              and cloud-native services that increased operational efficiency by{" "}
              <span className="text-[#A3E635] font-semibold">70%+</span>.
            </p>

            <p>
              I focus on high-reliability backend systems, clean architecture, and improving developer experience 
              through intelligent automation.
            </p>
          </div>

          {/* KPI GRID */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-[#0f172a]/60 border border-white/10 p-4 rounded-xl text-center backdrop-blur-lg">
              <p className="text-sm text-[#7DD3FC]">Bots Live</p>
              <p className="text-2xl font-bold text-white mt-1">30+</p>
            </div>

            <div className="bg-[#0f172a]/60 border border-white/10 p-4 rounded-xl text-center backdrop-blur-lg">
              <p className="text-sm text-[#7DD3FC]">Proctoring Accuracy</p>
              <p className="text-2xl font-bold text-white mt-1">90%</p>
            </div>

            <div className="bg-[#0f172a]/60 border border-white/10 p-4 rounded-xl text-center backdrop-blur-lg">
              <p className="text-sm text-[#7DD3FC]">Infra Gain</p>
              <p className="text-lg font-bold text-white mt-1">50% Faster</p>
            </div>

          </div>

          {/* SECOND KPI ROW */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-[#0f172a]/60 border border-white/10 p-4 rounded-xl text-center backdrop-blur-lg">
              <p className="text-sm text-[#7DD3FC]">Chatbot Output</p>
              <p className="text-lg font-bold text-white mt-1">40% Faster</p>
            </div>

            <div className="bg-[#0f172a]/60 border border-white/10 p-4 rounded-xl text-center backdrop-blur-lg">
              <p className="text-sm text-[#7DD3FC]">Team Leadership</p>
              <p className="text-xl font-bold text-white mt-1">4 Engineers</p>
            </div>

            <div className="bg-[#0f172a]/60 border border-white/10 p-4 rounded-xl text-center backdrop-blur-lg">
              <p className="text-sm text-[#7DD3FC]">Ops Reduction</p>
              <p className="text-lg font-bold text-white mt-1">70% Less Manual</p>
            </div>

          </div>

          {/* What I'm Building Now */}
          <div className="p-5 rounded-2xl bg-[#0f172a]/60 backdrop-blur-xl border border-[#14B8A6]/20 shadow-lg">
            <p className="text-[#7DD3FC] font-semibold mb-3 text-lg">
              What I’m Building Right Now
            </p>

            <ul className="text-[#94A3B8] space-y-3 text-sm">
              <li>
                • <span className="font-semibold text-white">End-to-end LLM orchestration pipelines</span> for production-grade AI workloads.
              </li>
              <li>
                • <span className="font-semibold text-white">Observability & distributed tracing</span> (OpenTelemetry, centralized logs).
              </li>
              <li>
                • <span className="font-semibold text-white">Scalable Azure automation systems</span> to increase reliability and reduce engineering overhead.
              </li>
              <li>
                • <span className="font-semibold text-white">Low-latency chatbot optimization</span> using async routing, caching, and prompt-level tuning.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT — SKILLS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl bg-[#0f172a]/50 border border-white/10 
              backdrop-blur-lg shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {group.icon}
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#ffffff0d] text-[#E2E8F0] border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
