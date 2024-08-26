import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
    title: string,
    iconSVG: any,
    projectBanner: any,
    projectLink: string,
    alt: string
}

function ProjectContainer({iconSVG, projectBanner, projectLink, alt, title}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    viewport={{ once: true }} 
    className='border-box-animation-one project-box relative overflow-hidden group/project'>
        <motion.div className='absolute top-0 left-[50%] border-white solid border-t border-r'
        whileInView = {{ width: [0, '50%', '50%', '50%'], height: [0, 0, '100%', '100%']}}
        viewport={{ once: true }}
        ></motion.div>
        <motion.div className='absolute top-0 right-[50%] border-white solid border-t border-l'
        whileInView = {{ width: [0, '50%', '50%', '50%'], height: [0, 0, '100%', '100%']}}
        viewport={{ once: true }}
        ></motion.div>
        <motion.div className='absolute bottom-0 left-0 border-white solid border-b'
        whileInView = {{ width: [0, 0, 0, '50%']}}
        viewport={{ once: true }}
        ></motion.div>
        <motion.div className='absolute bottom-0 right-0 border-white solid border-t border-l'
        whileInView = {{ width: [0, 0, 0, '50%']}}
        viewport={{ once: true }}
        ></motion.div>
        <Link href={projectLink} target='_blank'>
            <Image src={iconSVG} width={120} alt={alt} className='project-icon'/>
            <div className='w-full p-0 m-0 absolute bottom-0 left-0 right-0 text-center bg-black text-white flex flex-col h-0 opacity-0 group-hover/project:h-[52.5vh] group-hover/project:opacity-100 transition-all duration-300 ease-in-out'>
                <Image src={projectBanner} alt='AI Project poster' width={250} />
                <p className='m-3'>{title}</p>
        </div>
        </Link>
    </motion.div>
  )
}

export default ProjectContainer