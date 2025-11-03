import React from "react";
import Bg_Img from "../Images/Bg_Img.jpg";

function Navigation_Bar_with_Body() {
  return (
    <>
      {/* Background Image Container */}
      <div
        className="bg-cover bg-center min-h-screen w-full text-white relative"
        style={{ backgroundImage: `url(${Bg_Img})` }}
        id="Home"
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Navigation Bar */}
        <header className="relative z-10">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center font-sans px-6 py-5">
            {/* Website Title */}
            <div className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-0 tracking-wide">
              Code With Talha
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-5 text-sm sm:text-base font-medium">
              <a href="#Home" className="hover:text-blue-400 transition">
                Home
              </a>
              <a href="#AboutMe" className="hover:text-blue-400 transition">
                About Me
              </a>
              <a href="#EducationalDetails" className="hover:text-blue-400 transition">
                Education
              </a>
              <a href="#Skills" className="hover:text-blue-400 transition">
                Skills
              </a>
              <a href="#Project" className="hover:text-blue-400 transition">
                Projects
              </a>
              <a href="#Goal" className="hover:text-blue-400 transition">
                Goal
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center min-h-[calc(100vh-100px)]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            I'm <span className="text-blue-400">Talha Bin Zubair</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl max-w-3xl mb-6 leading-relaxed text-gray-200">
            Welcome to my portfolio! I'm Talha Bin Zubair, a passionate and
            detail-oriented Full Stack Web Developer specializing in the MERN
            stack (MongoDB, Express.js, React.js, Node.js) and modern frontend
            technologies like HTML5, CSS3, JavaScript, Tailwind CSS, and
            Bootstrap.
          </p>

          <a
            href="#Contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Contact Me!
          </a>
        </section>
      </div>
    </>
  );
}

export default Navigation_Bar_with_Body;
