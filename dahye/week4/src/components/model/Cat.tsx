import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useMemo } from 'react';

const Cat = (props: { position: [number, number, number] }) => {
  const { scene } = useGLTF('/medias/cat.gltf');
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  scene.traverse(function (object) {
    if (object.isMesh) {
      object.material.color.set(0xfff000);
      object.material.transparent = true;
      object.material.opacity = 0.5;
    }
  });

  if (!scene) return null;

  return <primitive object={copiedScene} position={props.position} />;
};

export default React.memo(Cat);
