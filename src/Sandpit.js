import dat from 'dat.gui/build/dat.gui'
import queryString from 'query-string'
import debounce from 'debounce'
import seedrandom from 'seedrandom'

import logger from './utils/logger'
import Color from './utils/Color'
import Is from './utils/Is'
import Mathematics from './utils/Mathematics'
import Stats from './utils/Stats'
import Vector from './utils/Vector'

import GyroNorm from 'gyronorm'
import 'whatwg-fetch' /* global fetch */

/**
 * A playground for creative coding
 */
class Sandpit {
  static get CANVAS () { return '2d' }
  static get WEBGL () { return 'webgl' }
  static get EXPERIMENTAL_WEBGL () { return 'experimental-webgl' }

  /**
   * @param {(string|object)} container - The container for the canvas to be added to
   * @param {string} type - Defines whether the context is 2d or 3d
   * @param {object} options - Optionally decide to ignore rescaling for retina displays,
   * disable putting settings into the query string, or add stats to the dom
   */
  constructor (container, type, options) {
    logger.info('⛱ Welcome to Sandpit')
    this._queryable = options && options.hasOwnProperty('queryable') ? options.queryable : true
    this._retina = options && options.hasOwnProperty('retina') ? options.retina : true
    this._stats = options && options.hasOwnProperty('stats') ? options.stats : false
    this._setupContext(container, type, this._retina)
  }

  /**
   * Set up the canvas
   * @private
   */
  _setupContext (container, type, retina) {
    // Check that the correct container type has been passed
    if (typeof container !== 'string' && typeof container !== 'object') {
      throw new Error('Please provide a string or object reference to the container, like ".container", or document.querySelector(".container")')
    }
    // Check that the type is set
    if (typeof type !== 'string' || (type !== Sandpit.CANVAS && type !== Sandpit.WEBGL)) {
      throw new Error('Please provide a context type - either `Sandpit.CANVAS` or `Sandpit.WEBGL`')
    }

    // Either find the container, or just use the object
    let _container
    if (typeof container === 'string') {
      _container = document.querySelector(container)
    } else if (typeof container === 'object') {
      _container = container
    }

    // Check the container is a dom element
    if (Is.element(_container)) {
      // Check the container is a canvas element
      // and if so, use it instead of making a new one
      if (Is.canvas(_container)) {
        this._canvas = _container
      } else {
        this._canvas = document.createElement('canvas')
        _container.appendChild(this._canvas)
      }
      // Set the width and height
      this._canvas.width = this._canvas.clientWidth
      this._canvas.height = this._canvas.clientHeight
      // Grab the context
      if (type === Sandpit.CANVAS) {
        this._context = this._canvas.getContext(type)
      } else if (type === Sandpit.WEBGL || type === Sandpit.EXPERIMENTAL_WEBGL) {
        this._context = this._canvas.getContext(Sandpit.WEBGL) || this._canvas.getContext(Sandpit.EXPERIMENTAL_WEBGL)
      }
      this._type = type

      // Deal with retina displays
      if (type === Sandpit.CANVAS && window.devicePixelRatio !== 1 && this._retina) {
        this._handleRetina()
      }

      // Sets up stats, if they are enabled
      if (this._stats) this.setupStats()
    } else {
      throw new Error('The container is not a HTMLElement')
    }
  }

  /**
   *  Resizes the canvas for retina
   *  @private
   */
  _handleRetina () {
    const ratio = window.devicePixelRatio
    // Increaser the canvas by the ratio
    this._canvas.width = this._canvas.clientWidth * ratio
    this._canvas.height = this._canvas.clientHeight * ratio
    // Scale the canvas to the new ratio
    this._context.scale(ratio, ratio)
  }

  /**
   * Sets up the settings gui via dat.gui
   * @param {object} settings - An object of key value pairs
   * for the setting name and default value
   * @param {boolean} queryable - Whether or not to store settings
   * in the query string for easy sharing
   * @private
   */
  _setupSettings () {
    this._settings = {}
    this._clearGui = true
    this._resetGui = true
    // Destroy the gui if new settings are being passed in
    if (this._gui) {
      this._gui.domElement.removeEventListener('touchmove', this._preventDefault)
      this._gui.destroy()
    }
    this._gui = new dat.GUI()
    this._gui.domElement.addEventListener('touchmove', this._preventDefault, false)

    // If queryable is true, set up the query string management
    // for storing settings
    if (this._queryable) {
      if (window.location.search) {
        let params = queryString.parse(window.location.search)
        Object.keys(params).forEach((key) => {
          // Check if the param is a float, and if so, parse it
          if (parseFloat(params[key])) {
            params[key] = parseFloat(params[key])
          }
          // If a setting matches the param, use the param
          if (this.defaults[key]) {
            let param = params[key]
            // Convert string to boolean if 'true' or 'false'
            if (param === 'true') param = true
            if (param === 'false') param = false
            if (typeof this.defaults[key].value !== 'object') {
              // If sticky is true, stick with the default setting
              // otherwise set the default to the param
              if (!this.defaults[key].sticky) {
                this.defaults[key].value = param
              }
            } else {
              // If the param is an object, store the
              // name in a selected property
              if (!this.defaults[key].sticky) {
                this.defaults[key].selected = param
              } else {
                // If sticky is true, force the default setting
                this.defaults[key].selected = this.defaults[key].value[Object.keys(this.defaults[key].value)[0]]
              }
            }
          }
        })
      }
    }

    // Create settings folder and add each item to it
    const group = this._gui.addFolder('Settings')
    Object.keys(this.defaults).forEach(name => {
      let options = false
      let value = this.defaults[name].value

      if (value || typeof this.defaults[name] === 'object') {
        // If it's an object, supply the array or object,
        // and grab the right value
        if (typeof value === 'object') {
          options = value
          // If a selected option is available via the query
          // string, use that
          if (this.defaults[name].selected) {
            this._settings[name] = this.defaults[name].selected
          } else {
            // If not, grab the first item in the object or array
            this._settings[name] = Is.array(value)
            ? value[0]
            : value[Object.keys(value)[0]]
          }
        } else {
          // If it's not an object, pass the setting on
          this._settings[name] = this.defaults[name].value
        }

        // If it's a colour, use a different method
        let guiField = this.defaults[name].color
        ? group.addColor(this._settings, name)
        : group.add(this._settings, name, options)

        // Check for min, max and step, and add to the gui field
        if (this.defaults[name].min !== undefined) guiField = guiField.min(this.defaults[name].min)
        if (this.defaults[name].max !== undefined) guiField = guiField.max(this.defaults[name].max)
        if (this.defaults[name].step !== undefined) guiField = guiField.step(this.defaults[name].step)
        if (this.defaults[name].editable === false) {
          guiField.domElement.style.pointerEvents = 'none'
          guiField.domElement.style.opacity = 0.5
        }

        // Handle the change event
        guiField.onChange(debounce((value) => {
          this._change(name, value)
        }), 300)
      } else {
        // Handle properties that aren't tied to value -
        // usually settings that relate to the gui itself
        switch (name) {
          case 'clear':
            this._clearGui = this.defaults[name]
            break
          case 'reset':
            this._resetGui = this.defaults[name]
            break
          default:
            break
        }
      }
    })
    // Open the settings drawer
    group.open()

    // Hide controls for mobile
    if (this.width <= 767) {
      this._gui.close()
    }

    // If queryable is enabled, serialize the final settings
    // and push them to the query string
    if (this._queryable) {
      const query = queryString.stringify(this._settings)
      window.history.replaceState({}, null, `${this._getPathFromUrl()}?${query}`)
      // Adds a clear and reset button to the gui interface,
      // if they aren't disabled in the settings
      if (this._clearGui) this._gui.add({clear: () => { this.clear() }}, 'clear')
      if (this._resetGui) this._gui.add({reset: () => { this._reset() }}, 'reset')
    }
  }

  /**
   * Resets the settings in the query string, and offers a hook
   * to do something more fancy with sandpit.reset
   * @private
   */
  _reset () {
    if (this._queryable || this.reset) {
      if (this.reset) {
        // If there's a reset method available, run that
        this.reset()
      } else {
        // If queryable, clear the query string
        window.history.replaceState({}, null, this._getPathFromUrl())
        // Reload the video
        window.location.reload()
      }
    }
  }

  /**vst
  
   * Handles a changed setting
   * @param {string} name - Setting name
   * @param {*} value - The new setting value
   * @private
   */
  _change (name, value) {
    logger.info(`Update fired on ${name}: ${value}`)
    if (this._queryable) {
      const query = queryString.stringify(this._settings)
      window.history.pushState({}, null, `${this._getPathFromUrl()}?${query}`)
    }
    // If there is a change hook, use it
    if (this.change) {
      this.change(name, value)
    }
  }

  /**
   * Sets up the primary animation loop
   * @private
   */
  _setupLoop () {
    this._time = 0
    this._loop()
  }

  /**
   * The primary animation loop
   * @private
   */
  _loop () {
    // Start stat recording for this frame
    if (this.stats) this.stats.begin()
    // Clear the canvas if autoclear is set
    if (this._autoClear) this.clear()
    // Loop!
    if (this.loop) this.loop()
    // Increment time
    this._time++
    // End stat recording for this frame
    if (this.stats) this.stats.end()
    this._animationFrame = window.requestAnimationFrame(this._loop.bind(this))
  }

  /**
   * Sets up event management
   * @private
   */
  _setupEvents () {
    this._events = {}
    this._setupResize()
    this._setupInput()

    // Loop through and add event listeners
    Object.keys(this._events).forEach(event => {
      if (this._events[event].disable) {
        // If the disable property exists, add prevent default to it
        this._events[event].disable.addEventListener(event, this._preventDefault, false)
      }
      this._events[event].context.addEventListener(event, this._events[event].event.bind(this), false)
    })
  }

  /**
   * Sets up the resize event, optionally using a user defined option
   * @private
   */
  _setupResize () {
    this._resizeEvent = this.resize ? this.resize : this.resizeCanvas
    this._events['resize'] = {event: this._resizeEvent, context: window}
  }

  /**
   * Hooks up the mouse events
   * @private
   */
  _setupMouse () {
    this._events['mousemove'] = {event: this._handleMouseMove, context: document}
    this._events['mousedown'] = {event: this._handleMouseDown, context: document}
    this._events['mouseenter'] = {event: this._handleMouseEnter, context: document}
    this._events['mouseleave'] = {event: this._handleMouseLeave, context: document}
    this._events['mouseup'] = {event: this._handleMouseUp, context: document}
  }

  /**
   * Hooks up the touch events
   * @private
   */
  _setupTouches () {
    const body = document.querySelector('body')
    this._events['touchmove'] = {event: this._handleTouchMove, disable: document, context: body}
    this._events['touchstart'] = {event: this._handleTouchStart, disable: document, context: body}
    this._events['touchend'] = {event: this._handleTouchEnd, disable: document, context: body}
  }

  /**
   * Stops an event bubbling up
   * @private
   */
  _stopPropagation (event) {
    event.stopPropagation()
  }

  /**
   * Stops an event firing its default behaviour
   * @private
   */
  _preventDefault (event) {
    event.preventDefault()
  }

  /**
   * Hooks up the accelerometer events
   * @private
   */
  _setupAccelerometer () {
    this._gyroscope = new GyroNorm()
    this._gyroscope.init().then(() => {
      this._gyroscope.start(this._handleAccelerometer.bind(this))
    }).catch((e) => {
      logger.warn('Accelerometer is not supported by this device')
    })
  }

  /**
   * Defines the input object and sets up the mouse, accelerometer and touches
   * @param {event} event
   * @private
   */
  _setupInput () {
    this.input = {}
    this._setupMouse()
    this._setupTouches()
    this._setupAccelerometer()
  }

  /**
   * Handles the mousemove event
   * @param {event} event
   * @private
   */
  _handleMouseMove (event) {
    event.touches = {}
    event.touches[0] = event
    this._handleTouches(event)
    if (this.move) this.move(event)
  }

  /**
   * Handles the mousedown event
   * @param {event} event
   * @private
   */
  _handleMouseDown (event) {
    event.touches = {}
    event.touches[0] = event
    this._handleTouches(event)
    if (this.touch) this.touch(event)
  }

  /**
   * Handles the mouseup event
   * @param {event} event
   * @private
   */
  _handleMouseUp (event) {
    this._handleRelease()
    if (this.release) this.release(event)
  }

  /**
   * Handles the mouseenter event
   * @param {event} event
   * @private
   */
  _handleMouseEnter (event) {
    this.input.inFrame = true
  }

  /**
   * Handles the mouseleave event
   * @param {event} event
   * @private
   */
  _handleMouseLeave (event) {
    this.input.inFrame = false
  }

  /**
   * Handles the touchmove event
   * @param {event} event
   * @private
   */
  _handleTouchMove (event) {
    // So, event.preventDefault() seems required to prevent pinching,
    // but sometimes pinches still rarely happen (3 - 5 fingers), so
    // is there a way to avoid this? Currently added a
    // focusTouchesOnCanvas() method to blow away all other
    // touch events, for use outside the demo environment,
    // but this isn't really a viable solution. If possible,
    // I'd use the bit below, but I've commented it out for now:
    // this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation()
    event.preventDefault()
    this._handleTouches(event)
    if (this.move) this.move(event)
  }

  /**
   * Handles the touchstart event
   * @param {event} event
   * @private
   */
  _handleTouchStart (event) {
    this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation()
    this._handleTouches(event)
    if (this.touch) this.touch(event)
  }

  /**
   * Handles the touchend event
   * @param {event} event
   * @private
   */
  _handleTouchEnd (event) {
    this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation()
    this._handleTouches(event)
    if (this.release) this.release(event)
  }

  /**
   * Handles the accelerometer event, using the
   * GyroNorm.js library
   * @param {event} event
   * @private
   */
  _handleAccelerometer (data) {
    this.input.accelerometer = data
    // Apply some helpers to more easily
    // access x, y and rotation
    this.input.accelerometer.xAxis = data.do.beta
    this.input.accelerometer.yAxis = data.do.gamma
    this.input.accelerometer.rotation = data.do.alpha
    this.input.accelerometer.gamma = data.do.gamma
    this.input.accelerometer.beta = data.do.beta
    this.input.accelerometer.alpha = data.do.alpha
    // Fire the accelerometer event, if available
    if (this.accelerometer) this.accelerometer()
  }

  /**
   * Handles a set of touches
   * @param {object} touches - An object containing touch information, in
   * the format {0: TouchItem, 1: TouchItem}
   * @private
   */
  _handleTouches (event) {
    // Delete the length parameter from touches,
    // so we can loop through it
    delete event.touches.length
    if (Object.keys(event.touches).length) {
      let touches = Object.keys(event.touches).map((key, i) => {
        // Set the X & Y for input from the first touch
        if (i === 0) {
          this.input.x = event.touches[key].pageX
          this.input.y = event.touches[key].pageY
        }

        let touch = {}
        // If there is previous touch, store it as a helper
        if (this.input.touches && this.input.touches[key]) {
          touch.previousX = this.input.touches[key].x
          touch.previousY = this.input.touches[key].y
        }
        // Store the x and y
        touch.x = event.touches[key].pageX
        touch.y = event.touches[key].pageY
        // If force is available, add it
        if (event.touches[key].force) touch.force = event.touches[key].force
        return touch
      })
      // Update the touches
      this.input.touches = touches
    } else {
      this._handleRelease()
    }
  }

  /**
   * Deletes the appropriate data from inputs on release
   * @param {object} pointer - An object containing pointer information,
   * in the format of {pageX: x, pageY: y}
   * @private
   */
  _handleRelease () {
    delete this.input.x
    delete this.input.y
    delete this.input.touches
  }

  /**
   * Creates the settings GUI
   * @param {object} settings - An object containing key value pairs for each setting
   * @param {boolean} queryable - Enables query string storage of settings
   * @return {object} Context
   */
  set settings (settings) {
    // Sets up settings
    if (settings && Object.keys(settings).length) {
      this.defaults = settings
      this._setupSettings()
    }
  }

  /**
   * Returns the settings object
   * @return {object} settings
   */
  get settings () {
    return this._settings
  }

  /**
   * Defines whether or not to return debugger messages from Sandpit
   * @param {boolean} boolean
   * @return {object} Context
   */
  set debug (boolean) {
    logger.active = boolean
  }

  /**
   * Checks if debugger is active
   * @return {boolean} active
   */
  get debug () {
    return logger.active
  }

  /**
   * Sets whether the canvas autoclears after each render
   * @param {boolean} boolean
   */
  set autoClear (boolean) {
    this._autoClear = boolean
  }

  /**
   * Checks if autoclear is on
   * @return {boolean} active
   */
  get autoClear () {
    return this._autoClear
  }

  /**
   * Clears the canvas, and if change is set,
   * fires change
   * @param {boolean} boolean
   */
  clear () {
    if (this._type === Sandpit.CANVAS) {
      this._context.clearRect(0, 0, this.width, this.height)
    } else if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
      this._context.clearColor(0, 0, 0, 0)
      this._context.clear(this._context.COLOR_BUFFER_BIT | this._context.DEPTH_BUFFER_BIT)
    }
    if (this.change) this.change()
  }

  /**
   * Grab the current path from the url
   * @private
   */
  _getPathFromUrl () {
    return window.location.toString().split(/[?#]/)[0]
  }

  /**
   * Clear the query string
   */
  clearQueryString () {
    window.history.replaceState({}, null, this._getPathFromUrl())
  }

  /**
   * Sets whether to or not to ignore the touch events for
   * multitouch, bypassing pinch to zoom, but meaning no
   * other touch events will work
   * @param {boolean} boolean
   */
  set focusTouchesOnCanvas (boolean) {
    this._focusTouchesOnCanvas = boolean
  }

  /**
   * Checks if touches are focused on the canvas
   * @return {boolean} active
   */
  get focusTouchesOnCanvas () {
    return this._focusTouchesOnCanvas
  }

  /**
   * Returns the canvas context
   * @return {object} Context
   */
  get context () {
    return this._context
  }

  /**
   * Returns the canvas object
   * @return {canvas} Canvas
   */
  get canvas () {
    return this._canvas
  }

  /**
   * Returns the frame increment
   * @returns {number} Canvas width
   */
  get time () {
    return this._time
  }

  /**
   * Returns the canvas width
   * @returns {number} Canvas width
   */
  get width () {
    return this._canvas.clientWidth
  }

  /**
   * Sets the canvas width
   * @param {number} width - The width to make the canvas
   */
  set width (width) {
    this._canvas.width = width
  }

  /**
   * Returns the canvas height
   * @returns {number} Canvas height
   */
  get height () {
    return this._canvas.clientHeight
  }

  /**
   * Sets the canvas height
   * @param {number} height - The height to make the canvas
   */
  set height (height) {
    this._canvas.height = height
  }

  /**
   * Fills the canvas with the provided colour
   * @param {string} color - The color to fill with, in string format
   * (for example, '#000', 'rgba(0, 0, 0, 0.5)')
   */
  fill (color) {
    this._fill = color
    if (this._type === Sandpit.CANVAS) {
      this._context.fillStyle = this._fill
      this._context.fillRect(0, 0, this.width, this.height)
    } else if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
      // TODO: Use fill to update the clearColor of a 3D canvas
      logger.warn('fill() is currently only supported in 2D')
    }
  }

  /**
   * Returns a promise using fetch
   * https://github.com/github/fetch
   * @param {string} url - The url to fetch
   */
  get (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          resolve(response.text())
        }).catch((error) => {
          logger.info('Get fail', error)
          reject()
        })
    })
  }

  /**
   * Returns a random number generator based on a seed
   * @param {string} seed - The seed with which to create the random number
   * @returns {function} A function that returns a random number
   */
  random (seed = '123456') {
    return seedrandom(seed)
  }

  /**
   * Resizes the canvas to the window width and height
   */
  resizeCanvas () {
    if (this._type === Sandpit.CANVAS && window.devicePixelRatio !== 1 && this._retina) {
      this._handleRetina()
    } else {
      this._canvas.width = this._canvas.clientWidth
      this._canvas.height = this._canvas.clientHeight
    }
    if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
      this._context.viewport(0, 0, this._context.drawingBufferWidth, this._context.drawingBufferHeight)
    }
    if (this.change) this.change()
  }

  /**
   * Handle the stats object
   * @param {object} stats - a Stats.js object, which can be imported
   * from Sandpit with `import { Stats } from 'sandpit'`
   */
  setupStats () {
    if (!this.stats) {
      this.stats = new Stats()
      document.querySelector('body').appendChild(this.stats.dom)
    }
  }

  /**
   * Sets up resizing and input events and starts the loop
   */
  start () {
    // Sets up the events
    this._setupEvents()
    // Sets up setup
    if (this.setup) this.setup()
    // Loop!
    if (!this.loop) logger.warn('Looks like you need to define a loop')
    this._setupLoop()
  }

  /**
   * Stops the loop and removes event listeners
   */
  stop () {
    // Stop the animation frame loop
    window.cancelAnimationFrame(this._animationFrame)
    // Delete element, if initiated
    if (this.canvas) {
      this.canvas.outerHTML = ''
      delete this.canvas
    }
    if (this.stats) {
      document.querySelector('body').removeChild(this.stats.dom)
      delete this.stats
    }
    // Remove Gui, if initiated
    if (this._gui) {
      this._gui.domElement.removeEventListener('touchmove', this._preventDefault)
      this._gui.destroy()
    }
    // Remove all event listeners
    Object.keys(this._events).forEach(event => {
      if (this._events[event].disable) {
        this._events[event].disable.removeEventListener(event, this._preventDefault)
      }
      this._events[event].context.removeEventListener(event, this._events[event].event.bind(this))
    })
  }
}

export { Is, Mathematics, Color, Vector, Stats }
export default Sandpit
