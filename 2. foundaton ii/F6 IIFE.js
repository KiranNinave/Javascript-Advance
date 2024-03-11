// iffe function are use to avoid collision between global variables

var newScope = (function() {
  var a = "hello";
  var b = "wellcome";

  return {
    b: b
  };
})();

console.log(a); // this will throw an error beacuse a is inside newScope

var a = "hiii"; // this is not rehosting it will create varible inside global scope but origal a = "hello" is remain

console.log(newScope.b); // we can access iife content yousing function expression
