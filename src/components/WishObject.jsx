import styled from 'styled-components';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import rockUrl from '../assets/models/ATrock.glb?url';
import { Suspense, useRef } from 'react';

const canvasStyle = {
  height: '84vh',
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: `translateY(-50%)`,
  zIndex: `1`,
};

function Rock() {
  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime();
  });
  const gltf = useLoader(GLTFLoader, rockUrl);
  const myModel = useRef();
  return <primitive ref={myModel} object={gltf.scene} scale={[0.35, 0.35, 0.35]} position={[0, -2, 0]} />;
}

export default function WishObejct() {
  return (
    <Canvas style={{ ...canvasStyle }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Rock />
      </Suspense>
    </Canvas>
  );
}
