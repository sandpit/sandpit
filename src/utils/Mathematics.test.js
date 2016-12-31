/* global it, expect, describe */
import Mathematics from './Mathematics'

describe('Mathematics', () => {
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
