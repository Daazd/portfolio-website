"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectCardProps {
  name: string;
  description: string;
  techTags: string[];
  githubUrl: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
}

const hardCodedProjects: ProjectCardProps[] = [
  {
    name: "Chess",
    description: "Chess game built with React featuring full game logic, move validation, and an interactive chessboard UI.",
    techTags: ["React", "chess.js", "chessboardjsx"],
    githubUrl: "https://github.com/Daazd/Chess",
  },
  {
    name: "inventory-app",
    description: "Full-stack RESTful CRUD inventory tracking application with authentication, real-time updates, and a clean Material UI dashboard.",
    techTags: ["React", "Express", "Sequelize", "SQLite", "MUI"],
    githubUrl: "https://github.com/Daazd/inventory-app",
  },
  {
    name: "Machine-Learning-end-to-end-pipeline",
    description: "End-to-end machine learning pipeline project covering data ingestion, preprocessing, model training, evaluation, and deployment.",
    techTags: ["Python", "ML", "scikit-learn"],
    githubUrl: "https://github.com/Daazd/Machine-Learning-end-to-end-pipeline",
  },
  {
    name: "Machine-Learning",
    description: "Flask-based ML prediction API with joblib model serialization and serving. Demonstrates productionizing scikit-learn models.",
    techTags: ["Python", "Flask", "scikit-learn", "joblib"],
    githubUrl: "https://github.com/Daazd/Machine-Learning",
  },
  {
    name: "POE_Bot",
    description: "Path of Exile automation bot for streamlining repetitive in-game tasks and trade interactions.",
    techTags: ["Python"],
    githubUrl: "https://github.com/Daazd/POE_Bot",
  },
  {
    name: "File-Handler",
    description: "Python file handler project for building knowledge around file I/O operations, directory management, and file processing utilities.",
    techTags: ["Python"],
    githubUrl: "https://github.com/Daazd/File-Handler",
  },
  {
    name: "Archaic_Migration_Patterns",
    description: "Interactive visualization of archaic human migration patterns using JavaScript and Chakra UI for an educational web experience.",
    techTags: ["JavaScript", "Chakra UI"],
    githubUrl: "https://github.com/Daazd/Archaic_Migration_Patterns",
  },
  {
    name: "Travel-Agency-",
    description: "Travel agency landing page with modern design, destination showcases, and booking call-to-actions built in pure HTML/CSS.",
    techTags: ["HTML", "CSS"],
    githubUrl: "https://github.com/Daazd/Travel-Agency-",
  },
  {
    name: "Test-for-Grafana",
    description: "Grafana monitoring test project exploring dashboards, alerting, and metrics visualization with Python-generated test data.",
    techTags: ["Python", "Grafana"],
    githubUrl: "https://github.com/Daazd/Test-for-Grafana",
  },
  {
    name: "Bitcoin-Notifications-HTTP",
    description: "Bitcoin price notification system using IFTTT webhooks to deliver real-time price alerts via SMS and email.",
    techTags: ["Python", "Requests", "IFTTT"],
    githubUrl: "https://github.com/Daazd/Bitcoin-Notifications-HTTP",
  },
  {
    name: "Cheeses-list",
    description: "JavaScript exercise project for practicing array manipulation, DOM interaction, and list rendering.",
    techTags: ["JavaScript"],
    githubUrl: "https://github.com/Daazd/Cheeses-list",
  },
  {
    name: "git-collaboration",
    description: "Git collaboration exercise exploring branching strategies, pull requests, merge conflicts, and team workflow best practices.",
    techTags: ["Git"],
    githubUrl: "https://github.com/Daazd/git-collaboration",
  },
];

const EXCLUDED_REPOS = new Set([
  "portfolio-website",
  "Celestial-App",
  "IDS_System_AWS",
  "Machine-Learning-Pipeline-SageMaker",
  "Dune-Card-Game",
  "Poe-trade",
  ...hardCodedProjects.map((p) => p.name),
]);

export default function AllProjects() {
  const [dynamicProjects, setDynamicProjects] = useState<ProjectCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/Daazd/repos?per_page=100&sort=updated"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const repos: GitHubRepo[] = await res.json();

        const newProjects = repos
          .filter((r) => !r.fork && !EXCLUDED_REPOS.has(r.name))
          .map((r) => ({
            name: r.name,
            description: r.description || `A ${r.language || "code"} project by Taylor Allen.`,
            techTags: r.language ? [r.language, ...r.topics.slice(0, 3)] : r.topics.slice(0, 4),
            githubUrl: r.html_url,
          }));

        setDynamicProjects(newProjects);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const allProjects = [...hardCodedProjects, ...dynamicProjects];

  return (
    <section id="projects" className="py-24 bg-[#0d1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">All Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Complete collection of repositories — from experiments to production apps
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            <span className="ml-3 text-slate-400">Loading additional repositories...</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allProjects.map((project) => (
            <ProjectCard key={project.name} {...project} featured={false} />
          ))}
        </div>

        {!loading && dynamicProjects.length > 0 && (
          <p className="text-center text-slate-600 text-sm mt-8">
            Showing {allProjects.length} repositories — dynamically loaded from GitHub API
          </p>
        )}

        {error && (
          <p className="text-center text-slate-600 text-sm mt-8">
            Showing curated repositories — live GitHub API unavailable
          </p>
        )}
      </div>
    </section>
  );
}
