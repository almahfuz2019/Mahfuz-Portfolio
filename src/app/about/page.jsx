/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa6";
export default function page() {
  return (
    <div className="rounded-xl bg-white w-full p-6">
      {/* about me  */}
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px]">About</h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>
      <p className="text-base text-[#44566c] mt-4">
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
        <br />
        <br />
        My aim is to bring across your message and identity in the most creative
        way. I created web design for many famous brand companies.
      </p>
      {/* what we do  */}
      <h4 className="text-2xl font-medium my-6 leading-[26px]">What I Do!</h4>
      <div className="grid grid-cols-2 gap-6 ">
        <div className="flex justify-between gap-6 bg-[#FFF4F4] rounded-xl py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#D566FF]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-[#44566c] mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-6 bg-[#EEF5FA] rounded-xl py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#DDA10C]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-[#44566c] mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-6 bg-[#EEF5FA] rounded-xl py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#FF6080]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-[#44566c] mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-6 bg-[#FFF4F4] rounded-xl py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#269FFF]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-[#44566c] mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
      </div>
      {/* clients  */}
      <div className="py-16 mt-16 bg-[#F8FBFB] rounded-xl px-6">
        <h5 className="text-2xl font-semibold leading-[36px] text-center">
          Client
        </h5>
        <div className="grid grid-cols-5 gap-5 mt-10">
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75"
            alt="Profile Picture"
            className=""
            width="100"
            height="60"
          />
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75"
            alt="Profile Picture"
            className=""
            width="100"
            height="60"
          />
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75"
            alt="Profile Picture"
            className=""
            width="100"
            height="60"
          />
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75"
            alt="Profile Picture"
            className=""
            width="100"
            height="60"
          />
          <Image
            src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fclient%2Fclient-logo-1.png&w=384&q=75"
            alt="Profile Picture"
            className=""
            width="100"
            height="60"
          />
        </div>
      </div>
      <p className="text-center mt-6 text-base text-[#44566c]">
        © 2024 All Rights Reserved by elite-themes24.
      </p>
    </div>
  );
}
