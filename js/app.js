import { Scene, WebGLRenderer, GridHelper, DirectionalLight, AmbientLight } from "three";
import { PerspectiveCamera } from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls" 
import { IFCLoader } from "web-ifc-three/IFCLoader";

const scene = new Scene();
const size = {
    width: window.innerWidth,
    height: window.innerHeight, 
}
const canvas = document.querySelector("#three-canvas");

const lightColor = 0xffffff;

const ambientLight = new AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(lightColor, 1);
directionalLight.position.set(0, 10, 0);
directionalLight.target.position.set(-5, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 15;
camera.position.y = 13;
camera.position.x = 8;

console.log("AMit");
console.log(size.width);
const renderer = new WebGLRenderer({canvas: canvas, alpha:true})
renderer.setSize(size.width,size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const grid = new GridHelper(50, 30);
scene.add(grid);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.target.set(-2, 0, 0);

const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  
  animate();

//loadng ifc data

const ifc = new IFCLoader();
ifc.ifcManager.setWasmPath("../node_modules/web-ifc/");

const input = document.getElementById("ifc-data");
  input.addEventListener(
    "change",
    (changed) => {
      const ifcURL = URL.createObjectURL(changed.target.files[0]);
      ifc.load(ifcURL, (ifcModel) => scene.add(ifcModel.mesh));
    },
    false
  );


