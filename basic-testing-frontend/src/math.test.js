import { expect, it } from 'vitest'
import { add } from './math'

it('calculate sum of array elements', () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const expectedResult = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

  // Act
  const result = add(numbers)

  // Assert
  expect(result).toBe(expectedResult)

  // Give us AAA pattern
})

it('check for type of result of add function', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const result = add(numbers)
  expect(result).toBeTypeOf('number')
})

it('should yield NAN if at least one invalid number is provided', () => {
  const numbers = ['invalid', 1]
  const result = add(numbers)
  expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const inputs = ['1', '2']
  const result = add(inputs)
  const expectedResult = inputs.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0)
  expect(result).toBe(expectedResult)
})

it('should yield Zero if an empty array is provided', () => {
  const array = []
  const result = add(array)
  expect(result).toBe(0)
})

// Checking for errors
it('should throw an error if no value is passed into the function', () => {
  const resultFunction = () => {
    add()
  }
  expect(resultFunction).toThrow()
  // explanation: running add with no value, result is passed to resultFunction
  // and expect is executing resultFunction and checking for error with ToThrow()
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1
  const num2 = 2
  const resultFunctions = () => {
    add(num1, num2)
  }
  expect(resultFunctions).toThrow(/is not iterable/)
})
