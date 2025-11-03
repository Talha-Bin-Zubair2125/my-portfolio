import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileDownload } from "react-icons/fa";

function Footer() {
    return (
        <>
            {/* Main Footer */}
            <footer className='flex flex-col md:flex-row justify-between items-start md:items-center gap-10 p-8 md:p-12 bg-gradient-to-r from-black via-[#0a2b30] to-black text-white'>
                
                {/* Brand Info */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className='text-3xl md:text-4xl font-bold mb-3 text-blue-400'>Code With Talha</h1>
                    <p className='text-sm md:text-base text-gray-300'>
                        Let's connect and build something meaningful together!
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className='text-2xl md:text-3xl mb-3 font-semibold'>Links</h1>
                    <ul className='flex justify-center md:justify-start gap-6'>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/?trk=PROFILE_DROP_DOWN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200"
                            >
                                <FaLinkedin className="text-blue-500 hover:text-blue-600 text-3xl" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Talha-Bin-Zubair2125"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200"
                            >
                                <FaGithub className="text-white hover:text-gray-400 text-3xl" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className='text-2xl md:text-3xl mb-3 font-semibold'>Contact Me!</h1>
                    <ul className='flex flex-col gap-4 text-sm md:text-base'>
                        <li className='flex items-center justify-center md:justify-start gap-3'>
                            <FaEnvelope className="text-blue-400 text-xl" />
                            <span className='text-gray-300'>talhazubair2125@gmail.com</span>
                        </li>
                        <li className='flex items-center justify-center md:justify-start gap-3'>
                            <FaPhoneAlt className="text-green-400 text-xl" />
                            <span className='text-gray-300'>+92-3340979437</span>
                        </li>
                        <li className='flex items-center justify-center md:justify-start gap-3'>
                            <a
                                href="https://drive.google.com/file/d/1T7Yl_HKhVtcHc-tq0D18PFf9VQ1WRYeT/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200"
                            >
                                <FaFileDownload className="text-yellow-400 text-xl" />
                            </a>
                            <span className='text-gray-300'>Download Resume</span>
                        </li>
                    </ul>
                </div>
            </footer>

            {/* Copyright */}
            <div className='bg-gradient-to-r from-black via-[#0a2b30] to-black text-white border-t border-gray-800'>
                <p className="text-center text-xs md:text-sm py-3 text-gray-400">
                    &copy; {new Date().getFullYear()} Developed by <span className="text-blue-400 font-medium">Talha Bin Zubair</span>. All rights reserved.
                </p>
            </div>
        </>
    );
}

export default Footer;
