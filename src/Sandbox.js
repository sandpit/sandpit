import dat from 'dat.gui/build/dat.gui'
import logger from './utils/logger'
import queryfetch from 'queryfetch'
import debounce from 'debounce'

class Sandbox {
  static get CANVAS () { return '2d' }
  static get WEBGL () { return '3d' }

  /**
   * Constructor
   */
  constructor (container, type) {
    console.log('⛱ Welcome to Sandbox')

    this._context = this._setup(container, type)
  }

  /**
   * Private API
   */
  _setup (container, type) {
    if (typeof container !== 'string') {
      throw new Error('Please provide a string reference to the container, like ".container"')
    }
    if (typeof type !== 'string' || (type !== Sandbox.CANVAS && type !== Sandbox.WEBGL)) {
      throw new Error('Please provide a context type - either `Sandbox.CANVAS` or `Sandbox.WEBGL`')
    }
    // TODO: Allow for an object to be passed, or a string
    const _container = document.querySelector(container)
    this._canvas = document.createElement('canvas')
    this._canvas.width = window.innerWidth
    this._canvas.height = window.innerHeight
    _container.appendChild(this._canvas)
    return this._canvas.getContext(type)
  }

  _createGui (settings, queryable) {
    this.settings = {}
    this.gui = new dat.GUI()

    if (queryable) {
      this._queryable = true
      if (window.location.search) {
        let params = queryfetch.parse(window.location.search)
        Object.keys(params).forEach((param) => {
          if (settings[param]) settings[param] = params[param]
        })
      }
      const query = queryfetch.serialize(settings)
      window.history.pushState({}, null, '/?' + query)
      this.gui.add({reset: () => {
        window.history.pushState({}, null, '/')
        window.location.reload()
      }}, 'reset')
    }

    const group = this.gui.addFolder('Settings')
    Object.keys(settings).forEach(name => {
      this.settings[name] = settings[name]
      let guiField = group.add(this.settings, name)
      guiField.onChange(debounce((value) => {
        this._change(name, value)
      }), 300)
    })
  }

  _change (name, value) {
    logger.info(`Update fired on ${name}: ${value}`)
    if (this._queryable) {
      const query = queryfetch.serialize(this.settings)
      window.history.pushState({}, null, '/?' + query)
    }
  }

  _loop () {
    if (this._autoClear) this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    if (this.loop) this.loop()
    this._animationFrame = window.requestAnimationFrame(this._loop.bind(this))
  }

  _setupResize () {
    if (this.resize) {
      this._resizeEvent = this.resize
    } else {
      this._resizeEvent = () => {
        logger.info('Resizing')
        this._canvas.width = window.innerWidth
        this._canvas.height = window.innerHeight
      }
    }
    window.addEventListener('resize', this._resizeEvent)
  }

  _move () {
    if (this.move) {
      // TODO: Set up mousemove and touchmove
      this._mouseMoveEvent = this.move
      window.addEventListener('mousemove', this._handleMove.bind(this))
    }
  }

  _handleMove(event) {
    this._handleInput(event)
    this.move(event)
  }

  _handleInput(event) {
    // TODO: Normalise input, whether touch or mouse
    this.input = {x: event.pageX, y: event.pageY}
  }

  _accelerometer () {
    if (this.accelerometer) {
      // TODO: Set up accelerometer
    }
  }

  /**
   * Public API
   */
  settings (settings, queryable) {
    this._createGui(settings, queryable)
  }

  logger (boolean) {
    logger.active = boolean
  }

  autoClear (boolean) {
    this._autoClear = boolean
  }

  context () {
    return this._context
  }

  canvas () {
    return this._canvas
  }

  start () {
    this._setupResize()

    if (!this.loop) logger.warn('Looks like you need to define a loop')
    this._loop()

    this._move()
  }

  stop () {
    window.cancelAnimationFrame(this._animationFrame)
    window.removeEventListener('resize', this._resizeEvent)
  }
}

export default Sandbox
