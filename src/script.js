let currentOperator = '+';

  function setOperator(operator) {
    currentOperator = operator;
    document.getElementById('operator').textContent = operator;
    clearResult();
  }

  function calculateResult() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    
    errorElement.textContent = '';
    resultElement.textContent = '';

    if (num1 === '' || num2 === '') {
      errorElement.textContent = 'Будь ласка, введіть обидва числа.';
      return;
    }
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      errorElement.textContent = 'Введіть коректні числові значення.';
      return;
    }

    let result;
    switch (currentOperator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          errorElement.textContent = 'Ділення на нуль неможливе.';
          return;
        }
        result = number1 / number2;
        break;
      default:
        errorElement.textContent = 'Невідома операція.';
        return;
    }

    resultElement.textContent = result.toFixed(2);
  }

  document.getElementById('num1').addEventListener('input', clearResult);
  document.getElementById('num2').addEventListener('input', clearResult);

  function clearResult() {
    document.getElementById('result').textContent = '';
    document.getElementById('error').textContent = '';
  }

  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', calculateResult);
  });