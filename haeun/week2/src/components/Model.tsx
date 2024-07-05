import { MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

const Model = () => {
  const { nodes } = useGLTF('/torrus.glb');
  const { viewport } = useThree();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const torus = useRef<any>(null);

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  }

  useFrame(({ pointer }) => {
    if (!torus.current) return null;

    const x = pointer.x * 5;
    const y = pointer.y * 5;

    torus.current.rotation.x = x;
    torus.current.rotation.y = y;
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
        Hello World!
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
