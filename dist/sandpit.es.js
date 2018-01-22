var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var dat_gui = createCommonjsModule(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(commonjsGlobal, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _index = __webpack_require__(1);

				var _index2 = _interopRequireDefault(_index);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				exports.default = _index2.default; /**
                                        * dat-gui JavaScript Controller Library
                                        * http://code.google.com/p/dat-gui
                                        *
                                        * Copyright 2011 Data Arts Team, Google Creative Lab
                                        *
                                        * Licensed under the Apache License, Version 2.0 (the "License");
                                        * you may not use this file except in compliance with the License.
                                        * You may obtain a copy of the License at
                                        *
                                        * http://www.apache.org/licenses/LICENSE-2.0
                                        */

				module.exports = exports['default'];

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Color = __webpack_require__(2);

				var _Color2 = _interopRequireDefault(_Color);

				var _math = __webpack_require__(6);

				var _math2 = _interopRequireDefault(_math);

				var _interpret = __webpack_require__(3);

				var _interpret2 = _interopRequireDefault(_interpret);

				var _Controller = __webpack_require__(7);

				var _Controller2 = _interopRequireDefault(_Controller);

				var _BooleanController = __webpack_require__(8);

				var _BooleanController2 = _interopRequireDefault(_BooleanController);

				var _OptionController = __webpack_require__(10);

				var _OptionController2 = _interopRequireDefault(_OptionController);

				var _StringController = __webpack_require__(11);

				var _StringController2 = _interopRequireDefault(_StringController);

				var _NumberController = __webpack_require__(12);

				var _NumberController2 = _interopRequireDefault(_NumberController);

				var _NumberControllerBox = __webpack_require__(13);

				var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

				var _NumberControllerSlider = __webpack_require__(14);

				var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

				var _FunctionController = __webpack_require__(15);

				var _FunctionController2 = _interopRequireDefault(_FunctionController);

				var _ColorController = __webpack_require__(16);

				var _ColorController2 = _interopRequireDefault(_ColorController);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _GUI = __webpack_require__(17);

				var _GUI2 = _interopRequireDefault(_GUI);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				exports.default = {
					color: {
						Color: _Color2.default,
						math: _math2.default,
						interpret: _interpret2.default
					},

					controllers: {
						Controller: _Controller2.default,
						BooleanController: _BooleanController2.default,
						OptionController: _OptionController2.default,
						StringController: _StringController2.default,
						NumberController: _NumberController2.default,
						NumberControllerBox: _NumberControllerBox2.default,
						NumberControllerSlider: _NumberControllerSlider2.default,
						FunctionController: _FunctionController2.default,
						ColorController: _ColorController2.default
					},

					dom: {
						dom: _dom2.default
					},

					gui: {
						GUI: _GUI2.default
					},

					GUI: _GUI2.default
				};
				module.exports = exports['default'];

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _interpret = __webpack_require__(3);

				var _interpret2 = _interopRequireDefault(_interpret);

				var _math = __webpack_require__(6);

				var _math2 = _interopRequireDefault(_math);

				var _toString = __webpack_require__(4);

				var _toString2 = _interopRequireDefault(_toString);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				var Color = function () {
					function Color() {
						_classCallCheck(this, Color);

						this.__state = _interpret2.default.apply(this, arguments);

						if (this.__state === false) {
							throw new Error('Failed to interpret color arguments');
						}

						this.__state.a = this.__state.a || 1;
					}

					Color.prototype.toString = function toString() {
						return (0, _toString2.default)(this);
					};

					Color.prototype.toHexString = function toHexString() {
						return (0, _toString2.default)(this, true);
					};

					Color.prototype.toOriginal = function toOriginal() {
						return this.__state.conversion.write(this);
					};

					return Color;
				}();

				function defineRGBComponent(target, component, componentHexIndex) {
					Object.defineProperty(target, component, {
						get: function get$$1() {
							if (this.__state.space === 'RGB') {
								return this.__state[component];
							}

							Color.recalculateRGB(this, component, componentHexIndex);

							return this.__state[component];
						},

						set: function set$$1(v) {
							if (this.__state.space !== 'RGB') {
								Color.recalculateRGB(this, component, componentHexIndex);
								this.__state.space = 'RGB';
							}

							this.__state[component] = v;
						}
					});
				}

				function defineHSVComponent(target, component) {
					Object.defineProperty(target, component, {
						get: function get$$1() {
							if (this.__state.space === 'HSV') {
								return this.__state[component];
							}

							Color.recalculateHSV(this);

							return this.__state[component];
						},

						set: function set$$1(v) {
							if (this.__state.space !== 'HSV') {
								Color.recalculateHSV(this);
								this.__state.space = 'HSV';
							}

							this.__state[component] = v;
						}
					});
				}

				Color.recalculateRGB = function (color, component, componentHexIndex) {
					if (color.__state.space === 'HEX') {
						color.__state[component] = _math2.default.component_from_hex(color.__state.hex, componentHexIndex);
					} else if (color.__state.space === 'HSV') {
						_common2.default.extend(color.__state, _math2.default.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
					} else {
						throw new Error('Corrupted color state');
					}
				};

				Color.recalculateHSV = function (color) {
					var result = _math2.default.rgb_to_hsv(color.r, color.g, color.b);

					_common2.default.extend(color.__state, {
						s: result.s,
						v: result.v
					});

					if (!_common2.default.isNaN(result.h)) {
						color.__state.h = result.h;
					} else if (_common2.default.isUndefined(color.__state.h)) {
						color.__state.h = 0;
					}
				};

				Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];

				defineRGBComponent(Color.prototype, 'r', 2);
				defineRGBComponent(Color.prototype, 'g', 1);
				defineRGBComponent(Color.prototype, 'b', 0);

				defineHSVComponent(Color.prototype, 'h');
				defineHSVComponent(Color.prototype, 's');
				defineHSVComponent(Color.prototype, 'v');

				Object.defineProperty(Color.prototype, 'a', {
					get: function get$$1() {
						return this.__state.a;
					},

					set: function set$$1(v) {
						this.__state.a = v;
					}
				});

				Object.defineProperty(Color.prototype, 'hex', {
					get: function get$$1() {
						if (!this.__state.space !== 'HEX') {
							this.__state.hex = _math2.default.rgb_to_hex(this.r, this.g, this.b);
						}

						return this.__state.hex;
					},

					set: function set$$1(v) {
						this.__state.space = 'HEX';
						this.__state.hex = v;
					}
				});

				exports.default = Color;
				module.exports = exports['default'];

				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _toString = __webpack_require__(4);

				var _toString2 = _interopRequireDefault(_toString);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				var INTERPRETATIONS = [
				// Strings
				{
					litmus: _common2.default.isString,
					conversions: {
						THREE_CHAR_HEX: {
							read: function read(original) {
								var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
								if (test === null) {
									return false;
								}

								return {
									space: 'HEX',
									hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
								};
							},

							write: _toString2.default
						},

						SIX_CHAR_HEX: {
							read: function read(original) {
								var test = original.match(/^#([A-F0-9]{6})$/i);
								if (test === null) {
									return false;
								}

								return {
									space: 'HEX',
									hex: parseInt('0x' + test[1].toString(), 0)
								};
							},

							write: _toString2.default
						},

						CSS_RGB: {
							read: function read(original) {
								var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
								if (test === null) {
									return false;
								}

								return {
									space: 'RGB',
									r: parseFloat(test[1]),
									g: parseFloat(test[2]),
									b: parseFloat(test[3])
								};
							},

							write: _toString2.default
						},

						CSS_RGBA: {
							read: function read(original) {
								var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
								if (test === null) {
									return false;
								}

								return {
									space: 'RGB',
									r: parseFloat(test[1]),
									g: parseFloat(test[2]),
									b: parseFloat(test[3]),
									a: parseFloat(test[4])
								};
							},

							write: _toString2.default
						}
					}
				},

				// Numbers
				{
					litmus: _common2.default.isNumber,

					conversions: {

						HEX: {
							read: function read(original) {
								return {
									space: 'HEX',
									hex: original,
									conversionName: 'HEX'
								};
							},

							write: function write(color) {
								return color.hex;
							}
						}

					}

				},

				// Arrays
				{
					litmus: _common2.default.isArray,
					conversions: {
						RGB_ARRAY: {
							read: function read(original) {
								if (original.length !== 3) {
									return false;
								}

								return {
									space: 'RGB',
									r: original[0],
									g: original[1],
									b: original[2]
								};
							},

							write: function write(color) {
								return [color.r, color.g, color.b];
							}
						},

						RGBA_ARRAY: {
							read: function read(original) {
								if (original.length !== 4) return false;
								return {
									space: 'RGB',
									r: original[0],
									g: original[1],
									b: original[2],
									a: original[3]
								};
							},

							write: function write(color) {
								return [color.r, color.g, color.b, color.a];
							}
						}
					}
				},

				// Objects
				{
					litmus: _common2.default.isObject,
					conversions: {

						RGBA_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.r) && _common2.default.isNumber(original.g) && _common2.default.isNumber(original.b) && _common2.default.isNumber(original.a)) {
									return {
										space: 'RGB',
										r: original.r,
										g: original.g,
										b: original.b,
										a: original.a
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									r: color.r,
									g: color.g,
									b: color.b,
									a: color.a
								};
							}
						},

						RGB_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.r) && _common2.default.isNumber(original.g) && _common2.default.isNumber(original.b)) {
									return {
										space: 'RGB',
										r: original.r,
										g: original.g,
										b: original.b
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									r: color.r,
									g: color.g,
									b: color.b
								};
							}
						},

						HSVA_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.h) && _common2.default.isNumber(original.s) && _common2.default.isNumber(original.v) && _common2.default.isNumber(original.a)) {
									return {
										space: 'HSV',
										h: original.h,
										s: original.s,
										v: original.v,
										a: original.a
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									h: color.h,
									s: color.s,
									v: color.v,
									a: color.a
								};
							}
						},

						HSV_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.h) && _common2.default.isNumber(original.s) && _common2.default.isNumber(original.v)) {
									return {
										space: 'HSV',
										h: original.h,
										s: original.s,
										v: original.v
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									h: color.h,
									s: color.s,
									v: color.v
								};
							}
						}
					}
				}];

				var result = void 0;
				var toReturn = void 0;

				var interpret = function interpret() {
					toReturn = false;

					var original = arguments.length > 1 ? _common2.default.toArray(arguments) : arguments[0];
					_common2.default.each(INTERPRETATIONS, function (family) {
						if (family.litmus(original)) {
							_common2.default.each(family.conversions, function (conversion, conversionName) {
								result = conversion.read(original);

								if (toReturn === false && result !== false) {
									toReturn = result;
									result.conversionName = conversionName;
									result.conversion = conversion;
									return _common2.default.BREAK;
								}
							});

							return _common2.default.BREAK;
						}
					});

					return toReturn;
				};

				exports.default = interpret;
				module.exports = exports['default'];

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				exports.__esModule = true;

				exports.default = function (color, forceCSSHex) {
					var colorFormat = color.__state.conversionName.toString();

					var r = Math.round(color.r);
					var g = Math.round(color.g);
					var b = Math.round(color.b);
					var a = color.a;
					var h = Math.round(color.h);
					var s = color.s.toFixed(1);
					var v = color.v.toFixed(1);

					if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
						var str = color.hex.toString(16);
						while (str.length < 6) {
							str = '0' + str;
						}
						return '#' + str;
					} else if (colorFormat === 'CSS_RGB') {
						return 'rgb(' + r + ',' + g + ',' + b + ')';
					} else if (colorFormat === 'CSS_RGBA') {
						return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
					} else if (colorFormat === 'HEX') {
						return '0x' + color.hex.toString(16);
					} else if (colorFormat === 'RGB_ARRAY') {
						return '[' + r + ',' + g + ',' + b + ']';
					} else if (colorFormat === 'RGBA_ARRAY') {
						return '[' + r + ',' + g + ',' + b + ',' + a + ']';
					} else if (colorFormat === 'RGB_OBJ') {
						return '{r:' + r + ',g:' + g + ',b:' + b + '}';
					} else if (colorFormat === 'RGBA_OBJ') {
						return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
					} else if (colorFormat === 'HSV_OBJ') {
						return '{h:' + h + ',s:' + s + ',v:' + v + '}';
					} else if (colorFormat === 'HSVA_OBJ') {
						return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
					}

					return 'unknown format';
				};

				module.exports = exports['default']; /**
                                          * dat-gui JavaScript Controller Library
                                          * http://code.google.com/p/dat-gui
                                          *
                                          * Copyright 2011 Data Arts Team, Google Creative Lab
                                          *
                                          * Licensed under the Apache License, Version 2.0 (the "License");
                                          * you may not use this file except in compliance with the License.
                                          * You may obtain a copy of the License at
                                          *
                                          * http://www.apache.org/licenses/LICENSE-2.0
                                          */

				/***/
			},
			/* 5 */
			/***/function (module, exports) {

				exports.__esModule = true;
				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				var ARR_EACH = Array.prototype.forEach;
				var ARR_SLICE = Array.prototype.slice;

				/**
     * Band-aid methods for things that should be a lot easier in JavaScript.
     * Implementation and structure inspired by underscore.js
     * http://documentcloud.github.com/underscore/
     */

				var Common = {
					BREAK: {},

					extend: function extend(target) {
						this.each(ARR_SLICE.call(arguments, 1), function (obj) {
							var keys = this.isObject(obj) ? Object.keys(obj) : [];
							keys.forEach(function (key) {
								if (!this.isUndefined(obj[key])) {
									target[key] = obj[key];
								}
							}.bind(this));
						}, this);

						return target;
					},

					defaults: function defaults$$1(target) {
						this.each(ARR_SLICE.call(arguments, 1), function (obj) {
							var keys = this.isObject(obj) ? Object.keys(obj) : [];
							keys.forEach(function (key) {
								if (this.isUndefined(target[key])) {
									target[key] = obj[key];
								}
							}.bind(this));
						}, this);

						return target;
					},

					compose: function compose() {
						var toCall = ARR_SLICE.call(arguments);
						return function () {
							var args = ARR_SLICE.call(arguments);
							for (var i = toCall.length - 1; i >= 0; i--) {
								args = [toCall[i].apply(this, args)];
							}
							return args[0];
						};
					},

					each: function each(obj, itr, scope) {
						if (!obj) {
							return;
						}

						if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
							obj.forEach(itr, scope);
						} else if (obj.length === obj.length + 0) {
							// Is number but not NaN
							var key = void 0;
							var l = void 0;
							for (key = 0, l = obj.length; key < l; key++) {
								if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
									return;
								}
							}
						} else {
							for (var _key in obj) {
								if (itr.call(scope, obj[_key], _key) === this.BREAK) {
									return;
								}
							}
						}
					},

					defer: function defer(fnc) {
						setTimeout(fnc, 0);
					},

					// if the function is called repeatedly, wait until threshold passes until we execute the function
					debounce: function debounce(func, threshold, callImmediately) {
						var timeout = void 0;

						return function () {
							var obj = this;
							var args = arguments;
							function delayed() {
								timeout = null;
								if (!callImmediately) func.apply(obj, args);
							}

							var callNow = callImmediately || !timeout;

							clearTimeout(timeout);
							timeout = setTimeout(delayed, threshold);

							if (callNow) {
								func.apply(obj, args);
							}
						};
					},

					toArray: function toArray$$1(obj) {
						if (obj.toArray) return obj.toArray();
						return ARR_SLICE.call(obj);
					},

					isUndefined: function isUndefined(obj) {
						return obj === undefined;
					},

					isNull: function isNull(obj) {
						return obj === null;
					},

					isNaN: function (_isNaN) {
						function isNaN(_x) {
							return _isNaN.apply(this, arguments);
						}

						isNaN.toString = function () {
							return _isNaN.toString();
						};

						return isNaN;
					}(function (obj) {
						return isNaN(obj);
					}),

					isArray: Array.isArray || function (obj) {
						return obj.constructor === Array;
					},

					isObject: function isObject(obj) {
						return obj === Object(obj);
					},

					isNumber: function isNumber(obj) {
						return obj === obj + 0;
					},

					isString: function isString(obj) {
						return obj === obj + '';
					},

					isBoolean: function isBoolean(obj) {
						return obj === false || obj === true;
					},

					isFunction: function isFunction(obj) {
						return Object.prototype.toString.call(obj) === '[object Function]';
					}

				};

				exports.default = Common;
				module.exports = exports['default'];

				/***/
			},
			/* 6 */
			/***/function (module, exports) {

				exports.__esModule = true;
				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				var tmpComponent = void 0;

				var ColorMath = {
					hsv_to_rgb: function hsv_to_rgb(h, s, v) {
						var hi = Math.floor(h / 60) % 6;

						var f = h / 60 - Math.floor(h / 60);
						var p = v * (1.0 - s);
						var q = v * (1.0 - f * s);
						var t = v * (1.0 - (1.0 - f) * s);

						var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];

						return {
							r: c[0] * 255,
							g: c[1] * 255,
							b: c[2] * 255
						};
					},

					rgb_to_hsv: function rgb_to_hsv(r, g, b) {
						var min = Math.min(r, g, b);
						var max = Math.max(r, g, b);
						var delta = max - min;
						var h = void 0;
						var s = void 0;

						if (max !== 0) {
							s = delta / max;
						} else {
							return {
								h: NaN,
								s: 0,
								v: 0
							};
						}

						if (r === max) {
							h = (g - b) / delta;
						} else if (g === max) {
							h = 2 + (b - r) / delta;
						} else {
							h = 4 + (r - g) / delta;
						}
						h /= 6;
						if (h < 0) {
							h += 1;
						}

						return {
							h: h * 360,
							s: s,
							v: max / 255
						};
					},

					rgb_to_hex: function rgb_to_hex(r, g, b) {
						var hex = this.hex_with_component(0, 2, r);
						hex = this.hex_with_component(hex, 1, g);
						hex = this.hex_with_component(hex, 0, b);
						return hex;
					},

					component_from_hex: function component_from_hex(hex, componentIndex) {
						return hex >> componentIndex * 8 & 0xFF;
					},

					hex_with_component: function hex_with_component(hex, componentIndex, value) {
						return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
					}
				};

				exports.default = ColorMath;
				module.exports = exports["default"];

				/***/
			},
			/* 7 */
			/***/function (module, exports) {

				exports.__esModule = true;

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				/**
     * @class An "abstract" class that represents a given property of an object.
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var Controller = function () {
					function Controller(object, property) {
						_classCallCheck(this, Controller);

						this.initialValue = object[property];

						/**
       * Those who extend this class will put their DOM elements in here.
       * @type {DOMElement}
       */
						this.domElement = document.createElement('div');

						/**
       * The object to manipulate
       * @type {Object}
       */
						this.object = object;

						/**
       * The name of the property to manipulate
       * @type {String}
       */
						this.property = property;

						/**
       * The function to be called on change.
       * @type {Function}
       * @ignore
       */
						this.__onChange = undefined;

						/**
       * The function to be called on finishing change.
       * @type {Function}
       * @ignore
       */
						this.__onFinishChange = undefined;
					}

					/**
      * Specify that a function fire every time someone changes the value with
      * this Controller.
      *
      * @param {Function} fnc This function will be called whenever the value
      * is modified via this Controller.
      * @returns {Controller} this
      */

					Controller.prototype.onChange = function onChange(fnc) {
						this.__onChange = fnc;
						return this;
					};

					/**
      * Specify that a function fire every time someone "finishes" changing
      * the value wih this Controller. Useful for values that change
      * incrementally like numbers or strings.
      *
      * @param {Function} fnc This function will be called whenever
      * someone "finishes" changing the value via this Controller.
      * @returns {Controller} this
      */

					Controller.prototype.onFinishChange = function onFinishChange(fnc) {
						this.__onFinishChange = fnc;
						return this;
					};

					/**
      * Change the value of <code>object[property]</code>
      *
      * @param {Object} newValue The new value of <code>object[property]</code>
      */

					Controller.prototype.setValue = function setValue(newValue) {
						this.object[this.property] = newValue;
						if (this.__onChange) {
							this.__onChange.call(this, newValue);
						}

						this.updateDisplay();
						return this;
					};

					/**
      * Gets the value of <code>object[property]</code>
      *
      * @returns {Object} The current value of <code>object[property]</code>
      */

					Controller.prototype.getValue = function getValue() {
						return this.object[this.property];
					};

					/**
      * Refreshes the visual display of a Controller in order to keep sync
      * with the object's current value.
      * @returns {Controller} this
      */

					Controller.prototype.updateDisplay = function updateDisplay() {
						return this;
					};

					/**
      * @returns {Boolean} true if the value has deviated from initialValue
      */

					Controller.prototype.isModified = function isModified() {
						return this.initialValue !== this.getValue();
					};

					return Controller;
				}();

				exports.default = Controller;
				module.exports = exports['default'];

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a checkbox input to alter the boolean property of an object.
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var BooleanController = function (_Controller) {
					_inherits(BooleanController, _Controller);

					function BooleanController(object, property) {
						_classCallCheck(this, BooleanController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _this = _this2;
						_this2.__prev = _this2.getValue();

						_this2.__checkbox = document.createElement('input');
						_this2.__checkbox.setAttribute('type', 'checkbox');

						function onChange() {
							_this.setValue(!_this.__prev);
						}

						_dom2.default.bind(_this2.__checkbox, 'change', onChange, false);

						_this2.domElement.appendChild(_this2.__checkbox);

						// Match original value
						_this2.updateDisplay();
						return _this2;
					}

					BooleanController.prototype.setValue = function setValue(v) {
						var toReturn = _Controller.prototype.setValue.call(this, v);
						if (this.__onFinishChange) {
							this.__onFinishChange.call(this, this.getValue());
						}
						this.__prev = this.getValue();
						return toReturn;
					};

					BooleanController.prototype.updateDisplay = function updateDisplay() {
						if (this.getValue() === true) {
							this.__checkbox.setAttribute('checked', 'checked');
							this.__checkbox.checked = true;
							this.__prev = true;
						} else {
							this.__checkbox.checked = false;
							this.__prev = false;
						}

						return _Controller.prototype.updateDisplay.call(this);
					};

					return BooleanController;
				}(_Controller3.default);

				exports.default = BooleanController;
				module.exports = exports['default'];

				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var EVENT_MAP = {
					HTMLEvents: ['change'],
					MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
					KeyboardEvents: ['keydown']
				}; /**
        * dat-gui JavaScript Controller Library
        * http://code.google.com/p/dat-gui
        *
        * Copyright 2011 Data Arts Team, Google Creative Lab
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        */

				var EVENT_MAP_INV = {};
				_common2.default.each(EVENT_MAP, function (v, k) {
					_common2.default.each(v, function (e) {
						EVENT_MAP_INV[e] = k;
					});
				});

				var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

				function cssValueToPixels(val) {
					if (val === '0' || _common2.default.isUndefined(val)) {
						return 0;
					}

					var match = val.match(CSS_VALUE_PIXELS);

					if (!_common2.default.isNull(match)) {
						return parseFloat(match[1]);
					}

					// TODO ...ems? %?

					return 0;
				}

				/**
     * @namespace
     * @member dat.dom
     */
				var dom = {

					/**
      *
      * @param elem
      * @param selectable
      */
					makeSelectable: function makeSelectable(elem, selectable) {
						if (elem === undefined || elem.style === undefined) return;

						elem.onselectstart = selectable ? function () {
							return false;
						} : function () {};

						elem.style.MozUserSelect = selectable ? 'auto' : 'none';
						elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
						elem.unselectable = selectable ? 'on' : 'off';
					},

					/**
      *
      * @param elem
      * @param horizontal
      * @param vert
      */
					makeFullscreen: function makeFullscreen(elem, hor, vert) {
						var vertical = vert;
						var horizontal = hor;

						if (_common2.default.isUndefined(horizontal)) {
							horizontal = true;
						}

						if (_common2.default.isUndefined(vertical)) {
							vertical = true;
						}

						elem.style.position = 'absolute';

						if (horizontal) {
							elem.style.left = 0;
							elem.style.right = 0;
						}
						if (vertical) {
							elem.style.top = 0;
							elem.style.bottom = 0;
						}
					},

					/**
      *
      * @param elem
      * @param eventType
      * @param params
      */
					fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
						var params = pars || {};
						var className = EVENT_MAP_INV[eventType];
						if (!className) {
							throw new Error('Event type ' + eventType + ' not supported.');
						}
						var evt = document.createEvent(className);
						switch (className) {
							case 'MouseEvents':
								{
									var clientX = params.x || params.clientX || 0;
									var clientY = params.y || params.clientY || 0;
									evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, // screen X
									0, // screen Y
									clientX, // client X
									clientY, // client Y
									false, false, false, false, 0, null);
									break;
								}
							case 'KeyboardEvents':
								{
									var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
									_common2.default.defaults(params, {
										cancelable: true,
										ctrlKey: false,
										altKey: false,
										shiftKey: false,
										metaKey: false,
										keyCode: undefined,
										charCode: undefined
									});
									init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
									break;
								}
							default:
								{
									evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
									break;
								}
						}
						_common2.default.defaults(evt, aux);
						elem.dispatchEvent(evt);
					},

					/**
      *
      * @param elem
      * @param event
      * @param func
      * @param bool
      */
					bind: function bind(elem, event, func, newBool) {
						var bool = newBool || false;
						if (elem.addEventListener) {
							elem.addEventListener(event, func, bool);
						} else if (elem.attachEvent) {
							elem.attachEvent('on' + event, func);
						}
						return dom;
					},

					/**
      *
      * @param elem
      * @param event
      * @param func
      * @param bool
      */
					unbind: function unbind(elem, event, func, newBool) {
						var bool = newBool || false;
						if (elem.removeEventListener) {
							elem.removeEventListener(event, func, bool);
						} else if (elem.detachEvent) {
							elem.detachEvent('on' + event, func);
						}
						return dom;
					},

					/**
      *
      * @param elem
      * @param className
      */
					addClass: function addClass(elem, className) {
						if (elem.className === undefined) {
							elem.className = className;
						} else if (elem.className !== className) {
							var classes = elem.className.split(/ +/);
							if (classes.indexOf(className) === -1) {
								classes.push(className);
								elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
							}
						}
						return dom;
					},

					/**
      *
      * @param elem
      * @param className
      */
					removeClass: function removeClass(elem, className) {
						if (className) {
							if (elem.className === className) {
								elem.removeAttribute('class');
							} else {
								var classes = elem.className.split(/ +/);
								var index = classes.indexOf(className);
								if (index !== -1) {
									classes.splice(index, 1);
									elem.className = classes.join(' ');
								}
							}
						} else {
							elem.className = undefined;
						}
						return dom;
					},

					hasClass: function hasClass(elem, className) {
						return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
					},

					/**
      *
      * @param elem
      */
					getWidth: function getWidth(elem) {
						var style = getComputedStyle(elem);

						return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
					},

					/**
      *
      * @param elem
      */
					getHeight: function getHeight(elem) {
						var style = getComputedStyle(elem);

						return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
					},

					/**
      *
      * @param el
      */
					getOffset: function getOffset(el) {
						var elem = el;
						var offset = { left: 0, top: 0 };
						if (elem.offsetParent) {
							do {
								offset.left += elem.offsetLeft;
								offset.top += elem.offsetTop;
								elem = elem.offsetParent;
							} while (elem);
						}
						return offset;
					},

					// http://stackoverflow.com/posts/2684561/revisions
					/**
      *
      * @param elem
      */
					isActive: function isActive(elem) {
						return elem === document.activeElement && (elem.type || elem.href);
					}

				};

				exports.default = dom;
				module.exports = exports['default'];

				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a select input to alter the property of an object, using a
     * list of accepted values.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Object|string[]} options A map of labels to acceptable values, or
     * a list of acceptable string values.
     *
     * @member dat.controllers
     */
				var OptionController = function (_Controller) {
					_inherits(OptionController, _Controller);

					function OptionController(object, property, opts) {
						_classCallCheck(this, OptionController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var options = opts;

						var _this = _this2;

						/**
       * The drop down menu
       * @ignore
       */
						_this2.__select = document.createElement('select');

						if (_common2.default.isArray(options)) {
							var map = {};
							_common2.default.each(options, function (element) {
								map[element] = element;
							});
							options = map;
						}

						_common2.default.each(options, function (value, key) {
							var opt = document.createElement('option');
							opt.innerHTML = key;
							opt.setAttribute('value', value);
							_this.__select.appendChild(opt);
						});

						// Acknowledge original value
						_this2.updateDisplay();

						_dom2.default.bind(_this2.__select, 'change', function () {
							var desiredValue = this.options[this.selectedIndex].value;
							_this.setValue(desiredValue);
						});

						_this2.domElement.appendChild(_this2.__select);
						return _this2;
					}

					OptionController.prototype.setValue = function setValue(v) {
						var toReturn = _Controller.prototype.setValue.call(this, v);

						if (this.__onFinishChange) {
							this.__onFinishChange.call(this, this.getValue());
						}
						return toReturn;
					};

					OptionController.prototype.updateDisplay = function updateDisplay() {
						if (_dom2.default.isActive(this.__select)) return this; // prevent number from updating if user is trying to manually update
						this.__select.value = this.getValue();
						return _Controller.prototype.updateDisplay.call(this);
					};

					return OptionController;
				}(_Controller3.default);

				exports.default = OptionController;
				module.exports = exports['default'];

				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a text input to alter the string property of an object.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var StringController = function (_Controller) {
					_inherits(StringController, _Controller);

					function StringController(object, property) {
						_classCallCheck(this, StringController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _this = _this2;

						function onChange() {
							_this.setValue(_this.__input.value);
						}

						function onBlur() {
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.getValue());
							}
						}

						_this2.__input = document.createElement('input');
						_this2.__input.setAttribute('type', 'text');

						_dom2.default.bind(_this2.__input, 'keyup', onChange);
						_dom2.default.bind(_this2.__input, 'change', onChange);
						_dom2.default.bind(_this2.__input, 'blur', onBlur);
						_dom2.default.bind(_this2.__input, 'keydown', function (e) {
							if (e.keyCode === 13) {
								this.blur();
							}
						});

						_this2.updateDisplay();

						_this2.domElement.appendChild(_this2.__input);
						return _this2;
					}

					StringController.prototype.updateDisplay = function updateDisplay() {
						// Stops the caret from moving on account of:
						// keyup -> setValue -> updateDisplay
						if (!_dom2.default.isActive(this.__input)) {
							this.__input.value = this.getValue();
						}
						return _Controller.prototype.updateDisplay.call(this);
					};

					return StringController;
				}(_Controller3.default);

				exports.default = StringController;
				module.exports = exports['default'];

				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				function numDecimals(x) {
					var _x = x.toString();
					if (_x.indexOf('.') > -1) {
						return _x.length - _x.indexOf('.') - 1;
					}

					return 0;
				}

				/**
     * @class Represents a given property of an object that is a number.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Object} [params] Optional parameters
     * @param {Number} [params.min] Minimum allowed value
     * @param {Number} [params.max] Maximum allowed value
     * @param {Number} [params.step] Increment by which to change value
     *
     * @member dat.controllers
     */

				var NumberController = function (_Controller) {
					_inherits(NumberController, _Controller);

					function NumberController(object, property, params) {
						_classCallCheck(this, NumberController);

						var _this = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _params = params || {};

						_this.__min = _params.min;
						_this.__max = _params.max;
						_this.__step = _params.step;

						if (_common2.default.isUndefined(_this.__step)) {
							if (_this.initialValue === 0) {
								_this.__impliedStep = 1; // What are we, psychics?
							} else {
								// Hey Doug, check this out.
								_this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
							}
						} else {
							_this.__impliedStep = _this.__step;
						}

						_this.__precision = numDecimals(_this.__impliedStep);
						return _this;
					}

					NumberController.prototype.setValue = function setValue(v) {
						var _v = v;

						if (this.__min !== undefined && _v < this.__min) {
							_v = this.__min;
						} else if (this.__max !== undefined && _v > this.__max) {
							_v = this.__max;
						}

						if (this.__step !== undefined && _v % this.__step !== 0) {
							_v = Math.round(_v / this.__step) * this.__step;
						}

						return _Controller.prototype.setValue.call(this, _v);
					};

					/**
      * Specify a minimum value for <code>object[property]</code>.
      *
      * @param {Number} minValue The minimum value for
      * <code>object[property]</code>
      * @returns {dat.controllers.NumberController} this
      */

					NumberController.prototype.min = function min(v) {
						this.__min = v;
						return this;
					};

					/**
      * Specify a maximum value for <code>object[property]</code>.
      *
      * @param {Number} maxValue The maximum value for
      * <code>object[property]</code>
      * @returns {dat.controllers.NumberController} this
      */

					NumberController.prototype.max = function max(v) {
						this.__max = v;
						return this;
					};

					/**
      * Specify a step value that dat.controllers.NumberController
      * increments by.
      *
      * @param {Number} stepValue The step value for
      * dat.controllers.NumberController
      * @default if minimum and maximum specified increment is 1% of the
      * difference otherwise stepValue is 1
      * @returns {dat.controllers.NumberController} this
      */

					NumberController.prototype.step = function step(v) {
						this.__step = v;
						this.__impliedStep = v;
						this.__precision = numDecimals(v);
						return this;
					};

					return NumberController;
				}(_Controller3.default);

				exports.default = NumberController;
				module.exports = exports['default'];

				/***/
			},
			/* 13 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _NumberController2 = __webpack_require__(12);

				var _NumberController3 = _interopRequireDefault(_NumberController2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				function roundToDecimal(value, decimals) {
					var tenTo = Math.pow(10, decimals);
					return Math.round(value * tenTo) / tenTo;
				}

				/**
     * @class Represents a given property of an object that is a number and
     * provides an input element with which to manipulate it.
     *
     * @extends dat.controllers.Controller
     * @extends dat.controllers.NumberController
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Object} [params] Optional parameters
     * @param {Number} [params.min] Minimum allowed value
     * @param {Number} [params.max] Maximum allowed value
     * @param {Number} [params.step] Increment by which to change value
     *
     * @member dat.controllers
     */

				var NumberControllerBox = function (_NumberController) {
					_inherits(NumberControllerBox, _NumberController);

					function NumberControllerBox(object, property, params) {
						_classCallCheck(this, NumberControllerBox);

						var _this2 = _possibleConstructorReturn(this, _NumberController.call(this, object, property, params));

						_this2.__truncationSuspended = false;

						var _this = _this2;

						/**
       * {Number} Previous mouse y position
       * @ignore
       */
						var prevY = void 0;

						function onChange() {
							var attempted = parseFloat(_this.__input.value);
							if (!_common2.default.isNaN(attempted)) {
								_this.setValue(attempted);
							}
						}

						function onFinish() {
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.getValue());
							}
						}

						function onBlur() {
							onFinish();
						}

						function onMouseDrag(e) {
							var diff = prevY - e.clientY;
							_this.setValue(_this.getValue() + diff * _this.__impliedStep);

							prevY = e.clientY;
						}

						function onMouseUp() {
							_dom2.default.unbind(window, 'mousemove', onMouseDrag);
							_dom2.default.unbind(window, 'mouseup', onMouseUp);
							onFinish();
						}

						function onMouseDown(e) {
							_dom2.default.bind(window, 'mousemove', onMouseDrag);
							_dom2.default.bind(window, 'mouseup', onMouseUp);
							prevY = e.clientY;
						}

						_this2.__input = document.createElement('input');
						_this2.__input.setAttribute('type', 'text');

						// Makes it so manually specified values are not truncated.

						_dom2.default.bind(_this2.__input, 'change', onChange);
						_dom2.default.bind(_this2.__input, 'blur', onBlur);
						_dom2.default.bind(_this2.__input, 'mousedown', onMouseDown);
						_dom2.default.bind(_this2.__input, 'keydown', function (e) {
							// When pressing enter, you can be as precise as you want.
							if (e.keyCode === 13) {
								_this.__truncationSuspended = true;
								this.blur();
								_this.__truncationSuspended = false;
								onFinish();
							}
						});

						_this2.updateDisplay();

						_this2.domElement.appendChild(_this2.__input);
						return _this2;
					}

					NumberControllerBox.prototype.updateDisplay = function updateDisplay() {
						this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
						return _NumberController.prototype.updateDisplay.call(this);
					};

					return NumberControllerBox;
				}(_NumberController3.default);

				exports.default = NumberControllerBox;
				module.exports = exports['default'];

				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _NumberController2 = __webpack_require__(12);

				var _NumberController3 = _interopRequireDefault(_NumberController2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				function map(v, i1, i2, o1, o2) {
					return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
				}

				/**
     * @class Represents a given property of an object that is a number, contains
     * a minimum and maximum, and provides a slider element with which to
     * manipulate it. It should be noted that the slider element is made up of
     * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
     * <code>&lt;slider&gt;</code> element.
     *
     * @extends dat.controllers.Controller
     * @extends dat.controllers.NumberController
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Number} minValue Minimum allowed value
     * @param {Number} maxValue Maximum allowed value
     * @param {Number} stepValue Increment by which to change value
     *
     * @member dat.controllers
     */

				var NumberControllerSlider = function (_NumberController) {
					_inherits(NumberControllerSlider, _NumberController);

					function NumberControllerSlider(object, property, min, max, step) {
						_classCallCheck(this, NumberControllerSlider);

						var _this2 = _possibleConstructorReturn(this, _NumberController.call(this, object, property, { min: min, max: max, step: step }));

						var _this = _this2;

						_this2.__background = document.createElement('div');
						_this2.__foreground = document.createElement('div');

						_dom2.default.bind(_this2.__background, 'mousedown', onMouseDown);

						_dom2.default.addClass(_this2.__background, 'slider');
						_dom2.default.addClass(_this2.__foreground, 'slider-fg');

						function onMouseDown(e) {
							document.activeElement.blur();

							_dom2.default.bind(window, 'mousemove', onMouseDrag);
							_dom2.default.bind(window, 'mouseup', onMouseUp);

							onMouseDrag(e);
						}

						function onMouseDrag(e) {
							e.preventDefault();

							var bgRect = _this.__background.getBoundingClientRect();

							_this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));

							return false;
						}

						function onMouseUp() {
							_dom2.default.unbind(window, 'mousemove', onMouseDrag);
							_dom2.default.unbind(window, 'mouseup', onMouseUp);
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.getValue());
							}
						}

						_this2.updateDisplay();

						_this2.__background.appendChild(_this2.__foreground);
						_this2.domElement.appendChild(_this2.__background);
						return _this2;
					}

					NumberControllerSlider.prototype.updateDisplay = function updateDisplay() {
						var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
						this.__foreground.style.width = pct * 100 + '%';
						return _NumberController.prototype.updateDisplay.call(this);
					};

					return NumberControllerSlider;
				}(_NumberController3.default);

				exports.default = NumberControllerSlider;
				module.exports = exports['default'];

				/***/
			},
			/* 15 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a GUI interface to fire a specified method, a property of an object.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var FunctionController = function (_Controller) {
					_inherits(FunctionController, _Controller);

					function FunctionController(object, property, text) {
						_classCallCheck(this, FunctionController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _this = _this2;

						_this2.__button = document.createElement('div');
						_this2.__button.innerHTML = text === undefined ? 'Fire' : text;

						_dom2.default.bind(_this2.__button, 'click', function (e) {
							e.preventDefault();
							_this.fire();
							return false;
						});

						_dom2.default.addClass(_this2.__button, 'button');

						_this2.domElement.appendChild(_this2.__button);
						return _this2;
					}

					FunctionController.prototype.fire = function fire() {
						if (this.__onChange) {
							this.__onChange.call(this);
						}
						this.getValue().call(this.object);
						if (this.__onFinishChange) {
							this.__onFinishChange.call(this, this.getValue());
						}
					};

					return FunctionController;
				}(_Controller3.default);

				exports.default = FunctionController;
				module.exports = exports['default'];

				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _Color = __webpack_require__(2);

				var _Color2 = _interopRequireDefault(_Color);

				var _interpret = __webpack_require__(3);

				var _interpret2 = _interopRequireDefault(_interpret);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				var ColorController = function (_Controller) {
					_inherits(ColorController, _Controller);

					function ColorController(object, property) {
						_classCallCheck(this, ColorController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						_this2.__color = new _Color2.default(_this2.getValue());
						_this2.__temp = new _Color2.default(0);

						var _this = _this2;

						_this2.domElement = document.createElement('div');

						_dom2.default.makeSelectable(_this2.domElement, false);

						_this2.__selector = document.createElement('div');
						_this2.__selector.className = 'selector';

						_this2.__saturation_field = document.createElement('div');
						_this2.__saturation_field.className = 'saturation-field';

						_this2.__field_knob = document.createElement('div');
						_this2.__field_knob.className = 'field-knob';
						_this2.__field_knob_border = '2px solid ';

						_this2.__hue_knob = document.createElement('div');
						_this2.__hue_knob.className = 'hue-knob';

						_this2.__hue_field = document.createElement('div');
						_this2.__hue_field.className = 'hue-field';

						_this2.__input = document.createElement('input');
						_this2.__input.type = 'text';
						_this2.__input_textShadow = '0 1px 1px ';

						_dom2.default.bind(_this2.__input, 'keydown', function (e) {
							if (e.keyCode === 13) {
								// on enter
								onBlur.call(this);
							}
						});

						_dom2.default.bind(_this2.__input, 'blur', onBlur);

						_dom2.default.bind(_this2.__selector, 'mousedown', function () /* e */{
							_dom2.default.addClass(this, 'drag').bind(window, 'mouseup', function () /* e */{
								_dom2.default.removeClass(_this.__selector, 'drag');
							});
						});

						var valueField = document.createElement('div');

						_common2.default.extend(_this2.__selector.style, {
							width: '122px',
							height: '102px',
							padding: '3px',
							backgroundColor: '#222',
							boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
						});

						_common2.default.extend(_this2.__field_knob.style, {
							position: 'absolute',
							width: '12px',
							height: '12px',
							border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
							boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
							borderRadius: '12px',
							zIndex: 1
						});

						_common2.default.extend(_this2.__hue_knob.style, {
							position: 'absolute',
							width: '15px',
							height: '2px',
							borderRight: '4px solid #fff',
							zIndex: 1
						});

						_common2.default.extend(_this2.__saturation_field.style, {
							width: '100px',
							height: '100px',
							border: '1px solid #555',
							marginRight: '3px',
							display: 'inline-block',
							cursor: 'pointer'
						});

						_common2.default.extend(valueField.style, {
							width: '100%',
							height: '100%',
							background: 'none'
						});

						linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');

						_common2.default.extend(_this2.__hue_field.style, {
							width: '15px',
							height: '100px',
							border: '1px solid #555',
							cursor: 'ns-resize',
							position: 'absolute',
							top: '3px',
							right: '3px'
						});

						hueGradient(_this2.__hue_field);

						_common2.default.extend(_this2.__input.style, {
							outline: 'none',
							//      width: '120px',
							textAlign: 'center',
							//      padding: '4px',
							//      marginBottom: '6px',
							color: '#fff',
							border: 0,
							fontWeight: 'bold',
							textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
						});

						_dom2.default.bind(_this2.__saturation_field, 'mousedown', fieldDown);
						_dom2.default.bind(_this2.__field_knob, 'mousedown', fieldDown);

						_dom2.default.bind(_this2.__hue_field, 'mousedown', function (e) {
							setH(e);
							_dom2.default.bind(window, 'mousemove', setH);
							_dom2.default.bind(window, 'mouseup', fieldUpH);
						});

						function fieldDown(e) {
							setSV(e);
							// document.body.style.cursor = 'none';
							_dom2.default.bind(window, 'mousemove', setSV);
							_dom2.default.bind(window, 'mouseup', fieldUpSV);
						}

						function fieldUpSV() {
							_dom2.default.unbind(window, 'mousemove', setSV);
							_dom2.default.unbind(window, 'mouseup', fieldUpSV);
							// document.body.style.cursor = 'default';
							onFinish();
						}

						function onBlur() {
							var i = (0, _interpret2.default)(this.value);
							if (i !== false) {
								_this.__color.__state = i;
								_this.setValue(_this.__color.toOriginal());
							} else {
								this.value = _this.__color.toString();
							}
						}

						function fieldUpH() {
							_dom2.default.unbind(window, 'mousemove', setH);
							_dom2.default.unbind(window, 'mouseup', fieldUpH);
							onFinish();
						}

						function onFinish() {
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.__color.toOriginal());
							}
						}

						_this2.__saturation_field.appendChild(valueField);
						_this2.__selector.appendChild(_this2.__field_knob);
						_this2.__selector.appendChild(_this2.__saturation_field);
						_this2.__selector.appendChild(_this2.__hue_field);
						_this2.__hue_field.appendChild(_this2.__hue_knob);

						_this2.domElement.appendChild(_this2.__input);
						_this2.domElement.appendChild(_this2.__selector);

						_this2.updateDisplay();

						function setSV(e) {
							e.preventDefault();

							var fieldRect = _this.__saturation_field.getBoundingClientRect();
							var s = (e.clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
							var v = 1 - (e.clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

							if (v > 1) {
								v = 1;
							} else if (v < 0) {
								v = 0;
							}

							if (s > 1) {
								s = 1;
							} else if (s < 0) {
								s = 0;
							}

							_this.__color.v = v;
							_this.__color.s = s;

							_this.setValue(_this.__color.toOriginal());

							return false;
						}

						function setH(e) {
							e.preventDefault();

							var fieldRect = _this.__hue_field.getBoundingClientRect();
							var h = 1 - (e.clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

							if (h > 1) {
								h = 1;
							} else if (h < 0) {
								h = 0;
							}

							_this.__color.h = h * 360;

							_this.setValue(_this.__color.toOriginal());

							return false;
						}
						return _this2;
					}

					ColorController.prototype.updateDisplay = function updateDisplay() {
						var i = (0, _interpret2.default)(this.getValue());

						if (i !== false) {
							var mismatch = false;

							// Check for mismatch on the interpreted value.

							_common2.default.each(_Color2.default.COMPONENTS, function (component) {
								if (!_common2.default.isUndefined(i[component]) && !_common2.default.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
									mismatch = true;
									return {}; // break
								}
							}, this);

							// If nothing diverges, we keep our previous values
							// for statefulness, otherwise we recalculate fresh
							if (mismatch) {
								_common2.default.extend(this.__color.__state, i);
							}
						}

						_common2.default.extend(this.__temp.__state, this.__color.__state);

						this.__temp.a = 1;

						var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
						var _flip = 255 - flip;

						_common2.default.extend(this.__field_knob.style, {
							marginLeft: 100 * this.__color.s - 7 + 'px',
							marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
							backgroundColor: this.__temp.toHexString(),
							border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
						});

						this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';

						this.__temp.s = 1;
						this.__temp.v = 1;

						linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());

						this.__input.value = this.__color.toString();

						_common2.default.extend(this.__input.style, {
							backgroundColor: this.__color.toHexString(),
							color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
							textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
						});
					};

					return ColorController;
				}(_Controller3.default);

				var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];

				function linearGradient(elem, x, a, b) {
					elem.style.background = '';
					_common2.default.each(vendors, function (vendor) {
						elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
					});
				}

				function hueGradient(elem) {
					elem.style.background = '';
					elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
					elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
					elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
					elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
					elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
				}

				exports.default = ColorController;
				module.exports = exports['default'];

				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
				}; /**
        * dat-gui JavaScript Controller Library
        * http://code.google.com/p/dat-gui
        *
        * Copyright 2011 Data Arts Team, Google Creative Lab
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        */

				var _css = __webpack_require__(18);

				var _css2 = _interopRequireDefault(_css);

				var _saveDialogue = __webpack_require__(19);

				var _saveDialogue2 = _interopRequireDefault(_saveDialogue);

				var _ControllerFactory = __webpack_require__(20);

				var _ControllerFactory2 = _interopRequireDefault(_ControllerFactory);

				var _Controller = __webpack_require__(7);

				var _Controller2 = _interopRequireDefault(_Controller);

				var _BooleanController = __webpack_require__(8);

				var _BooleanController2 = _interopRequireDefault(_BooleanController);

				var _FunctionController = __webpack_require__(15);

				var _FunctionController2 = _interopRequireDefault(_FunctionController);

				var _NumberControllerBox = __webpack_require__(13);

				var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

				var _NumberControllerSlider = __webpack_require__(14);

				var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

				var _ColorController = __webpack_require__(16);

				var _ColorController2 = _interopRequireDefault(_ColorController);

				var _requestAnimationFrame = __webpack_require__(21);

				var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

				var _CenteredDiv = __webpack_require__(22);

				var _CenteredDiv2 = _interopRequireDefault(_CenteredDiv);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				var _style = __webpack_require__(23);

				var _style2 = _interopRequireDefault(_style);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				// CSS to embed in build

				_css2.default.inject(_style2.default);

				/** Outer-most className for GUI's */
				var CSS_NAMESPACE = 'dg';

				var HIDE_KEY_CODE = 72;

				/** The only value shared between the JS and SCSS. Use caution. */
				var CLOSE_BUTTON_HEIGHT = 20;

				var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

				var SUPPORTS_LOCAL_STORAGE = function () {
					try {
						return 'localStorage' in window && window.localStorage !== null;
					} catch (e) {
						return false;
					}
				}();

				var SAVE_DIALOGUE = void 0;

				/** Have we yet to create an autoPlace GUI? */
				var autoPlaceVirgin = true;

				/** Fixed position div that auto place GUI's go inside */
				var autoPlaceContainer = void 0;

				/** Are we hiding the GUI's ? */
				var hide = false;

				/** GUI's which should be hidden */
				var hideableGuis = [];

				/**
     * A lightweight controller library for JavaScript. It allows you to easily
     * manipulate variables and fire functions on the fly.
     * @class
     *
     * @member dat.gui
     *
     * @param {Object} [params]
     * @param {String} [params.name] The name of this GUI.
     * @param {Object} [params.load] JSON object representing the saved state of
     * this GUI.
     * @param {Boolean} [params.auto=true]
     * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
     * @param {Boolean} [params.closed] If true, starts closed
     * @param {Boolean} [params.closeOnTop] If true, close/open button shows on top of the GUI
     */
				var GUI = function GUI(pars) {
					var _this = this;

					var params = pars || {};

					/**
      * Outermost DOM Element
      * @type DOMElement
      */
					this.domElement = document.createElement('div');
					this.__ul = document.createElement('ul');
					this.domElement.appendChild(this.__ul);

					_dom2.default.addClass(this.domElement, CSS_NAMESPACE);

					/**
      * Nested GUI's by name
      * @ignore
      */
					this.__folders = {};

					this.__controllers = [];

					/**
      * List of objects I'm remembering for save, only used in top level GUI
      * @ignore
      */
					this.__rememberedObjects = [];

					/**
      * Maps the index of remembered objects to a map of controllers, only used
      * in top level GUI.
      *
      * @private
      * @ignore
      *
      * @example
      * [
      *  {
        *    propertyName: Controller,
        *    anotherPropertyName: Controller
        *  },
      *  {
        *    propertyName: Controller
        *  }
      * ]
      */
					this.__rememberedObjectIndecesToControllers = [];

					this.__listening = [];

					// Default parameters
					params = _common2.default.defaults(params, {
						closeOnTop: false,
						autoPlace: true,
						width: GUI.DEFAULT_WIDTH
					});

					params = _common2.default.defaults(params, {
						resizable: params.autoPlace,
						hideable: params.autoPlace
					});

					if (!_common2.default.isUndefined(params.load)) {
						// Explicit preset
						if (params.preset) {
							params.load.preset = params.preset;
						}
					} else {
						params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
					}

					if (_common2.default.isUndefined(params.parent) && params.hideable) {
						hideableGuis.push(this);
					}

					// Only root level GUI's are resizable.
					params.resizable = _common2.default.isUndefined(params.parent) && params.resizable;

					if (params.autoPlace && _common2.default.isUndefined(params.scrollable)) {
						params.scrollable = true;
					}
					//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

					// Not part of params because I don't want people passing this in via
					// constructor. Should be a 'remembered' value.
					var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

					var saveToLocalStorage = void 0;

					Object.defineProperties(this,
					/** @lends dat.gui.GUI.prototype */
					{
						/**
       * The parent <code>GUI</code>
       * @type dat.gui.GUI
       */
						parent: {
							get: function get$$1() {
								return params.parent;
							}
						},

						scrollable: {
							get: function get$$1() {
								return params.scrollable;
							}
						},

						/**
       * Handles <code>GUI</code>'s element placement for you
       * @type Boolean
       */
						autoPlace: {
							get: function get$$1() {
								return params.autoPlace;
							}
						},

						/**
       * Handles <code>GUI</code>'s position of open/close button
       * @type Boolean
       */
						closeOnTop: {
							get: function get$$1() {
								return params.closeOnTop;
							}
						},

						/**
       * The identifier for a set of saved values
       * @type String
       */
						preset: {
							get: function get$$1() {
								if (_this.parent) {
									return _this.getRoot().preset;
								}

								return params.load.preset;
							},

							set: function set$$1(v) {
								if (_this.parent) {
									_this.getRoot().preset = v;
								} else {
									params.load.preset = v;
								}
								setPresetSelectIndex(this);
								_this.revert();
							}
						},

						/**
       * The width of <code>GUI</code> element
       * @type Number
       */
						width: {
							get: function get$$1() {
								return params.width;
							},
							set: function set$$1(v) {
								params.width = v;
								setWidth(_this, v);
							}
						},

						/**
       * The name of <code>GUI</code>. Used for folders. i.e
       * a folder's name
       * @type String
       */
						name: {
							get: function get$$1() {
								return params.name;
							},
							set: function set$$1(v) {
								// TODO Check for collisions among sibling folders
								params.name = v;
								if (titleRowName) {
									titleRowName.innerHTML = params.name;
								}
							}
						},

						/**
       * Whether the <code>GUI</code> is collapsed or not
       * @type Boolean
       */
						closed: {
							get: function get$$1() {
								return params.closed;
							},
							set: function set$$1(v) {
								params.closed = v;
								if (params.closed) {
									_dom2.default.addClass(_this.__ul, GUI.CLASS_CLOSED);
								} else {
									_dom2.default.removeClass(_this.__ul, GUI.CLASS_CLOSED);
								}
								// For browsers that aren't going to respect the CSS transition,
								// Lets just check our height against the window height right off
								// the bat.
								this.onResize();

								if (_this.__closeButton) {
									_this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
								}
							}
						},

						/**
       * Contains all presets
       * @type Object
       */
						load: {
							get: function get$$1() {
								return params.load;
							}
						},

						/**
       * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
       * <code>remember</code>ing
       * @type Boolean
       */
						useLocalStorage: {

							get: function get$$1() {
								return useLocalStorage;
							},
							set: function set$$1(bool) {
								if (SUPPORTS_LOCAL_STORAGE) {
									useLocalStorage = bool;
									if (bool) {
										_dom2.default.bind(window, 'unload', saveToLocalStorage);
									} else {
										_dom2.default.unbind(window, 'unload', saveToLocalStorage);
									}
									localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
								}
							}
						}
					});

					// Are we a root level GUI?
					if (_common2.default.isUndefined(params.parent)) {
						params.closed = false;

						_dom2.default.addClass(this.domElement, GUI.CLASS_MAIN);
						_dom2.default.makeSelectable(this.domElement, false);

						// Are we supposed to be loading locally?
						if (SUPPORTS_LOCAL_STORAGE) {
							if (useLocalStorage) {
								_this.useLocalStorage = true;

								var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

								if (savedGui) {
									params.load = JSON.parse(savedGui);
								}
							}
						}

						this.__closeButton = document.createElement('div');
						this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
						_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
						if (params.closeOnTop) {
							_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
							this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
						} else {
							_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
							this.domElement.appendChild(this.__closeButton);
						}

						_dom2.default.bind(this.__closeButton, 'click', function () {
							_this.closed = !_this.closed;
						});
						// Oh, you're a nested GUI!
					} else {
						if (params.closed === undefined) {
							params.closed = true;
						}

						var _titleRowName = document.createTextNode(params.name);
						_dom2.default.addClass(_titleRowName, 'controller-name');

						var titleRow = addRow(_this, _titleRowName);

						var onClickTitle = function onClickTitle(e) {
							e.preventDefault();
							_this.closed = !_this.closed;
							return false;
						};

						_dom2.default.addClass(this.__ul, GUI.CLASS_CLOSED);

						_dom2.default.addClass(titleRow, 'title');
						_dom2.default.bind(titleRow, 'click', onClickTitle);

						if (!params.closed) {
							this.closed = false;
						}
					}

					if (params.autoPlace) {
						if (_common2.default.isUndefined(params.parent)) {
							if (autoPlaceVirgin) {
								autoPlaceContainer = document.createElement('div');
								_dom2.default.addClass(autoPlaceContainer, CSS_NAMESPACE);
								_dom2.default.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
								document.body.appendChild(autoPlaceContainer);
								autoPlaceVirgin = false;
							}

							// Put it in the dom for you.
							autoPlaceContainer.appendChild(this.domElement);

							// Apply the auto styles
							_dom2.default.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
						}

						// Make it not elastic.
						if (!this.parent) {
							setWidth(_this, params.width);
						}
					}

					this.__resizeHandler = function () {
						_this.onResizeDebounced();
					};

					_dom2.default.bind(window, 'resize', this.__resizeHandler);
					_dom2.default.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
					_dom2.default.bind(this.__ul, 'transitionend', this.__resizeHandler);
					_dom2.default.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
					this.onResize();

					if (params.resizable) {
						addResizeHandle(this);
					}

					saveToLocalStorage = function saveToLocalStorage() {
						if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
							localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
						}
					};

					// expose this method publicly
					this.saveToLocalStorageIfPossible = saveToLocalStorage;

					function resetWidth() {
						var root = _this.getRoot();
						root.width += 1;
						_common2.default.defer(function () {
							root.width -= 1;
						});
					}

					if (!params.parent) {
						resetWidth();
					}
				};

				GUI.toggleHide = function () {
					hide = !hide;
					_common2.default.each(hideableGuis, function (gui) {
						gui.domElement.style.display = hide ? 'none' : '';
					});
				};

				GUI.CLASS_AUTO_PLACE = 'a';
				GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
				GUI.CLASS_MAIN = 'main';
				GUI.CLASS_CONTROLLER_ROW = 'cr';
				GUI.CLASS_TOO_TALL = 'taller-than-window';
				GUI.CLASS_CLOSED = 'closed';
				GUI.CLASS_CLOSE_BUTTON = 'close-button';
				GUI.CLASS_CLOSE_TOP = 'close-top';
				GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
				GUI.CLASS_DRAG = 'drag';

				GUI.DEFAULT_WIDTH = 245;
				GUI.TEXT_CLOSED = 'Close Controls';
				GUI.TEXT_OPEN = 'Open Controls';

				GUI._keydownHandler = function (e) {
					if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
						GUI.toggleHide();
					}
				};
				_dom2.default.bind(window, 'keydown', GUI._keydownHandler, false);

				_common2.default.extend(GUI.prototype,

				/** @lends dat.gui.GUI */
				{

					/**
      * @param object
      * @param property
      * @returns {dat.controllers.Controller} The new controller that was added.
      * @instance
      */
					add: function add(object, property) {
						return _add(this, object, property, {
							factoryArgs: Array.prototype.slice.call(arguments, 2)
						});
					},

					/**
      * @param object
      * @param property
      * @returns {dat.controllers.ColorController} The new controller that was added.
      * @instance
      */
					addColor: function addColor(object, property) {
						return _add(this, object, property, {
							color: true
						});
					},

					/**
      * @param controller
      * @instance
      */
					remove: function remove(controller) {
						// TODO listening?
						this.__ul.removeChild(controller.__li);
						this.__controllers.splice(this.__controllers.indexOf(controller), 1);
						var _this = this;
						_common2.default.defer(function () {
							_this.onResize();
						});
					},

					destroy: function destroy() {
						if (this.autoPlace) {
							autoPlaceContainer.removeChild(this.domElement);
						}

						_dom2.default.unbind(window, 'keydown', GUI._keydownHandler, false);
						_dom2.default.unbind(window, 'resize', this.__resizeHandler);

						if (this.saveToLocalStorageIfPossible) {
							_dom2.default.unbind(window, 'unload', this.saveToLocalStorageIfPossible);
						}
					},

					/**
      * @param name
      * @returns {dat.gui.GUI} The new folder.
      * @throws {Error} if this GUI already has a folder by the specified
      * name
      * @instance
      */
					addFolder: function addFolder(name) {
						// We have to prevent collisions on names in order to have a key
						// by which to remember saved values
						if (this.__folders[name] !== undefined) {
							throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
						}

						var newGuiParams = { name: name, parent: this };

						// We need to pass down the autoPlace trait so that we can
						// attach event listeners to open/close folder actions to
						// ensure that a scrollbar appears if the window is too short.
						newGuiParams.autoPlace = this.autoPlace;

						// Do we have saved appearance data for this folder?
						if (this.load && // Anything loaded?
						this.load.folders && // Was my parent a dead-end?
						this.load.folders[name]) {
							// Did daddy remember me?
							// Start me closed if I was closed
							newGuiParams.closed = this.load.folders[name].closed;

							// Pass down the loaded data
							newGuiParams.load = this.load.folders[name];
						}

						var gui = new GUI(newGuiParams);
						this.__folders[name] = gui;

						var li = addRow(this, gui.domElement);
						_dom2.default.addClass(li, 'folder');
						return gui;
					},

					open: function open() {
						this.closed = false;
					},

					close: function close() {
						this.closed = true;
					},

					onResize: function onResize() {
						// we debounce this function to prevent performance issues when rotating on tablet/mobile
						var root = this.getRoot();
						if (root.scrollable) {
							var top = _dom2.default.getOffset(root.__ul).top;
							var h = 0;

							_common2.default.each(root.__ul.childNodes, function (node) {
								if (!(root.autoPlace && node === root.__save_row)) {
									h += _dom2.default.getHeight(node);
								}
							});

							if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
								_dom2.default.addClass(root.domElement, GUI.CLASS_TOO_TALL);
								root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
							} else {
								_dom2.default.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
								root.__ul.style.height = 'auto';
							}
						}

						if (root.__resize_handle) {
							_common2.default.defer(function () {
								root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
							});
						}

						if (root.__closeButton) {
							root.__closeButton.style.width = root.width + 'px';
						}
					},

					onResizeDebounced: _common2.default.debounce(function () {
						this.onResize();
					}, 50),

					/**
      * Mark objects for saving. The order of these objects cannot change as
      * the GUI grows. When remembering new objects, append them to the end
      * of the list.
      *
      * @param {Object...} objects
      * @throws {Error} if not called on a top level GUI.
      * @instance
      */
					remember: function remember() {
						if (_common2.default.isUndefined(SAVE_DIALOGUE)) {
							SAVE_DIALOGUE = new _CenteredDiv2.default();
							SAVE_DIALOGUE.domElement.innerHTML = _saveDialogue2.default;
						}

						if (this.parent) {
							throw new Error('You can only call remember on a top level GUI.');
						}

						var _this = this;

						_common2.default.each(Array.prototype.slice.call(arguments), function (object) {
							if (_this.__rememberedObjects.length === 0) {
								addSaveMenu(_this);
							}
							if (_this.__rememberedObjects.indexOf(object) === -1) {
								_this.__rememberedObjects.push(object);
							}
						});

						if (this.autoPlace) {
							// Set save row width
							setWidth(this, this.width);
						}
					},

					/**
      * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
      * @instance
      */
					getRoot: function getRoot() {
						var gui = this;
						while (gui.parent) {
							gui = gui.parent;
						}
						return gui;
					},

					/**
      * @returns {Object} a JSON object representing the current state of
      * this GUI as well as its remembered properties.
      * @instance
      */
					getSaveObject: function getSaveObject() {
						var toReturn = this.load;
						toReturn.closed = this.closed;

						// Am I remembering any values?
						if (this.__rememberedObjects.length > 0) {
							toReturn.preset = this.preset;

							if (!toReturn.remembered) {
								toReturn.remembered = {};
							}

							toReturn.remembered[this.preset] = getCurrentPreset(this);
						}

						toReturn.folders = {};
						_common2.default.each(this.__folders, function (element, key) {
							toReturn.folders[key] = element.getSaveObject();
						});

						return toReturn;
					},

					save: function save() {
						if (!this.load.remembered) {
							this.load.remembered = {};
						}

						this.load.remembered[this.preset] = getCurrentPreset(this);
						markPresetModified(this, false);
						this.saveToLocalStorageIfPossible();
					},

					saveAs: function saveAs(presetName) {
						if (!this.load.remembered) {
							// Retain default values upon first save
							this.load.remembered = {};
							this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
						}

						this.load.remembered[presetName] = getCurrentPreset(this);
						this.preset = presetName;
						addPresetOption(this, presetName, true);
						this.saveToLocalStorageIfPossible();
					},

					revert: function revert(gui) {
						_common2.default.each(this.__controllers, function (controller) {
							// Make revert work on Default.
							if (!this.getRoot().load.remembered) {
								controller.setValue(controller.initialValue);
							} else {
								recallSavedValue(gui || this.getRoot(), controller);
							}

							// fire onFinishChange callback
							if (controller.__onFinishChange) {
								controller.__onFinishChange.call(controller, controller.getValue());
							}
						}, this);

						_common2.default.each(this.__folders, function (folder) {
							folder.revert(folder);
						});

						if (!gui) {
							markPresetModified(this.getRoot(), false);
						}
					},

					listen: function listen(controller) {
						var init = this.__listening.length === 0;
						this.__listening.push(controller);
						if (init) {
							updateDisplays(this.__listening);
						}
					},

					updateDisplay: function updateDisplay() {
						_common2.default.each(this.__controllers, function (controller) {
							controller.updateDisplay();
						});
						_common2.default.each(this.__folders, function (folder) {
							folder.updateDisplay();
						});
					}
				});

				/**
     * Add a row to the end of the GUI or before another row.
     *
     * @param gui
     * @param [newDom] If specified, inserts the dom content in the new row
     * @param [liBefore] If specified, places the new row before another row
     */
				function addRow(gui, newDom, liBefore) {
					var li = document.createElement('li');
					if (newDom) {
						li.appendChild(newDom);
					}

					if (liBefore) {
						gui.__ul.insertBefore(li, liBefore);
					} else {
						gui.__ul.appendChild(li);
					}
					gui.onResize();
					return li;
				}

				function markPresetModified(gui, modified) {
					var opt = gui.__preset_select[gui.__preset_select.selectedIndex];

					// console.log('mark', modified, opt);
					if (modified) {
						opt.innerHTML = opt.value + '*';
					} else {
						opt.innerHTML = opt.value;
					}
				}

				function augmentController(gui, li, controller) {
					controller.__li = li;
					controller.__gui = gui;

					_common2.default.extend(controller, {
						options: function options(_options) {
							if (arguments.length > 1) {
								var nextSibling = controller.__li.nextElementSibling;
								controller.remove();

								return _add(gui, controller.object, controller.property, {
									before: nextSibling,
									factoryArgs: [_common2.default.toArray(arguments)]
								});
							}

							if (_common2.default.isArray(_options) || _common2.default.isObject(_options)) {
								var _nextSibling = controller.__li.nextElementSibling;
								controller.remove();

								return _add(gui, controller.object, controller.property, {
									before: _nextSibling,
									factoryArgs: [_options]
								});
							}
						},

						name: function name(v) {
							controller.__li.firstElementChild.firstElementChild.innerHTML = v;
							return controller;
						},

						listen: function listen() {
							controller.__gui.listen(controller);
							return controller;
						},

						remove: function remove() {
							controller.__gui.remove(controller);
							return controller;
						}
					});

					// All sliders should be accompanied by a box.
					if (controller instanceof _NumberControllerSlider2.default) {
						var box = new _NumberControllerBox2.default(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });

						_common2.default.each(['updateDisplay', 'onChange', 'onFinishChange', 'step'], function (method) {
							var pc = controller[method];
							var pb = box[method];
							controller[method] = box[method] = function () {
								var args = Array.prototype.slice.call(arguments);
								pb.apply(box, args);
								return pc.apply(controller, args);
							};
						});

						_dom2.default.addClass(li, 'has-slider');
						controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
					} else if (controller instanceof _NumberControllerBox2.default) {
						var r = function r(returned) {
							// Have we defined both boundaries?
							if (_common2.default.isNumber(controller.__min) && _common2.default.isNumber(controller.__max)) {
								// Well, then lets just replace this with a slider.

								// lets remember if the old controller had a specific name or was listening
								var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
								var wasListening = controller.__gui.__listening.indexOf(controller) > -1;

								controller.remove();
								var newController = _add(gui, controller.object, controller.property, {
									before: controller.__li.nextElementSibling,
									factoryArgs: [controller.__min, controller.__max, controller.__step]
								});

								newController.name(oldName);
								if (wasListening) newController.listen();

								return newController;
							}

							return returned;
						};

						controller.min = _common2.default.compose(r, controller.min);
						controller.max = _common2.default.compose(r, controller.max);
					} else if (controller instanceof _BooleanController2.default) {
						_dom2.default.bind(li, 'click', function () {
							_dom2.default.fakeEvent(controller.__checkbox, 'click');
						});

						_dom2.default.bind(controller.__checkbox, 'click', function (e) {
							e.stopPropagation(); // Prevents double-toggle
						});
					} else if (controller instanceof _FunctionController2.default) {
						_dom2.default.bind(li, 'click', function () {
							_dom2.default.fakeEvent(controller.__button, 'click');
						});

						_dom2.default.bind(li, 'mouseover', function () {
							_dom2.default.addClass(controller.__button, 'hover');
						});

						_dom2.default.bind(li, 'mouseout', function () {
							_dom2.default.removeClass(controller.__button, 'hover');
						});
					} else if (controller instanceof _ColorController2.default) {
						_dom2.default.addClass(li, 'color');
						controller.updateDisplay = _common2.default.compose(function (val) {
							li.style.borderLeftColor = controller.__color.toString();
							return val;
						}, controller.updateDisplay);

						controller.updateDisplay();
					}

					controller.setValue = _common2.default.compose(function (val) {
						if (gui.getRoot().__preset_select && controller.isModified()) {
							markPresetModified(gui.getRoot(), true);
						}

						return val;
					}, controller.setValue);
				}

				function recallSavedValue(gui, controller) {
					// Find the topmost GUI, that's where remembered objects live.
					var root = gui.getRoot();

					// Does the object we're controlling match anything we've been told to
					// remember?
					var matchedIndex = root.__rememberedObjects.indexOf(controller.object);

					// Why yes, it does!
					if (matchedIndex !== -1) {
						// Let me fetch a map of controllers for thcommon.isObject.
						var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];

						// Ohp, I believe this is the first controller we've created for this
						// object. Lets make the map fresh.
						if (controllerMap === undefined) {
							controllerMap = {};
							root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
						}

						// Keep track of this controller
						controllerMap[controller.property] = controller;

						// Okay, now have we saved any values for this controller?
						if (root.load && root.load.remembered) {
							var presetMap = root.load.remembered;

							// Which preset are we trying to load?
							var preset = void 0;

							if (presetMap[gui.preset]) {
								preset = presetMap[gui.preset];
							} else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
								// Uhh, you can have the default instead?
								preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
							} else {
								// Nada.
								return;
							}

							// Did the loaded object remember thcommon.isObject? &&  Did we remember this particular property?
							if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
								// We did remember something for this guy ...
								var value = preset[matchedIndex][controller.property];

								// And that's what it is.
								controller.initialValue = value;
								controller.setValue(value);
							}
						}
					}
				}

				function _add(gui, object, property, params) {
					if (object[property] === undefined) {
						throw new Error('Object "' + object + '" has no property "' + property + '"');
					}

					var controller = void 0;

					if (params.color) {
						controller = new _ColorController2.default(object, property);
					} else {
						var factoryArgs = [object, property].concat(params.factoryArgs);
						controller = _ControllerFactory2.default.apply(gui, factoryArgs);
					}

					if (params.before instanceof _Controller2.default) {
						params.before = params.before.__li;
					}

					recallSavedValue(gui, controller);

					_dom2.default.addClass(controller.domElement, 'c');

					var name = document.createElement('span');
					_dom2.default.addClass(name, 'property-name');
					name.innerHTML = controller.property;

					var container = document.createElement('div');
					container.appendChild(name);
					container.appendChild(controller.domElement);

					var li = addRow(gui, container, params.before);

					_dom2.default.addClass(li, GUI.CLASS_CONTROLLER_ROW);
					if (controller instanceof _ColorController2.default) {
						_dom2.default.addClass(li, 'color');
					} else {
						_dom2.default.addClass(li, _typeof$$1(controller.getValue()));
					}

					augmentController(gui, li, controller);

					gui.__controllers.push(controller);

					return controller;
				}

				function getLocalStorageHash(gui, key) {
					// TODO how does this deal with multiple GUI's?
					return document.location.href + '.' + key;
				}

				function addPresetOption(gui, name, setSelected) {
					var opt = document.createElement('option');
					opt.innerHTML = name;
					opt.value = name;
					gui.__preset_select.appendChild(opt);
					if (setSelected) {
						gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
					}
				}

				function showHideExplain(gui, explain) {
					explain.style.display = gui.useLocalStorage ? 'block' : 'none';
				}

				function addSaveMenu(gui) {
					var div = gui.__save_row = document.createElement('li');

					_dom2.default.addClass(gui.domElement, 'has-save');

					gui.__ul.insertBefore(div, gui.__ul.firstChild);

					_dom2.default.addClass(div, 'save-row');

					var gears = document.createElement('span');
					gears.innerHTML = '&nbsp;';
					_dom2.default.addClass(gears, 'button gears');

					// TODO replace with FunctionController
					var button = document.createElement('span');
					button.innerHTML = 'Save';
					_dom2.default.addClass(button, 'button');
					_dom2.default.addClass(button, 'save');

					var button2 = document.createElement('span');
					button2.innerHTML = 'New';
					_dom2.default.addClass(button2, 'button');
					_dom2.default.addClass(button2, 'save-as');

					var button3 = document.createElement('span');
					button3.innerHTML = 'Revert';
					_dom2.default.addClass(button3, 'button');
					_dom2.default.addClass(button3, 'revert');

					var select = gui.__preset_select = document.createElement('select');

					if (gui.load && gui.load.remembered) {
						_common2.default.each(gui.load.remembered, function (value, key) {
							addPresetOption(gui, key, key === gui.preset);
						});
					} else {
						addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
					}

					_dom2.default.bind(select, 'change', function () {
						for (var index = 0; index < gui.__preset_select.length; index++) {
							gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
						}

						gui.preset = this.value;
					});

					div.appendChild(select);
					div.appendChild(gears);
					div.appendChild(button);
					div.appendChild(button2);
					div.appendChild(button3);

					if (SUPPORTS_LOCAL_STORAGE) {
						var explain = document.getElementById('dg-local-explain');
						var localStorageCheckBox = document.getElementById('dg-local-storage');
						var saveLocally = document.getElementById('dg-save-locally');

						saveLocally.style.display = 'block';

						if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
							localStorageCheckBox.setAttribute('checked', 'checked');
						}

						showHideExplain(gui, explain);

						// TODO: Use a boolean controller, fool!
						_dom2.default.bind(localStorageCheckBox, 'change', function () {
							gui.useLocalStorage = !gui.useLocalStorage;
							showHideExplain(gui, explain);
						});
					}

					var newConstructorTextArea = document.getElementById('dg-new-constructor');

					_dom2.default.bind(newConstructorTextArea, 'keydown', function (e) {
						if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
							SAVE_DIALOGUE.hide();
						}
					});

					_dom2.default.bind(gears, 'click', function () {
						newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
						SAVE_DIALOGUE.show();
						newConstructorTextArea.focus();
						newConstructorTextArea.select();
					});

					_dom2.default.bind(button, 'click', function () {
						gui.save();
					});

					_dom2.default.bind(button2, 'click', function () {
						var presetName = prompt('Enter a new preset name.');
						if (presetName) {
							gui.saveAs(presetName);
						}
					});

					_dom2.default.bind(button3, 'click', function () {
						gui.revert();
					});

					// div.appendChild(button2);
				}

				function addResizeHandle(gui) {
					var pmouseX = void 0;

					gui.__resize_handle = document.createElement('div');

					_common2.default.extend(gui.__resize_handle.style, {

						width: '6px',
						marginLeft: '-3px',
						height: '200px',
						cursor: 'ew-resize',
						position: 'absolute'
						// border: '1px solid blue'

					});

					function drag(e) {
						e.preventDefault();

						gui.width += pmouseX - e.clientX;
						gui.onResize();
						pmouseX = e.clientX;

						return false;
					}

					function dragStop() {
						_dom2.default.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
						_dom2.default.unbind(window, 'mousemove', drag);
						_dom2.default.unbind(window, 'mouseup', dragStop);
					}

					function dragStart(e) {
						e.preventDefault();

						pmouseX = e.clientX;

						_dom2.default.addClass(gui.__closeButton, GUI.CLASS_DRAG);
						_dom2.default.bind(window, 'mousemove', drag);
						_dom2.default.bind(window, 'mouseup', dragStop);

						return false;
					}

					_dom2.default.bind(gui.__resize_handle, 'mousedown', dragStart);
					_dom2.default.bind(gui.__closeButton, 'mousedown', dragStart);

					gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
				}

				function setWidth(gui, w) {
					gui.domElement.style.width = w + 'px';
					// Auto placed save-rows are position fixed, so we have to
					// set the width manually if we want it to bleed to the edge
					if (gui.__save_row && gui.autoPlace) {
						gui.__save_row.style.width = w + 'px';
					}
					if (gui.__closeButton) {
						gui.__closeButton.style.width = w + 'px';
					}
				}

				function getCurrentPreset(gui, useInitialValues) {
					var toReturn = {};

					// For each object I'm remembering
					_common2.default.each(gui.__rememberedObjects, function (val, index) {
						var savedValues = {};

						// The controllers I've made for thcommon.isObject by property
						var controllerMap = gui.__rememberedObjectIndecesToControllers[index];

						// Remember each value for each property
						_common2.default.each(controllerMap, function (controller, property) {
							savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
						});

						// Save the values for thcommon.isObject
						toReturn[index] = savedValues;
					});

					return toReturn;
				}

				function setPresetSelectIndex(gui) {
					for (var index = 0; index < gui.__preset_select.length; index++) {
						if (gui.__preset_select[index].value === gui.preset) {
							gui.__preset_select.selectedIndex = index;
						}
					}
				}

				function updateDisplays(controllerArray) {
					if (controllerArray.length !== 0) {
						_requestAnimationFrame2.default.call(window, function () {
							updateDisplays(controllerArray);
						});
					}

					_common2.default.each(controllerArray, function (c) {
						c.updateDisplay();
					});
				}

				exports.default = GUI;
				module.exports = exports['default'];

				/***/
			},
			/* 18 */
			/***/function (module, exports) {

				module.exports = {
					load: function load(url, indoc) {
						var doc = indoc || document;
						var link = doc.createElement('link');
						link.type = 'text/css';
						link.rel = 'stylesheet';
						link.href = url;
						doc.getElementsByTagName('head')[0].appendChild(link);
					},

					inject: function inject(css, indoc) {
						var doc = indoc || document;
						var injected = document.createElement('style');
						injected.type = 'text/css';
						injected.innerHTML = css;
						var head = doc.getElementsByTagName('head')[0];
						try {
							head.appendChild(injected);
						} catch (e) {// Unable to inject CSS, probably because of a Content Security Policy
						}
					}
				};

				/***/
			},
			/* 19 */
			/***/function (module, exports) {

				module.exports = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

				/***/
			},
			/* 20 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _OptionController = __webpack_require__(10);

				var _OptionController2 = _interopRequireDefault(_OptionController);

				var _NumberControllerBox = __webpack_require__(13);

				var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

				var _NumberControllerSlider = __webpack_require__(14);

				var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

				var _StringController = __webpack_require__(11);

				var _StringController2 = _interopRequireDefault(_StringController);

				var _FunctionController = __webpack_require__(15);

				var _FunctionController2 = _interopRequireDefault(_FunctionController);

				var _BooleanController = __webpack_require__(8);

				var _BooleanController2 = _interopRequireDefault(_BooleanController);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var ControllerFactory = function ControllerFactory(object, property) {
					var initialValue = object[property];

					// Providing options?
					if (_common2.default.isArray(arguments[2]) || _common2.default.isObject(arguments[2])) {
						return new _OptionController2.default(object, property, arguments[2]);
					}

					// Providing a map?
					if (_common2.default.isNumber(initialValue)) {
						// Has min and max? (slider)
						if (_common2.default.isNumber(arguments[2]) && _common2.default.isNumber(arguments[3])) {
							// has step?
							if (_common2.default.isNumber(arguments[4])) {
								return new _NumberControllerSlider2.default(object, property, arguments[2], arguments[3], arguments[4]);
							}

							return new _NumberControllerSlider2.default(object, property, arguments[2], arguments[3]);
						}

						// number box
						if (_common2.default.isNumber(arguments[4])) {
							// has step
							return new _NumberControllerBox2.default(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
						}
						return new _NumberControllerBox2.default(object, property, { min: arguments[2], max: arguments[3] });
					}

					if (_common2.default.isString(initialValue)) {
						return new _StringController2.default(object, property);
					}

					if (_common2.default.isFunction(initialValue)) {
						return new _FunctionController2.default(object, property, '');
					}

					if (_common2.default.isBoolean(initialValue)) {
						return new _BooleanController2.default(object, property);
					}

					return null;
				}; /**
        * dat-gui JavaScript Controller Library
        * http://code.google.com/p/dat-gui
        *
        * Copyright 2011 Data Arts Team, Google Creative Lab
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        */

				exports.default = ControllerFactory;
				module.exports = exports['default'];

				/***/
			},
			/* 21 */
			/***/function (module, exports) {

				exports.__esModule = true;
				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				function requestAnimationFrame(callback) {
					setTimeout(callback, 1000 / 60);
				}

				exports.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;
				module.exports = exports["default"];

				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				var CenteredDiv = function () {
					function CenteredDiv() {
						_classCallCheck(this, CenteredDiv);

						this.backgroundElement = document.createElement('div');
						_common2.default.extend(this.backgroundElement.style, {
							backgroundColor: 'rgba(0,0,0,0.8)',
							top: 0,
							left: 0,
							display: 'none',
							zIndex: '1000',
							opacity: 0,
							WebkitTransition: 'opacity 0.2s linear',
							transition: 'opacity 0.2s linear'
						});

						_dom2.default.makeFullscreen(this.backgroundElement);
						this.backgroundElement.style.position = 'fixed';

						this.domElement = document.createElement('div');
						_common2.default.extend(this.domElement.style, {
							position: 'fixed',
							display: 'none',
							zIndex: '1001',
							opacity: 0,
							WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
							transition: 'transform 0.2s ease-out, opacity 0.2s linear'
						});

						document.body.appendChild(this.backgroundElement);
						document.body.appendChild(this.domElement);

						var _this = this;
						_dom2.default.bind(this.backgroundElement, 'click', function () {
							_this.hide();
						});
					}

					CenteredDiv.prototype.show = function show() {
						var _this = this;

						this.backgroundElement.style.display = 'block';

						this.domElement.style.display = 'block';
						this.domElement.style.opacity = 0;
						//    this.domElement.style.top = '52%';
						this.domElement.style.webkitTransform = 'scale(1.1)';

						this.layout();

						_common2.default.defer(function () {
							_this.backgroundElement.style.opacity = 1;
							_this.domElement.style.opacity = 1;
							_this.domElement.style.webkitTransform = 'scale(1)';
						});
					};

					/**
      * Hide centered div
      */

					CenteredDiv.prototype.hide = function hide() {
						var _this = this;

						var hide = function hide() {
							_this.domElement.style.display = 'none';
							_this.backgroundElement.style.display = 'none';

							_dom2.default.unbind(_this.domElement, 'webkitTransitionEnd', hide);
							_dom2.default.unbind(_this.domElement, 'transitionend', hide);
							_dom2.default.unbind(_this.domElement, 'oTransitionEnd', hide);
						};

						_dom2.default.bind(this.domElement, 'webkitTransitionEnd', hide);
						_dom2.default.bind(this.domElement, 'transitionend', hide);
						_dom2.default.bind(this.domElement, 'oTransitionEnd', hide);

						this.backgroundElement.style.opacity = 0;
						//    this.domElement.style.top = '48%';
						this.domElement.style.opacity = 0;
						this.domElement.style.webkitTransform = 'scale(1.1)';
					};

					CenteredDiv.prototype.layout = function layout() {
						this.domElement.style.left = window.innerWidth / 2 - _dom2.default.getWidth(this.domElement) / 2 + 'px';
						this.domElement.style.top = window.innerHeight / 2 - _dom2.default.getHeight(this.domElement) / 2 + 'px';
					};

					return CenteredDiv;
				}();

				exports.default = CenteredDiv;
				module.exports = exports['default'];

				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(24)();
				// imports


				// module
				exports.push([module.id, ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */\n  /** allow overflow for color selector */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button.close-top {\n        position: relative; }\n      .dg.main .close-button.close-bottom {\n        position: absolute; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-y: visible; }\n    .dg.a.has-save > ul.close-top {\n      margin-top: 0; }\n    .dg.a.has-save > ul.close-bottom {\n      margin-top: 27px; }\n    .dg.a.has-save > ul.closed {\n      margin-top: 0; }\n    .dg.a .save-row {\n      top: 0;\n      z-index: 1002; }\n      .dg.a .save-row.close-top {\n        position: relative; }\n      .dg.a .save-row.close-bottom {\n        position: fixed; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out;\n    -webkit-transition: overflow 0.1s linear;\n    -o-transition: overflow 0.1s linear;\n    -moz-transition: overflow 0.1s linear;\n    transition: overflow 0.1s linear; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid transparent; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px;\n    overflow: hidden; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%;\n    position: relative; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 7px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .cr.color {\n    overflow: visible; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.color {\n    border-left: 3px solid; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2FA1D6; }\n    .dg .cr.number input[type=text] {\n      color: #2FA1D6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2FA1D6;\n    max-width: 100%; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", ""]);

				// exports


				/***/
			},
			/* 24 */
			/***/function (module, exports) {

				/*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];

					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};

					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string") modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number") alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};

				/***/
			}
			/******/])
		);
	});
	
	
});

var dat = unwrapExports(dat_gui);

var strictUriEncode = function strictUriEncode(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function extract(str) {
	return str.split('?')[1] || '';
};

var parse = function parse(str, opts) {
	opts = objectAssign({ arrayFormat: 'none' }, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function stringify(obj, opts) {
	var defaults$$1 = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults$$1, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var queryString = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

var debounce = function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

var alea = createCommonjsModule(function (module) {
  // A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
  // http://baagoe.com/en/RandomMusings/javascript/
  // https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
  // Original work is under MIT license -

  // Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:
  // 
  // The above copyright notice and this permission notice shall be included in
  // all copies or substantial portions of the Software.
  // 
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  // THE SOFTWARE.


  (function (global, module, define) {

    function Alea(seed) {
      var me = this,
          mash = Mash();

      me.next = function () {
        var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
        me.s0 = me.s1;
        me.s1 = me.s2;
        return me.s2 = t - (me.c = t | 0);
      };

      // Apply the seeding algorithm from Baagoe.
      me.c = 1;
      me.s0 = mash(' ');
      me.s1 = mash(' ');
      me.s2 = mash(' ');
      me.s0 -= mash(seed);
      if (me.s0 < 0) {
        me.s0 += 1;
      }
      me.s1 -= mash(seed);
      if (me.s1 < 0) {
        me.s1 += 1;
      }
      me.s2 -= mash(seed);
      if (me.s2 < 0) {
        me.s2 += 1;
      }
      mash = null;
    }

    function copy(f, t) {
      t.c = f.c;
      t.s0 = f.s0;
      t.s1 = f.s1;
      t.s2 = f.s2;
      return t;
    }

    function impl(seed, opts) {
      var xg = new Alea(seed),
          state = opts && opts.state,
          prng = xg.next;
      prng.int32 = function () {
        return xg.next() * 0x100000000 | 0;
      };
      prng.double = function () {
        return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
      };
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    function Mash() {
      var n = 0xefc8249d;

      var mash = function mash(data) {
        data = data.toString();
        for (var i = 0; i < data.length; i++) {
          n += data.charCodeAt(i);
          var h = 0.02519603282416938 * n;
          n = h >>> 0;
          h -= n;
          h *= n;
          n = h >>> 0;
          h -= n;
          n += h * 0x100000000; // 2^32
        }
        return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
      };

      return mash;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.alea = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xor128 = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xor128" prng algorithm by
  // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this,
          strseed = '';

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;

      // Set up generator function.
      me.next = function () {
        var t = me.x ^ me.x << 11;
        me.x = me.y;
        me.y = me.z;
        me.z = me.w;
        return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
      };

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xor128 = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xorwow = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xorwow" prng algorithm by
  // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this,
          strseed = '';

      // Set up generator function.
      me.next = function () {
        var t = me.x ^ me.x >>> 2;
        me.x = me.y;me.y = me.z;me.z = me.w;me.w = me.v;
        return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
      };

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;
      me.v = 0;

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        if (k == strseed.length) {
          me.d = me.x << 10 ^ me.x >>> 4;
        }
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      t.v = f.v;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xorwow = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xorshift7 = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xorshift7" algorithm by
  // François Panneton and Pierre L'ecuyer:
  // "On the Xorgshift Random Number Generators"
  // http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this;

      // Set up generator function.
      me.next = function () {
        // Update xor generator.
        var X = me.x,
            i = me.i,
            t,
            v;
        t = X[i];t ^= t >>> 7;v = t ^ t << 24;
        t = X[i + 1 & 7];v ^= t ^ t >>> 10;
        t = X[i + 3 & 7];v ^= t ^ t >>> 3;
        t = X[i + 4 & 7];v ^= t ^ t << 7;
        t = X[i + 7 & 7];t = t ^ t << 13;v ^= t ^ t << 9;
        X[i] = v;
        me.i = i + 1 & 7;
        return v;
      };

      function init(me, seed) {
        var j,
            w,
            X = [];

        if (seed === (seed | 0)) {
          // Seed state array using a 32-bit integer.
          w = X[0] = seed;
        } else {
          // Seed state using a string.
          seed = '' + seed;
          for (j = 0; j < seed.length; ++j) {
            X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
          }
        }
        // Enforce an array length of 8, not all zeroes.
        while (X.length < 8) {
          X.push(0);
        }for (j = 0; j < 8 && X[j] === 0; ++j) {}
        if (j == 8) w = X[7] = -1;else w = X[j];

        me.x = X;
        me.i = 0;

        // Discard an initial 256 values.
        for (j = 256; j > 0; --j) {
          me.next();
        }
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.x = f.x.slice();
      t.i = f.i;
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +new Date();
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (state.x) copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xorshift7 = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xor4096 = createCommonjsModule(function (module) {
  // A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
  //
  // This fast non-cryptographic random number generator is designed for
  // use in Monte-Carlo algorithms. It combines a long-period xorshift
  // generator with a Weyl generator, and it passes all common batteries
  // of stasticial tests for randomness while consuming only a few nanoseconds
  // for each prng generated.  For background on the generator, see Brent's
  // paper: "Some long-period random number generators using shifts and xors."
  // http://arxiv.org/pdf/1004.3115v1.pdf
  //
  // Usage:
  //
  // var xor4096 = require('xor4096');
  // random = xor4096(1);                        // Seed with int32 or string.
  // assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
  // assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
  //
  // For nonzero numeric keys, this impelementation provides a sequence
  // identical to that by Brent's xorgens 3 implementaion in C.  This
  // implementation also provides for initalizing the generator with
  // string seeds, or for saving and restoring the state of the generator.
  //
  // On Chrome, this prng benchmarks about 2.1 times slower than
  // Javascript's built-in Math.random().

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this;

      // Set up generator function.
      me.next = function () {
        var w = me.w,
            X = me.X,
            i = me.i,
            t,
            v;
        // Update Weyl generator.
        me.w = w = w + 0x61c88647 | 0;
        // Update xor generator.
        v = X[i + 34 & 127];
        t = X[i = i + 1 & 127];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12;
        // Update Xor generator array state.
        v = X[i] = v ^ t;
        me.i = i;
        // Result is the combination.
        return v + (w ^ w >>> 16) | 0;
      };

      function init(me, seed) {
        var t,
            v,
            i,
            j,
            w,
            X = [],
            limit = 128;
        if (seed === (seed | 0)) {
          // Numeric seeds initialize v, which is used to generates X.
          v = seed;
          seed = null;
        } else {
          // String seeds are mixed into v and X one character at a time.
          seed = seed + '\0';
          v = 0;
          limit = Math.max(limit, seed.length);
        }
        // Initialize circular array and weyl value.
        for (i = 0, j = -32; j < limit; ++j) {
          // Put the unicode characters into the array, and shuffle them.
          if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
          // After 32 shuffles, take v as the starting w value.
          if (j === 0) w = v;
          v ^= v << 10;
          v ^= v >>> 15;
          v ^= v << 4;
          v ^= v >>> 13;
          if (j >= 0) {
            w = w + 0x61c88647 | 0; // Weyl.
            t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
            i = 0 == t ? i + 1 : 0; // Count zeroes.
          }
        }
        // We have detected all zeroes; make the key nonzero.
        if (i >= 128) {
          X[(seed && seed.length || 0) & 127] = -1;
        }
        // Run the generator 512 times to further mix the state before using it.
        // Factoring this as a function slows the main generator, so it is just
        // unrolled here.  The weyl generator is not advanced while warming up.
        i = 127;
        for (j = 4 * 128; j > 0; --j) {
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          X[i] = v ^ t;
        }
        // Storing state as object members is faster than using closure variables.
        me.w = w;
        me.X = X;
        me.i = i;
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.i = f.i;
      t.w = f.w;
      t.X = f.X.slice();
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +new Date();
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (state.X) copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xor4096 = impl;
    }
  })(commonjsGlobal, // window object or global
  'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var tychei = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "Tyche-i" prng algorithm by
  // Samuel Neves and Filipe Araujo.
  // See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this,
          strseed = '';

      // Set up generator function.
      me.next = function () {
        var b = me.b,
            c = me.c,
            d = me.d,
            a = me.a;
        b = b << 25 ^ b >>> 7 ^ c;
        c = c - d | 0;
        d = d << 24 ^ d >>> 8 ^ a;
        a = a - b | 0;
        me.b = b = b << 20 ^ b >>> 12 ^ c;
        me.c = c = c - d | 0;
        me.d = d << 16 ^ c >>> 16 ^ a;
        return me.a = a - b | 0;
      };

      /* The following is non-inverted tyche, which has better internal
       * bit diffusion, but which is about 25% slower than tyche-i in JS.
      me.next = function() {
        var a = me.a, b = me.b, c = me.c, d = me.d;
        a = (me.a + me.b | 0) >>> 0;
        d = me.d ^ a; d = d << 16 ^ d >>> 16;
        c = me.c + d | 0;
        b = me.b ^ c; b = b << 12 ^ d >>> 20;
        me.a = a = a + b | 0;
        d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
        me.c = c = c + d | 0;
        b = b ^ c;
        return me.b = (b << 7 ^ b >>> 25);
      }
      */

      me.a = 0;
      me.b = 0;
      me.c = 2654435769 | 0;
      me.d = 1367130551;

      if (seed === Math.floor(seed)) {
        // Integer seed.
        me.a = seed / 0x100000000 | 0;
        me.b = seed | 0;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 20; k++) {
        me.b ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.a = f.a;
      t.b = f.b;
      t.c = f.c;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.tychei = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var empty = {};

var empty$1 = Object.freeze({
	default: empty
});

var require$$0 = ( empty$1 && empty ) || empty$1;

var seedrandom = createCommonjsModule(function (module) {
  /*
  Copyright 2014 David Bau.
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  */

  (function (pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var global = this,
        width = 256,
        // each RC4 output is 0 <= x < 256
    chunks = 6,
        // at least six RC4 outputs for each double
    digits = 52,
        // there are 52 significant digits in a double
    rngname = 'random',
        // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto; // node.js crypto module, initialized at the bottom.

    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed, options, callback) {
      var key = [];
      options = options == true ? { entropy: true } : options || {};

      // Flatten the seed string or build one from local entropy if needed.
      var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key);

      // Use the seed to initialize an ARC4 generator.
      var arc4 = new ARC4(key);

      // This function returns a random double in [0, 1) that contains
      // randomness in every bit of the mantissa of the IEEE 754 value.
      var prng = function prng() {
        var n = arc4.g(chunks),
            // Start with a numerator n < 2 ^ 48
        d = startdenom,
            //   and denominator d = 2 ^ 48.
        x = 0; //   and no 'extra last byte'.
        while (n < significance) {
          // Fill up all significant digits by
          n = (n + x) * width; //   shifting numerator and
          d *= width; //   denominator and generating a
          x = arc4.g(1); //   new least-significant-byte.
        }
        while (n >= overflow) {
          // To avoid rounding up, before adding
          n /= 2; //   last byte, shift everything
          d /= 2; //   right using integer math until
          x >>>= 1; //   we have exactly the desired bits.
        }
        return (n + x) / d; // Form the number within [0, 1).
      };

      prng.int32 = function () {
        return arc4.g(4) | 0;
      };
      prng.quick = function () {
        return arc4.g(4) / 0x100000000;
      };
      prng.double = prng;

      // Mix the randomness into accumulated entropy.
      mixkey(tostring(arc4.S), pool);

      // Calling convention: what to return as a function of prng, seed, is_math.
      return (options.pass || callback || function (prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) {
            copy(state, arc4);
          }
          // Only provide the .state method if requested via options.state.
          prng.state = function () {
            return copy(arc4, {});
          };
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) {
          math[rngname] = prng;return seed;
        }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    }
    math['seed' + rngname] = seedrandom;

    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
      var t,
          keylen = key.length,
          me = this,
          i = 0,
          j = me.i = me.j = 0,
          s = me.S = [];

      // The empty key [] is treated as [0].
      if (!keylen) {
        key = [keylen++];
      }

      // Set up S using the standard key scheduling algorithm.
      while (i < width) {
        s[i] = i++;
      }
      for (i = 0; i < width; i++) {
        s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
        s[j] = t;
      }

      // The "g" method returns the next (count) outputs as one number.
      (me.g = function (count) {
        // Using instance members instead of closure state nearly doubles speed.
        var t,
            r = 0,
            i = me.i,
            j = me.j,
            s = me.S;
        while (count--) {
          t = s[i = mask & i + 1];
          r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
        }
        me.i = i;me.j = j;
        return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
      })(width);
    }

    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
      t.i = f.i;
      t.j = f.j;
      t.S = f.S.slice();
      return t;
    }

    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
      var result = [],
          typ = typeof obj === 'undefined' ? 'undefined' : _typeof(obj),
          prop;
      if (depth && typ == 'object') {
        for (prop in obj) {
          try {
            result.push(flatten(obj[prop], depth - 1));
          } catch (e) {}
        }
      }
      return result.length ? result : typ == 'string' ? obj : obj + '\0';
    }

    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
      var stringseed = seed + '',
          smear,
          j = 0;
      while (j < stringseed.length) {
        key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
      }
      return tostring(key);
    }

    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
      try {
        var out;
        if (nodecrypto && (out = nodecrypto.randomBytes)) {
          // The use of 'out' to remember randomBytes makes tight minified code.
          out = out(width);
        } else {
          out = new Uint8Array(width);
          (global.crypto || global.msCrypto).getRandomValues(out);
        }
        return tostring(out);
      } catch (e) {
        var browser = global.navigator,
            plugins = browser && browser.plugins;
        return [+new Date(), global, plugins, global.screen, tostring(pool)];
      }
    }

    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
      return String.fromCharCode.apply(0, a);
    }

    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);

    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if ('object' == 'object' && module.exports) {
      module.exports = seedrandom;
      // When in node.js, try using crypto package for autoseeding.
      try {
        nodecrypto = require$$0;
      } catch (ex) {}
    } else if (typeof undefined == 'function' && undefined.amd) {
      undefined(function () {
        return seedrandom;
      });
    }

    // End anonymous scope, and pass initial values.
  })([], // pool: entropy pool starts empty
  Math // math: package containing random, pow, and seedrandom
  );
});

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.


// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.


// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.


// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.


// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.


// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.


// The original ARC4-based prng included in this library.
// Period: ~2^1600


seedrandom.alea = alea;
seedrandom.xor128 = xor128;
seedrandom.xorwow = xorwow;
seedrandom.xorshift7 = xorshift7;
seedrandom.xor4096 = xor4096;
seedrandom.tychei = tychei;

var seedrandom$2 = seedrandom;

var logger = {
  active: false,
  log: function log(message) {
    logger.print('log', message);
  },
  warn: function warn(message) {
    logger.print('warn', message);
  },
  error: function error(message) {
    logger.print('error', message);
  },
  info: function info(message) {
    logger.print('info', message);
  },
  print: function print(type, message) {
    if (logger.active) console[type]('\uD83D\uDC49 Sandpit: ' + message);
  }
};

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
};

var simpleSwizzle = createCommonjsModule(function (module) {
	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = module.exports = function swizzle(args) {
		var results = [];

		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];

			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}

		return results;
	};

	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};
});

var colorString = createCommonjsModule(function (module) {
	/* MIT license */

	var reverseNames = {};

	// create a list of reverse color names
	for (var name in colorName) {
		if (colorName.hasOwnProperty(name)) {
			reverseNames[colorName[name]] = name;
		}
	}

	var cs = module.exports = {
		to: {}
	};

	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}

		if (!val) {
			return null;
		}

		return { model: model, value: val };
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var keyword = /(\D+)/;

		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			rgb = colorName[match[1]];

			if (!rgb) {
				return null;
			}

			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hsl);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = (parseFloat(match[1]) % 360 + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hwb);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = (parseFloat(match[1]) % 360 + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function () {
		var rgba = simpleSwizzle(arguments);

		return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
	};

	cs.to.rgb = function () {
		var rgba = simpleSwizzle(arguments);

		return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
		var rgba = simpleSwizzle(arguments);

		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
		var hsla = simpleSwizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = simpleSwizzle(arguments);

		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
		var str = num.toString(16).toUpperCase();
		return str.length < 2 ? '0' + str : str;
	}
});

var colorString_1 = colorString.to;

var conversions = createCommonjsModule(function (module) {
	/* MIT license */

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	var reverseKeywords = {};
	for (var key in colorName) {
		if (colorName.hasOwnProperty(key)) {
			reverseKeywords[colorName[key]] = key;
		}
	}

	var convert = module.exports = {
		rgb: { channels: 3, labels: 'rgb' },
		hsl: { channels: 3, labels: 'hsl' },
		hsv: { channels: 3, labels: 'hsv' },
		hwb: { channels: 3, labels: 'hwb' },
		cmyk: { channels: 4, labels: 'cmyk' },
		xyz: { channels: 3, labels: 'xyz' },
		lab: { channels: 3, labels: 'lab' },
		lch: { channels: 3, labels: 'lch' },
		hex: { channels: 1, labels: ['hex'] },
		keyword: { channels: 1, labels: ['keyword'] },
		ansi16: { channels: 1, labels: ['ansi16'] },
		ansi256: { channels: 1, labels: ['ansi256'] },
		hcg: { channels: 3, labels: ['h', 'c', 'g'] },
		apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
		gray: { channels: 1, labels: ['gray'] }
	};

	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', { value: channels });
			Object.defineProperty(convert[model], 'labels', { value: labels });
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var v;

		if (max === 0) {
			s = 0;
		} else {
			s = delta / max * 1000 / 10;
		}

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		v = max / 255 * 1000 / 10;

		return [h, s, v];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	/**
  * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
  * */
	function comparativeDistance(x, y) {
		return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in colorName) {
			if (colorName.hasOwnProperty(keyword)) {
				var value = colorName[keyword];

				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);

				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return colorName[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		// assume sRGB
		r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
		g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
		b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

		var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
		var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
		var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= l <= 1 ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - s * f);
		var t = 255 * v * (1 - s * (1 - f));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= lmin <= 1 ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh); // linear interpolation

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0:
				r = v;g = n;b = wh;break;
			case 1:
				r = n;g = v;b = wh;break;
			case 2:
				r = wh;g = v;b = n;break;
			case 3:
				r = wh;g = n;b = v;break;
			case 4:
				r = n;g = wh;b = v;break;
			case 5:
				r = v;g = wh;b = n;break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = x * 3.2406 + y * -1.5372 + z * -0.4986;
		g = x * -0.9689 + y * 1.8758 + z * 0.0415;
		b = x * 0.0557 + y * -0.2040 + z * 1.0570;

		// assume sRGB
		r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

		g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

		b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round((r - 8) / 247 * 24) + 232;
		}

		var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = (color & 1) * mult * 255;
		var g = (color >> 1 & 1) * mult * 255;
		var b = (color >> 2 & 1) * mult * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = rem % 6 / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}

		var integer = parseInt(colorString, 16);
		var r = integer >> 16 & 0xFF;
		var g = integer >> 8 & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = max - min;
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else if (max === r) {
			hue = (g - b) / chroma % 6;
		} else if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = h % 1 * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1;pure[1] = v;pure[2] = 0;break;
			case 1:
				pure[0] = w;pure[1] = 1;pure[2] = 0;break;
			case 2:
				pure[0] = 0;pure[1] = 1;pure[2] = v;break;
			case 3:
				pure[0] = 0;pure[1] = w;pure[2] = 1;break;
			case 4:
				pure[0] = v;pure[1] = 0;pure[2] = 1;break;
			default:
				pure[0] = 1;pure[1] = 0;pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
});

var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function route(fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', { value: conversions[fromModel].channels });
	Object.defineProperty(convert[fromModel], 'labels', { value: conversions[fromModel].labels });

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
// to be honest, I don't really feel like keyword belongs in color convert, but eh.
'keyword',

// gray conflicts with some method names, and has its own method defined.
'gray',

// shouldn't really be in color-convert either...
'hex'];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [obj >> 16 & 0xFF, obj >> 8 & 0xFF, obj & 0xFF];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function toString() {
		return this.string();
	},

	toJSON: function toJSON() {
		return this[this.model]();
	},

	string: function string(places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function percentString(places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function array() {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function object() {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function unitArray() {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function unitObject() {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function round(places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function alpha(val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) {
		return (val % 360 + 360) % 360;
	}), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function keyword(val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function hex(val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function rgbNumber() {
		var rgb = this.rgb().color;
		return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
	},

	luminosity: function luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function level(color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return contrastRatio >= 4.5 ? 'AA' : '';
	},

	dark: function dark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function light() {
		return !this.dark();
	},

	negate: function negate() {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function lighten(ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function darken(ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function saturate(ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function desaturate(ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function whiten(ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function blacken(ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function fade(ratio) {
		return this.alpha(this.valpha - this.valpha * ratio);
	},

	opaquer: function opaquer(ratio) {
		return this.alpha(this.valpha + this.valpha * ratio);
	},

	rotate: function rotate(degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function mix(mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color = Color;

/**
 * A utility for editing colors:
 * {@link https://github.com/Qix-/color}
 * @class Color
 */

/**
 * A utility for testing the type of a reference
 */
var Is = function () {
  function Is() {
    classCallCheck(this, Is);
  }

  createClass(Is, null, [{
    key: 'element',

    /**
     * Tests if the object is a HTMLElement
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is a HTMLElement
     */
    value: function element(object) {
      // Credit: http://stackoverflow.com/a/384380
      try {
        // Using W3 DOM2 (works for FF, Opera and Chrom)
        return object instanceof window.HTMLElement;
      } catch (e) {
        // Browsers not supporting W3 DOM2 don't have HTMLElement and
        // an exception is thrown and we end up here. Testing some
        // properties that all elements have. (works on IE7)
        return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.nodeType === 1 && _typeof(object.style) === 'object' && _typeof(object.ownerDocument) === 'object';
      }
    }

    /**
     * Tests if the object is an array
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is an array
     */

  }, {
    key: 'array',
    value: function array(object) {
      return Object.prototype.toString.call(object) === '[object Array]';
    }

    /**
     * Tests if the object is an object, not an array
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is an object
     */

  }, {
    key: 'object',
    value: function object(_object) {
      return (typeof _object === 'undefined' ? 'undefined' : _typeof(_object)) === 'object' && !this.array(_object);
    }

    /**
     * Tests if the object is a canvas
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is a canvas
     */

  }, {
    key: 'canvas',
    value: function canvas(object) {
      return !!object.getContext;
    }
  }]);
  return Is;
}();

/**
 * A utility for math stuff
 */

var Mathematics = function () {
  function Mathematics() {
    classCallCheck(this, Mathematics);
  }

  createClass(Mathematics, null, [{
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

      if (Is.array(object)) {
        return object[Math.floor(random() * object.length)];
      } else if (Is.object(object)) {
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
    get: function get$$1() {
      return Math.PI * 2;
    }
    /** Returns PI / 2 */

  }, {
    key: 'HALF_PI',
    get: function get$$1() {
      return Math.PI / 2;
    }
    /** Returns PI / 4 */

  }, {
    key: 'QUARTER_PI',
    get: function get$$1() {
      return Math.PI / 4;
    }
  }]);
  return Mathematics;
}();

var stats_min = createCommonjsModule(function (module, exports) {
  // stats.js - http://github.com/mrdoob/stats.js
  (function (f, e) {
    module.exports = e();
  })(commonjsGlobal, function () {
    var f = function f() {
      function e(a) {
        c.appendChild(a.dom);return a;
      }function u(a) {
        for (var d = 0; d < c.children.length; d++) {
          c.children[d].style.display = d === a ? "block" : "none";
        }l = a;
      }var l = 0,
          c = document.createElement("div");c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click", function (a) {
        a.preventDefault();
        u(++l % c.children.length);
      }, !1);var k = (performance || Date).now(),
          g = k,
          a = 0,
          r = e(new f.Panel("FPS", "#0ff", "#002")),
          h = e(new f.Panel("MS", "#0f0", "#020"));if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));u(0);return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function begin() {
          k = (performance || Date).now();
        }, end: function end() {
          a++;var c = (performance || Date).now();h.update(c - k, 200);if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
            var d = performance.memory;t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
          }return c;
        }, update: function update() {
          k = this.end();
        }, domElement: c, setMode: u };
    };f.Panel = function (e, f, l) {
      var c = Infinity,
          k = 0,
          g = Math.round,
          a = g(window.devicePixelRatio || 1),
          r = 80 * a,
          h = 48 * a,
          t = 3 * a,
          v = 2 * a,
          d = 3 * a,
          m = 15 * a,
          n = 74 * a,
          p = 30 * a,
          q = document.createElement("canvas");q.width = r;q.height = h;q.style.cssText = "width:80px;height:48px";var b = q.getContext("2d");b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";b.textBaseline = "top";b.fillStyle = l;b.fillRect(0, 0, r, h);b.fillStyle = f;b.fillText(e, t, v);
      b.fillRect(d, m, n, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d, m, n, p);return { dom: q, update: function update(h, w) {
          c = Math.min(c, h);k = Math.max(k, h);b.fillStyle = l;b.globalAlpha = 1;b.fillRect(0, 0, r, m);b.fillStyle = f;b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);b.fillRect(d + n - a, m, a, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
        } };
    };return f;
  });
});

/**
 * A utility for viewing stats / framerate
 * {@link https://github.com/mrdoob/stats.js/}
 * @class Stats
 */

var victor = createCommonjsModule(function (module, exports) {
  exports = module.exports = Victor;

  /**
   * # Victor - A JavaScript 2D vector class with methods for common vector operations
   */

  /**
   * Constructor. Will also work without the `new` keyword
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = Victor(42, 1337);
   *
   * @param {Number} x Value of the x axis
   * @param {Number} y Value of the y axis
   * @return {Victor}
   * @api public
   */
  function Victor(x, y) {
    if (!(this instanceof Victor)) {
      return new Victor(x, y);
    }

    /**
     * The X axis
     *
     * ### Examples:
     *     var vec = new Victor.fromArray(42, 21);
     *
     *     vec.x;
     *     // => 42
     *
     * @api public
     */
    this.x = x || 0;

    /**
     * The Y axis
     *
     * ### Examples:
     *     var vec = new Victor.fromArray(42, 21);
     *
     *     vec.y;
     *     // => 21
     *
     * @api public
     */
    this.y = y || 0;
  }

  /**
   * # Static
   */

  /**
   * Creates a new instance from an array
   *
   * ### Examples:
   *     var vec = Victor.fromArray([42, 21]);
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   * @name Victor.fromArray
   * @param {Array} array Array with the x and y values at index 0 and 1 respectively
   * @return {Victor} The new instance
   * @api public
   */
  Victor.fromArray = function (arr) {
    return new Victor(arr[0] || 0, arr[1] || 0);
  };

  /**
   * Creates a new instance from an object
   *
   * ### Examples:
   *     var vec = Victor.fromObject({ x: 42, y: 21 });
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   * @name Victor.fromObject
   * @param {Object} obj Object with the values for x and y
   * @return {Victor} The new instance
   * @api public
   */
  Victor.fromObject = function (obj) {
    return new Victor(obj.x || 0, obj.y || 0);
  };

  /**
   * # Manipulation
   *
   * These functions are chainable.
   */

  /**
   * Adds another vector's X axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addX(vec2);
   *     vec1.toString();
   *     // => x:30, y:10
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addX = function (vec) {
    this.x += vec.x;
    return this;
  };

  /**
   * Adds another vector's Y axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addY(vec2);
   *     vec1.toString();
   *     // => x:10, y:40
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addY = function (vec) {
    this.y += vec.y;
    return this;
  };

  /**
   * Adds another vector to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.add(vec2);
   *     vec1.toString();
   *     // => x:30, y:40
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.add = function (vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  };

  /**
   * Adds the given scalar to both vector axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalar(2);
   *     vec.toString();
   *     // => x: 3, y: 4
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalar = function (scalar) {
    this.x += scalar;
    this.y += scalar;
    return this;
  };

  /**
   * Adds the given scalar to the X axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalarX(2);
   *     vec.toString();
   *     // => x: 3, y: 2
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalarX = function (scalar) {
    this.x += scalar;
    return this;
  };

  /**
   * Adds the given scalar to the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalarY(2);
   *     vec.toString();
   *     // => x: 1, y: 4
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalarY = function (scalar) {
    this.y += scalar;
    return this;
  };

  /**
   * Subtracts the X axis of another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtractX(vec2);
   *     vec1.toString();
   *     // => x:80, y:50
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractX = function (vec) {
    this.x -= vec.x;
    return this;
  };

  /**
   * Subtracts the Y axis of another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtractY(vec2);
   *     vec1.toString();
   *     // => x:100, y:20
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractY = function (vec) {
    this.y -= vec.y;
    return this;
  };

  /**
   * Subtracts another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtract(vec2);
   *     vec1.toString();
   *     // => x:80, y:20
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtract = function (vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  };

  /**
   * Subtracts the given scalar from both axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalar(20);
   *     vec.toString();
   *     // => x: 80, y: 180
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalar = function (scalar) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  };

  /**
   * Subtracts the given scalar from the X axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalarX(20);
   *     vec.toString();
   *     // => x: 80, y: 200
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalarX = function (scalar) {
    this.x -= scalar;
    return this;
  };

  /**
   * Subtracts the given scalar from the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalarY(20);
   *     vec.toString();
   *     // => x: 100, y: 180
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalarY = function (scalar) {
    this.y -= scalar;
    return this;
  };

  /**
   * Divides the X axis by the x component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 0);
   *
   *     vec.divideX(vec2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Victor} vector The other vector you want divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideX = function (vector) {
    this.x /= vector.x;
    return this;
  };

  /**
   * Divides the Y axis by the y component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(0, 2);
   *
   *     vec.divideY(vec2);
   *     vec.toString();
   *     // => x:100, y:25
   *
   * @param {Victor} vector The other vector you want divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideY = function (vector) {
    this.y /= vector.y;
    return this;
  };

  /**
   * Divides both vector axis by a axis values of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 2);
   *
   *     vec.divide(vec2);
   *     vec.toString();
   *     // => x:50, y:25
   *
   * @param {Victor} vector The vector to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divide = function (vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    return this;
  };

  /**
   * Divides both vector axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalar(2);
   *     vec.toString();
   *     // => x:50, y:25
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalar = function (scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
    } else {
      this.x = 0;
      this.y = 0;
    }

    return this;
  };

  /**
   * Divides the X axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalarX(2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalarX = function (scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
    } else {
      this.x = 0;
    }
    return this;
  };

  /**
   * Divides the Y axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalarY(2);
   *     vec.toString();
   *     // => x:100, y:25
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalarY = function (scalar) {
    if (scalar !== 0) {
      this.y /= scalar;
    } else {
      this.y = 0;
    }
    return this;
  };

  /**
   * Inverts the X axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invertX();
   *     vec.toString();
   *     // => x:-100, y:50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invertX = function () {
    this.x *= -1;
    return this;
  };

  /**
   * Inverts the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invertY();
   *     vec.toString();
   *     // => x:100, y:-50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invertY = function () {
    this.y *= -1;
    return this;
  };

  /**
   * Inverts both axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invert();
   *     vec.toString();
   *     // => x:-100, y:-50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invert = function () {
    this.invertX();
    this.invertY();
    return this;
  };

  /**
   * Multiplies the X axis by X component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 0);
   *
   *     vec.multiplyX(vec2);
   *     vec.toString();
   *     // => x:200, y:50
   *
   * @param {Victor} vector The vector to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyX = function (vector) {
    this.x *= vector.x;
    return this;
  };

  /**
   * Multiplies the Y axis by Y component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(0, 2);
   *
   *     vec.multiplyX(vec2);
   *     vec.toString();
   *     // => x:100, y:100
   *
   * @param {Victor} vector The vector to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyY = function (vector) {
    this.y *= vector.y;
    return this;
  };

  /**
   * Multiplies both vector axis by values from a given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 2);
   *
   *     vec.multiply(vec2);
   *     vec.toString();
   *     // => x:200, y:100
   *
   * @param {Victor} vector The vector to multiply by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiply = function (vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  };

  /**
   * Multiplies both vector axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalar(2);
   *     vec.toString();
   *     // => x:200, y:100
   *
   * @param {Number} The scalar to multiply by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalar = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  };

  /**
   * Multiplies the X axis by the given scalar
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalarX(2);
   *     vec.toString();
   *     // => x:200, y:50
   *
   * @param {Number} The scalar to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalarX = function (scalar) {
    this.x *= scalar;
    return this;
  };

  /**
   * Multiplies the Y axis by the given scalar
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalarY(2);
   *     vec.toString();
   *     // => x:100, y:100
   *
   * @param {Number} The scalar to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalarY = function (scalar) {
    this.y *= scalar;
    return this;
  };

  /**
   * Normalize
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.normalize = function () {
    var length = this.length();

    if (length === 0) {
      this.x = 1;
      this.y = 0;
    } else {
      this.divide(Victor(length, length));
    }
    return this;
  };

  Victor.prototype.norm = Victor.prototype.normalize;

  /**
   * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.limit(80, 0.9);
   *     vec.toString();
   *     // => x:90, y:50
   *
   * @param {Number} max The maximum value for both x and y axis
   * @param {Number} factor Factor by which the axis are to be multiplied with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.limit = function (max, factor) {
    if (Math.abs(this.x) > max) {
      this.x *= factor;
    }
    if (Math.abs(this.y) > max) {
      this.y *= factor;
    }
    return this;
  };

  /**
   * Randomizes both vector axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:67, y:73
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomize = function (topLeft, bottomRight) {
    this.randomizeX(topLeft, bottomRight);
    this.randomizeY(topLeft, bottomRight);

    return this;
  };

  /**
   * Randomizes the y axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:55, y:50
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeX = function (topLeft, bottomRight) {
    var min = Math.min(topLeft.x, bottomRight.x);
    var max = Math.max(topLeft.x, bottomRight.x);
    this.x = random(min, max);
    return this;
  };

  /**
   * Randomizes the y axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:100, y:66
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeY = function (topLeft, bottomRight) {
    var min = Math.min(topLeft.y, bottomRight.y);
    var max = Math.max(topLeft.y, bottomRight.y);
    this.y = random(min, max);
    return this;
  };

  /**
   * Randomly randomizes either axis between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
   *     vec.toString();
   *     // => x:100, y:77
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
    if (!!Math.round(Math.random())) {
      this.randomizeX(topLeft, bottomRight);
    } else {
      this.randomizeY(topLeft, bottomRight);
    }
    return this;
  };

  /**
   * Rounds both axis to an integer value
   *
   * ### Examples:
   *     var vec = new Victor(100.2, 50.9);
   *
   *     vec.unfloat();
   *     vec.toString();
   *     // => x:100, y:51
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.unfloat = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  /**
   * Rounds both axis to a certain precision
   *
   * ### Examples:
   *     var vec = new Victor(100.2, 50.9);
   *
   *     vec.unfloat();
   *     vec.toString();
   *     // => x:100, y:51
   *
   * @param {Number} Precision (default: 8)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.toFixed = function (precision) {
    if (typeof precision === 'undefined') {
      precision = 8;
    }
    this.x = this.x.toFixed(precision);
    this.y = this.y.toFixed(precision);
    return this;
  };

  /**
   * Performs a linear blend / interpolation of the X axis towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mixX(vec2, 0.5);
   *     vec.toString();
   *     // => x:150, y:100
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mixX = function (vec, amount) {
    if (typeof amount === 'undefined') {
      amount = 0.5;
    }

    this.x = (1 - amount) * this.x + amount * vec.x;
    return this;
  };

  /**
   * Performs a linear blend / interpolation of the Y axis towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mixY(vec2, 0.5);
   *     vec.toString();
   *     // => x:100, y:150
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mixY = function (vec, amount) {
    if (typeof amount === 'undefined') {
      amount = 0.5;
    }

    this.y = (1 - amount) * this.y + amount * vec.y;
    return this;
  };

  /**
   * Performs a linear blend / interpolation towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mix(vec2, 0.5);
   *     vec.toString();
   *     // => x:150, y:150
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mix = function (vec, amount) {
    this.mixX(vec, amount);
    this.mixY(vec, amount);
    return this;
  };

  /**
   * # Products
   */

  /**
   * Creates a clone of this vector
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = vec1.clone();
   *
   *     vec2.toString();
   *     // => x:10, y:10
   *
   * @return {Victor} A clone of the vector
   * @api public
   */
  Victor.prototype.clone = function () {
    return new Victor(this.x, this.y);
  };

  /**
   * Copies another vector's X component in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copyX(vec1);
   *
   *     vec2.toString();
   *     // => x:20, y:10
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copyX = function (vec) {
    this.x = vec.x;
    return this;
  };

  /**
   * Copies another vector's Y component in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copyY(vec1);
   *
   *     vec2.toString();
   *     // => x:10, y:20
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copyY = function (vec) {
    this.y = vec.y;
    return this;
  };

  /**
   * Copies another vector's X and Y components in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copy(vec1);
   *
   *     vec2.toString();
   *     // => x:20, y:20
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copy = function (vec) {
    this.copyX(vec);
    this.copyY(vec);
    return this;
  };

  /**
   * Sets the vector to zero (0,0)
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *		 var1.zero();
   *     vec1.toString();
   *     // => x:0, y:0
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.zero = function () {
    this.x = this.y = 0;
    return this;
  };

  /**
   * Calculates the dot product of this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.dot(vec2);
   *     // => 23000
   *
   * @param {Victor} vector The second vector
   * @return {Number} Dot product
   * @api public
   */
  Victor.prototype.dot = function (vec2) {
    return this.x * vec2.x + this.y * vec2.y;
  };

  Victor.prototype.cross = function (vec2) {
    return this.x * vec2.y - this.y * vec2.x;
  };

  /**
   * Projects a vector onto another vector, setting itself to the result.
   *
   * ### Examples:
   *     var vec = new Victor(100, 0);
   *     var vec2 = new Victor(100, 100);
   *
   *     vec.projectOnto(vec2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Victor} vector The other vector you want to project this vector onto
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.projectOnto = function (vec2) {
    var coeff = (this.x * vec2.x + this.y * vec2.y) / (vec2.x * vec2.x + vec2.y * vec2.y);
    this.x = coeff * vec2.x;
    this.y = coeff * vec2.y;
    return this;
  };

  Victor.prototype.horizontalAngle = function () {
    return Math.atan2(this.y, this.x);
  };

  Victor.prototype.horizontalAngleDeg = function () {
    return radian2degrees(this.horizontalAngle());
  };

  Victor.prototype.verticalAngle = function () {
    return Math.atan2(this.x, this.y);
  };

  Victor.prototype.verticalAngleDeg = function () {
    return radian2degrees(this.verticalAngle());
  };

  Victor.prototype.angle = Victor.prototype.horizontalAngle;
  Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
  Victor.prototype.direction = Victor.prototype.horizontalAngle;

  Victor.prototype.rotate = function (angle) {
    var nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    var ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);

    this.x = nx;
    this.y = ny;

    return this;
  };

  Victor.prototype.rotateDeg = function (angle) {
    angle = degrees2radian(angle);
    return this.rotate(angle);
  };

  Victor.prototype.rotateTo = function (rotation) {
    return this.rotate(rotation - this.angle());
  };

  Victor.prototype.rotateToDeg = function (rotation) {
    rotation = degrees2radian(rotation);
    return this.rotateTo(rotation);
  };

  Victor.prototype.rotateBy = function (rotation) {
    var angle = this.angle() + rotation;

    return this.rotate(angle);
  };

  Victor.prototype.rotateByDeg = function (rotation) {
    rotation = degrees2radian(rotation);
    return this.rotateBy(rotation);
  };

  /**
   * Calculates the distance of the X axis between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceX(vec2);
   *     // => -100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceX = function (vec) {
    return this.x - vec.x;
  };

  /**
   * Same as `distanceX()` but always returns an absolute number
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.absDistanceX(vec2);
   *     // => 100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Absolute distance
   * @api public
   */
  Victor.prototype.absDistanceX = function (vec) {
    return Math.abs(this.distanceX(vec));
  };

  /**
   * Calculates the distance of the Y axis between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceY(vec2);
   *     // => -10
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceY = function (vec) {
    return this.y - vec.y;
  };

  /**
   * Same as `distanceY()` but always returns an absolute number
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceY(vec2);
   *     // => 10
   *
   * @param {Victor} vector The second vector
   * @return {Number} Absolute distance
   * @api public
   */
  Victor.prototype.absDistanceY = function (vec) {
    return Math.abs(this.distanceY(vec));
  };

  /**
   * Calculates the euclidean distance between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distance(vec2);
   *     // => 100.4987562112089
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distance = function (vec) {
    return Math.sqrt(this.distanceSq(vec));
  };

  /**
   * Calculates the squared euclidean distance between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceSq(vec2);
   *     // => 10100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceSq = function (vec) {
    var dx = this.distanceX(vec),
        dy = this.distanceY(vec);

    return dx * dx + dy * dy;
  };

  /**
   * Calculates the length or magnitude of the vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.length();
   *     // => 111.80339887498948
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  Victor.prototype.length = function () {
    return Math.sqrt(this.lengthSq());
  };

  /**
   * Squared length / magnitude
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.lengthSq();
   *     // => 12500
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  Victor.prototype.lengthSq = function () {
    return this.x * this.x + this.y * this.y;
  };

  Victor.prototype.magnitude = Victor.prototype.length;

  /**
   * Returns a true if vector is (0, 0)
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     vec.zero();
   *
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  Victor.prototype.isZero = function () {
    return this.x === 0 && this.y === 0;
  };

  /**
   * Returns a true if this vector is the same as another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(100, 50);
   *     vec1.isEqualTo(vec2);
   *
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  Victor.prototype.isEqualTo = function (vec2) {
    return this.x === vec2.x && this.y === vec2.y;
  };

  /**
   * # Utility Methods
   */

  /**
   * Returns an string representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toString();
   *     // => x:10, y:20
   *
   * @return {String}
   * @api public
   */
  Victor.prototype.toString = function () {
    return 'x:' + this.x + ', y:' + this.y;
  };

  /**
   * Returns an array representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toArray();
   *     // => [10, 20]
   *
   * @return {Array}
   * @api public
   */
  Victor.prototype.toArray = function () {
    return [this.x, this.y];
  };

  /**
   * Returns an object representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toObject();
   *     // => { x: 10, y: 20 }
   *
   * @return {Object}
   * @api public
   */
  Victor.prototype.toObject = function () {
    return { x: this.x, y: this.y };
  };

  var degrees = 180 / Math.PI;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function radian2degrees(rad) {
    return rad * degrees;
  }

  function degrees2radian(deg) {
    return deg / degrees;
  }
});

/**
 * A utility for handling vectors, with a couple
 * of additional helpers: {@link http://victorjs.org/}
 * @class Vector
 */
victor.prototype.setLength = function (scalar) {
  var length = this.length();
  if (scalar >= 0 && length !== 0) {
    var sinA = this.y / length;
    var sinB = this.x / length;
    this.y = sinA * scalar;
    this.x = sinB * scalar;
  }
  return this;
};

victor.prototype.addLength = function (scalar) {
  return this.setLength(this.length() + scalar);
};

var gyronorm_complete = createCommonjsModule(function (module) {
	(function (root) {

		// Store setTimeout reference so promise-polyfill will be unaffected by
		// other code modifying setTimeout (like sinon.useFakeTimers())
		var setTimeoutFunc = setTimeout;

		function noop() {}

		// Polyfill for Function.prototype.bind
		function bind(fn, thisArg) {
			return function () {
				fn.apply(thisArg, arguments);
			};
		}

		function Promise(fn) {
			if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
			if (typeof fn !== 'function') throw new TypeError('not a function');
			this._state = 0;
			this._handled = false;
			this._value = undefined;
			this._deferreds = [];

			doResolve(fn, this);
		}

		function handle(self, deferred) {
			while (self._state === 3) {
				self = self._value;
			}
			if (self._state === 0) {
				self._deferreds.push(deferred);
				return;
			}
			self._handled = true;
			Promise._immediateFn(function () {
				var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
				if (cb === null) {
					(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
					return;
				}
				var ret;
				try {
					ret = cb(self._value);
				} catch (e) {
					reject(deferred.promise, e);
					return;
				}
				resolve(deferred.promise, ret);
			});
		}

		function resolve(self, newValue) {
			try {
				// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
				if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
				if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
					var then = newValue.then;
					if (newValue instanceof Promise) {
						self._state = 3;
						self._value = newValue;
						finale(self);
						return;
					} else if (typeof then === 'function') {
						doResolve(bind(then, newValue), self);
						return;
					}
				}
				self._state = 1;
				self._value = newValue;
				finale(self);
			} catch (e) {
				reject(self, e);
			}
		}

		function reject(self, newValue) {
			self._state = 2;
			self._value = newValue;
			finale(self);
		}

		function finale(self) {
			if (self._state === 2 && self._deferreds.length === 0) {
				Promise._immediateFn(function () {
					if (!self._handled) {
						Promise._unhandledRejectionFn(self._value);
					}
				});
			}

			for (var i = 0, len = self._deferreds.length; i < len; i++) {
				handle(self, self._deferreds[i]);
			}
			self._deferreds = null;
		}

		function Handler(onFulfilled, onRejected, promise) {
			this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
			this.onRejected = typeof onRejected === 'function' ? onRejected : null;
			this.promise = promise;
		}

		/**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
		function doResolve(fn, self) {
			var done = false;
			try {
				fn(function (value) {
					if (done) return;
					done = true;
					resolve(self, value);
				}, function (reason) {
					if (done) return;
					done = true;
					reject(self, reason);
				});
			} catch (ex) {
				if (done) return;
				done = true;
				reject(self, ex);
			}
		}

		Promise.prototype['catch'] = function (onRejected) {
			return this.then(null, onRejected);
		};

		Promise.prototype.then = function (onFulfilled, onRejected) {
			var prom = new this.constructor(noop);

			handle(this, new Handler(onFulfilled, onRejected, prom));
			return prom;
		};

		Promise.all = function (arr) {
			var args = Array.prototype.slice.call(arr);

			return new Promise(function (resolve, reject) {
				if (args.length === 0) return resolve([]);
				var remaining = args.length;

				function res(i, val) {
					try {
						if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
							var then = val.then;
							if (typeof then === 'function') {
								then.call(val, function (val) {
									res(i, val);
								}, reject);
								return;
							}
						}
						args[i] = val;
						if (--remaining === 0) {
							resolve(args);
						}
					} catch (ex) {
						reject(ex);
					}
				}

				for (var i = 0; i < args.length; i++) {
					res(i, args[i]);
				}
			});
		};

		Promise.resolve = function (value) {
			if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
				return value;
			}

			return new Promise(function (resolve) {
				resolve(value);
			});
		};

		Promise.reject = function (value) {
			return new Promise(function (resolve, reject) {
				reject(value);
			});
		};

		Promise.race = function (values) {
			return new Promise(function (resolve, reject) {
				for (var i = 0, len = values.length; i < len; i++) {
					values[i].then(resolve, reject);
				}
			});
		};

		// Use polyfill for setImmediate for performance gains
		Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
			setImmediate(fn);
		} || function (fn) {
			setTimeoutFunc(fn, 0);
		};

		Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
			if (typeof console !== 'undefined' && console) {
				console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
			}
		};

		/**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
		Promise._setImmediateFn = function _setImmediateFn(fn) {
			Promise._immediateFn = fn;
		};

		/**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
		Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
			Promise._unhandledRejectionFn = fn;
		};

		if ('object' !== 'undefined' && module.exports) {
			module.exports = Promise;
		} else if (!root.Promise) {
			root.Promise = Promise;
		}
	})(commonjsGlobal);

	/**
  *
  * FULL TILT
  * http://github.com/richtr/Full-Tilt
  *
  * A standalone DeviceOrientation + DeviceMotion JavaScript library that
  * normalises orientation sensor input, applies relevant screen orientation
  * transforms, returns Euler Angle, Quaternion and Rotation
  * Matrix representations back to web developers and provides conversion
  * between all supported orientation representation types.
  *
  * Copyright: 2014 Rich Tibbett
  * License:   MIT
  *
  */

	(function (window) {

		// Only initialize the FULLTILT API if it is not already attached to the DOM
		if (window.FULLTILT !== undefined && window.FULLTILT !== null) {
			return;
		}

		var M_PI = Math.PI;
		var M_PI_2 = M_PI / 2;
		var M_2_PI = 2 * M_PI;

		// Degree to Radian conversion
		var degToRad = M_PI / 180;
		var radToDeg = 180 / M_PI;

		// Internal device orientation + motion variables
		var sensors = {
			"orientation": {
				active: false,
				callbacks: [],
				data: undefined
			},
			"motion": {
				active: false,
				callbacks: [],
				data: undefined
			}
		};
		var screenActive = false;

		// Internal screen orientation variables
		var hasScreenOrientationAPI = window.screen && window.screen.orientation && window.screen.orientation.angle !== undefined && window.screen.orientation.angle !== null ? true : false;
		var screenOrientationAngle = (hasScreenOrientationAPI ? window.screen.orientation.angle : window.orientation || 0) * degToRad;

		var SCREEN_ROTATION_0 = 0,
		    SCREEN_ROTATION_90 = M_PI_2,
		    SCREEN_ROTATION_180 = M_PI,
		    SCREEN_ROTATION_270 = M_2_PI / 3,
		    SCREEN_ROTATION_MINUS_90 = -M_PI_2;

		// Math.sign polyfill
		function sign(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) return x;
			return x > 0 ? 1 : -1;
		}

		///// Promise-based Sensor Data checker //////

		function SensorCheck(sensorRootObj) {

			var promise = new Promise(function (resolve, reject) {

				var runCheck = function runCheck(tries) {

					setTimeout(function () {

						if (sensorRootObj && sensorRootObj.data) {

							resolve();
						} else if (tries >= 20) {

							reject();
						} else {

							runCheck(++tries);
						}
					}, 50);
				};

				runCheck(0);
			});

			return promise;
		}

		////// Internal Event Handlers //////

		function handleScreenOrientationChange() {

			if (hasScreenOrientationAPI) {

				screenOrientationAngle = (window.screen.orientation.angle || 0) * degToRad;
			} else {

				screenOrientationAngle = (window.orientation || 0) * degToRad;
			}
		}

		function handleDeviceOrientationChange(event) {

			sensors.orientation.data = event;

			// Fire every callback function each time deviceorientation is updated
			for (var i in sensors.orientation.callbacks) {

				sensors.orientation.callbacks[i].call(this);
			}
		}

		function handleDeviceMotionChange(event) {

			sensors.motion.data = event;

			// Fire every callback function each time devicemotion is updated
			for (var i in sensors.motion.callbacks) {

				sensors.motion.callbacks[i].call(this);
			}
		}

		///// FULLTILT API Root Object /////

		var FULLTILT = {};

		FULLTILT.version = "0.5.3";

		///// FULLTILT API Root Methods /////

		FULLTILT.getDeviceOrientation = function (options) {

			var promise = new Promise(function (resolve, reject) {

				var control = new FULLTILT.DeviceOrientation(options);

				control.start();

				var orientationSensorCheck = new SensorCheck(sensors.orientation);

				orientationSensorCheck.then(function () {

					control._alphaAvailable = sensors.orientation.data.alpha && sensors.orientation.data.alpha !== null;
					control._betaAvailable = sensors.orientation.data.beta && sensors.orientation.data.beta !== null;
					control._gammaAvailable = sensors.orientation.data.gamma && sensors.orientation.data.gamma !== null;

					resolve(control);
				}).catch(function () {

					control.stop();
					reject('DeviceOrientation is not supported');
				});
			});

			return promise;
		};

		FULLTILT.getDeviceMotion = function (options) {

			var promise = new Promise(function (resolve, reject) {

				var control = new FULLTILT.DeviceMotion(options);

				control.start();

				var motionSensorCheck = new SensorCheck(sensors.motion);

				motionSensorCheck.then(function () {

					control._accelerationXAvailable = sensors.motion.data.acceleration && sensors.motion.data.acceleration.x;
					control._accelerationYAvailable = sensors.motion.data.acceleration && sensors.motion.data.acceleration.y;
					control._accelerationZAvailable = sensors.motion.data.acceleration && sensors.motion.data.acceleration.z;

					control._accelerationIncludingGravityXAvailable = sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.x;
					control._accelerationIncludingGravityYAvailable = sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.y;
					control._accelerationIncludingGravityZAvailable = sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.z;

					control._rotationRateAlphaAvailable = sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.alpha;
					control._rotationRateBetaAvailable = sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.beta;
					control._rotationRateGammaAvailable = sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.gamma;

					resolve(control);
				}).catch(function () {

					control.stop();
					reject('DeviceMotion is not supported');
				});
			});

			return promise;
		};

		////// FULLTILT.Quaternion //////

		FULLTILT.Quaternion = function (x, y, z, w) {

			var quat, outQuat;

			this.set = function (x, y, z, w) {

				this.x = x || 0;
				this.y = y || 0;
				this.z = z || 0;
				this.w = w || 1;
			};

			this.copy = function (quaternion) {

				this.x = quaternion.x;
				this.y = quaternion.y;
				this.z = quaternion.z;
				this.w = quaternion.w;
			};

			this.setFromEuler = function () {

				var _x, _y, _z;
				var _x_2, _y_2, _z_2;
				var cX, cY, cZ, sX, sY, sZ;

				return function (euler) {

					euler = euler || {};

					_z = (euler.alpha || 0) * degToRad;
					_x = (euler.beta || 0) * degToRad;
					_y = (euler.gamma || 0) * degToRad;

					_z_2 = _z / 2;
					_x_2 = _x / 2;
					_y_2 = _y / 2;

					cX = Math.cos(_x_2);
					cY = Math.cos(_y_2);
					cZ = Math.cos(_z_2);
					sX = Math.sin(_x_2);
					sY = Math.sin(_y_2);
					sZ = Math.sin(_z_2);

					this.set(sX * cY * cZ - cX * sY * sZ, // x
					cX * sY * cZ + sX * cY * sZ, // y
					cX * cY * sZ + sX * sY * cZ, // z
					cX * cY * cZ - sX * sY * sZ // w
					);

					this.normalize();

					return this;
				};
			}();

			this.setFromRotationMatrix = function () {

				var R;

				return function (matrix) {

					R = matrix.elements;

					this.set(0.5 * Math.sqrt(1 + R[0] - R[4] - R[8]) * sign(R[7] - R[5]), // x
					0.5 * Math.sqrt(1 - R[0] + R[4] - R[8]) * sign(R[2] - R[6]), // y
					0.5 * Math.sqrt(1 - R[0] - R[4] + R[8]) * sign(R[3] - R[1]), // z
					0.5 * Math.sqrt(1 + R[0] + R[4] + R[8]) // w
					);

					return this;
				};
			}();

			this.multiply = function (quaternion) {

				outQuat = FULLTILT.Quaternion.prototype.multiplyQuaternions(this, quaternion);
				this.copy(outQuat);

				return this;
			};

			this.rotateX = function (angle) {

				outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle(this, [1, 0, 0], angle);
				this.copy(outQuat);

				return this;
			};

			this.rotateY = function (angle) {

				outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle(this, [0, 1, 0], angle);
				this.copy(outQuat);

				return this;
			};

			this.rotateZ = function (angle) {

				outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle(this, [0, 0, 1], angle);
				this.copy(outQuat);

				return this;
			};

			this.normalize = function () {

				return FULLTILT.Quaternion.prototype.normalize(this);
			};

			// Initialize object values
			this.set(x, y, z, w);
		};

		FULLTILT.Quaternion.prototype = {

			constructor: FULLTILT.Quaternion,

			multiplyQuaternions: function () {

				var multipliedQuat = new FULLTILT.Quaternion();

				return function (a, b) {

					var qax = a.x,
					    qay = a.y,
					    qaz = a.z,
					    qaw = a.w;
					var qbx = b.x,
					    qby = b.y,
					    qbz = b.z,
					    qbw = b.w;

					multipliedQuat.set(qax * qbw + qaw * qbx + qay * qbz - qaz * qby, // x
					qay * qbw + qaw * qby + qaz * qbx - qax * qbz, // y
					qaz * qbw + qaw * qbz + qax * qby - qay * qbx, // z
					qaw * qbw - qax * qbx - qay * qby - qaz * qbz // w
					);

					return multipliedQuat;
				};
			}(),

			normalize: function normalize(q) {

				var len = Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);

				if (len === 0) {

					q.x = 0;
					q.y = 0;
					q.z = 0;
					q.w = 1;
				} else {

					len = 1 / len;

					q.x *= len;
					q.y *= len;
					q.z *= len;
					q.w *= len;
				}

				return q;
			},

			rotateByAxisAngle: function () {

				var outputQuaternion = new FULLTILT.Quaternion();
				var transformQuaternion = new FULLTILT.Quaternion();

				var halfAngle, sA;

				return function (targetQuaternion, axis, angle) {

					halfAngle = (angle || 0) / 2;
					sA = Math.sin(halfAngle);

					transformQuaternion.set((axis[0] || 0) * sA, // x
					(axis[1] || 0) * sA, // y
					(axis[2] || 0) * sA, // z
					Math.cos(halfAngle) // w
					);

					// Multiply quaternion by q
					outputQuaternion = FULLTILT.Quaternion.prototype.multiplyQuaternions(targetQuaternion, transformQuaternion);

					return FULLTILT.Quaternion.prototype.normalize(outputQuaternion);
				};
			}()

		};

		////// FULLTILT.RotationMatrix //////

		FULLTILT.RotationMatrix = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {

			var outMatrix;

			this.elements = new Float32Array(9);

			this.identity = function () {

				this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);

				return this;
			};

			this.set = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {

				this.elements[0] = m11 || 1;
				this.elements[1] = m12 || 0;
				this.elements[2] = m13 || 0;
				this.elements[3] = m21 || 0;
				this.elements[4] = m22 || 1;
				this.elements[5] = m23 || 0;
				this.elements[6] = m31 || 0;
				this.elements[7] = m32 || 0;
				this.elements[8] = m33 || 1;
			};

			this.copy = function (matrix) {

				this.elements[0] = matrix.elements[0];
				this.elements[1] = matrix.elements[1];
				this.elements[2] = matrix.elements[2];
				this.elements[3] = matrix.elements[3];
				this.elements[4] = matrix.elements[4];
				this.elements[5] = matrix.elements[5];
				this.elements[6] = matrix.elements[6];
				this.elements[7] = matrix.elements[7];
				this.elements[8] = matrix.elements[8];
			};

			this.setFromEuler = function () {

				var _x, _y, _z;
				var cX, cY, cZ, sX, sY, sZ;

				return function (euler) {

					euler = euler || {};

					_z = (euler.alpha || 0) * degToRad;
					_x = (euler.beta || 0) * degToRad;
					_y = (euler.gamma || 0) * degToRad;

					cX = Math.cos(_x);
					cY = Math.cos(_y);
					cZ = Math.cos(_z);
					sX = Math.sin(_x);
					sY = Math.sin(_y);
					sZ = Math.sin(_z);

					//
					// ZXY-ordered rotation matrix construction.
					//

					this.set(cZ * cY - sZ * sX * sY, // 1,1
					-cX * sZ, // 1,2
					cY * sZ * sX + cZ * sY, // 1,3

					cY * sZ + cZ * sX * sY, // 2,1
					cZ * cX, // 2,2
					sZ * sY - cZ * cY * sX, // 2,3

					-cX * sY, // 3,1
					sX, // 3,2
					cX * cY // 3,3
					);

					this.normalize();

					return this;
				};
			}();

			this.setFromQuaternion = function () {

				var sqw, sqx, sqy, sqz;

				return function (q) {

					sqw = q.w * q.w;
					sqx = q.x * q.x;
					sqy = q.y * q.y;
					sqz = q.z * q.z;

					this.set(sqw + sqx - sqy - sqz, // 1,1
					2 * (q.x * q.y - q.w * q.z), // 1,2
					2 * (q.x * q.z + q.w * q.y), // 1,3

					2 * (q.x * q.y + q.w * q.z), // 2,1
					sqw - sqx + sqy - sqz, // 2,2
					2 * (q.y * q.z - q.w * q.x), // 2,3

					2 * (q.x * q.z - q.w * q.y), // 3,1
					2 * (q.y * q.z + q.w * q.x), // 3,2
					sqw - sqx - sqy + sqz // 3,3
					);

					return this;
				};
			}();

			this.multiply = function (m) {

				outMatrix = FULLTILT.RotationMatrix.prototype.multiplyMatrices(this, m);
				this.copy(outMatrix);

				return this;
			};

			this.rotateX = function (angle) {

				outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(this, [1, 0, 0], angle);
				this.copy(outMatrix);

				return this;
			};

			this.rotateY = function (angle) {

				outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 1, 0], angle);
				this.copy(outMatrix);

				return this;
			};

			this.rotateZ = function (angle) {

				outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 0, 1], angle);
				this.copy(outMatrix);

				return this;
			};

			this.normalize = function () {

				return FULLTILT.RotationMatrix.prototype.normalize(this);
			};

			// Initialize object values
			this.set(m11, m12, m13, m21, m22, m23, m31, m32, m33);
		};

		FULLTILT.RotationMatrix.prototype = {

			constructor: FULLTILT.RotationMatrix,

			multiplyMatrices: function () {

				var matrix = new FULLTILT.RotationMatrix();

				var aE, bE;

				return function (a, b) {

					aE = a.elements;
					bE = b.elements;

					matrix.set(aE[0] * bE[0] + aE[1] * bE[3] + aE[2] * bE[6], aE[0] * bE[1] + aE[1] * bE[4] + aE[2] * bE[7], aE[0] * bE[2] + aE[1] * bE[5] + aE[2] * bE[8], aE[3] * bE[0] + aE[4] * bE[3] + aE[5] * bE[6], aE[3] * bE[1] + aE[4] * bE[4] + aE[5] * bE[7], aE[3] * bE[2] + aE[4] * bE[5] + aE[5] * bE[8], aE[6] * bE[0] + aE[7] * bE[3] + aE[8] * bE[6], aE[6] * bE[1] + aE[7] * bE[4] + aE[8] * bE[7], aE[6] * bE[2] + aE[7] * bE[5] + aE[8] * bE[8]);

					return matrix;
				};
			}(),

			normalize: function normalize(matrix) {

				var R = matrix.elements;

				// Calculate matrix determinant
				var determinant = R[0] * R[4] * R[8] - R[0] * R[5] * R[7] - R[1] * R[3] * R[8] + R[1] * R[5] * R[6] + R[2] * R[3] * R[7] - R[2] * R[4] * R[6];

				// Normalize matrix values
				R[0] /= determinant;
				R[1] /= determinant;
				R[2] /= determinant;
				R[3] /= determinant;
				R[4] /= determinant;
				R[5] /= determinant;
				R[6] /= determinant;
				R[7] /= determinant;
				R[8] /= determinant;

				matrix.elements = R;

				return matrix;
			},

			rotateByAxisAngle: function () {

				var outputMatrix = new FULLTILT.RotationMatrix();
				var transformMatrix = new FULLTILT.RotationMatrix();

				var sA, cA;
				var validAxis = false;

				return function (targetRotationMatrix, axis, angle) {

					transformMatrix.identity(); // reset transform matrix

					validAxis = false;

					sA = Math.sin(angle);
					cA = Math.cos(angle);

					if (axis[0] === 1 && axis[1] === 0 && axis[2] === 0) {
						// x

						validAxis = true;

						transformMatrix.elements[4] = cA;
						transformMatrix.elements[5] = -sA;
						transformMatrix.elements[7] = sA;
						transformMatrix.elements[8] = cA;
					} else if (axis[1] === 1 && axis[0] === 0 && axis[2] === 0) {
						// y

						validAxis = true;

						transformMatrix.elements[0] = cA;
						transformMatrix.elements[2] = sA;
						transformMatrix.elements[6] = -sA;
						transformMatrix.elements[8] = cA;
					} else if (axis[2] === 1 && axis[0] === 0 && axis[1] === 0) {
						// z

						validAxis = true;

						transformMatrix.elements[0] = cA;
						transformMatrix.elements[1] = -sA;
						transformMatrix.elements[3] = sA;
						transformMatrix.elements[4] = cA;
					}

					if (validAxis) {

						outputMatrix = FULLTILT.RotationMatrix.prototype.multiplyMatrices(targetRotationMatrix, transformMatrix);

						outputMatrix = FULLTILT.RotationMatrix.prototype.normalize(outputMatrix);
					} else {

						outputMatrix = targetRotationMatrix;
					}

					return outputMatrix;
				};
			}()

		};

		////// FULLTILT.Euler //////

		FULLTILT.Euler = function (alpha, beta, gamma) {

			this.set = function (alpha, beta, gamma) {

				this.alpha = alpha || 0;
				this.beta = beta || 0;
				this.gamma = gamma || 0;
			};

			this.copy = function (inEuler) {

				this.alpha = inEuler.alpha;
				this.beta = inEuler.beta;
				this.gamma = inEuler.gamma;
			};

			this.setFromRotationMatrix = function () {

				var R, _alpha, _beta, _gamma;

				return function (matrix) {

					R = matrix.elements;

					if (R[8] > 0) {
						// cos(beta) > 0

						_alpha = Math.atan2(-R[1], R[4]);
						_beta = Math.asin(R[7]); // beta (-pi/2, pi/2)
						_gamma = Math.atan2(-R[6], R[8]); // gamma (-pi/2, pi/2)
					} else if (R[8] < 0) {
						// cos(beta) < 0

						_alpha = Math.atan2(R[1], -R[4]);
						_beta = -Math.asin(R[7]);
						_beta += _beta >= 0 ? -M_PI : M_PI; // beta [-pi,-pi/2) U (pi/2,pi)
						_gamma = Math.atan2(R[6], -R[8]); // gamma (-pi/2, pi/2)
					} else {
						// R[8] == 0

						if (R[6] > 0) {
							// cos(gamma) == 0, cos(beta) > 0

							_alpha = Math.atan2(-R[1], R[4]);
							_beta = Math.asin(R[7]); // beta [-pi/2, pi/2]
							_gamma = -M_PI_2; // gamma = -pi/2
						} else if (R[6] < 0) {
							// cos(gamma) == 0, cos(beta) < 0

							_alpha = Math.atan2(R[1], -R[4]);
							_beta = -Math.asin(R[7]);
							_beta += _beta >= 0 ? -M_PI : M_PI; // beta [-pi,-pi/2) U (pi/2,pi)
							_gamma = -M_PI_2; // gamma = -pi/2
						} else {
							// R[6] == 0, cos(beta) == 0

							// gimbal lock discontinuity
							_alpha = Math.atan2(R[3], R[0]);
							_beta = R[7] > 0 ? M_PI_2 : -M_PI_2; // beta = +-pi/2
							_gamma = 0; // gamma = 0
						}
					}

					// alpha is in [-pi, pi], make sure it is in [0, 2*pi).
					if (_alpha < 0) {
						_alpha += M_2_PI; // alpha [0, 2*pi)
					}

					// Convert to degrees
					_alpha *= radToDeg;
					_beta *= radToDeg;
					_gamma *= radToDeg;

					// apply derived euler angles to current object
					this.set(_alpha, _beta, _gamma);
				};
			}();

			this.setFromQuaternion = function () {

				var _alpha, _beta, _gamma;

				return function (q) {

					var sqw = q.w * q.w;
					var sqx = q.x * q.x;
					var sqy = q.y * q.y;
					var sqz = q.z * q.z;

					var unitLength = sqw + sqx + sqy + sqz; // Normalised == 1, otherwise correction divisor.
					var wxyz = q.w * q.x + q.y * q.z;
					var epsilon = 1e-6; // rounding factor

					if (wxyz > (0.5 - epsilon) * unitLength) {

						_alpha = 2 * Math.atan2(q.y, q.w);
						_beta = M_PI_2;
						_gamma = 0;
					} else if (wxyz < (-0.5 + epsilon) * unitLength) {

						_alpha = -2 * Math.atan2(q.y, q.w);
						_beta = -M_PI_2;
						_gamma = 0;
					} else {

						var aX = sqw - sqx + sqy - sqz;
						var aY = 2 * (q.w * q.z - q.x * q.y);

						var gX = sqw - sqx - sqy + sqz;
						var gY = 2 * (q.w * q.y - q.x * q.z);

						if (gX > 0) {

							_alpha = Math.atan2(aY, aX);
							_beta = Math.asin(2 * wxyz / unitLength);
							_gamma = Math.atan2(gY, gX);
						} else {

							_alpha = Math.atan2(-aY, -aX);
							_beta = -Math.asin(2 * wxyz / unitLength);
							_beta += _beta < 0 ? M_PI : -M_PI;
							_gamma = Math.atan2(-gY, -gX);
						}
					}

					// alpha is in [-pi, pi], make sure it is in [0, 2*pi).
					if (_alpha < 0) {
						_alpha += M_2_PI; // alpha [0, 2*pi)
					}

					// Convert to degrees
					_alpha *= radToDeg;
					_beta *= radToDeg;
					_gamma *= radToDeg;

					// apply derived euler angles to current object
					this.set(_alpha, _beta, _gamma);
				};
			}();

			this.rotateX = function (angle) {

				FULLTILT.Euler.prototype.rotateByAxisAngle(this, [1, 0, 0], angle);

				return this;
			};

			this.rotateY = function (angle) {

				FULLTILT.Euler.prototype.rotateByAxisAngle(this, [0, 1, 0], angle);

				return this;
			};

			this.rotateZ = function (angle) {

				FULLTILT.Euler.prototype.rotateByAxisAngle(this, [0, 0, 1], angle);

				return this;
			};

			// Initialize object values
			this.set(alpha, beta, gamma);
		};

		FULLTILT.Euler.prototype = {

			constructor: FULLTILT.Euler,

			rotateByAxisAngle: function () {

				var _matrix = new FULLTILT.RotationMatrix();
				return function (targetEuler, axis, angle) {

					_matrix.setFromEuler(targetEuler);

					_matrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(_matrix, axis, angle);

					targetEuler.setFromRotationMatrix(_matrix);

					return targetEuler;
				};
			}()

		};

		///// FULLTILT.DeviceOrientation //////

		FULLTILT.DeviceOrientation = function (options) {

			this.options = options || {}; // by default use UA deviceorientation 'type' ("game" on iOS, "world" on Android)

			var tries = 0;
			var maxTries = 200;
			var successCount = 0;
			var successThreshold = 10;

			this.alphaOffsetScreen = 0;
			this.alphaOffsetDevice = undefined;

			// Create a game-based deviceorientation object (initial alpha === 0 degrees)
			if (this.options.type === "game") {

				var setGameAlphaOffset = function (evt) {

					if (evt.alpha !== null) {
						// do regardless of whether 'evt.absolute' is also true
						this.alphaOffsetDevice = new FULLTILT.Euler(evt.alpha, 0, 0);
						this.alphaOffsetDevice.rotateZ(-screenOrientationAngle);

						// Discard first {successThreshold} responses while a better compass lock is found by UA
						if (++successCount >= successThreshold) {
							window.removeEventListener('deviceorientation', setGameAlphaOffset, false);
							return;
						}
					}

					if (++tries >= maxTries) {
						window.removeEventListener('deviceorientation', setGameAlphaOffset, false);
					}
				}.bind(this);

				window.addEventListener('deviceorientation', setGameAlphaOffset, false);

				// Create a compass-based deviceorientation object (initial alpha === compass degrees)
			} else if (this.options.type === "world") {

				var setCompassAlphaOffset = function (evt) {

					if (evt.absolute !== true && evt.webkitCompassAccuracy !== undefined && evt.webkitCompassAccuracy !== null && +evt.webkitCompassAccuracy >= 0 && +evt.webkitCompassAccuracy < 50) {
						this.alphaOffsetDevice = new FULLTILT.Euler(evt.webkitCompassHeading, 0, 0);
						this.alphaOffsetDevice.rotateZ(screenOrientationAngle);
						this.alphaOffsetScreen = screenOrientationAngle;

						// Discard first {successThreshold} responses while a better compass lock is found by UA
						if (++successCount >= successThreshold) {
							window.removeEventListener('deviceorientation', setCompassAlphaOffset, false);
							return;
						}
					}

					if (++tries >= maxTries) {
						window.removeEventListener('deviceorientation', setCompassAlphaOffset, false);
					}
				}.bind(this);

				window.addEventListener('deviceorientation', setCompassAlphaOffset, false);
			} // else... use whatever orientation system the UA provides ("game" on iOS, "world" on Android)
		};

		FULLTILT.DeviceOrientation.prototype = {

			constructor: FULLTILT.DeviceOrientation,

			start: function start(callback) {

				if (callback && Object.prototype.toString.call(callback) == '[object Function]') {

					sensors.orientation.callbacks.push(callback);
				}

				if (!screenActive) {

					if (hasScreenOrientationAPI) {

						window.screen.orientation.addEventListener('change', handleScreenOrientationChange, false);
					} else {

						window.addEventListener('orientationchange', handleScreenOrientationChange, false);
					}
				}

				if (!sensors.orientation.active) {

					window.addEventListener('deviceorientation', handleDeviceOrientationChange, false);

					sensors.orientation.active = true;
				}
			},

			stop: function stop() {

				if (sensors.orientation.active) {

					window.removeEventListener('deviceorientation', handleDeviceOrientationChange, false);

					sensors.orientation.active = false;
				}
			},

			listen: function listen(callback) {

				this.start(callback);
			},

			getFixedFrameQuaternion: function () {

				var euler = new FULLTILT.Euler();
				var matrix = new FULLTILT.RotationMatrix();
				var quaternion = new FULLTILT.Quaternion();

				return function () {

					var orientationData = sensors.orientation.data || { alpha: 0, beta: 0, gamma: 0 };

					var adjustedAlpha = orientationData.alpha;

					if (this.alphaOffsetDevice) {
						matrix.setFromEuler(this.alphaOffsetDevice);
						matrix.rotateZ(-this.alphaOffsetScreen);
						euler.setFromRotationMatrix(matrix);

						if (euler.alpha < 0) {
							euler.alpha += 360;
						}

						euler.alpha %= 360;

						adjustedAlpha -= euler.alpha;
					}

					euler.set(adjustedAlpha, orientationData.beta, orientationData.gamma);

					quaternion.setFromEuler(euler);

					return quaternion;
				};
			}(),

			getScreenAdjustedQuaternion: function () {

				var quaternion;

				return function () {

					quaternion = this.getFixedFrameQuaternion();

					// Automatically apply screen orientation transform
					quaternion.rotateZ(-screenOrientationAngle);

					return quaternion;
				};
			}(),

			getFixedFrameMatrix: function () {

				var euler = new FULLTILT.Euler();
				var matrix = new FULLTILT.RotationMatrix();

				return function () {

					var orientationData = sensors.orientation.data || { alpha: 0, beta: 0, gamma: 0 };

					var adjustedAlpha = orientationData.alpha;

					if (this.alphaOffsetDevice) {
						matrix.setFromEuler(this.alphaOffsetDevice);
						matrix.rotateZ(-this.alphaOffsetScreen);
						euler.setFromRotationMatrix(matrix);

						if (euler.alpha < 0) {
							euler.alpha += 360;
						}

						euler.alpha %= 360;

						adjustedAlpha -= euler.alpha;
					}

					euler.set(adjustedAlpha, orientationData.beta, orientationData.gamma);

					matrix.setFromEuler(euler);

					return matrix;
				};
			}(),

			getScreenAdjustedMatrix: function () {

				var matrix;

				return function () {

					matrix = this.getFixedFrameMatrix();

					// Automatically apply screen orientation transform
					matrix.rotateZ(-screenOrientationAngle);

					return matrix;
				};
			}(),

			getFixedFrameEuler: function () {

				var euler = new FULLTILT.Euler();
				var matrix;

				return function () {

					matrix = this.getFixedFrameMatrix();

					euler.setFromRotationMatrix(matrix);

					return euler;
				};
			}(),

			getScreenAdjustedEuler: function () {

				var euler = new FULLTILT.Euler();
				var matrix;

				return function () {

					matrix = this.getScreenAdjustedMatrix();

					euler.setFromRotationMatrix(matrix);

					return euler;
				};
			}(),

			isAbsolute: function isAbsolute() {

				if (sensors.orientation.data && sensors.orientation.data.absolute === true) {
					return true;
				}

				return false;
			},

			getLastRawEventData: function getLastRawEventData() {

				return sensors.orientation.data || {};
			},

			_alphaAvailable: false,
			_betaAvailable: false,
			_gammaAvailable: false,

			isAvailable: function isAvailable(_valueType) {

				switch (_valueType) {
					case this.ALPHA:
						return this._alphaAvailable;

					case this.BETA:
						return this._betaAvailable;

					case this.GAMMA:
						return this._gammaAvailable;
				}
			},

			ALPHA: 'alpha',
			BETA: 'beta',
			GAMMA: 'gamma'

		};

		///// FULLTILT.DeviceMotion //////

		FULLTILT.DeviceMotion = function (options) {

			this.options = options || {}; // placeholder object since no options are currently supported
		};

		FULLTILT.DeviceMotion.prototype = {

			constructor: FULLTILT.DeviceMotion,

			start: function start(callback) {

				if (callback && Object.prototype.toString.call(callback) == '[object Function]') {

					sensors.motion.callbacks.push(callback);
				}

				if (!screenActive) {

					if (hasScreenOrientationAPI) {

						window.screen.orientation.addEventListener('change', handleScreenOrientationChange, false);
					} else {

						window.addEventListener('orientationchange', handleScreenOrientationChange, false);
					}
				}

				if (!sensors.motion.active) {

					window.addEventListener('devicemotion', handleDeviceMotionChange, false);

					sensors.motion.active = true;
				}
			},

			stop: function stop() {

				if (sensors.motion.active) {

					window.removeEventListener('devicemotion', handleDeviceMotionChange, false);

					sensors.motion.active = false;
				}
			},

			listen: function listen(callback) {

				this.start(callback);
			},

			getScreenAdjustedAcceleration: function getScreenAdjustedAcceleration() {

				var accData = sensors.motion.data && sensors.motion.data.acceleration ? sensors.motion.data.acceleration : { x: 0, y: 0, z: 0 };
				var screenAccData = {};

				switch (screenOrientationAngle) {
					case SCREEN_ROTATION_90:
						screenAccData.x = -accData.y;
						screenAccData.y = accData.x;
						break;
					case SCREEN_ROTATION_180:
						screenAccData.x = -accData.x;
						screenAccData.y = -accData.y;
						break;
					case SCREEN_ROTATION_270:
					case SCREEN_ROTATION_MINUS_90:
						screenAccData.x = accData.y;
						screenAccData.y = -accData.x;
						break;
					default:
						// SCREEN_ROTATION_0
						screenAccData.x = accData.x;
						screenAccData.y = accData.y;
						break;
				}

				screenAccData.z = accData.z;

				return screenAccData;
			},

			getScreenAdjustedAccelerationIncludingGravity: function getScreenAdjustedAccelerationIncludingGravity() {

				var accGData = sensors.motion.data && sensors.motion.data.accelerationIncludingGravity ? sensors.motion.data.accelerationIncludingGravity : { x: 0, y: 0, z: 0 };
				var screenAccGData = {};

				switch (screenOrientationAngle) {
					case SCREEN_ROTATION_90:
						screenAccGData.x = -accGData.y;
						screenAccGData.y = accGData.x;
						break;
					case SCREEN_ROTATION_180:
						screenAccGData.x = -accGData.x;
						screenAccGData.y = -accGData.y;
						break;
					case SCREEN_ROTATION_270:
					case SCREEN_ROTATION_MINUS_90:
						screenAccGData.x = accGData.y;
						screenAccGData.y = -accGData.x;
						break;
					default:
						// SCREEN_ROTATION_0
						screenAccGData.x = accGData.x;
						screenAccGData.y = accGData.y;
						break;
				}

				screenAccGData.z = accGData.z;

				return screenAccGData;
			},

			getScreenAdjustedRotationRate: function getScreenAdjustedRotationRate() {

				var rotRateData = sensors.motion.data && sensors.motion.data.rotationRate ? sensors.motion.data.rotationRate : { alpha: 0, beta: 0, gamma: 0 };
				var screenRotRateData = {};

				switch (screenOrientationAngle) {
					case SCREEN_ROTATION_90:
						screenRotRateData.beta = -rotRateData.gamma;
						screenRotRateData.gamma = rotRateData.beta;
						break;
					case SCREEN_ROTATION_180:
						screenRotRateData.beta = -rotRateData.beta;
						screenRotRateData.gamma = -rotRateData.gamma;
						break;
					case SCREEN_ROTATION_270:
					case SCREEN_ROTATION_MINUS_90:
						screenRotRateData.beta = rotRateData.gamma;
						screenRotRateData.gamma = -rotRateData.beta;
						break;
					default:
						// SCREEN_ROTATION_0
						screenRotRateData.beta = rotRateData.beta;
						screenRotRateData.gamma = rotRateData.gamma;
						break;
				}

				screenRotRateData.alpha = rotRateData.alpha;

				return screenRotRateData;
			},

			getLastRawEventData: function getLastRawEventData() {

				return sensors.motion.data || {};
			},

			_accelerationXAvailable: false,
			_accelerationYAvailable: false,
			_accelerationZAvailable: false,

			_accelerationIncludingGravityXAvailable: false,
			_accelerationIncludingGravityYAvailable: false,
			_accelerationIncludingGravityZAvailable: false,

			_rotationRateAlphaAvailable: false,
			_rotationRateBetaAvailable: false,
			_rotationRateGammaAvailable: false,

			isAvailable: function isAvailable(_valueType) {

				switch (_valueType) {
					case this.ACCELERATION_X:
						return this._accelerationXAvailable;

					case this.ACCELERATION_Y:
						return this._accelerationYAvailable;

					case this.ACCELERATION_Z:
						return this._accelerationZAvailable;

					case this.ACCELERATION_INCLUDING_GRAVITY_X:
						return this._accelerationIncludingGravityXAvailable;

					case this.ACCELERATION_INCLUDING_GRAVITY_Y:
						return this._accelerationIncludingGravityYAvailable;

					case this.ACCELERATION_INCLUDING_GRAVITY_Z:
						return this._accelerationIncludingGravityZAvailable;

					case this.ROTATION_RATE_ALPHA:
						return this._rotationRateAlphaAvailable;

					case this.ROTATION_RATE_BETA:
						return this._rotationRateBetaAvailable;

					case this.ROTATION_RATE_GAMMA:
						return this._rotationRateGammaAvailable;
				}
			},

			ACCELERATION_X: 'accelerationX',
			ACCELERATION_Y: 'accelerationY',
			ACCELERATION_Z: 'accelerationZ',

			ACCELERATION_INCLUDING_GRAVITY_X: 'accelerationIncludingGravityX',
			ACCELERATION_INCLUDING_GRAVITY_Y: 'accelerationIncludingGravityY',
			ACCELERATION_INCLUDING_GRAVITY_Z: 'accelerationIncludingGravityZ',

			ROTATION_RATE_ALPHA: 'rotationRateAlpha',
			ROTATION_RATE_BETA: 'rotationRateBeta',
			ROTATION_RATE_GAMMA: 'rotationRateGamma'

		};

		////// Attach FULLTILT to root DOM element //////

		window.FULLTILT = FULLTILT;
	})(window);
	/**
 * JavaScript project for accessing and normalizing the accelerometer and gyroscope data on mobile devices
 *
 * @author Doruk Eker <dorukeker@gmail.com>
 * @copyright Doruk Eker <http://dorukeker.com>
 * @version 2.0.4
 * @license MIT License | http://opensource.org/licenses/MIT
 */

	(function (root, factory) {
		if (typeof undefined === 'function' && undefined.amd) {
			undefined(function () {
				return root.GyroNorm = factory();
			});
		} else if ('object' === 'object' && module.exports) {
			module.exports = root.GyroNorm = factory();
		} else {
			root.GyroNorm = factory();
		}
	})(commonjsGlobal, function () {
		/* Constants */
		var GAME = 'game';
		var WORLD = 'world';
		var DEVICE_ORIENTATION = 'deviceorientation';
		var ACCELERATION = 'acceleration';
		var ACCELERATION_INCLUDING_GRAVITY = 'accelerationinludinggravity';
		var ROTATION_RATE = 'rotationrate';

		/*-------------------------------------------------------*/
		/* PRIVATE VARIABLES */

		var _interval = null; // Timer to return values
		var _calibrationValue = 0; // Alpha offset value
		var _gravityCoefficient = 0; // Coefficient to normalze gravity related values
		var _isRunning = false; // Boolean value if GyroNorm is tracking
		var _isReady = false; // Boolean value if GyroNorm is is initialized

		var _do = null; // Object to store the device orientation values
		var _dm = null; // Object to store the device motion values

		/* OPTIONS */
		var _frequency = 50; // Frequency for the return data in milliseconds
		var _gravityNormalized = true; // Flag if to normalize gravity values
		var _orientationBase = GAME; // Can be GyroNorm.GAME or GyroNorm.WORLD. GyroNorm.GAME returns orientation values with respect to the head direction of the device. GyroNorm.WORLD returns the orientation values with respect to the actual north direction of the world.
		var _decimalCount = 2; // Number of digits after the decimals point for the return values
		var _logger = null; // Function to callback on error. There is no default value. It can only be set by the user on gn.init()
		var _screenAdjusted = false; // If set to true it will return screen adjusted values. (e.g. On a horizontal orientation of a mobile device, the head would be one of the sides, instead of  the actual head of the device.)

		var GyroNorm = function GyroNorm(options) {};

		/* Constants */
		GyroNorm.GAME = GAME;
		GyroNorm.WORLD = WORLD;
		GyroNorm.DEVICE_ORIENTATION = DEVICE_ORIENTATION;
		GyroNorm.ACCELERATION = ACCELERATION;
		GyroNorm.ACCELERATION_INCLUDING_GRAVITY = ACCELERATION_INCLUDING_GRAVITY;
		GyroNorm.ROTATION_RATE = ROTATION_RATE;

		/*
  *
  * Initialize GyroNorm instance function
  *
  * @param object options - values are as follows. If set in the init function they overwrite the default option values
  * @param int options.frequency
  * @param boolean options.gravityNormalized
  * @param boolean options.orientationBase
  * @param boolean options.decimalCount
  * @param function options.logger
  * @param function options.screenAdjusted
  *
  */

		GyroNorm.prototype.init = function (options) {
			// Assign options that are passed with the constructor function
			if (options && options.frequency) _frequency = options.frequency;
			if (options && options.gravityNormalized) _gravityNormalized = options.gravityNormalized;
			if (options && options.orientationBase) _orientationBase = options.orientationBase;
			if (options && typeof options.decimalCount === 'number' && options.decimalCount >= 0) _decimalCount = parseInt(options.decimalCount);
			if (options && options.logger) _logger = options.logger;
			if (options && options.screenAdjusted) _screenAdjusted = options.screenAdjusted;

			var deviceOrientationPromise = new FULLTILT.getDeviceOrientation({ 'type': _orientationBase }).then(function (controller) {
				_do = controller;
			});

			var deviceMotionPromise = new FULLTILT.getDeviceMotion().then(function (controller) {
				_dm = controller;
				// Set gravity coefficient
				_gravityCoefficient = _dm.getScreenAdjustedAccelerationIncludingGravity().z > 0 ? -1 : 1;
			});

			return Promise.all([deviceOrientationPromise, deviceMotionPromise]).then(function () {
				_isReady = true;
			});
		};

		/*
  *
  * Stops all the tracking and listening on the window objects
  *
  */
		GyroNorm.prototype.end = function () {
			try {
				_isReady = false;
				this.stop();
				_dm.stop();
				_do.stop();
			} catch (err) {
				log(err);
			}
		};

		/*
  *
  * Starts tracking the values
  *
  * @param function callback - Callback function to read the values
  *
  */
		GyroNorm.prototype.start = function (callback) {
			if (!_isReady) {
				log({ message: 'GyroNorm is not initialized yet. First call the "init()" function.', code: 1 });
				return;
			}

			_interval = setInterval(function () {
				callback(snapShot());
			}, _frequency);
			_isRunning = true;
		};

		/*
  *
  * Stops tracking the values
  *
  */
		GyroNorm.prototype.stop = function () {
			if (_interval) {
				clearInterval(_interval);
				_isRunning = false;
			}
		};

		/*
  *
  * Toggles if to normalize gravity related values
  *
  * @param boolean flag
  *
  */
		GyroNorm.prototype.normalizeGravity = function (flag) {
			_gravityNormalized = flag ? true : false;
		};

		/*
  *
  * Sets the current head direction as alpha = 0
  * Can only be used if device orientation is being tracked, values are not screen adjusted, value type is GyroNorm.EULER and orientation base is GyroNorm.GAME
  *
  * @return: If head direction is set successfully returns true, else false
  *
  */
		GyroNorm.prototype.setHeadDirection = function () {
			if (_screenAdjusted || _orientationBase === WORLD) {
				return false;
			}

			_calibrationValue = _do.getFixedFrameEuler().alpha;
			return true;
		};

		/*
  *
  * Sets the log function
  *
  */
		GyroNorm.prototype.startLogging = function (logger) {
			if (logger) {
				_logger = logger;
			}
		};

		/*
  *
  * Sets the log function to null which stops the logging
  *
  */
		GyroNorm.prototype.stopLogging = function () {
			_logger = null;
		};

		/*
  *
  * Returns if certain type of event is available on the device
  *
  * @param string _eventType - possible values are "deviceorientation" , "devicemotion" , "compassneedscalibration"
  *
  * @return true if event is available false if not
  *
  */
		GyroNorm.prototype.isAvailable = function (_eventType) {

			var doSnapShot = _do.getScreenAdjustedEuler();
			var accSnapShot = _dm.getScreenAdjustedAcceleration();
			var accGraSnapShot = _dm.getScreenAdjustedAccelerationIncludingGravity();
			var rotRateSnapShot = _dm.getScreenAdjustedRotationRate();

			switch (_eventType) {
				case DEVICE_ORIENTATION:
					return doSnapShot.alpha && doSnapShot.alpha !== null && doSnapShot.beta && doSnapShot.beta !== null && doSnapShot.gamma && doSnapShot.gamma !== null;
					break;

				case ACCELERATION:
					return accSnapShot && accSnapShot.x && accSnapShot.y && accSnapShot.z;
					break;

				case ACCELERATION_INCLUDING_GRAVITY:
					return accGraSnapShot && accGraSnapShot.x && accGraSnapShot.y && accGraSnapShot.z;
					break;

				case ROTATION_RATE:
					return rotRateSnapShot && rotRateSnapShot.alpha && rotRateSnapShot.beta && rotRateSnapShot.gamma;
					break;

				default:
					return {
						deviceOrientationAvailable: doSnapShot.alpha && doSnapShot.alpha !== null && doSnapShot.beta && doSnapShot.beta !== null && doSnapShot.gamma && doSnapShot.gamma !== null,
						accelerationAvailable: accSnapShot && accSnapShot.x && accSnapShot.y && accSnapShot.z,
						accelerationIncludingGravityAvailable: accGraSnapShot && accGraSnapShot.x && accGraSnapShot.y && accGraSnapShot.z,
						rotationRateAvailable: rotRateSnapShot && rotRateSnapShot.alpha && rotRateSnapShot.beta && rotRateSnapShot.gamma
					};
					break;
			}
		};

		/*
  *
  * Returns boolean value if the GyroNorm is running
  *
  */
		GyroNorm.prototype.isRunning = function () {
			return _isRunning;
		};

		/*-------------------------------------------------------*/
		/* PRIVATE FUNCTIONS */

		/*
  *
  * Utility function to round with digits after the decimal point
  *
  * @param float number - the original number to round
  *
  */
		function rnd(number) {
			return Math.round(number * Math.pow(10, _decimalCount)) / Math.pow(10, _decimalCount);
		}

		/*
  *
  * Starts calibration
  *
  */
		function snapShot() {
			var doSnapShot = {};

			if (_screenAdjusted) {
				doSnapShot = _do.getScreenAdjustedEuler();
			} else {
				doSnapShot = _do.getFixedFrameEuler();
			}

			var accSnapShot = _dm.getScreenAdjustedAcceleration();
			var accGraSnapShot = _dm.getScreenAdjustedAccelerationIncludingGravity();
			var rotRateSnapShot = _dm.getScreenAdjustedRotationRate();

			var alphaToSend = 0;

			if (_orientationBase === GAME) {
				alphaToSend = doSnapShot.alpha - _calibrationValue;
				alphaToSend = alphaToSend < 0 ? 360 - Math.abs(alphaToSend) : alphaToSend;
			} else {
				alphaToSend = doSnapShot.alpha;
			}

			var snapShot = {
				do: {
					alpha: rnd(alphaToSend),
					beta: rnd(doSnapShot.beta),
					gamma: rnd(doSnapShot.gamma),
					absolute: _do.isAbsolute()
				},
				dm: {
					x: rnd(accSnapShot.x),
					y: rnd(accSnapShot.y),
					z: rnd(accSnapShot.z),
					gx: rnd(accGraSnapShot.x),
					gy: rnd(accGraSnapShot.y),
					gz: rnd(accGraSnapShot.z),
					alpha: rnd(rotRateSnapShot.alpha),
					beta: rnd(rotRateSnapShot.beta),
					gamma: rnd(rotRateSnapShot.gamma)
				}
			};

			// Normalize gravity
			if (_gravityNormalized) {
				snapShot.dm.gx *= _gravityCoefficient;
				snapShot.dm.gy *= _gravityCoefficient;
				snapShot.dm.gz *= _gravityCoefficient;
			}

			return snapShot;
		}

		/*
  *
  * Starts listening to orientation event on the window object
  *
  */
		function log(err) {
			if (_logger) {
				if (typeof err == 'string') {
					err = { message: err, code: 0 };
				}
				_logger(err);
			}
		}

		return GyroNorm;
	});
});

(function (self) {
  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : window);

/**
 * A playground for creative coding
 */

var Sandpit = function () {
  createClass(Sandpit, null, [{
    key: 'CANVAS',
    get: function get$$1() {
      return '2d';
    }
  }, {
    key: 'WEBGL',
    get: function get$$1() {
      return 'webgl';
    }
  }, {
    key: 'EXPERIMENTAL_WEBGL',
    get: function get$$1() {
      return 'experimental-webgl';
    }

    /**
     * @param {(string|object)} container - The container for the canvas to be added to
     * @param {string} type - Defines whether the context is 2d or 3d
     * @param {object} options - Optionally decide to ignore rescaling for retina displays,
     * disable putting settings into the query string, or add stats to the dom
     */

  }]);

  function Sandpit(container, type, options) {
    classCallCheck(this, Sandpit);

    logger.info('⛱ Welcome to Sandpit');
    this._queryable = options && options.hasOwnProperty('queryable') ? options.queryable : true;
    this._retina = options && options.hasOwnProperty('retina') ? options.retina : true;
    this._stats = options && options.hasOwnProperty('stats') ? options.stats : false;
    this._setupContext(container, type, this._retina);
  }

  /**
   * Set up the canvas
   * @private
   */


  createClass(Sandpit, [{
    key: '_setupContext',
    value: function _setupContext(container, type, retina) {
      // Check that the correct container type has been passed
      if (typeof container !== 'string' && (typeof container === 'undefined' ? 'undefined' : _typeof(container)) !== 'object') {
        throw new Error('Please provide a string or object reference to the container, like ".container", or document.querySelector(".container")');
      }
      // Check that the type is set
      if (typeof type !== 'string' || type !== Sandpit.CANVAS && type !== Sandpit.WEBGL) {
        throw new Error('Please provide a context type - either `Sandpit.CANVAS` or `Sandpit.WEBGL`');
      }

      // Either find the container, or just use the object
      var _container = void 0;
      if (typeof container === 'string') {
        _container = document.querySelector(container);
      } else if ((typeof container === 'undefined' ? 'undefined' : _typeof(container)) === 'object') {
        _container = container;
      }

      // Check the container is a dom element
      if (Is.element(_container)) {
        // Check the container is a canvas element
        // and if so, use it instead of making a new one
        if (Is.canvas(_container)) {
          this._canvas = _container;
        } else {
          this._canvas = document.createElement('canvas');
          _container.appendChild(this._canvas);
        }
        // Set the width and height
        this._canvas.width = this._canvas.clientWidth;
        this._canvas.height = this._canvas.clientHeight;
        // Grab the context
        if (type === Sandpit.CANVAS) {
          this._context = this._canvas.getContext(type);
        } else if (type === Sandpit.WEBGL || type === Sandpit.EXPERIMENTAL_WEBGL) {
          this._context = this._canvas.getContext(Sandpit.WEBGL) || this._canvas.getContext(Sandpit.EXPERIMENTAL_WEBGL);
        }
        this._type = type;

        // Deal with retina displays
        if (type === Sandpit.CANVAS && window.devicePixelRatio !== 1 && this._retina) {
          this._handleRetina();
        }

        // Sets up stats, if they are enabled
        if (this._stats) this.setupStats();
      } else {
        throw new Error('The container is not a HTMLElement');
      }
    }

    /**
     *  Resizes the canvas for retina
     *  @private
     */

  }, {
    key: '_handleRetina',
    value: function _handleRetina() {
      var ratio = window.devicePixelRatio;
      // Increaser the canvas by the ratio
      this._canvas.width = this._canvas.clientWidth * ratio;
      this._canvas.height = this._canvas.clientHeight * ratio;
      // Scale the canvas to the new ratio
      this._context.scale(ratio, ratio);
    }

    /**
     * Sets up the settings gui via dat.gui
     * @param {object} settings - An object of key value pairs
     * for the setting name and default value
     * @param {boolean} queryable - Whether or not to store settings
     * in the query string for easy sharing
     * @private
     */

  }, {
    key: '_setupSettings',
    value: function _setupSettings() {
      var _this = this;

      this._settings = {};
      this._clearGui = true;
      this._resetGui = true;
      // Destroy the gui if new settings are being passed in
      if (this._gui) {
        this._gui.domElement.removeEventListener('touchmove', this._preventDefault);
        this._gui.destroy();
      }
      this._gui = new dat.GUI();
      this._gui.domElement.addEventListener('touchmove', this._preventDefault, false);

      // If queryable is true, set up the query string management
      // for storing settings
      if (this._queryable) {
        if (window.location.search) {
          var params = queryString.parse(window.location.search);
          Object.keys(params).forEach(function (key) {
            // Check if the param is a float, and if so, parse it
            if (parseFloat(params[key])) {
              params[key] = parseFloat(params[key]);
            }
            // If a setting matches the param, use the param
            if (_this.defaults[key]) {
              var param = params[key];
              // Convert string to boolean if 'true' or 'false'
              if (param === 'true') param = true;
              if (param === 'false') param = false;
              if (_typeof(_this.defaults[key].value) !== 'object') {
                // If sticky is true, stick with the default setting
                // otherwise set the default to the param
                if (!_this.defaults[key].sticky) {
                  _this.defaults[key].value = param;
                }
              } else {
                // If the param is an object, store the
                // name in a selected property
                if (!_this.defaults[key].sticky) {
                  _this.defaults[key].selected = param;
                } else {
                  // If sticky is true, force the default setting
                  _this.defaults[key].selected = _this.defaults[key].value[Object.keys(_this.defaults[key].value)[0]];
                }
              }
            }
          });
        }
      }

      // Create settings folder and add each item to it
      var group = this._gui.addFolder('Settings');
      Object.keys(this.defaults).forEach(function (name) {
        var options = false;
        var value = _this.defaults[name].value;

        if (value || _typeof(_this.defaults[name]) === 'object') {
          // If it's an object, supply the array or object,
          // and grab the right value
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            options = value;
            // If a selected option is available via the query
            // string, use that
            if (_this.defaults[name].selected) {
              _this._settings[name] = _this.defaults[name].selected;
            } else {
              // If not, grab the first item in the object or array
              _this._settings[name] = Is.array(value) ? value[0] : value[Object.keys(value)[0]];
            }
          } else {
            // If it's not an object, pass the setting on
            _this._settings[name] = _this.defaults[name].value;
          }

          // If it's a colour, use a different method
          var guiField = _this.defaults[name].color ? group.addColor(_this._settings, name) : group.add(_this._settings, name, options);

          // Check for min, max and step, and add to the gui field
          if (_this.defaults[name].min !== undefined) guiField = guiField.min(_this.defaults[name].min);
          if (_this.defaults[name].max !== undefined) guiField = guiField.max(_this.defaults[name].max);
          if (_this.defaults[name].step !== undefined) guiField = guiField.step(_this.defaults[name].step);
          if (_this.defaults[name].editable === false) {
            guiField.domElement.style.pointerEvents = 'none';
            guiField.domElement.style.opacity = 0.5;
          }

          // Handle the change event
          guiField.onChange(debounce(function (value) {
            _this._change(name, value);
          }), 300);
        } else {
          // Handle properties that aren't tied to value -
          // usually settings that relate to the gui itself
          switch (name) {
            case 'clear':
              _this._clearGui = _this.defaults[name];
              break;
            case 'reset':
              _this._resetGui = _this.defaults[name];
              break;
            default:
              break;
          }
        }
      });
      // Open the settings drawer
      group.open();

      // Hide controls for mobile
      if (this.width <= 767) {
        this._gui.close();
      }

      // If queryable is enabled, serialize the final settings
      // and push them to the query string
      if (this._queryable) {
        var query = queryString.stringify(this._settings);
        window.history.replaceState({}, null, this._getPathFromUrl() + '?' + query);
        // Adds a clear and reset button to the gui interface,
        // if they aren't disabled in the settings
        if (this._clearGui) this._gui.add({ clear: function clear() {
            _this.clear();
          } }, 'clear');
        if (this._resetGui) this._gui.add({ reset: function reset() {
            _this._reset();
          } }, 'reset');
      }
    }

    /**
     * Resets the settings in the query string, and offers a hook
     * to do something more fancy with sandpit.reset
     * @private
     */

  }, {
    key: '_reset',
    value: function _reset() {
      if (this._queryable || this.reset) {
        if (this.reset) {
          // If there's a reset method available, run that
          this.reset();
        } else {
          // If queryable, clear the query string
          window.history.replaceState({}, null, this._getPathFromUrl());
          // Reload the video
          window.location.reload();
        }
      }
    }

    /**vst
    
     * Handles a changed setting
     * @param {string} name - Setting name
     * @param {*} value - The new setting value
     * @private
     */

  }, {
    key: '_change',
    value: function _change(name, value) {
      logger.info('Update fired on ' + name + ': ' + value);
      if (this._queryable) {
        var query = queryString.stringify(this._settings);
        window.history.pushState({}, null, this._getPathFromUrl() + '?' + query);
      }
      // If there is a change hook, use it
      if (this.change) {
        this.change(name, value);
      }
    }

    /**
     * Sets up the primary animation loop
     * @private
     */

  }, {
    key: '_setupLoop',
    value: function _setupLoop() {
      this._time = 0;
      this._loop();
    }

    /**
     * The primary animation loop
     * @private
     */

  }, {
    key: '_loop',
    value: function _loop() {
      // Start stat recording for this frame
      if (this.stats) this.stats.begin();
      // Clear the canvas if autoclear is set
      if (this._autoClear) this.clear();
      // Loop!
      if (this.loop) this.loop();
      // Increment time
      this._time++;
      // End stat recording for this frame
      if (this.stats) this.stats.end();
      this._animationFrame = window.requestAnimationFrame(this._loop.bind(this));
    }

    /**
     * Sets up event management
     * @private
     */

  }, {
    key: '_setupEvents',
    value: function _setupEvents() {
      var _this2 = this;

      this._events = {};
      this._setupResize();
      this._setupInput();

      // Loop through and add event listeners
      Object.keys(this._events).forEach(function (event) {
        if (_this2._events[event].disable) {
          // If the disable property exists, add prevent default to it
          _this2._events[event].disable.addEventListener(event, _this2._preventDefault, false);
        }
        _this2._events[event].context.addEventListener(event, _this2._events[event].event.bind(_this2), false);
      });
    }

    /**
     * Sets up the resize event, optionally using a user defined option
     * @private
     */

  }, {
    key: '_setupResize',
    value: function _setupResize() {
      this._resizeEvent = this.resize ? this.resize : this.resizeCanvas;
      this._events['resize'] = { event: this._resizeEvent, context: window };
    }

    /**
     * Hooks up the mouse events
     * @private
     */

  }, {
    key: '_setupMouse',
    value: function _setupMouse() {
      this._events['mousemove'] = { event: this._handleMouseMove, context: document };
      this._events['mousedown'] = { event: this._handleMouseDown, context: document };
      this._events['mouseenter'] = { event: this._handleMouseEnter, context: document };
      this._events['mouseleave'] = { event: this._handleMouseLeave, context: document };
      this._events['mouseup'] = { event: this._handleMouseUp, context: document };
    }

    /**
     * Hooks up the touch events
     * @private
     */

  }, {
    key: '_setupTouches',
    value: function _setupTouches() {
      var body = document.querySelector('body');
      this._events['touchmove'] = { event: this._handleTouchMove, disable: document, context: body };
      this._events['touchstart'] = { event: this._handleTouchStart, disable: document, context: body };
      this._events['touchend'] = { event: this._handleTouchEnd, disable: document, context: body };
    }

    /**
     * Stops an event bubbling up
     * @private
     */

  }, {
    key: '_stopPropagation',
    value: function _stopPropagation(event) {
      event.stopPropagation();
    }

    /**
     * Stops an event firing its default behaviour
     * @private
     */

  }, {
    key: '_preventDefault',
    value: function _preventDefault(event) {
      event.preventDefault();
    }

    /**
     * Hooks up the accelerometer events
     * @private
     */

  }, {
    key: '_setupAccelerometer',
    value: function _setupAccelerometer() {
      var _this3 = this;

      this._gyroscope = new gyronorm_complete();
      this._gyroscope.init().then(function () {
        _this3._gyroscope.start(_this3._handleAccelerometer.bind(_this3));
      }).catch(function (e) {
        logger.warn('Accelerometer is not supported by this device');
      });
    }

    /**
     * Defines the input object and sets up the mouse, accelerometer and touches
     * @param {event} event
     * @private
     */

  }, {
    key: '_setupInput',
    value: function _setupInput() {
      this.input = {};
      this._setupMouse();
      this._setupTouches();
      this._setupAccelerometer();
    }

    /**
     * Handles the mousemove event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseMove',
    value: function _handleMouseMove(event) {
      event.touches = {};
      event.touches[0] = event;
      this._handleTouches(event);
      if (this.move) this.move(event);
    }

    /**
     * Handles the mousedown event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseDown',
    value: function _handleMouseDown(event) {
      event.touches = {};
      event.touches[0] = event;
      this._handleTouches(event);
      if (this.touch) this.touch(event);
    }

    /**
     * Handles the mouseup event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseUp',
    value: function _handleMouseUp(event) {
      this._handleRelease();
      if (this.release) this.release(event);
    }

    /**
     * Handles the mouseenter event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {
      this.input.inFrame = true;
    }

    /**
     * Handles the mouseleave event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      this.input.inFrame = false;
    }

    /**
     * Handles the touchmove event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(event) {
      // So, event.preventDefault() seems required to prevent pinching,
      // but sometimes pinches still rarely happen (3 - 5 fingers), so
      // is there a way to avoid this? Currently added a
      // focusTouchesOnCanvas() method to blow away all other
      // touch events, for use outside the demo environment,
      // but this isn't really a viable solution. If possible,
      // I'd use the bit below, but I've commented it out for now:
      // this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation()
      event.preventDefault();
      this._handleTouches(event);
      if (this.move) this.move(event);
    }

    /**
     * Handles the touchstart event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(event) {
      this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation();
      this._handleTouches(event);
      if (this.touch) this.touch(event);
    }

    /**
     * Handles the touchend event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd(event) {
      this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation();
      this._handleTouches(event);
      if (this.release) this.release(event);
    }

    /**
     * Handles the accelerometer event, using the
     * GyroNorm.js library
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleAccelerometer',
    value: function _handleAccelerometer(data) {
      this.input.accelerometer = data;
      // Apply some helpers to more easily
      // access x, y and rotation
      this.input.accelerometer.xAxis = data.do.beta;
      this.input.accelerometer.yAxis = data.do.gamma;
      this.input.accelerometer.rotation = data.do.alpha;
      this.input.accelerometer.gamma = data.do.gamma;
      this.input.accelerometer.beta = data.do.beta;
      this.input.accelerometer.alpha = data.do.alpha;
      // Fire the accelerometer event, if available
      if (this.accelerometer) this.accelerometer();
    }

    /**
     * Handles a set of touches
     * @param {object} touches - An object containing touch information, in
     * the format {0: TouchItem, 1: TouchItem}
     * @private
     */

  }, {
    key: '_handleTouches',
    value: function _handleTouches(event) {
      var _this4 = this;

      // Delete the length parameter from touches,
      // so we can loop through it
      delete event.touches.length;
      if (Object.keys(event.touches).length) {
        var touches = Object.keys(event.touches).map(function (key, i) {
          // Set the X & Y for input from the first touch
          if (i === 0) {
            _this4.input.x = event.touches[key].pageX;
            _this4.input.y = event.touches[key].pageY;
          }

          var touch = {};
          // If there is previous touch, store it as a helper
          if (_this4.input.touches && _this4.input.touches[key]) {
            touch.previousX = _this4.input.touches[key].x;
            touch.previousY = _this4.input.touches[key].y;
          }
          // Store the x and y
          touch.x = event.touches[key].pageX;
          touch.y = event.touches[key].pageY;
          // If force is available, add it
          if (event.touches[key].force) touch.force = event.touches[key].force;
          return touch;
        });
        // Update the touches
        this.input.touches = touches;
      } else {
        this._handleRelease();
      }
    }

    /**
     * Deletes the appropriate data from inputs on release
     * @param {object} pointer - An object containing pointer information,
     * in the format of {pageX: x, pageY: y}
     * @private
     */

  }, {
    key: '_handleRelease',
    value: function _handleRelease() {
      delete this.input.x;
      delete this.input.y;
      delete this.input.touches;
    }

    /**
     * Creates the settings GUI
     * @param {object} settings - An object containing key value pairs for each setting
     * @param {boolean} queryable - Enables query string storage of settings
     * @return {object} Context
     */

  }, {
    key: 'clear',


    /**
     * Clears the canvas, and if change is set,
     * fires change
     * @param {boolean} boolean
     */
    value: function clear() {
      if (this._type === Sandpit.CANVAS) {
        this._context.clearRect(0, 0, this.width, this.height);
      } else if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
        this._context.clearColor(0, 0, 0, 0);
        this._context.clear(this._context.COLOR_BUFFER_BIT | this._context.DEPTH_BUFFER_BIT);
      }
      if (this.change) this.change();
    }

    /**
     * Grab the current path from the url
     * @private
     */

  }, {
    key: '_getPathFromUrl',
    value: function _getPathFromUrl() {
      return window.location.toString().split(/[?#]/)[0];
    }

    /**
     * Clear the query string
     */

  }, {
    key: 'clearQueryString',
    value: function clearQueryString() {
      window.history.replaceState({}, null, this._getPathFromUrl());
    }

    /**
     * Sets whether to or not to ignore the touch events for
     * multitouch, bypassing pinch to zoom, but meaning no
     * other touch events will work
     * @param {boolean} boolean
     */

  }, {
    key: 'fill',


    /**
     * Fills the canvas with the provided colour
     * @param {string} color - The color to fill with, in string format
     * (for example, '#000', 'rgba(0, 0, 0, 0.5)')
     */
    value: function fill(color$$1) {
      this._fill = color$$1;
      if (this._type === Sandpit.CANVAS) {
        this._context.fillStyle = this._fill;
        this._context.fillRect(0, 0, this.width, this.height);
      } else if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
        // TODO: Use fill to update the clearColor of a 3D canvas
        logger.warn('fill() is currently only supported in 2D');
      }
    }

    /**
     * Returns a promise using fetch
     * https://github.com/github/fetch
     * @param {string} url - The url to fetch
     */

  }, {
    key: 'get',
    value: function get$$1(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
          resolve(response.text());
        }).catch(function (error) {
          logger.info('Get fail', error);
          reject();
        });
      });
    }

    /**
     * Returns a random number generator based on a seed
     * @param {string} seed - The seed with which to create the random number
     * @returns {function} A function that returns a random number
     */

  }, {
    key: 'random',
    value: function random() {
      var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '123456';

      return seedrandom$2(seed);
    }

    /**
     * Resizes the canvas to the window width and height
     */

  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      if (this._type === Sandpit.CANVAS && window.devicePixelRatio !== 1 && this._retina) {
        this._handleRetina();
      } else {
        this._canvas.width = this._canvas.clientWidth;
        this._canvas.height = this._canvas.clientHeight;
      }
      if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
        this._context.viewport(0, 0, this._context.drawingBufferWidth, this._context.drawingBufferHeight);
      }
      if (this.change) this.change();
    }

    /**
     * Handle the stats object
     * @param {object} stats - a Stats.js object, which can be imported
     * from Sandpit with `import { Stats } from 'sandpit'`
     */

  }, {
    key: 'setupStats',
    value: function setupStats() {
      if (!this.stats) {
        this.stats = new stats_min();
        document.querySelector('body').appendChild(this.stats.dom);
      }
    }

    /**
     * Sets up resizing and input events and starts the loop
     */

  }, {
    key: 'start',
    value: function start() {
      // Sets up the events
      this._setupEvents();
      // Sets up setup
      if (this.setup) this.setup();
      // Loop!
      if (!this.loop) logger.warn('Looks like you need to define a loop');
      this._setupLoop();
    }

    /**
     * Stops the loop and removes event listeners
     */

  }, {
    key: 'stop',
    value: function stop() {
      var _this5 = this;

      // Stop the animation frame loop
      window.cancelAnimationFrame(this._animationFrame);
      // Delete element, if initiated
      if (this.canvas) {
        this.canvas.outerHTML = '';
        delete this.canvas;
      }
      if (this.stats) {
        document.querySelector('body').removeChild(this.stats.dom);
        delete this.stats;
      }
      // Remove Gui, if initiated
      if (this._gui) {
        this._gui.domElement.removeEventListener('touchmove', this._preventDefault);
        this._gui.destroy();
      }
      // Remove all event listeners
      Object.keys(this._events).forEach(function (event) {
        if (_this5._events[event].disable) {
          _this5._events[event].disable.removeEventListener(event, _this5._preventDefault);
        }
        _this5._events[event].context.removeEventListener(event, _this5._events[event].event.bind(_this5));
      });
    }
  }, {
    key: 'settings',
    set: function set$$1(settings) {
      // Sets up settings
      if (settings && Object.keys(settings).length) {
        this.defaults = settings;
        this._setupSettings();
      }
    }

    /**
     * Returns the settings object
     * @return {object} settings
     */
    ,
    get: function get$$1() {
      return this._settings;
    }

    /**
     * Defines whether or not to return debugger messages from Sandpit
     * @param {boolean} boolean
     * @return {object} Context
     */

  }, {
    key: 'debug',
    set: function set$$1(boolean) {
      logger.active = boolean;
    }

    /**
     * Checks if debugger is active
     * @return {boolean} active
     */
    ,
    get: function get$$1() {
      return logger.active;
    }

    /**
     * Sets whether the canvas autoclears after each render
     * @param {boolean} boolean
     */

  }, {
    key: 'autoClear',
    set: function set$$1(boolean) {
      this._autoClear = boolean;
    }

    /**
     * Checks if autoclear is on
     * @return {boolean} active
     */
    ,
    get: function get$$1() {
      return this._autoClear;
    }
  }, {
    key: 'focusTouchesOnCanvas',
    set: function set$$1(boolean) {
      this._focusTouchesOnCanvas = boolean;
    }

    /**
     * Checks if touches are focused on the canvas
     * @return {boolean} active
     */
    ,
    get: function get$$1() {
      return this._focusTouchesOnCanvas;
    }

    /**
     * Returns the canvas context
     * @return {object} Context
     */

  }, {
    key: 'context',
    get: function get$$1() {
      return this._context;
    }

    /**
     * Returns the canvas object
     * @return {canvas} Canvas
     */

  }, {
    key: 'canvas',
    get: function get$$1() {
      return this._canvas;
    }

    /**
     * Returns the frame increment
     * @returns {number} Canvas width
     */

  }, {
    key: 'time',
    get: function get$$1() {
      return this._time;
    }

    /**
     * Returns the canvas width
     * @returns {number} Canvas width
     */

  }, {
    key: 'width',
    get: function get$$1() {
      return this._canvas.clientWidth;
    }

    /**
     * Sets the canvas width
     * @param {number} width - The width to make the canvas
     */
    ,
    set: function set$$1(width) {
      this._canvas.width = width;
    }

    /**
     * Returns the canvas height
     * @returns {number} Canvas height
     */

  }, {
    key: 'height',
    get: function get$$1() {
      return this._canvas.clientHeight;
    }

    /**
     * Sets the canvas height
     * @param {number} height - The height to make the canvas
     */
    ,
    set: function set$$1(height) {
      this._canvas.height = height;
    }
  }]);
  return Sandpit;
}();

export { Is, Mathematics, color as Color, victor as Vector, stats_min as Stats };
export default Sandpit;
