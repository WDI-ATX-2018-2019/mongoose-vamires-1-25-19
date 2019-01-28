const mongoose = require('mongoose');

let vampireSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hair_color: {
    	type: String,
    	default: 'blonde'
    },
    eye_color: String,
    dob: {
        type: Date,
        default: (new Date())
    },
    loves: [String],
    location: String,
    gender: 'string',
    victims: {
        type: Number,
        min: [0, 'Surely, there must be at least ZERO (0) victims...'] 
    }
})

let vampireModel = mongoose.model('Vampire', vampireSchema)

module.exports = vampireModel