/*
 * Credit for this playground goes to Sketch.js, which is
 * wild and you should totally check it out:
 * https://github.com/soulwire/sketch.js
 */

import Sandpit, { Mathematics } from '../../../lib/Sandpit'

const playground = () => {
  // Sandpit supports using an existing canvas - just pass
  // the reference directly to the constructor
  const existingCanvas = document.createElement('canvas')
  const root = document.querySelector('#root')
  root.appendChild(existingCanvas)

  // Initialise the sandpit and set the settings
  const sandpit = new Sandpit(existingCanvas, Sandpit.CANVAS, {stats: true})
  console.log(sandpit.stats)
  sandpit.settings = {
    demo: {value: 'multitouch', editable: false, sticky: true},
    autoClear: {value: true},
    maxSize: {value: 50, min: 5, max: 50, step: 1},
    energy: {value: 0.9, min: 0.0, max: 0.9, step: 0.1},
    force: {value: 2, min: 2, max: 30, step: 1},
    decay: {value: 0.92, min: 0.85, max: 0.99, step: 0.01},
    blend: {value: ['darken', 'multiply', 'overlay']}
  }

  // As soon as settings are set, they are accessible in their
  // simplified form - this will return true, rather than {value: true}
  sandpit.autoClear = sandpit.settings.autoClear
  // Grab a seeded random, for consistent random results
  const random = sandpit.random()
  const ctx = sandpit.context

  // Define some colours
  const colors = ['hsl(0, 100%, 100%)', 'hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']

  // The particle definition, including initialisation,
  // movement, and drawing
  function Particle () {
    this.init = (x, y, radius) => {
      // Define default values, using the x, y and radius
      // if they are available
      this.alive = true

      this.radius = radius || 10
      this.wander = 0.15
      this.theta = random() * Mathematics.TWO_PI
      this.drag = 0.92
      this.color = '#fff'

      this.x = x || 0.0
      this.y = y || 0.0

      this.vx = 0.0
      this.vy = 0.0
    }

    this.move = () => {
      // Make the particle move based on its previous
      // position, drag, and size
      this.x += this.vx
      this.y += this.vy

      this.vx *= this.drag
      this.vy *= this.drag

      this.theta += Mathematics.randomBetween(-0.5, 0.5) * this.wander
      this.vx += Math.sin(this.theta) * 0.1
      this.vy += Math.cos(this.theta) * 0.1

      this.radius *= sandpit.settings.decay
      this.alive = this.radius > 0.5
    }

    this.draw = () => {
      // Draw it on the canvas
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Mathematics.TWO_PI)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  // Set up the particles and pool arrays, for holding existing
  // particles and reusing ones that are no longer alive
  let particles = []
  let pool = []

  const spawn = (x, y, pressure = 0) => {
    // If there are too many particles, put them into the
    // pool to be reused
    if (particles.length >= 280) {
      pool.push(particles.shift())
    }

    // Set up the particle
    let particle = pool.length ? pool.pop() : new Particle()
    let size = Mathematics.randomBetween(2, sandpit.settings.maxSize)
    size *= pressure * 2 + 1
    particle.init(x, y, size)

    // Define its characteristics
    particle.wander = Mathematics.randomBetween(0.5, 2.0)
    particle.color = Mathematics.randomFrom(colors)
    particle.drag = Mathematics.randomBetween(sandpit.settings.energy, 0.99)

    let theta = random() * Mathematics.TWO_PI
    let force = Mathematics.randomBetween(2, sandpit.settings.force)

    particle.vx = Math.sin(theta) * force
    particle.vy = Math.cos(theta) * force

    // Push it into the particle array
    particles.push(particle)
  }

  sandpit.setup = () => {
    // Put 100 particles on the canvas to start with, in a circle
    for (let i = 0; i < 100; i++) {
      let x = (sandpit.width / 2) + Math.sin(i / Math.PI / 5) * 100
      let y = (sandpit.height / 2) + Math.cos(i / Math.PI / 5) * 100
      window.setTimeout(() => {
        spawn(x, y)
      }, i * 10)
    }
  }

  sandpit.loop = () => {
    // These can be stored on the loop, or you could check for each
    // setting individually in change() and handle them differently
    ctx.globalCompositeOperation = sandpit.settings.blend
    sandpit.autoClear = sandpit.settings.autoClear
    // For each particle that is alive, move it, then draw it,
    // otherwise move it into the pool to be reused
    for (let i = particles.length - 1; i >= 0; i--) {
      let particle = particles[i]
      if (particle.alive) {
        particle.move()
        particle.draw()
      } else {
        pool.push(particles.splice(i, 1)[0])
      }
    }
  }

  sandpit.change = (setting) => {
    // If the setting that is changed is 'blend', clear
    // the canvas
    if (setting === 'blend') sandpit.clear()
  }

  sandpit.move = () => {
    // When the mousemove or touchmove events are fired, spawn
    // new particles - supporting multitouch and the mouse through
    // the same input.touches object
    for (let i = 0; i < sandpit.input.touches.length; i++) {
      let touch = sandpit.input.touches[i]
      let max = Mathematics.randomBetween(1, 4)
      for (let j = 0; j < max; j++) {
        spawn(touch.x, touch.y, touch.force)
      }
    }
  }

  // Let the party begin
  sandpit.start()

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
