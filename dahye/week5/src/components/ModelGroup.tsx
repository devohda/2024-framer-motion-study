import { Suspense, useEffect, useRef } from 'react';
import { PerspectiveCamera, Sky, useKeyboardControls } from '@react-three/drei';

import { Physics } from '@react-three/rapier';
import Avatar from './model/Avatar';
import City from './model/City';

import { Vector3 } from 'three';

const ModelGroup = () => {
  const position = useRef<Vector3>(new Vector3(0, 0, 0));

  return (
    <Suspense>
      <Sky />
      <Physics>
        <ambientLight />
        <directionalLight />
        <City />
        <PerspectiveCamera />

        <Suspense fallback={null}>
          <Avatar id={'1'} url={'/cat.gltf'} position={position.current} />
        </Suspense>
      </Physics>
    </Suspense>
  );
};

export default ModelGroup;
