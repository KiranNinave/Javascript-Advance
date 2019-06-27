// when we include multiple js files to an html page we have problem of poluting global scope
// we have problem of variable clasing
// we can avoid this using module reveling pattern
// by using module reveling pattern we can create private functions

const myModule = (function() {
  var myVaribale = "myVaribale";
  function myFunction() {
    console.log(myVaribale);
  }
  return {
    myFunction // for outside world only things that are accesible that we return from iife
  };
})();

// myModule.myVaribale; myVarible is not accesible to outside word
myModule.myFunction();

// note : the only problem with module reveling pattern is that we can modufi myModule varibale in gobal scope
