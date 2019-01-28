// 1. Require your node modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const vampireData = require('./populateVampires.js')
let app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire')
// 3. Connect your database and collection name
mongoose.connect(`mongodb://localhost:27017/vampire-app`, { useNewUrlParser: true })
    .then(() => {
        // console.log success message if the .connect promise returns successful (resolve)
        console.log('Database connection successful')
    })
    // console.logs error message if the .connect promise returns an error (reject)
    .catch(err => {
        console.error(`Database connection error: ${err.message}`)
    })
// 4. Open your mongoose connection
let db = mongoose.connection // <this one took me a while to figure out!!
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {


    /////////////////////////////////////////////////


    //Write your answers to add, query, update, remove, and Hungry for More below.

    // Note: Remember to close your connection after you add, update, remove from your database
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    // INSERT USING MONGOOSE
    // ### Add the vampire data that we gave you
    // Vampire.collection.insertMany(vampireData, (err, data) => {
    //   console.log("added provided vampire data")
    //   mongoose.connection.close();
    // });
    // ### Add some new vampire data

    // Vampire.create({
    //     name: "Claire Redfield",
    //     hair_color: "maroon",
    //     eye_color: "blue",
    //     dob: new Date(1979, 1, 1, 7, 47),
    //     loves: ['knives', 'sherry'],
    //     location: 'Raccoon City, Somewhere, US',
    //     gender: 'f',
    //     victims: 121
    // }, {
    //     name: "Jill Valentine",
    //     hair_color: "brown",
    //     eye_color: "hazel",
    //     dob: new Date(1974, 1, 1, 7, 47),
    //     loves: ['knives', 'Chris'],
    //     location: 'Raccoon City, Somewhere, US',
    //     gender: 'f',
    //     victims: 121
    // }, {
    //     name: "Leon Kennedy",
    //     hair_color: "dirty blonde",
    //     eye_color: "green",
    //     dob: new Date(1977, 1, 1, 7, 47),
    //     loves: ['rifles', 'Claire'],
    //     location: 'Raccoon City, Somewhere, US',
    //     gender: 'm',
    //     victims: 121
    // }, {
    //     name: "Chris Redfield",
    //     hair_color: "brown",
    //     eye_color: "blue",
    //     dob: new Date(1973, 1, 1, 7, 47),
    //     loves: ['guns', 'Jill'],
    //     location: 'Raccoon City, Somewhere, US',
    //     gender: 'm',
    //     victims: 121
    // })
    // .then(()=> {
    // 	console.log("Four new vampires added successfully")
    // 	mongoose.connection.close();

    // })
    // .catch(error => {
    // 	console.log(`Error adding vampires: ${error.message}`)
    // 	mongoose.connection.close();
    // })


    /////////////////////////////////////////////////
    // ## QUERYING
    /////////////////////////////////////////////////
    // ### Select by comparison

// Read: all the vampires that that are females
    // Vampire.find({ gender: 'f' }, (error, vampire) => {
    //     if (error) return handleError(error)
    //     console.log('%s', vampire)
    //     mongoose.connection.close();
    // })

// Read: all vampires that have greater than 500 victims
    // Vampire.find((error, vampire) => {
    //     if (error) return handleError(error)
    //     console.log('%s', vampire)
    //     mongoose.connection.close();
    // }).
    // where('victims').
    // gt(500)

// Read: all vampires that have fewer than or equal to 150 victims
	// Vampire.find((error, vampire) => {
	// 	if (error) return handleError(error)
	// 		console.log(vampire)
	// 	mongoose.connection.close();
	// }).
	// where('victims').
	// lte(150)

// Read: all vampires that have a victim count is not equal to 210234
	// Vampire.find((error, vampire) => {
	// 	if (error) return handleError(error)
	// 		console.log(vampire)
	// 	mongoose.connection.close();
	// }).
	// where('victims').
	// ne(210234)

// Read: all vampires that have greater than 150 AND fewer than 500 victims
	// Vampire.find((error, vampire) => {
	// 	if (error) return handleError(error)
	// 		console.log(vampire)
	// 	mongoose.connection.close();
	// }).
	// where('victims').
	// gt(150).
	// lt(500)

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
});