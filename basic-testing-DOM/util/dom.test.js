import fs from 'fs';
import path from 'path';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Window } from 'happy-dom';
import { showError } from './dom';

//created variable for file path
// first argument, file location cwd (project current working directory)
// second argument file name
const htmlFilePath = path.join(process.cwd(), 'index.html');
// load html file content into happy-dom by passing doc path as argument to readFileSync
const htmlFileContent = fs.readFileSync(htmlFilePath).toString();
const window = new Window();
const document = window.document;
document.write(htmlFileContent);
vi.stubGlobal('document', document);

//reset html content of file
beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlFileContent);
});

describe('showError()', () => {
  it('should add a P element to div with id errors', () => {
    showError('Error!');
    const errorElement = document.getElementById('errors');
    const errorPElement = errorElement.firstElementChild;
    expect(errorPElement).not.toBeNull();
  });
  it('should output provided message in error paragraph', () => {
    showError('Error!');
    const errorElement = document.getElementById('errors');
    const errorPElement = errorElement.firstElementChild;
    expect(errorPElement.textContent).toBe('Error!');
  });
});

//https://testing-library.com/docs/dom-testing-library/install
