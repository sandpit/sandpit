'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        throw new Error('Please provide a string or object reference to the container, like ".container", or ');
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
        this._canvas = document.createElement('canvas');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        _container.appendChild(this._canvas);
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
      this.settings = {};
      this._gui = new _dat2.default.GUI();

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
                  _this.defaults[key].value = param;
                } else {
                  // If the param is an object, store the
                  // name in a selected property
                  _this.defaults[key].selected = param;
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

        // Handle the change event
        guiField.onChange((0, _debounce2.default)(function (value) {
          _this._change(name, value);
        }), 300);
      });
      // Open the settings drawer
      group.open();

      // If queryable is enabled, serialize the final settings
      // and push them to the query string
      if (this._queryable) {
        var query = _queryfetch2.default.serialize(this.settings);
        window.history.pushState({}, null, '/?' + query);
        // Adds a reset button to the gui interface
        this._gui.add({ reset: function reset() {
            window.history.pushState({}, null, '/');
            window.location.reload();
          } }, 'reset');
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
          // TODO: Implement auto clear for WebGL instances
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
        // TODO: Use context instead of document
        document.addEventListener(event, _this2._events[event].bind(_this2), false);
      });
    }

    /**
     * Sets up the resize event, optionally using a user defined option
     * @private
     */

  }, {
    key: '_setupResize',
    value: function _setupResize() {
      var _this3 = this;

      // TODO: Fix context here: this_events['trigger'] = {event: event, context: context}?
      if (this.resize) {
        this._resizeEvent = this.resize;
      } else {
        this._resizeEvent = function () {
          _this3._canvas.width = window.innerWidth;
          _this3._canvas.height = window.innerHeight;
        };
      }
      this._events['resize'] = this._resizeEvent;
    }

    /**
     * Hooks up the mouse events
     * @private
     */

  }, {
    key: '_setupMouse',
    value: function _setupMouse() {
      this._events['mousemove'] = this._handleMouseMove;
      this._events['mousedown'] = this._handleMouseDown;
      this._events['mouseenter'] = this._handleMouseEnter;
      this._events['mouseleave'] = this._handleMouseLeave;
      this._events['mouseup'] = this._handleMouseUp;
    }

    /**
     * Hooks up the touch events
     * @private
     */

  }, {
    key: '_setupTouches',
    value: function _setupTouches() {
      this._events['touchmove'] = this._handleTouchMove;
      this._events['touchstart'] = this._handleTouchStart;
      this._events['touchend'] = this._handleTouchEnd;
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
          this._events['deviceorientation'] = this._handleAccelerometer;
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
      this.input.x = event.pageX;
      this.input.y = event.pageY;
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
      this.input.x = event.pageX;
      this.input.y = event.pageY;
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
      delete this.input.x;
      delete this.input.y;
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
      this.input.x = event.pageX;
      this.input.y = event.pageY;
      if (this.release) this.release(event);
    }

    /**
     * Handles the mouseleave event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      delete this.input.x;
      delete this.input.y;
      if (this.release) this.release(event);
    }

    /**
     * Handles the touchmove event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(event) {
      this.input.x = event.pageX;
      this.input.y = event.pageY;
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
      // TODO: Handle multiple touches
      this.input.x = event.pageX;
      this.input.y = event.pageY;
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
      delete this.input.x;
      delete this.input.y;
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
      // TODO: Manage the accelerometer event
      if (this.accelerometer) this.accelerometer(event);
    }

    /**
     * Creates the settings GUI
     * @param {object} settings - An object containing key value pairs for each setting
     * @param {boolean} queryable - Enables query string storage of settings
     * @return {object} Context
     */

  }, {
    key: 'settings',
    value: function settings(_settings, queryable) {
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
        // TODO: Implement clear for WebGL instances
      }
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
        // TODO: Implement fill background for WebGL instances
      }
    }

    /**
     * Returns a random number generator based on a seed
     * @param {string} seed - The seed with which to create the random number
     * @returns {function} A function that returns a random number
     */

  }, {
    key: 'random',
    value: function random(seed) {
      return (0, _seedrandom2.default)(seed);
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
      var _this4 = this;

      if (this._gui) this._gui.destroy();
      // Stop the animation frame loop
      window.cancelAnimationFrame(this._animationFrame);
      // Remove all event listeners
      Object.keys(this._events).forEach(function (event) {
        document.removeEventListener(event, _this4._events[event]);
      });
    }
  }]);

  return Sandpit;
}();

exports.default = Sandpit;
'use strict';

/* global it, expect */

it('thinks Charlie is great', function () {
  expect(true);
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _particles = require('./particles');

var _particles2 = _interopRequireDefault(_particles);

var _threedee = require('./threedee');

var _threedee2 = _interopRequireDefault(_threedee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  particles: _particles2.default,
  threedee: _threedee2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sandpit = require('../Sandpit');

var _Sandpit2 = _interopRequireDefault(_Sandpit);

var _vector = require('../utils/vector');

var _vector2 = _interopRequireDefault(_vector);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sandpit = void 0;
var playground = function playground() {
  sandpit = new _Sandpit2.default(document.querySelector('#root'), _Sandpit2.default.CANVAS);
  sandpit.settings({
    follow: { value: false },
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

  function Particle(i) {
    var _this = this;

    this.count = i;
    var shadowBlur = Math.ceil(random() * 3);
    var strokeWidth = sandpit.settings.strokeWidth;
    var strokeStyle = (0, _color2.default)(sandpit.settings.color).alpha(random() * 0.5);

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

      if (sandpit.settings.follow && _this.count % 1 === 0) {
        if (sandpit.input.x && sandpit.input.y) {
          var mx = sandpit.input.x - position.x;
          var my = sandpit.input.y - position.y;
          var distance = Math.sqrt(mx * mx + my * my);
          attraction.add(new _vector2.default(mx / distance, my / distance).multiplyScalar(1));
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

  var i = 0;
  sandpit.change = function () {
    particles = Array(Math.round(sandpit.settings.count)).fill().map(function () {
      return new Particle(i++);
    });
  };

  sandpit.loop = function () {
    sandpit.fill(sandpit.settings.background);
    particles.forEach(function (particle) {
      return particle.update();
    });
  };

  // TODO: Add click event for sucking particles in
  sandpit.start();
  sandpit.change();

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
  sandpit.settings({}, true);

  var renderer = new _three.WebGLRenderer({ canvas: sandpit.canvas(), antialias: true });
  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(sandpit.width(), sandpit.height());

  var camera = new _three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 50;

  var scene = new _three.Scene();
  scene.add(camera);

  var cube = new _three.Mesh(new _three.BoxGeometry(10, 10, 10), new _three.MeshBasicMaterial({ wireframe: true, color: 0x000000 }));
  scene.add(cube);

  var controls = new _threeTrackballcontrols2.default(camera, renderer.domElement);

  sandpit.loop = function () {
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    cube.rotation.z += 0.001;

    controls.update();
    renderer.render(scene, camera);
  };

  sandpit.start();

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit;
};

exports.default = playground;
'use strict';

require('./index.css');

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

document.querySelector('.overlay').appendChild(div);
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
