import dat from 'dat.gui/build/dat.gui'
import queryfetch from 'queryfetch'
import debounce from 'debounce'
import seedrandom from 'seedrandom'

import logger from './utils/logger'
import Is from './utils/Is'
import Color from './utils/Color'
import Mathematics from './utils/Mathematics'
import Vector from './utils/Vector'
import 'whatwg-fetch'
/* global fetch */

/**
 * A playground for creative coding
 */
class Sandpit {
  static get CANVAS () { return '2d' }
  static get WEBGL () { return '3d' }

  /**
   * @param {(string|object)} container - The container for the canvas to be added to
   * @param {string} type - Defines whether the context is 2d or 3d
   * @param {boolean} retina - Optionally decide to ignore rescaling for retina displays
   */
  constructor (container, type, retina = true) {
    logger.info('⛱ Welcome to Sandpit')
    this._setupContext(container, type, retina)
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
      this._canvas.width = window.innerWidth
      this._canvas.height = window.innerHeight
      // Grab the context
      this._context = this._canvas.getContext(type)
      this._type = type
    } else {
      throw new Error('The container is not a HTMLElement')
    }

    // Deal with retina displays
    if (type == Sandpit.CANVAS && window.devicePixelRatio !== 1 && retina) {
      const ratio =  window.devicePixelRatio
      // Increaser the canvas by the ratio
      this.canvas().width = window.innerWidth * ratio
      this.canvas().height = window.innerHeight * ratio
      // Set the canvas to the actual size
      this.canvas().style.width = window.innerWidth + 'px';
      this.canvas().style.height = window.innerHeight + 'px';
      // Scale the canvas to the new ratio
      this.context().scale(ratio, ratio)
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
  _setupSettings () {
    this.settings = {}
    this._gui = new dat.GUI()
    this._gui.domElement.addEventListener('touchmove', this._preventDefault, false)

    // If queryable is true, set up the query string management
    // for storing settings
    if (this._queryable) {
      if (window.location.search) {
        let params = queryfetch.parse(window.location.search)
        Object.keys(params).forEach((key) => {
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

      // If it's an object, supply the array or object,
      // and grab the right value
      if (typeof value === 'object') {
        options = value
        // If a selected option is available via the query
        // string, use that
        if (this.defaults[name].selected) {
          this.settings[name] = this.defaults[name].selected
        } else {
          // If not, grab the first item in the object or array
          this.settings[name] = Is.array(value)
            ? value[0]
            : value[Object.keys(value)[0]]
        }
      } else {
        // If it's not an object, pass the setting on
        this.settings[name] = this.defaults[name].value
      }

      // If it's a colour, use a different method
      let guiField = this.defaults[name].color
        ? group.addColor(this.settings, name)
        : group.add(this.settings, name, options)

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
    })
    // Open the settings drawer
    group.open()

    // Hide controls for mobile
    // TODO: Make this a setting
    if (this.width() <= 767) {
      this._gui.close()
    }

    // If queryable is enabled, serialize the final settings
    // and push them to the query string
    if (this._queryable) {
      const query = queryfetch.serialize(this.settings)
      window.history.replaceState({}, null, '/?' + query)
      // Adds a clear and reset button to the gui interface
      this._gui.add({clear: () => { this.clear() }}, 'clear')
      this._gui.add({reset: () => { this._reset() }}, 'reset')
    }
  }

  /**
   * Resets the settings in the query string, and offers a hook
   * to do something more fancy with sandpit.reset
   * @private
   */
  _reset () {
    if (this._queryable) {
      if (this.reset) {
        // If there's a reset method available, run that
        this.reset()
      } else {
        // If queryable, clear the query string
        window.history.replaceState({}, null, '/')
        // Reload the video
        window.location.reload()
      }
    }
  }

  /**
   * Handles a changed setting
   * @param {string} name - Setting name
   * @param {*} value - The new setting value
   * @private
   */
  _change (name, value) {
    logger.info(`Update fired on ${name}: ${value}`)
    if (this._queryable) {
      const query = queryfetch.serialize(this.settings)
      window.history.pushState({}, null, '/?' + query)
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
    // Clear the canvas if autoclear is set
    if (this._autoClear) {
      if (this._type === Sandpit.CANVAS) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
      } else if (this._type === Sandpit.WEGBL) {
        logger.warn('autoClear() is currently only supported in 2D')
      }
    }
    // Loop!
    if (this.loop) this.loop()
    // Increment time
    this._time++
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
    if (window.DeviceOrientationEvent) {
      this._events['deviceorientation'] = {event: this._handleAccelerometer, context: window}
    } else {
      logger.warn('Accelerometer is not supported by this device')
    }
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
   * Handles the accelerometer event
   * @param {event} event
   * @private
   */
  _handleAccelerometer (event) {
    if (event.beta && event.alpha && event.gamma) {
      this.input.accelerometer = {
        xAxis: event.beta,
        yAxis: event.gamma,
        rotation: event.alpha,
        gamma: event.gamma,
        beta: event.beta,
        alpha: event.alpha
      }
    }
    if (this.accelerometer) this.accelerometer(event)
  }

  /**
   * Handles a set of touches
   * @param {object} touches - An object containing touch information, in
   * the format {0: TouchItem, 1: TouchItem}
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
  settings (settings, queryable = true) {
    this.defaults = settings
    this._queryable = queryable
  }

  /**
   * Defines whether or not to return debugger messages from Sandpit
   * @param {boolean} boolean
   * @return {object} Context
   */
  debug (boolean) {
    logger.active = boolean
  }

  /**
   * Sets whether the canvas autoclears after each render
   * @param {boolean} boolean
   */
  autoClear (boolean) {
    this._autoClear = boolean
  }

  /**
   * Clears the canvas
   * @param {boolean} boolean
   */
  clear () {
    if (this._type === Sandpit.CANVAS) {
      this._context.clearRect(0, 0, this.width(), this.height())
    } else if (this._type === Sandpit.WEGBL) {
      logger.warn('clear() is currently only supported in 2D')
    }
  }

  /**
   * Clear the query string
   */
  clearQueryString () {
    window.history.replaceState({}, null, '/')
  }

  /**
   * Sets whether to or not to ignore the touch events for
   * multitouch, bypassing pinch to zoom, but meaning no
   * other touch events will work
   * @param {boolean} boolean
   */
  focusTouchesOnCanvas () {
    this._focusTouchesOnCanvas = true
  }

  /**
   * Returns the canvas context
   * @return {object} Context
   */
  context () {
    return this._context
  }

  /**
   * Returns the canvas object
   * @return {canvas} Canvas
   */
  canvas () {
    return this._canvas
  }

  /**
   * Returns the frame increment
   * @returns {number} Canvas width
   */
  time () {
    return this._time
  }

  /**
   * Returns the canvas width
   * @returns {number} Canvas width
   */
  width () {
    return window.innerWidth
  }

  /**
   * Returns the canvas height
   * @returns {number} Canvas height
   */
  height () {
    return window.innerHeight
  }

  /**
   * Fills the canvas with the provided colour
   * @param {string} color - The color to fill with, in string format
   * (for example, '#000', 'rgba(0, 0, 0, 0.5)')
   */
  fill (color) {
    if (this._type === Sandpit.CANVAS) {
      this._context.fillStyle = color
      this._context.fillRect(0, 0, this.width(), this.height())
    } else if (this._type === Sandpit.WEGBL) {
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
    this._canvas.width = window.innerWidth
    this._canvas.height = window.innerHeight
  }

  /**
   * Sets up resizing and input events and starts the loop
   */
  start () {
    // Sets up settings
    if (this.defaults && Object.keys(this.defaults).length) this._setupSettings()
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
    // Delete element, if initiated
    if (this.canvas()) {
      this.canvas().outerHTML = ''
      delete this.canvas()
    }
    // Remove Gui, if initiated
    if (this._gui) {
      this._gui.domElement.removeEventListener('touchmove', this._preventDefault)
      this._gui.destroy()
    }
    // Stop the animation frame loop
    window.cancelAnimationFrame(this._animationFrame)
    // Remove all event listeners
    Object.keys(this._events).forEach(event => {
      if (this._events[event].disable) {
        this._events[event].disable.removeEventListener(event, this._preventDefault)
      }
      this._events[event].context.removeEventListener(event, this._events[event].event.bind(this))
    })
  }
}

// TODO: Look at handling retina displays

export { Is, Mathematics, Color, Vector }
export default Sandpit
