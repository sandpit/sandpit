/*
 * Credit for this playground goes to Sketch.js, which is
 * wild and you should totally check it out:
 * https://github.com/soulwire/sketch.js
 */

import Sandpit, { Mathematics } from '../Sandpit'

const playground = () => {
  const existingCanvas = document.createElement('canvas')
  const root = document.querySelector('#root')
  root.appendChild(existingCanvas)

  const sandpit = new Sandpit(existingCanvas, Sandpit.CANVAS)
  sandpit.settings = {
    demo: {value: 'multitouch', editable: false, sticky: true},
    autoClear: {value: true},
    maxSize: {value: 40, min: 5, max: 50, step: 1},
    energy: {value: 0.9, min: 0.0, max: 0.9, step: 0.1},
    force: {value: 2, min: 2, max: 30, step: 1},
    decay: {value: 0.99, min: 0.85, max: 0.99, step: 0.01},
    blend: {value: ['darken', 'multiply', 'overlay']}
  }
  sandpit.autoClear = sandpit.settings.autoClear
  const random = sandpit.random()
  const ctx = sandpit.context

  const colors = ['hsl(0, 100%, 100%)', 'hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']
  let enabled = false

  function Particle () {
    this.init = (x, y, radius) => {
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
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Mathematics.TWO_PI)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  let particles = []
  let pool = []

  const spawn = (x, y, pressure = 0) => {
    if (particles.length >= 280) {
      pool.push(particles.shift())
    }

    let particle = pool.length ? pool.pop() : new Particle()
    let size = Mathematics.randomBetween(2, sandpit.settings.maxSize)
    size *= pressure * 2 + 1
    particle.init(x, y, size)

    particle.wander = Mathematics.randomBetween(0.5, 2.0)
    particle.color = Mathematics.randomFrom(colors)
    particle.drag = Mathematics.randomBetween(sandpit.settings.energy, 0.99)

    let theta = random() * Mathematics.TWO_PI
    let force = Mathematics.randomBetween(2, sandpit.settings.force)

    particle.vx = Math.sin(theta) * force
    particle.vy = Math.cos(theta) * force

    particles.push(particle)
  }

  sandpit.setup = () => {
    for (let i = 0; i < 100; i++) {
      let x = (sandpit.width / 2) + Math.sin(i / Math.PI / 5) * 100
      let y = (sandpit.height / 2) + Math.cos(i / Math.PI / 5) * 100
      window.setTimeout(() => {
        spawn(x, y)
      }, i * 10)
    }
    window.setTimeout(() => {
      enabled = true
    }, 500)
  }

  sandpit.loop = () => {
    ctx.globalCompositeOperation = sandpit.settings.blend
    sandpit.autoClear = sandpit.settings.autoClear
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
    if (setting === 'blend') sandpit.clear()
  }

  sandpit.move = () => {
    if (enabled) {
      for (let i = 0; i < sandpit.input.touches.length; i++) {
        let touch = sandpit.input.touches[i]
        let max = Mathematics.randomBetween(1, 4)
        for (let j = 0; j < max; j++) {
          spawn(touch.x, touch.y, touch.force)
        }
      }
    }
  }

  sandpit.start()

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
