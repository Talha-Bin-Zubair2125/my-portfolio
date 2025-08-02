import React from 'react'

function Projects() {
    return (
        <>
            {/* Parent */}
            <div className='flex flex-col justify-center h-full p-4 bg-gradient-to-r from-black via-[#0a2b30] to-[black] text-white' id='Project'>
                {/* Child */}
                <div className=' mb-16 container mx-auto'>
                    <h1 className='text-6xl mb-16'>Projects</h1>
                </div>
                <div className='mb-16 container mx-auto'>
                    <h1 className='container mx-auto text-4xl mb-16 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>JavaScript Projects</h1>
                    <div className='flex gap-x-4 '>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Temperature Converter
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            BMI Calculator
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Background Color Changer
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Toast Notifications
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Age Calculator
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Game Trailers Without Modal
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Game Trailers With Modal
                        </button>
                    </div>
                </div>
                <div className='container mx-auto mb-16'>
                    <h1 className='container mx-auto text-4xl mb-16 bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity'>University Projects</h1>
                    <div className='flex gap-x-4 '>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Movie Management System Using C++
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Car Management System Using JAVA
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-3">
                            Utility Store Management System Using JAVA
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
