// 1. Require your node modules
const mongoose = require('mongoose')
const Vampire = require('./models/vampire')

// 2. Require your model (and possibly your extra data source);

let vampireData = require('./populateVampires.js')

// // 3. Connect your database and collection name
// connection stream is passed in here
mongoose.connect('mongodb://localhost:27017/vampires', { useNewUrlParser: true })

let database = mongoose.connection

// database.on('error', (error) => {
// 	console.log('OH NO! Database error!')
// 	console.log(error)
// })

// database.on('open', () => {
// 	console.log('Datatbase connected!')
// 	Vampire
// 		.create(vampireData)
// 		.then((data) => {
// 			console.log('Inserted', data)
// 			database.close()
// 		})
// 		.catch((error) => {
// 			console.log('Error', error)
// 			database.close()
// 		})
// 	})

// // 4. Open your mongoose connection

// app.use(bodyParser.urlencoded({extend: true}))
// app.use(bodyParser.json())

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

// Vampire.insertMany(
// 	[{
// 		name: 'Joe',
// 		gender: 'male',
// 		victims: 9999,
// 		hair_color: 'blue',
// 		eye_color: 'blue',
// 		dob: new Date(),
// 		loves: ['food'],
// 		location: 'New York'
// 	},
// 	{
// 		name: 'Susie',
// 		gender: 'female',
// 		victims: 453,
// 		hair_color: 'orange',
// 		eye_color: 'red',
// 		dob: new Date(),
// 		loves: ['baseball'],
// 		location: 'Chicago'
// 	},
// 	{
// 		name: 'Bob',
// 		gender: 'male',
// 		victims: 18,
// 		hair_color: 'green',
// 		eye_color: 'yellow',
// 		dob: new Date(),
// 		loves: ['the beach'],
// 		location: 'San Fransico'
// 	},
// 	{
// 		name: 'Cheryl',
// 		gender: 'female',
// 		victims: 678,
// 		hair_color: 'brown',
// 		eye_color: 'green',
// 		dob: new Date(),
// 		loves: ['silverware'],
// 		location: 'Austin'
// 	}]
// )

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Vampire.find({ gender: 'female' }).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find({ victims: { $gt: 500 }}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find({ victims: { $lte: 150 }}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find( { victims: { $ne: 210234 }}).then(vampire => {
// 	console.log(vampire)
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({ title: { $exists: true}}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find({ victims: { $exists: false}}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find({ $and: [ { title: { $exists: true } }, { victims: { $exists: false } } ]}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find({ $and: [ { victims: { $exists: true } }, { victims: { $gt: 1000 } } ]}).then(vampire => {
// 	console.log(vampire)
// })

/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find( { $or: [ { location: 'New York, New York, US'}, { location: 'New Orleans, Louisiana, US'}]}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find( { $or: [ { loves: 'brooding' }, { loves: 'being tragic' } ]}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find( { $or: [ { victims: { $gt: 1000 } }, { loves: 'marshmallows' } ]}).then(vampire => {
// 	console.log(vampire)
// })

// Vampire.find( { $or: [ { hair_color: 'red'}, { eye_color: 'green' } ]}).then(vampire => {
// 	console.log(vampire)
// })

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
