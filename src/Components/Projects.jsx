import React from "react";

function Projects() {
  const reactProjects = [
    {
      name: "Expense Tracker (CRUD App)",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/expense_tracker",
    },
    {
      name: "Notes App (CRUD App)",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/notes_app",
    },
    {
      name: "To-Do List App (CRUD App)",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/todolistapp_project_8",
    },
    {
      name: "Login & Signup Form (Authentication Via LocalStorage)",
      link: "https://github.com/Talha-Bin-Zubair2125/my_react_projects_portfolio/tree/main/login_signup_react",
    },
  ];

  const backendProjects = [
    { name: "Random Joke API", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/tree/main/practice_project_5" },
    { name: "File Writer", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/tree/main/practice_project_6" },
    { name: "Contact Management", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/tree/main/practice_project_7" },
    { name: "Basic Blog API (Without Database)", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/tree/main/practice_project_8" },
    { name: "URL Shortener", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/" },
    { name: "Weather API (via Public API)", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/tree/main/practice_project_9" },
    { name: "Markdown to HTML Converter", link: "https://github.com/Talha-Bin-Zubair2125/backend-projects-hub/tree/main/practice_project_10" },
  ];

  const universityProjects = [
    { name: "Go Guide AR Indoor Navigation System (FYP)" },
    { name: "Utility Store Management System (Java)" },
    { name: "Movie Management System (DSA Project)" },
  ];

  return (
    <>
      <div
        className="flex flex-col justify-center min-h-screen p-6 md:p-12 bg-gradient-to-r from-black via-[#0a2b30] to-black text-white"
        id="Project"
      >
        {/* Main Heading */}
        <div className="container mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h1>
          <p className="text-blue-300 italic text-base sm:text-lg md:text-xl">
            “Turning ideas into interactive, real-world applications.”
          </p>
        </div>

        {/* React Projects */}
        <ProjectCategory title="React Projects" projects={reactProjects} hasLinks />

        {/* Backend Projects */}
        <ProjectCategory
          title="Backend Projects (Express + Node.js)"
          projects={backendProjects}
          hasLinks
        />

        {/* University Projects */}
        <ProjectCategory
          title="University Projects"
          projects={universityProjects}
          hasLinks={false}
        />
      </div>
    </>
  );
}

/* Sub-component for each category */
function ProjectCategory({ title, projects, hasLinks }) {
  return (
    <div className="container mx-auto mb-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity p-2 rounded">
        {title}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) =>
          hasLinks && project.link ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition transform shadow-md hover:shadow-blue-500/40"
            >
              {project.name}
            </a>
          ) : (
            <button
              key={index}
              disabled
              className="bg-gray-600 text-white px-5 py-2 rounded-lg cursor-default opacity-80"
            >
              {project.name}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
