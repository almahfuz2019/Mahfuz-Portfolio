// components/Navbar.js
import Link from "next/link";
import { FaUser, FaFileAlt, FaCode, FaBlog, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 w-16 h-screen flex flex-col justify-center items-center">
      <Link href="/about" className="flex items-center space-y-4">
        <FaUser className="text-xl" />
        <span>About</span>
      </Link>
      <Link href="/resume" className="flex items-center space-y-4">
        <FaFileAlt className="text-xl" />
        <span>Resume</span>
      </Link>
      <Link href="#" className="flex items-center space-y-4">
        <FaCode className="text-xl" />
        <span>Works</span>
      </Link>
      <Link href="#" className="flex items-center space-y-4">
        <FaBlog className="text-xl" />
        <span>Blogs</span>
      </Link>
      <Link href="#" className="flex items-center space-y-4">
        <FaEnvelope className="text-xl" />
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default Navbar;
