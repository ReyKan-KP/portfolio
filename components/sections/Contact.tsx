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
import { cn } from "@/lib/utils";
import { X, Send, ArrowRight, MessageSquare, Mail, User } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field: string) => {
    setFormFocus({ ...formFocus, [field]: true });
  };

  const handleBlur = (field: string) => {
    setFormFocus({ ...formFocus, [field]: false });
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
          borderRadius: "8px",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "3px 3px 0 rgba(16, 185, 129, 0.4)"
        }
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        icon: () => "❌",
        style: {
          background: "#EF4444",
          color: "#fff",
          borderRadius: "8px",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "3px 3px 0 rgba(239, 68, 68, 0.4)"
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        
        {/* Decorative elements - hide most on small screens */}
        <div className="absolute top-20 left-10 w-16 sm:w-24 h-16 sm:h-24 border-4 border-emerald-500/10 rotate-12 hidden sm:block"></div>
        <div className="absolute bottom-40 right-10 w-24 sm:w-32 h-24 sm:h-32 border-4 border-sky-500/10 rounded-full hidden sm:block"></div>
        
        <motion.div 
          className="absolute top-60 right-20 hidden sm:block"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Mail className="w-8 sm:w-12 h-8 sm:h-12 text-emerald-500/20" />
        </motion.div>
      
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-5xl">
              {/* Neo-brutalist container with offset shadow */}
              <div className="relative">
                {/* Offset shadow - smaller on mobile */}
                <div className="absolute inset-0 bg-black/20 rounded-xl sm:rounded-2xl translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
                
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-2 border-white/10 text-white py-6 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-10 rounded-xl sm:rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 -z-10 opacity-10 mix-blend-overlay"
                      style={{ backgroundImage: `url(${grainImage.src})` }} />
                  
                  {/* Animated background elements - smaller & more subtle on mobile */}
                  <div className="absolute -top-24 sm:-top-32 -right-24 sm:-right-32 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/20 rounded-full blur-2xl sm:blur-3xl" />
                  <div className="absolute -bottom-24 sm:-bottom-32 -left-24 sm:-left-32 w-48 sm:w-64 h-48 sm:h-64 bg-sky-500/20 rounded-full blur-2xl sm:blur-3xl" />
                  
                  {/* Content grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    
                    {/* Left side - Contact intro */}
                    <div className="space-y-4 sm:space-y-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="space-y-2"
                      >
                        <div className="inline-block">
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/20 to-sky-500/20 text-white border border-white/10">
                            Get in touch
                          </span>
                        </div>
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold relative">
                          Let&apos;s build <span className="relative">
                            together
                            <div className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-emerald-500/60 to-sky-500/60 -z-10 skew-x-3 rounded"></div>
                          </span>
                        </h2>
                      </motion.div>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-base sm:text-lg text-gray-300"
                      >
                        I&apos;m currently available for new opportunities. Let&apos;s discuss how we can work together to bring your ideas to life.
                      </motion.p>
                      
                      {/* Contact info cards */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="space-y-3 sm:space-y-4 pt-2 sm:pt-4"
                      >
                        <ContactCard 
                          icon={<Mail className="h-4 sm:h-5 w-4 sm:w-5" />}
                          title="Email"
                          value="kanishakpranjal@gmail.com"
                          link="mailto:kanishakpranjal@gmail.com"
                          color="from-emerald-500/20 to-sky-500/20"
                        />
                        
                        <ContactCard 
                          icon={<MessageSquare className="h-4 sm:h-5 w-4 sm:w-5" />}
                          title="Social"
                          value="Connect on LinkedIn"
                          link="https://www.linkedin.com/in/kanishaka-pranjal-070a45235/"
                          color="from-violet-500/20 to-indigo-500/20"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Right side - Contact form */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="relative mt-4 sm:mt-0"
                    >
                      <div className="absolute inset-0 bg-white/5 rounded-lg rotate-3"></div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg border-2 border-white/10 p-4 sm:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] relative -rotate-1 hover:rotate-0 transition-transform duration-500">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                          <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-400" />
                          Send me a message
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                          <InputField
                            type="text"
                            name="name"
                            label="Name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            isFocused={formFocus.name}
                            icon={<User className="w-4 h-4 text-gray-400" />}
                          />
                          
                          <InputField
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                            isFocused={formFocus.email}
                            icon={<Mail className="w-4 h-4 text-gray-400" />}
                          />
                          
                          <div className="space-y-1.5">
                            <label className="block text-xs sm:text-sm text-white/70">Message</label>
                            <div className={cn(
                              "relative rounded-md overflow-hidden transition-all duration-300",
                              formFocus.message ? "shadow-[0_0_0_2px_rgba(16,185,129,0.6)]" : ""
                            )}>
                              <textarea
                                name="message"
                                rows={4} 
                                placeholder="What would you like to discuss?"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                                className="w-full bg-black/20 border border-white/10 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none resize-none text-sm sm:text-base"
                                required
                              />
                              <div className={cn(
                                "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-sky-500",
                                "transition-all duration-700 ease-in-out",
                                formFocus.message ? "w-full" : "w-0"
                              )}></div>
                            </div>
                          </div>
                          
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-gradient-to-r from-emerald-500 to-sky-500 font-medium text-white mt-3 sm:mt-4 border-2 border-white/10 shadow-[2px_2px_0px_rgba(0,0,0,0.3)] disabled:opacity-60 flex items-center justify-center gap-2 text-sm sm:text-base"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                Send Message
                              </>
                            )}
                            <div className={cn(
                              "absolute bottom-0 left-0 h-full bg-white/10 transition-all duration-300",
                              isSubmitting ? "w-full" : "w-0"
                            )}></div>
                          </motion.button>
                        </form>
                      </div>
                    </motion.div>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer 
        position="bottom-right" 
        theme="dark"
        className="!text-xs !sm:text-sm !lg:text-base"
        closeButton={false}
        autoClose={4000}
      />
    </>
  );
};

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  icon: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  type, name, label, placeholder, value, onChange, onFocus, onBlur, isFocused, icon
}) => {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs sm:text-sm text-white/70">{label}</label>
      <div className={cn(
        "relative rounded-md overflow-hidden transition-all duration-300",
        isFocused ? "shadow-[0_0_0_2px_rgba(16,185,129,0.6)]" : ""
      )}>
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full bg-black/20 border border-white/10 rounded-md pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none text-sm sm:text-base"
          required
        />
        <div className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-sky-500",
          "transition-all duration-700 ease-in-out",
          isFocused ? "w-full" : "w-0"
        )}></div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, link, color }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      className="block group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/20 rounded-lg translate-x-1 translate-y-1"></div>
        <div className={cn(
          "bg-gradient-to-r", color, 
          "rounded-lg p-3 sm:p-4 border-2 border-white/10",
          "shadow-[2px_2px_0px_rgba(0,0,0,0.2)]",
          "flex items-center gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300"
        )}>
          <div className="flex-shrink-0 p-1.5 sm:p-2 bg-white/10 rounded-md">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm text-white/60">{title}</p>
            <p className="font-medium text-sm sm:text-base truncate">{value}</p>
          </div>
          <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white/30 group-hover:text-white/80 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
        </div>
      </div>
    </motion.a>
  );
};