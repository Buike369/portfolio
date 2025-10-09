"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Adane Wallet System",
    description:
      "A real-time wallet app with React, Express, and PostgreSQL — allowing users to deposit, transfer, and view transaction history.",
    image: "/wallet.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    github: "https://github.com/kingsley/adane-wallet",
    live: "https://adane-wallet.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Slippers Store",
    description:
      "An e-commerce system integrated with chatbot, WhatsApp payments, and automated order tracking notifications.",
    image: "/tr.jpg",
    tags: ["Next.js", "Express", "MySQL", "Flutterwave"],
    github: "https://github.com/kingsley/slippers-store",
    live: "https://slippers-store.vercel.app",
  },
  {
    id: 3,
    title: "Tipster Platform",
    description:
      "A paid tips marketplace where users can subscribe to professional tipsters across crypto, sports, and forex markets.",
    image: "/cypto.webp",
    tags: ["React", "Express", "MySQL", "Flutterwave"],
    github: "https://github.com/kingsley/tipster-platform",
    live: "https://tipster-platform.vercel.app",
  },
  {
    id: 4,
    title: "AdaneToken (ADT)",
    description:
      "A BEP-20 token project with ownership control and supply management, built for the Adane ecosystem.",
    image: "/cypto.webp",
    tags: ["Solidity", "Web3.js", "Binance Smart Chain"],
    github: "https://github.com/kingsley/adane-token",
    live: "https://bscscan.com/token/0x123...",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24  text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{color:'#fff'}}>
            My <span className="text-blue-600" style={{color:"#40a3a5"}}>Projects</span>
          </h2>
          <div style={{width:"3px", height:'30px',backgroundColor:'#40a3a5', margin:"0 auto 2px auto"}}></div>

         
          <p className="text-gray-600 max-w-2xl mx-auto" style={{color:'#adafb2'}}>
            A showcase of projects I’ve built to solve real-world problems using
            modern web and mobile technologies.
          </p>
        </motion.div>

         

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              style={{backgroundColor: "#1b1d1d",
    border: "1px solid #4e5564"}}
            >
              {/* Image */}
              <div className="relative">
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                /> */}
                         <Image
                        src={project.image}      
                        alt={project.title} 
                        width={200}           
                        height={100}  
                       
                              
                         
                       className="w-full h-56 object-cover"
                      />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:bg-gray-200"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:bg-gray-200"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{color:'#fff'}}>{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4" style={{color:"#a4a7ab"}}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
                      style={{backgroundColor:"#38393b",color:"#fff"}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
