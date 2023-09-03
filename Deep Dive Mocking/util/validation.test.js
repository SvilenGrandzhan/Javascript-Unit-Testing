import { it, describe, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {
  it('should throw a specific error message if empty string is provided', () => {
    const testText = '';
    const testErrorMessage = 'Error Message!';
    const validationFunction = () => validateNotEmpty(testText, testErrorMessage);
    expect(validationFunction).toThrow('Error Message!');
  });
  it('should throw a specific error message if string only contains blanks', () => {
    const testText = '            ';
    const testErrorMessage = 'Error Message!';
    const validationFunction = () => validateNotEmpty(testText, testErrorMessage);
    expect(validationFunction).toThrow('Error Message!');
  });
});
