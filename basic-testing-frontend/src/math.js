import { clearNumbers } from './util/numbers.js'
export function add(numbers) {
  let sum = 0
  for (const number of numbers) {
    sum += +number
  }
  return sum
}

export function calculateResult(numberValues) {
  let result = ''
  try {
    const numbers = clearNumbers(numberValues)
    result = add(numbers).toString()
  } catch (error) {
    result = error.message
  }
  return result
}
