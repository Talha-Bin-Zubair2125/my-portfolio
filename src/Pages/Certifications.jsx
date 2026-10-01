import React from "react";
import { motion } from "framer-motion";
import ArchTechLogo from "../Images/Arch Technologies Logo.jpg";
import CodeCelixLogo from "../Images/CodeCelix Logo.webp";
import PNYLogo from "../Images/PNY Logo.webp";
import PMYDLogo from "../Images/PMYDP.jpg";
import CodeCelixCertificate from "../Images/CodeCelix Internship Certificate.jpg";
import ArchTechCertificate from "../Images/Arch Technologies Internship Certificate.jpg";
import NavttcCertificate from "../Images/Navttc_Certificate.jpg";
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
      type: "Course Certificate",
      title: "AI & Machine Learning",
      organization: "Prime Minister's Youth Programme - NAVTTC",
      link: NavttcCertificate,
      image: PMYDLogo,
      color: "from-purple-500 to-indigo-600",
      num: "03",
    },
    {
      type: "Internship Certificate",
      title: "Full Stack Web Development",
      organization: "Arch Technologies",
      link: ArchTechCertificate,
      image: ArchTechLogo,
      color: "from-purple-500 to-indigo-600",
      num: "04",
    },
    {
      type: "Internship Certificate",
      title: "Full Stack Web Development",
      organization: "CodeCelix",
      link: CodeCelixCertificate,
      image: CodeCelixLogo,
      color: "from-indigo-500 to-pink-600",
      num: "05",
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
        className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 sm:w-10 h-px bg-gradient-to-r from-transparent to-pink-400" />
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
            <span className="w-8 sm:w-10 h-px bg-gradient-to-l from-transparent to-pink-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
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
            className="mt-3 text-sm text-white/40 px-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.01em",
              minHeight: 24,
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

        {/* Cards Stacked - One per line */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="relative group w-full"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-15 rounded-2xl blur-2xl transition-opacity duration-500`}
              />
              <div
                className="relative flex flex-col sm:flex-row items-center justify-between w-full rounded-2xl border border-pink-500/10 group-hover:border-pink-400/40 transition-all duration-300 p-6 sm:p-7 overflow-hidden gap-6"
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

                {/* Left side: Logo & Details */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 w-full">
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: 2 }}
                    className="flex items-center justify-center rounded-2xl shrink-0"
                    style={{
                      width: 64,
                      height: 64,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.organization} logo`}
                      style={{ width: 44, height: 44, objectFit: "contain" }}
                    />
                  </motion.div>

                  <div className="flex flex-col items-center sm:items-start w-full">
                    <p
                      className="text-pink-400 mb-1"
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
                      className="text-white mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h2>

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {cert.organization}
                    </p>

                    <div
                      className="inline-flex items-center gap-2 rounded-full border border-pink-500/20"
                      style={{
                        background: "rgba(236,72,153,0.08)",
                        padding: "4px 12px",
                      }}
                    >
                      <span
                        className="rounded-full bg-pink-400"
                        style={{
                          width: 5,
                          height: 5,
                          animation: "pulseDot 2s infinite",
                        }}
                      />
                      <span
                        className="text-pink-300"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Button */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto shrink-0 text-center text-white rounded-xl shadow-lg bg-gradient-to-r ${cert.color} transition-all`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    padding: "10px 20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  View Certificate &rarr;
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
