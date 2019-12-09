const express= require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const Person=require('./models/personschema');


const app=express();

app.use(bodyParser.json());


const db=require('./config/keys').mongoURI;

mongoose
    .connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {console.log("Database Connection Successful")})
    .catch(() => {console.log("Database Connection Failed")});

const person = new Person({
    name:"John",
    age:20
});

person.save((error) => {
    if(error)
        console.log(`Error has occured ${error}`);
    else
        console.log("Document Saved Successfully");

});

Person.find({},(error,documents)=>{
    console.log(documents);
});


