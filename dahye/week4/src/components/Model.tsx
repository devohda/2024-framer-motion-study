import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';

const Model = (props: { position: [number, number, number] }) => {
  const gltf = useGLTF('/medias/donut.gltf');
  const copiedScene = useMemo(() => gltf.scene.clone(), [gltf.scene]);

  return <primitive object={copiedScene} position={props.position} />;
};

export default Model;
