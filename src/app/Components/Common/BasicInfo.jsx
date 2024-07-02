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
} from "react-icons/fa";

export default function BasicInfo() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
        <div className="relative">
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fparsonal-info%2Fparson-img-1.png&w=256&q=75"
            alt="Profile Picture"
            className="w-full"
            width={500}
            height={500}
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Monalisa Ashley</h2>
          <p className="text-gray-600">UI/UX Designer</p>
          <div className="flex justify-center space-x-4 my-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center text-gray-600 space-x-2">
              <FaPhoneAlt />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center justify-center text-gray-600 space-x-2">
              <FaEnvelope />
              <span>Example@Mail.Com</span>
            </div>
            <div className="flex items-center justify-center text-gray-600 space-x-2">
              <FaMapMarkerAlt />
              <span>Hong Kong China</span>
            </div>
            <div className="flex items-center justify-center text-gray-600 space-x-2">
              <FaCalendarAlt />
              <span>May 27, 1990</span>
            </div>
          </div>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
