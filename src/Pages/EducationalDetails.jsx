import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";
const GRAD = `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`;
const BG =
  "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)";

function EducationalDetails() {
  const items = [
    {
      title: "National University of Modern Languages",
      abbr: "NUML",
      subtitle: "BSc — Computer Science",
      details: (
        <>
          <p style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>
            <span style={{ color: PINK, fontWeight: 600 }}>Graduated:</span>{" "}
            2026
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>
            <span style={{ color: PINK, fontWeight: 600 }}>CGPA:</span> 3.12 /
            4.00
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "#9ca3af",
              lineHeight: 1.7,
            }}
          >
            Focus on Full Stack Development (MERN), Data Structures, and
            Software Engineering principles. Built several practical web
            applications as part of coursework and personal projects.
          </p>
        </>
      ),
      icon: <FaUniversity size={34} />,
      accent: PINK,
      glowColor: PINK,
      borderGrad: `linear-gradient(135deg, ${PINK}, ${PURPLE})`,
      year: "2022 – 2026",
    },
    {
      title: "KIPS College",
      abbr: null,
      subtitle: "Intermediate (ICS)",
      details: (
        <>
          <p style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>
            <span style={{ color: PURPLE, fontWeight: 600 }}>Marks:</span> 910 /
            1100
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "#9ca3af",
              lineHeight: 1.7,
            }}
          >
            Developed strong fundamentals in computing and mathematics, building
            a solid base for software and web development.
          </p>
        </>
      ),
      icon: <FaGraduationCap size={34} />,
      accent: PURPLE,
      glowColor: PURPLE,
      borderGrad: `linear-gradient(135deg, ${PURPLE}, ${INDIGO})`,
      year: "2019 – 2021",
    },
    {
      title: "Sir Syed Public School",
      abbr: null,
      subtitle: "Matriculation (Pre-Medical)",
      details: (
        <>
          <p style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>
            <span style={{ color: INDIGO, fontWeight: 600 }}>Marks:</span> 810 /
            1100
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "#9ca3af",
              lineHeight: 1.7,
            }}
          >
            Early academic background in sciences which later transitioned into
            technology and programming interests.
          </p>
        </>
      ),
      icon: <FaSchool size={34} />,
      accent: INDIGO,
      glowColor: INDIGO,
      borderGrad: `linear-gradient(135deg, ${INDIGO}, ${PINK})`,
      year: "2017 – 2019",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes neonFlicker2 {
          0%, 100% { filter: drop-shadow(0 0 18px ${PURPLE}55) drop-shadow(0 0 34px ${PINK}33); }
          50% { filter: drop-shadow(0 0 8px ${PURPLE}30) drop-shadow(0 0 16px ${PINK}22); }
        }
        @keyframes iconPulseGlow {
          0%, 100% { box-shadow: 0 8px 24px rgba(168,85,247,0.35); }
          50% { box-shadow: 0 8px 36px rgba(236,72,153,0.55); }
        }
      `}</style>

      <section
        id="EducationalDetails"
        style={{
          minHeight: "100vh",
          background: BG,
          color: "#fff",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "5%",
            right: "8%",
            width: 360,
            height: 360,
            background: `radial-gradient(circle, ${PURPLE}18 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${PINK}15 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 64,
            maxWidth: 960,
            margin: "0 auto 64px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span style={{ width: 40, height: 1, background: GRAD }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: PINK,
              }}
            >
              Academic Background
            </span>
            <span style={{ width: 40, height: 1, background: GRAD }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              background: GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "neonFlicker2 4.5s ease-in-out infinite",
            }}
          >
            Educational Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              marginTop: 12,
              minHeight: 20,
            }}
          >
            <TypingText
              phrases={[
                "A solid academic foundation powering my career.",
                "From matriculation to a BSc in Computer Science.",
              ]}
              color="rgba(255,255,255,0.45)"
              cursorColor={PURPLE}
            />
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {items.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ position: "relative" }}
            >
              {/* Glow blob */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 30%, ${item.glowColor}22, transparent 65%)`,
                  borderRadius: 16,
                  filter: "blur(24px)",
                  pointerEvents: "none",
                }}
              />

              {/* Card */}
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  borderRadius: 16,
                  border: `1px solid rgba(236,72,153,0.15)`,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(16px)",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${item.accent}55`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(236,72,153,0.15)")
                }
              >
                {/* Top shimmer line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${item.accent}99, transparent)`,
                  }}
                />

                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: `linear-gradient(135deg, ${item.accent}, ${INDIGO})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    animation: "iconPulseGlow 3s ease-in-out infinite",
                  }}
                >
                  <div style={{ color: "#fff" }}>{item.icon}</div>
                </motion.div>

                {/* Year badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#fff",
                      background: `linear-gradient(135deg, ${item.accent}, ${INDIGO})`,
                      borderRadius: 50,
                      padding: "5px 18px",
                      boxShadow: `0 4px 12px ${item.accent}40`,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: 32,
                    height: 2,
                    borderRadius: 2,
                    margin: "0 auto 16px",
                    background: `linear-gradient(90deg, ${item.accent}, ${INDIGO})`,
                  }}
                />

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f9fafb",
                    textAlign: "center",
                    marginBottom: 6,
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: item.accent,
                    textAlign: "center",
                    marginBottom: 20,
                    textTransform: "uppercase",
                  }}
                >
                  {item.subtitle}
                </p>

                {/* Details */}
                <div style={{ flex: 1 }}>{item.details}</div>

                {/* Bottom accent bar */}
                <motion.div
                  style={{
                    height: 1.5,
                    marginTop: 24,
                    borderRadius: 2,
                    background: `linear-gradient(90deg, ${item.accent}, ${INDIGO})`,
                  }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ marginTop: 64, textAlign: "center" }}
        >
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${PINK}55` }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              background: GRAD,
              color: "#fff",
              padding: "14px 40px",
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: `0 4px 24px ${PINK}40`,
            }}
          >
            Get In Touch →
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default EducationalDetails;
