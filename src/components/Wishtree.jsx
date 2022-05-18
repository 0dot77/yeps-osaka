import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
`;
/**
 * THREE Structure
 */
function Wishtree() {
  const mountRef = useRef(null);

  useEffect(() => {
    /**
     * Basic Settings
     */

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    /**
     * Tree Model
     */

    const treeLoader = new PLYLoader();
    treeLoader.load(
      '/assets/models/tree.ply',
      (geo) => {
        const mat = new THREE.MeshBasicMaterial({ size: 0.001 });
        mat.vertexColors = true;
        const mesh = new THREE.Points(geo, mat);
        mesh.rotation.x = 30;
        mesh.position.x = 2;
        mesh.position.y = -0.25;
        mesh.position.z = 1;
        mesh.scale.multiplyScalar(0.5);
        // mesh.castShadow = true;
        // mesh.receiveShadow = true;

        scene.add(mesh);
      },
      (ply) => {
        console.log((ply.loaded / ply.total) * 100 + '% loaded');
      },
      () => {
        console.log('load error!');
      }
    );

    /**
     * Light
     */

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    /**
     * Camera
     */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.update();
    camera.position.z = 5;

    /**
     * Rendering
     */

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', () => {
      // Update Sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update Camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update Renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);
  return (
    <Container>
      <div ref={mountRef}></div>;
    </Container>
  );
}

export default Wishtree;
