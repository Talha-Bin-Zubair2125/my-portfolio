import React from "react";
import Navigation_Bar_with_Body from "./Pages/Navigation_Bar_with_Body";
import AboutMe from "./Pages/AboutMe";
import Goal from "./Pages/Goal";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Certifications from "./Pages/Certifications"; 
import EducationalDetails from "./Pages/EducationalDetails";
import Footer from "./Pages/Footer";
import Awards from "./Pages/Awards";
import Experience from "./Pages/Experience";

function App() {
  return (
    <div className="App">
      <Navigation_Bar_with_Body />
      <AboutMe />
      <Goal />
      <EducationalDetails />
      <Projects />
      <Skills />
      <Certifications /> 
      <Awards />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
