/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";

export default function Page() {
  return (
    <div className="rounded-lg bg-white w-full p-6">
      {/* about me  */}
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab ">
          Blogs
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>
      <div className="flex flex-col mt-5 items-center justify-center h-64 bg-[#F8FBFB] rounded-lg">
        <FaInfoCircle className="text-4xl text-accent mb-4 animate-pulse" />
        <p className="text-xl text-accent ">Nothing is here</p>
      </div>
      <p className="text-center mt-6 text-base text-accent  py-5 rounded-lg">
        © 2024 All Rights Reserved by{" "}
        <span className="text-black">Al Mahfuz</span>
      </p>
    </div>
  );
}
