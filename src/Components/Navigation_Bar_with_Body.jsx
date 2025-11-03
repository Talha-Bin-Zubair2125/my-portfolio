import React from "react";
import { motion } from "framer-motion";

function Navigation_Bar_with_Body() {
  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-2xl md:text-3xl font-bold tracking-wide text-cyan-400"
          >
            TALHA.
          </motion.h1>
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {[
              "Home",
              "About",
              "Goal",
              "Projects",
              "Skills",
              "Certifications",
              "Contact",
            ].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#22d3ee" }}
                className="cursor-pointer transition duration-300 hover:text-cyan-400"
              >
                <a href={`#${item}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Body */}
      <div
        id="Home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-cyan-400">Talha Bin Zubair</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-300"
        >
          A passionate{" "}
          <span className="text-cyan-400">MERN Stack Developer</span> crafting
          modern, responsive web experiences.
        </motion.p>

        <motion.a
          href="#Projects"
          whileHover={{ scale: 1.1 }}
          className="mt-8 bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition"
        >
          View My Work
        </motion.a>
      </div>
    </>
  );
}

export default Navigation_Bar_with_Body;
