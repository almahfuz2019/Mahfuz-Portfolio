import Image from "next/image";
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

export default function BasicInfo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white  rounded-xl px-10  shadow-lg  w-full  ">
        <div className="relative ">
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fparsonal-info%2Fparson-img-1.png&w=256&q=75"
            alt="Profile Picture"
            className="w-full rounded-xl -mt-[50%]"
            width={500}
            height={500}
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-[26px] font-medium leading-[39px] ">
            Monalisa Ashley
          </h2>
          <p className="text-black text-sm my-2 font-medium leading-[28px] bg-secondary rounded-md py-[4px] px-[20px]">
            UI/UX Designer
          </p>
          <div className="flex justify-center space-x-4 my-4">
            <a
              href="#"
              className="text-[#1773EA] bg-secondary p-2 rounded-md hover:text-white hover:bg-primary"
            >
              <FaFacebookF className="text-xl leading-[20px]" />
            </a>
            <a
              href="#"
              className="text-[#1C9CEA] bg-secondary p-2 rounded-md hover:text-white hover:bg-primary"
            >
              <FaTwitter className="text-xl leading-[20px]" />
            </a>
            <a
              href="#"
              className="text-[#E12A7A] bg-secondary p-2 rounded-md hover:text-white hover:bg-primary"
            >
              <FaInstagram className="text-xl leading-[20px]" />
            </a>
            <a
              href="#"
              className="text-[#144679] bg-secondary p-2 rounded-md hover:text-white hover:bg-primary"
            >
              <FaLinkedinIn className="text-xl leading-[20px]" />
            </a>
          </div>
          {/* icons  */}
          <div className="space-y-3 mt-8 bg-secondary p-4 rounded-xl ">
            <div className="flex items-center   space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200">
              <div className="p-2 rounded-md shadow-md bg-white">
                <MdPhoneAndroid className="text-[#E94189]  text-2xl " />
              </div>
              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Phone</p>
                <p>+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center   space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200">
              <div className="p-2 rounded-md shadow-md bg-white">
                <MdOutlineAttachEmail className="text-[#6AB5CB]  text-2xl " />
              </div>

              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Email</p>
                <p>Example@Mail.Com</p>
              </div>
            </div>
            <div className="flex items-center   space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200">
              <div className="p-2 rounded-md shadow-md bg-white">
                <FaMapMarkerAlt className="text-[#FD7590]  text-2xl " />
              </div>

              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Location</p>
                <p>Hong Kong China</p>
              </div>
            </div>
            <div className="flex items-center   space-x-2   pb-3">
              <div className="p-2 rounded-md shadow-md bg-white">
                <FaCalendarAlt className="text-[#C77CED]  text-2xl " />
              </div>
              <div className="text-base justify-start items-start flex flex-col">
                <p className="text-xs text-[#44566C]">Birthday</p>
                <p>May 27, 1990</p>
              </div>
            </div>
          </div>
          <button className="mt-6 font-medium text-lg leading-[27px] bg-primary rounded-xl text-white px-[30px] py-[14px] flex items-center gap-x-2">
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
