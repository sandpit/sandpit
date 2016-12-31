/* global it, expect, describe */
import Is from './Is'

describe('Is', () => {
  let div = document.createElement('div')
  let canvas = document.createElement('canvas')

  describe('element', () => {
    it('should test whether the provided reference is a HTMLElement', () => {
      expect(Is.element(div)).toBe(true)
      expect(Is.element([])).toBe(false)
    })
  })

  describe('array', () => {
    it('should test whether the provided reference is an array', () => {
      expect(Is.array([])).toBe(true)
      expect(Is.array({})).toBe(false)
    })
  })

  describe('object', () => {
    it('should test whether the provided reference is an object', () => {
      expect(Is.object({})).toBe(true)
      expect(Is.object([])).toBe(false)
    })
  })

  describe('canvas', () => {
    it('should test whether the provided reference is a canvas', () => {
      expect(Is.canvas(canvas)).toBe(true)
      expect(Is.canvas(div)).toBe(false)
    })
  })
})
