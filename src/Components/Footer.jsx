import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaFileDownload,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <motion.footer
      id="Footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6 border-t border-cyan-500/20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(6,182,212,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Code With Talha
              </span>
            </motion.h2>
            <p className="text-gray-400 leading-relaxed">
              Passionate about creating dynamic, user-focused web solutions.
              Let's connect and build something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://github.com/Talha-Bin-Zubair2125"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg hover:shadow-gray-500/50 transition-all"
              >
                <FaGithub size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} className="group">
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="Contact" // ✅ Correctly assign ID here
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:talhazubair2125@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <FaEnvelope size={16} />
                </div>
                <span className="text-sm">talhazubair2125@gmail.com</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+923340979437"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                  <FaPhoneAlt size={16} />
                </div>
                <span className="text-sm">+92-3340979437</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://drive.google.com/file/d/1Aj3A8Sj14oew0PrjQSpYmuBm4V6oKYPs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                <FaFileDownload />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center"
          >
            © {new Date().getFullYear()} Developed by{" "}
            <span className="text-cyan-400 font-semibold">
              Talha Bin Zubair
            </span>
            . All rights reserved.
          </motion.p>

          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
