import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Front-End Web Development",
      status: "Completed",
      organization: "Professional Freelancing Training Program",
      link: "https://drive.google.com/file/d/1wRoW94JHR9XDa1H-WnvGDdTXQwY1WtwI/view?usp=sharing",
    },
    {
      title: "Full Stack Web Development",
      status: "Completed",
      organization: "PNY Trainings",
      link: "https://drive.google.com/file/d/1fNjaWjqYJJaptd1TJTNLLqJsDEU93Eyb/view?usp=sharing",
    },
  ];

  return (
    <section
      id="Certifications"
      className="min-h-screen bg-gradient-to-r from-black via-[#0a2b30] to-black text-white py-20 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-center text-cyan-400 mb-12"
      >
        Certifications
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f1f22]/80 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/40 w-full md:w-1/3 transition text-center"
          >
            <div className="flex justify-center mb-4">
              <FaCertificate className="text-5xl text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
              {cert.title}
            </h2>
            <p className="text-gray-400 mb-2">{cert.organization}</p>
            <p className="text-sm text-green-400 font-semibold mb-4">
              Status: {cert.status}
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              View Certificate
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
