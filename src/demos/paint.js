/*
 * Credit for this playground, once again, goes to Sketch.js,
 * which is wild and you should totally check it out:
 * https://github.com/soulwire/sketch.js
 */
import Sandpit from '../Sandpit'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  const backgrounds = ['hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']

  sandpit.autoClear(false)
  sandpit.settings({
    demo: {value: 'paint', editable: false, sticky: true}
  })
  const ctx = sandpit.context()
  let radius = 0

  sandpit.loop = () => {
    radius = 2 + Math.abs(Math.sin(sandpit.time() * 0.05) * 20)
  }

  sandpit.move = () => {
    sandpit.input.touches.forEach((touch, i) => {
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.fillStyle = ctx.strokeStyle = backgrounds[i % backgrounds.length]
      ctx.lineWidth = touch.force ? touch.force * 50 : radius

      ctx.beginPath()
      if (touch.previousX && touch.previousY) ctx.moveTo(touch.previousX, touch.previousY)
      ctx.lineTo(touch.x, touch.y)
      ctx.stroke()
    })
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
