const mongoose = require('mongoose')

const VampireSchema = new mongoose.Schema({
	name: 'Count Chocula',
	hair_color: 'brown',
	eye_color: 'brown',
	dob: new Date(1971, 2, 13, 7, 47),
	loves: ['cereal','marshmallows'],
	location: 'Minneapolis, Minnesota, US',
	gender: 'm',
	victims: 2
	
})
