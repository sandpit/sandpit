/**
 * Performance shim, as jsdom doesn't ship with it -
 * primarily for use in the test suites
 * Credit: https://gist.github.com/paulirish/5438650
 * @private
 */

let performance = window.performance === undefined ? {} : window.performance

if (performance && performance.now === undefined) {
  var nowOffset = Date.now()

  if (performance.timing && performance.timing.navigationStart) {
    nowOffset = performance.timing.navigationStart
  }

  performance.now = function now () {
    return Date.now() - nowOffset
  }
}

export { performance }
