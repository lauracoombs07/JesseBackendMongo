const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const monk = require('monk')
const url = 'mongodb://jesseegbert:jesse1@ds041178.mlab.com:41178/awards';
const cors = require('cors')

const db = monk(url)
db.then(() => {
    console.log('Connected correctly to server')
  })
  
const publications = db.get('publications')//variable can be named anything but needs to call('')exactly what is in the DB

app.use(bodyParser.json())//takes strings and turns them into JSON
app.use(cors())//so I can use 2 local hosts at the same time


// GET method route

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  });
  
//   // POST method route
  app.post('/', function (req, res) {
    const result = publications.insert(req.body)
    res.status(200).send(result)
  });

    
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


export default publications;

