import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import modelData from '../../db/modelData';

export function Models({ index }) {
  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime();
  });
  const gltf = useLoader(GLTFLoader, modelData[`${index}`].url);
  const myModel = useRef();
  return (
    <group dispose={null}>
      <primitive
        ref={myModel}
        object={gltf.scene}
        scale={modelData[`${index}`].scale}
        position={modelData[`${index}`].pos ? modelData[`${index}`].pos : [0, -2, 0]}
      />
    </group>
  );
}
