import React from "react";

function Goal() {
  return (
    <>
      {/* Parent */}
      <div
        className="flex flex-col justify-center h-full p-6 md:p-12 bg-gradient-to-r from-black via-[#0a2b30] to-black text-white"
        id="Goal"
      >
        {/* Child */}
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Goal
          </h1>

          {/* Quote */}
          <p className="italic text-blue-300 text-base sm:text-lg md:text-xl mb-12">
            "The best way to predict the future is to create it." — Peter Drucker
          </p>

          {/* Description */}
          <div className="text-left bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity p-6 sm:p-8 md:p-10 rounded-lg shadow-lg leading-relaxed text-base sm:text-lg md:text-xl">
            <p className="mb-6">
              My goal is to build responsive, scalable, and user-friendly web
              applications that solve real-world problems.
            </p>

            <p className="mb-6">
              In this portfolio, you'll find projects that reflect my hands-on
              experience in:
            </p>

            <ul className="list-disc list-inside ml-4 mb-6 space-y-2 text-blue-200">
              <li>Designing and developing dynamic user interfaces</li>
              <li>Creating RESTful APIs and connecting front-end to back-end</li>
              <li>Working with databases like MongoDB</li>
              <li>Implementing modern UI/UX principles</li>
            </ul>

            <p>
              I'm currently open to internships, freelance projects, and
              volunteering opportunities where I can apply my skills and
              continue growing as a developer.
            </p>

            <p className="mt-6 text-blue-300 font-medium">
              Let’s connect and build something meaningful together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goal;
