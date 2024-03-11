function sayName() {
  console.log("sayName");
  return function findName() {
    console.log("findName");
    return function printName() {
      console.log("printName");
      return "kiran";
    };
  };
}

console.log(sayName()); // return function

console.log(sayName()()); // return function

console.log(sayName()()()); // return function
