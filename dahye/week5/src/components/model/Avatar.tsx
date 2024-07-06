import {
  PerspectiveCamera,
  useAnimations,
  useGLTF,
  useKeyboardControls,
} from '@react-three/drei';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { SkeletonUtils } from 'three-stdlib';
import { RapierRigidBody, RigidBody, vec3, quat } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

import * as THREE from 'three';
import { Controls } from '../../types';

interface AvatarProps {
  url: string;
  id: string;
  speed?: number;
  direction?: InstanceType<typeof THREE.Vector3>;
  frontVector?: InstanceType<typeof THREE.Vector3>;
  sideVector?: InstanceType<typeof THREE.Vector3>;
  position?: InstanceType<typeof THREE.Vector3>;
}

interface PressedType {
  back: boolean;
  forward: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
}

const PRESSED_INITIAL_STATE = {
  back: false,
  forward: false,
  left: false,
  right: false,
  jump: false,
};

type ANIMATIONS_STATE = 'M_Standing_Idle_001' | 'M_Walk_001';

const Avatar = memo(function AvatarImpl({
  url,
  id,
  speed = 3,
  direction = new THREE.Vector3(),
  frontVector = new THREE.Vector3(),
  sideVector = new THREE.Vector3(),
  ...props
}: AvatarProps) {
  const rb = useRef<InstanceType<typeof RapierRigidBody>>(null);
  const avatar = useRef<InstanceType<typeof THREE.Group>>(null);
  const lookAt = useRef<ReturnType<typeof vec3>>(vec3({ x: 0, y: 0, z: 0 }));
  const pressed = useRef<PressedType>(PRESSED_INITIAL_STATE);
  const { scene } = useGLTF(url);

  const [sub] = useKeyboardControls<Controls>();

  useEffect(() => {
    return sub(
      (state) => state,
      (p) => {
        pressed.current = p;
      }
    );
  }, []);

  // animation
  const { animations: walkAnimation } = useGLTF('/M_Walk_001.glb');
  const { animations: idleAnimation } = useGLTF('/M_Standing_Idle_001.glb');
  const { actions } = useAnimations(
    [walkAnimation[0], idleAnimation[0]],
    avatar
  );
  const [animation, setAnimation] = useState<ANIMATIONS_STATE>(
    'M_Standing_Idle_001'
  );

  // memorized position
  const position = useMemo(
    () =>
      new THREE.Vector3(
        props.position?.x,
        props.position?.y,
        props.position?.z
      ),
    []
  );

  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  useEffect(() => {
    clone.traverse((child) => {
      if (child.isObject3D) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clone]);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.25).play();

    return () => {
      actions[animation]?.fadeOut(0.25);
    };
  }, [animation, url]);

  useFrame((_state) => {
    const { forward, back, left, right, jump } = pressed.current;

    if (!(avatar.current && rb.current)) return;

    // if (id === userId) {
    const updatedLookAt = vec3(rb.current.translation());
    lookAt.current.lerp(updatedLookAt, 0.1);
    _state.camera.lookAt(lookAt.current);
    // }

    const velocity = rb.current.linvel();

    if (jump) {
      rb.current.setLinvel({ x: velocity.x, y: 1, z: velocity.z }, true);
      avatar.current.position.y += 0.2;
    } else {
      if (avatar.current.position.y >= 0) avatar.current.position.y -= 0.1;
    }

    const isMove = back || forward || left || right;

    frontVector.set(0, 0, Number(back) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed);

    rb.current.setLinvel(
      { x: direction.x, y: velocity.y, z: direction.z },
      true
    );

    if (direction.lengthSq() > 0) {
      const quaternion = quat();
      quaternion.setFromUnitVectors(
        vec3({ x: 0, y: 0, z: 1 }),
        direction.clone().normalize()
      );

      avatar.current.quaternion.slerp(quaternion, 0.1);
    }

    if (isMove) setAnimation('M_Walk_001');
    else setAnimation('M_Standing_Idle_001');
  });

  return (
    <group>
      <RigidBody ref={rb} position={position} lockRotations>
        <group name={`player-${id}`} dispose={null}>
          <primitive object={clone} ref={avatar} />
        </group>
        {/* {userId === id && ( */}
        <PerspectiveCamera makeDefault position={[0, 8.5, 13]} near={1} />
        {/* )} */}
      </RigidBody>
    </group>
  );
});

export default Avatar;

useGLTF.preload('/M_Walk_001.glb');
useGLTF.preload('/M_Standing_Idle_001.glb');
