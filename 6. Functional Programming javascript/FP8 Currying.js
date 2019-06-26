// curring is technique of translating evaluation of function that takes multiple arguments
// into evaluating into sequence of function each with a single arguments
// curring is a techique of function chaining that remember previous data

function withoutCurrying(x, y) {
  return x * y;
}

function withCurrying(x) {
  return function(y) {
    return x * y; // x will remember by function using closure property
  };
}

const remember = withCurrying(5);
console.log(remember(4));
