import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const timeline = [
  {
    date: "2019",
    title: "Student @ Vision College",
    description:
      "New Zealand Diploma in Web Development and Design (Level 5)",
  },
  {
    date: "2020",
    title: "Student @ Vision College",
    description:
      "New Zealand Diploma in Software Development (Level 6)",
  },
  {
    date: "2022 - Present",
    title: "Crew Trainer @ McDonald's",
    description:
      "Manage and train new crew members, ensuring high standards of customer service and operational efficiency.",
  },
  {
    date: "2026",
    title: "Portfolio Redesign",
    description:
      "Redesigned my personal portfolio with React, Tailwind CSS, and Framer Motion.",
  },
];


export default function About() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Image */}
        <motion.div
          className="md:w-1/3 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>
        <motion.div
          className="md:w-2/3 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Intro */}
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi! I'm Jack, a 24 year old Web Developer & Software Engineer passionate about building beautiful,
            functional applications. I enjoy working with React, Tailwind, and
            AI-powered tools to bring ideas to life.
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "JavaScript", "C#", "AI Integration"].map(
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Fun Fact</h3>
            <p>I love video games such as Counter-Strike 2, Rust and Pokemon VGC</p>
            <p>I also like to build computers and code in my free time</p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
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
                  viewport={{ once: true, amount: 0.3 }}
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              View My Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
