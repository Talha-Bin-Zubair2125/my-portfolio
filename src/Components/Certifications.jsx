import React from "react";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Front-End Web Development",
      status: "Completed",
      organization: "Professional Freelancing Training Program",
      link: "https://drive.google.com/file/d/1wRoW94JHR9XDa1H-WnvGDdTXQwY1WtwI/view?usp=sharing",
      image: "https://tecspectrum.com/wp-content/uploads/2024/10/pftp-dark-logo-800x730.png", // Updated PFTP logo
    },
    {
      title: "Full Stack Web Development",
      status: "Completed",
      organization: "PNY Trainings",
      link: "https://drive.google.com/file/d/1fNjaWjqYJJaptd1TJTNLLqJsDEU93Eyb/view?usp=sharing",
      image: "https://th.bing.com/th/id/OIP.l6HEuAtjxKFUZof6g93nxQHaGH?o=7&cb=ucfimgc2rm=3&rs=1", // PNY logo
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
            className="bg-[#0f1f22]/90 p-8 rounded-3xl shadow-xl hover:shadow-cyan-500/40 w-full md:w-1/3 transition text-center flex flex-col items-center"
          >
            {/* Institute Logo */}
            {cert.image && (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 0px 25px rgba(0,255,255,0.5)" }}
                className="flex justify-center mb-6 bg-[#0a1b1e] p-6 rounded-2xl w-40 h-40 items-center"
              >
                <img
                  src={cert.image}
                  alt={`${cert.organization} Logo`}
                  className="max-h-28 object-contain"
                />
              </motion.div>
            )}

            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
              {cert.title}
            </h2>
            <p className="text-gray-400 mb-2">{cert.organization}</p>
            <p className="text-sm text-green-400 font-semibold mb-4">
              Status: {cert.status}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-5 py-2 rounded-lg transition"
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
