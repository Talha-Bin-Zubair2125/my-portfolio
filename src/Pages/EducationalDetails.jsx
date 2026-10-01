import React from "react";
import { motion } from "framer-motion";
import sspsLogo from "../Images/ssps.png";
import kipsLogo from "../Images/kips-college-Logo.png";
import numlLogo from "../Images/NUML_LOGO_removebg_preview.png";

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
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14,
            color: "#9ca3af",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: PINK, fontWeight: 700 }}>Graduated:</span> 2026
          | <span style={{ color: PINK, fontWeight: 700 }}>CGPA:</span> 3.20 /
          4.00 | Focus on Full Stack Development (MERN), Data Structures, and
          Software Engineering principles.
        </p>
      ),
      accent: PINK,
      year: "2022 – 2026",
      logo: numlLogo,
      logoPlaceholder: "NUML Logo", 
    },
    {
      title: "KIPS College",
      abbr: null,
      subtitle: "Intermediate (ICS)",
      details: (
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14,
            color: "#9ca3af",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: PURPLE, fontWeight: 700 }}>Marks:</span> 910 /
          1100 | Developed strong fundamentals in computing, mathematics, and
          software development.
        </p>
      ),
      accent: PURPLE,
      year: "2019 – 2021",
      logo: kipsLogo,
      logoPlaceholder: "KIPS Logo", // Replace or use this space for your <img src="..." alt="..." />
    },
    {
      title: "Sir Syed Public School",
      abbr: null,
      subtitle: "Matriculation (Pre-Medical)",
      details: (
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14,
            color: "#9ca3af",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: INDIGO, fontWeight: 700 }}>Marks:</span> 810 /
          1100 | Early academic foundation in sciences transitioning into
          technology and programming interests.
        </p>
      ),
      accent: INDIGO,
      year: "2017 – 2019",
      logo: sspsLogo,
      logoPlaceholder: "School Logo", // Replace or use this space for your <img src="..." alt="..." />
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        @keyframes neonFlicker2 {
          0%, 100% { filter: drop-shadow(0 0 18px ${PURPLE}55) drop-shadow(0 0 34px ${PINK}33); }
          50% { filter: drop-shadow(0 0 8px ${PURPLE}30) drop-shadow(0 0 16px ${PINK}22); }
        }
        @keyframes logoPulseGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(168,85,247,0.25); }
          50% { box-shadow: 0 4px 30px rgba(236,72,153,0.45); }
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
            willChange: "transform",
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
            willChange: "transform",
          }}
        />

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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              marginTop: 12,
              minHeight: 20,
            }}
          >
            A solid academic foundation powering my career from matriculation to
            a BSc in Computer Science.
          </motion.p>
        </div>

        <div
          style={{
            maxWidth: 850,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {items.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 30% 50%, ${item.accent}22, transparent 70%)`,
                  borderRadius: 16,
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  borderRadius: 16,
                  border: `1px solid rgba(236,72,153,0.15)`,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(16px)",
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  flexWrap: "wrap",
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

                {/* Logo Container / Space */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 14,
                    background: "rgba(255, 255, 255, 0.03)",
                    border: `1px dashed ${item.accent}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                    animation: "logoPulseGlow 3s ease-in-out infinite",
                    willChange: "transform",
                  }}
                >
                  {/* Replace this inner element with your <img src="logo-url.png" alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> */}
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.4)",
                      textAlign: "center",
                      padding: 4,
                    }}
                  >
                    {item.logoPlaceholder}
                  </span>
                </motion.div>

                <div style={{ flex: 1, minWidth: "260px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 4,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#f9fafb",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#fff",
                        background: `linear-gradient(135deg, ${item.accent}, ${INDIGO})`,
                        borderRadius: 50,
                        padding: "4px 14px",
                        boxShadow: `0 4px 12px ${item.accent}40`,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: item.accent,
                      margin: "0 0 8px 0",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.subtitle}
                  </p>

                  {item.details}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
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
