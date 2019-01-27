// 1. Require your node modules
const mongoose = require('mongoose')

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js')
const vampireData = require('./populateVampires.js')

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/Vampires', { newUrlParser: true} )

// 4. Open your mongoose connection
database = mongoose.connection
database.on("open", ()=> {
  console.log("Connected")
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireData, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});


// ### Add some new vampire data
Vampire.create({
    name: 'Alucard',
    hair_color: ,
    eye_color: 'blue',
    dob: new Date(1730, 9, 22, 0, 55),
    loves: ['sleep','read', 'blood'],
    location: 'France, Versailles, EU',
    gender: 'm',
    victims: 5
  }, function (err, small) {
  if (err) return handleError(err);
});


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
