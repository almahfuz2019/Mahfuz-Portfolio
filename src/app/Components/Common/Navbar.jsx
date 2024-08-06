"use client";
// components/Navbar.js
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaFileAlt, FaCode, FaBlog, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  return (
    <nav className="bg-white p-4 rounded-lg shadow-lg sticky top-2 z-20">
      <div className="flex flex-col gap-3 relative ">
        <Link
          href="/"
          className={`flex lg:hidden  items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-lg transition-all duration-500 ease-in-out transform ${
            pathname === "/"
              ? "bg-primary text-white"
              : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
          } ${hoveredIndex === 0 && pathname !== "/" ? "scale-105" : ""}`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FaUser className="text-xl" />
          <span>Home</span>
        </Link>
        <Link
          href="/about"
          className={`flex items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-lg transition-all duration-500 ease-in-out transform ${
            pathname === "/about"
              ? "bg-primary text-white"
              : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
          } ${hoveredIndex === 1 && pathname !== "/about" ? "scale-105" : ""}`}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FaUser className="text-xl" />
          <span>About</span>
        </Link>
        <Link
          href="/resume"
          className={`flex items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-lg transition-all duration-500 ease-in-out transform ${
            pathname === "/resume"
              ? "bg-primary text-white"
              : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
          } ${hoveredIndex === 2 && pathname !== "/resume" ? "scale-105" : ""}`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FaFileAlt className="text-xl" />
          <span>Resume</span>
        </Link>
        <Link
          href="/works"
          className={`flex items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-lg transition-all duration-500 ease-in-out transform ${
            pathname === "/works"
              ? "bg-primary text-white"
              : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
          } ${hoveredIndex === 3 && pathname !== "/works" ? "scale-105" : ""}`}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FaCode className="text-xl" />
          <span>Works</span>
        </Link>
        <Link
          href="/blogs"
          className={`flex items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-lg transition-all duration-500 ease-in-out transform ${
            pathname === "/blogs"
              ? "bg-primary text-white"
              : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
          } ${hoveredIndex === 4 && pathname !== "/blogs" ? "scale-105" : ""}`}
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FaBlog className="text-xl" />
          <span>Blogs</span>
        </Link>
        <Link
          href="/contact"
          className={`flex items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-lg transition-all duration-500 ease-in-out transform ${
            pathname === "/contact"
              ? "bg-primary text-white"
              : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
          } ${
            hoveredIndex === 5 && pathname !== "/contact" ? "scale-105" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FaEnvelope className="text-xl" />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
