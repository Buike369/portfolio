
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager, TechNova",
    feedback:
      "Working with Kingsley was an outstanding experience. His full-stack expertise brought our project to life faster than expected, and his attention to detail is world-class.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, FinEdge Solutions",
    feedback:
      "Kingsley’s work on our mobile app exceeded our expectations. His creativity and code quality are top-tier — highly recommended for any modern tech project.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Aisha Bello",
    role: "Founder, Shoply Africa",
    feedback:
      "From frontend design to backend logic, Kingsley handles it all flawlessly. His delivery speed, skill, and communication make him one of the best developers we’ve worked with.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-6  text-white">
      <div style={{textAlign:'center',fontSize:"18px", fontWeight:"500",color:"gray"}}>Testimonial</div>
      <div style={{fontSize:"34px",fontWeight:"600",color:"#fff", textAlign:'center',marginBottom:"20px"}}>Client Reviews</div>
      <div style={{width:"3px", height:'30px',backgroundColor:'#40a3a5', margin:"0 auto 20px auto"}}></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE — Heading & Description */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 way"
          >
            What People Say About Me
          </motion.h2>
          <p className="text-gray-400 mb-6 leading-relaxed way">
            Hear from clients and partners who’ve collaborated with me on web and mobile projects across the globe. I take pride in delivering impactful, reliable, and innovative digital experiences.
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — Testimonial Card Carousel */}
        <div className="relative h-[340px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/10"
              style={{
    //             backgroundColor: "#0e0f11",
    border: "1px solid #1f1f1f",
    backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
              }}
            >
              <Quote className="w-10 h-10 text-indigo-400 mb-4" style={{color:"#40a3a5"}}/>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                “{testimonials[index].feedback}”
              </p>

              <div className="flex items-center gap-4">
                 <Image
        src={testimonials[index].image}      
        alt={testimonials[index].name} 
        width={100}           
        height={100}   
              
        priority              
       className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400"
      />
                {/* <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400"
                /> */}
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

