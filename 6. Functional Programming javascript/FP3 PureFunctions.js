// property1: pure functions does not have any side effects to outside the world
// property2: pure functions for same input allways return same output

// property1: pure functions does not have any side effects to outside the world
const array = [1, 2, 3];
function myPureFunction1(array) {
  // this function accepts array (note: arrays are passed by reference)
  const newArray = [...array]; // we are copying array to new array
  newArray.push(array.length + 1); // we make changes in copy so it diden't effect the orignal one
  return newArray; // we are returning the copy
  // overall this function didn't affect the orignal array so this one is pure function
}
const result = myPureFunction1(array); // this returning the copy of array
console.log(array); // orignal array didn't affected
console.log(result);

// property2: pure functions for same input allways return same output
function myPureFunction2(num1, num2) {
  // for same input this function will always produce same output
  return num1 + num2;
}
console.log(myPureFunction2(1, 2));
console.log(myPureFunction2(1, 2)); // for input 1,2 the out put is allways same as 3 this one is pure function

// some key terms for pure functions
// pure function never effect global variable not event effect window or global object

function notPureFunction() {
  console.log("hello"); // this one not pure function because it using window function effectiong outside world
}

// note: although pure function didn't affect outside world, accepting input and returning output is also one king of ineraction with outside
// so no function can be 100% pure function
