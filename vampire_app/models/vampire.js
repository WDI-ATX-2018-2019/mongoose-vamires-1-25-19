
const mongoose = require('mongoose')

const VampireSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
		},
	hair_color: {
		type: String,
		default: 'Blonde'
		},
	eye_color: String,
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: 1,
		max: 1000000
		}
})


const VampireModel = mongoose.model('Vampire', VampireSchema)

module.exports = VampireModel

