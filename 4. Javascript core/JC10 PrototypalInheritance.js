// javascript follows the prototyple inheritance
// in javascript everything is prototype of object
// the class keyword is syntactical sugaur around this protypical model
// we can check protype using __proto__ option

var dragon = {
  name: "dragon",
  fire: function() {
    console.log("i can fire");
  }
};

var lizzard = {
  name: "lizzard"
};

lizzard.__proto__ = dragon; // here lizzard inherites dragon method (note : never do prototyple inheritance this way look in PrototypeExercise1)

lizzard.fire();

// in protypal inheritance __proto__ is pointer that points to prototype property
// in javascript only functions have prototype property
// prototype property is an object
// arrays and objects do not have prototype property
