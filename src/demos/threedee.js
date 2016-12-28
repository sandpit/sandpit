import Sandpit from '../Sandpit'
import { WebGLRenderer, PerspectiveCamera,
         Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import TrackballControls from 'three-trackballcontrols'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.WEBGL)
  sandpit.settings({
    demo: {value: 'threedee', editable: false, sticky: true},
    scale: {value: 1, step: 1, min: 1, max: 10}
  }, true)

  const renderer = new WebGLRenderer({canvas: sandpit.canvas(), antialias: true})
  renderer.setClearColor(0xffffff, 1)
  renderer.setSize(sandpit.width(), sandpit.height())

  let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.z = 50

  let scene = new Scene()
  scene.add(camera)

  let controls = new TrackballControls(camera, renderer.domElement)

  let cube = new Mesh(new BoxGeometry(10, 10, 10), new MeshBasicMaterial({wireframe: true, color: 0x000000}))
  scene.add(cube)

  sandpit.change = () => {
    cube.scale.set(sandpit.settings.scale, sandpit.settings.scale, sandpit.settings.scale)
  }

  sandpit.loop = () => {
    if (cube) {
      cube.rotation.x += 0.001
      cube.rotation.y += 0.001
      cube.rotation.z += 0.001
    }

    controls.update()
    renderer.render(scene, camera)
  }

  sandpit.start()
  sandpit.change()

  // Keep the demo in the query string when resetting
  sandpit.reset = () => {
    // Keep the demo
    window.history.pushState({}, null, `/?demo=${sandpit.settings.demo}`)
    // Reload the page
    window.location.reload()
  }

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit
}

export default playground
