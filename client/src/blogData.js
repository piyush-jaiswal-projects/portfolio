import axios from 'axios'
var data = [];

await axios.get(process.env.REACT_APP_SERVER_URL + "articles")
        .then((res) => {
            data = res.data;
        })

export default data;