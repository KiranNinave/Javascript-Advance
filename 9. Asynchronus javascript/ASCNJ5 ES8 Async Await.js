// async await is just syntactical sugar around promise
// async await is build on promise
// note : await should attacked something that returns promise

// promise example
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log(error));

// using async await
async function fechUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
