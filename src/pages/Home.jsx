export default function Home() {
  return (
    <section
      className="container mx-auto px-6 py-20 text-center relative min-h-screen"
      style={{
        backgroundImage: `url(src/assets/img/Te-Pae.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">
          Hi, I'm <span className="text-white">Jack Shylo</span>
        </h1>
        <p className="text-xl text-white mb-10">
          Web Developer • Software Engineer • Ai Builder
        </p>
        <a
          href="/projects"
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition"
        >
          View My Work &#8594;
        </a>
      </div>
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
}
