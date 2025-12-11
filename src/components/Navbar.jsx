import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {
  return (
    <nav className="primary shadow-md p-4 transition-colors duration-500 border-b-2 border-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Portfolio
        </Link>
        <div className="flex items-center space-x-6 text-lg text-white">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/projects" className="hover:text-indigo-600">
            Projects
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
