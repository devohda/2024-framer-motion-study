import { useEffect, useMemo, useRef, useState } from 'react';
import Ball from './model/Ball';
import Cat from './model/Cat';
import { MathUtils, type Group } from 'three';
import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HUNDRED_LENGTTH_ARRAY = new Array(100).fill(null);

function gaussianRandom(mean: number, sigma: number) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  const normal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return mean + sigma * normal;
}

const ModelGroup = () => {
  const groupRef = useRef<Group>(null);
  const cameraRef = useRef<CameraControls>(null);

  const [isDragging, setIsDragging] = useState(false);

  const randomPosition = useMemo<[number, number, number][]>(() => {
    const positions = HUNDRED_LENGTTH_ARRAY.fill(null).map(() => {
      return [
        gaussianRandom(0, 5),
        gaussianRandom(0, 5),
        gaussianRandom(0, 5),
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
        maxDistance={20}
        minDistance={1}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />
      {
        // make 100 models with random positions
        HUNDRED_LENGTTH_ARRAY.fill(null).map((_, index) =>
          index % 2 === 0 ? (
            <Ball key={index} position={randomPosition[index]} />
          ) : (
            <Cat key={index} position={randomPosition[index]} />
          )
        )
      }
    </group>
  );
};

export default ModelGroup;
