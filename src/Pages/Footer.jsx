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
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Added "Awards" to the quick links array
  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Awards", href: "#Awards" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes footerGlowPulse {
          0%, 100% { text-shadow: 0 0 14px ${PINK}55; }
          50% { text-shadow: 0 0 22px ${PURPLE}66; }
        }
      `}</style>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative text-white py-16 px-6 border-t border-pink-500/20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, #1a0826 0%, #080612 60%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(236,72,153,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(168,85,247,0.06),transparent_50%)]" />

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.h2
                whileHover={{ scale: 1.03 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px",
                  fontWeight: 900,
                  animation: "footerGlowPulse 3.5s ease-in-out infinite",
                }}
              >
                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  Talha.
                </span>
              </motion.h2>
              <p
                className="text-gray-400 leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Passionate about creating dynamic, user-focused web solutions.
                Let's connect and build something amazing together!
              </p>
              <p
                className="text-sm min-h-[20px]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                <TypingText
                  phrases={[
                    "Always shipping something new.",
                    "Open to new opportunities.",
                  ]}
                  color="rgba(255,255,255,0.35)"
                  cursorColor={PINK}
                />
              </p>
              <div className="flex gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.2, y: -4 }}
                  href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/40 transition-all"
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -4 }}
                  href="https://github.com/Talha-Bin-Zubair2125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg hover:shadow-gray-500/40 transition-all border border-white/10"
                >
                  <FaGithub size={18} />
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
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#f472b6",
                  marginBottom: "16px",
                }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="group">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      <span className="w-0 h-px bg-pink-400 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              id="Contact"
              className="space-y-4"
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#f472b6",
                  marginBottom: "16px",
                }}
              >
                Get In Touch
              </h3>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:talhazubair2125@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/40 transition-all flex-shrink-0">
                    <FaEnvelope size={15} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    talhazubair2125@gmail.com
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="tel:+923340979437"
                  className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all flex-shrink-0">
                    <FaPhoneAlt size={15} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    +92-3340979437
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://drive.google.com/file/d/13GPr6EXLDddwn0rJo10GKRaU_hCauT32/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  <FaFileDownload /> Download Resume
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
            className="h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent mb-8"
          />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              © {new Date().getFullYear()} Developed by
              <span
                className="text-pink-400 font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {" "}
                Talha Bin Zubair
              </span>
              . All rights reserved.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-pink-500/50 transition-all"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
