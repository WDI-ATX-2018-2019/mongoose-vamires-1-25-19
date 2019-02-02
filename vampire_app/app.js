// 1. Require your node modules

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// 2. Require your model (and possibly your extra data source);
const vampires = require('./populateVampires.js')
const vampireModel = require('./models/vampire');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampiremongoose', { useNewUrlParser: true })
let database = mongoose.connection

database.on('error', (error) => {
    console.log("Database error")
    console.log(error)
})
database.on('open', () => {
    console.log("Database connected")
})

// 4. Open your mongoose connection
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
app.post('/addvampires', (request, response) => {
    vampireModel.collection.insertMany(vampires, (err, data) => {
        console.log("added provided vampire data")
        vampireModel.find()
            .then((vampyre) => {
                response.json(vampyre)
            })
    });
});
// ### Add some new vampire data
app.post('/addcustomvampires', (request, response) => {
    let newVampires = [{
            name: 'Happy',
            dob: new Date(1994, 2, 8, 5, 3),
            hair_color: 'strawberry blonde',
            eye_color: 'ocean blue',
            loves: ['the thrill of the hunt', 'Janet Reno'],
            location: 'Newark, New Jersey',
            gender: 'm',
            victims: 12
        },
        {
            name: 'Duke',
            dob: new Date(1818, 5, 8, 3, 6),
            hair_color: 'doo doo brown',
            eye_color: 'hazel',
            loves: ['a good challenge', 'wholesome humor', 'Bobby McFerrin'],
            location: 'Jackson, Mississippi',
            gender: 'unknown',
            victims: 99
        },
        {
            name: 'Bridget',
            dob: new Date(2017, 4, 9, 1, 4),
            hair_color: 'hot pink',
            eye_color: 'white',
            loves: ['Hot Topic', 'Blink182 before Tom Delonge quit', 'cider'],
            location: 'Cincinatti, Ohio',
            gender: 'f',
            victims: 5280
        },
        {
            name: 'Gina The Destroyer',
            dob: new Date(1999, 9, 1, 4, 3),
            hair_color: 'unknown',
            eye_color: 'unknown',
            loves: ['privacy', 'a clean crime scene', 'listerine'],
            location: 'unknown',
            gender: 'f',
            victims: 99999
        }
    ];
    vampireModel.insertMany(newVampires, function(error, docs) {})
    vampireModel.find()
        .then((vampyre) => {
            response.json(vampyre)
        })
});
// /////////////////////////////////////////////////
// // ## QUERYING
// /////////////////////////////////////////////////
// ### Select by comparison
vampireModel.find({ gender: 'f' })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ victims: { $gt: 500 } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ victims: { $lte: 150 } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ victims: { $ne: 210234 } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })


vampireModel.find({ $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })
// /////////////////////////////////////////////////
// // ### Select by exists or does not exist

vampireModel.find({ title: { $exists: true } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ victims: { $exists: false } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ title: { $exists: true } } && { victims: { $exists: false } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ victims: { $exists: true } && { $gt: 1000 } })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })


// /////////////////////////////////////////////////
// // ### Select with OR
vampireModel.find().or([
    { location: 'New York, New York, US'},
    {location: 'New Orleans, Louisiana, US'}
    ])
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })


vampireModel.find().or([
    { loves:  'brooding'  }, 
    { loves:  'being tragic' } 
    ])
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find().or([
    { loves:  'marshmallows' },
    { victims:  {$gt: 1000 }} 
    ])
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find().or([
    { hair_color:  'red' }, 
    { eye_color:  'green' } 
    ])
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

// /////////////////////////////////////////////////
// //### Select objects that match one of several values
vampireModel.find(
    {loves: {$in: 
            ['frilly shirtsleeves', 'frilly collars']
        }})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find(
    {loves: 'brooding'})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find(
    {loves: {$in: 
            ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']
        }})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })




// /////////////////////////////////////////////////
// //### Negative Selection
vampireModel.find({
        $and: [{ eye_color: { $nin: ['brown'] } }, { loves: 'ribbons' }]
    })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({
    location: { $nin: ['Rome, Italy'] }
})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })


vampireModel.find({
        loves: {
            $nin: [
                'fancy cloaks',
                'frilly shirtsleeves',
                'appearing innocent',
                'being tragic',
                'brooding'
            ]
        }
    })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({
        loves: {
            $nin: [
                'fancy cloaks',
                'frilly shirtsleeves',
                'appearing innocent',
                'being tragic',
                'brooding'
            ]
        }
    })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.find({ 
    victims: { $lte:  200  } 
})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // ## REPLACE
vampireModel.findOneAndUpdate(
    { name: 'Claudia' },
    { $set: { name: 'Eva' } }, { new: true })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // ## UPDATE


vampireModel.findOneAndUpdate(
    { name: 'Eva' },
    { $set: { name: 'moniker', gender: 'm' } }, { new: true })
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.updateMany(
    {gender: 'f'},
    {$set: {gender: 'fems'}})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // ## REMOVE
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
vampireModel.findOneAndDelete({
    hair_color: 'brown'})
     .exec()
    .then((resolve) => {
        console.log(resolve)
    })

vampireModel.deleteMany({
    eye_color: 'blue'})
    .exec()
    .then((resolve) => {
        console.log(resolve)
    })

// // ## HUNGRY FOR MORE
// /////////////////////////////////////////////////
// //## Select objects that match one of several values

// /////////////////////////////////////////////////
// //## Negative Selection

// /////////////////////////////////////////////////

// app.listen(9000) * /