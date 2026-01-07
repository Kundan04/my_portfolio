"use client";

export default function Certificates() {
  const certificates = [
    {
      title: "Python for Everybody",
      issuer: "University of Michigan",
      date: "2022",
      link: "#",
      image: "/cert1.jpg", // Add images inside /public
    },
    {
      title: "Full Stack Web Development",
      issuer: "Meta / Coursera",
      date: "2023",
      link: "#",
      image: "/cert2.jpg",
    },
    {
      title: "AI & Machine Learning Fundamentals",
      issuer: "Google",
      date: "2024",
      link: "#",
      image: "/cert3.jpg",
    },
    {
      title: "Azure Cloud Practitioner",
      issuer: "Microsoft",
      date: "2024",
      link: "#",
      image: "/cert4.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 space-y-12">
      {/* Heading */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]">
          Certificates
        </h2>
        <p className="text-[#94A3B8] text-sm">Verified credentials & achievements.</p>
      </div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="relative group w-full h-60 rounded-xl overflow-hidden border border-white/10
            hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] transition-all duration-500 cursor-pointer"
          >
            {/* Background Preview */}
            {cert.image ? (
              <img
                src={cert.image}
                alt="certificate"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 to-[#38BDF8]/20 opacity-40"></div>
            )}

            {/* Dark Glass Overlay */}
            <div className="absolute inset-0 bg-[#0f172a]/50 backdrop-blur-md"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>

                <p className="text-[#7DD3FC] text-sm mt-1">
                  issuer: <span className="text-[#cbd5e1]">{cert.issuer}</span>
                </p>

                <p className="text-[#7DD3FC] text-sm">
                  date: <span className="text-[#cbd5e1]">{cert.date}</span>
                </p>
              </div>

              {/* Button */}
              <a
                href={cert.link}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md
                bg-[#1e293b]/60 border border-white/10 text-white hover:bg-[#1e293b]/90 
                hover:border-[#38BDF8]/40 transition-all duration-300 w-fit"
              >
                View Certificate →
              </a>
            </div>

            {/* Glow Accent */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-transparent opacity-0 
            group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
