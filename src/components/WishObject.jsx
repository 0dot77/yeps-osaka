import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Models } from '../assets/models/WishModels';

const canvasStyle = {
  height: '84vh',
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: `translateY(-50%)`,
  zIndex: `1`,
};

export default function WishObejct({ objectIndex }) {
  return (
    <Canvas style={{ ...canvasStyle }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Models index={objectIndex} />
      </Suspense>
    </Canvas>
  );
}
