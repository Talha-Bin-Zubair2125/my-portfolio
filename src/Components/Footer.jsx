import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaFileDownload,
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-black via-[#0a2b30] to-black text-white py-14 px-6 border-t border-cyan-900"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        {/* Brand Section */}
        <motion.div whileHover={{ scale: 1.05 }} className="space-y-3">
          <h2 className="text-3xl font-bold text-cyan-400">Code With Talha</h2>
          <p className="text-gray-400 max-w-sm">
            Passionate about creating dynamic, user-focused web solutions.
            Let’s connect and build something amazing together!
          </p>
        </motion.div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Connect With Me
          </h3>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Talha-Bin-Zubair2125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
            <FaEnvelope className="text-cyan-400 text-lg" /> talhazubair2125@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
            <FaPhoneAlt className="text-green-400 text-lg" /> +92-3340979437
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://drive.google.com/file/d/1NvWc4Dt489axT6k5Qh7ClmnUCjd_dAnc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition font-medium"
          >
            <FaFileDownload /> Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Footer bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-gray-500 mt-10 text-sm tracking-wide"
      >
        © 2025 Developed by{" "}
        <span className="text-cyan-400 font-semibold">Talha Bin Zubair</span>.
        All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;
