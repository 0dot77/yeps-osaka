import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';

function MainBox({ isboxClicked }) {
  const boxRef = useRef();
  useFrame(() => {
    if (isboxClicked) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.z += 0.01;
    } else {
      boxRef.current.rotation.x = 0;
      boxRef.current.rotation.z = 0;
    }
  });
  return (
    <mesh ref={boxRef}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshBasicMaterial attach="material" transparent opacity={0.1} />
      <Edges scale={1.01} color="white" />
    </mesh>
  );
}

export default MainBox;
