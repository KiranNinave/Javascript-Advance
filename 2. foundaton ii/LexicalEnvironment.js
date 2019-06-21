// the lexical environment stands for the scope in wich we are in

function sayName() {
  function printName() {
    console.log("my name is : ");
  }
  console.log("kiran");
}

sayName(); // sayName() function is in gblobal lexical environment so it will work
// printName(); this will not work beacuse printName is in sayName's lexical environment
