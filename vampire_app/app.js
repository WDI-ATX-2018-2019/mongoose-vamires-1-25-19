// 1. Require your node modules
const mongoose = require('mongoose')
const Vampire = require('./models/vampire')

// 2. Require your model (and possibly your extra data source);

// let vampires = require('./populateVampires.js')

// // 3. Connect your database and collection name

// mongoose.connect('mongodb://localhost:27017/')

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

vampire.insertMany(
	[{
		name: 'Joe',
		age: 456,
		gender: 'male',
		victims: 9999,
		hair_color: 'blue',
		eye_color: 'black',
		dob: 1678,
		loves: 'food',
		location: 'New York'
	},
	{
		name: 'Susie',
		age: 124,
		gender: 'female'
		victims: 453,
		hair_color: 'orange',
		eye_color: 'red',
		dob: 1845,
		loves: 'baseball',
		location: 'Chicago'
	},
	{
		name: 'Bob',
		age: 984,
		gender: 'male'
		victims: 18,
		hair_color: 'green',
		eye_color: 'yellow',
		dob: 1234,
		loves: 'the beach',
		location: 'San Fransico'
	},
	{
		name: 'Cheryl',
		age: 33,
		gender: 'female'
		victims: 678,
		hair_color: 'brown',
		eye_color: 'green',
		dob: 1986,
		loves: 'silverware',
		location: 'Austin'
	}]
)

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
