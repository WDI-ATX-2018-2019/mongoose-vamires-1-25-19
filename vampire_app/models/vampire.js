
let mongoose = require('mongoose')

let VampireSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String
	},
	victims: {
		type: Number,
		min: 0
	},
	hair_color: {
		type: String,
		default: 'blonde'
	},
	eye_color: {
		type: String
	},
	location: {
		type: String
	},
	loves: {
		type: [String]
	},
	dob: {
		type: Date
	},
	title: {
		type: String
	}
})

let VampireModel = mongoose.model('vampire', VampireSchema)

module.exports = VampireModel