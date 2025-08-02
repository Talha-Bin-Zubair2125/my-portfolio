import React from 'react';

function Skills(props) {
    return (
        <>
            {/* Parent */}
            <div className='flex flex-col justify-center h-full p-4 bg-gradient-to-r from-black via-[#0a2b30] to-[black] text-white' id='Skills'>
                <h1 className='container mx-auto text-4xl sm:text-5xl lg:text-6xl mb-10 sm:mb-14 lg:mb-16'>Skills</h1>

                {/* Child */}
                <div className='container mx-auto text-2xl sm:text-3xl lg:text-4xl mb-10 sm:mb-14 lg:mb-16'>
                    <h1>Web Development (Current Focus)</h1>
                </div>

                <div className='container mx-auto mb-10 sm:mb-14 lg:mb-16'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>Front End Skills</h1>
                    <div className='flex flex-wrap gap-4'>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            HTML
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            CSS
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            JavaScript
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            React
                        </button>
                    </div>
                </div>

                <div className='container mx-auto mb-10 sm:mb-14 lg:mb-16'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>Back-End (Learning Phase)</h1>
                    <div className='flex flex-wrap gap-4'>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Node.js
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Express.js
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            MySql
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Mongodb
                        </button>
                    </div>
                </div>

                <div className='container mx-auto mb-10 sm:mb-14 lg:mb-16'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>Programming Languages</h1>
                    <div className='flex flex-wrap gap-4'>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            C++
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            JAVA
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Python
                        </button>
                    </div>
                </div>

                <div className='container mx-auto mb-10 sm:mb-14 lg:mb-16'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>Version Control & Tools</h1>
                    <div className='flex flex-wrap gap-4'>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Git & GitHub
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            VS Code
                        </button>
                    </div>
                </div>

                <div className='container mx-auto mb-10 sm:mb-14 lg:mb-16'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>Soft Skills</h1>
                    <div className='flex flex-wrap gap-4'>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Team Collaboration
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Problem Solving
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Continuous Learning
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Time Management
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
