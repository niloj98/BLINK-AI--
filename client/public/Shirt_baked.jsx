/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shirt_baked.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload('/shirt_baked.glb')
