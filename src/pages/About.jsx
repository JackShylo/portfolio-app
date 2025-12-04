export default function About() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-3xl min-h-screen"
      style={{
        backgroundImage: `url(src/assets/img/Setup.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <h2 className="text-4xl font-bold mb-6 text-white text-center">
        About Me
      </h2>

      <p className="text-white text-lg leading-8">
        I am a Web Developer and Software Engineer based in Christchurch, New Zealand
        with a passion for building beautiful, functional websites with support from AI-powered tools.
        I have a diploma in both Web Design & Software Engineering. 
        I love working with modern tools like React, Vite, Tailwind CSS, and AI APIs.
      </p>
    </section>
  );
}
