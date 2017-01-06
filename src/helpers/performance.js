/**
 * Performance shim, as jsdom doesn't ship with it -
 * primarily for use in the test suites
 * Credit: https://gist.github.com/paulirish/5438650
 * @private
 */
let performance

if ('performance' in window === undefined) {
  performance = {}
} else {
  performance = window.performance
}

Date.now = (Date.now || function () { // thanks IE8
  return new Date().getTime()
})

if (window.performance && 'now' in window.performance === undefined) {
  var nowOffset = Date.now()

  if (performance.timing && performance.timing.navigationStart) {
    nowOffset = performance.timing.navigationStart
  }

  performance.now = function now () {
    return Date.now() - nowOffset
  }
}

export { performance }
