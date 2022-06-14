import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { AxesHelper, Vector3 } from 'three';
import treeUrl from './tree.ply?url';
import GUI from 'lil-gui';
import { menuClicked } from '../../atom';

// WishTree positon
const WISH_TREE_POSITON_X = -8;
const WISH_TREE_POSITON_Y = -1;
const WISH_TREE_POSITON_Z = -3;

// WishTree Rotation
const WISH_TREE_ROTATION_X = 14;
const WISH_TREE_ROTATION_Y = 3.15;
const WISH_TREE_ROTATION_Z = 0;

/**
 * THREE Structure
 * TODO: 성능 개선의 방법?
 */

export default function pointTree(mountRef) {
  const cameraTarget = new Vector3(0, 0, 0);
  THREE.Cache.enabled = true;

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: mountRef.current });

  /**
   * Tree Model
   */

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

  /**
   * Wish paper Model
   * fbx로 사용하기 위해서는 텍스쳐를 수정해야함
   * 혹은 gltf 확장자를 사용해서 작업을 해야 함...
   */

  /**
   * Camera
   */
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.rotateSpeed = 0.1;
  controls.zoomSpeed = 0.05;
  camera.position.set(0.4, 0.4, 6.3);

  /**
   * Rendering
   */

  renderer.setSize(window.innerWidth, window.innerHeight);
  // mountRef.current = renderer.domElement;
  // mountRef.current.appendChild(renderer.domElement);

  const animate = function () {
    if (mountRef !== null) {
      requestAnimationFrame(animate);
      controls.update();
      camera.lookAt(cameraTarget);
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
    renderer.forceContextLoss();
    renderer.dispose();
    if (menuClicked) {
      mountRef.current.remove();
    }
  };
}
