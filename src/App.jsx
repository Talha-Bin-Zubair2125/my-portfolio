import React from "react";
import Navigation_Bar_with_Body from "./Components/Navigation_Bar_with_Body";
import AboutMe from "./Components/AboutMe";
import Goal from "./Components/Goal";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications"; // <-- Import here
import EducationalDetails from "./Components/EducationalDetails";
import Footer from "./Components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
