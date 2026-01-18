import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Code } from "lucide-react";

function Goal() {
  const goals = [
    {
      icon: <Target size={40} />,
      title: "Career Objective",
      desc: "To become a skilled full-stack developer capable of delivering reliable and impactful digital solutions.",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.3)",
    },
    {
      icon: <Rocket size={40} />,
      title: "Vision",
      desc: "To innovate and create user-focused applications that make everyday tasks easier and smarter.",
      gradient: "from-blue-500 to-purple-600",
      glowColor: "rgba(99, 102, 241, 0.3)",
    },
    {
      icon: <Code size={40} />,
      title: "Mission",
      desc: "To continuously learn, collaborate, and contribute to the ever-evolving world of web technologies.",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.3)",
    },
  ];

  return (
    <section
      id="Goal"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl"
      >
        <h1 className="text-5xl sm:text-6xl font-black mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Goals
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Driven by passion, guided by purpose, and committed to excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {goals.map((goal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
            />

            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/20 group-hover:border-cyan-500/60 transition-all h-full flex flex-col">
              {/* Icon container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center shadow-lg`}
              >
                <div className="text-white">{goal.icon}</div>
              </motion.div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {goal.title}
              </h2>
              <p className="text-gray-300 text-center leading-relaxed flex-1">
                {goal.desc}
              </p>

              {/* Decorative line */}
              <motion.div
                className={`h-1 mt-6 rounded-full bg-gradient-to-r ${goal.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.a
          href="#Projects"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-500/30 transition-all"
        >
          See What I've Built →
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Goal;