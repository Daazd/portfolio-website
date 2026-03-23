const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "Vite", "Three.js", "Tailwind CSS", "MUI", "Chakra UI"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Django", "Flask", "Sequelize", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "AWS SageMaker", "ECR", "S3", "Lambda", "Step Functions",
      "Elastic Beanstalk", "SNS", "DynamoDB", "Terraform", "Docker",
      "Kubernetes", "GitHub Actions", "Grafana",
    ],
  },
  {
    title: "ML / Data Science",
    icon: "🤖",
    skills: ["scikit-learn", "pandas", "numpy", "SageMaker"],
  },
  {
    title: "Other",
    icon: "🛠️",
    skills: ["Electron", "Git", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I use to build scalable, production-ready applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0a0a0f] border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200 cursor-default"
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
