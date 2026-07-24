import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Code } from "lucide-react";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";
const GRAD = `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`;
const BG =
  "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)";

const goals = [
  {
    icon: <Target size={36} />,
    title: "Career Objective",
    desc: "To become a skilled full-stack developer capable of delivering reliable and impactful digital solutions.",
    accent: PINK,
    iconGrad: `linear-gradient(135deg, ${PINK}, ${PURPLE})`,
    barGrad: `linear-gradient(90deg, ${PINK}, ${PURPLE})`,
  },
  {
    icon: <Rocket size={36} />,
    title: "Vision",
    desc: "To innovate and create user-focused applications that make everyday tasks easier and smarter.",
    accent: PURPLE,
    iconGrad: `linear-gradient(135deg, ${PURPLE}, ${INDIGO})`,
    barGrad: `linear-gradient(90deg, ${PURPLE}, ${INDIGO})`,
  },
  {
    icon: <Code size={36} />,
    title: "Mission",
    desc: "To continuously learn, collaborate, and contribute to the ever-evolving world of web technologies.",
    accent: INDIGO,
    iconGrad: `linear-gradient(135deg, ${INDIGO}, ${PINK})`,
    barGrad: `linear-gradient(90deg, ${INDIGO}, ${PINK})`,
  },
];

export default function Goal() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes neonFlickerG {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 34px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 16px ${PURPLE}22); }
        }
        @keyframes floatParticleG {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-140px) translateX(-16px); opacity: 0; }
        }
        @keyframes iconPulseGlowG {
          0%, 100% { box-shadow: 0 8px 24px rgba(168,85,247,0.35); }
          50% { box-shadow: 0 8px 36px rgba(236,72,153,0.55); }
        }
      `}</style>

      <section
        id="Goal"
        style={{
          minHeight: "100vh",
          background: BG,
          color: "#fff",
          padding: "80px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Orbs ── */}
        {[
          { c: PINK, top: "8%", left: "5%", w: 380, dur: 18 },
          { c: INDIGO, top: "55%", right: "4%", w: 320, dur: 22 },
          { c: PURPLE, top: "40%", left: "40%", w: 260, dur: 14 },
        ].map((o, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{
              duration: o.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              position: "absolute",
              top: o.top,
              left: o.left,
              right: o.right,
              width: o.w,
              height: o.w,
              background: `radial-gradient(circle, ${o.c}20 0%, transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Floating ambient particles */}
        {[...Array(9)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${10 + i * 10}%`,
              bottom: "-10px",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: i % 2 === 0 ? PINK : INDIGO,
              boxShadow: `0 0 8px 2px ${i % 2 === 0 ? PINK : INDIGO}`,
              animation: `floatParticleG ${9 + (i % 5)}s ease-in infinite`,
              animationDelay: `${i * 1.1}s`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: 56,
            maxWidth: 700,
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
            <motion.span
              animate={{ width: ["0px", "40px"] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ height: 1, background: GRAD, display: "block" }}
            />
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
              Purpose &amp; Direction
            </span>
            <motion.span
              animate={{ width: ["0px", "40px"] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ height: 1, background: GRAD, display: "block" }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              background: GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "neonFlickerG 4s ease-in-out infinite",
            }}
          >
            My Goals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                "Driven by passion.",
                "Guided by purpose.",
                "Committed to excellence.",
              ]}
              color="rgba(255,255,255,0.55)"
              cursorColor={PINK}
            />
          </motion.p>
        </motion.div>

        {/* ── Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24,
            maxWidth: 960,
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {goals.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              style={{ position: "relative" }}
            >
              {/* glow */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 30%, ${g.accent}30, transparent 65%)`,
                  borderRadius: 16,
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  borderRadius: 16,
                  border: `1px solid ${g.accent}22`,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(16px)",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${g.accent}66`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${g.accent}22`)
                }
              >
                {/* shimmer */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${g.accent}99, transparent)`,
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: g.iconGrad,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    color: "#fff",
                    animation: "iconPulseGlowG 3s ease-in-out infinite",
                  }}
                >
                  {g.icon}
                </motion.div>

                <div
                  style={{
                    width: 32,
                    height: 2,
                    borderRadius: 2,
                    background: g.barGrad,
                    marginBottom: 16,
                  }}
                />

                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#f9fafb",
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {g.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#9ca3af",
                    lineHeight: 1.75,
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  {g.desc}
                </p>

                <motion.div
                  style={{
                    height: 1.5,
                    marginTop: 24,
                    borderRadius: 2,
                    background: g.barGrad,
                    width: "100%",
                  }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          style={{
            marginTop: 56,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.a
            href="#Projects"
            whileHover={{ scale: 1.07, boxShadow: `0 0 36px ${PINK}66` }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              background: GRAD,
              backgroundSize: "200% 200%",
              animation: "gradientShiftG 6s ease infinite",
              color: "#fff",
              padding: "14px 42px",
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: `0 4px 24px ${PINK}40`,
            }}
          >
            See What I've Built →
          </motion.a>
        </motion.div>

        <style>{`
          @keyframes gradientShiftG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>
    </>
  );
}
