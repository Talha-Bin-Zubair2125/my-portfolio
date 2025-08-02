import React from 'react';

function Projects() {
    return (
        <>
            <div
                className='flex flex-col justify-center min-h-screen p-4 bg-gradient-to-r from-black via-[#0a2b30] to-black text-white'
                id='Project'
            >
                {/* Main Heading */}
                <div className='mb-16 container mx-auto'>
                    <h1 className='text-6xl mb-16'>Projects</h1>
                </div>

                {/* JavaScript Projects */}
                <div className='mb-16 container mx-auto'>
                    <h2 className='text-4xl mb-8 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        JavaScript Projects
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Temperature Converter</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">BMI Calculator</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Background Color Changer</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Toast Notifications</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Age Calculator</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Game Trailers Without Modal</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Game Trailers With Modal</button>
                    </div>
                </div>

                {/* University Projects */}
                <div className='container mx-auto mb-16'>
                    <h2 className='text-4xl mb-8 bg-gradient-to-r from-black via-[#0e1d1f] to-black mix-blend-luminosity'>
                        University Projects
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Movie Management System Using C++</button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Car Management System Using JAVA</button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Utility Store Management System Using JAVA</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
