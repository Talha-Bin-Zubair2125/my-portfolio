import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

function EducationalDetails() {
  const items = [
    {
      title: "National University of Modern Languages (NUML)",
      subtitle: "BSc — Computer Science",
      details:
        "Semester: 7 • CGPA: 3.04 / 4.00. Focus on Full Stack Development (MERN), Data Structures, and Software Engineering principles. Built several practical web applications as part of coursework and personal projects.",
      icon: <FaUniversity size={36} className="text-cyan-400" />,
    },
    {
      title: "KIPS College",
      subtitle: "Intermediate (ICS)",
      details:
        "Marks Obtained: 910 / 1100. Developed strong fundamentals in computing and mathematics, building a strong base for software and web development.",
      icon: <FaGraduationCap size={36} className="text-cyan-400" />,
    },
    {
      title: "Sir Syed Public School",
      subtitle: "Matriculation (Pre-Medical)",
      details:
        "Marks Obtained: 810 / 1100. Early academic background in sciences which later transitioned into technology and programming interests.",
      icon: <FaSchool size={36} className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="EducationalDetails"
      className="min-h-screen bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 drop-shadow-md">
          Educational Details
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          My academic journey has built a solid foundation for my career in software development.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#0f1f22]/80 border border-cyan-900/40 hover:border-cyan-400/40 
            rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-transform transform hover:-translate-y-2 
            backdrop-blur-md overflow-hidden group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="p-8 relative z-10 flex flex-col items-start text-left space-y-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-2">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-cyan-300 font-medium mt-1">{item.subtitle}</p>
              </div>

              <p className="text-gray-300 mt-3 leading-relaxed text-sm sm:text-base">
                {item.details}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default EducationalDetails;
