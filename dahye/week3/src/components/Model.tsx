import { useRef, useState } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';

import { useControls } from 'leva';
import { Mesh } from 'three';

export default function Model() {
  const { nodes } = useGLTF('/medias/torrus.glb');
  const { viewport } = useThree();
  const torus = useRef<Mesh>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(true);
    setPreviousMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;

    const { clientX, clientY } = event;

    const deltaX = clientX - previousMousePosition.x;
    const deltaY = clientY - previousMousePosition.y;

    if (torus.current === null) return;

    torus.current.rotation.y += deltaX * 0.01;
    torus.current.rotation.x += deltaY * 0.01;

    setPreviousMousePosition({
      x: clientX,
      y: clientY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
      </Text>

      <mesh
        ref={torus}
        {...nodes.Torus002}
        onPointerDown={handleMouseDown}
        onPointerMove={handleMouseMove}
        onPointerUp={handleMouseUp}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
