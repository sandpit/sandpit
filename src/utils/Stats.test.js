/* global it, expect, describe */
import Stats from './Stats'
import Is from './Is'
import { performance } from '../helpers/performance'

// Shim performance for jsdom
window.performance = performance

describe('Stats', () => {
  it('should be a wrapper for the Stats library', () => {
    let statsObject = new Stats('#fff')
    expect(Is.element(statsObject.dom)).toBe(true)
  })
})
