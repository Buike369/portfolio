"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import validator from "validator";
import "./media.css"

export default function ContactSection() {

  interface FormData {
  name: string;
  email: string;
  message: string;
}


  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
   const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  // Validate form inputs
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (validator.isEmpty(formData.name.trim())) {
      newErrors.name = "Name is required";
    }

    if (!validator.isEmail(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (validator.isEmpty(formData.message.trim()) || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // valid if no errors
  };


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle sending message (API or email service integration)
  //   setSent(true);
  //   setTimeout(() => setSent(false), 3000);
  // };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setSuccess(false);

    if (!validateForm()) return; // stop if invalid

    setLoading(true);

    try {
      const res = await fetch("/api/contactMe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to send message. Check your connection.");
    }
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
             style={{
            backgroundColor: "#0e0f11",
    border: "1px solid #1f1f1f"
          }}
       
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
              style={{border: "1px solid #444749"}}
            />
            {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-xl focus:border-indigo-400 outline-none text-white"
              style={{border: "1px solid #444749"}}
            />
               {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-xl focus:border-indigo-400 outline-none text-white resize-none"
              style={{border: "1px solid #444749"}}
            />
              {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}

            <button
              type="submit"
               disabled={loading}
              className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl transition-all font-medium"
              style={{backgroundColor:"#40a3a5"}}
            >
              <Send className="w-4 h-4" /> {loading ? "Sending... " : "Send Message"}
            </button>
            {success && (
        <p className="text-green-600 text-center">
          ✅ Message sent successfully!
        </p>
      )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
