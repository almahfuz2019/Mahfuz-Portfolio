/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="rounded-xl bg-white w-full p-6">
      <div className="flex mt-10 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px]">Contact</h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>
      <div className="bg-[#F8FBFB] p-6 rounded-xl mt-6">
        <p className="mt-4 text-2xl text-[#44566C]">
          I'm Always Open To Discussing Product
        </p>
        <p className="font-bold mt-4  text-2xl">Design work or partnerships.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="mb-4">
            <input
              placeholder="Name *"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full border bg-transparent border-b-1 border-gray-400  border-x-0 border-t-0  py-4 px-3  focus:border-none "
            />
            {errors.name && (
              <p className="text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              className="mt-1 block w-full border bg-transparent border-b-1 border-gray-400  border-x-0 border-t-0  py-4 px-3  focus:border-none"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4 mt-8">
            <textarea
              placeholder="Message *"
              {...register("message", { required: "Message is required" })}
              className="mt-1 block w-full border border-gray-400 shadow-sm py-2 px-3 focus:ring-primary focus:border-primary border-x-0 border-t-0"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="text-center mt-6 text-base text-[#44566c]">
        © 2024 All Rights Reserved by Al Mahfuz
      </p>
    </div>
  );
}
