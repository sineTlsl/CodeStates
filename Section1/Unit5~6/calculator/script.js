const calculator = document.querySelector('#wrap'); 
const buttons = calculator.querySelector('#calcBtn_sec');
const display = document.querySelector('#result_text'); 

function calculate(n1, operator, n2) {
  let result = 0;

  if (operator === '+') {
    result = Number(n1) + Number(n2);
  } else if (operator === "-") {
    result = Number(n1) - Number(n2);
  } else if (operator === "x") {
    result = Number(n1) * Number(n2);
  } else if (operator === "/") {
    result = Number(n1) / Number(n2);
  } else if (operator === "%") {
    result = Number(n1) % Number(n2);
  }
  result = result.toString();

  // 계산 결과의 값이 현재 계산기 크기보다 커지지 않도록 글자수 조정
  return result.length > 7 ? Number(result).toPrecision(8) : result;
}

let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  const target = event.target; 
  const action = target.classList[0];
  const buttonContent = target.textContent; 

  if (target.matches('button')) {
    if (action === 'number') {
      if (display.textContent === '0') {
        display.textContent = buttonContent;
      } else {
        if (display.textContent !== firstNum) {
          display.textContent += buttonContent;
        } else {
          display.textContent = buttonContent;
        }
      }
      previousKey = 'number';
    }

    if (action === 'operator') {
      if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
        display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      }
      firstNum = display.textContent; 
      operatorForAdvanced = buttonContent;

      previousKey = 'operator';
    }

    if (action === 'decimal') {
      if (!display.textContent.includes('.')) {
        if (previousKey !== 'operator') {
          display.textContent += buttonContent;
        } else {
          display.textContent = '0.'; 
        }
      }
      previousKey = 'decimal';
    }

    if (action === 'clear') {
      firstNum = '';
      operatorForAdvanced = '';
      display.textContent = '0';

      previousKey = 'clear';
    }

    if (action === 'calculate') {
      previousNum = display.textContent;
      if (operatorForAdvanced === undefined || operatorForAdvanced === '') {
        display.textContent = previousNum;
      } else {
        if (previousKey === 'calculate') {
          display.textContent = calculate(previousNum, operatorForAdvanced, firstNum);
        } else {
          display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
        }
      }
      previousKey = 'calculate';
    }
  }
});