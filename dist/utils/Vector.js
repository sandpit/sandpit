'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _victor = require('victor');

var _victor2 = _interopRequireDefault(_victor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_victor2.default.prototype.setLength = function (scalar) {
  var length = this.length();
  if (scalar >= 0 && length !== 0) {
    var sinA = this.y / length;
    var sinB = this.x / length;
    this.y = sinA * scalar;
    this.x = sinB * scalar;
  }
  return this;
}; /**
    * A utility for handling vectors, with a couple
    * of additional helpers: {@link http://victorjs.org/}
    * @class Vector
    */


_victor2.default.prototype.addLength = function (scalar) {
  return this.setLength(this.length() + scalar);
};

exports.default = _victor2.default;