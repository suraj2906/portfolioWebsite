'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import GradientDiv from '@/components/GradientDiv'
import AISVG from '../../public/artificial-intelligence.svg'
import researchSVG from '../../public/research.svg'
import sslSVG from '../../public/hosting.svg'
import AIproject from '../../public/AI-project.jpeg'
import ProjectContainer from '@/components/projectContainer'

export default function Home() {

  return (
    <GradientDiv className={"text-white flex min-h-screen flex-col items-center justify-between bg-black z-10 js-radial"}>
      <div className='flex flex-col snap-y snap-mandatory'>
        <section className='h-[100vh] flex flex-col items-center justify-center snap-center overflow-y-auto'>
          <p className='w-[70%] text-center text-2xl self-center'>Hi, my name is Suraj Shah, I am a AI/ML and Front-End Developer</p>
        </section>

        <section className='m-10 flex flex-col justify-center items-center snap-center h-[100vh] overflow-y-auto'>
          <p className='text-xl mb-5'>My Projects</p>
          <div className='flex gap-5 group'>
            {/* <div className='project-box relative overflow-hidden group/project'>
              <Image src={AISVG} width={120} alt='AI Icon'/>
              <div className='w-full p-0 m-0 absolute bottom-0 left-0 right-0 text-center bg-black text-white flex flex-col h-0 opacity-0 group-hover/project:h-[52.5vh] group-hover/project:opacity-100 transition-all duration-300 ease-in-out'>
                <Image src={AIproject} alt='AI Project poster' width={250} />
                <p className='m-3'>AI vs Real Voice Classification</p>
              </div>
            </div> */}
            <ProjectContainer iconSVG={AISVG} projectBanner={AIproject} projectLink='https://ieeexplore.ieee.org/document/10201677/' alt='AI Image' />
            <div className='project-box relative overflow-hidden group/project'>
              <Image src={researchSVG} width={120} alt='Research Icon'/>
              <div className='hello-div absolute bottom-0 left-0 right-0 bg-black text-white flex items-center justify-center h-0 opacity-0 group-hover/project:h-full group-hover/project:opacity-100 transition-all duration-300 ease-in-out'>
              </div>
            </div>
            <div className='project-box relative overflow-hidden group/project'>
              <Image src={sslSVG} width={120} alt='SSL Icon'/>
              <div className='hello-div absolute bottom-0 left-0 right-0 bg-black text-white flex items-center justify-center h-0 opacity-0 group-hover/project:h-full group-hover/project:opacity-100 transition-all duration-300 ease-in-out'>
                Hello
              </div>
            </div>
          </div>
        </section>
      </div>
    </GradientDiv>
  )
}
