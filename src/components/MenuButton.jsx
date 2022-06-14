import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';

function MenuButton({ boxButtonClicked }) {
  const boxRef = useRef();

  useFrame(() => {
    if (boxButtonClicked) {
      boxRef.current.rotation.x = 0;
      boxRef.current.rotation.z = 0;
    } else {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.z += 0.01;
    }
  });
  return (
    <mesh ref={boxRef}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent opacity={0.1} />
      <Edges scale={1.01} color="white" />
    </mesh>
  );
}

export default MenuButton;
