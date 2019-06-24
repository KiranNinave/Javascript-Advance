// ES6 classes are syntactical sugur
// even it sound class its not real class like java programming have :( (its like sudo class)
// undernith the hood its follow prototyple inheritance model ( factory functions ) but in more efficient and mainatainable way :)
// in javascript class are object (funny thing...)

class PubgPlayer {
  constructor(name, gun) {
    this.name = name;
    this.gun = gun;
  }
  attack() {
    // this function is get share with prototyple inheritance
    return `${this.name} attack with ${this.gun}`;
  }
}

console.log(PubgPlayer); // output : function (constructor function)

const player1 = new PubgPlayer("player1", "AWM");
console.log(player1); // output : { name: 'player1', gun: 'AWM' } note: attack function is not there because attack function is get share with prototyple inheritance
console.log(player1.attack());
