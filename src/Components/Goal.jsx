import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Code } from "lucide-react";

function Goal() {
  const goals = [
    {
      icon: <Target size={36} />,
      title: "Career Objective",
      desc: "To become a skilled full-stack developer capable of delivering reliable and impactful digital solutions.",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: <Rocket size={36} />,
      title: "Vision",
      desc: "To innovate and create user-focused applications that make everyday tasks easier and smarter.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Code size={36} />,
      title: "Mission",
      desc: "To continuously learn, collaborate, and contribute to the ever-evolving world of web technologies.",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <section
        id="Goal"
        className="min-h-screen flex flex-col justify-center items-center text-white px-6 py-20"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, #0d2d0d 0%, #060d06 60%)" }}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Purpose &amp; Direction
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
            My Goals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-white/30"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Driven by passion, guided by purpose, and committed to excellence
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`} />
              <div
                className="relative rounded-2xl border border-emerald-500/10 group-hover:border-emerald-400/40 transition-all duration-300 p-8 h-full flex flex-col items-center overflow-hidden"
                style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", backdropFilter: "blur(12px)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center shadow-lg`}
                >
                  <div className="text-white">{goal.icon}</div>
                </motion.div>

                <div className="mb-4 rounded-full" style={{ width: 32, height: 2, background: "linear-gradient(90deg, #34d399, #059669)" }} />

                <h2 className="text-white text-center mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700 }}>
                  {goal.title}
                </h2>

                <p className="text-gray-400 text-center leading-relaxed flex-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 400 }}>
                  {goal.desc}
                </p>

                <motion.div
                  className={`h-0.5 mt-6 w-full rounded-full bg-gradient-to-r ${goal.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#Projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px" }}
          >
            See What I've Built →
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Goal;