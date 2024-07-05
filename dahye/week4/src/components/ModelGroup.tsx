import { useEffect, useRef, useState } from 'react';
import { MathUtils, type Group } from 'three';
import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import models from '../utils/model';
import Model from '../components/model/Model';

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
        maxDistance={20}
        minDistance={1}
        dollySpeed={1}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />

      {models.map((modelInfo, index) => (
        <Model key={index} {...modelInfo} />
      ))}
    </group>
  );
};

export default ModelGroup;
