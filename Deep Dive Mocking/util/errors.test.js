import { it, describe, expect, vi } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should be instance of class HTTPError', () => {
    const code = 200;
    const message = 'message';
    const data = { key: 'value' };
    const error = new HttpError(code, message, data);
    expect(error).toBeInstanceOf(HttpError);
  });
  it('should have corresponding types for all properties', () => {
    const code = 200;
    const message = 'message';
    const data = { key: 'value' };
    const error = new HttpError(code, message, data);
    expect(error.statusCode).toBeTypeOf('number');
    expect(error.message).toBeTypeOf('string');
    expect(error.data).toBeTypeOf('object');
  });
  it('should contain the provided status code, message and data', () => {
    const code = 200;
    const message = 'message';
    const data = { key: 'value' };
    const error = new HttpError(code, message, data);
    expect(error.statusCode).toBe(code);
    expect(error.message).toBe(message);
    expect(error.data).toBe(data);
  });
  it('should be undefined if no data is provided', () => {
    const code = 200;
    const message = 'message';
    // no providing any data
    const error = new HttpError(code, message);
    // nor passing any data as argument
    expect(error.statusCode).toBe(code);
    expect(error.message).toBe(message);
    expect(error.data).not.toBeDefined();
  });
  //as training let's try to check if any default data is provided
  //in error.js, class HttpError, let add default data value
  //   it('should have default data provided', () => {
  //     const code = 200;
  //     const message = 'message';
  //     const newInstance = new HttpError(code, message);
  //     expect(newInstance.data).toBeDefined();
  //   });
});

describe('class ValidationError', () => {
  it('should be instance of class ValidationError', () => {
    const testMessage = 'test message';
    const newValidationError = new ValidationError(testMessage);
    expect(newValidationError).toBeInstanceOf(ValidationError);
  });
  it('message should be type string', () => {
    const testMessage = 'test message';
    const newValidationError = new ValidationError(testMessage);
    expect(newValidationError.message).toBeTypeOf('string');
  });
  it('should contain provided message', () => {
    const testMessage = 'test message';
    const newValidationError = new ValidationError(testMessage);
    expect(newValidationError.message).toBeDefined();
  });
  it('should be undefined if no message is provided', () => {
    const newValidationError = new ValidationError();
    expect(newValidationError.message).toBeUndefined();
  });
  //   it('should be defined if no message is provided', () => {
  //     const newValidationError = new ValidationError();
  //     expect(newValidationError.message).toBeDefined();
  //   });
  it('should contain provided message', () => {
    const testMessage = 'message';
    const newTestInstance = new ValidationError(testMessage);
    expect(newTestInstance.message).toBe(testMessage);
  });
  //probably most important test of all
});
