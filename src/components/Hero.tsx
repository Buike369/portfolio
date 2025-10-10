
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./media.css"
import Link from "next/link";

import { ArrowDownCircle, Github, Linkedin, Twitter,  Facebook } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden px-6 md:px-16 text-white heroDiv"
    >
      {/* Decorative background blend layers */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-[500px] h-[500px]  rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"
        />
      </div>

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-100" 
        >
        
               Hi, I{`'`}m {" "}
          <span className="text-[#00e698] drop-shadow-lg" style={{color:"#40a3a5"}}>
             Kingsley Chukwubuike
          </span>
          {" "} a
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200" style={{color:"#40a3a5"}}>
          <Typewriter
            words={[
              "Web Developer",
              "App Developer",
              "Fullstack Developer",
              "Tech Innovator",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          I design and develop scalable web and mobile experiences using modern
          technologies and am good at what I do.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-[#00e698] text-black font-semibold rounded-full shadow-lg hover:shadow-2xl hover:bg-[#00ffb0] transition-all duration-300"
            style={{backgroundColor:"#40a3a5",color:"#fff",fontSize:"14px"}}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 border-2 border-[#00e698] text-[#00e698] font-semibold rounded-full hover:bg-[#00e698] hover:text-black transition-all duration-300"
            style={{border:" 1px solid #40a3a5", color:'#fff'}}
          >
            Contact Me
          </motion.a>


        </div>
        <div style={{marginTop:'50px',color:'gray'}}>FOLLOW ME ON<sup style={{fontSize:"16px"}}>*</sup> </div>
         <div className="flex items-center gap-5 followMe">
          <Link
            href="https://www.facebook.com/share/1G14jgjQ9k/"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
            style={{background:'#272929'}}
          >
            <Facebook className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://github.com/Buike369"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
            style={{background:'#272929'}}
          >
            <Github className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
            style={{background:'#272929'}}
          >
            <Linkedin className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="https://x.com/ChukwubuikeK"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-indigo-500 transition-all"
            style={{background:'#272929'}}
          >
            <Twitter className="w-5 h-5 text-white" />
          </Link>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-12 md:mt-0"
      >
        <div className="relative w-[320px] md:w-[480px]">
          <motion.img
            src="/bkMan.jpeg"
            alt="Kingsley Chukwubuike - Fullstack Developer"
            className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-tr from-[#40a3a566] to-[#000000] blur-2xl" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 flex justify-center"
      >
        <ArrowDownCircle
          size={44}
          className="text-[#00e698] animate-bounce cursor-pointer"
          style={{color:"#40a3a5"}}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

