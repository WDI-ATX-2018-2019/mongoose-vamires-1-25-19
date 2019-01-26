// 1. Require your node modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const vampire = require('./models/vampire')
const port = 5000
let app = express()
// 2. Require your model (and possibly your extra data source);
let vampires = require('./populateVampires.js')
// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/')
// 4. Open your mongoose connection
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
vampire.collection.insertMany(vampires, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});
// ### Add some new vampire data
let newVampires = [{
	name: 'Jules Camarillo',
    dob: new Date(156, 7, 7, 22, 10),
    hair_color: 'red',
    eye_color: 'blue',
    loves: ['Chelsea Fc', 'Filet Mignon','Da Beach'],
    location: 'Austin,Texas',
    gender: 'M',
    victims: 200
	},
	{
	name: 'Freddy Addams',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'black',
    eye_color: 'blue',
    loves: [' shirtsleeves', ' collars', ' in   rotting mansions', 'Louis'],
    location: 'Paris, France',
    gender: 'm',
    victims: 199
	},
	{
	name: 'Yolanda Ricks',
    dob: new Date(1700, 11, 9, 18, 22),
    hair_color: 'Auburn',
    eye_color: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'London, England',
    gender: 'f',
    victims: 215
	},
	{
	name: 'Adam Pacman',
    dob: new Date(1999, 11, 9, 18, 44),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['beach walks', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324
	}
]
vampire.insertMany(newVampires,function(err,docs) {});
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
app.listen(port, ()=>{
	console.log("Onnnn Son")
})