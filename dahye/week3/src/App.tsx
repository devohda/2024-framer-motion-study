import { Canvas } from '@react-three/fiber';
import Box from './components/Box';

function App() {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightblue',
      }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
