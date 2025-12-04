// src/components/BentoGrid.jsx
import { motion } from "framer-motion";

export default function ProjectCard({ index, title, description, link, tech = [] }) {
  return (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <h3 className="text-2xl text-white font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((techItem, idx) => (
          <span
            key={idx}
            className="text-sm px-2 py-1 bg-gray-700 rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>
    </motion.a>
  );
}


