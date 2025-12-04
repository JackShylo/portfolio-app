import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-white text-center">
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
