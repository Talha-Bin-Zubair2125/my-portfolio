import React from 'react';

function EducationalDetails() {
  return (
    <>
      {/* Parent */}
      <div
        className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-r from-black via-[#0a2b30] to-black"
        id="EducationalDetails"
      >
        {/* Section Title */}
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Educational Details
          </h1>
        </div>

        {/* NUML */}
        <div className="container mx-auto mb-12 p-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            National University of Modern Languages
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            I’m currently pursuing a Bachelor’s degree in Computer Science, where I’ve gained a solid foundation in programming, software development, and problem-solving. Throughout my studies, I’ve focused on developing practical skills in web development, with a special interest in the MERN stack and frontend technologies. My academic journey has fueled my passion for building innovative digital solutions and continuously learning in the ever-evolving tech world.
          </p>
          <p className="font-bold text-base sm:text-lg md:text-xl">Semester: 7</p>
          <p className="font-bold text-base sm:text-lg md:text-xl">CGPA: 3.04 / 4.00</p>
        </div>

        {/* KIPS */}
        <div className="container mx-auto mb-12 p-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">KIPS</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            I graduated from KIPS, where I completed my Intermediate in Computer Science (ICS). During my time there, I developed a strong interest in programming and technology, which laid the foundation for my journey into web development and computer science.
          </p>
          <p className="font-bold text-base sm:text-lg md:text-xl">Marks Obtained: 910 / 1100</p>
        </div>

        {/* Sir Syed */}
        <div className="container mx-auto mb-12 p-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Sir Syed Public School</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            I completed my matriculation with a Pre-Medical background from Sir Syed Public School. While my early academic focus was in the sciences, over time I discovered a deep interest in technology and development, which led me to pursue a career in computer science and web development.
          </p>
          <p className="font-bold text-base sm:text-lg md:text-xl">Marks Obtained: 810 / 1100</p>
        </div>
      </div>
    </>
  );
}

export default EducationalDetails;
