import React from "react";
import Github_ProfilePic from "../Images/Github_ProfilePic.jpg";
import Bg_Img from "../Images/Bg_Img.jpg";
import NUML_LOGO_removebg_preview from "../Images/NUML_LOGO_removebg_preview.png";
import AboutMe from "./AboutMe";

function Navigation_Bar_with_Body() {
  return (
    <>
      {/* Background Image Container */}
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${Bg_Img})` }}
      >
        {/* Navigation Bar */}
        <div className="container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center font-sans px-4 py-4 text-white">
          {/* Website Title */}
          <div className="text-3xl sm:text-4xl font-semibold mb-2 sm:mb-0">
            Code With Talha
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <a href="#Home">Home</a>
            <a href="#AboutMe">About Me</a>
            <a href="#EducationalDetails">Educational Details</a>
            <a href="#Skills">Skills</a>
            <a href="#Project">Projects</a>
            <a href="#Goal">Goal</a>
          </div>
        </div>

        {/* Hero Section */}
        <div
          className="container mx-auto px-4 flex flex-col items-start justify-center h-[calc(100vh-100px)] text-white"
          id="Home"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            I'm Talha-Bin-Zubair
          </h1>

          <p className="text-sm sm:text-base md:text-xl max-w-3xl mb-4">
            Welcome to my portfolio! I'm Talha Bin Zubair, a passionate and
            detail-oriented Full Stack Web Developer specializing in the MERN
            stack (MongoDB, Express.js, React.js, Node.js) and modern frontend
            technologies like HTML5, CSS3, JavaScript, Tailwind CSS, and
            Bootstrap.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Contact Me!
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation_Bar_with_Body;
