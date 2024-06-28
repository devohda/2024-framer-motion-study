import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelGroup from './ModelGroup';

export default function Scene() {
  return (
    <Canvas style={{ background: '#000000' }}>
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} />

      <ModelGroup />
    </Canvas>
  );
}
