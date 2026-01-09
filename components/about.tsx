"use client";

import { FaCode, FaCloud, FaCogs, FaDatabase, FaBrain, FaServer, FaLayerGroup } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      category: "Languages",
      icon: <FaCode className="text-[var(--theme-primary)]" />,
      items: ["Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks",
      icon: <FaCogs className="text-[var(--theme-secondary)]" />,
      items: ["FastAPI", "Django", "React", "Node.js", "Chakra UI"],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-[var(--theme-accent)]" />,
      items: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="text-[var(--theme-warning)]" />,
      items: ["Azure", "Docker", "CI/CD", "Nginx", "Kubernetes"],
    },
    {
      category: "Architecture",
      icon: <FaServer className="text-[var(--theme-secondary)]" />,
      items: ["Microservices", "REST APIs", "Event-Driven", "WebSockets"],
    },
    {
      category: "AI & ML",
      icon: <FaBrain className="text-[var(--theme-primary)]" />,
      items: ["LLM Integration", "Prompt Engineering", "NLP", "OpenAI API"],
    },
  ];

  // Domain-agnostic metrics that show engineering impact
  const metrics = [
    {
      value: "70%",
      label: "Efficiency Gains",
      description: "Reduction in manual processes through automation",
    },
    {
      value: "50%",
      label: "Faster Deploys",
      description: "CI/CD pipeline optimization",
    },
    {
      value: "40%",
      label: "Latency Reduction",
      description: "Async processing & caching improvements",
    },
    {
      value: "90%+",
      label: "System Reliability",
      description: "Production uptime across services",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 space-y-16">

      {/* Section Header - Terminal Style */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)]">
          <span className="text-[var(--theme-primary)] font-mono text-sm">~/about</span>
          <span className="text-[var(--theme-text-dim)] font-mono text-sm">$</span>
          <span className="text-[var(--theme-text)] font-mono text-sm">whoami</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)]">
          About Me
        </h2>
        <p className="text-[var(--theme-text-muted)] max-w-2xl mx-auto">
          Building scalable systems, automating workflows, and shipping production-ready solutions.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-5 gap-10 items-start">

        {/* LEFT SIDE - 3 cols */}
        <div className="lg:col-span-3 space-y-8">

          {/* Terminal-style About Card */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="ml-4 text-[var(--theme-text-muted)] font-mono text-sm">developer.config</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="flex">
                <span className="text-[var(--theme-text-dim)] w-6">1</span>
                <span className="text-[#ff7b72]">const</span>
                <span className="text-[var(--theme-text)] mx-2">developer</span>
                <span className="text-[#ff7b72]">=</span>
                <span className="text-[var(--theme-text)] ml-2">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-[var(--theme-text-dim)] w-6">2</span>
                <span className="text-[var(--theme-text)] ml-4">focus:</span>
                <span className="text-[#a5d6ff] ml-2">"Full Stack + AI Engineering"</span>
                <span className="text-[var(--theme-text)]">,</span>
              </div>
              <div className="flex">
                <span className="text-[var(--theme-text-dim)] w-6">3</span>
                <span className="text-[var(--theme-text)] ml-4">approach:</span>
                <span className="text-[#a5d6ff] ml-2">"Ship fast, iterate, optimize"</span>
                <span className="text-[var(--theme-text)]">,</span>
              </div>
              <div className="flex">
                <span className="text-[var(--theme-text-dim)] w-6">4</span>
                <span className="text-[var(--theme-text)] ml-4">mindset:</span>
                <span className="text-[#a5d6ff] ml-2">"Automate everything automatable"</span>
                <span className="text-[var(--theme-text)]">,</span>
              </div>
              <div className="flex">
                <span className="text-[var(--theme-text-dim)] w-6">5</span>
                <span className="text-[var(--theme-text)] ml-4">passion:</span>
                <span className="text-[#a5d6ff] ml-2">"Clean architecture & DX"</span>
              </div>
              <div className="flex">
                <span className="text-[var(--theme-text-dim)] w-6">6</span>
                <span className="text-[var(--theme-text)]">{"}"}</span>
              </div>
            </div>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="metric-card p-5 hover-lift">
                <div className="text-3xl font-bold font-mono mb-1 text-[var(--theme-primary)]">
                  {metric.value}
                </div>
                <div className="text-[var(--theme-text)] font-semibold text-sm mb-1">
                  {metric.label}
                </div>
                <div className="text-[var(--theme-text-muted)] text-xs">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* Current Focus - What I bring to any team */}
          <div className="p-5 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)]">
            <div className="flex items-center gap-2 mb-4">
              <FaLayerGroup className="text-[var(--theme-secondary)]" />
              <span className="text-[var(--theme-text)] font-semibold">What I Bring to Your Team</span>
            </div>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[var(--theme-primary)] font-mono">{"=>"}</span>
                <span className="text-[var(--theme-text-muted)]">
                  <strong className="text-[var(--theme-text)]">End-to-end ownership</strong> from design to deployment
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--theme-primary)] font-mono">{"=>"}</span>
                <span className="text-[var(--theme-text-muted)]">
                  <strong className="text-[var(--theme-text)]">Production-first mindset</strong> with reliability focus
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--theme-primary)] font-mono">{"=>"}</span>
                <span className="text-[var(--theme-text-muted)]">
                  <strong className="text-[var(--theme-text)]">Cross-functional collaboration</strong> with product & design
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--theme-primary)] font-mono">{"=>"}</span>
                <span className="text-[var(--theme-text-muted)]">
                  <strong className="text-[var(--theme-text)]">Continuous improvement</strong> via observability & metrics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — SKILLS - 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[var(--theme-text-muted)] font-mono text-sm">// tech_stack.json</span>
          </div>

          {skills.map((group) => (
            <div
              key={group.category}
              className="p-4 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)]
              hover:border-[var(--theme-secondary)]/30 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--theme-secondary)_10%,transparent)]
              transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {group.icon}
                <h3 className="text-sm font-semibold text-[var(--theme-text)]">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
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
