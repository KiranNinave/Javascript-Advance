// insane way to crate a function in javascript
const insaneFunction = new Function("num", "return num");
console.log(insaneFunction(4));

// function are object
function myFunction() {
  return "myFunction";
}
myFunction.myVariavle = "myVariable"; // we can do something like this

// inside the javascript when creating the function something happend like this
// const myFunction = {
//     name:"myFunction",
//     myVariable: "myVariable",
//     ():myFunction.call()
// }

// in javascript functions are the object so we can store them or pass like parameter like objects
// note : functions are the special types of objects in javascript
