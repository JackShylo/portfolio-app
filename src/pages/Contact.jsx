export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-xl">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Contact Me
      </h2>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
        />

        <button className="w-full py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
