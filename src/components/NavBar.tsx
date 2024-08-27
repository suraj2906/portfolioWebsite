'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { Link, animateScroll as scroll } from "react-scroll"

type Props = {}

export const NavBar = (props: Props) => {
  return (
    <div className='absolute top-0 md:px-[10%] w-[100%] md:py-[3%] px-[5%] py-[10%] font-cruell md:text-3xl text-[12px]'>
        <motion.ul  
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 2 }}
        className='flex flex-row justify-between text-white'>
            <motion.li><a href='#about'>ABOUT</a></motion.li>
            <motion.li><Link to='projects'>WORK</Link></motion.li>
            <a href='https://github.com/suraj2906' target='_blank'><motion.li className='font-vintage md:text-6xl text-[15px] border solid rounded-full w-12 h-12 md:w-auto md:h-auto flex items-center justify-center md:p-5 p-3 md:-mt-5 -mt-2'>SS</motion.li></a>
            <motion.li>SOCIALS</motion.li>
            <motion.li>CONTACT</motion.li>
        </motion.ul>
    </div>
  )
}