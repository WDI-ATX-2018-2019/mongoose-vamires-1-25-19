// 1. Require your node modules
const mongoose = require('mongoose')

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js')
const vampireData = require('./populateVampires.js')

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/Vampires', { useNewUrlParser: true} )

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
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: new Date(1730, 9, 22, 0, 55),
    loves: ['sleep','read', 'blood'],
    location: 'France, Versailles, EU',
    gender: 'm',
    victims: 5
  }, function (err, name) {
  if (err) return handleError(err);
});



/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

 // Find all the vampires that that are females:
 		db.vampires.find({ gender: "f" })

 // Have greater than 500 victims:
 		db.vampires.find({ victims: {$gt: 500} })

 // Have fewer than or equal to 150 victims:
 		db.vampires.find({ victims: {$lte: 150} })

 // Have a victim count is not equal to 210234:
 		db.vampires.find({ victims: {$ne: 210234} })

 // Have greater than 150 AND fewer than 500 victims:
		db.vampires.find({ $and: [{victims: {$gt: 150} }, {victims: {$lt: 500}}] })




/////////////////////////////////////////////////
// ### Select by exists or does not exist
	
 // Have a title property:
 	db.vampires.find({ title: {$exists: true} })
 
 // Do not have a victims property:
 	db.vampires.find({ victims: {$exists: false} })	 

 // Have a title AND no victims:
 	db.vampires.find({ $and: [{ title: {$exists: true}}, { victims: {$exists: false}}] })
 
 // Have victims AND the victims they have are greater than 1000:
 	db.vampires.find({ $and: [{ victims: {$exists: true}}, {victims: {$gt: 1000}}] })





/////////////////////////////////////////////////
// ### Select with OR

 // Are from New York, New York, US or New Orleans, Louisiana, US:
 	db.vampires.find({ $or: [{location: "New York, New York, US"}, {location: "New Orleans, Louisiana, US"}] })

 // Love brooding or being tragic:
 	db.vampires.find({ $or: [{loves: "brooding"}, {loves: "being tragic"}] })

 // Have more than 1000 victims or love marshmallows:
  	db.vampires.find({ $or: [{victims: {$gt: 1000}}, {loves: "marshmallows"}] })

 // Have red hair or green eyes:
 	db.vampires.find({ $or: [{hair_color: "red"}, {eye_color: "green"}] })





/////////////////////////////////////////////////
//### Select objects that match one of several values

 // Love either frilly shirtsleeves or frilly collars:
 	Article.findOne({ $or: [
 		{ loves: "frilly shirtsleeves" }, 
 		{ loves: "frilly collars" }
 		]}, (err, article)=> {
 			console.log(article);
 	});

 // Love brooding:
 	Article.findOne({ loves: "brooding" }, 
  		(err, article)=> {
 			console.log(article);
 	});
 
 // Love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music:
 	Article.findOne({ $or: [
 		{ loves: "appearing innocent" }, 
 		{ loves: "trickery" },
 		{ loves: "lurking in rotting mansions"},
 		{ loves:  "R&B music"}
 		]}, (err, article)=> {
 				console.log(article);
 			}
 	);

 // Love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *:
 	Article.findOne({ $and: [
 		{ loves: "fancy cloaks"}, 
 		{ $nin: [
 			{ loves: "top hats"},
 			{ loves: "virgin blood"}
 			]}
 		]}, (err, article)=>{
 				console.log(article);
 		}
 	);




/////////////////////////////////////////////////
//### Negative Selection
	
	
 // Love ribbons but do not have brown eyes
 	Article.findOne({ $and: [
 		{ loves: "ribbons"},
 		{ eye_color: { $ne : "bown"}}
 	]}, (err, article)=> {
 			console.log(article);
 		}
 	);

 // Are not from Rome
 	Article.finOne({location: { $ne: "Rome"}}, 
 		(err, article)=> {
 			console.log(article);
 		});

 // Do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
 	db.vampires.find({$nin: [
 		{loves: "fancy cloaks"},
 		{loves: "frilly shirtsleeves"},
 		{loves: "appearing innocent"},
 		{loves: "being tragic"},
 		{loves: "brooding"}
 		]}
 	)
 		

 // Have not killed more than 200 people





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
