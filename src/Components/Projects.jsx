import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const reactProjects = [
    { name: "Expense Tracker (CRUD App)", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/expense_tracker" },
    { name: "Notes App (CRUD App)", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/notes_app" },
    { name: "To-Do List App (CRUD App)", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/todolistapp_project_8" },
    { name: "Login & Signup Form (LocalStorage Auth)", link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/login_signup_react" },
  ];

  const backendProjects = [
    { name: "Random Joke API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_5" },
    { name: "File Writer", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_6" },
    { name: "Contact Management", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_7" },
    { name: "Basic Blog API (No DB)", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_8" },
    { name: "Student Management System ", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_13" },
    { name: "Weather API", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_9" },
    { name: "Markdown to HTML Converter", link: "https://github.com/Talha-Bin-Zubair2125/backend_projects/tree/main/practice_project_10" },
  ];

  return (
    <section
      id="Projects"
      className="min-h-screen scroll-mt-24 bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold mb-16 text-center text-cyan-400"
      >
        My Projects
      </motion.h1>

      <ProjectCategory title="React Projects" projects={reactProjects} />

      <div className="my-10 h-[1px] bg-cyan-900/40 w-3/4 mx-auto"></div>

      <ProjectCategory title="Backend Projects (Node.js + Express)" projects={backendProjects} />
    </section>
  );
}

function ProjectCategory({ title, projects }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-semibold mb-6 text-blue-300">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-white shadow-md hover:shadow-cyan-400/40 transition"
          >
            {p.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
