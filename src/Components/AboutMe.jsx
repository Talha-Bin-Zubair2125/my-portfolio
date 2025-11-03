import React from "react";

function AboutMe() {
  return (
    <>
      {/* Parent Section */}
      <div
        className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-r from-black via-[#0a2b30] to-black"
        id="AboutMe"
      >
        {/* Heading */}
        <div className="container mx-auto text-center mb-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            About Me
          </h1>
        </div>

        {/* Description Section */}
        <div className="container mx-auto bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity rounded-lg p-6 sm:p-10">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
            Hi, I’m <span className="text-blue-400 font-semibold">Talha Bin Zubair</span>,
            a dedicated <span className="text-blue-400 font-semibold">Full Stack Web Developer</span> with a strong
            command over the MERN stack (MongoDB, Express.js, React.js, Node.js)
            and modern frontend technologies such as HTML5, CSS3, JavaScript,
            Tailwind CSS, and Bootstrap.
            <br />
            <br />
            I love building clean, responsive, and scalable web applications that
            deliver seamless user experiences. Over time, I’ve developed and
            deployed several hands-on projects that demonstrate my expertise in both
            frontend and backend development.
            <br />
            <br />
            I’m passionate about learning new technologies, solving real-world
            problems, and collaborating on impactful projects that make a
            difference. My focus is always on writing clean, maintainable code and
            continuously improving as a developer.
            <br />
            <br />
            Let’s connect and create something amazing together!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
