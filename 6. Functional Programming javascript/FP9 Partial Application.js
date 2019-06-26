// partial application is technique of producting a function with smaller number of parameters
// partial application is slightly different from curring
// by using partial application we can partialy apply parameter to a function
// in partial application we pass rest of parameters on second call

function curringExample(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(curringExample(1)(2)(3)); // in curring it take single parameter for each function

function partialApplicationExample(a, b, c) {
  return a * b * c;
}

// here function will remember parameter a = 1
const partialParameter = partialApplicationExample.bind(null, 1); // null because its on global scope so we dont care about scope
console.log(partialParameter(2, 3)); // because function remembered first parameter as 1

// note : you can check use of bind function in 2.foundation ii
