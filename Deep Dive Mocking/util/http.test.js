import { describe, it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
  // fetch returns promise, so we create new Promise
  return new Promise((resolve, reject) => {
    //checking if data is parsed to JSON
    if (typeof options.body !== 'string') {
      return reject('Not a string');
    }
    const testResponse = {
      // set key ok to test for status
      ok: true,
      json() {
        // json response returns also a promise
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});
vi.stubGlobal('fetch', testFetch);
// If axios is used, need to setup vi.mock('axios)
// and setup __mocks__/axios.js file showed in previous lecture

describe('sendDataRequest()', () => {
  it('should return any available response data', () => {
    const testData = { key: 'test' };
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });
  it('should convert provided data to JSON before sending request', async () => {
    const testData = { key: 'test' };
    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }
    expect(errorMessage).not.toBe('Not a string');
  });
  it('should throw HttpError in case of non-ok responses', () => {
    testFetch.mockImplementationOnce((url, options) => {
      // fetch returns promise, so we create new Promise
      return new Promise((resolve, reject) => {
        const testResponse = {
          // this time set ok to false
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });
    const testData = { key: 'test' };
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
