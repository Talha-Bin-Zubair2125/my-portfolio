import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaJava,
  FaPython,
  FaGitAlt,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaBrain,
  FaServer,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Front-End Skills",
      icon: "🎨",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
        { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
      ],
    },
    {
      title: "Back-End Skills",
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-600",
      skills: [
        { icon: <FaNode />, name: "Node.js", color: "#339933" },
        { icon: <FaServer />, name: "Express.js", color: "#000000" },
        { icon: <FaDatabase />, name: "MySQL", color: "#4479A1" },
        { icon: <FaDatabase />, name: "MongoDB", color: "#47A248" },
      ],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { icon: <FaCode />, name: "C++", color: "#00599C" },
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
      ],
    },
    {
      title: "Version Control & Tools",
      icon: "🛠️",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <FaGithub />, name: "GitHub", color: "#181717" },
        { icon: <FaTools />, name: "VS Code", color: "#007ACC" },
      ],
    },
    {
      title: "Soft Skills",
      icon: "🚀",
      gradient: "from-blue-500 to-indigo-600",
      skills: [
        { icon: <FaUsers />, name: "Team Collaboration", color: "#06B6D4" },
        { icon: <FaBrain />, name: "Problem Solving", color: "#8B5CF6" },
        { icon: <FaLightbulb />, name: "Continuous Learning", color: "#F59E0B" },
        { icon: <FaClock />, name: "Time Management", color: "#10B981" },
      ],
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-24"
      >
        <h1 className="text-5xl sm:text-6xl font-black mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          A blend of technical expertise and soft skills that fuel my journey as a{" "}
          <span className="text-cyan-400 font-semibold"> MERN Stack Developer</span>
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="space-y-28">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-14">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-lg`}
              >
                {category.icon}
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {category.title}
              </h2>
            </div>

            {/* ✅ PERFECTLY CENTERED GRID (FINAL FIX) */}
            <div className="flex justify-center w-full">
              <div
                className="
                  grid
                  grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
                  gap-8
                  max-w-fit
                  place-items-center
                "
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group relative w-[220px]"
                  >
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition-opacity duration-500`}
                    />

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/60 transition-all flex flex-col items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </motion.div>

                      <p className="text-lg font-semibold text-center group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </p>

                      <div
                        className={`h-1 w-full rounded-full bg-gradient-to-r ${category.gradient}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
