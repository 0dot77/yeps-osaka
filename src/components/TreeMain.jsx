import { useEffect, useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import FirstEntrance from './FirstEntrance';
import { Vector3 } from 'three';
import * as THREE from 'three';
import treeUrl from '../assets/models/tree.ply?url';
import styled from 'styled-components';

const WishTreeContainer = styled.section`
  display: ${(props) => (props.pathname !== '/' ? 'none' : null)};
`;

const TreeContainer = styled.div`
  display: ${(props) => (props.pathname !== '/' ? 'none' : null)};
`;

export default function TreeMain({ pathname }) {
  const mountRef = useRef();
  const [isFristEntrance, setIsFirstEntrance] = useState(false);

  // WishTree positon
  const WISH_TREE_POSITON_X = -8;
  const WISH_TREE_POSITON_Y = -1;
  const WISH_TREE_POSITON_Z = -3;

  // WishTree Rotation
  const WISH_TREE_ROTATION_X = 14;
  const WISH_TREE_ROTATION_Y = 3.15;
  const WISH_TREE_ROTATION_Z = 0;

  useEffect(() => {
    if (pathname === '/') {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      var renderer = new THREE.WebGLRenderer({ alpha: true });
      const cameraTarget = new Vector3(0, 0, 0);

      renderer.setSize(window.innerWidth, window.innerHeight);

      // THREEJS Subscribed

      mountRef.current.appendChild(renderer.domElement);

      const treeLoader = new PLYLoader();
      treeLoader.load(
        treeUrl,
        (geo) => {
          const mat = new THREE.MeshBasicMaterial();
          geo.computeVertexNormals();
          mat.vertexColors = true;
          const mesh = new THREE.Points(geo, mat);
          mesh.scale.multiplyScalar(2);
          mesh.position.set(WISH_TREE_POSITON_X, WISH_TREE_POSITON_Y, WISH_TREE_POSITON_Z);
          mesh.rotation.set(WISH_TREE_ROTATION_X, WISH_TREE_ROTATION_Y, WISH_TREE_ROTATION_Z);
          scene.add(mesh);
        },
        (ply) => {},
        () => {
          console.log('load error!');
        }
      );

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.rotateSpeed = 0.1;
      controls.zoomSpeed = 0.05;
      camera.position.set(0.4, 0.4, 6.3);

      var animate = function () {
        requestAnimationFrame(animate);
        controls.update();
        camera.lookAt(cameraTarget);
        renderer.render(scene, camera);
      };

      let onWindowResize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', onWindowResize, false);

      animate();

      //! useEffect clear function 골치아픔...
      return () => {
        mountRef.current.removeChild(renderer.domElement);
      };
    }
  }, [pathname]);

  return (
    <WishTreeContainer pathname={pathname}>
      {isFristEntrance ? null : <FirstEntrance setIsFirstEntrance={setIsFirstEntrance} />}
      <TreeContainer ref={mountRef} pathname={pathname}></TreeContainer>
    </WishTreeContainer>
  );
}