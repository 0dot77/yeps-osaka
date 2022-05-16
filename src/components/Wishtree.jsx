import React from 'react';
import { Canvas } from '@react-three/fiber';

function Wishtree() {
  return (
    <Canvas>
      <pointLight position={[1, 1, 1]} />
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default Wishtree;
