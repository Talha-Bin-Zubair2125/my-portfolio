import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

function EducationalDetails() {
  const items = [
    {
      title: "National University of Modern Languages (NUML)",
      subtitle: "BSc — Computer Science",
      details:
        "Semester: 7 • CGPA: 3.04 / 4.00. Focus: Full Stack Development (MERN), data structures, and software engineering principles. Built several practical web applications as part of coursework and personal projects.",
      icon: <FaUniversity size={36} className="text-cyan-400" />,
    },
    {
      title: "KIPS College",
      subtitle: "Intermediate (ICS)",
      details:
        "Marks Obtained: 910 / 1100. Developed strong fundamentals in computing and mathematics which paved the way to web development and programming.",
      icon: <FaGraduationCap size={36} className="text-cyan-400" />,
    },
    {
      title: "Sir Syed Public School",
      subtitle: "Matriculation (Pre-Medical)",
      details:
        "Marks Obtained: 810 / 1100. Early academic background in sciences — later transitioned to computing and software development.",
      icon: <FaSchool size={36} className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="EducationalDetails"
      className="min-h-screen bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400">Educational Details</h2>
        <p className="text-gray-300 mt-4">
          Formal education and academic milestones that shaped my journey into software development.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0f1f22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-cyan-300 font-medium mt-1">{item.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">{item.details}</p>

            <div className="mt-6 flex justify-between items-center text-sm text-gray-400">
              <span className="px-3 py-1 rounded-full bg-black/30">Duration: —</span>
              <span className="px-3 py-1 rounded-full bg-black/30">Location: —</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default EducationalDetails;
