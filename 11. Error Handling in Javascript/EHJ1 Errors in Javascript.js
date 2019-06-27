// errors are feature that we use to improve our code :) cool defination

// the error handling is totaly depends on platform
// the way error occure in browser and node are different so be carefull while doing it

// in javascript we have some error classes by using it we can generate error

const error = new Error("simple error"); // ideal error
const syntaxError = new SyntaxError("syntax error"); // get for wrong syntaxt
const refrenceError = new ReferenceError("reference error"); // get for undefined variable

// throw keyword is used to genrate error
throw error;

// by using throw we can also do something like this
throw "string error";

// with error constructor function we get three properties that we can use
console.log(error.name); // error name
console.log(error.message); // error message
console.log(error.stack); // error stack trace

// in javascript we can handle error using try catch block
// if we didn't handle the error then our program execution will stop
// if our catch block didn't handle the error then
// for browsers onerror() function will run then our program will stop its execution right there
// for node process.on("uncaughtException") function will run then our code will stop its execution
