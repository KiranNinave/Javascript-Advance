// closure is the combination of function and lexical environment
// the closure is an insane javascript behiviour
// closure mostly seen in higher order functions
// closure is some kind of insane behivour of garbage collector
// the objects that are ready to collected by garbage collector are store in closure memory

function a() {
  // function a is get pop of from the stack on return
  var a = "a"; // here a is ready to get collected by garbage collector are store in closure memory
  return function b() {
    // function b is get pop of the stack on return
    var b = "b"; // here b is ready to get collected by garbage collector are store in closure memory
    return function c() {
      var c = "c";
      return `${a} , ${b} , ${c}`; // here a and b are get retrive from closure memory
    };
  };
}

console.log(a()()());
