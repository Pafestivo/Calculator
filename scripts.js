const numbersData = document.querySelectorAll('[data-number]');
const operatorsData = document.querySelectorAll('[data-operator]');
const divideOperator = document.getElementById('divide');
const multiplyOperator = document.getElementById('multiply');
const subtractOperator = document.getElementById('subtract');
const decimal = document.getElementById('decimal');
const equalOperator = document.getElementById('equal');
const sumOperator = document.getElementById('sum');
const screenInput = document.getElementById('screen-input');
const screenOutput = document.getElementById('screen-output');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');


//adding event listener to every individual number key.
let keyInput;
numbersData.forEach((key) => key.addEventListener('click', () => {
  keyInput = key.textContent;
  screenInput.textContent += keyInput;
}))

//same for every individual operator key.
operatorsData.forEach((key) => key.addEventListener('click', () => {
  keyInput = key.textContent;
  if (screenInput.textContent.split(' ').length === 3) {
    calculate()
    screenInput.textContent = screenOutput.textContent + " " + keyInput + " ";

  }else {
    screenInput.textContent += " " + keyInput + " ";
  }
}))

//clear the calc screen
clearBtn.addEventListener('click', () => {
  screenInput.textContent = ""
  screenOutput.textContent = ""
});

//delete last digit
deleteBtn.addEventListener('click', () => {
  const newString = screenInput.textContent.slice(0, -1)
  screenInput.textContent = newString;
});

//calculate
equalOperator.addEventListener('click', calculate);

function calculate() {
  const parameter = Array.from(screenInput.textContent.replace('x', '*').replace('=', '').split(' ').splice(0, 3));
  screenOutput.textContent = operate(parameter);
}


//calculation functions
function add(a, b) {
  const sum = a + b;
  return sum;
}

function subtract(a, b) {
  const sum = a - b;
  return sum;
}

function multiply(a, b) {
  const sum = a * b;
  return sum;
}

function divide(a, b) {
  const sum = a / b;
  if (sum === Infinity) return "ERROR"
  if (sum - Math.floor(sum) === 0) return sum;
  return sum.toFixed(2);
}
//end calculation functions

//operate
function operate([a, operator, b]) {
  if (operator === "+") {
    return add(a, b)
  } else if (operator === "-") {
    return subtract(a, b)
  } else if (operator === "*") {
    return multiply(a, b) 
  } else if (operator === "/") {
    return divide(a, b)
  }
}
//operate