import React from "react"
import Github_ProfilePic from "../Images/Github_ProfilePic.jpg";
import Bg_Img from "../Images/Bg_Img.jpg";
import NUML_LOGO_removebg_preview from "..//Images/NUML_LOGO_removebg_preview.png";
import AboutMe from "./AboutMe";

function Navigation_Bar_with_Body(props) {
    return(
    <>
        {/* For Background Image */}
        <div className="bg-cover h-screen w-full" style={{ backgroundImage: `url(${Bg_Img})` }}>
            {/* Navigation Bar */}
          
            <div className="container mx-auto flex flex-wrap justify-between items-center font-sans px-4 py-4 text-white">
              
               {/* <img src={NUML_LOGO_removebg_preview} alt="GitHub Profile" className="w-16 rounded bg-black" />  */}
            
              {/* Links */}
              {/* Web Title  */}
              <div className="text-4xl md:text-">Code With Talha</div>
              {/* BookMarks 

                / -- means route 
                
              */}
                <div className="flex flex-wrap gap-4 text-sm sm:text-base mt-4 sm:mt-0">
                <div className=""><a href="#Home">Home</a></div>
                <div><a href="/AboutMe#AboutMe">About Me</a></div>
                <div><a href="/EducationalDetails#EducationalDetails">Educational Details</a></div>
                <div><a href="/Skills#Skills">Skills</a></div>
                <div><a href="/Projects#Project">Projects</a></div>
                <div><a href="/Goal#Goal">Goal</a></div>
                </div>
            </div>
            {/* Details*/}
            {/* mx-auto used for horizontally center the parent  */}
            <div className="container mx-auto px-4 flex flex-col items-start justify-center h-[calc(100vh-100px)] text-white" id="Home">
            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                I'm Talha-Bin-Zubair
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-xl max-w-3xl mb-4">
                Welcome to my portfolio! I'm Talha Bin Zubair, a passionate and detail-oriented Full Stack Web Developer with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern frontend technologies like HTML5, CSS3, JavaScript, Tailwind CSS, and Bootstrap.
            </p>

            {/* Contact Button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Contact Me!
            </button>
            </div>
        </div>
    </>
    )   
    
}

export default Navigation_Bar_with_Body