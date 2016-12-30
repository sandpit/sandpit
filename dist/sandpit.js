'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = exports.math = exports.is = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dat = require('dat.gui/build/dat.gui');

var _dat2 = _interopRequireDefault(_dat);

var _queryfetch = require('queryfetch');

var _queryfetch2 = _interopRequireDefault(_queryfetch);

var _debounce = require('debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _seedrandom = require('seedrandom');

var _seedrandom2 = _interopRequireDefault(_seedrandom);

var _logger = require('./utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _is = require('./utils/is');

var _is2 = _interopRequireDefault(_is);

var _color = require('./utils/color');

var _color2 = _interopRequireDefault(_color);

var _math = require('./utils/math');

var _math2 = _interopRequireDefault(_math);

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global fetch */

/**
 * A playground for creative coding
 */
var Sandpit = function () {
  _createClass(Sandpit, null, [{
    key: 'CANVAS',
    get: function get() {
      return '2d';
    }
  }, {
    key: 'WEBGL',
    get: function get() {
      return '3d';
    }

    /**
     * @param {(string|object)} container - The container for the canvas to be added to
     * @param {string} type - Defines whether the context is 2d or 3d
     */

  }]);

  function Sandpit(container, type) {
    _classCallCheck(this, Sandpit);

    console.log('⛱ Welcome to Sandpit');
    this._setupContext(container, type);
  }

  /**
   * Set up the canvas
   * @private
   */


  _createClass(Sandpit, [{
    key: '_setupContext',
    value: function _setupContext(container, type) {
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
      if (_is2.default.element(_container)) {
        // Check the container is a canvas element
        // and if so, use it instead of making a new one
        if (_is2.default.canvas(_container)) {
          this._canvas = _container;
        } else {
          this._canvas = document.createElement('canvas');
          _container.appendChild(this._canvas);
        }
        // Set the width and height
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        // Grab the context
        this._context = this._canvas.getContext(type);
        this._type = type;
      } else {
        throw new Error('The container is not a HTMLElement');
      }
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

      // Sort the original settings in defaults
      this.setting = {};
      this._gui = new _dat2.default.GUI();
      this._gui.domElement.addEventListener('touchmove', this._preventDefault, false);

      // If queryable is true, set up the query string management
      // for storing settings
      if (this._queryable) {
        if (window.location.search) {
          (function () {
            var params = _queryfetch2.default.parse(window.location.search);
            Object.keys(params).forEach(function (key) {
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
          })();
        }
      }

      // Create settings folder and add each item to it
      var group = this._gui.addFolder('Settings');
      Object.keys(this.defaults).forEach(function (name) {
        var options = false;
        var value = _this.defaults[name].value;

        // If it's an object, supply the array or object,
        // and grab the right value
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          options = value;
          // If a selected option is available via the query
          // string, use that
          if (_this.defaults[name].selected) {
            _this.settings[name] = _this.defaults[name].selected;
          } else {
            // If not, grab the first item in the object or array
            _this.settings[name] = _is2.default.array(value) ? value[0] : value[Object.keys(value)[0]];
          }
        } else {
          // If it's not an object, pass the setting on
          _this.settings[name] = _this.defaults[name].value;
        }

        // If it's a colour, use a different method
        var guiField = _this.defaults[name].color ? group.addColor(_this.settings, name) : group.add(_this.settings, name, options);

        // Check for min, max and step, and add to the gui field
        if (_this.defaults[name].min !== undefined) guiField = guiField.min(_this.defaults[name].min);
        if (_this.defaults[name].max !== undefined) guiField = guiField.max(_this.defaults[name].max);
        if (_this.defaults[name].step !== undefined) guiField = guiField.step(_this.defaults[name].step);
        if (_this.defaults[name].editable === false) {
          guiField.domElement.style.pointerEvents = 'none';
          guiField.domElement.style.opacity = 0.5;
        }

        // Handle the change event
        guiField.onChange((0, _debounce2.default)(function (value) {
          _this._change(name, value);
        }), 300);
      });
      // Open the settings drawer
      group.open();

      // Hide controls for mobile
      // TODO: Make this a settings
      if (this.width() <= 767) {
        this._gui.close();
      }

      // If queryable is enabled, serialize the final settings
      // and push them to the query string
      if (this._queryable) {
        var query = _queryfetch2.default.serialize(this.settings);
        window.history.pushState({}, null, '/?' + query);
        // Adds a clear and reset button to the gui interface
        this._gui.add({ clear: function clear() {
            _this.clear();
          } }, 'clear');
        this._gui.add({ reset: function reset() {
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
      if (this._queryable) {
        if (this.reset) {
          // If there's a reset method available, run that
          this.reset();
        } else {
          // If queryable, clear the query string
          window.history.pushState({}, null, '/');
          // Reload the video
          window.location.reload();
        }
      }
    }

    /**
     * Handles a changed setting
     * @param {string} name - Setting name
     * @param {*} value - The new setting value
     * @private
     */

  }, {
    key: '_change',
    value: function _change(name, value) {
      _logger2.default.info('Update fired on ' + name + ': ' + value);
      if (this._queryable) {
        var query = _queryfetch2.default.serialize(this.settings);
        window.history.pushState({}, null, '/?' + query);
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
      // Clear the canvas if autoclear is set
      if (this._autoClear) {
        if (this._type === Sandpit.CANVAS) {
          this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        } else if (this._type === Sandpit.WEGBL) {
          _logger2.default.warn('autoClear() is currently only supported in 2D');
        }
      }
      // Loop!
      if (this.loop) this.loop();
      // Increment time
      this._time++;
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
      if (this.accelerometer) {
        if (window.DeviceOrientationEvent) {
          this.input.accelerometer = {};
          this._events['deviceorientation'] = { event: this._handleAccelerometer, context: document };
        } else {
          _logger2.default.warn('Accelerometer is not supported by this device');
        }
      }
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
      this._handlePointer(event);
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
      this._handlePointer(event);
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
      this._handlePointer(event.touches[0]);
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
      this._handlePointer(event.touches[0]);
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
     * Handles the accelerometer event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleAccelerometer',
    value: function _handleAccelerometer(event) {
      this.input.accelerometer.x = event.beta;
      this.input.accelerometer.y = event.alpha;
      this.input.accelerometer.z = event.gamma;
      if (this.accelerometer) this.accelerometer(event);
    }

    /**
     * Handles a set of touches
     * @param {object} touches - An object containing touch information, in
     * the format {0: TouchItem, 1: TouchItem}
     */

  }, {
    key: '_handleTouches',
    value: function _handleTouches(event) {
      // Delete the length parameter from touches,
      // so we can loop through it
      delete event.touches.length;
      if (Object.keys(event.touches).length) {
        this.input.touches = Object.keys(event.touches).map(function (key) {
          var touch = { x: event.touches[key].pageX, y: event.touches[key].pageY };
          if (event.touches[key].force) touch.force = event.touches[key].force;
          return touch;
        });
      } else {
        this._handleRelease();
      }
    }

    /**
     * Handles a pointer, for example, a mouse or single touch
     * @param {object} pointer - An object containing pointer information,
     * in the format of {pageX: x, pageY: y}
     */

  }, {
    key: '_handlePointer',
    value: function _handlePointer(event) {
      this.input.x = event.pageX;
      this.input.y = event.pageY;
      this.input.touches = [{ x: this.input.x, y: this.input.y }];
    }

    /**
     * Deletes the appropriate data from inputs on release
     * @param {object} pointer - An object containing pointer information,
     * in the format of {pageX: x, pageY: y}
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
    key: 'settings',
    value: function settings(_settings) {
      var queryable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.defaults = _settings;
      this._queryable = queryable;
    }

    /**
     * Defines whether or not to return debugger messages from Sandpit
     * @param {boolean} boolean
     * @return {object} Context
     */

  }, {
    key: 'debug',
    value: function debug(boolean) {
      _logger2.default.active = boolean;
    }

    /**
     * Sets whether the canvas autoclears after each render
     * @param {boolean} boolean
     */

  }, {
    key: 'autoClear',
    value: function autoClear(boolean) {
      this._autoClear = boolean;
    }
  }, {
    key: 'clear',
    value: function clear() {
      if (this._type === Sandpit.CANVAS) {
        this._context.clearRect(0, 0, this.width(), this.height());
      } else if (this._type === Sandpit.WEGBL) {
        _logger2.default.warn('clear() is currently only supported in 2D');
      }
    }

    /**
     * Sets whether to or not to ignore the touch events for
     * multitouch, bypassing pinch to zoom, but meaning no
     * other touch events will work
     * @param {boolean} boolean
     */

  }, {
    key: 'focusTouchesOnCanvas',
    value: function focusTouchesOnCanvas() {
      this._focusTouchesOnCanvas = true;
    }

    /**
     * Returns the canvas context
     * @return {object} Context
     */

  }, {
    key: 'context',
    value: function context() {
      return this._context;
    }

    /**
     * Returns the canvas object
     * @return {canvas} Canvas
     */

  }, {
    key: 'canvas',
    value: function canvas() {
      return this._canvas;
    }

    /**
     * Returns the frame increment
     * @returns {number} Canvas width
     */

  }, {
    key: 'time',
    value: function time() {
      return this._time;
    }

    /**
     * Returns the canvas width
     * @returns {number} Canvas width
     */

  }, {
    key: 'width',
    value: function width() {
      return this._canvas.width;
    }

    /**
     * Returns the canvas height
     * @returns {number} Canvas height
     */

  }, {
    key: 'height',
    value: function height() {
      return this._canvas.height;
    }

    /**
     * Fills the canvas with the provided colour
     * @param {string} color - The color to fill with, in string format
     * (for example, '#000', 'rgba(0, 0, 0, 0.5)')
     */

  }, {
    key: 'fill',
    value: function fill(color) {
      if (this._type === Sandpit.CANVAS) {
        this._context.fillStyle = color;
        this._context.fillRect(0, 0, this.width(), this.height());
      } else if (this._type === Sandpit.WEGBL) {
        _logger2.default.warn('fill() is currently only supported in 2D');
      }
    }

    /**
     * Returns a promise using fetch
     * https://github.com/github/fetch
     * @param {string} url - The url to fetch
     */

  }, {
    key: 'get',
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
          resolve(response.text());
        }).catch(function (error) {
          _logger2.default.info('Get fail', error);
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

      return (0, _seedrandom2.default)(seed);
    }

    /**
     * Resizes the canvas to the window width and height
     */

  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      this._canvas.width = window.innerWidth;
      this._canvas.height = window.innerHeight;
    }

    /**
     * Sets up resizing and input events and starts the loop
     */

  }, {
    key: 'start',
    value: function start() {
      // Sets up settings
      if (this.defaults && Object.keys(this.defaults).length) this._setupSettings();
      // Sets up the events
      this._setupEvents();
      // Sets up setup
      if (this.setup) this.setup();
      // Loop!
      if (!this.loop) _logger2.default.warn('Looks like you need to define a loop');
      this._setupLoop();
    }

    /**
     * Stops the loop and removes event listeners
     */

  }, {
    key: 'stop',
    value: function stop() {
      var _this3 = this;

      // Delete element, if initiated
      if (this.canvas()) {
        this.canvas().outerHTML = '';
        delete this.canvas();
      }
      // Remove Gui, if initiated
      if (this._gui) {
        this._gui.domElement.removeEventListener('touchmove', this._preventDefault);
        this._gui.destroy();
      }
      // Stop the animation frame loop
      window.cancelAnimationFrame(this._animationFrame);
      // Remove all event listeners
      Object.keys(this._events).forEach(function (event) {
        if (_this3._events[event].disable) {
          _this3._events[event].disable.removeEventListener(event, _this3._preventDefault);
        }
        _this3._events[event].context.removeEventListener(event, _this3._events[event].event.bind(_this3));
      });
    }
  }]);

  return Sandpit;
}();

// TODO: Look at handling retina displays

exports.is = _is2.default;
exports.math = _math2.default;
exports.color = _color2.default;
exports.default = Sandpit;
'use strict';

var _Sandpit = require('./Sandpit');

var _Sandpit2 = _interopRequireDefault(_Sandpit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('thinks Charlie is great', function () {
  expect(true);
}); /* global it, expect, describe */


describe('Sandpit', function () {
  it('should exist', function () {
    expect(_Sandpit2.default).toBe(_Sandpit2.default);
  });
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sandpit = require('../Sandpit');

var _Sandpit2 = _interopRequireDefault(_Sandpit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataAPI = 'https://randomuser.me/api/';

var playground = function playground() {
  var sandpit = new _Sandpit2.default(document.querySelector('#root'), _Sandpit2.default.CANVAS);
  sandpit.autoClear(false);
  sandpit.settings({
    demo: { value: 'data', editable: false, sticky: true }
  });
  var ctx = sandpit.context();

  var loading = true;
  sandpit.setup = function () {
    sandpit.get(dataAPI).then(function (response) {
      response = JSON.parse(response).results[0];
      var name = [response.name.first, response.name.last].map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }).join(' ');
      loading = false;
      sandpit.clear();
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.font = '48px sans-serif';
      ctx.fillText(name, sandpit.width() / 2, sandpit.height() / 2);
      ctx.font = '16px sans-serif';
      ctx.fillText('RANDOM NAME GENERATOR'.split('').join(String.fromCharCode(8202)), sandpit.width() / 2, sandpit.height() / 2 - 50);
    });
  };

  sandpit.loop = function () {
    if (loading) {
      ctx.beginPath();
      ctx.arc(sandpit.width() / 2 + Math.sin(sandpit.time() / Math.PI) * 15 - 1, sandpit.height() / 2 + Math.cos(sandpit.time() / Math.PI) * 15 - 1, 2, 0, 2 * Math.PI);
      ctx.fillStyle = '#000';
      ctx.fill();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fillRect(0, 0, sandpit.width(), sandpit.height());
    }
  };

  sandpit.start();

  // Keep the demo in the query string when resetting
  sandpit.reset = function () {
    // Keep the demo
    window.history.pushState({}, null, '/?demo=' + sandpit.settings.demo);
    // Reload the page
    window.location.reload();
  };

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit;
};

exports.default = playground;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multitouch = require('./multitouch');

var _multitouch2 = _interopRequireDefault(_multitouch);

var _particles = require('./particles');

var _particles2 = _interopRequireDefault(_particles);

var _threedee = require('./threedee');

var _threedee2 = _interopRequireDefault(_threedee);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  multitouch: _multitouch2.default,
  particles: _particles2.default,
  threedee: _threedee2.default,
  data: _data2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sandpit = require('../Sandpit');

var _Sandpit2 = _interopRequireDefault(_Sandpit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playground = function playground() {
  var existingCanvas = document.createElement('canvas');
  var root = document.querySelector('#root');
  root.appendChild(existingCanvas);

  var sandpit = new _Sandpit2.default(existingCanvas, _Sandpit2.default.CANVAS);
  sandpit.settings({
    demo: { value: 'multitouch', editable: false, sticky: true },
    autoClear: { value: false },
    maxSize: { value: 5, min: 5, max: 50, step: 1 },
    energy: { value: 0.9, min: 0.0, max: 0.9, step: 0.1 },
    force: { value: 2, min: 2, max: 30, step: 1 },
    decay: { value: 0.90, min: 0.85, max: 0.99, step: 0.01 },
    blend: { value: ['multiply', 'lighter', 'overlay'] }
  });
  sandpit.autoClear(sandpit.settings.autoClear);
  var random = sandpit.random();
  var ctx = sandpit.context();

  function Particle() {
    var _this = this;

    this.init = function (x, y, radius) {
      _this.alive = true;

      _this.radius = radius || 10;
      _this.wander = 0.15;
      _this.theta = random() * _Sandpit.math.TWO_PI;
      _this.drag = 0.92;
      _this.color = '#fff';

      _this.x = x || 0.0;
      _this.y = y || 0.0;

      _this.vx = 0.0;
      _this.vy = 0.0;
    };

    this.move = function () {
      _this.x += _this.vx;
      _this.y += _this.vy;

      _this.vx *= _this.drag;
      _this.vy *= _this.drag;

      _this.theta += _Sandpit.math.randomBetween(-0.5, 0.5) * _this.wander;
      _this.vx += Math.sin(_this.theta) * 0.1;
      _this.vy += Math.cos(_this.theta) * 0.1;

      _this.radius *= sandpit.settings.decay;
      _this.alive = _this.radius > 0.5;
    };

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(_this.x, _this.y, _this.radius, 0, _Sandpit.math.TWO_PI);
      ctx.fillStyle = _this.color;
      ctx.fill();
    };
  }

  var MAX_PARTICLES = 280;
  var COLOURS = ['hsl(0, 100%, 100%)', 'hsl(175, 100%, 45%)', 'hsl(185, 69%, 63%)', 'hsl(39, 100%, 54%)', 'hsl(333, 100%, 68%)', 'hsl(84, 100%, 68%)', 'hsl(270, 100%, 80%)'];

  var particles = [];
  var pool = [];

  var spawn = function spawn(x, y) {
    var pressure = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (particles.length >= MAX_PARTICLES) {
      pool.push(particles.shift());
    }

    var particle = pool.length ? pool.pop() : new Particle();
    var size = _Sandpit.math.randomBetween(2, sandpit.settings.maxSize);
    size *= pressure * 2 + 1;
    particle.init(x, y, size);

    particle.wander = _Sandpit.math.randomBetween(0.5, 2.0);
    particle.color = _Sandpit.math.randomFrom(COLOURS);
    particle.drag = _Sandpit.math.randomBetween(sandpit.settings.energy, 0.99);

    var theta = random() * _Sandpit.math.TWO_PI;
    var force = _Sandpit.math.randomBetween(2, sandpit.settings.force);

    particle.vx = Math.sin(theta) * force;
    particle.vy = Math.cos(theta) * force;

    particles.push(particle);
  };

  sandpit.setup = function () {
    var _loop = function _loop(i) {
      var x = sandpit.width() / 2 + Math.sin(i / Math.PI / 5) * 100;
      var y = sandpit.height() / 2 + Math.cos(i / Math.PI / 5) * 100;
      window.setTimeout(function () {
        spawn(x, y);
      }, i * 10);
    };

    for (var i = 0; i < 100; i++) {
      _loop(i);
    }
  };

  sandpit.loop = function () {
    ctx.globalCompositeOperation = sandpit.settings.blend;
    sandpit.autoClear(sandpit.settings.autoClear);
    for (var i = particles.length - 1; i >= 0; i--) {
      var particle = particles[i];
      if (particle.alive) {
        particle.move();
        particle.draw();
      } else {
        pool.push(particles.splice(i, 1)[0]);
      }
    }
  };

  sandpit.move = function () {
    for (var i = 0; i < sandpit.input.touches.length; i++) {
      var touch = sandpit.input.touches[i];
      var max = _Sandpit.math.randomBetween(1, 4);
      for (var j = 0; j < max; j++) {
        spawn(touch.x, touch.y, touch.force);
      }
    }
  };

  sandpit.start();

  // Keep the demo in the query string when resetting
  sandpit.reset = function () {
    // Keep the demo
    window.history.pushState({}, null, '/?demo=' + sandpit.settings.demo);
    // Reload the page
    window.location.reload();
  };

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit;
}; /*
    * Credit for this playground goes to Sketch.js, which is
    * wild and you should totally check it out:
    * https://github.com/soulwire/sketch.js
    */

exports.default = playground;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sandpit = require('../Sandpit');

var _Sandpit2 = _interopRequireDefault(_Sandpit);

var _vector = require('../utils/vector');

var _vector2 = _interopRequireDefault(_vector);

var _color = require('../utils/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sandpit = void 0;
var playground = function playground() {
  sandpit = new _Sandpit2.default(document.querySelector('#root'), _Sandpit2.default.CANVAS);
  sandpit.settings({
    demo: { value: 'particles', editable: false, sticky: true },
    follow: { value: true },
    gravity: { value: 2, step: 0.1, min: 0.1, max: 5 },
    count: { value: 50, step: 1, min: 1, max: 500 },
    size: { value: 20, step: 1, min: 1, max: 50 },
    color: { value: '#000', color: true },
    strokeWidth: { value: 1, min: 1, max: 10, step: 1 },
    background: { value: { white: 'hsl(0, 100%, 100%)', aqua: 'hsl(175, 100%, 45%)', blue: 'hsl(185, 69%, 63%)', orange: 'hsl(39, 100%, 54%)', pink: 'hsl(333, 100%, 68%)', green: 'hsl(84, 100%, 68%)', violet: 'hsl(270, 100%, 80%)' } },
    keepDrawing: { value: false }
  }, true);

  var ctx = sandpit.context();
  var random = sandpit.random('Hello!');
  var pull = 1;

  function Particle() {
    var shadowBlur = Math.ceil(random() * 3);
    var strokeWidth = sandpit.settings.strokeWidth;
    var strokeStyle = (0, _color2.default)(sandpit.settings.color).alpha(random() * 0.5).toString();

    var initX = random() * sandpit.width();
    var initY = random() * sandpit.height();
    var position = new _vector2.default(initX, initY);
    var velocity = new _vector2.default(0, 0);
    var acceleration = new _vector2.default(0, 0);
    var attraction = new _vector2.default(0, 0);
    var previousPositions = [];

    this.update = function () {
      var force = new _vector2.default(Math.cos(random() * Math.PI * 2), Math.sin(random() * Math.PI * 2));
      acceleration.add(new _vector2.default(1 + random() * 0.9, 1 + random() * 0.9).multiply(force));

      var dx = position.x - sandpit.width() / 2;
      var dy = position.y - sandpit.height() / 2;
      var fSpring = new _vector2.default(dx, dy).multiplyScalar(-1 / (Math.min(sandpit.width(), sandpit.height()) * (sandpit.defaults.gravity.max - sandpit.settings.gravity + 0.1)));
      acceleration.add(fSpring);

      if (sandpit.settings.follow) {
        if (sandpit.input.x && sandpit.input.y) {
          var mx = sandpit.input.x - position.x;
          var my = sandpit.input.y - position.y;
          var distance = Math.sqrt(mx * mx + my * my);
          attraction.add(new _vector2.default(mx / distance, my / distance).multiplyScalar(pull));
        }
      }

      velocity.add(acceleration);
      velocity.add(attraction);
      velocity.limit(10, 0.9);
      position.add(velocity);
      acceleration.multiply(new _vector2.default(0, 0));
      attraction.multiply(new _vector2.default(0, 0));

      ctx.beginPath();
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowColor = sandpit.settings.color;
      if (previousPositions.length > 1) {
        var first = previousPositions[0],
            rest = previousPositions.slice(1);

        ctx.moveTo(first.x, first.y);
        rest.forEach(function (p) {
          return ctx.lineTo(p.x, p.y);
        });
        ctx.lineTo(position.x, position.y);
        if (previousPositions.length >= sandpit.settings.size && !sandpit.settings.keepDrawing) previousPositions.shift();
      }

      previousPositions.push(position.clone());
      ctx.stroke();
    };
  }

  var particles = [];

  sandpit.change = function () {
    particles = Array(Math.round(sandpit.settings.count)).fill().map(function () {
      return new Particle();
    });
  };

  sandpit.loop = function () {
    sandpit.fill(sandpit.settings.background);
    particles.forEach(function (particle) {
      return particle.update();
    });
  };

  sandpit.touch = function () {
    pull = 3;
  };

  sandpit.release = function () {
    pull = 1;
  };

  sandpit.start();
  sandpit.change();

  // Keep the demo in the query string when resetting
  sandpit.reset = function () {
    // Keep the demo
    window.history.pushState({}, null, '/?demo=' + sandpit.settings.demo);
    // Reload the page
    window.location.reload();
  };

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit;
};

exports.default = playground;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sandpit = require('../Sandpit');

var _Sandpit2 = _interopRequireDefault(_Sandpit);

var _three = require('three');

var _threeTrackballcontrols = require('three-trackballcontrols');

var _threeTrackballcontrols2 = _interopRequireDefault(_threeTrackballcontrols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playground = function playground() {
  var sandpit = new _Sandpit2.default(document.querySelector('#root'), _Sandpit2.default.WEBGL);
  sandpit.settings({
    demo: { value: 'threedee', editable: false, sticky: true },
    scale: { value: 1, step: 1, min: 1, max: 10 }
  }, true);

  var renderer = new _three.WebGLRenderer({ canvas: sandpit.canvas(), antialias: true });
  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(sandpit.width(), sandpit.height());

  var camera = new _three.PerspectiveCamera(35, sandpit.width() / sandpit.height(), 1, 10000);
  camera.position.z = 50;

  var scene = new _three.Scene();
  scene.add(camera);

  var controls = new _threeTrackballcontrols2.default(camera, renderer.domElement);

  var cube = new _three.Mesh(new _three.BoxGeometry(10, 10, 10), new _three.MeshBasicMaterial({ wireframe: true, color: 0x000000 }));
  scene.add(cube);

  sandpit.change = function () {
    cube.scale.set(sandpit.settings.scale, sandpit.settings.scale, sandpit.settings.scale);
  };

  sandpit.loop = function () {
    if (cube) {
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
      cube.rotation.z += 0.001;
    }

    controls.update();
    renderer.render(scene, camera);
  };

  sandpit.resize = function () {
    sandpit.resizeCanvas();
    camera.aspect = sandpit.width() / sandpit.height();
    camera.updateProjectionMatrix();
    renderer.setSize(sandpit.width(), sandpit.height());
  };

  sandpit.start();
  sandpit.change();

  // Keep the demo in the query string when resetting
  sandpit.reset = function () {
    // Keep the demo
    window.history.pushState({}, null, '/?demo=' + sandpit.settings.demo);
    // Reload the page
    window.location.reload();
  };

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit;
};

exports.default = playground;
'use strict';

var _queryfetch = require('queryfetch');

var _queryfetch2 = _interopRequireDefault(_queryfetch);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demos = require('./demos/index').default;

var playground = void 0;
var div = document.createElement('div');
div.classList.add('demos');

Object.keys(demos).forEach(function (demo) {
  var link = document.createElement('a');
  link.appendChild(document.createTextNode(demo));
  link.addEventListener('mousedown', function (event) {
    if (playground) playground.sandpit.stop();
    playground = new demos[event.currentTarget.textContent]();
  });
  div.appendChild(link);
});

var params = _queryfetch2.default.parse(window.location.search);
playground = params.demo ? new demos[params.demo]() : new demos[Object.keys(demos)[0]]();

var content = document.querySelector('.content');
content.appendChild(div);
if (window.innerHeight < content.offsetHeight) {
  content.style.height = content.offsetHeight + 'px';
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _color2.default; /**
                                    * A utility for editing colors
                                    * https://github.com/Qix-/color
                                    */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A utility for testing the type of a reference
 */
var is = function () {
  function is() {
    _classCallCheck(this, is);
  }

  _createClass(is, null, [{
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
     * Tests if the object is an object
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is an object
     */

  }, {
    key: 'object',
    value: function object(_object) {
      return (typeof _object === 'undefined' ? 'undefined' : _typeof(_object)) === 'object';
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

  return is;
}();

exports.default = is;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = logger;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A utility for math stuff
 * @noconstructor
 */
var math = function () {
  function math() {
    _classCallCheck(this, math);
  }

  _createClass(math, null, [{
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

      if (_is2.default.array(object)) {
        return object[Math.floor(random() * object.length)];
      } else if (_is2.default.object(object)) {
        return object[Math.floor(random() * Object.keys(object).length)];
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

  return math;
}();

exports.default = math;
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
};

_victor2.default.prototype.addLength = function (scalar) {
  return this.setLength(this.length() + scalar);
};

exports.default = _victor2.default;
