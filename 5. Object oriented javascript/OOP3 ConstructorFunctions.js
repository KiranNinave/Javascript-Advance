// constructor functions are the special type of function that return the objects using new keyword
// constructor functions are function so they give access to prototype property
// note: prototype methods are unique to the function not every object support prototype property in javascript
// the __proto__ pointer of  objects that created by constructor functions are points to the prototype method of constructor function
// so the prototype methods on constructor functions are commonly share among all of the objects

function CreatePubgPlayer(name, gun) {
  // note: it is naming convension in javascript that starting latter of constructor function should be capital case
  this.name = name; // this keyword make it constructor function
  this.gun = gun;
  // we are not adding methods here because it will get copied by each objects so we add methods inside prototype property to share it among the objects
}

CreatePubgPlayer.prototype.attack = function() {
  // this method will share among all of the objects
  return `${this.name} attack with ${this.gun}`;
};

const player1 = new CreatePubgPlayer("player1", "AWM"); // note: without new keyword constructor functions will not work
console.log(player1);
console.log(player1.attack());
console.log(player1.__proto__); // __proto__ pointing to the prototype of constructor function

// note : this one is oleder aproach of doing things and this is not proper way now :(
