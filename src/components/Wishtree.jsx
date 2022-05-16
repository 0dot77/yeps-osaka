import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';
import Tree from './Tree';

function Wishtree() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Tree />
      </Suspense>
    </Canvas>
  );
}

export default Wishtree;
