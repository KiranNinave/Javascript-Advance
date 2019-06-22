// functions are first class citizens in javascript

// storing function in variable
var myFunction = function() {
  console.log("my function");
};
myFunction();

// passing fuction as parameter
function a(fn) {
  fn();
}
a(function() {
  console.log("parameterize function");
}); // javascript is so flexible that we can create anonymus functions :)

// returning function
function b() {
  return function c() {
    console.log("returnig function");
  };
}
b()();

// function in javascript are so powerfull :) that we can use it to do functional programming.....
