// this is the object that the function is a property of
// by using this keyword methods can access its own objects
// by using this keyword we can share common methods between objects
// this can also be := who called me


function printName() {
  console.log(this == global, this.name);
}

var name = "kiran";
console.log("this", name);
printName(); // op : true undefind/kiran (incase of node / incase of browser, true beacuse printName called with global context)

const obj1 = {
  name: "kiran",
  printName: printName // sharing method
};

const obj2 = {
  name: "ninave",
  printName: printName // sharing method
};

obj1.printName(); // op : false kiran (false beacuse scope changed)

obj2.printName(); // op : false ninave (false beacuse scope changed)
