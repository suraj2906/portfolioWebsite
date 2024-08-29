'use client'

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, LoopRepeat } from "three";

type Props = {
  onLoad: () => void;
}

useGLTF.preload("/Arm_Animated.glb");

const Model = ({ onLoad }: Props) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/Arm_Animated.glb");

  const {actions, names} = useAnimations(animations, group);
  console.log(names)
  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(3).play();
    onLoad(); 
  }, [])
  return (
    <group ref={group} >
      <primitive object={scene} />
    </group>
  );
};

export default Model;