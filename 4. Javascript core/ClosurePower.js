// saving power
const myFunction = name => date => message =>
  console.log(`${name} - ${date} - ${message}`);

// the avbove function is same as following
// function myFunction(name){
//     return function(date){
//         return function(message){
//             console.log(`${name} - ${date} - ${message}`);
//         }
//     }
// }

const remember = myFunction("kiran"); // here function save 1st param on closure for later use
const withDate = remember("28 may"); // here function save 2nd param for later use
const withMessage = withDate("hello");

// or
myFunction("kiran")("28 may")("hello");

// aync closure power
function asyncFunction() {
  setTimeout(function() {
    console.log(myVariable);
  }, 0);
  const myVariable = "myVarible"; // even if const variable not hoted it will work becuse of clouser property and javascript web api async nature (stack and webapi call back)
}

asyncFunction();
