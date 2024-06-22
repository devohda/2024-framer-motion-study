import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Office } from './Office';
import { Overlay } from './Overlay';

const OfficeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </Canvas>
  );
};

export default OfficeScene;
