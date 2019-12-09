const express= require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());


const db=require('./config/keys').mongoURI;

mongoose
    .connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {console.log("Database Connection Successful")})
    .catch(() => {console.log("Database Connection Failed")});


