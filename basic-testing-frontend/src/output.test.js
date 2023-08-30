import { it, describe, expect } from 'vitest';
import { generateResultText } from './output.js';

describe('generateResultText()', () => {
  it('should return string, no matter what value is passed in', () => {
    const valueNumber = 1;
    const valueString = '1';
    const valueBoolean = false;
    const resultNumber = generateResultText(valueNumber);
    const resultString = generateResultText(valueString);
    const resultBoolean = generateResultText(valueBoolean);
    expect(resultNumber).toBeTypeOf('string');
    expect(resultString).toBeTypeOf('string');
    expect(resultBoolean).toBeTypeOf('string');
  });
  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const number = 1;
    const result = generateResultText(number);
    expect(result).toContain(number.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';
    const resultText = generateResultText(result);
    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';
    const resultText = generateResultText(result);
    expect(resultText).toContain(result[0].toUpperCase() + result.slice(1));
  });
});
