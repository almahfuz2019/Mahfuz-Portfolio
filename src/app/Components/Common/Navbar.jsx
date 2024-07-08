// components/Navbar.js
import Link from "next/link";
import { FaUser, FaFileAlt, FaCode, FaBlog, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" w-16  h-screen bg-fixed flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-3 bg-white p-4 rounded-xl">
        <Link
          href="/about"
          className="flex items-center flex-col space-y-2 hover:bg-[#1b74e4] bg-[#f3f6f6] p-4 text-base leading-[28px] rounded-xl hover:text-white "
        >
          <FaUser className="text-xl" />
          <span>About</span>
        </Link>
        <Link
          href="/resume"
          className="flex items-center flex-col space-y-2 hover:bg-[#1b74e4] bg-[#f3f6f6] p-4 text-base leading-[28px] rounded-xl hover:text-white "
        >
          <FaFileAlt className="text-xl" />
          <span>Resume</span>
        </Link>
        <Link
          href="#"
          className="flex items-center flex-col space-y-2 hover:bg-[#1b74e4] bg-[#f3f6f6] p-4 text-base leading-[28px] rounded-xl hover:text-white "
        >
          <FaCode className="text-xl" />
          <span>Works</span>
        </Link>
        <Link
          href="#"
          className="flex items-center flex-col space-y-2 hover:bg-[#1b74e4] bg-[#f3f6f6] p-4 text-base leading-[28px] rounded-xl hover:text-white "
        >
          <FaBlog className="text-xl" />
          <span>Blogs</span>
        </Link>
        <Link
          href="#"
          className="flex items-center flex-col space-y-2 hover:bg-[#1b74e4] bg-[#f3f6f6] p-4 text-base leading-[28px] rounded-xl hover:text-white "
        >
          <FaEnvelope className="text-xl" />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
