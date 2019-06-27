// the AMD ( Asynchronus module defination ) is way to inclue js files asynchronusly
// the AMD is designed for the browsers to load js files

define(["./Module1", "./Module2"], function(module1, module2) {
  console.log(module1, module2);
});
