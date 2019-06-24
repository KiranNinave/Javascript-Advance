// by using closure property we can only one time initialze module

function initialzer() {
  var called = 0;
  var variable;
  function create() {
    if (called == 0) {
      // do initialization
      variable = "variable";
      console.log("variable has been initialized");
      called++;
    }
    return variable;
  }
  return {
    create: create
  };
}

const initialization = initialzer();

console.log(initialization.create());
console.log(initialization.create());
console.log(initialization.create());
