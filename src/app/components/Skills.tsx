const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "HTML/CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "Three.js", "Tailwind CSS", "MUI", "Chakra UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "Sequelize", "MongoDB", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS SageMaker",
      "Athena",
      "AgentCore",
      "Strands",
      "ECR",
      "S3",
      "Lambda",
      "Step Functions",
      "Elastic Beanstalk",
      "SNS",
      "DynamoDB",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Grafana",
    ],
    proficient: ["Athena"],
  },
  {
    title: "ML / Data",
    skills: [
      "scikit-learn",
      "pandas",
      "numpy",
      "SageMaker",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "transformers",
      "XGBoost",
      "LangChain",
      "LlamaIndex",
      "ONNX",
      "joblib",
    ],
  },
  {
    title: "Agents & AI workflows",
    skills: [
      "Agent orchestration",
      "Agent pipelining",
      "Multi-agent flows",
      "Custom agent design",
      "Tool / API routing",
      "RAG-style retrieval",
    ],
  },
  {
    title: "Other",
    skills: ["Electron", "Git", "Linux", "Selenium"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg-deep)] py-24 md:py-28">
      <div className="section-container">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono-label mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent-2)]">
            Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text)]">
            <span className="gradient-text">Stack &amp; tooling</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            What I reach for when the goal is reliability, clarity, and speed in production — not
            resume keyword stuffing.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, i) => {
            const proficientSet = new Set(
              "proficient" in category ? (category.proficient as string[]) : []
            );
            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition hover:border-[var(--accent-2)]/35 hover:shadow-[0_0_0_1px_rgba(139,124,247,0.12)] md:p-7"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="mb-5 flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {category.title}
                  </h3>
                  <span className="font-mono-label text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {proficientSet.size > 0 && (
                  <p className="mb-4 font-mono-label text-[10px] uppercase tracking-wider text-[var(--accent-2)]">
                    Highly proficient: {Array.from(proficientSet).join(", ")}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-1.5 text-sm transition group-hover:border-[var(--border-subtle)] hover:text-[var(--text)] ${
                        proficientSet.has(skill)
                          ? "border-[var(--accent-2)]/40 bg-[var(--accent-2)]/10 text-[var(--accent-2)] hover:border-[var(--accent-2)]/60"
                          : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:border-[var(--accent)]/30"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
