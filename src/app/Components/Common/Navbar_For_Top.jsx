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
      <div className="navbar z-50 relative rounded-lg  " ref={menuRef}>
        <div className="navbar-start">
          {/* <a
            className="text-[33px] md:text-5xl text-black font-bold from-neutral-content uppercase underline decoration-black"
            href="/"
          >
            mahfu<span className="text-primary">Z</span>
            <span className="text-black"></span>
          </a> */}
          {/* <Image
            src="https://i.ibb.co/LRKjYK8/Black-White-Simpel-Monogram-Initial-Logo-2.png"
            height={100}
            width={300}
            alt=""
            className="md:h-24 h-24 w-auto rounded-lg"
          /> */}
          <Image
            src="https://i.ibb.co/cDwvmMf/Black-White-Simpel-Monogram-Initial-Logo-3.png"
            height={100}
            width={300}
            alt=""
            className="md:h-32 h-20 w-auto rounded-lg"
          />
          {/* <Image
            src="https://i.ibb.co/qBbcXZd/Black-White-Simpel-Monogram-Initial-Logo-1.png"
            height={100}
            width={300}
            alt=""
            className="md:h-32 h-20 w-auto rounded-lg ml-20"
          /> */}
          {/* <Image
            src="https://i.ibb.co/whPz5YC/Black-White-Simpel-Monogram-Initial-Logo-1.png"
            height={100}
            width={300}
            alt=""
            className="h-32 w-auto rounded-lg"
          /> */}
          {/* <Image
            src="https://i.ibb.co/LzN032c/Black-White-Simpel-Monogram-Initial-Logo.png"
            height={100}
            width={300}
            alt=""
            className="h-32 w-auto rounded-lg"
          /> */}
          {/* <Image
            src="https://i.ibb.co/S0ktDzx/Screenshot-2024-08-06-221538.png"
            height={100}
            width={300}
            alt=""
            className="h-32 w-auto"
          /> */}
          {/* <Image
            src="https://i.ibb.co/7rdZcMF/Screenshot-2024-08-06-220901.png"
            height={100}
            width={300}
            alt=""
          /> */}
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label className="rounded-lg swap swap-rotate bg-primary text-white h-10 w-12 lg:text-primary md:h-12 md:w-14">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className=""
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
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
              className={`menu menu-sm dropdown-content lg:hidden glass bg-primary bg-opacity-100 z-[1] mt-3 md:w-52 w-36 p-2 shadow rounded-lg text-white ${
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
