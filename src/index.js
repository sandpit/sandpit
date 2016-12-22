import './index.css'
import Sandpit from './Sandpit'

let sandpit = new Sandpit('#root', Sandpit.CANVAS)
sandpit.settings({size: 2, radius: 100, color: 255}, true)

let canvas = sandpit.canvas()
let ctx = sandpit.context()

let time = 0.0
sandpit.loop = () => {
  ctx.fillStyle = `rgba(255, 255, ${sandpit.settings.color}, 0.5)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.fillRect(
    (canvas.width / 2 + Math.sin(time) * sandpit.settings.radius) - sandpit.settings.size / 2,
    (canvas.height / 2 + Math.cos(time) * sandpit.settings.radius) - sandpit.settings.size / 2,
    sandpit.settings.size,
    sandpit.settings.size
  )
  time += 0.1
}

sandpit.move = () => {
  console.log(sandpit.input.x, sandpit.input.y)
}

sandpit.start()
