import Sandpit, { Color } from '../../../lib/Sandpit'
const dataAPI = 'https://randomuser.me/api/'

const playground = () => {
  // Make a new sandpit
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  const backgrounds = {white: 'hsl(0, 100%, 100%)', aqua: 'hsl(175, 100%, 45%)', blue: 'hsl(185, 69%, 63%)', orange: 'hsl(39, 100%, 54%)', pink: 'hsl(333, 100%, 68%)', green: 'hsl(84, 100%, 68%)', violet: 'hsl(270, 100%, 80%)'}
  const randomBackground = Math.floor(Math.random() * Object.keys(backgrounds).length)
  // Grab a background from a selection of backgrounds
  const background = backgrounds[Object.keys(backgrounds)[randomBackground]]

  // When initialised, don't autoclear, and flag that
  // the data is currently loading
  let loading = true
  sandpit.autoClear = false
  sandpit.settings = {
    demo: {value: 'data', editable: false, sticky: true},
    clear: false,
    reset: false
  }
  const ctx = sandpit.context

  sandpit.setup = () => {
    // Grab a random user
    sandpit.get(dataAPI).then((response) => {
      // Flag that loading has completed
      loading = false
      // Parse the response
      response = JSON.parse(response).results[0]
      // Capitalise each word
      let name = [response.name.first, response.name.last].map(name => { return name.charAt(0).toUpperCase() + name.slice(1) }).join(' ')
      // Fill the background with the initial colour
      sandpit.fill(background)
      // Add the text
      ctx.fillStyle = '#000'
      ctx.textAlign = 'center'
      ctx.font = '48px sans-serif'
      ctx.fillText(name, sandpit.width / 2, sandpit.height / 2 + 50)
      ctx.font = '16px sans-serif'
      ctx.fillText('RANDOM NAME GENERATOR'.split('').join(String.fromCharCode(8202)), sandpit.width / 2, sandpit.height / 2)
    })
  }

  sandpit.loop = () => {
    if (loading) {
      // While waiting for the data that has been
      // fetched in setup to load, illustrate a spinner
      ctx.beginPath()
      ctx.arc(
        (sandpit.width / 2 + Math.sin(sandpit.time / Math.PI) * 15) - 1,
        (sandpit.height / 2 + 25 + Math.cos(sandpit.time / Math.PI) * 15) - 1,
        2, 0, 2 * Math.PI)
      ctx.fillStyle = '#000'
      ctx.fill()
      // Slowly fade it out over each frame
      ctx.fillStyle = Color(background).alpha(0.25).toString()
      ctx.fillRect(0, 0, sandpit.width, sandpit.height)
    }
  }

  // Get this party started!
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
