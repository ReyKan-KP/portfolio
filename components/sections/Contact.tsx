"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ArrowUpRightIcon from "@public/assets/icons/arrow-up-right.svg";
import grainImage from "@public/assets/images/grain.jpg";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_name: "Kanishaka Pranjal",
      to_email: "kanishakpranjal@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    // console.log("Form data before sending:", templateParams);

    try {
      await emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        );
      toast.success("Message sent successfully!", {
        icon: () => "🎉",
        style: {
          background: "#10B981",
          color: "#fff",
        }
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        icon: () => "❌",
        style: {
          background: "#EF4444",
          color: "#fff",
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" /> */}
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-300/10 to-sky-400/10 backdrop-blur-sm border border-white/10 text-white py-12 px-8 lg:px-16 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 opacity-10 mix-blend-overlay"
                 style={{ backgroundImage: `url(${grainImage.src})` }} />
            
            {/* Animated background elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl" />
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between">
              <div className="max-w-xl">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                >
                  Let&apos;s create something extraordinary together
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg mt-6 text-gray-300"
                >
                  I&apos;m currently available for new opportunities. Let&apos;s discuss how we can work together to bring your ideas to life.
                </motion.p>
              </div>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <span className="relative flex items-center gap-2">
                      Get in Touch
                      <ArrowUpRightIcon className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </motion.button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
                  <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-gray-900/95 backdrop-blur-xl border border-white/10 overflow-hidden rounded-2xl relative z-0 p-8 max-w-lg w-full"
                    >
                      <div
                        className="absolute inset-0 -z-30 opacity-5"
                        style={{ backgroundImage: `url(${grainImage.src})` }}
                      ></div>
                      <Dialog.Title className="text-xl font-semibold mb-4 text-white">
                        Contact Me
                      </Dialog.Title>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 text-white placeholder-gray-400"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 text-white placeholder-gray-400"
                            placeholder="john.doe@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 text-white placeholder-gray-400"
                            placeholder="Enter your message"
                            rows={4}
                            required
                          />
                        </div>
                        <div className="flex justify-end gap-4 mt-8">
                          <Dialog.Close asChild>
                            <button
                              type="button"
                              className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-white bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
                            >
                              Cancel
                            </button>
                          </Dialog.Close>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl hover:from-emerald-400 hover:to-sky-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              'Send Message'
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
};