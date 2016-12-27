import 'whatwg-fetch'
import Sandpit from '../Sandpit'
// Credit: http://www.setgetgo.com/randomword/
const dataAPI = 'http://www.setgetgo.com/randomword/get.php'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)
  sandpit.settings({}, true)

  sandpit.setup = () => {
    sandpit.get(dataAPI).then((response) => {
      sandpit.context().font = '48px serif'
      sandpit.context().fillText(response, sandpit.width() / 2, sandpit.height() / 2)
    })
  }

  sandpit.start()

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit
}

export default playground
