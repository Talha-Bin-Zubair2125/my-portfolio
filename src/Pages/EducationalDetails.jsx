import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

function EducationalDetails() {
  const items = [
    {
      title: "National University of Modern Languages",
      abbr: "NUML",
      subtitle: "BSc — Computer Science",
      details: (
        <>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="text-emerald-400 font-semibold">Graduated</span></p>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="text-emerald-400 font-semibold">CGPA:</span> 3.12 / 4.00 (Till 7th Semester)</p>
          <p className="mt-3 text-gray-400 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
            Focus on Full Stack Development (MERN), Data Structures, and Software Engineering principles. Built several practical web applications as part of coursework and personal projects.
          </p>
        </>
      ),
      icon: <FaUniversity size={36} />,
      gradient: "from-emerald-500 to-green-600",
      year: "2022 – 2026",
    },
    {
      title: "KIPS College",
      abbr: null,
      subtitle: "Intermediate (ICS)",
      details: (
        <>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="text-emerald-400 font-semibold">Marks:</span> 910 / 1100</p>
          <p className="mt-3 text-gray-400 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
            Developed strong fundamentals in computing and mathematics, building a solid base for software and web development.
          </p>
        </>
      ),
      icon: <FaGraduationCap size={36} />,
      gradient: "from-green-500 to-teal-600",
      year: "2019 – 2021",
    },
    {
      title: "Sir Syed Public School",
      abbr: null,
      subtitle: "Matriculation (Pre-Medical)",
      details: (
        <>
          <p style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="text-emerald-400 font-semibold">Marks:</span> 810 / 1100</p>
          <p className="mt-3 text-gray-400 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
            Early academic background in sciences which later transitioned into technology and programming interests.
          </p>
        </>
      ),
      icon: <FaSchool size={36} />,
      gradient: "from-teal-500 to-cyan-600",
      year: "2017 – 2019",
    },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <section
        id="EducationalDetails"
        className="min-h-screen text-white px-6 py-20"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, #0d2d0d 0%, #060d06 60%)" }}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Academic Background
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-emerald-400" />
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
              background: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 45%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Educational Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-white/30"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            A solid academic foundation powering my career in software development
          </motion.p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`} />
              <div
                className="relative rounded-2xl border border-emerald-500/10 group-hover:border-emerald-400/40 transition-all duration-300 p-8 h-full flex flex-col overflow-hidden"
                style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", backdropFilter: "blur(12px)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                >
                  <div className="text-white">{item.icon}</div>
                </motion.div>

                {/* Year badge */}
                <div className="flex justify-center mb-5">
                  <span
                    className={`text-white bg-gradient-to-r ${item.gradient} rounded-full shadow-lg`}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", padding: "5px 16px" }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-4 rounded-full mx-auto" style={{ width: 32, height: 2, background: "linear-gradient(90deg, #34d399, #059669)" }} />

                {/* Title */}
                <h3
                  className="text-white text-center mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, lineHeight: 1.3 }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-center mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "#34d399" }}>
                  {item.subtitle}
                </p>

                {/* Details */}
                <div className="flex-1 space-y-1 text-white/80" style={{ fontSize: "14px" }}>
                  {item.details}
                </div>

                {/* Bottom bar */}
                <motion.div
                  className={`h-0.5 mt-6 rounded-full bg-gradient-to-r ${item.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px" }}
          >
            Get In Touch →
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default EducationalDetails;