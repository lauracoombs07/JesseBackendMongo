const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const url = 'mongodb://jesseegbert:jesse1@ds147344.mlab.com:47344/jesseegbertnau';//admin admin123 is the user and pass of the collection
const port = 4000
const cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect('mongodb://jesseegbert:jesse1@ds147344.mlab.com:47344/jesseegbertnau')
    .then(() => console.log('Connected to MongoDB...'))//use debug module
    .catch(err => console.error('Could not connect to MongoDB...', err));


const presentationsSchema = new mongoose.Schema({
    presenter: String,
    year: Number,
    title: String,
    description: String,
    location: String
})
const Presentation = mongoose.model('Presentation', presentationSchema);//get a 'Course' class 
app.use(bodyParser.json())//takes strings and turns them into JSON
app.use(cors())//so I can use 2 local hosts at the same time

// async function createCourse() {
// const course = new Course({
//     name:'Angular Course',
//     author: 'Mosh',
//     tags: ['angular', 'frontend'],
//     isPublished: true
// });

const result = await presentation.save();
console.log(result);
}
async function getPresentations() {

    const presentations = await Presentation
        .find({ author: 'Mosh', isPublished: true })
        .skip()
        .limit(10)
        .sort({ name: 1 })//or ({ name: -1 }) for backward sorted order
        .select({ name: 1, tags: 1 });

    console.log(courses);
}

getCourses();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
