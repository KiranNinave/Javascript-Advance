// inheritance in javascript flollows prototyple inheritance
// its not the same inheritance that happends in java
// in java classes is get inherited
// in javascript object is get inherited
// in java classes is get inherited so object is get copied so its less memory efficient
// in javascript even object get inherited but they maintian protoyple chain so they share method not copy so its more memory efficient

class PubgPlayer {
  constructor(name, gun) {
    this.name = name;
    this.gun = gun;
  }
  attack() {
    return `${this.name} attack with ${this.gun}`;
  }
}

class Human extends PubgPlayer {
  constructor(name, gun, rp) {
    super(name, gun);
    this.rp = rp;
  }
  getRp() {
    return this.rp;
  }
}

class Bot extends PubgPlayer {}

const player1 = new Human("kiran", "AWM", "30");
const bot1 = new Bot("bot1", "M24");

console.log(player1);
console.log(bot1);

console.log(player1.attack());
console.log(player1.getRp());

console.log(player1 instanceof Human); // true  (note: objects are inherited and functions are share using prototyple inheritance so protoyple chain maintained! :) )
console.log(player1 instanceof PubgPlayer); // true
