import logo from "../../../public/assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md overflow-visible">

      {/* Menu Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#5BA69A] transition duration-300">Home</Link>
          <Link to="/classes" className="hover:text-[#5BA69A] transition duration-300">Classes</Link>
          <Link to="/trainers" className="hover:text-[#5BA69A] transition duration-300">Trainers</Link>
        </div>

        {/* Spacer for center logo */}
        <div className="md:w-40"></div>

        {/* Right Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/about" className="hover:text-[#5BA69A] transition duration-300">About</Link>
          <Link to="/blog" className="hover:text-[#5BA69A] transition duration-300">Blog</Link>
          <Link to="/contact" className="hover:text-[#5BA69A] transition duration-300">Contact</Link>
        </div>

      </div>

      {/* Floating Center Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-50 md:-bottom-12">

        <div className="bg-white p-2 rounded-full shadow-xl border border-gray-100">

          <Link to="/">
            <img
              src={logo}
              alt="Yoga Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-full shadow-md hover:scale-105 transition"
            />
          </Link>

        </div>

      </div>

    </nav>
  );
}