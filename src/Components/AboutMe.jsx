import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-[#0f1f22]/90 backdrop-blur-md p-10 rounded-3xl shadow-xl hover:shadow-cyan-500/30 transition-all"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-cyan-400 text-center">
          About Me
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hello! I’m <span className="text-cyan-400">Talha Bin Zubair</span>, a passionate developer
          focused on building fast, scalable, and visually beautiful web
          applications. My goal is to blend logic with creativity — delivering
          meaningful digital experiences that people love using.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I specialize in the <span className="text-cyan-400">MERN stack</span> and love turning
          real-world problems into practical, interactive web apps. Every line
          of code I write moves me closer to becoming a world-class full-stack
          engineer.
        </p>

        <motion.a
          href="#Goal"
          whileHover={{ scale: 1.05 }}
          className="block text-center mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Discover My Goals ↓
        </motion.a>
      </motion.div>
    </section>
  );
}

export default AboutMe;
