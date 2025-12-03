export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <a
        href={link}
        target="_blank"
        className="text-indigo-600 font-medium hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}
