"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import "./media.css"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sending message (API or email service integration)
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6  text-white"
    >
      <div style={{textAlign:"center", color:"gray", }}> Contact Info</div>
      <div style={{color:'#fff', textAlign:'center',fontWeight:'600', fontSize:"44px",marginBottom:"15px"}}>Get in Touch.</div>

       <div style={{width:"3px", height:'30px',backgroundColor:'#40a3a5', margin:"0 auto 20px auto"}}></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — Info & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4 way">Let’s Build Something Great Together </h2>
          <p className="text-gray-400 leading-relaxed way">
            Whether you have an idea for a new project, need a developer to bring your vision to life, or
            just want to collaborate — I’d love to hear from you. Let’s create something modern and impactful.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-lg">
                <Mail className="text-indigo-400" style={{color:"#40a3a5"}}/>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <h4 className="font-semibold">chukwubuikekingsley@gmail.com</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-lg">
                <Phone className="text-indigo-400" style={{color:"#40a3a5"}}/>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <h4 className="font-semibold">+234 906 024 3960</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-lg">
                <MapPin className="text-indigo-400" style={{color:"#40a3a5"}}/>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <h4 className="font-semibold">Lagos, Nigeria</h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-lg border border-white/10 send"
        >
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <div className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-xl focus:border-indigo-400 outline-none text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-xl focus:border-indigo-400 outline-none text-white"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-xl focus:border-indigo-400 outline-none text-white resize-none"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl transition-all font-medium"
              style={{backgroundColor:"#40a3a5"}}
            >
              <Send className="w-4 h-4" /> {sent ? "Message Sent " : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
