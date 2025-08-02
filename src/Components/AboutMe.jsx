import React from "react";

function AboutMe(props) {
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
            Hi, I’m Talha Bin Zubair, an enthusiastic Full Stack Web Developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern frontend technologies like HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. I enjoy transforming creative ideas into clean, functional, and interactive web applications. <br /><br />
            Currently pursuing my Bachelor's degree in Computer Science, I’ve been actively working on building real-world projects and sharpening both my technical and soft skills. I’m always eager to learn, collaborate, and grow in the tech space. <br /><br />
            I’m open to internships, freelance roles, and volunteering opportunities where I can contribute to impactful projects while gaining more industry experience. <br /><br />
            Let’s connect and create something awesome!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
