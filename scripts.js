//calculation functions

function add([...args]) {
  const sum = args.reduce((total, next) => total + next, 0)
  return sum;
}

//end calculation functions