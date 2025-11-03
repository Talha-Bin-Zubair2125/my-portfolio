import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <FaGithub />, name: "Git & GitHub" },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center text-cyan-400"
      >
        My Skills
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 bg-[#0f1f22]/80 p-6 rounded-2xl w-36 shadow-lg hover:shadow-cyan-500/40 transition"
          >
            <div className="text-5xl text-cyan-400">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
