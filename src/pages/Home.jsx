import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <div className="max-w-4xl text-center">

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/60 backdrop-blur border border-gray-700 text-sm"
        >
          ✨ Front-End Developer & AI Builder
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-indigo-400">Jack</span> — I build
          modern, fast, and AI-powered web experiences.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Web developer with 2+ years experience building clean, responsive UIs.  
          Currently creating AI-driven tools and modern portfolio projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects" className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg hover:shadow-indigo-500/30">
              View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition">
              Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
