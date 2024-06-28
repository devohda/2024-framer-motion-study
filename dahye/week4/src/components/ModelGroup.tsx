import { useEffect, useMemo, useRef, useState } from 'react';
import Model from './Model';
import { MathUtils, type Group } from 'three';
import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HUNDRED_LENGTTH_ARRAY = new Array(50).fill(null);

const ModelGroup = () => {
  const groupRef = useRef<Group>(null);
  const cameraRef = useRef<CameraControls>(null);

  const [isDragging, setIsDragging] = useState(false);

  const randomPosition = useMemo<[number, number, number][]>(() => {
    const positions = HUNDRED_LENGTTH_ARRAY.fill(null).map(() => {
      return [
        MathUtils.randFloatSpread(30),
        MathUtils.randFloatSpread(30),
        MathUtils.randFloatSpread(30),
      ] as [number, number, number];
    });

    return positions;
  }, []);

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
      {
        // make 100 models with random positions
        HUNDRED_LENGTTH_ARRAY.fill(null).map((_, index) => (
          <Model key={index} position={randomPosition[index]} />
        ))
      }
    </group>
  );
};

export default ModelGroup;
