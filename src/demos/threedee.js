import Sandpit from '../Sandpit'
import { WebGLRenderer, PerspectiveCamera,
         Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import TrackballControls from 'three-trackballcontrols'


const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.WEBGL)
  sandpit.settings({}, true)

  const renderer = new WebGLRenderer({canvas: sandpit.canvas(), antialias: true})
  renderer.setClearColor(0xffffff, 1)
  renderer.setSize(sandpit.width(), sandpit.height())

  let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.z = 50

  let scene = new Scene()
  scene.add(camera)

  let cube = new Mesh(new BoxGeometry(10, 10, 10), new MeshBasicMaterial({wireframe: true, color: 0x000000}))
  scene.add(cube)

  let controls = new TrackballControls(camera, renderer.domElement)

  sandpit.loop = () => {
    cube.rotation.x += 0.001
    cube.rotation.y += 0.001
    cube.rotation.z += 0.001

    controls.update()
    renderer.render(scene, camera)
  }

  sandpit.start()

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit
}

export default playground
