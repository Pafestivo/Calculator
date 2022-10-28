const numbersData = document.querySelectorAll('[data-number]');
const operatorsData = document.querySelectorAll('[data-operator]');
const divideOperator = document.getElementById('divide');
const multiplyOperator = document.getElementById('multiply');
const subtractOperator = document.getElementById('subtract');
const decimal = document.getElementById('decimal');
const equalOperator = document.getElementById('equal');
const sumOperator = document.getElementById('sum');

//adding even listener to every individual number key.
let displayValue;
numbersData.forEach((key) => key.addEventListener('click', () => {
  displayValue = key.textContent;
  console.log(displayValue);
}))

//same for every individual operator key.
operatorsData.forEach((key) => key.addEventListener('click', () => {
  displayValue = key.textContent;
  console.log(displayValue);
}))


//calculation functions
function add([...args]) {
  const sum = args.reduce((total, next) => total + next)
  return sum;
}

function subtract([...args]) {
  const sum = args.reduce((total, next) => total - next)
  return sum;
}

function multiply([...args]) {
  const sum = args.reduce((total, next) => total * next)
  return sum;
}

function divide([...args]) {
  const sum = args.reduce((total, next) => total / next);
  if (sum === Infinity) return "ERROR"
  if (sum - Math.floor(sum) === 0) return sum;
  return sum.toFixed(2);
}
//end calculation functions

//operate
function operate(a, operator, b) {
  if (operator === "+") {
    return add([a, b])
  } else if (operator === "-") {
    return subtract([a, b])
  } else if (operator === "*") {
    return multiply([a, b]) 
  } else if (operator === "/") {
    return divide([a, b])
  }
}
//operate

