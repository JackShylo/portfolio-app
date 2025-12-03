import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}
