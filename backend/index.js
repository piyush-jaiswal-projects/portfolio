const express = require('express')
const { log } = require('console');
const axios = require('axios')
const url = 'https://dev.to/api/articles/me'
const cors =  require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

// Allow Cross-Origin requests
const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'PUT, POST, GET, DELETE, PATCH, OPTIONS', // Allowed methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Allowed headers
    credentials: true,
    maxAge: 800,
  };
  
  app.use(cors(corsOptions));

const port = 7001;
const apiKey = "qgAaSN1FJw1RNtct8UF97t5t";

app.get('/', (req, res) => {
  res.send("<h1>Portfolio Server</h1>")
})


app.get('/articles', (req, res) => {
    axios.get(url, {
        headers: {
          'api-key': apiKey
        }
      })
        .then(response => {
          res.send(response.data);
        })
        .catch(error => {
            console.log(error);
          res.status(500).json({ error: 'Error fetching articles' });
        });
});
    

app.listen(port, () => {
    console.log("Server Started On " + port);
})

