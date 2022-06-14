import { Canvas } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import treeUrl from '../assets/models/tree.stl?url';

export default function Model() {
  const ref = useRef();
  const [geometry, setGeometry] = useState();
  useEffect(() => {
    const stlLoader = new STLLoader();
    stlLoader.load(treeUrl, (geo) => {
      setGeometry(geo);
    });
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <mesh ref={ref} geometry={geometry}></mesh>
    </Canvas>
  );
}
