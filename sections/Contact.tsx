import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ArrowUpRightIcon from "@public/assets/icons/arrow-up-right.svg";
import grainImage from "@public/assets/images/grain.jpg";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Kanishak Pranjal",
          from_email: form.email,
          to_email: "kanishakpranjal@gmail.com",
          message: form.message,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you for your message 😃", {
            position: "top-right",
            autoClose: 3000,
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("I didn't receive your message 😢", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      <ToastContainer />
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container ">
          <br />
          <h1
            className="text-5xl font-bold mb-6 text-center"
            style={{ fontSize: "2.7rem", lineHeight: "0.2", margin: 0 }}
          >
            Contact Me
          </h1>
          <br />
          <div className="flex flex-row justify-center items-center space-x-10 mt-5 gap-4">
            <div className="inline-flex items-center space-x-3">
              <Link
                href={"tel:7488313013"}
                target="_blank"
                className="inline-flex items-center space-x-2"
              >
                <FiPhone className="h-6 w-6 text-gray-600" />
                <h6>+91 7488313013</h6>
              </Link>
            </div>
            <div className="inline-flex items-center space-x-3">
              <Link
                href={"mailto:kanishakpranjal@gmail.com"}
                target="_blank"
                className="inline-flex items-center space-x-2"
              >
                <FiMail className="h-6 w-6 text-gray-600" />
                <h6>kanishakpranjal@gmail.com</h6>
              </Link>
            </div>
          </div>

          <h3 className="head-text mt-10">Let&apos;s Connect!</h3>
          <p className="text-lg text-white-600 mt-3">
            I&apos;m eager to contribute to new opportunities, whether it&apos;s
            an internship, full-time role, or project collaboration. If
            you&apos;re looking for a passionate problem-solver and team player,
            let&apos;s connect and discuss how I can help your team succeed!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRightIcon className="size-8" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );

};

export const ContactSection = () => {
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
                  Let&apos;s Work Together!{" "}
                </h2>
                <p className="text-sm md:text-base mt-2">
                  I&apos;m open to internships, job opportunities, and
                  collaborations. Let&apos;s discuss how we can achieve great
                  results together.
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
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 z-20" />
                    <Dialog.Content
                      className={twMerge(
                        "relative rounded-xl p-6 sm:p-8 max-w-full",
                        "w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]",
                        "fixed inset-0 z-30 m-auto flex items-center justify-center",
                        "transform translate-y-0 transition-transform duration-300"
                      )}
                      style={{
                        backgroundImage: "url('/assets/images/terminal.png')",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      aria-describedby="contact-description"
                    >
                      <Dialog.Title className="sr-only">
                        Contact Form
                      </Dialog.Title>{" "}
                      <Dialog.Description
                        id="contact-description"
                        className="sr-only"
                      >
                        Fill out the contact form to get in touch.
                      </Dialog.Description>
                      <Dialog.Close asChild>
                        <button
                          className="absolute top-9 right-6 text-sky-300 hover:text-gray-400 z-10"
                          aria-label="Close"
                        >
                          <XMarkIcon className="w-6 h-6 font-bold" />
                        </button>
                      </Dialog.Close>
                      <div className="relative z-10">
                        <Contact />
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
