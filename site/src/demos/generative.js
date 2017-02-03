import Sandpit, { Mathematics } from '../../../lib/Sandpit'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  sandpit.settings = {
    demo: {value: 'generative', editable: false, sticky: true}
  }
  // sandpit.autoClear = true
  const ctx = sandpit.context
  ctx.shadowBlur = 5
  ctx.shadowColor = `rgba(255, 0, 0, 0.5)`
  ctx.strokeStyle = `rgba(255, 0, 0, 0.1)`

  // Grab a random x, y and corner of the canvas
  const x = Math.random() * sandpit.width
  const y = Math.random() * sandpit.height
  const corner = Mathematics.randomFrom([[0, 0], [sandpit.width, 0], [sandpit.width, sandpit.height], [0, sandpit.height]])

  sandpit.loop = () => {
    // The grid represents the total number of lines to be illustrated
    const grid = sandpit.height / 500
    Array.from({length: grid}).forEach((v, i) => {
      // There is some randomness here,
      // to give different illustrations each time
      ctx.beginPath()
      ctx.moveTo(corner[0], corner[1])
      ctx.quadraticCurveTo(x, y - sandpit.time, sandpit.width - sandpit.time, sandpit.height / grid * i + (Math.sin((sandpit.time + (i * 5)) / 1000) * 5000))
      ctx.bezierCurveTo(0, 0, sandpit.width - sandpit.time, sandpit.height / 2, corner[0], corner[1] - sandpit.time)
      ctx.stroke()
    })
  }

  // Let's do this!
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
