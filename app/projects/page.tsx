import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/constants";
import React from "react";

export default function page() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <h3 className="text-xl font-bold mb-2">PROJECTS</h3>
      <div className="mx-auto py-2  max-w-7xl grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            url={project.url}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}
