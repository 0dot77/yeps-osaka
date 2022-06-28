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
      <directionalLight intensity={1} position={[0, 20, 10]} lookAt={[0, -2, 0]} />
      <Suspense fallback={null}>
        <Models index={objectIndex} />
      </Suspense>
    </Canvas>
  );
}
