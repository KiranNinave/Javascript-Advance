// the commonjs is a way to include js files in our code
// the node hevely use commonjs in its code
// commonjs works synchronusly so it's sutaible for the server
// commonjs in not sutaible for browsers because including large js file synchronusly will take time
// the avdatage of commonjs over module pattern is that scope of files is maintained, we can only interact with variables that we exports :)

const module1 = require("./Module1");
const module2 = require("./Module2");

console.log(module1);
console.log(module2);
