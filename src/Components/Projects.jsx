import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Server } from "lucide-react";

function Projects() {
  const reactProjects = [
    { name: "Expense Tracker", desc: "CRUD App", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/expense_tracker" },
    { name: "Notes App", desc: "CRUD App", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/notes_app" },
    { name: "To-Do List App", desc: "CRUD App", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/todolistapp_project_8" },
    { name: "Login & Signup Form", desc: "LocalStorage Auth", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/login_signup_react" },
  ];

  const backendProjects = [
    { name: "Random Joke API", desc: "REST API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_5" },
    { name: "File Writer", desc: "File System", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_6" },
    { name: "Contact Management", desc: "CRUD API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_7" },
    { name: "Basic Blog API", desc: "No Database", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_8" },
    { name: "Student Management", desc: "Full CRUD", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_13" },
    { name: "Weather API", desc: "External API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_9" },
    { name: "Markdown Converter", desc: "File Processing", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_10" },
    { name: "Music Player", desc: "External API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_19" },
    { name: "Blog Management API", desc: "CRUD API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_16" },
    { name: "Feedback Collection System", desc: "CRUD API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_15" },
    { name: "Product Inventory API", desc: "CRUD API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_14" }
  ];

  return (
    <section
      id="Projects"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl sm:text-6xl font-black mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Building real-world applications with modern technologies
        </p>
      </motion.div>

      {/* React Projects */}
      <ProjectCategory
        title="React Projects"
        icon={<Code2 size={32} />}
        projects={reactProjects}
        gradient="from-cyan-500 to-blue-600"
        delay={0}
      />

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-4xl mx-auto"
      />

      {/* Backend Projects */}
      <ProjectCategory
        title="Backend Projects"
        subtitle="Node.js + Express"
        icon={<Server size={32} />}
        projects={backendProjects}
        gradient="from-purple-500 to-pink-600"
        delay={0.2}
      />
    </section>
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
      {/* Category Header */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
        >
          <div className="text-white">{icon}</div>
        </motion.div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-cyan-400 text-lg mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
            />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/60 transition-all h-full flex flex-col">
              {/* Project name */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>

              {/* Description badge */}
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white mb-4 w-fit`}>
                {project.desc}
              </span>

              {/* Link icon */}
              <div className="mt-auto flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
                <span className="text-sm font-medium">View on GitHub</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`h-1 mt-4 rounded-full bg-gradient-to-r ${gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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