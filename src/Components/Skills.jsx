import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaDatabase,
  FaJava,
  FaPython,
  FaGitAlt,
  FaTools,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiCplusplus, SiVisualstudiocode, SiExpress } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Front-End Skills",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
      ],
    },
    {
      title: "Back-End (Learning Phase)",
      skills: [
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaPython />, name: "Python" },
      ],
    },
    {
      title: "Version Control & Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiVisualstudiocode />, name: "VS Code" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { icon: <FaUsers />, name: "Team Collaboration" },
        { icon: <FaBrain />, name: "Problem Solving" },
        { icon: <FaLightbulb />, name: "Continuous Learning" },
        { icon: <FaClock />, name: "Time Management" },
      ],
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 drop-shadow-md">
          My Skills
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          A blend of technical expertise and soft skills that shape my development journey.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto space-y-16">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-8 text-center underline underline-offset-8 decoration-cyan-500">
              {category.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-3 bg-[#0f1f22]/80 p-6 rounded-2xl w-36 shadow-md hover:shadow-cyan-500/40 border border-cyan-900/30 transition-all"
                >
                  <div className="text-5xl text-cyan-400">{skill.icon}</div>
                  <p className="text-base font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
