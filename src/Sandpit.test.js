/* global it, expect, describe */
import Sandpit from './Sandpit'
import dat from 'dat.gui/build/dat.gui'
import queryfetch from 'queryfetch'
import { requestAnimationFrame } from './helpers/requestAnimationFrame'

// Shim requestAnimationFrame for jsdom
window.requestAnimationFrame = requestAnimationFrame

describe('Sandpit', () => {
  it("thinks you're doing a great job", () => {
    expect(true)
  })

  describe('instanciation', () => {
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
      let params = queryfetch.parse(window.location.search)
      expect(params).toEqual({beingGreat: 'true'})
    })
  })
})
