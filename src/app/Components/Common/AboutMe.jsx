/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaCode } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <div className="rounded-lg bg-white w-full p-6">
      {/* about me  */}
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab">
          About
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>
      <p className="text-base  text-accent mt-4">
        Hi, I'm{" "}
        <span className="font-medium text-black">Abdullah Al Mahfuz,</span> a
        dedicated frontend developer with a strong foundation in Computer
        Science and Engineering. Currently pursuing my undergraduate degree, I
        focus on creating visually appealing, responsive web applications using
        modern frontend technologies. I am passionate about continuous learning,
        constantly exploring new technologies, and adopting best practices to
        enhance my skills.
        <br />
        <br />
        My goal is to deliver high-quality, efficient, and user-friendly web
        solutions.
      </p>
      {/* what we do  */}
      <h4 className="text-[28px] font-medium my-6 ">What I Do!</h4>
      <div className="grid grid-cols-1 gap-6">
        <div className=" gap-6 bg-[#EEF5FA] rounded-lg py-[15px] px-[20px] items-start">
          <div>
            <FaCode className="text-5xl text-[#DDA10C]" />
          </div>
          <div>
            <h5 className="text-2xl font-semibold mt-3">Web Design</h5>
            <p className="text-accent text-base  mt-2">
              I specialize in crafting beautiful, responsive websites that
              provide an optimal user experience across devices. Using tools
              like Figma and Adobe XD, I ensure that designs are pixel-perfect
              and 100% aligned with client expectations. My designs are
              SEO-friendly, ensuring high visibility in search engines, and
              optimized for best performance to deliver fast and efficient user
              experiences.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-6 ">
        <div className="flex justify-between gap-6 bg-[#FFF4F4] rounded-lg py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#D566FF]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-accent mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-6 bg-[#EEF5FA] rounded-lg py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#DDA10C]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-accent mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-6 bg-[#EEF5FA] rounded-lg py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#FF6080]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-accent mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-6 bg-[#FFF4F4] rounded-lg py-[15px] px-[20px] items-start">
          <div>
            {" "}
            <FaCode className="text-5xl text-[#269FFF]" />
          </div>
          <div>
            <h5 className="text-[22px] font-semibold leading-[33px]">
              Ui/Ux Design
            </h5>
            <p className="text-accent mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
      </div> */}
      {/* clients  */}
      <div className="py-16 mt-16 bg-[#F8FBFB] rounded-lg ">
        <h5 className="text-2xl font-semibold leading-[36px] text-center">
          Clients
        </h5>
        <div className="mt-10">
          <Marquee pauseOnHover="true" pauseOnClick="true">
            <Image
              src="/Images/no_clients.png"
              alt="Profile Picture"
              className="mx-5 rounded-lg"
              width="100"
              height="60"
            />
            <Image
              src="/Images/no_clients.png"
              alt="Profile Picture"
              className="mx-5 rounded-lg"
              width="100"
              height="60"
            />
            <Image
              src="/Images/no_clients.png"
              alt="Profile Picture"
              className="mx-5 rounded-lg"
              width="100"
              height="60"
            />
            <Image
              src="/Images/no_clients.png"
              alt="Profile Picture"
              className="mx-5 rounded-lg"
              width="100"
              height="60"
            />
            <Image
              src="/Images/no_clients.png"
              alt="Profile Picture"
              className="mx-5 rounded-lg"
              width="100"
              height="60"
            />
          </Marquee>
        </div>
      </div>
      <p className="text-center mt-6 text-base text-accent">
        © 2024 All Rights Reserved by{" "}
        <span className="text-black">Al Mahfuz</span>
      </p>
    </div>
  );
}
