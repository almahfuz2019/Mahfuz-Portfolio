/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="rounded-lg bg-white w-full p-6">
      {/* about me  */}
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab ">
          Resume
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      {/* what we do  */}

      <div className="grid grid-cols-1 gap-16 mt-6">
        {/* Education */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center leading-none mb-2">
            <Image
              src="/Images/education.webp"
              width="30"
              height="27"
              alt="Education Icon"
            />
            <h5 className="text-[26px] font-medium">Education</h5>
          </div>
          <div className="bg-[#faf7ef]  rounded-lg py-[15px] px-[20px]">
            <p className="text-base  text-accent mb-1">2023-Present</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              B.Sc. in Computer Science and Engineering (CSE)
              <span className="text-accent block font-normal ">
                Metropolitan University
              </span>
            </h5>
          </div>
          <div className="bg-[#EEF5FA] rounded-lg py-[15px] px-[20px]">
            <p className="text-base  text-accent mb-1">2018-2023</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Diploma in Engineering (Computer Science and Technology)
              <span className="text-accent block font-normal ">
                Moulvibazar Polytechnic Institute
              </span>
            </h5>
          </div>
          <div className="bg-[#faf7ef]  rounded-lg py-[15px] px-[20px]">
            <p className="text-base  text-accent mb-1">2017-2018</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Dakhil
              <span className="text-accent block font-normal ">
                Moulvibazar Jamea Islamia Dakhil Madrasah
              </span>
            </h5>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center leading-none mb-2">
            <Image
              src="/Images/Experience.webp"
              width="30"
              height="27"
              alt="Experience Icon"
            />
            <h5 className="text-[26px] font-medium">Experience</h5>
          </div>
          <div className="bg-[#EEF5FA] rounded-lg py-[15px] px-[20px]">
            <p className="text-base  text-accent mb-1">Feb 2024 - Present</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Frontend Developer (
              <span className="text-primary">React Js and Next Js</span>)
              <span className="text-accent block font-normal ">
                TechPlato, Inc. (Canada)
              </span>
            </h5>
          </div>
          <div className="bg-[#faf7ef]    rounded-lg py-[15px] px-[20px]">
            <p className="text-base  text-accent mb-1">Feb 2023 - June 2023</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Guest Teacher (Computer Science and Technology)
              <span className="text-accent block font-normal ">
                Moulvibazar Polytechnic Institute
              </span>
            </h5>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="py-16 mt-16 bg-[#F8FBFB] rounded-lg px-6">
        <div className="grid grid-cols-1 gap-6 ">
          {/* Working Skills */}
          <div>
            <h5 className="text-2xl font-semibold leading-[36px] mb-6">
              Working Skills
            </h5>
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium  text-black">
                    Next.js
                  </span>
                  <span className="text-base font-medium  text-black">
                    {" "}
                    Intermediate
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-black h-1.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium  text-[#4bafcb]">
                    React.js
                  </span>
                  <span className="text-base font-medium  text-[#4bafcb]">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#4bafcb] h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium  text-[#d1bc17]">
                    JavaScript
                  </span>
                  <span className="text-base font-medium  text-[#d1bc17]">
                    Intermediate
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#d1bc17] h-1.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>{" "}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium  text-[#2c928d]">
                    TailwindCSS
                  </span>
                  <span className="text-base font-medium  text-[#2c928d]">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#2c928d] h-1.5 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium  text-[#7952B3]">
                    Bootstrap
                  </span>
                  <span className="text-base font-medium  text-[#7952B3]">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#7952B3] h-1.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Soft Skills */}
          <div className="mt-8">
            <h5 className="text-2xl font-semibold leading-[36px] mb-6">
              Soft Skills
            </h5>
            <div className="flex flex-wrap gap-x-2 gap-y-4">
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                CSS
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                DaisyUI
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Node.js
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Express.js
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                MongoDB
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Mongoose
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Next Auth
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Firebase
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                React-Firebase-Hooks
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                React-Router-DOM v6
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Redux
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Redux Toolkit
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                DevTools
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Cloud Server
              </p>{" "}
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Recharts
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Git
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                GitHub
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                VSCode
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                AOS Animation
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                MS Office
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Adobe Photoshop
              </p>
              <p className="text-base  text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu">
                Microcontroller
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-base  text-accent">
        © 2024 All Rights Reserved by{" "}
        <span className="text-black">Al Mahfuz</span>
      </p>
    </div>
  );
}
