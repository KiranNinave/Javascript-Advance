// by using call and apply method we can borrow another objects methods
// call and apply methods are came with functions
// call and apply methods work same the only differnce is that apply method accept functional parameters in array

const pubgPlayer1 = {
  gun: "AWM",
  health: 100,
  shot: function(reduce) {
    this.health = this.health - reduce;
  }
};

const pubgPlayer2 = {
  gun: "M416",
  health: 100
};

pubgPlayer1.shot.call(pubgPlayer2, 70); // or pubgPlayer1.shot.apply(pubgPlayer2, [70]);
// here player2 borrows player1 methods
console.log(pubgPlayer1);
console.log(pubgPlayer2);
