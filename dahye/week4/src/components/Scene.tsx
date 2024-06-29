import { OrbitControls } from '@react-three/drei';
import ModelGroup from './ModelGroup';
import { Canvas } from '@react-three/fiber';

export default function Scene() {
  return (
    <Canvas style={{ background: '#000000' }}>
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <OrbitControls />

      <ModelGroup />
    </Canvas>
  );
}
