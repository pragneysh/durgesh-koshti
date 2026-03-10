import { useState } from "react";
import logo from "../../../public/assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Classes", path: "/classes" },
    { name: "Trainers", path: "/trainers" },
    { name: "Seminar", path: "/seminar" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Mobile Logo */}
        <Link to="/" className="md:hidden flex items-center gap-2">
          <img src={logo} alt="Yoga Logo" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-gray-700">Yoga</span>
        </Link>

        {/* Desktop Left */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#5BA69A] transition">Home</Link>
          <Link to="/classes" className="hover:text-[#5BA69A] transition">Classes</Link>
          <Link to="/trainers" className="hover:text-[#5BA69A] transition">Trainers</Link>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:w-40"></div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/seminar" className="hover:text-[#5BA69A] transition">Seminar</Link>
          <Link to="/about" className="hover:text-[#5BA69A] transition">About</Link>
          <Link to="/blog" className="hover:text-[#5BA69A] transition">Blog</Link>
          <Link to="/contact" className="hover:text-[#5BA69A] transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Desktop Floating Logo */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-12 z-50">
        <div className="bg-white p-2 rounded-full shadow-xl border border-gray-100">
          <Link to="/">
            <img
              src={logo}
              alt="Yoga Logo"
              className="w-24 h-24 object-contain rounded-full shadow-md hover:scale-105 transition"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="mx-6 bg-[#F5F5F5] rounded-2xl shadow-md p-6 flex flex-col gap-5">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-lg hover:text-[#5BA69A] transition"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>

    </nav>
  );
}