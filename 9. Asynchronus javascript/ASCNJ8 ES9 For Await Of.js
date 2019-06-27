// for await of loop is awesome feature of es9 by using it we can loop through promises :)
// multiple network request for await of
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts"
];

async function fetchUsers() {
  const promisesArray = urls.map(url => {
    return fetch(url);
  });

  // looping through promises array using for await of
  for await (let response of promisesArray) {
    const data = await response.json();
    console.log(data);
  }
}
