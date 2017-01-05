/**
 * Creates a link from the /docs folder to the current documentation
 * @private
 */
var data = require('../package.json')
var version = data.version

var fs = require('fs')

var fileName = './docs/index.html'
var stream = fs.createWriteStream(fileName)

stream.once('open', function (fd) {
  var html = '<html><head><script type="text/javascript">window.location = "Sandpit/' + version + '/";</script></head><body></body></html>'
  stream.end(html)
})
