// compose and pipe are techniques that can used to combine function calles :) and its awesome
// the only diffence between pipe and compose is that order of function calles
// compose give function calles from right to left
// pipe gives function calles from left to right

function multipyByTwo(n) {
  // this function will multiply number by 2
  return n * 2;
}

function makePositive(n) {
  // this function will make number positive
  return Math.abs(n);
}

function pipe(fn, gn) {
  return function(data) {
    return gn(fn(data)); // order is change ( note: in compose order is fn(gn(data)))
  };
}

console.log(
  pipe(
    multipyByTwo,
    makePositive
  )(-4)
);
