import React from 'react';

function Skills() {
    const SkillButton = ({ name }) => (
        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-200 mt-3">
            {name}
        </button>
    );

    return (
        <>
            <div
                className='flex flex-col justify-center min-h-screen p-4 bg-gradient-to-r from-black via-[#0a2b30] to-black text-white'
                id='Skills'
            >
                {/* Main Heading */}
                <div className='container mx-auto mb-16'>
                    <h1 className='text-5xl sm:text-6xl mb-10 font-semibold'>Skills</h1>
                    <p className="text-2xl sm:text-3xl text-gray-300">
                        Web Development (Current Focus)
                    </p>
                </div>

                {/* Front End */}
                <div className='container mx-auto mb-14'>
                    <h2 className='text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        Front End Skills
                    </h2>
                    <div className='flex flex-wrap gap-4'>
                        {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                            <SkillButton key={skill} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Back-End */}
                <div className='container mx-auto mb-14'>
                    <h2 className='text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        Back-End (Learning Phase)
                    </h2>
                    <div className='flex flex-wrap gap-4'>
                        {["Node.js", "Express.js", "MySQL", "MongoDB"].map((skill) => (
                            <SkillButton key={skill} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Programming Languages */}
                <div className='container mx-auto mb-14'>
                    <h2 className='text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        Programming Languages
                    </h2>
                    <div className='flex flex-wrap gap-4'>
                        {["C++", "Java", "Python"].map((skill) => (
                            <SkillButton key={skill} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Version Control & Tools */}
                <div className='container mx-auto mb-14'>
                    <h2 className='text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        Version Control & Tools
                    </h2>
                    <div className='flex flex-wrap gap-4'>
                        {["Git & GitHub", "VS Code"].map((skill) => (
                            <SkillButton key={skill} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className='container mx-auto'>
                    <h2 className='text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        Soft Skills
                    </h2>
                    <div className='flex flex-wrap gap-4'>
                        {["Team Collaboration", "Problem Solving", "Continuous Learning", "Time Management"].map((skill) => (
                            <SkillButton key={skill} name={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
