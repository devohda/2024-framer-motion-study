import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useMemo } from 'react';

const Ball = (props: { position: [number, number, number] }) => {
  const { scene } = useGLTF('/medias/donut.gltf');

  scene.traverse(function (object) {
    if (object.isMesh) {
      object.material.color.set(0xff0000);
      object.material.transparent = true;
      object.material.opacity = 0.5;
    }
  });

  const copiedScene = useMemo(() => scene.clone(), [scene]);

  if (!scene) return null;

  return <primitive object={copiedScene} position={props.position} />;
};

export default React.memo(Ball);
