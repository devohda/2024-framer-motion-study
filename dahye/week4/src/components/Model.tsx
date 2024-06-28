import { useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/medias/donut.gltf');
  return <primitive object={gltf.scene} />;
};

export default Model;
