// import
const mongoose = require("mongoose");

//configuration file .env
require('dotenv').config();

// define the Url local
// mongoUrl=process.env.Urllocal;

//  variable access using format of process.env.variabe_name
mongoUrl = process.env.UrlMongoDB;

//create connection
mongoose.connect(mongoUrl);

//create connection object
const db = mongoose.connection;

//event listener
db.on('connected', () => {
    console.log("connected the database...");
});

db.on('disconnected', () => {
    console.log("Disconnected from database");
});

db.on('error', (e) => {
    console.log("Error raise during connection time.. " + e);
})


module.exports = db;










