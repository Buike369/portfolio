"use client";

import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Server, Globe } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, high-performance web applications using React, Next.js, Express and Node.js with focus on scalability and seamless user experience.",
    icon: <Globe className="w-8 h-8 text-blue-600" style={{color:"#40a3a5"}}/>,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile apps with React Native that deliver smooth performance and stunning UI across iOS and Android.",
    icon: <Smartphone className="w-8 h-8 text-green-600" style={{color:"#40a3a5"}}/>,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Developing complete systems from backend APIs to frontend interfaces with tools like Express, PostgreSQL, MongoDB and Firebase.",
    icon: <Server className="w-8 h-8 text-purple-600" style={{color:"#40a3a5"}}/>,
  },
  {
    id: 4,
    title: "API & System Integration",
    description:
      "Integrating third-party APIs, payment gateways, authentication, and cloud services to make products truly production-ready.",
    icon: <Code className="w-8 h-8 text-yellow-500" style={{color:"#40a3a5"}}/>,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24  text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{color:"#fff"}}>
            My <span className="text-blue-600" style={{color:"#40a3a5"}}>Services</span>
          </h2>
          <div style={{width:"3px", height:'30px',backgroundColor:'#40a3a5', margin:"3px auto 8px auto"}}></div>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{color:"#e4ebf4"}}>
            I deliver professional web and mobile solutions that bridge creativity, functionality, and technology — empowering businesses to grow in the digital world.
          </p>
          
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-200 flex flex-col items-center text-center"
              style={{
    backgroundColor: "#1b1d1d",
    border: "1px solid #4e5564"}}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{color:"#fff"}}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm" style={{color:"#b8bec8"}}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
