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
    "https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fwork%2Fwork-img-1.png&w=384&q=75",
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
  screenshots: [
    "https://via.placeholder.com/400x300.png?text=Screenshot+1",
    "https://via.placeholder.com/400x300.png?text=Screenshot+2",
    "https://via.placeholder.com/400x300.png?text=Screenshot+3",
  ],
};

const WorkDetails = () => {
  return (
    <div className="rounded-xl bg-white w-full p-6">
      <Head>
        <title>{workData.title} - Abdullah Al Mahfuz</title>
        <meta
          name="description"
          content={`Detailed overview of ${workData.title} including performance tests, SEO tests, and more.`}
        />
      </Head>

      {/* Header */}
      <div className="mt-10">
        <h1 className="text-4xl font-extrabold leading-tight text-black roboto-slab">
          {workData.title}
        </h1>
        <div className="w-20 h-1 bg-gray-800 mt-4"></div>
      </div>

      {/* Project Overview */}
      <div className="mt-10 flex flex-col">
        <div className="relative group p-4 bg-gray-100 rounded-lg shadow-lg text-black max-w-xl">
          <div className="overflow-hidden object-cover rounded-lg mb-4">
            <Image
              src={workData.image}
              alt={workData.title}
              width={400}
              height={300}
              className="w-full object-cover rounded-lg group-hover:scale-110 transition-transform"
            />
          </div>
          <p className="text-base leading-6 text-gray-700">
            {workData.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-start items-start pt-4 pb-2">
            {workData.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 border border-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Features */}
        <div className="mt-10 text-left max-w-xl">
          <h2 className="text-2xl font-semibold leading-[36px] text-black">
            Features
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-800 mt-4 space-y-2">
            {workData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Project Screenshots */}
        <div className="mt-10 text-left max-w-xl">
          <h2 className="text-2xl font-semibold leading-[36px] text-black">
            Screenshots
          </h2>
          <div className="flex flex-wrap gap-4 justify-start mt-4">
            {workData.screenshots.map((src, index) => (
              <div
                key={index}
                className="w-48 h-32 bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  width={192}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-10 text-left max-w-xl space-y-4">
          <h2 className="text-2xl font-semibold leading-[36px] text-black">
            Project Links
          </h2>
          <div className="flex flex-wrap justify-start gap-4">
            <a
              href={workData.performanceTest}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 text-gray-800 rounded-full px-4 py-2 font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              <FaExternalLinkAlt /> Performance Test
            </a>
            <a
              href={workData.seoTest}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 text-gray-800 rounded-full px-4 py-2 font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              <FaExternalLinkAlt /> SEO Test
            </a>
            <a
              href={workData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 text-gray-800 rounded-full px-4 py-2 font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              <FaExternalLinkAlt /> Live Link
            </a>
            <a
              href={workData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 text-gray-800 rounded-full px-4 py-2 font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              <FaGithub /> GitHub Link
            </a>
          </div>
          {workData.loginDetails && (
            <div className="mt-4 text-lg text-gray-800">
              <strong>Login Details:</strong>{" "}
              <span className="flex items-center gap-2">
                <FaUser /> {workData.loginDetails.username}, <FaLock />{" "}
                {workData.loginDetails.password}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="text-left mt-12 text-base text-gray-800">
        © 2024 All Rights Reserved by{" "}
        <span className="font-bold text-black">Al Mahfuz</span>
      </p>
    </div>
  );
};

export default WorkDetails;
