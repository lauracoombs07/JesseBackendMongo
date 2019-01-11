const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const monk = require('monk')
const url = 'mongodb://jesseegbert:jesse1@ds147344.mlab.com:47344/jesseegbertnau';
const cors = require('cors')

const db = monk(url)
db.then(() => {
    console.log('Connected correctly to server')
  })
  
const awards = db.get('awards')//variable can be named anything but needs to call('')exactly what is in the DB

app.use(bodyParser.json())//takes strings and turns them into JSON
app.use(cors())//so I can use 2 local hosts at the same time


// GET method route

app.get('', function (req, res) {
  const award_id = req.param('id');
  const award = req.param('award');
  const year = req.param('year');
  const amount = req.param('amount');  
  res.send(award_id + '' + award + '' + year + '' + amount)
  });
  
//   // POST method route
  app.post('/awards', function (req, res) {
    const result = awards.insert(req.body)
    res.status(200).send(result)
  });

    
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// export default Awards;

