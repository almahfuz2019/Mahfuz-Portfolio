"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Navbar_For_Top() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="pt-10">
      <div
        className="navbar z-50 relative   rounded-lg  bg-white lg:bg-transparent"
        ref={menuRef}
      >
        <div className="navbar-start">
          <a
            className="text-[33px] md:text-5xl text-primary font-bold from-neutral-content"
            href="/"
          >
            al ma<span className="text-black">h</span>fuz
            <span className="text-black">.</span>
          </a>
          {/* <Image src="/Images/logo.png" height={100} width={300} alt="" /> */}
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end ">
            <label className=" rounded-lg   swap swap-rotate bg-primary text-white h-12 w-12  lg:text-primary  md:h-16 md:w-16">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className=""
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current "
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            {/* dropdown-content */}
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content lg:hidden  glass bg-primary bg-opacity-100 z-[1] mt-3 md:w-52 w-36 p-2 shadow rounded-lg text-white ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="/" className="text-sm md:text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm md:text-xl">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-sm md:text-xl">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-sm md:text-xl">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm md:text-xl">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm md:text-xl">
                  Contact
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
