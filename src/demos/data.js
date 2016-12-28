import 'whatwg-fetch'
import Sandpit from '../Sandpit'
const dataAPI = 'https://randomuser.me/api/'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  sandpit.autoClear(false)
  sandpit.settings({
    demo: {value: 'data', editable: false, sticky: true}
  })
  const ctx = sandpit.context()

  let loading = true
  sandpit.setup = () => {
    sandpit.get(dataAPI).then((response) => {
      response = JSON.parse(response).results[0]
      let name = [response.name.first, response.name.last].map(name => { return name.charAt(0).toUpperCase() + name.slice(1) }).join(' ')
      loading = false
      sandpit.clear()
      ctx.fillStyle = '#000'
      ctx.textAlign = 'center'
      ctx.font = '48px sans-serif'
      ctx.fillText(name, sandpit.width() / 2, sandpit.height() / 2)
      ctx.font = '16px sans-serif'
      ctx.fillText('RANDOM NAME GENERATOR'.split('').join(String.fromCharCode(8202)), sandpit.width() / 2, sandpit.height() / 2 - 50)
    })
  }

  sandpit.loop = () => {
    if (loading) {
      ctx.beginPath()
      ctx.arc(
        (sandpit.width() / 2 + Math.sin(sandpit.time() / Math.PI) * 15) - 1,
        (sandpit.height() / 2 + Math.cos(sandpit.time() / Math.PI) * 15) - 1,
        2, 0, 2 * Math.PI)
      ctx.fillStyle = '#000'
      ctx.fill()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
      ctx.fillRect(0, 0, sandpit.width(), sandpit.height())
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
}

export default playground
