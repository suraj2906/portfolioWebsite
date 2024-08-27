'use client'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export const NavBar = (props: Props) => {
  return (
    <div className='absolute top-0 md:px-[10%] w-[100%] py-[3%] px-[5%] font-cruell text-3xl'>
        <motion.ul  
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 2 }}
        className='flex flex-row justify-between text-white'>
            <motion.li><a href='#about'>ABOUT</a></motion.li>
            <motion.li><a href='#projects'>WORK</a></motion.li>
            <motion.li className='font-vintage text-6xl border solid rounded-full p-5 -mt-5'><a href='https://github.com/suraj2906' target='_blank'>SS</a></motion.li>
            <motion.li>SOCIALS</motion.li>
            <motion.li>CONTACT</motion.li>
        </motion.ul>
    </div>
  )
}