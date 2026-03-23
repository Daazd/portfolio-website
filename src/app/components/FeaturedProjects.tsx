import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    name: "Celestial-App",
    highlight: "NASA data · 3D stars · conversational search",
    description:
      "Star coordinate lookup with a NASA API–powered assistant, Three.js visualizations, and a gallery of space imagery — backed by a full MongoDB stack.",
    techTags: ["React", "TypeScript", "Three.js", "MUI", "MongoDB", "Recharts", "NASA API"],
    githubUrl: "https://github.com/Daazd/Celestial-App",
    screenshots: [
      "https://github.com/user-attachments/assets/5aa6a7b8-c562-40d4-86e3-e469aff8b623",
      "https://github.com/user-attachments/assets/bbeccedd-9510-40c5-b550-f054d12b0101",
      "https://github.com/user-attachments/assets/5b9acae5-7dab-4b4d-87b9-e7cd24f1d353",
    ],
    gridClass: "lg:col-span-7 lg:row-span-2",
    featuredTall: true,
  },
  {
    name: "IDS_System_AWS",
    highlight: "Production IDS · ML detection · Terraform",
    description:
      "Intrusion detection on AWS for abnormal network behavior. ML-driven pattern recognition with full infrastructure expressed as Terraform.",
    techTags: ["Python", "AWS", "Terraform", "Scapy", "TRex", "scikit-learn", "Schedule"],
    githubUrl: "https://github.com/Daazd/IDS_System_AWS",
    screenshots: [
      "https://github.com/user-attachments/assets/e5fd508b-cbba-4a6e-83ba-c3f4ab35fa9c",
      "https://github.com/user-attachments/assets/3da799ca-64d2-4438-8323-c87fa9069e42",
    ],
    gridClass: "lg:col-span-5 lg:col-start-8 lg:row-start-1",
  },
  {
    name: "Machine-Learning-Pipeline-SageMaker",
    highlight: "SageMaker · Step Functions · containers",
    description:
      "Multi-format ML pipeline on SageMaker with Terraform IaC, Step Functions orchestration, Lambda glue, and Docker images via ECR.",
    techTags: [
      "AWS SageMaker",
      "Terraform",
      "Docker",
      "Python",
      "scikit-learn",
      "Step Functions",
      "Lambda",
      "S3",
      "ECR",
    ],
    githubUrl: "https://github.com/Daazd/Machine-Learning-Pipeline-SageMaker",
    screenshots: [],
    gridClass: "lg:col-span-5 lg:col-start-8 lg:row-start-2",
  },
  {
    name: "Dune-Card-Game",
    highlight: "Full game · Django API · CI/CD to AWS & K8s",
    description:
      "Dune-themed card game with React/Vite and Django REST. Dockerized delivery through ECR, Elastic Beanstalk, Kubernetes, and GitHub Actions.",
    techTags: [
      "React",
      "Vite",
      "Django",
      "MUI",
      "Docker",
      "AWS ECR",
      "Elastic Beanstalk",
      "GitHub Actions",
      "Kubernetes",
    ],
    githubUrl: "https://github.com/Daazd/Dune-Card-Game",
    screenshots: [
      "https://github.com/user-attachments/assets/a0197ac4-f02b-4d3a-b2c0-69ce689c6c66",
      "https://github.com/user-attachments/assets/3986d868-3c91-4c2a-8710-2c95ab1b4137",
      "https://github.com/user-attachments/assets/7aef7fc3-4d7e-4cf4-a940-ba23ef3e7176",
    ],
    gridClass: "lg:col-span-6 lg:row-start-3",
  },
  {
    name: "Poe-trade",
    highlight: "Linux desktop · Electron · live trading UX",
    description:
      "Path of Exile trading assistant for Linux: real-time monitoring, pricing, and inventory in a React + TypeScript + Tailwind shell.",
    techTags: ["Electron", "React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Axios"],
    githubUrl: "https://github.com/Daazd/Poe-trade",
    screenshots: [],
    gridClass: "lg:col-span-6 lg:row-start-3 lg:col-start-7",
  },
] as const;

export default function FeaturedProjects() {
  return (
    <section id="featured" className="bg-[var(--bg-surface)] py-24 md:py-28">
      <div className="section-container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono-label mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
              Case-shaped work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--text)]">
              <span className="gradient-text">Featured projects</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              Depth over volume: cloud systems, ML pipelines, and full-stack products — each chosen
              to show a different axis of how I build.
            </p>
          </div>
          <p className="max-w-xs font-mono-label text-xs leading-relaxed text-[var(--text-muted)]">
            Layout adapts on large screens (bento). On small screens, stories stack in priority order.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          {featuredProjects.map((project) => (
            <div key={project.name} className={`min-h-0 ${project.gridClass}`}>
              <ProjectCard
                name={project.name}
                highlight={project.highlight}
                description={project.description}
                techTags={[...project.techTags]}
                githubUrl={project.githubUrl}
                screenshots={[...project.screenshots]}
                featured
                featuredTall={"featuredTall" in project ? project.featuredTall : false}
                className="min-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
