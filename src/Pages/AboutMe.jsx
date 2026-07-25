import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";
const GRAD = `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`;
const BG =
  "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)";

function AboutMe() {
  const cards = [
    {
      label: "Who I Am",
      title: "The Person Behind the Code",
      accent: PINK,
      borderHover: `${PINK}55`,
      glowFrom: PINK,
      content: (
        <>
          Hello! I'm{" "}
          <span style={{ color: PINK, fontWeight: 600 }}>Talha Bin Zubair</span>
          , a passionate developer focused on building fast, scalable, and
          visually stunning web applications. I blend logic with creativity to
          deliver meaningful digital experiences.
        </>
      ),
    },
    {
      label: "What I Do",
      title: "Crafting Modern Web Experiences",
      accent: PURPLE,
      borderHover: `${PURPLE}55`,
      glowFrom: PURPLE,
      content: (
        <>
          I specialize in the{" "}
          <span style={{ color: PURPLE, fontWeight: 600 }}>MERN stack</span> and
          love turning real-world problems into practical, interactive web apps.
          Every line of code moves me closer to becoming a world-class
          full-stack engineer.
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes neonFlicker {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 34px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 16px ${PURPLE}22); }
        }
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(20px); opacity: 0; }
        }
      `}</style>

      <section
        id="About"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: BG,
          color: "#fff",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${PINK}18 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 350,
            height: 350,
            background: `radial-gradient(circle, ${INDIGO}18 0%, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        {/* Floating ambient particles */}
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${8 + i * 9}%`,
              bottom: "-10px",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: i % 2 === 0 ? PINK : PURPLE,
              boxShadow: `0 0 8px 2px ${i % 2 === 0 ? PINK : PURPLE}`,
              animation: `floatParticle ${8 + (i % 5)}s ease-in infinite`,
              animationDelay: `${i * 0.9}s`,
              pointerEvents: "none",
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 960,
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/*  Header  */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
                Get To Know Me
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
                animation: "neonFlicker 4s ease-in-out infinite",
              }}
            >
              About Me
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
                color: "rgba(255,255,255,0.5)",
                marginTop: 12,
                minHeight: 20,
              }}
            >
              <TypingText
                phrases={[
                  "Passionate developer.",
                  "Creative thinker.",
                  "Lifelong learner.",
                  "MERN stack builder.",
                ]}
                color="rgba(255,255,255,0.55)"
                cursorColor={PINK}
              />
            </motion.p>
          </div>

          {/*  Cards  */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{ position: "relative" }}
                className="group"
              >
                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 50% 50%, ${card.glowFrom}20, transparent 70%)`,
                    borderRadius: 16,
                    filter: "blur(20px)",
                    opacity: 0,
                    transition: "opacity 0.4s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                />

                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    borderRadius: 16,
                    border: `1px solid rgba(236,72,153,0.15)`,
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(16px)",
                    padding: 32,
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = card.borderHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(236,72,153,0.15)")
                  }
                >
                  {/* Top shimmer */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${card.accent}88, transparent)`,
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                  />

                  {/* Label */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: card.accent,
                      marginBottom: 12,
                    }}
                  >
                    {card.label}
                  </p>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#f9fafb",
                      marginBottom: 14,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Accent bar */}
                  <div
                    style={{
                      width: 32,
                      height: 2,
                      borderRadius: 2,
                      marginBottom: 16,
                      background: `linear-gradient(90deg, ${card.accent}, ${INDIGO})`,
                    }}
                  />

                  {/* Body */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#9ca3af",
                      lineHeight: 1.75,
                    }}
                  >
                    {card.content}
                  </p>

                  {/* Bottom bar */}
                  <motion.div
                    style={{
                      height: 1.5,
                      marginTop: 24,
                      borderRadius: 2,
                      background: GRAD,
                    }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/*  CTA  */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ marginTop: 48, textAlign: "center" }}
          >
            <motion.a
              href="#Goal"
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${PINK}55` }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-block",
                background: GRAD,
                backgroundSize: "200% 200%",
                animation: "gradientShift 6s ease infinite",
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
              Discover My Goals →
            </motion.a>
          </motion.div>
        </motion.div>

        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>
    </>
  );
}

export default AboutMe;
