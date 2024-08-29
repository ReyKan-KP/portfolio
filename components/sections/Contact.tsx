"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ArrowUpRightIcon from "@public/assets/icons/arrow-up-right.svg";
import grainImage from "@public/assets/images/grain.jpg";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Kanishaka Pranjal",
      to_email: "kanishakpranjal@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    // console.log("Form data before sending:", templateParams);

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_KEY || "",
        process.env.EMAILJS_TEMPLATE_ID || "",
        formData,
        process.env.EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (response) => {
          console.log("EmailJS response:", response);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let&apos;s create something amazing together!{" "}
                </h2>
                <p className="text-sm md:text-base mt-2">
                  I&apos;m currently available for Internship and job. Please
                  take a few minutes to tell me about it.
                </p>
              </div>
              <div>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                      <span className="font-semibold">Contact Me</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-2000" />
                    <Dialog.Content className="fixed inset-0 z-30 flex items-center justify-center p-4 z-3000">
                      <div
                        className={twMerge(
                          "bg-gray-800 overflow-hidden rounded-3xl relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 max-w-md w-full"
                        )}
                      >
                        <div
                          className="absolute inset-0 -z-30 opacity-5"
                          style={{ backgroundImage: `url(${grainImage.src})` }}
                        ></div>
                        <Dialog.Title className="text-xl font-semibold mb-4 text-white">
                          Contact Me
                        </Dialog.Title>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">
                              What&apos;s your name?
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="mt-1 p-2 block w-full border border-gray-700 rounded-md text-gray-100 bg-gray-900"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">
                              What&apos;s your email?
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="mt-1 p-2 block w-full border border-gray-700 rounded-md text-gray-100 bg-gray-900"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">
                              What do you want to say?
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="mt-1 p-2 block w-full border border-gray-700 rounded-md text-gray-100 bg-gray-900"
                              placeholder="Enter your message"
                              rows={4}
                              required
                            />
                          </div>
                          <div className="flex justify-end gap-3">
                            <Dialog.Close asChild>
                              <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200"
                              >
                                Cancel
                              </button>
                            </Dialog.Close>
                            <button
                              type="submit"
                              className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-600 rounded-md border border-blue-600 hover:bg-blue-700"
                            >
                              Send
                            </button>
                          </div>
                        </form>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};