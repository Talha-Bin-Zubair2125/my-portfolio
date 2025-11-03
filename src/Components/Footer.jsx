import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileDownload } from "react-icons/fa";

function Footer() {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-black via-[#0a2b30] to-black text-white py-10 px-6"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">Code With Talha</h2>
            <p className="text-gray-400">Let's connect and build something amazing!</p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Links</h2>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 hover:scale-110 transition text-2xl" />
              </a>
              <a href="https://github.com/Talha-Bin-Zubair2125" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:scale-110 transition text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p className="flex items-center gap-2"><FaEnvelope className="text-cyan-400" /> talhazubair2125@gmail.com</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-400" /> +92-3340979437</p>
            <a
              href="https://drive.google.com/file/d/1T7Yl_HKhVtcHc-tq0D18PFf9VQ1WRYeT/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 hover:text-yellow-400 transition"
            >
              <FaFileDownload className="text-yellow-400" /> Resume
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          © 2025 Developed by Talha Bin Zubair. All rights reserved.
        </p>
      </motion.footer>
    </>
  );
}

export default Footer;
