import React from "react";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      type: "Course Certificate",
      title: "Front-End Web Development",
      organization: "Professional Freelancing Training Program",
      link: "https://drive.google.com/file/d/1wRoW94JHR9XDa1H-WnvGDdTXQwY1WtwI/view?usp=sharing",
      image: "https://tecspectrum.com/wp-content/uploads/2024/10/pftp-dark-logo-800x730.png",
      color: "from-blue-500 to-indigo-600",
      num: "01",
    },
    {
      type: "Course Certificate",
      title: "Full Stack Web Development",
      organization: "PNY Trainings",
      link: "https://drive.google.com/file/d/1fNjaWjqYJJaptd1TJTNLLqJsDEU93Eyb/view?usp=sharing",
      image: "https://tse1.mm.bing.net/th/id/OIP.GwOTg-WNEM7xE4KQYpuuhQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "from-indigo-500 to-purple-600",
      num: "02",
    },
    {
      type: "Internship Certificate",
      title: "Full Stack Web Development",
      organization: "Arch Technologies",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQFBhELaT_VSmg/profile-treasury-image-shrink_800_800/B4DZw0sRsGIUAc-/0/1770410549359?e=1781967600&v=beta&t=p8IvJNI8Di4j1hbDvUhjT29uEmSA_IjmOTMa1LNMusM",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQFRJEnxY85TQQ/img-crop_100/B4DZVsHlO4HAAQ-/0/1741275683265?e=2147483647&v=beta&t=NBrPmWg-BcShERv2ivOCjqz_dVO7TE0XAbuSWBLUK2g",
      color: "from-purple-500 to-pink-600",
      num: "03",
    },
    {
      type: "Internship Certificate",
      title: "Full Stack Web Development",
      organization: "CodeCelix",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQE-iXpdB74YBA/profile-treasury-image-shrink_800_800/B4DZ0yPZtuKAAY-/0/1774664393507?e=1781967600&v=beta&t=qcAWu0D2V9_YD_PzBhZnZ4ZXXlpImaqdzNTOGYYcdsI",
      image: "https://tse4.mm.bing.net/th/id/OIP.PIHf4jnly7l-PnuwHn-JOQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "from-pink-500 to-rose-600",
      num: "04",
    },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <section
        id="Certifications"
        className="min-h-screen text-white py-20 px-6"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, #0d2d0d 0%, #060d06 60%)" }}
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
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Credentials &amp; Achievements
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
            Certifications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-white/30"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, letterSpacing: "0.01em" }}
          >
            Verified skills from industry-recognized programs &amp; internships
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
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`} />
              <div
                className="relative flex flex-col items-center h-full rounded-2xl border border-emerald-500/10 group-hover:border-emerald-400/40 transition-all duration-300 p-7 overflow-hidden"
                style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", backdropFilter: "blur(12px)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 right-4 text-emerald-400/30" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {cert.num}
                </span>
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  className="flex items-center justify-center mb-5 rounded-2xl"
                  style={{ width: 72, height: 72, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}
                >
                  <img src={cert.image} alt={`${cert.organization} logo`} style={{ width: 50, height: 50, objectFit: "contain" }} />
                </motion.div>
                <div className="mb-4 rounded-full" style={{ width: 32, height: 2, background: "linear-gradient(90deg, #34d399, #059669)" }} />
                <p className="text-emerald-400 text-center mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {cert.type}
                </p>
                <h2 className="text-white text-center mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, lineHeight: 1.3 }}>
                  {cert.title}
                </h2>
                <p className="text-center mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.32)", letterSpacing: "0.03em" }}>
                  {cert.organization}
                </p>
                <div className="flex items-center gap-2 mb-5 rounded-full border border-emerald-500/20" style={{ background: "rgba(52,211,153,0.08)", padding: "5px 14px" }}>
                  <span className="rounded-full bg-emerald-400" style={{ width: 6, height: 6, animation: "pulse 2s infinite" }} />
                  <span className="text-emerald-300" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}>
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
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", padding: "10px 0" }}
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