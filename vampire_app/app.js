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
    //  console.log("Four new vampires added successfully")
    //  db.close()

    // })
    // .catch(error => {
    //  console.log(`Error adding vampires: ${error.message}`)
    //  db.close()
    // })


    /////////////////////////////////////////////////
    // ## QUERYING
    /////////////////////////////////////////////////
    // ### Select by comparison

    // Read: all the vampires that that are females
    // // name of collection we are searching through in db
    // Vampire
    // // initiating query
    // .find()
    // // filter query for specific key to use with .gt()
    // .where('victims')
    // // specify/filter min value for victims
    // .gt(500)
    // // make function for 'resolve' returned down the chain of Promises
    // .then( vampires => {
    //     console.log("Success!\nResults:\n", vampires)
    //     // close mongoose.connection to finish query
    //     db.close()
    // })
    // // make function for 'reject' returned down chain of Promises
    // .catch( error => {
    //     console.log("Error: ", error.name)
    //     // close mongoose.connection to finish query
    //     db.close()
    // })

    // Read: all vampires that have greater than 500 victims
    // Vampire
    // .find()
    // .where('victims')
    // .gt(500)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    // Read: all vampires that have fewer than or equal to 150 victims
    // Vampire
    // .find()
    // .where('victims')
    // .lte(150)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    // Read: all vampires that have a victim count is not equal to 210234
    // Vampire
    // .find()
    // .where('victims')
    // .ne(210234)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    // Read: all vampires that have greater than 150 AND fewer than 500 victims
    // Vampire
    // .find()
    // .where('victims')
    // .gt(150)
    // .lt(500)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    /////////////////////////////////////////////////
    // ### Select by exists or does not exist

    // have a title property
    // Vampire
    // .find()
    // .where('title')
    // .exists()
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    // do not have a victims property
    // Vampire
    // .find()
    // .where('victims')
    // .exists(false)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    // have a title AND no victims
    // Vampire
    // .find()
    // .exists('title')
    // .exists('victims', false)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    // have victims AND the victims they have are greater than 1000
    // Vampire
    // .find()
    // .exists('title')
    // .where('victims')
    // .gt(1000)
    // .then(vampires => {
    //     console.log("Success!\n", vampires)
    //     db.close()
    // })
    // .catch(error => {
    //     console.log("Error:\n", error.name)
    // })

    /////////////////////////////////////////////////
    // ### Select with OR

    // are from New York, New York, US or New Orleans, Louisiana, US
    // Vampire
    //     .find()
    //     .or([
    //         { location: 'New York, New York, US' },
    //         { location: 'New Orleans, Louisiana, US' }
    //     ])
    //     .then(vampires => {
    //         console.log("Success:\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })

    // love brooding or being tragic
    // Vampire
    //     .find()
    //     .or([{ loves: { $in: ['brooding'] } }, { loves: { $in: ['being tragic'] } }])
    //     .then(vampires => {
    //         console.log("Success:\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })

    // have more than 1000 victims or love marshmallows
    // Vampire
    //     .find()
    //     .or([
    //         { victims: { $gt: 1000 } },
    //         { loves: { $in: ['marshmallows'] } }
    //     ])
    //     .exec() // <-- not necessary since we are using queries after find that return promises?
    //     .then(vampires => {
    //         console.log("Success:\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })


    // have red hair or green eyes
    // Vampire
    //     .find()
    //     .or([
    //         { hair_color: 'red' },
    //         { eye_color: 'green' }
    //     ])
    //     .then(vampires => {
    //         console.log("Success!\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })


    /////////////////////////////////////////////////
    //### Select objects that match one of several values

    // love either frilly shirtsleeves or frilly collars
    // Vampire
    //     .find()
    //     .where('loves')
    //     .in(['frilly shirtsleeves', 'frilly collars'])
    //     .then(vampires => {
    //         console.log("Success!\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })


    // love brooding
    // Vampire
    //     .find()
    //     .where('loves')
    //     .in(['brooding'])
    //     .then(vampires => {
    //         console.log("Success!\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })

    // love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
    // Vampire
    //     .find()
    //     .where('loves')
    //     .in(['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music'])
    //     .then(vampires => {
    //         console.log("Success!\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })

    // love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
    // Vampire
    //     .find()
    //     .where('loves')
    //     .in(['fancy cloaks'])
    //     .nin(['top hats', 'virgin blood'])
    //     .then(vampires => {
    //         console.log("Success!\n", vampires)
    //         db.close()
    //     })
    //     .catch(error => {
    //         console.log("Error:\n", error.name)
    //         db.close()
    //     })

    /////////////////////////////////////////////////
    //### Negative Selection

    // love ribbons but do not have brown eyes
    Vampire
    .find()
    .where('loves')
    .in(['ribbons'])
    .where('eye_color')
    .ne('brown')
    .then( vampires => {
        console.log("Success!\n", vampires)
        db.close()
    })
    .catch( error => {
        console.log("Error:\n", error.name)
        db.close()
    })

    // .find({"eye_color": {$ne: 'brown'} })

    // are not from Rome

    // do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]

    // have not killed more than 200 people

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