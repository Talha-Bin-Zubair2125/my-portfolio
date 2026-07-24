import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
// Replace this import path with your actual image path
import LaptopAwardImg from "../Images/Laptop Award.jpeg";
import TypingText from "./TypingText";

const PINK = "#ec4899";
const PURPLE = "#a855f7";
const INDIGO = "#6366f1";

function Awards() {
  const awardDetails = {
    title: "PM Youth Program – Laptop Award (2025)",
    subtitle: "Prime Minister's Youth Programme",
    description:
      "Awarded high-specification laptop for outstanding academic performance and secure institutional merit positioning.",
    highlights: [
      "Recognized for sustained academic performance and overall merit across semesters.",
      "Awarded under the competitive Prime Minister's Youth Laptop Scheme initiative.",
      "Maintained a top-tier standing to meet the strict eligibility criteria set by the Higher Education Commission (HEC).",
    ],
    date: "2025",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes neonFlickerA {
          0%, 100% { filter: drop-shadow(0 0 18px ${PINK}55) drop-shadow(0 0 30px ${PURPLE}33); }
          50% { filter: drop-shadow(0 0 8px ${PINK}30) drop-shadow(0 0 14px ${PURPLE}22); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(236,72,153,0.25); }
          50% { box-shadow: 0 8px 34px rgba(168,85,247,0.5); }
        }
      `}</style>
      <section
        id="Awards"
        className="min-h-screen text-white px-4 sm:px-6 py-16 sm:py-20 flex flex-col justify-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #1a0826 0%, #080612 60%)",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <span className="w-8 sm:w-10 h-px bg-gradient-to-r from-transparent to-pink-400" />
            <span
              className="text-pink-400 font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-[11px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Achievements
            </span>
            <span className="w-8 sm:w-10 h-px bg-gradient-to-l from-transparent to-pink-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="leading-[1.15] sm:leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5.5vw, 64px)",
              fontWeight: 900,
              background: `linear-gradient(135deg, ${PINK}, ${PURPLE}, ${INDIGO})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "neonFlickerA 4s ease-in-out infinite",
            }}
          >
            Awards & Recognition
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
              minHeight: 20,
            }}
          >
            <TypingText
              phrases={[
                "Merit that earned recognition.",
                "Hard work, officially noted.",
              ]}
              color="rgba(255,255,255,0.4)"
              cursorColor={PINK}
            />
          </motion.p>
        </div>

        {/* Centralized Card Layout */}
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
          {/* Centered Image Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center group relative mb-8 sm:mb-10 px-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-15 rounded-2xl blur-3xl transition-opacity duration-500" />
            <div className="relative border border-pink-500/20 rounded-2xl p-2 sm:p-2.5 bg-white/5 backdrop-blur-xl transition-all duration-300 group-hover:border-pink-400/40 shadow-2xl w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px]">
              <img
                src={LaptopAwardImg}
                alt="PM Youth Program Laptop Award"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Centered Content Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full text-center space-y-5 sm:space-y-6 px-2 sm:px-4"
          >
            {/* Header / Title Stack */}
            <div className="flex flex-col items-center space-y-3">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center"
                style={{ animation: "badgePulse 3s ease-in-out infinite" }}
              >
                <Award className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="px-2">
                <h2
                  className="leading-tight text-white"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px, 4.5vw, 30px)",
                    fontWeight: 700,
                  }}
                >
                  {awardDetails.title}
                </h2>
                <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-pink-400 mt-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span>{awardDetails.subtitle}</span>
                  <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-pink-500/40" />
                  <span className="flex items-center gap-1 normal-case font-normal text-white/40 mt-0.5 sm:mt-0">
                    <Calendar size={13} /> {awardDetails.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <p
              className="text-gray-300 max-w-2xl mx-auto leading-relaxed font-light text-sm sm:text-base px-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {awardDetails.description}
            </p>

            {/* Centralized Balanced List Items */}
            <div className="max-w-xl mx-auto text-left pt-2 px-2">
              <ul className="space-y-3.5 sm:space-y-4">
                {awardDetails.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 text-gray-400 text-xs sm:text-sm items-start leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <CheckCircle2
                      size={16}
                      className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0"
                    />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Accent Line */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent pt-6 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Awards;
