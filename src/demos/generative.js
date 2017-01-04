import Sandpit from '../Sandpit'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  sandpit.settings = {
    demo: {value: 'generative', editable: false, sticky: true}
  }
  sandpit.autoClear = true
  const ctx = sandpit.context

  sandpit.change = () => {
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)'
    const grid = 50
    Array.from({length: grid}).forEach((v, i) => {
      ctx.beginPath()
      const y = i * grid + ((sandpit.height / 2) - (grid * grid / 2))
      let p = [0, sandpit.height / 2]
      ctx.moveTo(sandpit.width, y)
      ctx.quadraticCurveTo(sandpit.width / 2, sandpit.height / 2, p[0], p[1])
      ctx.stroke()
    })
  }

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
