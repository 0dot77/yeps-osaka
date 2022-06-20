import { memo, useEffect, useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import FirstEntrance from './FirstEntrance';
import { Texture, Vector3 } from 'three';
import * as THREE from 'three';
import treeUrl from '../assets/models/tree.ply?url';
import memoUrl from '../assets/models/memo.glb?url';
import spaceUrl from '../assets/models/space2.glb?url';
import rockUrl from '../assets/models/ATrock.glb?url';
import styled from 'styled-components';

const WishTreeContainer = styled.section`
  display: ${(props) => (props.pathname !== '/' ? 'none' : null)};
`;

const TreeContainer = styled.div`
  display: ${(props) => (props.pathname !== '/' ? 'none' : null)};
`;

const LoaderText = styled.div`
  position: absolute;
  z-index: 100;
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 150%);
  /* text-align: center; */
  p {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default function TreeMain({ pathname }) {
  const mountRef = useRef();
  const [isFristEntrance, setIsFirstEntrance] = useState(false);

  // loader state check
  const [modelLoaded, setModelLoaded] = useState(false);

  // WishTree positon
  const WISH_TREE_POSITON_X = -4;
  const WISH_TREE_POSITON_Y = 0;
  const WISH_TREE_POSITON_Z = 0;

  // WishTree Rotation
  const WISH_TREE_ROTATION_X = 14;
  const WISH_TREE_ROTATION_Y = 3.15;
  const WISH_TREE_ROTATION_Z = 0;

  // Memos

  let LOADING_MANAGER = null;

  const loadingScene = {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000),
    box: new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x4444ff })),
  };

  useEffect(() => {
    // loading component 띄워주기
    setModelLoaded(false);
    if (pathname === '/') {
      /**
       * Default Settings
       */
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      const light = new THREE.AmbientLight('#ffffff', 0.4);

      const cameraTarget = new Vector3(0, 0, 0);

      /**
       * Loading Scene
       */
      loadingScene.box.position.set(0, 0, 5);
      loadingScene.camera.lookAt(loadingScene.box.position);
      loadingScene.scene.add(loadingScene.box);
      LOADING_MANAGER = new THREE.LoadingManager();

      LOADING_MANAGER.onProgress = (item, loaded, total) => {
        // console.log(item, loaded, total);
      };

      LOADING_MANAGER.onLoad = () => {
        setModelLoaded(true);
      };

      /**
       * Memo Settings
       */

      renderer.setSize(window.innerWidth, window.innerHeight);

      // THREEJS Subscribed

      mountRef.current.appendChild(renderer.domElement);
      scene.add(light);

      // Tree
      const treeLoader = new PLYLoader(LOADING_MANAGER);
      treeLoader.load(
        treeUrl,
        (geo) => {
          const mat = new THREE.PointsMaterial({ size: 0.01 });
          geo.computeVertexNormals();
          mat.vertexColors = true;
          const mesh = new THREE.Points(geo, mat);
          mesh.position.set(WISH_TREE_POSITON_X, WISH_TREE_POSITON_Y, WISH_TREE_POSITON_Z);
          mesh.rotation.set(WISH_TREE_ROTATION_X, WISH_TREE_ROTATION_Y, WISH_TREE_ROTATION_Z);
          scene.add(mesh);
        },
        (ply) => {},
        () => {
          console.log('load error!');
        }
      );

      // memo

      // const memoLoader = new GLTFLoader();
      // memoLoader.load(
      //   rockUrl,
      //   (gltf) => {
      //     const memo = gltf.scene;
      //     memo.scale.set(0.001, 0.001, 0.001);
      //     memo.position.set(0, 0, 0);
      //     scene.add(memo);
      //   },
      //   () => {
      //     // console.log(loading);
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // );
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.rotateSpeed = 0.1;
      controls.zoomSpeed = 1;
      camera.position.set(0.4, 0.4, 6.3);

      const animate = function () {
        requestAnimationFrame(animate);
        controls.update();
        camera.lookAt(cameraTarget);
        renderer.outputEncoding = THREE.sRGBEncoding;
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
      {modelLoaded ? null : (
        <LoaderText>
          <p>소원 나무를 불러오고 있어요</p>
          <p>願いの木を呼んできています</p>
        </LoaderText>
      )}
      <TreeContainer ref={mountRef} pathname={pathname}></TreeContainer>
    </WishTreeContainer>
  );
}
