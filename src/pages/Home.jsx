export default function Home() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Hi, I'm <span className="text-indigo-600">Jack Kelly</span>

      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Web Developer • AI Builder • Software Engineer
      </p>

      <a
        href="/projects"
        className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
