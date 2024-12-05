const express= require("express");
const router = express.Router();


// mongoose Schema....
const Movie=require('./../models/filmSchema.js');

// Insertd
router.post('/', async (req,res)=>{
try{
        //stored extract
        //all req.body data is store on data valiable...
        const data = req.body;//assuming the request body contrain the Person data
   
    //create document
    const newMovie= new Movie(data);

    //save it in collection..
    const save =await newMovie.save();
    console.log("data inserted..");
    res.status(200).json(save);
}
    catch(err){
        console.log("error in sever internal...");
     res.status(500).json({error:'internal server error at insert time..'});
    }
});



// Displaying
// Using the get method to diplay the stored data to browser...
router.get('/', async (req,res)=>{
try{
    //display using find()
    const data = await Movie.find();

    console.log("displaying data");
    res.status(200).json(data);
}
catch(err){
        console.log("error in sever internal...");
     res.status(500).json({error:'internal server error at display time..'});
    }

});

// Searching at Url passing api parameters
router.get('/:cat', async (req,res)=>{

    try{
        //extract the field from Url parameters
        const cat =req.params.cat;

       const movi=['Action', 'Horror', 'Adventure', 'Drama','Romance','Comedy'];
       
       if (movi.includes(cat)) {
           console.log("Searching ..");
           const data = await Movie.find({category:cat}) 
            res.status(200).json(data);
       }
       else{
        console.log("Search category has been not found..");
        res.status(404).json({error:'Search category has been not found.'});
       }
    }
    catch(err){
        console.log("error in sever internal...");
     res.status(500).json({error:'internal server error at search time..'});
    }


});

// Update the Document using PUT method..
router.put('/:id', async (req,res)=>{// :id is parameter variable..
try{
     //extract the field from Url parameters
    const id =req.params.id;

    //all req.body data is store on data valiable...
    // get the data from req.body
    const data = req.body;

    //save the changes..
    const save= await Movie.findByIdAndUpdate(id,data,{
        new: true, // return the updated document
        runValidators: true,// check the all validators define in schema
    });
    console.log("Update apply");
    res.status(200).json(save);

    if(!save){
        return res.status(404).json({error:'not found.'});
    }
}
catch(err){
    console.log("error in sever internal...");
    res.status(500).json({error:'internal server error at Update time..'});
  
}
});


//delete the document...using DELETE Method ...
router.delete('/:id', async (req,res)=>{
    try{
        //extract the field from Url parameters
        const id = req.params.id;

        //delete
        const data = await Movie.findByIdAndDelete(id);

        console.log("delete..");
        res.status(200).json({MSG:'Deleted the item..'});
    }
    catch(err){
        console.log("error in sever internal...");
     res.status(500).json({error:'internal server error at search time..'});
    }
});

// exports router
module.exports=router;

