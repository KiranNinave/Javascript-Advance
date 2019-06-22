function shot(damage, health) {
  return health - damage;
}

const AWMPlayer = shot.bind(this, 70); // passing only one parameter so damage will set to 70
const M416Player = shot.bind(this); // here this keyword refer to global scope because both AWMPlayer and M416Player are in global scope

console.log(AWMPlayer(100));
console.log(M416Player(40, 100));
