import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="primary shadow-md p-4 border-b-2 border-transparent">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Portfolio
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span
            className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-lg text-white">
          <Link to="/" className="hover:text-indigo-300">Home</Link>
          <Link to="/projects" className="hover:text-indigo-300">Projects</Link>
          <Link to="/about" className="hover:text-indigo-300">About</Link>
          <Link to="/contact" className="hover:text-indigo-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className={`flex flex-col text-white ${open ? "space-y-4" : "space-y-0"}`}>
          <Link to="/" className="pl-1">Home</Link>
          <Link to="/projects" className="pl-1">Projects</Link>
          <Link to="/about" className="pl-1">About</Link>
          <Link to="/contact" className="pl-1">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
