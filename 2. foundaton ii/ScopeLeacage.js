"use strict"; // this will avoid scope leacage

function printName() {
  name = "kiran"; // this thing is scope leacage it cosider variable crated at global scope
  return name;
}

console.log(printName());

console.log(name); // this will print kiran beacuse of scope leacage
