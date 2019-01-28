const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useNewUrlParser', true)

const vampireSchema = new Schema({
  name: String,
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Date,
  loves: [String, String],
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: Number,
    max: Number
  }
})

let vampires = mongoose.model('Vampire', vampireSchema)


vampires.find(function (err, vampires) {
  if (err) return console.error(err);
  console.log(vampires);
})

module.exports = vampires