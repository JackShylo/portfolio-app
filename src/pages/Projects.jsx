import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ResumeDownload from "../components/ResumeDownload";
import '../App.css';
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-black text-white px-6 overflow-hidden py-20 px-6 min-h-screen">
      {/* --- Animated Spotlight Glow --- */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full secondary opacity-20 blur-[120px]"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/setup.JPEG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10,
          zIndex: 0,
        }}
      />
      <h2 className="text-4xl font-bold mb-10 text-white text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>

      <ResumeDownload />

    </section>
  );
}
