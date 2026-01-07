"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Software Ninja",
      company: "Assesshub",
      period: "Jul 2023 – Present • Andheri",
      description:
        "Working across AI systems, automation, LLM engineering, backend development, and bot ecosystem at scale.",
      achievements: [
        "Designed & deployed camera + audio proctoring system with 90% cheating-detection reliability using AI.",
        "Built & maintained 30+ Teams + WhatsApp bot workflows, reducing manual work by 70%.",
        "Developed real-time 2-way audio bots using STT + LLM responses; built NLP-based mental health chatbot.",
        "Created automated pipelines for Teams interview transcription & reporting (MS Graph API).",
        "Built backend for generative AI interview platform using FastAPI + Azure OpenAI.",
        "Optimized prompt engineering to improve question relevance and contextual accuracy.",
        "Streamlined CI/CD (Docker, Bitbucket Pipelines, Azure DevOps, Nginx) reducing deployment time by 50%.",
        "Implemented Celery async tasks improving chatbot throughput & reducing latency by ~40%.",
        "Led a 4-member AI automation team ensuring delivery and production stability.",
        "Enhanced React + Chakra UI components (forms, filters, modals) for better UX.",
      ],
    },
    {
      role: "Software Developer",
      company: "Z & T Infotech",
      period: "Feb 2022 – May 2022",
      description:
        "Worked on frontend engineering, performance tuning, and backend API development.",
      achievements: [
        "Built component-driven interfaces using React functional components and hooks.",
        "Improved UI performance & UX through efficient state management.",
        "Developed REST APIs and backend logic using Node.js & Express.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Vidyalankar Institute of Technology",
      period: "Mar 2021 – Jun 2021",
      description:
        "Learned and built production-level features in Django during a college-based internship.",
      achievements: [
        "Gained hands-on experience with Django MVC.",
        "Built small-scale modules and explored full-stack workflows.",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
        <p className="text-[#94A3B8] text-sm">
          My professional journey in a developer-friendly hierarchy.
        </p>
      </div>

      {/* Experience Tree */}
      <div className="relative border-l border-white/10 pl-6 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative group transition-all">
            {/* Node dot */}
            <div className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8] group-hover:scale-110 transition" />

            {/* Curved connector */}
            <div className="absolute -left-3 top-5 w-6 h-6 border-l border-b border-white/10 rounded-bl-lg"></div>

            {/* Main Card */}
            <div className="ml-4 p-4 rounded-lg border border-white/10 bg-[#0f172a]/40 
                hover:bg-[#0f172a]/60 hover:border-[#38BDF8]/30 
                hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]
                transition-all duration-300">

              {/* Role */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {exp.role}
              </h3>

              <p className="text-[#7DD3FC] text-sm">
                company: <span className="text-[#94A3B8]">{exp.company}</span>
              </p>

              <p className="text-[#7DD3FC] text-sm">
                period: <span className="text-[#94A3B8]">{exp.period}</span>
              </p>

              <p className="text-[#7DD3FC] text-sm">
                description:{" "}
                <span className="text-[#94A3B8]">{exp.description}</span>
              </p>

              {/* Achievements */}
              <div className="mt-3">
                <p className="text-[#7DD3FC] text-sm mb-1">achievements:</p>

                <div className="ml-3 space-y-1">
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#A3E635]">•</span>
                      <span className="text-[#94A3B8] text-sm">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical line except last */}
            {i !== experiences.length - 1 && (
              <div className="absolute -left-[1px] top-8 h-full border-l border-white/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
