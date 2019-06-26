// compose and pipe are techniques that can used to combine function calles :) and its awesome

function multiplyByTwo(n) {
  // this function multipy number by 2
  return 2 * n;
}

function makePositive(n) {
  // this function will make number positive
  return Math.abs(n);
}

function compose(fn, gn) {
  // combining functions
  return function(data) {
    return fn(gn(data));
  };
}

console.log(
  compose(
    multiplyByTwo,
    makePositive
  )(-4)
);
