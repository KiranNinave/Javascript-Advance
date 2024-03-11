var name = "kiran";

function printName() {
  console.log(name); // this will print undefied beacuse every function call involves creational and execution phase means variable and function are get rehosted for every function call
  var name = "ninave";
  console.log(name);
}

printName();
