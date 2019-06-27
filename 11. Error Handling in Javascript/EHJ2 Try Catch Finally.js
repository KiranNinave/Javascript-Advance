// try catch and finally blocks are use to catch synchronus errors
// they didn't work with asynchronus functions except async await that is new syntax
// in javascript we can also handle syntactical errors usning try and catch

try {
  throw new Error("my error");
  console.log("i am working"); // this will newer execute
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally executed!"); // this will be always executed
}
console.log("i am also working!"); // this will work

// for function
function errorFunction() {
  try {
    throw new Error("my error");
    console.log("i am working inside function"); // this will newer execute
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("finally executed!"); // this will be always executed
  }
  console.log("i am also working! inside function"); // this will work
}

errorFunction();

// we can not handle async function errors
try {
  setTimeout(function() {
    undefinedvariable; // this is and undefind varible (note: this exception is not handled by try catch block)
  }, 0);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally executed!"); // this will be always executed
}

console.log("i am also working!"); // this will work
