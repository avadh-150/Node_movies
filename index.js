const express= require("express");
const app = express();

// mongoose file
const db=require("./db.js");

// mongoose Schema....
const Movie=require('./models/filmSchema.js');

// middleware 
// store the all data in the req.body
const bodyParseer=require("body-parser");
app.use(bodyParseer.json());

// Routing file Movie
const movies=require('./routes/movies.js');
app.use('/movies',movies);

app.get('/',(req,res)=>{
    res.send("<center><h1>HelloWelcome to our site,.....</h1></center>");
});


app.listen(3000,()=>console.log("Server Created.."));

