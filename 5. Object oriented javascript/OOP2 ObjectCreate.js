// the solution of problem in OOP1 FactoryFunction.js
// we can share common method using this keyword and Prototyple inheritance using Object.create() method

const attack = {
  // we create object because object.create method use objects for prototyple inheritance
  attack: function() {
    return `${this.name} attack with ${this.gun}`;
  }
};

function CreatePubgPlayer(name, gun) {
  let pubgPlayer = Object.create(attack); // prototyple inheritance
  pubgPlayer.name = name;
  pubgPlayer.gun = gun;
  return pubgPlayer;
}

const player1 = CreatePubgPlayer("player1", "AWM");
console.log(player1);
console.log(player1.attack());
console.log(player1.__proto__); // no multiple copies of attack function the attack function is get share using prototyple inheritance

// note : only one copy of attack function is get share with all object so its memory efficient
// note: but this is not proper way to do object oriented programming :(
