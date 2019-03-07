// 1. Require your node modules
// 2. Require your model (and possibly your extra data source);
const mongoose = require('mongoose');
const server = 'localhost:27017'; 
const databaseName = 'vampire';      
const PORT = 3000;
let Vampire = require('./models/vampire');
let vampireData = require('./populateVampires');

let database = mongoose.connection;
//var collectionWithWriteConcernSet = Vampire.collection("vampires", {j:true})

database.on('error', (error) =>{
	console.log("Database error", error.name);
})

const delay = ms => new Promise(res => setTimeout(res, ms));


function connect() {
	try {
		mongoose.connect(`mongodb://${server}/${databaseName}`, {useNewUrlParser: true});
		console.log("Database connected");
	} 
	catch(error) {
		console.log('Database Connect error', error.name);
	}
}

/*
show dbs
use "db name"
show collections
db.vampires.find()
db.dropDatabase()
//frontend masters
*/

async function writeVampire() {
	let ok = 0;
	//let returnData = "";
	try {
		await Vampire.collection.insertMany(vampireData, (err, data) => {
  			ok = data.result.ok;
  			console.log("added provided vampire data")
  			//console.log(data);
  			//mongoose.connection.close();
		});
		console.log(ok);
		while (!ok) {
			await delay(1);
			console.log(ok);
		} 
	}
	catch(e) {
		console.error('Database create entry error');
	}
}

//find Apple and log its employees
async function queryOne(objName,objQuery,ret1) {
	let ret = "";
	let returnData = "";
	try {
		await objName.find(objQuery,function (err, ret) {
			//console.log(ret)
			if (err) {
				console.error(err);
				returnData = err;
				return err;
			}
  			if (!Array.isArray(ret) || ret.length !== 0) { 
  				//console.log(apple.length)
  				//console.log(apple);
  				//console.log(ret[0][ret1]);
  				returnData = ret[0][ret1];
  				return returnData;
  			}
		});
	}
	catch(e) {
		console.error('Database find error');
	}
	return returnData;
}

async function start() {
	let ret = "";

	//let database = new Database;
	//database.connect();
	await connect();
	
	ret = await queryOne(Vampire,{ name: "Count Chocula" },"hair_color");
	if (ret !== "brown") {
	//Write to the document the model.  Must wait for the write to post complete before reading from it
		await writeVampire();
	}

	//Query Something to test the write above
	ret = await queryOne(Vampire,{ name: "Count Chocula" },"hair_color");
	console.log(ret);
	database.close();


}

start();
//

/*
connect();

database.on('open', async () =>{
	console.log("Database connected");
	try {
		let ok = 0;
		 await Vampire.collection.insertMany(vampireData, (err, data) => {
  			console.log("added provided vampire data")
  			//console.log(data.result.ok);
  			ok = data.result.ok;
  			//mongoose.connection.close();
		});
		console.log(ok);
		while (!ok) {
			await delay(1);
			console.log(ok);
		} 
		let firstVampire = await Vampire.find({ name: "Count Chocula" },function (err, ret) {
			if (err) return console.error(err);
  			console.log(ret);
  			if (!Array.isArray(ret) || ret.length !== 0) { 
  				//console.log(apple.length)
  				//console.log(apple);
  				console.log(ret[0]["hair_color"]);
  			}
		});
	} catch(error){
			console.log("Error", error.name);
			database.close();
		}
})	



*/






// 4. Open your mongoose connection

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






/*

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
*/









/*
database.on('open', () =>{
	console.log("Database connected");
	Vampire
		.create(vampireData)
		.then((data)=>{
			console.log("Inserted ",data);
			database.close();
		})
		.catch((error)=>{
			console.log("Error", error);
			database.close();
		})
})



let Vampire = [];
vampire[0] = new Vampire({


})
Vampire.create(vampires)
	.then((data) => {
		console.log("Added");

	}).catch()

*/