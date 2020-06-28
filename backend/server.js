const express = require('express');
// const bodyParser = require('body-parser');  // Not needed in the new ver of Express
const cors = require('cors');
const mongoose = require('mongoose'); //added once initial server run //This will help us connect to our mongoDB database


require('dotenv').config();

const app = express();  //Creating our Express Server
const port = process.env.PORT || 5000;  //Creating our Express Server

//These are our middleware 
app.use(cors());
// app.use(bodyParser.json()); // Not needed in teh new ver of Express
app.use(express.json());    //This allow us to parse Json

//something we get from the MongoDB dashboard
const uri = process.env.ATLAS_URI; 

//making connection to where our database is stored
//mongoDB made updates to parsing and index..
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
); 
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Importing routes files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Allow us to use the files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


//This starts the server by listeing on a given port
app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});