import Is from './Is'

/**
 * A utility for math stuff
 */
class Mathematics {
  /** Returns PI * 2 */
  static get TWO_PI () { return Math.PI * 2 }
  /** Returns PI / 2 */
  static get HALF_PI () { return Math.PI / 2 }
  /** Returns PI / 4 */
  static get QUARTER_PI () { return Math.PI / 4 }

  /**
   * Returns a number between min and max
   * @param {int} min - The minimum range
   * @param {int} max - The maximum range
   * @returns {int|float} A random number between min and max
   */
  static randomBetween (min, max, random = Math.random) {
    // Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return min + random() * (max - min)
  }

  /**
   * Returns a random element in an array or object
   * @param {array|object} - The array or object
   * @returns {*} The array item or object value
   */
  static randomFrom (object, random = Math.random) {
    if (Is.array(object)) {
      return object[Math.floor(random() * object.length)]
    } else if (Is.object(object)) {
      let result = {}
      let key = Object.keys(object)[Math.floor(random() * Object.keys(object).length)]
      let value = object[key]
      result[key] = value
      return result
    }
  }
}

export default Mathematics
