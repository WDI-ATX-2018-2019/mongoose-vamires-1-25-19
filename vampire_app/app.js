// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
// 3. Connect your database and collection name
let vampires = require('./populateVampires.js');
// 4. Open your mongoose connection
mongoose.connect('mongodb://localhost:27017/');
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
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
//**********************************************
Vampire.insertMany(
	[
		{
			name: 'One',
			hair_color: 'One Hair',
			eye_color: 'One Eye',
			dob: new Date(),
			loves: ['One Loves'],
			location: 'One Location',
			gender: 'One Gender',
			victims: 1
		},
		{
			name: 'Two',
			hair_color: 'Two Hair',
			eye_color: 'Two Eye',
			dob: new Date(),
			loves: ['Two Loves'],
			location: 'Two Location',
			gender: 'Two Gender',
			victims: 2
		},
		{
			name: 'Three',
			hair_color: 'Three Hair',
			eye_color: 'Three Eye',
			dob: new Date(),
			loves: ['Three Loves'],
			location: 'Three Location',
			gender: 'Three Gender',
			victims: 3
		},
		{
			name: 'Four',
			hair_color: 'Four Hair',
			eye_color: 'Four Eye',
			dob: new Date(),
			loves: ['Four Loves'],
			location: 'Four Location',
			gender: 'Four Gender',
			victims: 4
		}
	],
	error => {
		console.log(error);
	}
);
//***************************************************
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
function logVampires(vampire) {
	for (let item of vampire) {
		console.log(item.name);
	}
}
Vampire.find({ gender: 'f' }).then(vampire => {
	console.log('****************Females**********************');
	logVampires(vampire);
});
Vampire.find({ victims: { $gt: 500 } }).then(vampire => {
	console.log('*******************Victims>500*******************');
	logVampires(vampire);
});
Vampire.find({ victims: { $lte: 120 } }).then(vampire => {
	console.log('****************Victims<=120*********************');
	logVampires(vampire);
});
Vampire.find({ victims: { $ne: 210234 } }).then(vampire => {
	console.log('*****************Victims!=210234*********************');
	logVampires(vampire);
});

Vampire.find({
	$and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }]
}).then(vampire => {
	console.log(
		'*******************Victims>150&&Victims<500*******************'
	);
	logVampires(vampire);
});

// /////////////////////////////////////////////////
// // ### Select by exists or does not exist
Vampire.find({
	title: { $exists: true }
}).then(vampire => {
	console.log('****************Vampires With Title***********************');
	logVampires(vampire);
});
Vampire.find({
	victims: { $exists: false }
}).then(vampire => {
	console.log('*******************No Victims********************');
	logVampires(vampire);
});
Vampire.find({
	$and: [{ title: { $exists: true } }, { victims: { $exists: false } }]
}).then(vampire => {
	console.log('*****************Title and No Victims**********************');
	logVampires(vampire);
});
Vampire.find({
	$and: [{ victims: { $exists: true } }, { victims: { $gt: 1000 } }]
}).then(vampire => {
	console.log(
		'*****************Victims Exists and > 1000**********************'
	);
	logVampires(vampire);
});
// ///
// /////////////////////////////////////////////////
// // ### Select with OR
Vampire.find({
	$or: [
		{ location: 'New York, New York, US' },
		{ location: 'New Orleans, Louisiana, US' }
	]
}).then(vampire => {
	console.log(
		'*****************Location = New York or New Orleans**********************'
	);
	logVampires(vampire);
});
Vampire.find({
	$or: [{ loves: 'brooding' }, { loves: 'being tragic' }]
}).then(vampire => {
	console.log(
		'*****************Loves Brooding or Being Tragic**********************'
	);
	logVampires(vampire);
});
Vampire.find({
	$or: [{ victims: { $gt: 1000 } }, { loves: 'marshmallows' }]
}).then(vampire => {
	console.log(
		'*****************Loves marshmallows or Victims>1000**********************'
	);
	logVampires(vampire);
});
Vampire.find({
	$or: [{ hair_color: 'red' }, { eye_color: 'green' }]
}).then(vampire => {
	console.log(
		'*****************Hair = Red or Eyes = Green**********************'
	);
	logVampires(vampire);
});

// /////////////////////////////////////////////////
// //### Select objects that match one of several values
Vampire.find({
	$or: [{ loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' }]
}).then(vampire => {
	console.log(
		'*****************Loves Frilly Shirtsleeves or Frilly Collars**********************'
	);
	logVampires(vampire);
});
Vampire.find({
	loves: 'brooding'
}).then(vampire => {
	console.log('*****************Loves Brooding**********************');
	logVampires(vampire);
});
Vampire.find({
	$or: [
		{ loves: 'appearing innocent' },
		{ loves: 'trickery' },
		{ loves: 'lurking in rotting mansions' },
		{ loves: 'R&B music' }
	]
}).then(vampire => {
	console.log(
		'*****************Innocent, Trickery, Lurkin or R&B**********************'
	);
	logVampires(vampire);
});
Vampire.find({
	$and: [
		{ loves: { $nin: ['top hats', 'virgin blood'] } },
		{ loves: 'fancy cloaks' }
	]
}).then(vampire => {
	console.log('*****************NIN**********************');
	logVampires(vampire);
});
// /////////////////////////////////////////////////
// //### Negative Selection
Vampire.find({
	$and: [{ eye_color: { $nin: ['brown'] } }, { loves: 'ribbons' }]
}).then(vampire => {
	console.log(
		'*****************NIN Brown Eyes, Ribbons**********************'
	);
	logVampires(vampire);
});
Vampire.find({
	location: { $nin: ['Rome, Italy'] }
}).then(vampire => {
	console.log('*****************Not From Rome**********************');
	logVampires(vampire);
});
Vampire.find({
	loves: {
		$nin: [
			'fancy cloaks',
			'frilly shirtsleeves',
			'appearing innocent',
			'being tragic',
			'brooding'
		]
	}
}).then(vampire => {
	console.log('*****************Doesnt Love Anything**********************');
	logVampires(vampire);
});
Vampire.find({
	victims: { $lte: 200 }
}).then(vampire => {
	console.log('*****************Victims<=200**********************');
	logVampires(vampire);
});
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // ## REPLACE
Vampire.replaceOne(
	{
		name: 'Claudia'
	},
	{
		name: 'Eve'
	}
).then(vampire => {
	console.log('******************Data Replaced*******************');
	console.log(vampire);
});
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // ## UPDATE
Vampire.findOneAndUpdate(
	{
		name: 'Eve'
	},
	{
		$set: {
			name: 'moniker',
			gender: 'm'
		}
	}
).then(vampire => {
	console.log('**********************Update Data*********************');
	console.log(vampire);
});
Vampire.updateMany(
	{
		gender: 'f'
	},
	{
		$set: {
			gender: 'fems'
		}
	}
).then(vampire => {
	console.log(
		'**********************Update Data on Females*********************'
	);
	console.log(vampire);
});
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // ## REMOVE
Vampire.findOneAndDelete({
	hair_color: 'brown'
}).then(vampire => {
	console.log('**********************Deleted Brown*********************');
	console.log(vampire);
});
Vampire.deleteMany({
	eye_color: 'blue'
}).then(vampire => {
	console.log('**********************Deleted Blue Eyes*********************');
	console.log(vampire);
});
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // ## HUNGRY FOR MORE
// /////////////////////////////////////////////////
