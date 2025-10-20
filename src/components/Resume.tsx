

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
}

interface Education {
  id: number;
  title: string;
  school: string;
  year: string;
}







const experiences: Experience[] = [
  {
    id: 1,
    title: "Fullstack Developer",
    company: "Adane Technology",
    year: "2022 - Present",
    description:
      "Developing and deploying web and mobile solutions with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    id: 2,
    title: "Freelance Developer",
    company: "Remote",
    year: "2020 - 2022",
    description:
      "Built e-commerce and SaaS products for clients worldwide, focusing on scalable architectures and UI excellence.",
  },
];

const education: Education[] = [
  {
    id: 1,
    title: "B.Sc Computer Science",
    school: "University of Technology",
    year: "2016 - 2020",
  },
  {
    id: 2,
    title: "Web & Mobile Development Certification",
    school: "Google Africa Developer Program",
    year: "2021",
  },
];


const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"qualifications" | "skills">(
    "qualifications"
  );

  return (
    <section id="resume" className="py-24 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2" style={{color:"#fff"}}>My Resume</h2>
     
          <p className="text-gray-600" style={{color:'#adafb2'}}>Professional journey and technical expertise</p>
               <div style={{width:"3px", height:'30px',backgroundColor:'#40a3a5', margin:"5px auto 2px auto"}}></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("qualifications")}
            className={`px-6 py-3 rounded-xl font-medium transition-all rea duration-300 ${
              activeTab === "qualifications"
                ? " text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
            style={{backgroundColor: activeTab === "qualifications" ? "#40a3a5":""}}
          >
            View Qualifications
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 rea ${
              activeTab === "skills"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
             style={{backgroundColor: activeTab === "skills" ? "#40a3a5":""}}
          >
            View My Skills
          </button>
        </div>

        {/* Tabs Content */}
        {activeTab === "qualifications" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{color:'#fff'}}>
                <GraduationCap className="text-blue-600"  style={{color:"#40a3a5"}}/> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
                    style={{   
    //                    backgroundColor: "#0e0f11",
    border: "1px solid #1f1f1f",
    backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
  }}
                  >
                    <h4 className="text-lg font-semibold" style={{color:"#fff"}}>{edu.title}</h4>
                    <p className="text-sm text-gray-600" style={{color:'#c1c8d0'}}>{edu.school}</p>
                    <p className="text-xs text-gray-500 mt-1" style={{color:'#c1c8d0'}}>{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{color:'#fff'}}>
                <Briefcase className="text-blue-600"  style={{color:"#40a3a5"}}/> Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
                    style={{   
                 border: "1px solid #1f1f1f",
    backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
  }}
                  >
                    <h4 className="text-lg font-semibold" style={{color:"#fff"}}>{exp.title}</h4>
                    <p className="text-sm text-gray-600" style={{color:'#c1c8d0'}}>{exp.company}</p>
                    <p className="text-xs text-gray-500 mt-1" style={{color:'#c1c8d0'}}>{exp.year}</p>
                    <p className="text-gray-700 mt-2 text-sm" style={{color:'#c1c8d0'}}>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
         


     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      {/* Title */}
      <h3
        className="text-3xl font-bold mb-10 flex justify-center items-center gap-3"
        style={{ color: "#fff" }}
      >
        <Code2 className="w-7 h-7" style={{ color: "#40a3a5" }} />
        Technical Skills
      </h3>

      {/* Tech Stack Section */}
      <div className="space-y-10 text-left">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e0f11] p-6 rounded-2xl shadow-lg border border-[#1f1f1f]"
          style={{
            backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
          }}
        >
          <h4 className="text-xl font-semibold mb-3" style={{ color: "#40a3a5" }}>
            Frontend
          </h4>
          <p className="text-gray-300 leading-relaxed text-base">
             React &nbsp;|&nbsp;  React Native &nbsp;|&nbsp;  Flutter &nbsp;|&nbsp; 
            JavaScript (ES6+) &nbsp;|&nbsp;  Next.js &nbsp;|&nbsp; TypeScript
          </p>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e0f11] p-6 rounded-2xl shadow-lg border border-[#1f1f1f]"
          style={{
            backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
          }}
        >
          <h4 className="text-xl font-semibold mb-3" style={{ color: "#40a3a5" }}>
            Backend
          </h4>
          <p className="text-gray-300 leading-relaxed text-base">
             Node.js &nbsp;|&nbsp;  Express.js &nbsp;|&nbsp;  Django &nbsp;|&nbsp;  Java &nbsp;|&nbsp;  Python
          </p>
        </motion.div>

        {/* Databases */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e0f11] p-6 rounded-2xl shadow-lg border border-[#1f1f1f]"
          style={{
            backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
          }}
        >
          <h4 className="text-xl font-semibold mb-3" style={{ color: "#40a3a5" }}>
            Databases
          </h4>
          <p className="text-gray-300 leading-relaxed text-base">
             PostgreSQL &nbsp;|&nbsp;  MySQL &nbsp;|&nbsp;  MongoDB
          </p>
        </motion.div>

        {/* Version Control */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e0f11] p-6 rounded-2xl shadow-lg border border-[#1f1f1f]"
          style={{
            backgroundColor: "#ffffff14",
    backdropFilter: "blur(43px)"
          }}
        >
          <h4 className="text-xl font-semibold mb-3" style={{ color: "#40a3a5" }}>
            Version Control
          </h4>
          <p className="text-gray-300 leading-relaxed text-base">
             Git &nbsp;|&nbsp;  GitHub
          </p>
        </motion.div>
      </div>
    </motion.div>

     
        )}
      </div>
    </section>
  );
};

export default Resume;


