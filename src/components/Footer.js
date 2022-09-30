import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4 ">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                    href="https://github.com/hagaitrg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    <span className="sr-only">Github</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                    href="https://www.instagram.com/hagaitrg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                    <span className="sr-only">Instagram</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                    href="https://www.linkedin.com/in/disa-h-5b6436141"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn />
                    <span className="sr-only">Linkedin</span>
                </a>
            </div>
            <div className='flex justify-center mt-4'>
                <p className='text-black mb-4'>
                    Made with <span role="link" aria-label="heart">💙</span> by <a className="text-blue-500 hover:underline" href="mailto:me.disahagait@gmail.com">Hagai Tarigan</a>
                </p>
            </div>
        </div>
    )
}