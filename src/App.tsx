export default function Home() {
  const skills = [
    "Java",
    "Spring Boot",
    "J2EE",
    "Event-Driven Architecture",
    "Problem Solving",
    "ELK Stack",
    "Drools",
    "Kafka",
    "IBM MQ",
    "Redis",
    "Docker",
    "Kubernetes",
    "Microservices",
    "System Design",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "NoSQL",
    "AWS( RDS, S3, Ec2, Route53, CloudWatch )",
  ];

const experiences = [
  {
    company: "Infosys",
    role: "Associate Consultant",
    period: "Aug 2025 - Present",
    points: [
      "Developed scalable Spring Boot microservices for payment message routing systems handling high-volume transaction workflows with 99.9% availability.",
      "Designed event-driven architecture using Apache Kafka and IBM MQ, improving asynchronous processing reliability and system consistency.",
      "Implemented SWIFT CBPR+ structured address validation and transformation workflows, achieving 95%+ compliance accuracy in cross-border payments.",
      "Collaborated with architects, QA, and business teams during requirement analysis, solution design, and production deployment cycles.",
      "Documented microservices architecture, APIs, and deployment processes in Confluence to improve cross-team knowledge sharing and operational readiness.",
      "Contributed to production debugging, incident resolution, and service reliability improvements.",
    ],
  },
  {
    company: "Persistent Systems",
    role: "Senior Software Engineer",
    period: "Jul 2024 - Jul 2025",
    points: [
      "Refactored monolithic backend systems into scalable microservices, improving maintainability, fault isolation, and deployment flexibility.",
      "Worked on SmartBear AlertSite, delivering backend enhancements for observability, notifications, and API reliability.",
      "Implemented API rate limiting mechanisms, improving system stability under high-traffic conditions.",
      "Integrated Twilio (WhatsApp & SMS) for notification workflows, improving alert delivery reliability for critical events.",
      "Integrated BugSnag for centralized error tracking and production monitoring, improving incident detection and debugging speed.",
      "Contributed to CI/CD pipelines using Docker, Git, and Maven for streamlined and consistent deployments.",
    ],
  },
  {
    company: "Persistent Systems",
    role: "Software Engineer",
    period: "Jun 2022 - Jun 2024",
    points: [
      "Implemented Redis and Memcached caching strategies, reducing database load by 30% and improving API latency.",
      "Increased automated test coverage to 80%+ using JUnit and Mockito, improving release stability and reducing production defects.",
      "Monitored production systems and resolved incidents to maintain high availability and system performance.",
      "Participated in Agile ceremonies including sprint planning, estimation, and feature delivery with cross-functional teams.",
    ],
  },
];

  const projects = [
    {
      title: "Monitoring & Alerting System",
      description:
        "Contributed to SmartBear AlertSite, an enterprise monitoring and observability platform for tracking application availability and performance.",
      tech: "Java • Spring Boot • Docker • Kafka • Redis • Grafana • AWS",
    },
    {
      title: "Payment Traffic Controller",
      description:
        "Rule-based payment routing platform enabling controlled migration between legacy and next-gen payment systems.",
      tech: "Java • Spring Boot • ReactJS • Drools • MySQL • Kafka • Docker",
    },
    {
      title: "SWIFT ISO 20022 Transformation",
      description:
        "Built transformation logic for converting unstructured payment data into ISO 20022 compliant formats for SWIFT CBPR+ migration.",
      tech: "Java • Spring Boot • ISO 20022 • IBM MQ • AWS • SQL",
    },
    {
      title: "URL Shortener",
      description:
        "Production-ready URL shortening service with analytics, caching, and rate limiting.",
      tech: "Java • Spring Boot • PostgreSQL • Redis • Docker",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">
          Prashant Shekhar Mishra
        </h1>

        <h2 className="text-2xl text-slate-300 mb-6">
          Backend Engineer | Java • Spring Boot • Microservices • Kafka • AWS 
        </h2>
       <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
        Backend Software Engineer with 4+ years of experience building scalable
        enterprise applications and distributed systems using Java, Spring Boot,
        Microservices, Kafka, and Cloud technologies.
        <br />
        <br />
        Currently working at Infosys on cross-border payment and financial messaging
        systems with SWIFT CBPR+ compliance.
      </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <a
          href="https://drive.google.com/file/d/1YcUtk05svzu7BlDL-e3bJMxPUVR7SfZU/view?usp=drive_link"
          download
          className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400"
          >
          Download Resume
      </a>

          <a
            href="https://github.com/PrashantShekhar-Mishra/"
            className="px-6 py-3 border border-slate-700 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-shekhar-mishra/"
            className="px-6 py-3 border border-slate-700 rounded-lg"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/prashantsmishra024"
            className="px-6 py-3 border border-slate-700 rounded-lg"
          >
            LeetCode
          </a>

          <a
            href="https://www.hackerrank.com/profile/prashantsmishra1"
            className="px-6 py-3 border border-slate-700 rounded-lg"
          >
            HackerRank
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["4+", "Years Experience"],
            ["500+", "DSA Problems"],
            ["99.9%", "System Availability"],
            ["10+", "Microservices Delivered"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-slate-900 p-6 rounded-xl text-center border border-slate-800 hover:border-cyan-500 transition"
            >
              <h3 className="text-4xl font-bold text-cyan-400">{value}</h3>
              <p className="text-slate-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 text-lg leading-relaxed text-left">
            I'm a Backend Software Engineer with 4+ years of experience building
            scalable, high-performance applications using Java, Spring Boot, and
            microservices architecture. Currently, I work as an Associate Consultant
            at Infosys, developing enterprise payment messaging solutions that support
            cross-border transactions and SWIFT CBPR+ compliance.

            <br /><br />

            My expertise includes distributed systems, event-driven architectures with
            Kafka and IBM MQ, REST APIs, caching technologies, and cloud-native
            development. Throughout my career at Infosys and Persistent Systems, I've
            helped modernize legacy applications, improve system reliability, optimize
            performance, and deliver production-ready solutions for enterprise clients.

            <br /><br />

            I enjoy solving complex engineering challenges, designing maintainable
            backend systems, and continuously learning new technologies. I'm passionate
            about building reliable software that scales efficiently while maintaining
            security, performance, and operational excellence.
          </p>
        </div>
      </section>
      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-slate-900 p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
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

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-slate-400 mt-4">{project.description}</p>
              <p className="text-cyan-400 mt-4 text-sm">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      {/* CERTIFICATIONS */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold mb-10">Certifications</h2>

  <div className="grid md:grid-cols-2 gap-4">
    {[
      {
        name: "Microsoft Azure Fundamentals (AZ-900)",
        link: "https://www.credly.com/badges/77c44fa6-06d4-47bc-9279-3fa520384d3a/public_url",
      },
      {
        name: "HackerRank",
        link: "https://www.hackerrank.com/profile/prashantsmishra1",
      }
    ].map((cert) => (
      <a
        key={cert.name}
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 p-5 rounded-lg hover:bg-slate-800 transition duration-300 block"
      >
        <div className="flex items-center justify-between">
          <span>{cert.name}</span>
          <span className="text-blue-400">↗</span>
        </div>
      </a>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

          <p className="text-slate-400">
            Open to backend engineering opportunities and system design discussions.
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