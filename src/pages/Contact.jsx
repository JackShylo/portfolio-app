import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { motion } from "framer-motion";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    botField: "", // 🛡 honeypot field
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛡 HONEYPOT PROTECTION
    if (form.botField !== "") {
      console.warn("Bot detected — submission blocked");
      return;
    }

    // 🛡 reCAPTCHA PROTECTION
    if (!executeRecaptcha) {
      setStatus("reCAPTCHA not ready. Please try again.");
      return;
    }

    const token = await executeRecaptcha("contact_form");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      "g-recaptcha-response": token, // REQUIRED by EmailJS
    };

    try {
      await emailjs.send(
        "service_xh3ccoc",
        "template_0s2cywb",
        templateParams,
        "gS4IF1X9a4l2Hm-R5"
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "", botField: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* 🛡 Honeypot (invisible to humans) */}
          <input
            type="text"
            name="botField"
            value={form.botField}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-3 text-center text-green-400 font-medium">
              {status}
            </p>
          )}
        </form>
        {/* Optional Contact Info */}
        <motion.div
          className="mt-12 text-center flex flex-col gap-3 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>Email: <a href="mailto:JackShylo@ProtonMail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">JackShylo@ProtonMail.com</a></p>
          <p>GitHub: <a href="https://github.com/JackShylo" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/JackShylo</a></p>
        </motion.div>
      </div>
    </section>
  );
}
