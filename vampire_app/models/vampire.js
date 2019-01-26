const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vampireSchema = new Schema ({
	name: {
		type: String,
		required: true
	}
	hair_color: {
		type: String,
		default: 'blonde'
	},
	eye-color: String,
	dob: Date
	loves: [String],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: 0
	} 
})

let vampireModel = mongoose.model('vampire', vampireSchema)

module.exports = vampireModel
