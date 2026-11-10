import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// setup of 3.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// setup of GLTFLoader
const loader = new GLTFLoader();
const loadedData = await loader.loadAsync('./threed-images/Flamingo.glb');

// flamingo import
const flamingo = loadedData.scene;
scene.add(flamingo);

// adjust the flamingo's position and size
flamingo.position.set(0, 0, 0);
flamingo.scale.set(0.1, 0.1, 0.1);


// changed the render so I dont have to create a seperate canvas element!
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

document.querySelector('#scene-container').appendChild(renderer.domElement);

//Set the pixel ratio, the size, and the camera position
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);


// ambient lighting 
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

// direct lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);


// orbit control
const controls = new OrbitControls(camera, renderer.domElement)

// background
const spaceTexture = new THREE.TextureLoader().load('./threed-images/sky.avif');
scene.background = spaceTexture;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();