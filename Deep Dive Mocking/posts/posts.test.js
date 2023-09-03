import { it, describe, expect, vi } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
  it('should extract title and content from provided data', () => {
    const testTitle = 'test title';
    const testContent = 'test content';
    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        // this is pointing to current object - testFormData
        // [] is dynamically choosing key value, in this case title, content
        return this[identifier];
      },
    };
    const data = extractPostData(testFormData);
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});

describe('savePost()', () => {
  it('description', () => {});
});
