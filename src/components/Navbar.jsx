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
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Portfolio
        </Link>

        <div className="flex items-center space-x-6 text-lg">
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

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
