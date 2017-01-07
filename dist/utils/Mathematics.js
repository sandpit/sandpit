'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Is = require('./Is');

var _Is2 = _interopRequireDefault(_Is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A utility for math stuff
 */
var Mathematics = function () {
  function Mathematics() {
    _classCallCheck(this, Mathematics);
  }

  _createClass(Mathematics, null, [{
    key: 'randomBetween',


    /**
     * Returns a number between min and max
     * @param {int} min - The minimum range
     * @param {int} max - The maximum range
     * @returns {int|float} A random number between min and max
     */
    value: function randomBetween(min, max) {
      var random = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.random;

      // Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      return min + random() * (max - min);
    }

    /**
     * Returns a random element in an array or object
     * @param {array|object} - The array or object
     * @returns {*} The array item or object value
     */

  }, {
    key: 'randomFrom',
    value: function randomFrom(object) {
      var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random;

      if (_Is2.default.array(object)) {
        return object[Math.floor(random() * object.length)];
      } else if (_Is2.default.object(object)) {
        var result = {};
        var key = Object.keys(object)[Math.floor(random() * Object.keys(object).length)];
        var value = object[key];
        result[key] = value;
        return result;
      }
    }
  }, {
    key: 'TWO_PI',

    /** Returns PI * 2 */
    get: function get() {
      return Math.PI * 2;
    }
    /** Returns PI / 2 */

  }, {
    key: 'HALF_PI',
    get: function get() {
      return Math.PI / 2;
    }
    /** Returns PI / 4 */

  }, {
    key: 'QUARTER_PI',
    get: function get() {
      return Math.PI / 4;
    }
  }]);

  return Mathematics;
}();

exports.default = Mathematics;