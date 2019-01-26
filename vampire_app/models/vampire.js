let mongoose = require('mongoose')
let vampireSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	hair_color: {
		type:String,
		default: "blonde"
	},
	eye_color: String,
	dob: Date,
	loves:[String],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: 0
	}

})

let vampire = mongoose.model('vampire', vampireSchema)

module.exports = vampire