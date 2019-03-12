// 1. Require your node modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const vampireModel = require('../models/vampire')
let app = express()
// 2. Require your model (and possibly your extra data source);
let vampire = require('./populateVampires.js')
// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampires',{ useNewUrlParser: true })
// 4. Open your mongoosbe connection
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
let database = mongoose.connection
database.on('error',(error)=>{
    console.log("error")
    console.log((error))
})
database.on("open",()=>{
	console.log("connected")
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
vampireModel.collection.insertMany(vampires, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});
// ### Add some new vampire data
database.on('open',()=>{
    let vampires = [ new Vampire{

 new Vampires = {
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
vampire.create(newVampires)
vampire.insertMany(newVampires).then( docs => {
	console.log(docs)
})
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
database.on('open',()=>{
    Vampire
    .find({victims: $gte: 1000}})
    .exec()
    .then((vampires)=>{
        console.log("success")
            for(let Vampire in vampires) {
                console.log(vampire)
        }
    })
    .catch((error)=>{
        console.log("error",error.name)
    })
})

/////////////////////////////////////////////////
// ### Select by exists or does not exist
vampireModel.find({title: {$exists: true}})
            .find({victims: {$exists: false}})
.find({title: {$exists: true}} && {victims: {$exists: false}})
/////////////////////////////////////////////////
// ### Select with OR
vampireModel.find().or([{ location: { 'New York, New York, US' }}, { location: { 'New Orleans, Louisiana, US'}}]);
vampireModel.find().or([{ loves: { 'brooding' }}, { loves: { 'being tragic'}}]);
/////////////////////////////////////////////////
//### Select objects that match one of several values
vampireModel.find().or([{ loves: { 'frilly shirtsleeves' }}, { loves: { 'frilly collars'}}]);
vampireModel.find({ loves: { 'brooding' }})
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
// app.listen(port, ()=>{
// 	console.log("Onnnn Son")
// })