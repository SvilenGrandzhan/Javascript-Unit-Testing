import { it, expect, describe, vi } from 'vitest';
import writeData from './io.js';
import { promises as fs } from 'fs';

vi.mock('fs');

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
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    writeData(testData, testFilename);
    expect(fs.writeFile).toBeCalled();
  });
});
