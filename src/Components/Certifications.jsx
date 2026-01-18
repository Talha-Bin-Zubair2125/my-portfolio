import React from "react";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Front-End Web Development",
      status: "Completed",
      organization: "Professional Freelancing Training Program",
      link: "https://drive.google.com/file/d/1wRoW94JHR9XDa1H-WnvGDdTXQwY1WtwI/view?usp=sharing",
      image: "https://tecspectrum.com/wp-content/uploads/2024/10/pftp-dark-logo-800x730.png",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Full Stack Web Development",
      status: "Completed",
      organization: "PNY Trainings",
      link: "https://drive.google.com/file/d/1fNjaWjqYJJaptd1TJTNLLqJsDEU93Eyb/view?usp=sharing",
      image: "https://pnygroup.co/wp-content/uploads/2021/11/235146443_1714244258779215_7609558304785368671_n-1.png",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="Certifications"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-black text-center mb-16"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative flex-1 group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
            
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/20 group-hover:border-cyan-500/60 transition-all h-full flex flex-col">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="flex justify-center mb-6 bg-gray-800/50 p-6 rounded-2xl mx-auto"
              >
                <img
                  src={cert.image}
                  alt={`${cert.organization} Logo`}
                  className="h-32 w-32 object-contain"
                />
              </motion.div>

              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-3 text-center">
                  {cert.title}
                </h2>
                <p className="text-gray-400 mb-3 text-center">{cert.organization}</p>
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {cert.status}
                  </span>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center bg-gradient-to-r ${cert.color} text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all mt-auto`}
              >
                View Certificate →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;