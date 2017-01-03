/*
 * Credit for this playground, once again, goes to Sketch.js,
 * which is wild and you should totally check it out:
 * https://github.com/soulwire/sketch.js
 */
import Sandpit, { Color, Mathematics } from '../Sandpit'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.WEBGL)
  const ctx = sandpit.context()
  sandpit.autoClear(false)
  sandpit.settings({
    demo: {value: 'webgl', editable: false, sticky: true}
  })

  sandpit.setup = () => {
    const backgrounds = ['hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)']
    let background = Color(Mathematics.randomFrom(backgrounds)).rgb().object()
    // Set clear color to black, fully opaque
    ctx.clearColor(background.r / 255, background.g / 255, background.b / 255, 1.0)
    // Enable depth testing
    ctx.enable(ctx.DEPTH_TEST)
    // Near things obscure far things
    ctx.depthFunc(ctx.LEQUAL)
    // Clear the color as well as the depth buffer.
    ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT)
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
