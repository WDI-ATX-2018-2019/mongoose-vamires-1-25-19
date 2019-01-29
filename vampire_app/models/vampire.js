const mongoose = require('mongoose')
const vampireArr = require('../populateVampires')

const vampireSchema = new mongoose.Schema({
  name: String,
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Number, //new Date(1971, 2, 13, 7, 47),
  loves: [String, String],
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: Number,
    max: Number
  }
})

//Vampires Model
let vampires = mongoose.model('Vampire', vampireSchema)

//Vampire documents
let vampPack = new vampires()

vampires.collection.insertMany(vampireArr, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});

vampires.create([{name:'viktor', gender:'m', hair: 'black'}, {name:'samiel', gender:'m', hair: 'black'}, {name:'natash',gender:'f', hair: 'black'}, {name:'gloria', gender:'f', hair: 'blue'}])

vampires.find({gender:'f'})

console.log()
module.exports = vampires
