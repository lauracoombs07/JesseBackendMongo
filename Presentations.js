const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const monk = require("monk");
const url =
  "mongodb://jesseegbert:jesse1@ds147344.mlab.com:47344/jesseegbertnau"; //admin admin123 is the user and pass of the collection
const cors = require("cors");
const port = 4000;

const db = monk(url);
db.then(() => {
  console.log("Connected correctly to server");
});

const presentations = db.get("presentations"); //variable can be named anything but needs to call('')exactly what is in the DB
const publications = db.get("publications"); //
app.use(bodyParser.json()); //takes strings and turns them into JSON
app.use(cors()); //so I can use 2 local hosts at the same time

// GET method route

app.get("/presentations", async function(req, res) {
  const result = await presentations.find({});
  res.status(200).send(result);
});

app.get("/presentations/:name", async function(req, res){ 
  const result = await presentations.find({"presenter": req.params.name});//.find({},{limit:20},function(e,docs)){
    //     res.json(docs);
    //   })
    // if (!presentation) res.status(404).send("This Presenter cannot be found.");
  res.status(200).send(result);
});

app.get('/presentations/:id', async (req, res) => { 
     await presentations.find({}, (err, presentations) => {
      res.json(presentations)
     })
});
//   // POST method route
app.post("/presentations", function(req, res) {
  const result = presentations.insert(req.body);
  res.status(200).send(result);
});

// PUT OR PATCH method Route

app.put("/presentation/:_id", async (req, res) => {
  console.log(req.params._id)
  await presentation.update(req.params._id);
  // if (!presentation) res.status(404).send("This Presentation cannot be found.");
  // const { error }
  presentation.presenter = req.body.presenter;
  res.send(presentation);
  //res.status(200).send(result)
});

app.delete("/presentations/:_id", async function (req, res) {
  console.log(req.params._id)
     await presentations.remove(req.params._id)
     return res.status(200).send('Deleted')
  });



  app.listen(port, () => console.log(`Example app listening on port ${port}!`));

