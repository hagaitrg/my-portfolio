import React from 'react'
import {SiPhp, SiPython,SiJavascript} from 'react-icons/si'
import './styles/Skills.css'

export default function Skills() {
    return (
        <div className='max-w-4xl mx-auto justify-center py-12' id="skills">
            <p className='text-2xl text-black text-center sm:text-4xl pt-4'>
                Skills
            </p>
            <div className='flex flex-wrap justify-center pt-2'>
                <div className='flex flex-col w-40 p-10 m-5 overflow-hidden bg-white rounded-xl sm:w-25 skill-card'>
                    <SiPhp color="#8993be" className='mx-auto text-4xl'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>PHP</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-5 overflow-hidden bg-white rounded-xl sm:w-25 skill-card'>
                    <SiPython color="#306998" className='mx-auto text-4xl'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Python</p>
                </div>
                <div className='flex flex-col w-40 p-10 m-5 overflow-hidden bg-white  rounded-xl sm:w-25 skill-card'>
                    <SiJavascript color="#F0DB4F" className='mx-auto text-4xl'/>
                    <p className='mt-6 text-base sm:text-xl font-semibold text-center'>JavaScript</p>
                </div>
            </div>
        </div>
    )
}
