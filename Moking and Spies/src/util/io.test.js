import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io.js';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        // join method accepts endless amount of arguments
        // to point to last one. first destruct all args to array
        // second point to last element of that array
        return args[args.length - 1];
      },
    },
  };
});

describe('writeData()', () => {
  // it('it should execute the writeFile method', async () => {
  //   const testData = 'test';
  //   const testFilename = 'text.txt';
  //   const result = await writeData(testData, testFilename);
  //   expect(result).toBeUndefined();
  // });
  it('it should execute the writeFile method', () => {
    const testData = 'test';
    const testFilename = 'text.txt';
    writeData(testData, testFilename);
    expect(fs.writeFile).toBeCalled();
  });
  it('it should resolve the writeFile method', () => {
    const testData = 'test';
    const testFilename = 'text.txt';
    writeData(testData, testFilename);
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
  it('it should be called with filename and dummy data', () => {
    const testData = 'test';
    const testFilename = 'text.txt';
    writeData(testData, testFilename);
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });
});
