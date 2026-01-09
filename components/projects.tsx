"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "AI Disease Prediction System",
      description:
        "AI-powered health assistant using LLMs to predict diseases, recommend remedies, and suggest specialists based on symptoms.",
      tech: ["Python", "Django", "React", "LLMs", "REST API"],
      github: "https://github.com/Kunal-Sanwadkar/personalhealthcareportal.git",
      highlights: ["LLM Integration", "Medical NLP", "Full Stack"],
    },
    {
      title: "Quiz Application",
      description:
        "Feature-rich quiz platform with user authentication, score tracking, and admin dashboard for quiz management.",
      tech: ["Django", "SQLite", "Bootstrap", "JavaScript"],
      github: "https://github.com/Kundan04/django_testquiz.git",
      highlights: ["Auth System", "CRUD Operations", "Responsive UI"],
    },
    {
      title: "City Mall – Virtual Shopping",
      description:
        "Virtual mall experience enabling users to browse stores, explore products, and navigate a digital shopping environment.",
      tech: ["Django", "Python", "HTML/CSS", "JavaScript"],
      github: "https://github.com/Kundan04/django_Citymall.git",
      highlights: ["E-commerce", "User Experience", "Django ORM"],
    },
    {
      title: "MERN Blog Platform",
      description:
        "Full-stack blog with JWT authentication, rich text editing, comments, and responsive design.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Kundan04/My-blog.git",
      highlights: ["JWT Auth", "MERN Stack", "REST API"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)]">
          <span className="text-[var(--theme-primary)] font-mono text-sm">~/projects</span>
          <span className="text-[var(--theme-text-dim)] font-mono text-sm">$</span>
          <span className="text-[var(--theme-text)] font-mono text-sm">ls -la</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)]">Projects</h2>
        <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto">
          Open source projects and production applications I've built.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-xl overflow-hidden bg-[var(--theme-bg)] border border-[var(--theme-border)]
              hover:border-[var(--theme-secondary)]/40 transition-all duration-300 hover-lift"
          >
            {/* Top accent bar */}
            <div className="h-1 gradient-border"></div>

            <div className="p-6 space-y-4">
              {/* Project Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-secondary)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] border border-[var(--theme-primary)]/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-muted)]
                    hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)]/30 transition-all"
                >
                  <FaGithub size={18} />
                </a>
              </div>

              {/* Description */}
              <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="code-tag text-xs">
                    {t}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <div className="pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-[var(--theme-secondary)] hover:text-[var(--theme-primary)] transition-colors"
                >
                  <span>{">"}</span>
                  <span>view_source()</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects CTA */}
      <div className="text-center pt-4">
        <a
          href="https://github.com/Kundan04"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-md font-mono text-sm
            bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text)]
            hover:border-[var(--theme-primary)]/50 hover:text-[var(--theme-primary)] transition-all"
        >
          <FaGithub size={18} />
          <span>View More on GitHub</span>
        </a>
      </div>
    </section>
  );
}
