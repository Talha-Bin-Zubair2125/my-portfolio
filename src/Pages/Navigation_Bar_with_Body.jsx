import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProfileImage from "../Images/Profile Image.png";

// ── Typing Effect ────────────────────────────────────────────────────────────
function useTypingEffect(
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1800,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

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

// ── Particles ────────────────────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#a855f7" : "#6366f1",
  }));
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            borderRadius: "50%",
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

// ── Grid ─────────────────────────────────────────────────────────────────────
function GridLines() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: 0.08,
      }}
    >
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

// ── Main ─────────────────────────────────────────────────────────────────────
export default function NavigationAndHero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const typedText = useTypingEffect([
    "MERN Stack Developer",
    "AI/ML Enthusiast",
    "Building Scalable AI-Powered Web Apps",
    "Problem Solver",
  ]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
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

  // Theme
  const PINK = "#ec4899";
  const PURPLE = "#a855f7";
  const INDIGO = "#6366f1";
  const GRAD = `linear-gradient(135deg,${PINK},${PURPLE},${INDIGO})`;
  const GRAD_T = `linear-gradient(135deg,${PINK}22,${PURPLE}22,${INDIGO}22)`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .neon-cursor::after {
          content: '|';
          color: #ec4899;
          animation: blink 0.75s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .img-ring {
          background: linear-gradient(135deg,#ec4899,#a855f7,#6366f1);
          border-radius: 50%;
          padding: 3px;
          display: inline-block;
          flex-shrink: 0;
        }
        .img-inner {
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #140820;
        }

        /* ── Hero two-column layout ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 20px 60px;
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            padding: 0 48px;
            min-height: 100vh;
          }
        }

        /* ── Image column: center on mobile, push right on desktop ── */
        .hero-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
          order: -1; /* image on top on mobile */
        }
        @media (min-width: 900px) {
          .hero-image-col { order: 0; }
        }

        /* ── Image sizing ── */
        .profile-wrap {
          position: relative;
          display: inline-block;
        }
        .profile-size {
          width: clamp(180px, 45vw, 280px);
          height: clamp(180px, 45vw, 280px);
        }

        /* ── Floating badges – hide on very small screens ── */
        .badge-bottom { display: none; }
        .badge-top    { display: none; }
        @media (min-width: 480px) {
          .badge-bottom { display: block; }
          .badge-top    { display: flex; }
        }

        /* ── Nav items – smaller on tablet ── */
        .nav-link { font-size: 13px; }
        @media (max-width: 1100px) {
          .nav-link { font-size: 11px; }
        }

        /* ── Stats row ── */
        .stats-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .stat-box {
          flex: 1 1 80px;
          min-width: 0;
          text-align: center;
        }

        /* ── CTA buttons ── */
        .cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta-btn {
          flex: 1 1 140px;
          text-align: center;
          min-width: 0;
        }

        /* ── Typing text ── */
        .typing-text {
          font-size: clamp(14px, 3.5vw, 22px);
          word-break: break-word;
          min-height: 1.4em;
        }

        /* ── Heading ── */
        .hero-heading {
          font-size: clamp(28px, 6vw, 58px);
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0;
          word-break: break-word;
        }
      `}</style>

      {/* ══ NAVBAR ══ */}
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
          transition: "background 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(8,6,18,0.94)" : "transparent",
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
            padding: "14px 20px",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ position: "relative", flexShrink: 0 }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 900,
                fontSize: "clamp(22px,4vw,28px)",
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
            className="hidden md:flex"
            style={{
              gap: "clamp(14px,2vw,28px)",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "nowrap",
            }}
          >
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                style={{ position: "relative", flexShrink: 0 }}
              >
                <a
                  href={`#${item}`}
                  className="nav-link"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 500,
                    color: "#d1d5db",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
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
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 24,
              color: PINK,
              padding: "4px 8px",
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(8,6,18,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "12px 20px 20px",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
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

      {/* ══ HERO ══ */}
      <div
        id="Home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* BG */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 90% 80% at 50% 50%, #130820 0%, #080c14 70%)`,
          }}
        />

        {/* Orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "min(500px,50vw)",
            height: "min(500px,50vw)",
            background: `radial-gradient(circle,${PINK}22 0%,transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "min(450px,45vw)",
            height: "min(450px,45vw)",
            background: `radial-gradient(circle,${PURPLE}20 0%,transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "40%",
            left: "45%",
            width: "min(300px,30vw)",
            height: "min(300px,30vw)",
            background: `radial-gradient(circle,${INDIGO}18 0%,transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <GridLines />
        <Particles />

        {/* Content */}
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="hero-grid">
            {/* ── LEFT: Image ── */}
            <div className="hero-image-col">
              <div className="profile-wrap">
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: -10,
                    borderRadius: "50%",
                    border: `2px dashed ${PINK}55`,
                    pointerEvents: "none",
                  }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: -22,
                    borderRadius: "50%",
                    border: `2px dashed ${PURPLE}33`,
                    pointerEvents: "none",
                  }}
                />

                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: -6,
                    background: `radial-gradient(circle,${PINK}40 0%,${PURPLE}20 50%,transparent 70%)`,
                    borderRadius: "50%",
                    filter: "blur(20px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Photo */}
                <div className="img-ring">
                  <div className="img-inner profile-size">
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
                        e.target.parentNode.innerHTML = `<span style="font-family:'Playfair Display',serif;font-size:72px;font-weight:900;background:linear-gradient(135deg,#ec4899,#a855f7,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent">T</span>`;
                      }}
                    />
                  </div>
                </div>

                {/* Badge: MERN */}
                <motion.div
                  className="badge-bottom"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    bottom: -8,
                    right: "clamp(-8px,-3vw,-16px)",
                    background: "rgba(20,8,40,0.95)",
                    border: `1px solid ${PINK}55`,
                    borderRadius: 10,
                    padding: "7px 12px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 10,
                      color: PINK,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    MERN STACK
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 9,
                      color: "#d1d5db",
                      marginTop: 2,
                    }}
                  >
                    Full Stack Developer
                  </div>
                </motion.div>

                {/* Badge: Available */}
                <motion.div
                  className="badge-top"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{
                    position: "absolute",
                    top: -8,
                    left: "clamp(-8px,-3vw,-16px)",
                    background: "rgba(20,8,40,0.95)",
                    border: `1px solid ${PURPLE}55`,
                    borderRadius: 10,
                    padding: "7px 12px",
                    backdropFilter: "blur(10px)",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#4ade80",
                      boxShadow: "0 0 6px #4ade80",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 10,
                      color: "#d1d5db",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Available for work
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ── RIGHT: Text ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div
                  style={{
                    width: 28,
                    height: 1.5,
                    background: GRAD,
                    borderRadius: 1,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "clamp(9px,1.5vw,11px)",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    color: PINK,
                    textTransform: "uppercase",
                  }}
                >
                  Welcome to my portfolio
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: 900,
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

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div
                  style={{
                    width: 4,
                    height: 26,
                    background: GRAD,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="neon-cursor typing-text"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 600,
                    color: "#e879f9",
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
                  fontFamily: "'DM Sans',sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(13px,1.6vw,16px)",
                  color: "#9ca3af",
                  lineHeight: 1.8,
                  margin: 0,
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

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="stats-row"
              >
                {[
                  { value: "2+", label: "Internships" },
                  { value: "10+", label: "Projects" },
                  { value: "3.20", label: "CGPA" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="stat-box"
                    style={{
                      background: GRAD_T,
                      border: `1px solid ${PINK}30`,
                      borderRadius: 10,
                      padding: "10px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontWeight: 900,
                        fontSize: "clamp(18px,3vw,22px)",
                        background: GRAD,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "clamp(9px,1.2vw,11px)",
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
                className="cta-row"
              >
                <motion.a
                  href="#Projects"
                  className="cta-btn"
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${PINK}60` }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: GRAD,
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: 50,
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(13px,1.5vw,15px)",
                    textDecoration: "none",
                    display: "block",
                    boxShadow: `0 4px 24px ${PINK}40`,
                  }}
                >
                  View My Work →
                </motion.a>
                <motion.a
                  href="#Contact"
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                    border: `2px solid ${PINK}66`,
                    color: PINK,
                    padding: "12px 24px",
                    borderRadius: 50,
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(13px,1.5vw,15px)",
                    textDecoration: "none",
                    display: "block",
                    transition: "all 0.2s",
                  }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden md:flex"
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 9,
              color: "#6b7280",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 28,
              background: `linear-gradient(to bottom,${PINK},transparent)`,
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
