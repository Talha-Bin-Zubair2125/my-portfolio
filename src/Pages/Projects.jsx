import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Server, Smartphone } from "lucide-react";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";

function Projects() {
  const finalYearProject = {
    name: "GoGuide – AR Indoor Mall Navigation System (FYP)",
    desc: "Unity, C#, ARCore, Android, Firebase",
    tags: ["Unity", "C#", "ARCore", "Firebase", "Android"],
    achievements: [
      "Collaborated in a team of 3 to design and develop an AR-based indoor mall navigation Android app using Unity and ARCore",
      "Designed an interactive UI featuring a mini-map, shop selection interface, and real-time AR markers for a seamless user navigation experience",
      "Integrated Firebase for cloud-based map storage, user authentication, and Android deployment support",
    ],
    "Project Demonstration":
      "https://drive.google.com/drive/folders/1kJt9_s7Xyskm-IQkaiU2A8S28gv3wxSJ",
  };

  const reactProjects = [
    {
      name: "Expense Tracker",
      desc: "CRUD App",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/expense_tracker",
    },
    {
      name: "Notes App",
      desc: "CRUD App",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/notes_app",
    },
    {
      name: "To-Do List App",
      desc: "CRUD App",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/todolistapp_project_8",
    },
  ];

  const backendProjects = [
    {
      name: "AI-Customer-Support-Ticket-System",
      desc: "React.js, Node.js, Express.js, MongoDB, Groq API, AI Integration",
      link: "https://github.com/Talha-Bin-Zubair2125/AI-Customer-Support-Ticket-System",
    },
    {
      name: "STG Internship Management System",
      desc: "React.js, Node.js, Express.js, MongoDB, Groq API, AI Integration",
      link: "https://github.com/Talha-Bin-Zubair2125/stg-intern-tracker",
    },
    {
      name: "AI-Powered Full Stack Notes Application",
      desc: "React.js, Node.js, Express.js, MongoDB, Groq API",
      link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/notesapp",
    },
    {
      name: "Task Management System",
      desc: "Full Stack, CRUD, Role-Based,",
      link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/TaskPulse%20%E2%80%93%20Role-Based%20Task%20Management%20%26%20Administration%20System",
    },
    {
      name: "Role Based CMS",
      desc: "Auth + Roles, Content Management, User Administration",
      link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/PublishPulse%20%E2%80%93%20Role-Based%20Editorial%20%26%20Article%20Management%20Portal",
    },
    {
      name: "Music Player",
      desc: "API Integration",
      link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/TuneWave",
    },
    {
      name: "File Writer",
      desc: "File System",
      link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/TextForge%20Express",
    },
    {
      name: "Markdown Converter",
      desc: "Text Utility",
      link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/MarkParse%20Express",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes neonFlickerP {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 30px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 14px ${PURPLE}22); }
        }
      `}</style>
      <section
        id="Projects"
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
              What I've Built
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
              animation: "neonFlickerP 4s ease-in-out infinite",
            }}
          >
            My Projects
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
                "Building real-world applications with modern technologies.",
                "React, Node.js, Express, MongoDB & AI integrations.",
              ]}
              color="rgba(255,255,255,0.4)"
              cursorColor={PINK}
            />
          </motion.p>
        </div>

        {/* Final Year Project */}
        <ul className="space-y-4 max-w-3xl mx-auto">
          {finalYearProject.achievements.map((a, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-gray-300 leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
              }}
            >
              <span className="text-pink-400 mt-1 flex-shrink-0">▹</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>

        {/* Project Demonstration Button */}
        {finalYearProject["Project Demonstration"] && (
          <motion.a
            href={finalYearProject["Project Demonstration"]}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ duration: 0.3 }}
            className="mt-8 mx-auto flex items-center gap-2 w-fit px-6 py-3 rounded-full text-white font-medium border border-pink-500/30 bg-gradient-to-r from-pink-500/20 to-purple-600/20 hover:border-pink-400 transition-all shadow-lg"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
          >
            <ExternalLink size={16} />
            Project Demonstration
          </motion.a>
        )}

        {/* Fix: Added mt-16 and mb-16 for proper spacing */}
        <motion.div
          className="h-0.5 mt-16 mb-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 max-w-2xl mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* React Projects */}
        <ProjectCategory
          title="React Projects"
          icon={<Code2 size={28} />}
          projects={reactProjects}
          gradient="from-pink-500 to-purple-600"
          delay={0}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-16 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent max-w-4xl mx-auto"
        />

        {/* Backend Projects */}
        <ProjectCategory
          title="Backend Projects"
          subtitle="Node.js + Express"
          icon={<Server size={28} />}
          projects={backendProjects}
          gradient="from-purple-500 to-indigo-600"
          delay={0.2}
        />
      </section>
    </>
  );
}

function ProjectCategory({ title, subtitle, icon, projects, gradient, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto mb-16"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mb-2`}
        >
          <div className="text-white">{icon}</div>
        </motion.div>
        <div className="text-center">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-pink-400 mt-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.1em",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] max-w-sm"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-xl transition-opacity duration-500`}
            />
            <div
              className="relative rounded-2xl border border-pink-500/10 group-hover:border-pink-400/40 transition-all duration-300 p-6 h-full flex flex-col overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3
                className="text-white mb-2 group-hover:text-pink-400 transition-colors text-center sm:text-left"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                {project.name}
              </h3>
              <div className="flex justify-center sm:justify-start">
                <span
                  className="inline-block text-white mb-4 w-fit rounded-xl bg-pink-500/10 border border-pink-500/20"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "4px 12px",
                    tracking: "wide",
                  }}
                >
                  {project.desc}
                </span>
              </div>
              <div className="mt-auto flex items-center justify-center sm:justify-start gap-2 text-gray-400 group-hover:text-pink-400 transition-colors">
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  View on GitHub
                </span>
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
              <motion.div
                className={`h-0.5 mt-4 rounded-full bg-gradient-to-r ${gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
