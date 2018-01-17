/* global it, expect, describe */
import Sandpit, { Is } from './Sandpit'
import dat from 'dat.gui/build/dat.gui'
import queryString from 'query-string'
import { requestAnimationFrame } from './helpers/requestAnimationFrame'
import { performance } from './helpers/performance'

// Shim requestAnimationFrame for jsdom
window.requestAnimationFrame = requestAnimationFrame

// Shim performance for jsdom
window.performance = performance

describe('Sandpit', () => {
  it("thinks you're doing a great job", () => {
    expect(true)
  })

  describe('instantiation', () => {
    it('should be an instance of the Sandpit class', () => {
      let div = document.createElement('div')
      let sandpit = new Sandpit(div, Sandpit.CANVAS)
      expect(sandpit).toBeInstanceOf(Sandpit)
    })

    it('should instanciate with string to a div element or a HTMLElement', () => {
      expect(new Sandpit(document.querySelector('body'), Sandpit.CANVAS)).toBeInstanceOf(Sandpit)
      expect(new Sandpit('body', Sandpit.CANVAS)).toBeInstanceOf(Sandpit)
    })

    it('should use the canvas, if that is provided as a dom element', () => {
      let canvas = document.createElement('canvas')
      let sandpit = new Sandpit(canvas, Sandpit.CANVAS)
      expect(sandpit.canvas).toBe(canvas)
    })

    it('should be a WebGL canvas if that option is set', () => {
      let sandpit = new Sandpit('body', Sandpit.WEBGL)
      // Looks like node-canvas doesn't support webgl, so checking
      // that the context returns undefined is a hack for the time being
      expect(sandpit.context).toBeFalsy()
    })
  })

  describe('settings', () => {
    let sandpit = new Sandpit('body', Sandpit.CANVAS)
    let settings = {beingGreat: {value: true}}
    sandpit.settings = settings
    sandpit.start()

    it('should store settings when they are passed in', () => {
      expect(sandpit.defaults.hasOwnProperty('beingGreat')).toBe(true)
    })

    it('should create a gui if settings are available', () => {
      expect(sandpit._gui).toBeInstanceOf(dat.GUI)
      expect(sandpit.settings.beingGreat).toBe(true)
    })

    it('should add the settings to the query string', () => {
      let params = queryString.parse(window.location.search)
      expect(params).toEqual({beingGreat: 'true'})
    })
  })

  describe('setting options', () => {
    let sandpit = new Sandpit('body', Sandpit.CANVAS, {queryable: false})
    let settings = {clear: false, reset: false}
    sandpit.settings = settings
    let guiNodes = Array.from(sandpit._gui.__ul.children)

    it('should not have a clear button if clear is false', () => {
      expect(sandpit._gui).toBeInstanceOf(dat.GUI)
      expect(sandpit._clearGui).toBe(false)
      expect(guiNodes.map(node => node.textContent)).not.toContain('clear')
    })

    it('should not have a reset button if reset is false', () => {
      expect(sandpit._gui).toBeInstanceOf(dat.GUI)
      expect(sandpit._resetGui).toBe(false)
      expect(guiNodes.map(node => node.textContent)).not.toContain('reset')
    })
  })

  describe('stats', () => {
    it('should display stats for the `loop()` when enabled', () => {
      let sandpit = new Sandpit('body', Sandpit.CANVAS, {stats: true})
      sandpit.start()
      expect(Is.element(sandpit.stats.dom)).toBe(true)
    })
    it('should not display stats for the `loop()` when not enabled', () => {
      let sandpit = new Sandpit('body', Sandpit.CANVAS)
      sandpit.start()
      expect(sandpit.stats).toBeFalsy()
    })
  })
})
