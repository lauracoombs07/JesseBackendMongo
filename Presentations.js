const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const monk = require('monk')
const url = 'mongodb://jesseegbert:jesse1@ds147344.mlab.com:47344/jesseegbertnau';//admin admin123 is the user and pass of the collection
const cors = require('cors')
const port = 4000

const db = monk(url)
db.then(() => {
    console.log('Connected correctly to server')
  })
  
const presentations = db.get('presentations')//variable can be named anything but needs to call('')exactly what is in the DB
const publications = db.get('publications')//
app.use(bodyParser.json())//takes strings and turns them into JSON
app.use(cors())//so I can use 2 local hosts at the same time


// GET method route

app.get('/presentations', async function (req, res) {
  const result = await presentations.find({})
  res.status(200).send(result)
  });
  
//   // POST method route
  app.post('/presentations', function (req, res) {
    const result = presentations.insert(req.body)
    res.status(200).send(result)
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))




// export default presentations;
