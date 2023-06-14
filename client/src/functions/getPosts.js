import { blogAPIKey } from "../data";

function getPosts() {
    fetch('https://dev.to/api/articles/me', {
  headers: {
            'api-key': blogAPIKey
  }
})
  .then(response => response.json())
  .then(data => {
    // Handle the returned data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
}


export default getPosts;