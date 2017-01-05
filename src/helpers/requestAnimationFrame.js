/**
 * RequestAnimationFrame shim, as jsdom doesn't
 * ship with it - primarily for use in the test suites
 * Credit: https://gist.github.com/paulirish/1579671
 * @private
 */
let requestAnimationFrame
let cancelAnimationFrame
var lastTime = 0
var vendors = ['ms', 'moz', 'webkit', 'o']
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
  window.cancelAnimationFrame =
    window[vendors[x] + 'CancelAnimationFrame'] ||
    window[vendors[x] + 'CancelRequestAnimationFrame']
}

if (!window.requestAnimationFrame) {
  requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime()
    var timeToCall = Math.max(0, 16 - (currTime - lastTime))
    var id = window.setTimeout(function () { callback(currTime + timeToCall) },
      timeToCall)
    lastTime = currTime + timeToCall
    return id
  }
} else {
  requestAnimationFrame = window.requestAnimationFrame
}

if (!window.cancelAnimationFrame) {
  cancelAnimationFrame = function (id) {
    clearTimeout(id)
  }
} else {
  cancelAnimationFrame = window.cancelAnimationFrame
}

export { requestAnimationFrame, cancelAnimationFrame }
