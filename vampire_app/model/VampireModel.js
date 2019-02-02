const mongoose = require('mongoose') 	

const VampireSchema = mongoose.Schema({

	  name: {
		  type :String,
		  required : true
	  },

    hair_color : {
      type : String,
      default : 'Blonde'
    },
    eye_color : String,
    dob : {
    	type : Date,
    	required : true
    },
    loves : [String],
    location : String,
    gender : {
  	  type: String,
      required : true
    },
    victims :{
      type : Number,
      min: 0
    }
})

const VampireModel = mongoose.model('Vampire', VampireSchema)

module.exports =  VampireModel


