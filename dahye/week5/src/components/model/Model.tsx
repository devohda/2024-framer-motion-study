import { useGLTF } from '@react-three/drei';
import { ModelInfo } from '../../types';
import { useMemo, useRef } from 'react';
import { Group } from 'three';
import React from 'react';

const Model = (props: ModelInfo) => {
  const { scene } = useGLTF(props.gltf);
  const ref = useRef<Group>(null);

  const copiedScene = useMemo(() => scene.clone(), [scene]);

  if (!scene) return null;

  return (
    <primitive
      ref={ref}
      object={copiedScene}
      position={props.position}
      width={1}
    />
  );
};

export default React.memo(Model);
