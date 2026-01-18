import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

function EducationalDetails() {
  const items = [
    {
      title: "National University of Modern Languages (NUML)",
      subtitle: "BSc — Computer Science",
      details: (
        <>
          <p><strong>Semester:</strong> 7</p>
          <p><strong>CGPA:</strong> 3.04 / 4.00</p>
          <p className="mt-2">
            Focus on Full Stack Development (MERN), Data Structures, and Software
            Engineering principles. Built several practical web applications as part of
            coursework and personal projects.
          </p>
        </>
      ),
      icon: <FaUniversity size={40} />,
      gradient: "from-cyan-500 to-blue-600",
      year: "2022 - Present",
    },
    {
      title: "KIPS College",
      subtitle: "Intermediate (ICS)",
      details: (
        <>
          <p><strong>Marks Obtained:</strong> 910 / 1100</p>
          <p className="mt-2">
            Developed strong fundamentals in computing and mathematics, building a
            strong base for software and web development.
          </p>
        </>
      ),
      icon: <FaGraduationCap size={40} />,
      gradient: "from-purple-500 to-pink-600",
      year: "2019 - 2021",
    },
    {
      title: "Sir Syed Public School",
      subtitle: "Matriculation (Pre-Medical)",
      details: (
        <>
          <p><strong>Marks Obtained:</strong> 810 / 1100</p>
          <p className="mt-2">
            Early academic background in sciences which later transitioned into
            technology and programming interests.
          </p>
        </>
      ),
      icon: <FaSchool size={40} />,
      gradient: "from-green-500 to-emerald-600",
      year: "2017 - 2019",
    },
  ];

  return (
    <section
      id="EducationalDetails"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl sm:text-6xl font-black mb-6">
          Educational{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <p className="text-xl text-gray-300">
          My academic journey has built a solid foundation for my career in software development
        </p>
      </motion.div>

      {/* Timeline Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
            />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/20 group-hover:border-cyan-500/60 transition-all h-full flex flex-col">
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
              >
                <div className="text-white">{item.icon}</div>
              </motion.div>

              {/* Year Badge */}
              <div className="flex justify-center mb-4">
                <span className={`inline-block text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-cyan-400 font-semibold text-center mb-6">{item.subtitle}</p>

              {/* Details */}
              <div className="text-gray-300 leading-relaxed text-sm sm:text-base space-y-2 flex-1">
                {item.details}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`h-1 mt-6 rounded-full bg-gradient-to-r ${item.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: idx * 0.2 + 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.a
          href="#Contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-500/30 transition-all"
        >
          Get In Touch →
        </motion.a>
      </motion.div>
    </section>
  );
}

export default EducationalDetails;