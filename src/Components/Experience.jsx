import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Users, GraduationCap } from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Arch Technologies",
      location: "Rawalpindi, Pakistan",
      duration: "Dec 2025 – Jan 2026",
      type: "Internship",
      icon: <Code size={28} />,
      gradient: "from-cyan-500 to-blue-600",
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
      gradient: "from-purple-500 to-pink-600",
      achievements: [
        "Worked in an agile team environment with assigned development modules on multiple projects",
        "Smart Complaint Management System: Developed assigned frontend and backend modules, implemented CRUD operations for efficient complaint tracking and resolution",
        "AI-Based Business Automation Website: Integrated frontend components with backend APIs to enable automated business workflows",
        "Online Polling & Survey Platform: Built modules for poll creation, voting mechanisms, and result display with real-time updates",
        "Collaborated using Git for version control and tested APIs with Postman to ensure functionality and reliability",
      ],
    },
    {
      role: "Computer Science Instructor",
      company: "My First Choice (M1C)",
      location: "Rawalpindi, Pakistan",
      duration: "2024 – 2025",
      type: "Teaching",
      icon: <GraduationCap size={28} />,
      gradient: "from-green-500 to-emerald-600",
      achievements: [
        "Taught Computer Science and Programming to students of 9th, 10th, 1st Year, and 2nd Year for one year",
        "Focused on building strong programming fundamentals, logical thinking, and problem-solving skills",
        "Delivered practical examples and hands-on exercises to enhance student understanding and engagement",
      ],
    },
  ];

  return (
    <section
      id="Experience"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl sm:text-6xl font-black mb-6">
          Professional{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Building real-world solutions and empowering the next generation of developers
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 opacity-30" />

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg shadow-cyan-500/50 border-4 border-gray-900`}
                />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="w-full md:w-[calc(50%-2rem)] group relative"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                />

                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/20 group-hover:border-cyan-500/60 transition-all">
                  {/* Icon and Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}
                    >
                      {exp.icon}
                    </motion.div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${exp.gradient} text-white shadow-lg`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Role and Company */}
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold text-lg mb-1">{exp.company}</p>
                  
                  {/* Location and Duration */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
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
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`h-1 mt-6 rounded-full bg-gradient-to-r ${exp.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

              {/* Spacer for alignment */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <motion.a
          href="#Contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-500/30 transition-all"
        >
          Let's Work Together →
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Experience;