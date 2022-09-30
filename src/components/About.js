import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import {FaChevronDown} from 'react-icons/fa'

export default function About() {
    return (
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-2xl text-black md:text-4xl text-center'>
                About
            </p>
            <p className='text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4'>
                Someone who really loves technology and software development. Also love to learn new things every day. And a long life learner
            </p>
            <ScrollIntoView selector="#skills">
                <div className="mx-auto p-20">
                    <FaChevronDown className="animate-bounce mx-auto text-3xl text-gray-500"/>
                </div>
            </ScrollIntoView>
        </div>
    )
}
