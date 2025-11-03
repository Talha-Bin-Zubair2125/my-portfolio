import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Code } from "lucide-react";

function Goal() {
  const goals = [
    {
      icon: <Target size={32} />,
      title: "Career Objective",
      desc: "To become a skilled full-stack developer capable of delivering reliable and impactful digital solutions.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Vision",
      desc: "To innovate and create user-focused applications that make everyday tasks easier and smarter.",
    },
    {
      icon: <Code size={32} />,
      title: "Mission",
      desc: "To continuously learn, collaborate, and contribute to the ever-evolving world of web technologies.",
    },
  ];

  return (
    <section
      id="Goal"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-[#0a2b30] to-black text-white px-6 py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-cyan-400 text-center"
      >
        My Goals
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {goals.map((goal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0f1f22]/80 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg hover:shadow-cyan-500/30 transition"
          >
            <div className="text-cyan-400 mb-4 flex justify-center">{goal.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{goal.title}</h2>
            <p className="text-gray-300">{goal.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Goal;
