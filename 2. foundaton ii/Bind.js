// bind function is came with functions
// bind function is like binding will store function for later on use

const pubgPlayer1 = {
  gun: "AWM",
  health: 100,
  shot: function() {
    this.health = this.health - 70;
  }
};

const pubgPlayer2 = {
  gun: "M416",
  health: 100
};

const awmPlayer2 = pubgPlayer1.shot.bind(pubgPlayer2); //we also can pass parameters, this will return function

awmPlayer2();

console.log(pubgPlayer1);
console.log(pubgPlayer2);
