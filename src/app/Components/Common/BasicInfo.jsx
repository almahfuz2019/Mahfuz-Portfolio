"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineAttachEmail, MdPhoneAndroid } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/path/to/your/file.pdf"; // Change this to the path of your PDF file
  link.download = "filename.pdf"; // Change this to the desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default function BasicInfo() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white  rounded-xl px-6  shadow-lg   ">
        <div className="relative ">
          <Image
            src="https://i.ibb.co/fpvLNdw/20240726-130302-1-removebg-preview-1.png"
            alt="Profile Picture"
            className="w-full object-cover rounded-xl -mt-[50%] shadow-2xl"
            width={500}
            height={500}
          />
        </div>
        <div className="py-6 text-center">
          <h2 className="text-[26px] font-medium leading-[39px] roboto-slab ">
            Abdullah Al Mahfuz
          </h2>
          <p className="text-black text-sm my-2 font-medium leading-[28px] bg-secondary rounded-md py-[4px] px-[20px]">
            <Typewriter
              className=""
              options={{
                strings: [
                  "Front-End Developer",
                  "React.js Developer",
                  "Next.js Developer",
                  "Responsive Web Designer",
                  "JavaScript Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <div className="flex justify-center space-x-4 my-4">
            <a
              href="#"
              className="text-[#1773EA] bg-secondary p-2 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-primary transform hover:scale-110"
            >
              <FaFacebookF className="text-xl leading-[20px]" />
            </a>
            <a
              href="#"
              className="text-[#1C9CEA] bg-secondary p-2 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-primary transform hover:scale-110"
            >
              <FaTwitter className="text-xl leading-[20px]" />
            </a>
            <a
              href="#"
              className="text-[#E12A7A] bg-secondary p-2 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-primary transform hover:scale-110"
            >
              <FaInstagram className="text-xl leading-[20px]" />
            </a>
            <a
              href="#"
              className="text-[#144679] bg-secondary p-2 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-primary transform hover:scale-110"
            >
              <FaLinkedinIn className="text-xl leading-[20px]" />
            </a>
          </div>

          {/* icons  */}
          <div className="space-y-3 mt-8 bg-secondary p-6 rounded-xl">
            <div className="flex items-center space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200 hover:bg-gray-100">
              <div className="p-2 rounded-md shadow-md bg-white">
                <MdPhoneAndroid className="text-[#E94189] text-2xl" />
              </div>
              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Phone</p>
                <a href="tel:+1234567890" className="text-black">
                  +880 1787-878743
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200 hover:bg-gray-100">
              <div className="p-2 rounded-md shadow-md bg-white">
                <MdOutlineAttachEmail className="text-[#6AB5CB] text-2xl" />
              </div>
              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Email</p>
                <a href="mailto:almahfuz2019@gmail.com" className="text-black">
                  almahfuz2019@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200 hover:bg-gray-100">
              <div className="p-2 rounded-md shadow-md bg-white">
                <FaMapMarkerAlt className="text-[#FD7590] text-2xl" />
              </div>
              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Location</p>
                <p>Sylhet, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 pb-3 hover:bg-gray-100">
              <div className="p-2 rounded-md shadow-md bg-white">
                <FaCalendarAlt className="text-[#C77CED] text-2xl" />
              </div>
              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Birthday</p>
                <p>April 21, 2000</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="mt-6 font-medium text-lg leading-[27px] bg-primary rounded-xl text-white px-[30px] py-[14px] flex justify-center items-center gap-x-2 transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 hover:shadow-lg"
              onClick={handleDownload}
            >
              <FaDownload /> Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
