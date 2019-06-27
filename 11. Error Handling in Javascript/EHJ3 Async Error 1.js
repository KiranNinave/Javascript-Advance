// by using catch method we can handle async errors
// note async error handling works differntly on browser and node
// in browser we have silent errors

Promise.resolve("hi")
  .then(response => {
    throw new Error("promise failed!");
  })
  .catch(error => {
    console.log(error.message); // prints promise failed
    return error;
  })
  .then(response => {
    console.log(response.message); // print promise failed ( note: here exception is get catch and it return error so priority is imp )
  });

console.log("hey i am working!"); // this will work

// note error handling in promises are tricky so be carefull
Promise.resolve("outside")
  .then(response => {
    Promise.resolve("inside")
      .then(response => {
        throw new Error("error inside"); // inside then block is generating error
      })
      .catch(error => {
        console.log("inside", error.message); // this will handle error
      });
    // error genrated on inside promise
    return response; // outside response
  })
  .then(response => {
    console.log(response); // this will works
  })
  .catch(error => {
    console.log("outside", error.message); // this will not works because error is handled by inside catch
  });
