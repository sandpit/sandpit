/* global it, expect, describe */
import Victor from 'victor'
import Vector from './Vector'

describe('Vector', () => {
  it('should be a wrapper for the Victor library', () => {
    let vector = new Vector(0, 0)
    expect(vector).toBeInstanceOf(Vector)
    expect(vector).toBeInstanceOf(Victor)
  })
})
