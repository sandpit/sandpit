import 'whatwg-fetch'
import Sandpit from '../Sandpit'
// Credit: http://www.setgetgo.com/randomword/
const dataAPI = 'http://www.setgetgo.com/randomword/get.php'

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
      loading = false
      sandpit.clear()
      ctx.fillStyle = '#000'
      ctx.textAlign = 'center'
      ctx.font = '48px sans-serif'
      ctx.fillText(response, sandpit.width() / 2, sandpit.height() / 2)
      ctx.font = '16px sans-serif'
      ctx.fillText('WORD OF THE DAY'.split('').join(String.fromCharCode(8202)), sandpit.width() / 2, sandpit.height() / 2 - 50)
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

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit
}

export default playground
