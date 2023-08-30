export function generateResultText(calcResult) {
  let resultText = '';
  if (calcResult === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (calcResult !== 'no-calc') {
    resultText = 'Result: ' + calcResult;
  }
  return resultText;
}

export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}
