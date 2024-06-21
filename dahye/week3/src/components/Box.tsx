import { useRef, useState } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

const Box = (props: MeshProps) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_, delta) => {
    if (!meshRef.current) return;

    return (meshRef.current.rotation.x += delta);
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'white' : 'orange'} />
    </mesh>
  );
};

export default Box;
