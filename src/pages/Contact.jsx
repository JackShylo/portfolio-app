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
    <section className="relative min-h-screen flex bg-gradient-to-b from-gray-800 to-black text-white py-20 px-6 overflow-hidden">
      {/* --- Animated Spotlight Glow --- */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full secondary opacity-20 blur-[120px]"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/setup2.JPEG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10,
          zIndex: 0,
        }}
      />
      <motion.div
          className={`group relative primary p-6 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 max-w-xl mx-auto h-min`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          >Contact Me</motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">

          <motion.text className="mb-4 block text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          >
            Feel free to reach out for collaborations, inquiries, or just to say hello! I'm always open to connecting with fellow developers, AI enthusiasts, and potential clients. Let's create something amazing together!
          </motion.text>

            {/* 🛡 Honeypot (invisible to humans) */}
            <motion.input
              type="text"
              name="botField"
              value={form.botField}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded primary border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded primary border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded primary border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.button
              type="submit"
              className="w-full py-3 bg-indigo-800 hover:bg-indigo-500 rounded-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Send Message
            </motion.button>

            {status && (
              <p className="mt-3 text-center text-green-400 font-medium">
                {status}
              </p>
            )}
          </form>
        {/* Optional Contact Info */}
        <motion.div
          className="mt-12 text-center flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>Email: <a href="mailto:JackShylo@ProtonMail.com" className="text-indigo-600 hover:underline">JackShylo@ProtonMail.com</a></p>
          <p>GitHub: <a href="https://github.com/JackShylo" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/JackShylo</a></p>
        </motion.div>
      </motion.div>
    </section>
  );
}
