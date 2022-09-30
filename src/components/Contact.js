import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

export default function Contact() {
    return (
        <div className='max-w-lg w-full text-center m-auto pt-36 pb-10'>
            <h1 className='text-2xl md:text-4xl'>Hire Me?</h1>
            <a href='mailto:me.disahagait@gmail.com'>
                <span className='mt-6 inline-block w-atuo bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer rounded-xl'>
                    <div className='flex flex-row items-center'>
                        <span className='mr-3'>Get in touch</span>
                        <FaArrowRight color="white"/>
                    </div>
                </span>
            </a>
        </div>
    )
}
