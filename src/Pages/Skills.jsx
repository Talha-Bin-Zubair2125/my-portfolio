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
        { icon: <FaCode />, name: "C++", color: "#00599C" },
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
      ],
    },
    {
      title: "Front-End Skills",
      icon: "🎨",
      gradient: "from-fuchsia-500 to-purple-600",
      skills: [
        { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
        { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
      ],
    },
    {
      title: "Back-End",
      icon: "⚙️",
      gradient: "from-purple-500 to-violet-600",
      skills: [
        { icon: <FaNode />, name: "Node.js", color: "#339933" },
        { icon: <FaServer />, name: "Express.js", color: "#9CA3AF" },
        { icon: <FaDatabase />, name: "MySQL", color: "#4479A1" },
        { icon: <FaDatabase />, name: "MongoDB", color: "#47A248" },
      ],
    },
    {
      title: "Version Control & Tools",
      icon: "🛠️",
      gradient: "from-violet-500 to-indigo-600",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <FaGithub />, name: "GitHub", color: "#9CA3AF" },
        { icon: <FaTools />, name: "VS Code", color: "#007ACC" },
      ],
    },
    {
      title: "Soft Skills",
      icon: "🚀",
      gradient: "from-indigo-500 to-pink-600",
      skills: [
        { icon: <FaUsers />, name: "Team Collaboration", color: PINK },
        { icon: <FaBrain />, name: "Problem Solving", color: PURPLE },
        {
          icon: <FaLightbulb />,
          name: "Continuous Learning",
          color: "#d946ef",
        },
        { icon: <FaClock />, name: "Time Management", color: INDIGO },
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
        className="min-h-screen text-white px-6 py-20"
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
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-pink-400" />
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
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-pink-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 7vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.05,
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
            className="mt-3 text-sm text-white/40"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              minHeight: 20,
            }}
          >
            <TypingText
              phrases={[
                "A blend of technical expertise and soft skills.",
                "Fueling my journey as a MERN Stack Developer.",
              ]}
              color="rgba(255,255,255,0.4)"
              cursorColor={PINK}
            />
          </motion.p>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto space-y-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category heading */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg text-2xl`}
                >
                  {category.icon}
                </motion.div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 700,
                  }}
                  className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
                >
                  {category.title}
                </h2>
              </div>

              {/* ── KEY FIX: flex wrap + justify-center so odd counts stay centred ── */}
              <div className="flex flex-wrap justify-center gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group relative"
                    style={{ width: "200px", flexShrink: 0 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                    />
                    <div
                      className="relative rounded-2xl border border-pink-500/10 group-hover:border-pink-400/40 transition-all duration-300 p-6 h-full flex flex-col items-center justify-center gap-4 overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </motion.div>
                      <p
                        className="text-white group-hover:text-pink-400 transition-colors text-center"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {skill.name}
                      </p>
                      <motion.div
                        className={`h-0.5 w-full rounded-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#Certifications"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(236,72,153,0.4)",
            }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-lg shadow-pink-500/30 transition-all"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            View My Certifications →
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Skills;
