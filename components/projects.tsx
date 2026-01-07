"use client";

export default function Projects() {
  const projects = [
    {
      title: "AI Disease Prediction System",
      description:
        "AI-powered system that predicts diseases using LLMs and provides remedies and doctor suggestions.",
      tech: ["Python", "Django", "React", "LLMs"],
      github: "https://github.com/Kunal-Sanwadkar/personalhealthcareportal.git",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Quiz App",
      description:
        "A Django application for creating and taking quizzes with score tracking.",
      tech: ["Django", "SQLite", "Bootstrap"],
      github: "https://github.com/Kundan04/django_testquiz.git",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "City Mall – Virtual Shopping",
      description:
        "A virtual mall experience allowing users to browse stores and explore products online.",
      tech: ["Django", "Python", "HTML/CSS"],
      github: "https://github.com/Kundan04/django_Citymall.git",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "My Blog (MERN)",
      description:
        "A MERN blog platform with authentication and commenting features.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Kundan04/My-blog.git",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 space-y-10">
      {/* Title */}
      <div className="text-center space-y-1">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
        <p className="text-[#94A3B8] text-sm">Some of the work I've built.</p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden group border border-white/10 bg-[#0f172a]/50"
          >
            {/* Background Video (if exists) */}
            {project.video && (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-300"
              />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

            {/* Content */}
            <div className="relative p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-[#cbd5e1] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full text-[#E2E8F0]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[#1e293b]/70 border border-white/10 text-white hover:bg-[#1e293b]/90 transition duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.48 0 12.25c0 5.41 3.44 9.99 8.2 11.62.6.12.82-.27.82-.6 0-.3-.01-1.1-.02-2.16-3.34.75-4.04-1.66-4.04-1.66-.55-1.43-1.34-1.81-1.34-1.81-1.1-.78.08-.76.08-.76 1.22.09 1.87 1.28 1.87 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.67-.32-5.47-1.37-5.47-6.1 0-1.35.47-2.45 1.24-3.32-.13-.33-.54-1.64.12-3.42 0 0 1.01-.33 3.3 1.27a10.97 10.97 0 0 1 6 0c2.28-1.6 3.29-1.27 3.29-1.27.66 1.78.25 3.09.12 3.42.77.87 1.24 1.97 1.24 3.32 0 4.74-2.8 5.78-5.48 6.09.43.39.82 1.16.82 2.34 0 1.69-.02 3.05-.02 3.47 0 .33.22.73.82.6 4.75-1.63 8.19-6.21 8.19-11.62C24 5.48 18.63 0 12 0z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
