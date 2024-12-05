// import
const mongoose=require("mongoose");

// define the Url
mongoUrl="mongodb://localhost:27017/demo";

//create connection
mongoose.connect(mongoUrl);

//create connection object
const db = mongoose.connection;

//event listener
db.on('connected',()=>{
    console.log("connected the database...");
});

db.on('disconnected',()=>{
    console.log("Disconnected from database");
});

db.on('error',(e)=>{
console.log("Error raise during connection time.. " +e);
})


module.exports=db;









