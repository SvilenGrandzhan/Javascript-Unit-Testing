import { it, expect, describe, vi } from 'vitest';
import { generateReportData, storeData } from './data.js';

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toBeCalled();
  });
});

describe('storeData()', () => {
  it('description', () => {});
});
