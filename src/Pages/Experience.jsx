import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Arch Technologies",
      location: "Rawalpindi, Pakistan",
      duration: "Dec 2025 – Jan 2026",
      type: "Internship",
      icon: <Code size={28} />,
      gradient: "from-pink-500 to-fuchsia-600",
      achievements: [
        "Built a full-stack music player web application using React.js and Node.js with Express framework",
        "Integrated public music APIs for dynamic data fetching and streaming capabilities",
        "Developed backend routes and connected frontend using Axios for seamless API communication",
        "Designed responsive UI with focus on user experience and modern web design principles",
        "Used Git and GitHub for version control and collaboration throughout the development process",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "CodeCelix",
      location: "Rawalpindi, Pakistan",
      duration: "Dec 2025 – Mar 2026",
      type: "Internship",
      icon: <Briefcase size={28} />,
      gradient: "from-fuchsia-500 to-purple-600",
      achievements: [
        "Worked in an agile team environment with assigned development modules on multiple projects",
        "Smart Complaint Management System: Developed frontend and backend modules with CRUD operations for complaint tracking",
        "AI-Based Business Automation Website: Integrated frontend components with backend APIs for automated workflows",
        "Online Polling & Survey Platform: Built modules for poll creation, voting mechanisms, and real-time result display",
        "Collaborated using Git for version control and tested APIs with Postman to ensure reliability",
      ],
    },
    {
      role: "Computer Science Instructor",
      company: "My First Choice (M1C)",
      location: "Rawalpindi, Pakistan",
      duration: "2024 – 2025",
      type: "Teaching",
      icon: <GraduationCap size={28} />,
      gradient: "from-purple-500 to-indigo-600",
      achievements: [
        "Taught Computer Science and Programming to students of 9th, 10th, 1st Year, and 2nd Year for one year",
        "Focused on building strong programming fundamentals, logical thinking, and problem-solving skills",
        "Delivered practical examples and hands-on exercises to enhance student understanding and engagement",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes neonFlickerE {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 30px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 14px ${PURPLE}22); }
        }
        @keyframes dotPulseE {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,0.5); }
          50% { box-shadow: 0 0 0 8px rgba(236,72,153,0); }
        }
        @keyframes lineFlowE {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
      `}</style>
      <section
        id="Experience"
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
              Career &amp; Teaching
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
              animation: "neonFlickerE 4s ease-in-out infinite",
            }}
          >
            Professional Experience
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
                "Building real-world solutions.",
                "Empowering the next generation of developers.",
              ]}
              color="rgba(255,255,255,0.4)"
              cursorColor={PINK}
            />
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Centre line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px opacity-30"
            style={{
              background: `linear-gradient(180deg, ${PINK}, ${PURPLE}, ${INDIGO}, ${PINK})`,
              backgroundSize: "100% 200%",
              animation: "lineFlowE 6s linear infinite",
            }}
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-[#080612]`}
                    style={{ animation: "dotPulseE 2.4s ease-in-out infinite" }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="w-full md:w-[calc(50%-2rem)] group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`}
                  />
                  <div
                    className="relative rounded-2xl border border-pink-500/10 group-hover:border-pink-400/40 transition-all duration-300 p-8 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Top shimmer */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon + type badge */}
                    <div className="flex items-center justify-between mb-5">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        {exp.icon}
                      </motion.div>
                      <span
                        className={`rounded-full text-white bg-gradient-to-r ${exp.gradient} shadow-lg`}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          padding: "5px 14px",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Divider */}
                    <div
                      className="mb-4 rounded-full"
                      style={{
                        width: 32,
                        height: 2,
                        background: `linear-gradient(90deg, ${PINK}, ${PURPLE})`,
                      }}
                    />

                    {/* Role */}
                    <h3
                      className="text-white mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#f472b6",
                      }}
                    >
                      {exp.company}
                    </p>

                    {/* Location + Duration */}
                    <div className="flex flex-wrap gap-4 mb-5">
                      <span
                        className="flex items-center gap-2 text-gray-400"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "12px",
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                        {exp.location}
                      </span>
                      <span
                        className="flex items-center gap-2 text-gray-400"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "12px",
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {exp.duration}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-gray-300 leading-relaxed"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                          }}
                        >
                          <span className="text-pink-400 mt-1 flex-shrink-0">
                            ▹
                          </span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Bottom bar */}
                    <motion.div
                      className={`h-0.5 mt-6 rounded-full bg-gradient-to-r ${exp.gradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
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
            href="#Contact"
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
            Let's Work Together →
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Experience;
