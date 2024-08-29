'use client'

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, OrbitControls, ScrollControls } from '@react-three/drei'
import Model from './Model'
import * as THREE from 'three'


type Props = {
  onLoadingComplete: () => void;
}

const ModelScene = ({ onLoadingComplete }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleModelLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      onLoadingComplete();
    }
  }, [isLoading, onLoadingComplete]);

  
  return (
    
    <Canvas style={{position: 'absolute', left: 0}} camera={{position: [-53.86, 8.85, 75.85], rotation: [THREE.MathUtils.degToRad(4.52), THREE.MathUtils.degToRad(-75.3), THREE.MathUtils.degToRad(4.38)], fov: 50, near: 0.1, far: 1000}}> 
        <directionalLight position={[5, 10, 0.46]} intensity={4.82} />
        <Suspense fallback={false}>
          {/* <OrbitControls /> */}
            <Model onLoad={handleModelLoad} />
        </Suspense>
    </Canvas>
  )
}

export default ModelScene;