import React from 'react'

function Goal() {
    return (
        <>
            {/* Parent */}
            <div className='flex flex-col justify-center h-full p-4 md:p-8 bg-gradient-to-r from-black via-[#0a2b30] to-[black] text-white' id='Goal'>
                {/* Child */}
                <div className='mb-12 md:mb-16 container mx-auto'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl mb-8 md:mb-16'>Goal</h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed bg-gradient-to-r from-black via-[#0e1d1f] to-[black] mix-blend-luminosity p-4 rounded-lg">
                        My goal is to build responsive, scalable, and user-friendly web applications that solve real-world problems.
                        <br /><br />
                        In this portfolio, you'll find projects that reflect my hands-on experience in:
                        <ul className="list-disc list-inside ml-4 my-4">
                            <li>Designing and developing dynamic user interfaces</li>
                            <li>Creating RESTful APIs and connecting front-end to back-end</li>
                            <li>Working with databases like MongoDB</li>
                            <li>Implementing modern UI/UX principles</li>
                        </ul>
                        I'm currently open to internships, freelance projects, and volunteering opportunities where I can apply my skills and keep growing as a developer.
                        <br /><br />
                        Let's connect and build something meaningful together!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Goal
