import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type Props = {
    iconSVG: any,
    projectBanner: any,
    projectLink: string,
    alt: string
}

function ProjectContainer({iconSVG, projectBanner, projectLink, alt}: Props) {
  return (
    <div className='project-box relative overflow-hidden group/project'>
        <Link href={projectLink} target='_blank'>
            <Image src={iconSVG} width={120} alt={alt}/>
            <div className='w-full p-0 m-0 absolute bottom-0 left-0 right-0 text-center bg-black text-white flex flex-col h-0 opacity-0 group-hover/project:h-[52.5vh] group-hover/project:opacity-100 transition-all duration-300 ease-in-out'>
                <Image src={projectBanner} alt='AI Project poster' width={250} />
                <p className='m-3'>AI vs Real Voice Classification</p>
        </div>
        </Link>
    </div>
  )
}

export default ProjectContainer