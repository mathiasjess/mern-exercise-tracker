const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Configuring server
require('dotenv').config();

const app = express();

const port = process.env.port || 5000 ;

//Configuring the middleware
app.use(cors());

//Will help us parse JSON since we are sending and receiving JSON
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {newURLParser:true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongoose DB connection established successfully");
})


const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

//Now if someone uses /exercises it loads the exerciseRouter
app.use('/exercises',exercisesRouter);
app.use('/users',userRouter);


app.listen(port, () => {
    console.log(`Sever is running on port: ${port}`);
})

