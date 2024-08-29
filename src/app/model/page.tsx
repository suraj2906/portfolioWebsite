import React from 'react'
import ModelScene from '@/components/ModelScene'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/ModelScene'), { ssr: false})

type Props = {}

export default function Page(props: Props) {
  return (
        <main className='h-[100vh]'>
        {/* <ModelScene /> */}
        </main>
  )
}