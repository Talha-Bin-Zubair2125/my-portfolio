import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
// Replace this import path with the actual path to where you saved your image
import LaptopAwardImg from "../Images/Laptop Award.jpeg"; 

function Awards() {
  const awardDetails = {
    title: "PM Youth Program – Laptop Award (2025)",
    subtitle: "Prime Minister's Youth Programme",
    description: "Awarded high-specification laptop for outstanding academic performance and secure institutional merit positioning.",
    highlights: [
      "Recognized for sustained academic performance and overall merit across semesters.",
      "Awarded under the competitive Prime Minister's Youth Laptop Scheme initiative.",
      "Maintained a top-tier standing to meet the strict eligibility criteria set by the Higher Education Commission (HEC)."
    ],
    date: "2025"
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <section
        id="Awards"
        className="min-h-screen text-white px-6 py-20"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, #0d2d0d 0%, #060d06 60%)" }}
      >
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-emerald-400" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Achievements
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-emerald-400" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 6vw, 64px)", fontWeight: 900,
              lineHeight: 1.1, letterSpacing: "-0.01em",
              background: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 45%, #34d399 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
            Awards & Recognition
          </motion.h1>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Image Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="md:col-span-5 flex justify-center group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500" />
            <div className="relative border border-emerald-500/20 rounded-2xl p-2 bg-white/5 backdrop-blur-xl transition-all duration-300 group-hover:border-emerald-400/40">
              <img 
                src={LaptopAwardImg} 
                alt="PM Youth Program Laptop Award" 
                className="rounded-xl w-full max-w-sm md:max-w-full h-auto object-cover shadow-2xl" 
              />
            </div>
          </motion.div>

          {/* Right Column: Text Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 700, color: "#fff" }}>
                  {awardDetails.title}
                </h2>
                <div className="flex items-center gap-4 text-emerald-400 mt-1 text-xs" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em" }}>
                  <span className="uppercase font-semibold">{awardDetails.subtitle}</span>
                  <span className="flex items-center gap-1 text-white/40">
                    <Calendar size={12} /> {awardDetails.date}
                  </span>
                </div>
              </div>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px" }} className="text-gray-300 leading-relaxed font-light">
              {awardDetails.description}
            </p>

            {/* Bullet Highlights */}
            <ul className="space-y-3 pt-2">
              {awardDetails.highlights.map((highlight, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3 text-gray-400 text-sm items-start leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <CheckCircle2 size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div className="h-px bg-gradient-to-r from-emerald-500/40 via-transparent to-transparent pt-4"
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8 }} viewport={{ once: true }} />
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Awards;