import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileDownload } from "react-icons/fa";

function Footer() {
    return (
        <>
            {/* Parent */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 md:p-10 bg-gradient-to-r from-black via-[#0a2b30] to-[black] text-white'>
                
                {/* Brand Info */}
                <div className="flex-1">
                    <h1 className='text-2xl md:text-4xl mb-2 font-bold'>Code With Talha</h1>
                    <p className='text-sm md:text-base'>Let's connect and build something meaningful together!</p>
                </div>

                {/* Social Links */}
                <div className="flex-1">
                    <h1 className='text-2xl md:text-4xl mb-2 font-bold'>Links</h1>
                    <ul className='flex gap-4'>
                        <li>
                            <a href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/?trk=PROFILE_DROP_DOWN" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-500 hover:text-blue-700 text-2xl md:text-3xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Talha-Bin-Zubair2125" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white hover:text-gray-400 text-2xl md:text-3xl" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex-1">
                    <h1 className='text-2xl md:text-4xl mb-2 font-bold'>Contact Me!</h1>
                    <ul className='flex flex-col gap-4 text-sm md:text-base'>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope className="text-blue-400 text-xl md:text-2xl" />
                            <span>talhazubair2125@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className="text-green-400 text-xl md:text-2xl" />
                            <span>+92-3340979437</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <a href="https://drive.google.com/file/d/1T7Yl_HKhVtcHc-tq0D18PFf9VQ1WRYeT/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                <FaFileDownload className="text-yellow-400 text-xl md:text-2xl" />
                            </a>
                            <span>Download Resume</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Developed By: */}
            <div className='bg-gradient-to-r from-black via-[#0a2b30] to-[black] text-white'>
                <p className="text-center text-xs md:text-sm py-3 text-gray-400">
                    &copy; 2025 Developed by Talha Bin Zubair. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
