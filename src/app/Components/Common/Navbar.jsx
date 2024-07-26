"use client";
// components/Navbar.js
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaFileAlt, FaCode, FaBlog, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", icon: FaUser, label: "About" },
    { href: "/resume", icon: FaFileAlt, label: "Resume" },
    { href: "/works", icon: FaCode, label: "Works" },
    { href: "#", icon: FaBlog, label: "Blogs" },
    { href: "/contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <nav className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex flex-col gap-3 relative">
        {menuItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center flex-col space-y-2 p-4 text-base leading-[28px] rounded-xl transition-all duration-500 ease-in-out transform ${
              pathname === item.href
                ? "bg-primary text-white"
                : "bg-[#f3f6f6] hover:bg-[#1b74e4] hover:text-white"
            } ${
              hoveredIndex === index && pathname !== item.href
                ? "scale-105"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
