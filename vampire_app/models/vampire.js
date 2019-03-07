//Require Mongoose
let mongoose = require('mongoose');

//Define a schema
//let Schema = mongoose.Schema;
const VampireSchema = new mongoose.Schema({ 
	name: {type: String, 
		required: true },
	hair_color: { type:String, default: "blonde" },
	eye_color: String,
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {type: Number, min: 0}}, 
	{ writeConcern: {
    w: 'majority',
    j: true,
    fsync: true,
    wtimeout: 10000
    }
});

let VampireModel = mongoose.model('vampire', VampireSchema);

module.exports = VampireModel;