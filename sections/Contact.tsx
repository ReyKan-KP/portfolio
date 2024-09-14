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
import styles from "./Contact.module.css";

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
    <section className={styles.section} id="contact">
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <br />
          <h1 className={styles.title}>Contact Me</h1>
          <br />
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Link href={"tel:7488313013"} target="_blank" className={styles.contactLink}>
                <FiPhone className={styles.icon} />
                <h6>+91 7488313013</h6>
              </Link>
            </div>
            <div className={styles.contactItem}>
              <Link href={"mailto:kanishakpranjal@gmail.com"} target="_blank" className={styles.contactLink}>
                <FiMail className={styles.icon} />
                <h6>kanishakpranjal@gmail.com</h6>
              </Link>
            </div>
          </div>

          <h3 className={styles.headText}>Let&apos;s Connect!</h3>
          <p className={styles.description}>
            I&apos;m eager to contribute to new opportunities, whether it&apos;s
            an internship, full-time role, or project collaboration. If
            you&apos;re looking for a passionate problem-solver and team player,
            let&apos;s connect and discuss how I can help your team succeed!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <label className={styles.label}>
              <span className={styles.labelText}>Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="John Doe"
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.input}
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className={styles.submitButton} type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRightIcon className={styles.buttonIcon} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactSectionContainer}>
        <div className={styles.gradientBackground}>
          <div className={styles.grainOverlay} style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className={styles.contactSectionContent}>
            <div>
              <h2 className={styles.sectionTitle}>Let&apos;s Work Together! </h2>
              <p className={styles.sectionDescription}>
                I&apos;m open to internships, job opportunities, and
                collaborations. Let&apos;s discuss how we can achieve great
                results together.
              </p>
            </div>
            <div>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className={styles.contactButton}>
                    <span className={styles.contactButtonText}>Contact Me</span>
                    <ArrowUpRightIcon className={styles.contactButtonIcon} />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className={styles.dialogOverlay} />
                  <Dialog.Content
                    className={twMerge(
                      styles.dialogContent,
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
                        className={styles.dialogCloseButton}
                        aria-label="Close"
                      >
                        <XMarkIcon className={styles.dialogCloseIcon} />
                      </button>
                    </Dialog.Close>
                    <div className={styles.dialogContentInner}>
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
  );
};
