/* global it, expect, describe */
import Mathematics from './Mathematics'

describe('Mathematics', () => {
  describe('helpers', () => {
    it('should return pi * 2', () => {
      expect(Mathematics.TWO_PI).toBe(Math.PI * 2)
    })
    it('should return pi / 2', () => {
      expect(Mathematics.HALF_PI).toBe(Math.PI / 2)
    })
    it('should return pi / 4', () => {
      expect(Mathematics.QUARTER_PI).toBe(Math.PI / 4)
    })
  })

  describe('randomBetween', () => {
    it('should return a random number between a minimum and maximum range', () => {
      const randomNumber = Mathematics.randomBetween(5, 10)
      expect(randomNumber).toBeGreaterThanOrEqual(5)
       expect(randomNumber).toBeLessThanOrEqual(10)
    })
  })

  describe('randomFrom', () => {
    it('should return a random item from an array', () => {
      const awesomeAnimalsArray = ['puppies', 'kitties', 'polar bears']
      const randomFromArray = Mathematics.randomFrom(awesomeAnimalsArray)
      expect(awesomeAnimalsArray).toContain(randomFromArray)
    })

    it('should return a random item from an object', () => {
      const awesomeAnimalsObject = {puppies: 'so good', kitties: 'also great', polarBears: 'yessss'}
      const randomFromObject = Mathematics.randomFrom(awesomeAnimalsObject)
      expect(awesomeAnimalsObject.hasOwnProperty(Object.keys(randomFromObject)[0])).toBe(true)
    })
  })
})
