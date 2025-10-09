

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

interface Skill {
  id: number;
  name: string;
  level: number;
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

const skills: Skill[] = [
  { id: 1, name: "React / Next.js", level: 95 },
  { id: 2, name: "Node.js / Express", level: 90 },
  { id: 3, name: "React Native", level: 88 },
  { id: 4, name: "MySQL / PostgreSQL", level: 85 },
  { id: 5, name: "TypeScript", level: 80 },
  { id: 6, name: "Firebase / Cloud Integration", level: 75 },
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
               <div style={{width:"3px", height:'40px',backgroundColor:'#40a3a5', margin:"3px auto 2px auto"}}></div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("qualifications")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
                    style={{    backgroundColor: "rgb(27, 29, 29)",
    border: "1px solid rgb(78, 85, 100)"}}
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
                    style={{    backgroundColor: "rgb(27, 29, 29)",
    border: "1px solid rgb(78, 85, 100)"}}
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
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center flex justify-center items-center gap-2" style={{color:"#fff"}}>
              <Code2 className="text-blue-600" style={{color:"#40a3a5"}}/> Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium" style={{color:"#fff"}}>{skill.name}</span>
                    <span className="text-sm text-gray-600" style={{color:"#40a3a5"}}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-3 rounded-full "
                      style={{backgroundColor:"#40a3a5"}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Resume;


