import React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

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
    const renderer = new THREE.WebGLRenderer();

    /**
     * Text
     */
    const textureLoader = new THREE.TextureLoader();
    const matcapTexture = textureLoader.load(`/assets/textures/font-texture.png`);
    const fontloader = new FontLoader();
    fontloader.load("/assets/fonts/Oleo Script Swash Caps_Regular.json", (font) => {
      const textGeometry = new TextGeometry("YEPS!", {
        font,
        size: 1,
        height: 0.2,
        curveSegments: 1,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 4,
      });

      textGeometry.center();
      const mat = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
      const text = new THREE.Mesh(textGeometry, mat);
      scene.add(text);
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    /**
     * Camera
     */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.update();
    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", () => {
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
  return <div ref={mountRef}></div>;
}

export default Wishtree;
