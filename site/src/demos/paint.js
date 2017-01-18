/*
 * Credit for this playground, once again, goes to Sketch.js,
 * which is wild and you should totally check it out:
 * https://github.com/soulwire/sketch.js
 */
import Sandpit from '../../../lib/Sandpit'

const playground = () => {
  // Make a new sandpit
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  // Ensure it won't clear the contents of the canvas
  // on each loop - it is automatically false, but just to show
  // you can change whether the sandpit automatically clears
  sandpit.autoClear = false
  sandpit.settings = {demo: {value: 'paint', editable: false, sticky: true}}
  const ctx = sandpit.context

  // Set up some background colours and a base radius
  const backgrounds = ['hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']
  let radius = 0

  sandpit.loop = () => {
    // Create a radius that grows and shrinks over time, mimicking
    // a paintbrush style
    radius = 2 + Math.abs(Math.sin(sandpit.time * 0.05) * 20)
  }

  sandpit.move = () => {
    sandpit.input.touches.forEach((touch, i) => {
      // For each touch, do something - it's worth noting that
      // if the interaction is using a mouse, the first touch will
      // be the x and y of the mouse, so you can handle touches and
      // know you're supporting both mouse and tablet interfaces
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      // Set the fill to a background based on how many touches are
      // currently happening on the canvas
      ctx.fillStyle = ctx.strokeStyle = backgrounds[i % backgrounds.length]
      // If the device supports force, use force, otherwise use
      // the radius we're updating in the loop
      ctx.lineWidth = touch.force ? touch.force * 50 : radius

      ctx.beginPath()
      // If there is a previous touch point, draw from there
      // to ensure continuous lines
      if (touch.previousX && touch.previousY) ctx.moveTo(touch.previousX, touch.previousY)
      // Draw to the current touch point
      ctx.lineTo(touch.x, touch.y)
      ctx.stroke()
    })
  }

  // Start the sandpit
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
