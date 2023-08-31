import { it, describe, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
  it('should generate a token value', (done) => {
    const email = 'test@test.io';
    generateToken(email, (error, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe('generateTokenPromise()', () => {
  it('should generate a token value', async () => {
    const email = 'test@test.io';
    const token = await generateTokenPromise(email);
    expect(token).toBeDefined();
  });
});

describe('generateTokenPromise()', () => {
  it('should generate a token value', () => {
    const email = 'test@test.io';
    return expect(generateTokenPromise(email)).resolves.toBeDefined();
    // Note: can use it with rejects to check for error
    // return expect(generateTokenPromise(email)).rejects.toBeDefined();
  });
});
