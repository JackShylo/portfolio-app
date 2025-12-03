import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyPortfolio
        </Link>

        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
