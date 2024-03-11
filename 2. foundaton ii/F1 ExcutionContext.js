// there are two execution phases in javascript
// first phase - crational phase
// second phase - executional phase

// crational phase creates global execution context
// the executional phase involve exection in functions

// the global exection context or global object hold all the variables and functions that are used by exectional phase

// in case of browser the global exectional context is this and window keyword in case of node context is global and this keyword

function printName() {
  return "kiran";
}

function findName() {
  return printName();
}

function sayName() {
  return findName();
}

sayName(); // or global.sayName() note := the global object hold all the variable and functions

// to view global object in case of node
console.log(global); // or console.log(this) note := gobal === this = true

// here in case of node exection is happends in following flow

//4. printName();
//3. findName();
//2. sayName()
//1. global and this
