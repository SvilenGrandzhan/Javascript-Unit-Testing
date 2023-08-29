import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should transform a string number to a number of type number', () => {
  const value = '1'
  expect(value).toBeTypeOf('string')
  expect(transformToNumber(value)).toBeTypeOf('number')
})

it('should yield NAN for non-transformable values', () => {
  const input = 'invalid'
  expect(transformToNumber(input)).toBeNaN()
})
