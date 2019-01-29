const mongoose = require('mongoose')

const vampireSchema = new mongoose.Schema({
  name: {type: String, 
  required: true	
  },
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Date, //new Date(1971, 2, 13, 7, 47),
  loves: [String],
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: 0
  }
})

//vampire Model
let vampire = mongoose.model('Vampire', vampireSchema)

vampire.create([{name:'viktor', gender:'m', hair: 'black'},
 {name:'samiel', gender:'m', hair: 'black'}, 
 {name:'natash',gender:'f', hair: 'black'}, 
 {name:'gloria', gender:'f', hair: 'blue'}])

// vampire.find({gender:'f'})

module.exports = vampire
