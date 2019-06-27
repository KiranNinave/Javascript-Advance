// multiple network request using async await
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts"
];

async function fechUsers() {
  try {
    // for using await the right side should always be promise :)
    const result = await Promise.all(
      urls.map(url => {
        return fetch(url)
          .then(response => response.json())
          .catch(console.log);
      })
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
