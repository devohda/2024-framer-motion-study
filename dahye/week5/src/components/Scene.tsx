import ModelGroup from './ModelGroup';
import { Canvas } from '@react-three/fiber';
import {
  KeyboardControls,
  type KeyboardControlsEntry,
} from '@react-three/drei';
import { useMemo } from 'react';
import { Controls } from '../types';

export default function Scene() {
  const keyboardMap = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
    ],
    []
  );

  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas>
        <ModelGroup />
      </Canvas>
    </KeyboardControls>
  );
}
