import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function NavigationAndHero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Goal", "Projects", "Skills", "Certifications", "Experience", "Contact"];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {/* Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#060d06]/90 backdrop-blur-xl shadow-2xl shadow-emerald-500/10" : "bg-transparent"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 900 }}>
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">TALHA</span>
              <span className="text-emerald-400">.</span>
            </h1>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.li key={item} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} whileHover={{ y: -2 }} className="relative group">
                <a href={`#${item}`} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500 }}>
                  {item}
                </a>
                <motion.div className="absolute -bottom-1 left-0 h-0.5 bg-emerald-400" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} />
              </motion.li>
            ))}
          </ul>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-emerald-400 text-2xl">☰</button>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden bg-[#060d06]/95 backdrop-blur-xl">
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 500 }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero */}
      <div id="Home" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #0d2d0d 0%, #060d06 70%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.10),transparent_55%)]" />
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 px-4">
          {/* Avatar */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, type: "spring" }} className="mb-8">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 900, color: "#fff" }}>T</span>
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              MERN Stack Developer
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-400" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 7vw, 76px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
            className="text-white"
          >
            Hi, I'm{" "}
            <span style={{
              background: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 45%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Talha Bin Zubair
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-gray-300 mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 300, lineHeight: 1.6 }}
          >
            Crafting modern, responsive web experiences with a passion for clean code and beautiful design.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 justify-center flex-wrap">
            <motion.a href="#Projects" whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }} whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full shadow-lg shadow-emerald-500/40 transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "16px" }}>
              View My Work →
            </motion.a>
            <motion.a href="#Contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-emerald-400/60 text-emerald-400 px-8 py-4 rounded-full hover:bg-emerald-400/10 transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "16px" }}>
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default NavigationAndHero;