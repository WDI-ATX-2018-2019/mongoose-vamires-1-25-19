// 1. Require your node modules
const mongoose = require('mongoose')
const validator = require('validator')
// 2. Require your model (and possibly your extra data source);
const vampire = require('./models/vampires')
let populateVampires = ('./populateVampires')
// 3. Connect your database and collection name
//connecting to connection to string
mongoose.connect('mongodb://localhost:27017/Vampires', { useNewUrlParser: true });
// 4. Open your mongoose connectionvar
// This is happening async
db = mongoose.connection;
// db.once('open', () => {
//     console.log("We're online")
//     vampire.collection.insertMany(populateVampires, (err, data) => {
//         console.log("added provided vampire data")
//     });
// });

db.on('open', ()=>{
	vampire.find()
	.or([{victims: { $gt: 500 }}, {loves: { $in: ['marshmallows']}}])
	.then((vampires)=>{
		console.log("success:\n", vampires)
		mongoose.connection.close()
	})
	.catch((error)=>{
		console.log("error error error!", error.name)
		mongoose.connection.close()
	})
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

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

// module.exports = new VampireDb()