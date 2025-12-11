import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import '../App.css';

export default function ResumeDownload() {
  return (
    <section className="py-16 px-6 text-white opacity-100">
      <motion.div 
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      >

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Download My Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white max-w-xl mx-auto mb-10"
        >
          Get a clean, professional copy of my CV to review my skills, 
          experience, and past work in detail.
        </motion.p>

        {/* Download Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="primary mx-auto p-8 rounded-2xl shadow-xl max-w-md"
        >
          <h3 className="text-2xl font-semibold mb-3">Resume (PDF)</h3>
          {/*<p className="text-gray-600 mb-6 text-sm">
            Updated: 2025 — Includes education, skills, work experience & projects.
          </p>*/}

          {/* Download button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/CV - Jack Kelly.pdf"   // <--- Replace with your actual file name
            download
            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-indigo-600/30 transition"
          >
            <ArrowDownTrayIcon className="w-6 h-6" />
            Download PDF
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
