import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Scene() {
  return (
    <Canvas style={{ background: '#000000' }}>
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}
