// 1. Require your node modules
// 2. Require your model (and possibly your extra data source);
const mongoose = require('mongoose');
const server = 'localhost:27017'; 
const databaseName = 'vampire';      
const PORT = 3000;
let Vampire = require('./models/vampire');
let vampireData = require('./populateVampires');
var await = require("await");
var async = require("async");
/*
show dbs
use "db name"
show collections
db.vampires.find()
db.dropDatabase()
*/

//console.log(vampireData);


// 3. Connect your database and collection name
class Database {
	constructor() {
    this.connect()
}

	async connect() {
	  try {
	    const response = await mongoose.connect(`mongodb://${server}/${databaseName}`, {useNewUrlParser: true});
	    console.log('Database connection successful');
	  }
	  catch(e) {
	    console.error('Database connection error');
	  }
	}
}

let asyncFunction = function() {
	return new Promise ((resolve,reject) => {
let database = new Database;
	  database.connect;
	  resolve();

	})

}

/*
asyncFunction().then((message,secondmessage) => {
const res =  Vampire.insertMany(vampireData, (err, data) => {
  			console.log("added provided vampire data")
  			//console.log(data);
  			//mongoose.connection.close();
		});



}).then((message,secondmessage) => {
Vampire.find({ name: "Count Chocula" },function (err, ret) {
			if (err) return console.error(err);
  			if (!Array.isArray(ret) || ret.length !== 0) { 
  				//console.log(apple.length)
  				//console.log(apple);
  				console.log(ret[0]["hair_color"]);
  			}
		});
})
*/




;( () => {
        let database = new Database;
	  database.connect;

        //let db = client.db('dbName');
        try {
           const res =  Vampire.insertMany(vampireData, (err, data) => {
  			console.log("added provided vampire data")
  			console.log(res);
  			//mongoose.connection.close();
		});
            res.then( ()=>{  {
           Vampire.find({ name: "Count Chocula" },function (err, ret) {
			if (err) return console.error(err);
  			if (!Array.isArray(ret) || ret.length !== 0) { 
  				//console.log(apple.length)
  				//console.log(apple);
  				console.log(ret[0]["hair_color"]);
  			}
		});
      }
})

           //console.log(`res => ${JSON.stringify(res)}`);
        }
        finally {
            //database.close();
        }
    })()
        .catch(err => console.error(err));







//queryOne(Vampire,{ name: "Count Chocula" },"hair_color");

