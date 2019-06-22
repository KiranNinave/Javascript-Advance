// note type coercion is a complex issue in javascript beacuse its wierd :(

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// == use coercion and then compaire
// == dont use coercion and compaire
// note : coercion is type conversion in order to compare bothe the sides

// some wierd cases
console.log(0 == false); // true
console.log(1 == true); // true
console.log("0" == false); // true
console.log("1" == true); // true
console.log(0 === false); // false
console.log(1 === true); // false
console.log("0" === false); // false
console.log("1" === true); // false
