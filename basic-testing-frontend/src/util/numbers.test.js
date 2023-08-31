import { it, expect, describe } from 'vitest';
import { transformToNumber, clearNumbers } from './numbers';

describe('transformToNumber()', () => {
  it('should transform a string number to a number of type number', () => {
    const value = '1';
    expect(value).toBeTypeOf('string');
    expect(transformToNumber(value)).toBeTypeOf('number');
  });

  it('should yield NAN for non-transformable values', () => {
    const input = 'invalid';
    expect(transformToNumber(input)).toBeNaN();
  });
});
describe('clearNumbers()', () => {
  it('it should return an array of number values if an array of string number values is provided', () => {
    const strArray = ['1', '2'];
    const numArray = clearNumbers(strArray);
    expect(numArray[0]).toBeTypeOf('number');
  });
  it('should throw an error if an array with at least one empty string is provided', () => {
    const array = ['1', ''];
    const result = () => clearNumbers(array);
    expect(result).toThrow();
  });
});
console.log();
