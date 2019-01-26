// 1. Require your node modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Vampire = require('./models/vampire');
const PORT = 3000;
let app = express();
// 2. Require your model (and possibly your extra data source);
let vampires = require('./populateVampires.js');
// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/');
// 4. Open your mongoose connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
app.get('/', (request, response) => {
	Vampire.find().then(vampire => {
		response.json(vampire);
	});
});
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
for (let i = 0; i < vampires.length; i++) {
	let modeledVampire = new Vampire(vampires[i]);
	modeledVampire.save();
}
// ### Add some new vampire data

app.post('/new', (request, response) => {
	let newVampire = new Vampire({
		name: request.body.name,
		hair_color: request.body.hair_color,
		eye_color: request.body.eye_color,
		dob: request.body.dob,
		loves: request.body.loves,
		location: request.body.location,
		gender: request.body.gender,
		victims: request.body.victims
	});

	newVampire.save().then(vampire => {
		response.json(vampire);
	});
});
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
app.get('/:name', (request, response) => {
	Vampire.find({ name: request.params.name }).then(vampire => {
		response.json(vampire);
	});
});
/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
app.put('/replace/:name', (request, response) => {
	Vampire.replaceOne(
		{
			name: request.params.name
		},
		{
			name: request.body.name,
			hair_color: request.body.hair_color,
			eye_color: request.body.eye_color,
			dob: request.body.dob,
			loves: request.body.loves,
			location: request.body.location,
			gender: request.body.gender,
			victims: request.body.victims
		}
	).then(vampire => {
		response.json(vampire);
	});
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
app.put('/edit/:name', (request, response) => {
	console.log(request.params.name);
	Vampire.findOneAndUpdate(
		{
			name: request.params.name
		},
		{
			$set: {
				name: request.body.name,
				hair_color: request.body.hair_color,
				eye_color: request.body.eye_color,
				dob: request.body.dob,
				loves: request.body.loves,
				location: request.body.location,
				gender: request.body.gender,
				victims: request.body.victims
			}
		}
	).then(vampire => {
		response.json(vampire);
	});
});
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
app.listen(PORT, () => {
	console.log('Server running on port: ' + PORT);
});
