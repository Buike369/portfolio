"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-12 px-6" style={{backgroundColor:"#1a1a1a"}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* LEFT — BRAND */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-white">
            K<span className="text-indigo-500" style={{color:"#40a3a5"}}>C</span>
          </h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Kingsley Chukwubuike. All rights reserved.
          </p>
        </div>

      

        {/* RIGHT — SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          <Link
            href="mailto:chukwubuikekingsley369@gmail.com"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
          >
            <Mail className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://github.com/Buike369"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
          >
            <Github className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://x.com/ChukwubuikeK"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
          >
            <Twitter className="w-5 h-5 text-white" />
          </Link>
        </div>
      </motion.div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 text-center text-gray-500 text-sm border-t border-white/10 pt-6"
      >
        <p>
          Built with ❤️ by{" "}
          <span className="text-indigo-400 font-medium" style={{color:"#40a3a5"}}>Kingsley Chukwubuike</span> — Fullstack Web & Mobile Developer
        </p>
      </motion.div>
    </footer>
  );
}
