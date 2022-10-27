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

//end calculation functions