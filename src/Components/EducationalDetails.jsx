import React from "react";

function EducationalDetails() {
  return (
    <>
      {/* Parent Section */}
      <div
        className="flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-r from-black via-[#0a2b30] to-black"
        id="EducationalDetails"
      >
        {/* Section Title */}
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Educational Details
          </h1>
        </div>

        {/* Education Cards */}
        <div className="container mx-auto flex flex-col gap-12">
          {/* NUML */}
          <div className="p-6 sm:p-10 bg-gradient-to-r from-black via-[#0e1d1f] to-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-blue-400">
              National University of Modern Languages (NUML)
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Currently pursuing a <span className="text-blue-300 font-medium">Bachelor’s degree in Computer Science</span>.
              I’ve gained a strong foundation in programming, software development, and
              problem-solving. My focus lies in <span className="text-blue-300 font-medium">Full Stack Web Development (MERN)</span>
              and creating modern, responsive user interfaces. My academic journey has strengthened
              my ability to build real-world digital solutions.
            </p>
            <div className="flex flex-wrap justify-between text-blue-200 font-semibold">
              <p>Semester: 7</p>
              <p>CGPA: 3.04 / 4.00</p>
            </div>
          </div>

          {/* KIPS */}
          <div className="p-6 sm:p-10 bg-gradient-to-r from-black via-[#0e1d1f] to-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-blue-400">
              KIPS College
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Completed my <span className="text-blue-300 font-medium">Intermediate in Computer Science (ICS)</span>.
              It was during this phase that I developed my passion for technology and
              programming, which became the foundation for my journey into
              software development and full stack web technologies.
            </p>
            <p className="text-blue-200 font-semibold">Marks Obtained: 910 / 1100</p>
          </div>

          {/* Sir Syed */}
          <div className="p-6 sm:p-10 bg-gradient-to-r from-black via-[#0e1d1f] to-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-blue-400">
              Sir Syed Public School
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Completed my <span className="text-blue-300 font-medium">Matriculation in Pre-Medical</span>.
              Although my early academic focus was on the sciences, my growing interest in
              computers and technology led me to transition into the field of
              Computer Science and Web Development.
            </p>
            <p className="text-blue-200 font-semibold">Marks Obtained: 810 / 1100</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationalDetails;
