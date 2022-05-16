import { Html, useProgress } from '@react-three/drei';
import React from 'react';

/**
 * Model rendering 할 때 보여주는 이미지
 */

export default function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress}% loaded</Html>;
}
