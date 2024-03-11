function printName(...args) {
  console.log(args); // gives array format arguments
  console.log(arguments); //arguments is the reserve keyword gives object format arguments
}

printName("kiran");
printName("kiran", "ninave");
