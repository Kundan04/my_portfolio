"use client";

import { FaTerminal, FaRocket, FaBolt, FaChartLine } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Software Ninja",
      company: "Assesshub",
      period: "Jul 2023 – Present",
      location: "Mumbai",
      summary: "Leading AI systems, automation pipelines, and backend architecture at scale.",
      highlights: [
        {
          category: "AI & ML",
          icon: <FaRocket className="text-[var(--theme-primary)]" />,
          items: [
            { text: "Built AI proctoring system", metric: "90% accuracy" },
            { text: "Developed NLP mental health chatbot with STT + LLM", metric: null },
            { text: "Optimized prompt engineering for contextual accuracy", metric: null },
          ],
        },
        {
          category: "Automation",
          icon: <FaBolt className="text-[var(--theme-secondary)]" />,
          items: [
            { text: "Deployed Teams + WhatsApp bot workflows", metric: "30+ bots" },
            { text: "Reduced manual operations", metric: "70% less" },
            { text: "Built interview transcription pipelines (MS Graph API)", metric: null },
          ],
        },
        {
          category: "Backend & DevOps",
          icon: <FaTerminal className="text-[var(--theme-accent)]" />,
          items: [
            { text: "Architected FastAPI + Azure OpenAI backend", metric: null },
            { text: "Streamlined CI/CD (Docker, Bitbucket, Azure)", metric: "50% faster deploys" },
            { text: "Implemented Celery async tasks", metric: "40% lower latency" },
          ],
        },
        {
          category: "Leadership",
          icon: <FaChartLine className="text-[var(--theme-warning)]" />,
          items: [
            { text: "Led AI automation team", metric: "4 engineers" },
            { text: "Enhanced React + Chakra UI components for UX", metric: null },
          ],
        },
      ],
    },
    {
      role: "Software Developer",
      company: "Z & T Infotech",
      period: "Feb 2022 – May 2022",
      location: "Remote",
      summary: "Frontend engineering with React and backend API development.",
      highlights: [
        {
          category: "Development",
          icon: <FaTerminal className="text-[var(--theme-secondary)]" />,
          items: [
            { text: "Built component-driven interfaces with React hooks", metric: null },
            { text: "Improved UI performance through state optimization", metric: null },
            { text: "Developed REST APIs with Node.js & Express", metric: null },
          ],
        },
      ],
    },
    {
      role: "Web Development Intern",
      company: "Vidyalankar Institute of Technology",
      period: "Mar 2021 – Jun 2021",
      location: "Mumbai",
      summary: "Full-stack development training with Django.",
      highlights: [
        {
          category: "Learning",
          icon: <FaRocket className="text-[var(--theme-primary)]" />,
          items: [
            { text: "Hands-on Django MVC architecture", metric: null },
            { text: "Built production-ready modules", metric: null },
          ],
        },
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)]">
          <span className="text-[var(--theme-primary)] font-mono text-sm">~/experience</span>
          <span className="text-[var(--theme-text-dim)] font-mono text-sm">$</span>
          <span className="text-[var(--theme-text)] font-mono text-sm">cat career.log</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)]">
          Experience
        </h2>
        <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto">
          Impact-driven development across AI, automation, and scalable systems.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card rounded-xl p-6 hover-lift">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--theme-text)] flex items-center gap-2">
                  <span className="text-[var(--theme-primary)] font-mono text-sm">{">"}</span>
                  {exp.role}
                </h3>
                <p className="text-[var(--theme-secondary)] font-medium">
                  @{exp.company}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-md bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-muted)] font-mono">
                  {exp.period}
                </span>
                <span className="text-[var(--theme-text-dim)]">{exp.location}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-[var(--theme-text-muted)] mb-6 pl-5 border-l-2 border-[var(--theme-border)]">
              {exp.summary}
            </p>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {exp.highlights.map((highlight, j) => (
                <div
                  key={j}
                  className="p-4 rounded-lg bg-[var(--theme-bg-secondary)]/50 border border-[var(--theme-border)]/50"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-3">
                    {highlight.icon}
                    <span className="text-[var(--theme-text)] font-semibold text-sm">
                      {highlight.category}
                    </span>
                  </div>

                  {/* Achievement Items */}
                  <ul className="space-y-2">
                    {highlight.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm">
                        <span className="text-[var(--theme-border)] mt-1">{"-->"}</span>
                        <span className="text-[var(--theme-text-muted)]">
                          {item.text}
                          {item.metric && (
                            <span className="ml-2 px-2 py-0.5 rounded bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] font-mono text-xs border border-[var(--theme-primary)]/20">
                              {item.metric}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline connector visual */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 text-[var(--theme-text-dim)] font-mono text-sm">
          <span className="text-[var(--theme-primary)]">{"<"}</span>
          <span>journey.start()</span>
          <span className="text-[var(--theme-primary)]">{">"}</span>
        </div>
      </div>
    </section>
  );
}
