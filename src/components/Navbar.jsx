import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white dark:text-indigo-400">
          Portfolio
        </Link>

        <div className="flex items-center space-x-6 text-lg text-white">
          <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Projects
          </Link>
          <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
