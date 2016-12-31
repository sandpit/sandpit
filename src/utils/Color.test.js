/* global it, expect, describe */
import Color from './Color'
import color from 'color'

describe('Color', () => {
  it('should be a wrapper for the Color library', () => {
    let white = Color('#fff')
    expect(white).toBeInstanceOf(Color)
    expect(white).toBeInstanceOf(color)
  })
})
