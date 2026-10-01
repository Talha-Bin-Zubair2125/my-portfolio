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
  FaUsers,
  FaClock,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiExpress, 
  SiMysql, 
  SiMongodb, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiGit, 
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-pink-500 to-fuchsia-600",
      skills: [
        { icon: <SiCplusplus />, name: "C++", color: "#00599C", level: "Intermediate" },
        { icon: <FaJava />, name: "Java", color: "#007396", level: "Intermediate" },
        { icon: <FaPython />, name: "Python", color: "#3776AB", level: "Intermediate" },
      ],
    },
    {
      title: "Front-End Skills",
      icon: "🎨",
      gradient: "from-fuchsia-500 to-purple-600",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26", level: "Intermediate" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6", level: "Intermediate" },
        { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E", level: "Intermediate" },
        { icon: <FaReact />, name: "React.js", color: "#61DAFB", level: "Intermediate" },
      ],
    },
    {
      title: "Back-End & Databases",
      icon: "⚙️",
      gradient: "from-purple-500 to-violet-600",
      skills: [
        { icon: <FaNode />, name: "Node.js", color: "#339933", level: "Intermediate" },
        { icon: <SiExpress />, name: "Express.js", color: "#9CA3AF", level: "Intermediate" },
        { icon: <SiMysql />, name: "MySQL", color: "#4479A1", level: "Intermediate" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", level: "Intermediate" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      gradient: "from-blue-500 to-indigo-600",
      skills: [
        { icon: <SiNumpy />, name: "NumPy", color: "#013243", level: "Intermediate" },
        { icon: <SiPandas />, name: "Pandas", color: "#150458", level: "Intermediate" },
        { icon: <SiScikitlearn />, name: "Scikit-Learn", color: "#F7931E", level: "Intermediate" },
        { icon: <FaBrain />, name: "Machine Learning Concepts", color: PINK, level: "Intermediate" },
      ],
    },
    {
      title: "Version Control & Tools",
      icon: "🛠️",
      gradient: "from-violet-500 to-indigo-600",
      skills: [
        { icon: <SiGit />, name: "Git", color: "#F05032", level: "Intermediate" },
        { icon: <FaGithub />, name: "GitHub", color: "#9CA3AF", level: "Intermediate" },
        { icon: <BiLogoVisualStudio />, name: "VS Code", color: "#007ACC", level: "Intermediate" },
      ],
    },
    {
      title: "Soft Skills",
      icon: "🚀",
      gradient: "from-indigo-500 to-pink-600",
      skills: [
        { icon: <FaUsers />, name: "Team Collaboration", color: PINK, level: "Professional" },
        { icon: <FaBrain />, name: "Problem Solving", color: PURPLE, level: "Professional" },
        { icon: <FaLightbulb />, name: "Continuous Learning", color: "#d946ef", level: "Professional" },
        { icon: <FaClock />, name: "Time Management", color: INDIGO, level: "Professional" },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes neonFlickerS {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 30px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 14px ${PURPLE}22); }
        }
      `}</style>
      <section
        id="Skills"
        className="min-h-screen text-white px-4 sm:px-6 py-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 sm:w-10 h-px bg-gradient-to-r from-transparent to-pink-400" />
            <span
              className="text-pink-400"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Technical Expertise
            </span>
            <span className="w-8 sm:w-10 h-px bg-gradient-to-l from-transparent to-pink-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              background: `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "neonFlickerS 4s ease-in-out infinite",
            }}
          >
            My Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-white/40 px-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              minHeight: 24,
            }}
          >
            <TypingText
              phrases={[
                "A blend of technical expertise and soft skills.",
                "Fueling my journey as a Full-Stack & AI Developer.",
              ]}
              color="rgba(255,255,255,0.4)"
              cursorColor={PINK}
            />
          </motion.p>
        </div>

        {/* Categories as Clean Stacked Tables */}
        <div className="max-w-3xl mx-auto space-y-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-pink-500/10 p-6 sm:p-8 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg text-xl shrink-0`}
                >
                  {category.icon}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                  className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {category.title}
                </h2>
              </div>

              {/* Skills One Per Line */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3.5 sm:px-5 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all group"
                    style={{ background: "rgba(255, 255, 255, 0.02)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="text-2xl sm:text-3xl shrink-0 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span
                        className="text-white group-hover:text-pink-300 transition-colors"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className="text-xs px-3 py-1 rounded-full border border-pink-500/20 text-pink-300/80 shrink-0"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: "rgba(236, 72, 153, 0.05)",
                      }}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#Certifications"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(236,72,153,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/30 transition-all"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            View My Certifications &rarr;
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Skills;