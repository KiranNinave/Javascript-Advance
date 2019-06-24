// factory functions are the functions that creates objects for us

function CreatePubgPlayer(name, gun) {
  // this one is factory function
  return {
    name: name,
    gun: gun,
    attack: function() {
      return `${this.name} attack with ${this.gun}`;
    }
  };
}

const playerOne = CreatePubgPlayer("player1", "AWM");
console.log(playerOne);

const playerTwo = CreatePubgPlayer("player2", "AKM");
console.log(playerTwo);

// note: the only problem with factory function is that if we want to create 1000 player like this each player
// with there function will store at different mermory locations
// this problem can be overcome by using prototyple inheritance :)
// the main problem is that the attack function is same for each object will get copied in memory for each object
