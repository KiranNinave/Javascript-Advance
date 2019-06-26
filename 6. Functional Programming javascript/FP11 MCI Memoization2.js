// memoization + closure = super power :)
// the only problem with memoization1 is that the cache object is live inside the globle scope and we should't do that
// so we can solve this problem using closure property of javascript

function multiply(n) {
  console.log("long time"); // consider it takes long time for calculation
  return 2 * n;
}

function memoization() {
  const cache = {};
  return function(n) {
    if (n in cache) {
      // here we are using object as hashtable
      return cache[n];
    }
    const result = multiply(n);
    cache[n] = result; // here we are using object as hashtables
    return result;
  };
}

const memoized = memoization(); // using closure property
console.log(memoized(4));
console.log(memoized(4)); // returned from cache :)
