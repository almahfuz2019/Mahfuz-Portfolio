"use client";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import { FaExternalLinkAlt, FaGithub, FaUser, FaLock } from "react-icons/fa";

const workData = {
  title: "Chul Urina",
  description:
    "Track Taka is an expense tracker application built on React JS, TailwindCSS, IndexedDB, and Firebase. Effortlessly monitor daily expenses with a sleek and intuitive interface. It features real-time data synchronization, secure authentication, and advanced expense categorization.",
  image:
    "https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F28lYcWKTtS0PPyFmPXnX&w=1920&q=75",
  technologies: ["Next.js", "TailwindCSS", "RTK Query", "Firebase"],
  performanceTest: "https://developers.google.com/speed/pagespeed/insights/",
  seoTest: "https://www.seoptimer.com/",
  liveLink: "https://your-live-link.com",
  githubLink: "https://github.com/yourusername/your-repo",
  loginDetails: {
    username: "user@example.com",
    password: "password123",
  },
  features: [
    "Real-time data synchronization with Firebase",
    "Secure user authentication",
    "Intuitive and responsive user interface",
    "Advanced expense categorization",
    "Offline capabilities with IndexedDB",
  ],
  screenshots: ["https://i.ibb.co/g4hKFZK/Screenshot-2024-08-03-214156.png"],
};

const WorkDetails = () => {
  return (
    <div className="rounded-lg bg-white w-full p-6">
      <Head>
        <title>{workData.title} - Abdullah Al Mahfuz</title>
        <meta
          name="description"
          content={`Detailed overview of ${workData.title} including performance tests, SEO tests, and more.`}
        />
      </Head>

      {/* Header */}
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab ">
          <span className="hidden md:block"> {workData.title}</span>{" "}
          <span className="md:hidden block">Project</span>
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      {/* Project Overview */}
      <div className="mt-10 flex flex-col">
        <div>
          <div className="overflow-hidden object-cover rounded-lg mb-4">
            <Image
              src={workData.image}
              alt={workData.title}
              width={400}
              height={300}
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-start items-start py-4">
            {workData.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 border border-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-base leading-6 text-accent">
            {workData.description}
          </p>
        </div>

        {/* Project Features */}
        <div className="mt-10 text-left max-w-xl">
          <h2 className="text-2xl font-medium leading-[36px] text-black">
            Features
          </h2>
          <ul className="list-disc list-inside text-base text-accent mt-4 space-y-2">
            {workData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Project Screenshots */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-medium leading-[36px] text-black">
            Screenshots
          </h2>
          <div className="mt-4">
            {workData.screenshots.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden w-full object-cover h-auto rounded-lg mb-4"
              >
                <Image
                  src={src}
                  alt={workData.title}
                  width={800}
                  height={600}
                  className="w-full object-cover border rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className=" text-left md:block hidden  py-16 mt-16 bg-[#F8FBFB] rounded-lg px-6">
          <h2
            className="text-2xl mb-3 font-medium
           leading-[36px] "
          >
            Project Links
          </h2>
          <div className="flex flex-wrap justify-start gap-4">
            <a
              href={workData.performanceTest}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> Performance Test
            </a>
            |
            <a
              href={workData.seoTest}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> SEO Test
            </a>
            |
            <a
              href={workData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> Live Link
            </a>
            |
            <a
              href={workData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaGithub /> GitHub Link
            </a>
          </div>
          {workData.loginDetails && (
            <div className="mt-10 ">
              <h2 className="text-2xl mb-3 font-medium leading-[36px] ">
                Login Details
              </h2>

              <div className="flex flex-wrap  justify-start gap-4">
                <p className="flex items-center gap-2 text-primary">
                  <FaUser /> {workData.loginDetails.username}
                </p>
                |
                <p className="flex items-center gap-2 text-primary">
                  <FaLock /> {workData.loginDetails.password}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Project Links */}
        <div className=" text-left  md:hidden block    py-16 mt-16 bg-[#F8FBFB] rounded-lg px-6">
          <h2
            className="text-2xl mb-3 font-medium
           leading-[36px] "
          >
            Project Links
          </h2>
          <div className="flex flex-col md:flex-wrap justify-start gap-4">
            <a
              href={workData.performanceTest}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> Performance Test
            </a>
            <span className="hidden md:block">|</span>
            <a
              href={workData.seoTest}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> SEO Test
            </a>
            <span className="hidden md:block">|</span>
            <a
              href={workData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> Live Link
            </a>
            <span className="hidden md:block">|</span>
            <a
              href={workData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaGithub /> GitHub Link
            </a>
          </div>
          {workData.loginDetails && (
            <div className="mt-10 ">
              <h2 className="text-2xl mb-3 font-medium leading-[36px] ">
                Login Details
              </h2>

              <div className="flex flex-col md:flex-wrap  justify-start gap-4">
                <p className="flex items-center gap-2 text-primary">
                  <FaUser /> {workData.loginDetails.username}
                </p>
                <span className="hidden md:block">|</span>
                <p className="flex items-center gap-2 text-primary">
                  <FaLock /> {workData.loginDetails.password}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-6 text-base text-accent">
        © 2024 All Rights Reserved by{" "}
        <span className="text-black">Al Mahfuz</span>
      </p>
    </div>
  );
};

export default WorkDetails;
