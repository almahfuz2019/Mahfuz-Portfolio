"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="rounded-xl bg-white w-full p-6">
      {/* about me  */}
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab ">
          Portfolio
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      <Tabs>
        <TabList className="flex justify-end mb-4 border-b-0">
          <Tab
            className="px-4 py-2 cursor-pointer border-none bg-none "
            selectedClassName="text-primary border-none"
          >
            All
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer border-none bg-none "
            selectedClassName="text-primary border-none"
          >
            Mockup
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative group p-4 bg-[#F5F5F5] rounded-lg transition-transform transform hover:shadow">
              <div className="overflow-hidden object-cover rounded-lg mb-4">
                <Image
                  src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75"
                  alt="Chul Urina"
                  width={400}
                  height={300}
                  className="w-full  object-cover rounded-lg  group-hover:scale-110 "
                />
              </div>
              <Link href="/works/chul-urina">
                <p className="cursor-pointer text-lg font-medium group-hover:text-blue-500">
                  Chul Urina
                </p>
              </Link>
              <p className="mt-1 text-xs font-normal group-hover:text-gray-700">
                Track Taka is an expense tracker application built on React JS,
                TailwindCSS, IndexedDB, and Firebase. Effortlessly monitor daily
                expenses &
              </p>
              <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 ">
                  Next js
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 ">
                  TailwindCSS
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 ">
                  RTK Query
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 ">
                  IndexedDB
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 ">
                  Firebase
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <p className="text-center mt-6 text-base text-[#44566c]">
        © 2024 All Rights Reserved by{" "}
        <span className="text-black">Al Mahfuz</span>
      </p>
    </div>
  );
}
