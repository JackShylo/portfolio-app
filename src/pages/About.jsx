import { motion } from "framer-motion";

const timeline = [
  {
    date: "2023 - Present",
    title: "AI Content Generator",
    description:
      "Built an AI-powered content generation tool using React, Node.js, and OpenAI API.",
  },
  {
    date: "2022 - 2023",
    title: "Portfolio Redesign",
    description:
      "Redesigned my personal portfolio with React, Tailwind CSS, and Framer Motion.",
  },
  {
    date: "2021 - 2022",
    title: "YouTube Title & Thumbnail Tool",
    description:
      "Created a tool to generate optimized YouTube titles and thumbnails using AI.",
  },
];

export default function About() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Image */}
        <motion.div
          className="md:w-1/3 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/me.jpg"
            alt="Jack Kelly"
            className="rounded-2xl shadow-lg w-64 md:w-full"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="md:w-2/3 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Intro */}
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi! I'm Jack, a web developer passionate about building beautiful,
            functional applications. I enjoy working with React, Tailwind, and
            AI-powered tools to bring ideas to life.
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "JavaScript", "Node.js", "AI Integration"].map(
                (tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Fun / Personal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Fun Fact</h3>
            <p>I love video games, hiking, and experimenting with AI-powered tools in my free time.</p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience & Projects</h3>
            <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="mb-8 ml-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <span className="absolute -left-4 mt-1 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="/projects"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              View My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
