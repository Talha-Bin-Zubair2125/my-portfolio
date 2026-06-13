import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileDownload, FaHeart, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative text-white py-16 px-6 border-t border-emerald-500/20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #0d2d0d 0%, #060d06 60%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(34,197,94,0.05),transparent_50%)]" />

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">

            {/* Brand */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4">
              <motion.h2
                whileHover={{ scale: 1.03 }}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 900 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">
                  Talha.
                </span>
              </motion.h2>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 400 }}>
                Passionate about creating dynamic, user-focused web solutions. Let's connect and build something amazing together!
              </p>
              <div className="flex gap-4 pt-2">
                <motion.a whileHover={{ scale: 1.2, y: -4 }} href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/40 transition-all">
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -4 }} href="https://github.com/Talha-Bin-Zubair2125" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg hover:shadow-gray-500/40 transition-all border border-white/10">
                  <FaGithub size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="space-y-4">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#34d399", marginBottom: "16px" }}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="group">
                    <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
                      <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} id="Contact" className="space-y-4">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#34d399", marginBottom: "16px" }}>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <motion.a whileHover={{ x: 5 }} href="mailto:talhazubair2125@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/40 transition-all flex-shrink-0">
                    <FaEnvelope size={15} />
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>talhazubair2125@gmail.com</span>
                </motion.a>
                <motion.a whileHover={{ x: 5 }} href="tel:+923340979437"
                  className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/40 transition-all flex-shrink-0">
                    <FaPhoneAlt size={15} />
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>+92-3340979437</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://drive.google.com/file/d/1tc68--5OJcIFXdHsZoTryde18J0UdHI_/view?usp=drive_link"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px" }}
                >
                  <FaFileDownload /> Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
              © {new Date().getFullYear()} Developed by 
              <span className="text-emerald-400 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}> Talha Bin Zubair</span>. All rights reserved.
            </motion.p>
            <motion.button whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-emerald-500/50 transition-all">
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;