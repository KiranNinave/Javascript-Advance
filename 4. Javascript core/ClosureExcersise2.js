// problem modify following code to print 0,1,2,3
var array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log("index at : " + i); // output : 4,4,4,4
  }, 0);
}

// soution 1
// using let keyword
// reason : let keyword support block scope (note : var keyword have global scope (accesible to anywhere ));
// ex:
// if(true){
//     var accesible = 'yes';
//     let notaccesible = 'no';
// }
// console.log(accesible); // it will work because var keyword support globle scope
// console.log(notaccesible); // it will throw error because the let and const keywords support block scope

console.log("solution 1");
var array = [1, 2, 3, 4];
for (let j = 0; j < array.length; j++) {
  setTimeout(function() {
    console.log("index at : " + j);
  }, 0);
}

// solution 2
// using closure property and IIFE
// IIFE are used to avoid colision between global variable so we are going to use that property

console.log("solution 3");
var array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function(i) {
    // IIFE will create new exicution environment every time for each execution
    setTimeout(function() {
      console.log("index at : " + i);
    }, 0);
  })(i);
}
