"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

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
            <div className="relative group p-4 bg-[#F5F5F5] rounded-lg transition-transform transform duration-500 ease-in-out hover:shadow-lg">
              <div className="overflow-hidden object-cover rounded-lg mb-4">
                <Image
                  src="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F28lYcWKTtS0PPyFmPXnX&w=1920&q=75"
                  alt="Chul Urina"
                  width={400}
                  height={300}
                  className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <Link href="/works/chul-urina">
                <p className="cursor-pointer text-lg font-medium group-hover:text-blue-500 transition-colors duration-500 ease-in-out">
                  Chul Urina
                </p>
              </Link>
              <p className="mt-1 text-xs font-normal group-hover:text-gray-700 transition-colors duration-500 ease-in-out">
                Track Taka is an expense tracker application built on React JS,
                TailwindCSS, IndexedDB, and Firebase. Effortlessly monitor daily
                expenses &
              </p>
              <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  Next js
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  TailwindCSS
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  RTK Query
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  IndexedDB
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  Firebase
                </span>
              </div>
            </div>
            <div className="relative group p-4 bg-[#F5F5F5] rounded-lg transition-transform transform duration-500 ease-in-out hover:shadow-lg">
              <div className="overflow-hidden object-cover rounded-lg mb-4">
                <Image
                  src="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FhIXJ8G4fTqqU7OkFN4Fb&w=1920&q=75"
                  alt="Chul Urina"
                  width={400}
                  height={300}
                  className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <Link href="/works/chul-urina">
                <p className="cursor-pointer text-lg font-medium group-hover:text-blue-500 transition-colors duration-500 ease-in-out">
                  Chul Urina
                </p>
              </Link>
              <p className="mt-1 text-xs font-normal group-hover:text-gray-700 transition-colors duration-500 ease-in-out">
                Track Taka is an expense tracker application built on React JS,
                TailwindCSS, IndexedDB, and Firebase. Effortlessly monitor daily
                expenses &
              </p>
              <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  Next js
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  IndexedDB
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  Firebase
                </span>
              </div>
            </div>
            <div className="relative group p-4 bg-[#F5F5F5] rounded-lg transition-transform transform duration-500 ease-in-out hover:shadow-lg">
              <div className="overflow-hidden object-cover rounded-lg mb-4">
                <Image
                  src="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FvdbgiWPQnuBTy4CIyWGQ&w=1920&q=75"
                  alt="Chul Urina"
                  width={400}
                  height={300}
                  className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <Link href="/works/chul-urina">
                <p className="cursor-pointer text-lg font-medium group-hover:text-blue-500 transition-colors duration-500 ease-in-out">
                  Chul Urina
                </p>
              </Link>
              <p className="mt-1 text-xs font-normal group-hover:text-gray-700 transition-colors duration-500 ease-in-out">
                Track Taka is an expense tracker application built on React JS,
                TailwindCSS, IndexedDB, and Firebase. Effortlessly monitor daily
                expenses &
              </p>
              <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  Next js
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  TailwindCSS
                </span>
                <span className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700">
                  RTK Query
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg">
            <FaInfoCircle className="text-4xl text-gray-500 mb-4" />
            <p className="text-xl text-gray-500">Nothing is Here</p>
          </div>
        </TabPanel>
      </Tabs>

      <p className="text-center mt-10 text-base text-[#44566c]">
        © 2024 All Rights Reserved by{" "}
        <span className="text-black">Al Mahfuz</span>
      </p>
    </div>
  );
}
