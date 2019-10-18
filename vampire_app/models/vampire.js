let mongoose = require('mongoose');
let VampireSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	hair_color: {
		type: String,
		default: 'blonde'
	},
	eye_color: String,
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: 0
	},
	title: String
});

let vampire = mongoose.model('vampire', VampireSchema);

module.exports = vampire;
