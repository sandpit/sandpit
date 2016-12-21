import './index.css'
import Sandbox from './Sandbox'

let sandbox = new Sandbox('#root', Sandbox.CANVAS)
sandbox.settings({size: 2, radius: 100, color: 255}, true)

let canvas = sandbox.canvas()
let ctx = sandbox.context()

let time = 0.0
sandbox.loop = () => {
  ctx.fillStyle = `rgba(255, 255, ${sandbox.settings.color}, 0.5)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.fillRect(
    (canvas.width / 2 + Math.sin(time) * sandbox.settings.radius) - sandbox.settings.size / 2,
    (canvas.height / 2 + Math.cos(time) * sandbox.settings.radius) - sandbox.settings.size / 2,
    sandbox.settings.size,
    sandbox.settings.size
  )
  time += 0.1
}

sandbox.move = () => {
  console.log(sandbox.input.x, sandbox.input.y)
}

sandbox.start()
