import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProfileImage from "../Images/Profile Image.png";

// ── Typing Effect Hook ──────────────────────────────────────────────────────
function useTypingEffect(
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1800,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseTime);
      }
    } else if (phase === "pausing") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deletingSpeed,
        );
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [
    displayed,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayed;
}

// ── Floating Particles ──────────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#a855f7" : "#6366f1",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── Grid Lines ──────────────────────────────────────────────────────────────
function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#ec4899"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function NavigationAndHero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const typedText = useTypingEffect([
    "MERN Stack Developer",
    "AI/ML Enthusiast",
    "Building Scalable AI-Powered Web Applications",
    "Problem Solver",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Goal",
    "Projects",
    "Skills",
    "Certifications",
    "Experience",
    "Contact",
  ];

  // ── theme tokens ───────────────────────────────────────────────────────────
  const BG = "#080c14"; // near-black base
  const CARD_BG = "rgba(20,8,32,0.85)";
  const PINK = "#ec4899";
  const PURPLE = "#a855f7";
  const INDIGO = "#6366f1";
  const GRAD = `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`;
  const GRAD_T = `linear-gradient(135deg, ${PINK}22, ${PURPLE}22, ${INDIGO}22)`;

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .neon-cursor::after {
          content: '|';
          color: #ec4899;
          animation: blink 0.75s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .img-ring {
          background: linear-gradient(135deg, #ec4899, #a855f7, #6366f1);
          border-radius: 50%;
          padding: 3px;
          display: inline-block;
        }
        .img-inner {
          border-radius: 50%;
          overflow: hidden;
          display: block;
          background: #140820;
        }
      `}</style>

      {/* ══════════════════ NAVBAR ══════════════════ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transition: "all 0.3s",
          background: scrolled ? "rgba(8,6,18,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? `0 1px 40px ${PINK}18` : "none",
          borderBottom: scrolled ? `1px solid ${PINK}22` : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ position: "relative" }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 28,
                margin: 0,
                background: GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TALHA
              <span style={{ color: PINK, WebkitTextFillColor: PINK }}>.</span>
            </h1>
            <motion.div
              style={{
                position: "absolute",
                bottom: -3,
                left: 0,
                height: 2,
                background: GRAD,
                borderRadius: 2,
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Desktop links */}
          <ul
            style={{
              display: "flex",
              gap: 28,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                style={{ position: "relative" }}
              >
                <a
                  href={`#${item}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#d1d5db",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = PINK)}
                  onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                >
                  {item}
                </a>
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    height: 1.5,
                    background: GRAD,
                    borderRadius: 1,
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 24,
              color: PINK,
            }}
            className="md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            style={{
              background: "rgba(8,6,18,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "16px 24px",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#d1d5db",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <div
        id="Home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
        className="py-20 lg:py-0"
      >
        {/* ── Background ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 90% 80% at 50% 50%, #130820 0%, ${BG} 70%)`,
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 500,
            height: 500,
            background: `radial-gradient(circle, ${PINK}22 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 450,
            height: 450,
            background: `radial-gradient(circle, ${PURPLE}20 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "40%",
            left: "45%",
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${INDIGO}18 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />

        <GridLines />
        <Particles />

        {/* ── Content Row ── */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12"
        >
          {/* Changed this div to completely rely on Tailwind classes for grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center pt-24 lg:pt-0">
            {/* ── LEFT — Image ── */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: -12,
                    borderRadius: "50%",
                    border: `2px dashed ${PINK}55`,
                  }}
                />
                {/* Second ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: -24,
                    borderRadius: "50%",
                    border: `2px dashed ${PURPLE}33`,
                  }}
                />
                {/* Glow behind image */}
                <div
                  style={{
                    position: "absolute",
                    inset: -6,
                    background: `radial-gradient(circle, ${PINK}40 0%, ${PURPLE}20 50%, transparent 70%)`,
                    borderRadius: "50%",
                    filter: "blur(20px)",
                  }}
                />

                {/* Image ring - made width responsive */}
                <div className="img-ring">
                  <div
                    className="img-inner"
                    style={{
                      width: "clamp(220px, 60vw, 280px)",
                      height: "clamp(220px, 60vw, 280px)",
                    }}
                  >
                    <img
                      src={ProfileImage}
                      alt="Talha Bin Zubair"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.style.display = "flex";
                        e.target.parentNode.style.alignItems = "center";
                        e.target.parentNode.style.justifyContent = "center";
                        e.target.parentNode.style.background = `linear-gradient(135deg, #1e0b2e, #0e0618)`;
                        e.target.parentNode.innerHTML = `<span style="font-family:'Playfair Display',serif;font-size:72px;font-weight:900;background:linear-gradient(135deg,#ec4899,#a855f7,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent">T</span>`;
                      }}
                    />
                  </div>
                </div>

                {/* Floating badge — experience */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    bottom: -10,
                    right: -20,
                    background: "rgba(20,8,40,0.95)",
                    border: `1px solid ${PINK}55`,
                    borderRadius: 12,
                    padding: "8px 14px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: PINK,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    MERN STACK
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      color: "#d1d5db",
                      marginTop: 2,
                    }}
                  >
                    Full Stack Developer
                  </div>
                </motion.div>

                {/* Floating badge — available */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{
                    position: "absolute",
                    top: -10,
                    left: -20,
                    background: "rgba(20,8,40,0.95)",
                    border: `1px solid ${PURPLE}55`,
                    borderRadius: 12,
                    padding: "8px 14px",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#4ade80",
                      boxShadow: "0 0 6px #4ade80",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "#d1d5db",
                    }}
                  >
                    Available for work
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ── RIGHT — Introduction ── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 32,
                    height: 1.5,
                    background: GRAD,
                    borderRadius: 1,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    color: PINK,
                    textTransform: "uppercase",
                  }}
                >
                  Welcome to my portfolio
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  margin: 0,
                  fontSize: "clamp(32px, 8vw, 58px)", // Updated vw for better mobile scaling
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                <span style={{ color: "#f9fafb" }}>Hi, I'm </span>
                <span
                  style={{
                    background: GRAD,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Talha Bin Zubair
                </span>
              </motion.h1>

              {/* Typing line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div
                  style={{
                    width: 4,
                    height: 28,
                    background: GRAD,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="neon-cursor"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 4vw, 22px)", // Increased vw
                    color: "#e879f9",
                    minHeight: "1.4em",
                  }}
                >
                  {typedText}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.6vw, 17px)",
                  color: "#9ca3af",
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: 460,
                }}
              >
                A passionate full-stack developer specializing in the{" "}
                <span style={{ color: PINK, fontWeight: 500 }}>MERN stack</span>
                , building fast, scalable, and visually stunning web
                applications. A recent{" "}
                <span style={{ color: PURPLE, fontWeight: 500 }}>NUML</span>{" "}
                graduate with a CGPA of{" "}
                <span style={{ color: INDIGO, fontWeight: 600 }}>
                  3.20 / 4.00
                </span>
                .
              </motion.p>

              {/* Stats row - Added flexWrap so it doesn't break on narrow devices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
              >
                {[
                  { value: "2+", label: "Internships" },
                  { value: "10+", label: "Projects" },
                  { value: "3.20", label: "CGPA" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: GRAD_T,
                      border: `1px solid ${PINK}30`,
                      borderRadius: 12,
                      padding: "10px 18px",
                      textAlign: "center",
                      flex: "1 1 auto", // Let items grow to fill space on mobile
                      minWidth: "100px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 900,
                        fontSize: 22,
                        background: GRAD,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "#9ca3af",
                        marginTop: 2,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <motion.a
                  href="#Projects"
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${PINK}60` }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: GRAD,
                    color: "#fff",
                    padding: "13px 30px",
                    borderRadius: 50,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: `0 4px 24px ${PINK}40`,
                    textAlign: "center",
                    flex: "1 1 auto",
                  }}
                >
                  View My Work →
                </motion.a>
                <motion.a
                  href="#Contact"
                  whileHover={{ scale: 1.05, borderColor: PURPLE }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                    border: `2px solid ${PINK}66`,
                    color: PINK,
                    padding: "13px 30px",
                    borderRadius: 50,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "all 0.2s",
                    textAlign: "center",
                    flex: "1 1 auto",
                  }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - Hidden on mobile if space is too tight */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden md:flex"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              color: "#9ca3af",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: 1,
              height: 30,
              background: `linear-gradient(to bottom, ${PINK}, transparent)`,
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
