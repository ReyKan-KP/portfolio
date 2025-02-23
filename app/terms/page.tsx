"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <div className="prose prose-invert max-w-none space-y-12">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
              },
              {
                title: "2. Use License",
                content: "Permission is granted to temporarily download one copy of the materials (information or software) on Kanishaka Pranjal&apos;s website for personal, non-commercial transitory viewing only."
              },
              {
                title: "3. Disclaimer",
                content: "The materials on this website are provided on an &apos;as is&apos; basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
              },
              {
                title: "4. Limitations",
                content: "In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my website."
              },
              {
                title: "5. Revisions and Errata",
                content: "The materials appearing on my website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on my website are accurate, complete, or current."
              }
            ].map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
