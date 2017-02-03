import Sandpit, { Vector, Color } from '../../../lib/Sandpit'

let sandpit
const playground = () => {
  // Make the sandpit
  sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  // Set some background colours to use
  const backgrounds = {white: 'hsl(0, 100%, 100%)', aqua: 'hsl(175, 100%, 45%)', blue: 'hsl(185, 69%, 63%)', orange: 'hsl(39, 100%, 54%)', pink: 'hsl(333, 100%, 68%)', green: 'hsl(84, 100%, 68%)', violet: 'hsl(270, 100%, 80%)'}
  sandpit.settings = {
    demo: {value: 'particles', editable: false, sticky: true},
    follow: {value: true},
    gravity: {value: 3, step: 0.1, min: 0.1, max: 5},
    count: {value: 50, step: 1, min: 1, max: 500},
    size: {value: 10, step: 1, min: 1, max: 50},
    strokeWidth: {value: 1, min: 1, max: 10, step: 1},
    background: {value: backgrounds},
    keepDrawing: {value: false}
  }

  let ctx = sandpit.context
  // Make a new random function, using 'Hello!' as the seed - this
  // means that randomness will be the same every time, ensuring you can
  // recreate the same visuals if you keep the same seed
  let random = sandpit.random('Hello!')
  // Create an array to hold the particles
  let particles = []
  // Define the base level of gravity for touches
  let pull = 1

  // The particle function is a self contained class that manages
  // each individual particle
  function Particle () {
    // Take the stroke width from the settings
    const strokeWidth = sandpit.settings.strokeWidth
    // Grab a random background
    const randomBackground = Math.floor(random() * Object.keys(backgrounds).length)
    const color = backgrounds[Object.keys(backgrounds)[randomBackground]]
    // Darken it a little for the stroke
    const strokeStyle = Color(color).darken(0.25).alpha(random() * 0.5 + 0.5).toString()

    // Initialise the x, y, position, velocity, etc
    const initX = random() * sandpit.width
    const initY = random() * sandpit.height
    const position = new Vector(initX, initY)
    const velocity = new Vector(0, 0)
    const acceleration = new Vector(0, 0)
    const attraction = new Vector(0, 0)
    const previousPositions = []

    this.update = () => {
      // Create a new force
      let force = new Vector(Math.cos(random() * Math.PI * 2), Math.sin(random() * Math.PI * 2))
      // Add it to the acceleration
      acceleration.add(new Vector(1 + random() * 0.9, 1 + random() * 0.9).multiply(force))

      // Pull the particles, inexorably, toward the center
      const dx = position.x - sandpit.width / 2
      const dy = position.y - sandpit.height / 2
      let gravity = sandpit.defaults.gravity.max - sandpit.settings.gravity + 0.1
      const fSpring = new Vector(dx, dy).multiplyScalar(-1 / (Math.min(sandpit.width, sandpit.height) * gravity))
      acceleration.add(fSpring)

      if (sandpit.settings.follow) {
        // If follow is enabled in the settings, pull the
        // particles toward the pointer
        if (sandpit.input.x && sandpit.input.y) {
          var mx = sandpit.input.x - position.x
          var my = sandpit.input.y - position.y
          var distance = Math.sqrt(mx * mx + my * my)
          attraction.add(new Vector(mx / distance, my / distance).multiplyScalar(pull * (sandpit.settings.gravity / 5)))
        }
      }

      // Add acceleration and attraction to the velocity
      velocity.add(acceleration)
      velocity.add(attraction)
      velocity.limit(10, 0.9)
      position.add(velocity)
      // Reset acceleration and attraction
      acceleration.multiply(new Vector(0, 0))
      attraction.multiply(new Vector(0, 0))

      // Start drawing the particle
      ctx.beginPath()
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = strokeStyle
      if (previousPositions.length > 1) {
        // Draw along the previous points
        const [first, ...rest] = previousPositions
        ctx.moveTo(first.x, first.y)
        rest.forEach(p => ctx.lineTo(p.x, p.y))
        ctx.lineTo(position.x, position.y)
        // If the previousPositiuons are full,
        // remove the last one
        if (previousPositions.length >= sandpit.settings.size) previousPositions.shift()
      }

      // Add the most recent position to previous positions
      previousPositions.push(position.clone())
      ctx.stroke()
    }
  }

  sandpit.change = () => {
    // When the settings change, update the background color
    // and the particles array
    sandpit.fill(Color(sandpit.settings.background).toString())
    particles = Array(Math.round(sandpit.settings.count)).fill().map(() => new Particle())
  }

  sandpit.loop = () => {
    // If keep drawing is disable, fill the background
    if (!sandpit.settings.keepDrawing) sandpit.fill(Color(sandpit.settings.background).alpha(0.25).toString())
    // Update each particle
    particles.forEach(particle => particle.update())
  }

  // When the mouse is down or a touch is happening, increase
  // the pull toward that point
  sandpit.touch = () => { pull = 3 }
  sandpit.release = () => { pull = 1 }

  // Start the party!
  sandpit.start()
  // Ensure the background color is updated
  sandpit.change()

  // Keep the demo in the query string when resetting
  sandpit.reset = () => {
    // Keep the demo
    window.history.replaceState({}, null, `${sandpit._getPathFromUrl()}?demo=${sandpit.settings.demo}`)
    // Reload the page
    window.location.reload()
  }

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit

  // Update the text color of the overlay to be visible
  document.querySelector('.overlay').style.color = '#000'
  document.querySelector('body').style.background = '#fff'
}

export default playground
