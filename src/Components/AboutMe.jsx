import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-black mb-12 text-center"
        >
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h1>

        {/* Combined Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
        >
          {/* Who I Am */}
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Who I Am
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hello! I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Talha Bin Zubair
            </span>
            , a passionate developer focused on building fast, scalable, and
            visually stunning web applications. I blend logic with creativity
            to deliver meaningful digital experiences.
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent my-6" />

          {/* What I Do */}
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            What I Do
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I specialize in the{" "}
            <span className="text-cyan-400 font-semibold">
              MERN stack
            </span>{" "}
            and love turning real-world problems into practical, interactive
            web applications. Every project I build strengthens my journey
            toward becoming a world-class full-stack developer.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <motion.a
            href="#Goal"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6,182,212,0.4)",
            }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-500/30 transition-all"
          >
            Discover My Goals →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutMe;
