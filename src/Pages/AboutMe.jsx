import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <section
        id="About"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0f0a] via-[#0d1a0d] to-[#0a0f0a] text-white px-6 py-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #0d2d0d 0%, #060d06 60%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl w-full"
        >
          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400" />
              <span
                className="text-emerald-400"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                Get To Know Me
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
                background:
                  "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 45%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 text-sm text-white/30"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              Passionate developer, creative thinker, lifelong learner
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500" />
              <div
                className="relative h-full rounded-2xl border border-emerald-500/10 group-hover:border-emerald-400/40 transition-all duration-300 p-8 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p
                  className="text-emerald-400 mb-3"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Who I Am
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#f0fdf4",
                    marginBottom: "14px",
                  }}
                >
                  The Person Behind the Code
                </h3>
                <div
                  className="mb-4 rounded-full"
                  style={{
                    width: 32,
                    height: 2,
                    background: "linear-gradient(90deg, #34d399, #059669)",
                  }}
                />
                <p
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  Hello! I'm{" "}
                  <span className="text-emerald-400 font-semibold">
                    Talha Bin Zubair
                  </span>
                  , a passionate developer focused on building fast, scalable,
                  and visually stunning web applications. I blend logic with
                  creativity to deliver meaningful digital experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500" />
              <div
                className="relative h-full rounded-2xl border border-emerald-500/10 group-hover:border-emerald-400/40 transition-all duration-300 p-8 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p
                  className="text-emerald-400 mb-3"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  What I Do
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#f0fdf4",
                    marginBottom: "14px",
                  }}
                >
                  Crafting Modern Web Experiences
                </h3>
                <div
                  className="mb-4 rounded-full"
                  style={{
                    width: 32,
                    height: 2,
                    background: "linear-gradient(90deg, #34d399, #059669)",
                  }}
                />
                <p
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  I specialize in the{" "}
                  <span className="text-emerald-400 font-semibold">
                    MERN stack
                  </span>{" "}
                  and love turning real-world problems into practical,
                  interactive web apps. Every line of code moves me closer to
                  becoming a world-class full-stack engineer.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <motion.a
              href="#Goal"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(16,185,129,0.4)",
              }}
              className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
            >
              Discover My Goals →
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default AboutMe;
