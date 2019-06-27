// fetching multiple urls using promise
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts"
];

Promise.all(
  urls.map(url => {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error));
  })
)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// note: please run above example in browser
