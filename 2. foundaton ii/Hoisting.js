// in javascript variables are partialy hoisted but functions are fully hoisted

console.log(name); // this will give undefind beacuse it is variable declared later

console.log(printName()); // this will work :)

//console.log(printName2()); // this will not work beacuse function expressions are treated as variable

var name = "kiran"; // at the time of crational phase it will be var name = undefind later on it will become kiran

function printName() {
  // at the time of crational phase it will fully allowcated memory
  return "kiran";
}

var printName2 = function() {
  // fuction expressions are hoted like a varibale
  return "kiran2";
};

// unique javascript hosting feature
a();

function a() {
  console.log("a");
}

function a() {
  console.log("another a");
}

// in above example function a() gets rehosted
