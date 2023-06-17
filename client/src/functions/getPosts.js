import axios from "axios"

export default function GetPosts() {
    axios.get('http://localhost:7001/articles')
  .then(data => {
    // Handle the returned data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
}
