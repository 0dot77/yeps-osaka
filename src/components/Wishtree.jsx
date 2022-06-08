import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Entrance, Icon, ActionContainer, ActionText, Divider, IconBall } from '../styles/Entrance';
import styled from 'styled-components';
import GUI from 'lil-gui';
import { AxesHelper, Vector3 } from 'three';

const WishTreeContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

// GUI
// const gui = new GUI();

// WishTree positon

const WISH_TREE_POSITON_X = 0.04;
const WISH_TREE_POSITON_Y = 0;
const WISH_TREE_POSITON_Z = 4.93;

/**
 * THREE Structure
 * TODO: 성능 개선의 방법?
 */
function Wishtree({ isMenuClicked, isFristEntrance }) {
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
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.01, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const axis = new AxesHelper();
    // scene.add(axis);

    /**
     * Tree Model
     */

    const treeLoader = new PLYLoader();
    treeLoader.load(
      '/assets/models/tree.ply',
      (geo) => {
        const mat = new THREE.MeshBasicMaterial();
        mat.vertexColors = true;
        const mesh = new THREE.Points(geo, mat);
        mesh.rotation.x = 30;
        mesh.scale.multiplyScalar(0.01);
        mesh.position.set(WISH_TREE_POSITON_X, WISH_TREE_POSITON_Y, WISH_TREE_POSITON_Z);
        scene.add(mesh);
        // gui.add(mesh.position, 'z', -10, 10, 0.1);
        // gui.add(mesh.position, 'x', 0.01, 0.1, 0.01);
      },
      (ply) => {
        // console.log((ply.loaded / ply.total) * 100 + '% loaded');
      },
      () => {
        console.log('load error!');
      }
    );

    /**
     * Wish paper Model
     * fbx로 사용하기 위해서는 텍스쳐를 수정해야함
     * 혹은 gltf 확장자를 사용해서 작업을 해야 함...
     */

    // const wishLoader = new FBXLoader();
    // wishLoader.load('/assets/models/memo.fbx', (wish) => {
    //   scene.add(wish);
    // });

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
    controls.rotateSpeed = 0.1;
    controls.panSpeed = 0.5;
    controls.target = new Vector3(0, WISH_TREE_POSITON_Y, WISH_TREE_POSITON_Z);
    controls.update();
    camera.position.z = 5.5;

    /**
     * Rendering
     */

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const animate = function () {
      if (mountRef !== null) {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
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

    return () => {
      if (isMenuClicked) {
        mountRef.current.remove();
      }
    };
  }, []);
  return (
    <>
      {isFristEntrance ? null : (
        <Entrance>
          <Divider />
          <ActionContainer>
            <Icon>
              <IconBall />
            </Icon>
            <ActionText>scroll to zoom in-out</ActionText>
          </ActionContainer>
        </Entrance>
      )}
      <WishTreeContainer ref={mountRef}></WishTreeContainer>;
    </>
  );
}

export default Wishtree;
