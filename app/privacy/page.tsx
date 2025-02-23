"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-8 z-10 bg-black/50 backdrop-blur-lg w-fit px-4 py-2 rounded-full"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <HiArrowLeft className="text-xl" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-sky-400 to-purple-500 bg-clip-text text-transparent mb-12">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                1. Information Collection
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you use the contact form on this website, I collect the following information:
              </p>
              <ul className="list-none space-y-2">
                {['Your name', 'Your email address', 'The content of your message'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                2. Use of Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The information collected is used solely for the purpose of responding to your inquiries and will not be shared with third parties without your explicit consent.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                3. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                4. Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                5. Third-Party Links
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This website contains links to external sites. I am not responsible for the privacy practices or content of these sites.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                6. Changes to Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I reserve the right to update this privacy policy at any time. Changes will be posted on this page.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                7. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this privacy policy, please contact me at{" "}
                <a 
                  href="mailto:kanishakpranjal@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 underline decoration-dotted underline-offset-4"
                >
                  kanishakpranjal@gmail.com
                </a>
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
