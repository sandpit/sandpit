import Sandpit, { Vector, Color } from '../Sandpit'

let sandpit
const playground = () => {
  sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  const backgrounds = {white: 'hsl(0, 100%, 100%)', aqua: 'hsl(175, 100%, 45%)', blue: 'hsl(185, 69%, 63%)', orange: 'hsl(39, 100%, 54%)', pink: 'hsl(333, 100%, 68%)', green: 'hsl(84, 100%, 68%)', violet: 'hsl(270, 100%, 80%)'}
  sandpit.settings({
    demo: {value: 'particles', editable: false, sticky: true},
    follow: {value: true},
    gravity: {value: 3, step: 0.1, min: 0.1, max: 5},
    count: {value: 50, step: 1, min: 1, max: 500},
    size: {value: 10, step: 1, min: 1, max: 50},
    strokeWidth: {value: 1, min: 1, max: 10, step: 1},
    background: {value: backgrounds},
    keepDrawing: {value: false}
  }, true)

  let ctx = sandpit.context()
  let random = sandpit.random('Hello!')
  let pull = 1

  function Particle () {
    const strokeWidth = sandpit.settings.strokeWidth
    const randomBackground = Math.floor(random() * Object.keys(backgrounds).length)
    const color = backgrounds[Object.keys(backgrounds)[randomBackground]]
    const strokeStyle = Color(color).darken(0.25).alpha(random() * 0.5 + 0.5).toString()

    const initX = random() * sandpit.width()
    const initY = random() * sandpit.height()
    const position = new Vector(initX, initY)
    const velocity = new Vector(0, 0)
    const acceleration = new Vector(0, 0)
    const attraction = new Vector(0, 0)
    const previousPositions = []

    this.update = () => {
      let force = new Vector(Math.cos(random() * Math.PI * 2), Math.sin(random() * Math.PI * 2))
      acceleration.add(new Vector(1 + random() * 0.9, 1 + random() * 0.9).multiply(force))

      const dx = position.x - sandpit.width() / 2
      const dy = position.y - sandpit.height() / 2
      let gravity = sandpit.defaults.gravity.max - sandpit.settings.gravity + 0.1
      const fSpring = new Vector(dx, dy).multiplyScalar(-1 / (Math.min(sandpit.width(), sandpit.height()) * gravity))
      acceleration.add(fSpring)

      if (sandpit.settings.follow) {
        if (sandpit.input.x && sandpit.input.y) {
          var mx = sandpit.input.x - position.x
          var my = sandpit.input.y - position.y
          var distance = Math.sqrt(mx * mx + my * my)
          attraction.add(new Vector(mx / distance, my / distance).multiplyScalar(pull * (sandpit.settings.gravity / 5)))
        }
      }

      velocity.add(acceleration)
      velocity.add(attraction)
      velocity.limit(10, 0.9)
      position.add(velocity)
      acceleration.multiply(new Vector(0, 0))
      attraction.multiply(new Vector(0, 0))

      ctx.beginPath()
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = strokeStyle
      if (previousPositions.length > 1) {
        const [first, ...rest] = previousPositions
        ctx.moveTo(first.x, first.y)
        rest.forEach(p => ctx.lineTo(p.x, p.y))
        ctx.lineTo(position.x, position.y)
        if (previousPositions.length >= sandpit.settings.size && !sandpit.settings.keepDrawing) previousPositions.shift()
      }

      previousPositions.push(position.clone())
      ctx.stroke()
    }
  }

  let particles = []

  sandpit.change = () => {
    particles = Array(Math.round(sandpit.settings.count)).fill().map(() => new Particle())
  }

  sandpit.loop = () => {
    sandpit.fill(Color(sandpit.settings.background).alpha(0.25).toString())
    particles.forEach(particle => particle.update())
  }

  sandpit.touch = () => { pull = 3 }
  sandpit.release = () => { pull = 1 }

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

  // Update the text color of the overlay to be visible
  document.querySelector('.overlay').style.color = '#000'
}

export default playground
