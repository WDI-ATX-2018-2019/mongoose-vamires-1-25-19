// 1. Require your node modules

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = 9000

// 2. Require your model (and possibly your extra data source);

const VampireModel = require('./model/VampireModel.js')
const VampireData = require('./model/populateVampires.js')

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/Vampire', { useNewUrlParser: true })
/*app.listen(PORT,()=>{
    console.log('Listening at Port: '+ PORT)
})
// 4. Open your mongoose connection
app.get('/',(request,response)=>{
    VampireModel
        .find()
        .then((Vampire)=>{
            response.json(Vampire)
        })
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.


app.get('/addAllVampire',(request,response)=>{
    for(let i = 0; i < VampireData.length - 1; i++){
        let vampire = new VampireModel(VampireData[i])
    vampire
        .save()
        .then((savedVampire)=>{
            response.json(savedVampire)
        })
    }
})

*/


let newVampireData = [{
        name: 'Jeff',
        hair_color: 'Green',
        eye_color: 'Blue',
        dob: new Date(1855, 5, 14, 4, 27),
        loves: ['hot dogs', 'hamburgers'],
        location: 'United Kingdom',
        gender: 'm',
        victims: 3000000
    },
    {
        name: 'Ryan',
        hair_color: 'Blue',
        eye_color: 'Green',
        dob: new Date(1325, 10, 7, 8, 46),
        loves: ['Fire', 'corn dogs'],
        location: 'Old town',
        gender: 'm',
        victims: 12
    },
    {
        name: 'Jessica',
        hair_color: 'Orange',
        eye_color: 'Red',
        dob: new Date(1255, 4, 21, 3, 16),
        loves: ['Cheese burgers', 'hamburgers'],
        location: 'Hell',
        gender: 'f',
        victims: 9000
    },
    {
        name: 'Whitney',
        hair_color: 'Black',
        eye_color: 'Gray',
        dob: new Date(2155, 10, 28, 5, 57),
        loves: ['Death metal', 'children'],
        location: 'Neo Toyko',
        gender: 'f',
        victims: 123405930
    }

]



// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// mongoose.connection.on('open',()=>{
//     VampireModel.create(VampireData)
//     .then((result)=>
//         {console.log(result)
//         })
// })
// ### Add some new vampire data
//VampireModel.create(newVampireData)
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
//VampireModel.find({gender:'f'}).then((result)=>{console.log(result)})
//VampireModel.find({victims: {$gt:500}}).then((result)=>{console.log(result)})
// VampireModel.find({victims:{$lte:150}}).then((result)=>{console.log(result)})
// VampireModel.find({victims:{$ne:210234}}).then((result)=>{console.log(result)})
// VampireModel.find({$and: [{victims:{ $gt : 150}},{victims:{$lte:500} }] }).then((results)=>{console.log(results)})
/////////////////////////////////////////////////
// ### Select by exists or does not exist
//VampireModel.find({ title: {$exists : true}}).then((result)=>{console.log(result)}) //MISSING TITLED VAMPIRES 
// VampireModel.find({victims: {$exists: false}}).then((result)=>{console.log(result)})
// VampireModel.find({ victims: { $exists: false } } && { title: { $exists: false } }).then((result => { console.log(result) }))
//VampireModel.find({victims:{ $exist: true}} && {victims: {$gt:1000}}).then((result)=>{console.log(result)})

/////////////////////////////////////////////////
// ### Select with OR
// VampireModel.find().or(
//     [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }]).exec().then((result)=>{console.log(result)})
// VampireModel.find().or([{loves:{$in:'brooding'}},{loves:{$in:'being tragic'}}]).exec().then((result)=>{console.log(result)})
// VampireModel.find().or([{victims:{$gt:1000}},{loves:{$in:'marshmallows'}}]).exec().then((result)=>{console.log(result)})
// VampireModel.find().or([{eye_color: 'red'},{eye_color:'green'}]).exec().then((result)=>{console.log(res)})

/////////////////////////////////////////////////
//### Select objects that match one of several values
// VampireModel.find().or([{loves:{$in:'frilly shirtsleeves'}},{loves:{$in:'frilly collars'}}]).then((result)=>{console.log(result)})
// VampireModel.find().or([{loves:{$in:'brooding'}}]).then((result)=>{console.log(result)})
VampireModel.find().or([{loves:{$in:'appearing innocent'}},{loves:{$in:'trickery'}},{loves:{$in:'lurking in rotting mansions'}},{loves:{$in:'R&B music'}}]).then((result)=>{console.log(result)})
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