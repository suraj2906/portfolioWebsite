'use client'

import { useState } from 'react'
import GradientDiv from '@/components/GradientDiv'
import AISVG from '../../public/artificial-intelligence.svg'
import researchSVG from '../../public/research.svg'
import sslSVG from '../../public/hosting.svg'
import AIproject from '../../public/AI-project.jpeg'
import ProjectContainer from '@/components/ProjectContainer'
import ResearchPaper from '../../public/twitter.webp'
import WhiteBoard from '../../public/whiteboard.webp'
import ModelScene from '@/components/ModelScene'
import { NavBar } from '@/components/NavBar'

export default function Home() {

  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsModelLoaded(true);
  }


  return (
    <GradientDiv className={"text-white flex min-h-screen flex-col items-center justify-between z-10 js-radial scroll-smooth"}>
      <ModelScene onLoadingComplete={handleLoadingComplete}/>
      {isModelLoaded ? 
      <>
      <NavBar />
      <div className='flex flex-col snap-y snap-mandatory'>
        <section id='#about' className='h-[100vh] flex flex-col items-center justify-center snap-center overflow-y-auto'>
          <p className='w-[70%] text-center text-2xl self-center'>Hi, my name is Suraj Shah, I am a AI/ML and Front-End Developer</p>
        </section>

        <section id='projects' className='m-10 flex flex-col justify-center items-center snap-center h-[100vh] overflow-y-auto'>
          <p className='text-xl mb-5'>My Projects</p>
          <div className='flex gap-5 group md:flex-row flex-col'>
            <ProjectContainer iconSVG={AISVG} projectBanner={AIproject} projectLink='https://ieeexplore.ieee.org/document/10201677/' alt='AI Image' title="AI vs Real Voice Classification" />
            <ProjectContainer iconSVG={researchSVG} projectBanner={ResearchPaper} projectLink='https://ieeexplore.ieee.org/document/10201677/' alt='Research Image' title='Research Paper - Sentimental Analysis on Twitter Data using XLNet'/>
            <ProjectContainer iconSVG={sslSVG} projectBanner={WhiteBoard} projectLink='https://colab-white-board-client.vercel.app' alt='Whiteboard image' title='Collaborative WhiteBoard - using WebSockets'/>
          </div>
        </section>

        <section className='h-[100vh] flex flex-col items-center justify-center snap-center overflow-y-auto'>
          <p className='w-[70%] text-center text-2xl self-center'>Hi, my name is Suraj Shah, I am a AI/ML and Front-End Developer</p>
        </section>

      </div></> : <div className='font-vintage h-[100vh] text-6xl flex justify-center items-center'>Loading Model</div>}
    </GradientDiv>
  )
}
