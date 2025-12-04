// src/components/BentoGrid.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Content Generator",
    description: "Generate blog posts and marketing content instantly.",
    tech: ["React", "Tailwind", "OpenAI API"],
    url: "#",
  },
  {
    title: "Portfolio Redesign",
    description: "A fully responsive, modern portfolio site.",
    tech: ["React", "Framer Motion", "Tailwind"],
    url: "#",
  },
  {
    title: "YouTube Title Tool",
    description: "AI-powered YouTube title & thumbnail suggestion tool.",
    tech: ["React", "Node.js", "OpenAI API"],
    url: "#",
  },
  {
    title: "Landing Page Builder",
    description: "Quickly generate landing pages for products or apps.",
    tech: ["React", "Tailwind", "Vite"],
    url: "#",
  },
  {
    title: "Keyword Research App",
    description: "SEO keyword generator for blogs and businesses.",
    tech: ["React", "Axios", "OpenAI API"],
    url: "#",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="text-sm px-2 py-1 bg-gray-700 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
