import Sandpit, { Color } from '../Sandpit'
import { WebGLRenderer, PerspectiveCamera, PCFSoftShadowMap,
         SpotLight, Scene, BoxGeometry, MeshPhongMaterial, Mesh } from 'three'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.WEBGL)
  sandpit.settings = {
    demo: {value: 'accelerometer', editable: false, sticky: true},
    scale: {value: 1, step: 0.25, min: 0.25, max: 1.5},
    cube: {value: {white: 'hsl(0, 100%, 100%)', aqua: 'hsl(175, 100%, 45%)', blue: 'hsl(185, 69%, 63%)', orange: 'hsl(39, 100%, 54%)', pink: 'hsl(333, 100%, 68%)', green: 'hsl(84, 100%, 68%)', violet: 'hsl(270, 100%, 80%)'}},
    surface: {value: '#333', color: true}
  }

  const renderer = new WebGLRenderer({canvas: sandpit.canvas, antialias: true})
  renderer.setClearColor(0x000000, 1)
  renderer.shadowMap.type = PCFSoftShadowMap
  renderer.shadowMap.enabled = true

  let camera = new PerspectiveCamera(35, sandpit.width / sandpit.height, 1, 10000)
  camera.position.set(0, 0, 500)

  let scene = new Scene()
  scene.add(camera)

  let cube = new Mesh(new BoxGeometry(100, 100, 100), new MeshPhongMaterial({color: Color(sandpit.settings.cube).toString()}))
  cube.castShadow = true
  cube.rotation.set(45, 45, 45)
  camera.lookAt(cube)
  scene.add(cube)

  let plane = new Mesh(new BoxGeometry(5000, 5000, 5), new MeshPhongMaterial({color: Color(sandpit.settings.surface).toString()}))
  plane.position.z = -150
  plane.receiveShadow = true
  scene.add(plane)

  let spotlight = new SpotLight(0xffffff)
  spotlight.position.set(-50, 0, 250)
  spotlight.angle = 0.4 // The width of the spotlight
  spotlight.penumbra = 1 // How much the spotlight will fade out at the edges
  spotlight.intensity = 0.75 // How intense it is
  spotlight.shadow.mapSize.width = 2048
  spotlight.shadow.mapSize.height = 2048
  spotlight.castShadow = true
  scene.add(spotlight)

  sandpit.change = () => {
    cube.scale.set(sandpit.settings.scale, sandpit.settings.scale, sandpit.settings.scale)
    cube.material.color.set(Color(sandpit.settings.cube).toString())
    plane.material.color.set(Color(sandpit.settings.surface).toString())
  }

  sandpit.loop = () => {
    if (cube) {
      if (sandpit.input.accelerometer) {
        cube.rotation.x += sandpit.input.accelerometer.xAxis / 5000
        cube.rotation.y += sandpit.input.accelerometer.yAxis / 5000
      } else {
        cube.rotation.x += 0.001
        cube.rotation.y += 0.001
        cube.rotation.z += 0.001
      }
    }
    renderer.render(scene, camera)
  }

  sandpit.resize = () => {
    camera.aspect = sandpit.width / sandpit.height
    camera.updateProjectionMatrix()
  }

  sandpit.start()
  sandpit.change()

  // Keep the demo in the query string when resetting
  sandpit.reset = (reload = true) => {
    // Keep the demo
    window.history.replaceState({}, null, `/?demo=${sandpit.settings.demo}`)
    // Reload the page
    if (reload) window.location.reload()
  }

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit

  // Update the text color of the overlay to be visible
  document.querySelector('.overlay').style.color = '#fff'
}

export default playground
