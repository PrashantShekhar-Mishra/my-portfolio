import React from "react";

export default function Home() {
  const skills = [
    "Java",
    "Spring Boot",
    "Kafka",
    "IBM MQ",
    "Redis",
    "Docker",
    "AWS",
    "Microservices",
    "System Design",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ];

  const experiences = [
    {
      company: "Infosys",
      role: "Associate Consultant",
      period: "Aug 2025 - Present",
      points: [
        "Built scalable payment routing microservices.",
        "Designed event-driven systems using Kafka and IBM MQ.",
        "Implemented SWIFT CBPR+ validation workflows.",
        "Improved service reliability and production stability.",
      ],
    },
    {
      company: "Persistent Systems",
      role: "Senior Software Engineer",
      period: "Jul 2024 - Jul 2025",
      points: [
        "Migrated monolithic applications to microservices.",
        "Implemented API rate limiting.",
        "Integrated Twilio notification services.",
        "Improved observability and production monitoring.",
      ],
    },
    {
      company: "Persistent Systems",
      role: "Software Engineer",
      period: "Jun 2022 - Jun 2024",
      points: [
        "Implemented Redis and Memcached caching.",
        "Reduced API latency and database load.",
        "Increased automated test coverage to 80%+.",
        "Supported high-availability production systems.",
      ],
    },
  ];

  const projects = [
    {
      title: "URL Shortener",
      description:
        "Production-ready URL shortening service with analytics, caching, and rate limiting.",
      tech: "Java • Spring Boot • PostgreSQL • Redis • Docker",
    },
    {
      title: "Payment Processing System",
      description:
        "Event-driven payment workflow with retries, idempotency, and transaction tracking.",
      tech: "Spring Boot • Kafka • Redis • PostgreSQL",
    },
    {
      title: "Notification Service",
      description:
        "Scalable notification platform supporting SMS, WhatsApp, and Email.",
      tech: "Spring Boot • Kafka • Twilio • Docker",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Prashant Shekhar Mishra
          </h1>

          <h2 className="text-2xl text-slate-300 mb-6">
            Backend Engineer | Java | Spring Boot | Kafka
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg">
            Backend Engineer with 4+ years of experience building scalable
            microservices, distributed systems, and enterprise-grade backend
            applications.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
              Download Resume
            </a>

            <a className="px-6 py-3 border border-slate-700 rounded-lg">
              GitHub
            </a>

            <a className="px-6 py-3 border border-slate-700 rounded-lg">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["4+", "Years Experience"],
            ["500+", "DSA Problems Solved"],
            ["99.9%", "Service Availability"],
            ["3+", "Enterprise Projects"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-slate-900 p-6 rounded-xl text-center"
            >
              <h3 className="text-4xl font-bold">{value}</h3>
              <p className="text-slate-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-slate-300 leading-8 text-lg">
          I design and build scalable backend systems using Java, Spring Boot,
          Kafka, Redis, and cloud technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-slate-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-slate-400 mt-1">
                {exp.company} • {exp.period}
              </p>

              <ul className="mt-5 space-y-2 text-slate-300">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-slate-400 mt-4">
                {project.description}
              </p>
              <p className="text-cyan-400 mt-4 text-sm">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Microsoft Azure Fundamentals (AZ-900)",
            "HackerRank Java",
            "HackerRank SQL",
            "Problem Solving Certification",
          ].map((cert) => (
            <div key={cert} className="bg-slate-900 p-5 rounded-lg">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

          <p className="text-slate-400">
            Open to backend engineering opportunities.
          </p>

          <div className="mt-8 space-y-2">
            <p>prashantsmishra03@gmail.com</p>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
      </section>
    </main>
  );
}