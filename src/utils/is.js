/**
 * A utility for testing the type of a reference
 */
class is {
  /**
   * Tests if the object is a HTMLElement
   * @param {object} object - The object to test
   * @returns {boolean} If set to true, the object is a HTMLElement
   */
  static element (object) {
    // Credit: http://stackoverflow.com/a/384380
    try {
      // Using W3 DOM2 (works for FF, Opera and Chrom)
      return object instanceof window.HTMLElement
    } catch (e) {
      // Browsers not supporting W3 DOM2 don't have HTMLElement and
      // an exception is thrown and we end up here. Testing some
      // properties that all elements have. (works on IE7)
      return (typeof object === 'object') &&
        (object.nodeType === 1) && (typeof object.style === 'object') &&
        (typeof object.ownerDocument === 'object')
    }
  }

  /**
   * Tests if the object is an array
   * @param {object} object - The object to test
   * @returns {boolean} If set to true, the object is an array
   */
  static array (object) {
    return Object.prototype.toString.call(object) === '[object Array]'
  }
}

export default is
