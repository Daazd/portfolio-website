import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    name: "Celestial-App",
    description:
      "Star coordinate lookup app featuring a NASA API-powered chatbot for astronomical queries, interactive 3D star visualizations with Three.js, and a gallery view for space imagery. Built with a full MongoDB backend.",
    techTags: ["React", "TypeScript", "Three.js", "MUI", "MongoDB", "Recharts", "NASA API"],
    githubUrl: "https://github.com/Daazd/Celestial-App",
    screenshots: [
      "https://github.com/user-attachments/assets/5aa6a7b8-c562-40d4-86e3-e469aff8b623",
      "https://github.com/user-attachments/assets/bbeccedd-9510-40c5-b550-f054d12b0101",
      "https://github.com/user-attachments/assets/5b9acae5-7dab-4b4d-87b9-e7cd24f1d353",
    ],
  },
  {
    name: "IDS_System_AWS",
    description:
      "Production-grade Intrusion Detection System deployed on AWS for detecting abnormal network behavior and attacks. Uses ML models to identify patterns, with Terraform IaC for all infrastructure.",
    techTags: ["Python", "AWS", "Terraform", "Scapy", "TRex", "scikit-learn", "Schedule"],
    githubUrl: "https://github.com/Daazd/IDS_System_AWS",
    screenshots: [
      "https://github.com/user-attachments/assets/e5fd508b-cbba-4a6e-83ba-c3f4ab35fa9c",
      "https://github.com/user-attachments/assets/3da799ca-64d2-4438-8323-c87fa9069e42",
    ],
  },
  {
    name: "Machine-Learning-Pipeline-SageMaker",
    description:
      "Multi-format ML pipeline leveraging AWS SageMaker for model training and deployment, with Terraform for IaC, Step Functions for orchestration, Lambda for serverless processing, and Docker containers via ECR.",
    techTags: ["AWS SageMaker", "Terraform", "Docker", "Python", "scikit-learn", "Step Functions", "Lambda", "S3", "ECR"],
    githubUrl: "https://github.com/Daazd/Machine-Learning-Pipeline-SageMaker",
    screenshots: [],
  },
  {
    name: "Dune-Card-Game",
    description:
      "Fully-featured card game immersed in the Dune universe and lore with a React/Vite frontend and Django REST backend. Includes a complete CI/CD pipeline with Docker, AWS ECR, Elastic Beanstalk, and Kubernetes.",
    techTags: ["React", "Vite", "Django", "MUI", "Docker", "AWS ECR", "Elastic Beanstalk", "GitHub Actions", "Kubernetes"],
    githubUrl: "https://github.com/Daazd/Dune-Card-Game",
    screenshots: [
      "https://github.com/user-attachments/assets/a0197ac4-f02b-4d3a-b2c0-69ce689c6c66",
      "https://github.com/user-attachments/assets/3986d868-3c91-4c2a-8710-2c95ab1b4137",
      "https://github.com/user-attachments/assets/7aef7fc3-4d7e-4cf4-a940-ba23ef3e7176",
    ],
  },
  {
    name: "Poe-trade",
    description:
      "Native Path of Exile trading assistant built specifically for Linux using Electron. Features real-time trade monitoring, price checking, and inventory management with a modern React/TypeScript UI.",
    techTags: ["Electron", "React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Axios"],
    githubUrl: "https://github.com/Daazd/Poe-trade",
    screenshots: [],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-24 bg-[#0a0a0f]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Highlighted work spanning cloud infrastructure, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} {...project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
