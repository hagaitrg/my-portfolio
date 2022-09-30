import React from 'react'
import profile from './images/profile.jpeg'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import './styles/Card.css'

export default function Card() {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-md mx-auto bg-sky-300 rounded-xl  p-5 profile-card'>
                <img className='w-32 mx-auto rounded-full drop-shadow-sm' src={profile} alt='profile' />
                <div className='text-center mt-5 '>
                    <p className="text-xl sm:text-2xl text-gray-900">
                        Disa Hagai Tarigan
                    </p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Web Developer / Backend Developer
                    </p>
                    <div className='flex align-center  justify-center mt-4'>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                            href="https://github.com/hagaitrg"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-purple-500  hover:bg-purple-500 rounded-full hover:text-white transition-colors duration-300"
                            href="https://www.instagram.com/hagaitrg"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600  hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300"
                            href="https://www.linkedin.com/in/disa-h-5b6436141"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                            <span className="sr-only">Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


