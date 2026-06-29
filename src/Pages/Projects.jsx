import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Server, Smartphone } from "lucide-react";

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
  };

  const reactProjects = [
    { name: "Expense Tracker", desc: "CRUD App", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/expense_tracker" },
    { name: "Notes App", desc: "CRUD App", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/notes_app" },
    { name: "To-Do List App", desc: "CRUD App", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/todolistapp_project_8" },
  ];

  const backendProjects = [
    { name: "AI-Powered Full Stack Notes Application", desc: "React.js, Node.js, Express.js, MongoDB, Groq API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/notesapp" },
    { name: "Task Management System", desc: "Full Stack", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_20" },
    { name: "Role Based CMS", desc: "Auth + Roles", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/backend_project_21" },
    { name: "Music Player", desc: "API Integration", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_19" },
    { name: "File Writer", desc: "File System", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_6" },
    { name: "Markdown Converter", desc: "Text Utility", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_10" },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <section
        id="Projects"
        className="min-h-screen text-white px-6 py-20"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, #0d2d0d 0%, #060d06 60%)" }}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              What I've Built
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-emerald-400" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 900,
              lineHeight: 1.05, letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 45%, #34d399 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
            My Projects
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            className="mt-3 text-sm text-white/30"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            Building real-world applications with modern technologies
          </motion.p>
        </div>

        {/* Final Year Project */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg mb-2">
              <Smartphone size={28} className="text-white" />
            </div>
            <div className="text-center">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, color: "#fff" }}>Final Year Project</h2>
              <p className="text-emerald-400 mt-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", letterSpacing: "0.1em" }}>Unity • ARCore • Android</p>
            </div>
          </div>
          <motion.div whileHover={{ y: -5 }} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500" />
            <div className="relative rounded-2xl border border-emerald-500/20 group-hover:border-emerald-400/40 transition-all p-8 md:p-10 overflow-hidden"
              style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", backdropFilter: "blur(12px)" }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col items-center text-center mb-6">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 700, color: "#f0fdf4", marginBottom: "16px" }}>
                  {finalYearProject.name}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {finalYearProject.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full text-white bg-emerald-500"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="px-5 py-2 text-center rounded-2xl text-white font-medium bg-gradient-to-r from-emerald-500/20 to-green-600/20 border border-emerald-500/30 shadow-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.05em" }}>
                  {finalYearProject.desc}
                </span>
              </div>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {finalYearProject.achievements.map((a, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
                    <span className="text-emerald-400 mt-1 flex-shrink-0">▹</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <motion.div className="h-0.5 mt-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 max-w-2xl mx-auto"
                initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} />
            </div>
          </motion.div>
        </motion.div>

        {/* React Projects */}
        <ProjectCategory title="React Projects" icon={<Code2 size={28} />} projects={reactProjects} gradient="from-emerald-500 to-green-600" delay={0} />

        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="my-16 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent max-w-4xl mx-auto" />

        {/* Backend Projects */}
        <ProjectCategory title="Backend Projects" subtitle="Node.js + Express" icon={<Server size={28} />} projects={backendProjects} gradient="from-green-500 to-teal-600" delay={0.2} />
      </section>
    </>
  );
}

function ProjectCategory({ title, subtitle, icon, projects, gradient, delay }) {
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }} viewport={{ once: true }} className="max-w-7xl mx-auto mb-16">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mb-2`}>
          <div className="text-white">{icon}</div>
        </motion.div>
        <div className="text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#fff" }}>{title}</h2>
          {subtitle && <p className="text-emerald-400 mt-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", letterSpacing: "0.1em" }}>{subtitle}</p>}
        </div>
      </div>
      
      {/* Centralized Grid Wrapper using justify-center */}
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project, i) => (
          <motion.a key={i} href={project.link} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }} viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }} className="group relative w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] max-w-sm">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-xl transition-opacity duration-500`} />
            <div className="relative rounded-2xl border border-emerald-500/10 group-hover:border-emerald-400/40 transition-all duration-300 p-6 h-full flex flex-col overflow-hidden"
              style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", backdropFilter: "blur(12px)" }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-white mb-2 group-hover:text-emerald-400 transition-colors text-center sm:text-left"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700 }}>
                {project.name}
              </h3>
              <div className="flex justify-center sm:justify-start">
                <span className="inline-block text-white mb-4 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, padding: "4px 12px", tracking: "wide" }}>
                  {project.desc}
                </span>
              </div>
              <div className="mt-auto flex items-center justify-center sm:justify-start gap-2 text-gray-400 group-hover:text-emerald-400 transition-colors">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500 }}>View on GitHub</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <motion.div className={`h-0.5 mt-4 rounded-full bg-gradient-to-r ${gradient}`}
                initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.6, delay: i * 0.06 }} viewport={{ once: true }} />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div> 
  );
}

export default Projects;