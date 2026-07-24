import React from "react";
import { motion } from "framer-motion";
import ArchTechLogo from "../Images/Arch Technologies Logo.jpg";
import CodeCelixLogo from "../Images/CodeCelix Logo.webp";
import PNYLogo from "../Images/PNY Logo.webp";
import CodeCelixCertificate from "../Images/CodeCelix Internship Certificate.jpg";
import ArchTechCertificate from "../Images/Arch Technologies Internship Certificate.jpg";
import PFTPLogo from "../Images/PFTP Logo.webp";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";

function Certifications() {
  const certifications = [
    {
      type: "Course Certificate",
      title: "Front-End Web Development",
      organization: "Professional Freelancing Training Program",
      link: "https://drive.google.com/file/d/1wRoW94JHR9XDa1H-WnvGDdTXQwY1WtwI/view?usp=sharing",
      image: PFTPLogo,
      color: "from-pink-500 to-fuchsia-600",
      num: "01",
    },
    {
      type: "Course Certificate",
      title: "Full Stack Web Development",
      organization: "PNY Trainings",
      link: "https://drive.google.com/file/d/1fNjaWjqYJJaptd1TJTNLLqJsDEU93Eyb/view?usp=sharing",
      image: PNYLogo,
      color: "from-fuchsia-500 to-purple-600",
      num: "02",
    },
    {
      type: "Internship Certificate",
      title: "Full Stack Web Development",
      organization: "Arch Technologies",
      link: ArchTechCertificate,
      image: ArchTechLogo,
      color: "from-purple-500 to-indigo-600",
      num: "03",
    },
    {
      type: "Internship Certificate",
      title: "Full Stack Web Development",
      organization: "CodeCelix",
      link: CodeCelixCertificate,
      image: CodeCelixLogo,
      color: "from-indigo-500 to-pink-600",
      num: "04",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes neonFlickerC {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 30px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 14px ${PURPLE}22); }
        }
      `}</style>
      <section
        id="Certifications"
        className="min-h-screen text-white py-20 px-6"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-pink-400" />
            <span
              className="text-pink-400"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Credentials &amp; Achievements
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-pink-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 7vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              background: `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "neonFlickerC 4s ease-in-out infinite",
            }}
          >
            Certifications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-white/40"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.01em",
              minHeight: 20,
            }}
          >
            <TypingText
              phrases={[
                "Verified skills from industry-recognized programs.",
                "Backed by real internships & training.",
              ]}
              color="rgba(255,255,255,0.4)"
              cursorColor={PINK}
            />
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 rounded-2xl blur-2xl transition-opacity duration-500`}
              />
              <div
                className="relative flex flex-col items-center h-full rounded-2xl border border-pink-500/10 group-hover:border-pink-400/40 transition-all duration-300 p-7 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className="absolute top-4 right-4 text-pink-400/30"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                  }}
                >
                  {cert.num}
                </span>
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  className="flex items-center justify-center mb-5 rounded-2xl"
                  style={{
                    width: 72,
                    height: 72,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.organization} logo`}
                    style={{ width: 50, height: 50, objectFit: "contain" }}
                  />
                </motion.div>
                <div
                  className="mb-4 rounded-full"
                  style={{
                    width: 32,
                    height: 2,
                    background: `linear-gradient(90deg, ${PINK}, ${PURPLE})`,
                  }}
                />
                <p
                  className="text-pink-400 text-center mb-2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.type}
                </p>
                <h2
                  className="text-white text-center mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h2>
                <p
                  className="text-center mb-5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.32)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {cert.organization}
                </p>
                <div
                  className="flex items-center gap-2 mb-5 rounded-full border border-pink-500/20"
                  style={{
                    background: "rgba(236,72,153,0.08)",
                    padding: "5px 14px",
                  }}
                >
                  <span
                    className="rounded-full bg-pink-400"
                    style={{
                      width: 6,
                      height: 6,
                      animation: "pulseDot 2s infinite",
                    }}
                  />
                  <span
                    className="text-pink-300"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    Completed
                  </span>
                </div>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block w-full text-center text-white rounded-xl shadow-lg bg-gradient-to-r ${cert.color} transition-all`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    padding: "10px 0",
                  }}
                >
                  View Certificate →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Certifications;
