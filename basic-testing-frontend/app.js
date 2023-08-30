import { inputNumberValue } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const inputValue = inputNumberValue(form);
  const result = calculateResult(inputValue);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
