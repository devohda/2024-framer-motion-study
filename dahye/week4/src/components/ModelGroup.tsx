import { useEffect, useRef, useState } from 'react';
import Model from './Model';
import { MathUtils, type Group } from 'three';
import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ModelGroup = () => {
  const groupRef = useRef<Group>(null);
  const cameraRef = useRef<CameraControls>(null);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (groupRef.current === null || cameraRef.current === null) return;

    cameraRef.current.setTarget(0, 0, 0, true);
  }, []);

  useFrame((_, delta) => {
    if (cameraRef.current && !isDragging) {
      cameraRef.current.azimuthAngle += MathUtils.degToRad(4 * delta);
    }
  });

  return (
    <group ref={groupRef}>
      <CameraControls
        ref={cameraRef}
        enabled={true}
        distance={10}
        maxDistance={30}
        minDistance={1}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />
      <Model position={[1, 0.3, 0]} />
      <Model position={[2, 0.3, 0]} />
      <Model position={[3, 0.3, 0]} />
    </group>
  );
};

export default ModelGroup;
