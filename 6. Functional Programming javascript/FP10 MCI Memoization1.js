// Memoization --> caching
// note : in memoization we use objects as hash tables so things are superfast :)

function multiply(n) {
  console.log("long time"); // consider it taking long time for calculation
  return 2 * n;
}

const cache = {}; // making cache in global scope so function can remember it on multiple calles (this thing is problematic check memoization2 for solution)
function memoization(n) {
  if (n in cache) {
    return cache[n]; // using object as hashtables
  }
  const result = multiply(n);
  cache[n] = result; // using objects as hashtables
  return result;
}

console.log(memoization(4));
console.log(memoization(4)); // result returned from cache :)
console.log(memoization(5));
console.log(memoization(5)); // result returned from cache :)
