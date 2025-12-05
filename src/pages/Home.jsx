import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 overflow-hidden">

      {/* --- Animated Spotlight Glow --- */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600 opacity-20 blur-[120px]"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* --- Subtle Animated Grid Background --- */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] pointer-events-none"></div>

      <div className="relative max-w-5xl text-center z-10">

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
          Hi, I'm 
          <span
            className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                      bg-clip-text text-transparent font-extrabold animate-gradient-x ml-2"
          >
            Jack Shylo
          </span>
          <br />
          I build modern, fast, and AI-powered web experiences.
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-[3px] mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Web developer with 2+ years experience building clean, responsive UIs.  
          Currently creating AI-driven tools and modern portfolio projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }}>
            <Link 
              to="/projects"
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg hover:shadow-indigo-500/30"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }}>
            <Link 
              to="/contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}
